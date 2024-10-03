'use client';

import DateRange from "@/app/_components/date-range";
import ProgressBar from "@/app/_components/progress-bar";
import SliderBar from "@/app/_components/slider";
import beautify from "@/app/_lib/beautify";
import DateTimePipe from "@/app/_lib/date-fns";
import HttpClient from "@/app/_lib/http-client";
import { useEffect, useState } from "react";

const EpochClient = () => {
    const httpClient = HttpClient();
    const [latestEpoch, setLatestEpoch] = useState(0)
    const [currentEpoch, setCurrentEpoch] = useState();
    const [latestBlock, setLatestBlock] = useState();
    const [currentBlock, setCurrentBlock] = useState();
    const [isLoadingEpoch, setIsLoadingEpoch] = useState(true);
    const [isLoadingBlock, setIsLoadingBlock] = useState(true);

    const initEpoch = () => {
        httpClient.getLatestEpoch()
            .then(data => {
                setLatestEpoch(data);
                setCurrentEpoch(data);
                setIsLoadingEpoch(false);
            });
    }

    const initBlock = () => {
        httpClient.getLatestBlock()
            .then(data => {
                setLatestBlock(data);
                setCurrentBlock(data);
                setIsLoadingBlock(false);
            });
    }

    useEffect(() => {
        initEpoch();
        initBlock();
    }, []);

    if (isLoadingEpoch || isLoadingBlock) return <p>Loading...</p>
    if (!currentEpoch) return <p>No Current Epoch</p>
    if (!currentBlock) return <p>No Current Block</p>

    const a = Date.now() / 1000 - currentEpoch.start_time;
    const b = currentEpoch.end_time - currentEpoch.start_time;
    const progressValue = a / b * 100;


    const onEpochChange = async (value: number) => {
        httpClient.getEpoch(value)
            .then(data => {
                setCurrentEpoch(data);
            });
    }

    const onBlockChange = async (height: number) => {
        if (currentBlock && currentBlock.height === height) {
            return false;
        }

        if (!onBlockValidate(height.toString())) { return false };

        httpClient.getBlock(height)
            .then(data => {
                setCurrentBlock(data);
            });
    }

    const onBlockValidate = (value: string) => {
        const height = parseFloat(value);
        if (height < latestBlock.height - latestEpoch.block_count) {
            return false;
        }

        if (height > latestBlock.height) {
            return false;
        }
        return true;
    }

    return (
        <>
            <div className="flex justify-center gap-20">
                <div className="flex-1 p-4 max-w-md">
                    <SliderBar label="Epoch" value={currentEpoch.epoch} maxValue={latestEpoch.epoch} onChangeEnd={onEpochChange} />
                </div>
                <div className="flex-1 p-4 max-w-md">
                    <DateRange
                        startDateTime={DateTimePipe.toISO8601(currentEpoch.start_time)}
                        endDateTime={DateTimePipe.toISO8601(currentEpoch.end_time)}
                    />

                    <ProgressBar value={progressValue} />
                </div>
            </div>
            <div className="flex justify-center gap-20">
                <div className="flex-1 p-4 max-w-md">
                    <SliderBar label="Block" value={currentBlock.height} maxValue={latestBlock.height} minValue={latestBlock.height - latestEpoch.block_count + 1} onChangeEnd={onBlockChange} />
                </div>
                <div className="flex-1 p-4 max-w-md">
                    {/* <DateRange
                        startDateTime={DateTimePipe.toISO8601(currentEpoch.start_time)}
                        endDateTime={DateTimePipe.toISO8601(currentEpoch.end_time)}
                    /> */}
                </div>
            </div>
            <pre>
                {beautify(currentEpoch)}
            </pre>
            <pre>
                {beautify(currentBlock)}
            </pre>
        </>
    )
}

export default EpochClient