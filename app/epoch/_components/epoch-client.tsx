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
    const [currentEpoch, setCurrentEpoch] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const initData = () => {
        httpClient.getLatestEpoch()
            .then(data => {
                setLatestEpoch(data.epoch);
                setCurrentEpoch(data);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        initData();
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!currentEpoch) return <p>No Current Epoch</p>

    const a = Date.now() / 1000 - currentEpoch.start_time;
    const b = currentEpoch.end_time - currentEpoch.start_time;
    const progressValue = a / b * 100;


    const onChangeEnd = async (value: number) => {
        httpClient.getEpoch(value)
            .then(data => {
                setCurrentEpoch(data);
            });
    }

    return (
        <>
            <div className="flex justify-center gap-20">
                <div className="flex-1 p-4 max-w-md">
                    <SliderBar label="Epoch" defaultValue={currentEpoch.epoch} maxValue={latestEpoch} onChangeEnd={onChangeEnd} />
                </div>
                <div className="flex-1 p-4 max-w-md">
                    <DateRange
                        startDateTime={DateTimePipe.toISO8601(currentEpoch.start_time)}
                        endDateTime={DateTimePipe.toISO8601(currentEpoch.end_time)}
                    />

                    <ProgressBar value={progressValue} />
                </div>
            </div><p>Current Epoch: {currentEpoch.epoch}</p>
            <p>Start Time: {DateTimePipe.DateTimePipe1(currentEpoch.start_time)}</p>
            <p>End Time: {DateTimePipe.DateTimePipe1(currentEpoch.end_time)}</p>
            <p>First Block Time: {DateTimePipe.DateTimePipe1(currentEpoch.first_block_time)}</p>
            <p>Last Block Time: {DateTimePipe.DateTimePipe1(currentEpoch.last_block_time)}</p>
            <p>Block Count: {currentEpoch.block_count}</p>
            <p>Transaction Count: {currentEpoch.tx_count}</p>
            <p>Fee: {currentEpoch.fees}</p>
            <p>output: {parseFloat(currentEpoch.output) / 1000000}</p>
            <p>active stack: {currentEpoch.active_stake}</p>
            <pre>
                {beautify(currentEpoch)}
            </pre>
        </>
    )
}

export default EpochClient