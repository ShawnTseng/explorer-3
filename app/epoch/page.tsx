import beautify from "../_lib/beautify";
import BlockFrostApi from "../_lib/block-frost-api";
import DateTimePipe from "../_lib/date-fns";
import ProgressBar from "../_components/progress-bar";
import DateRange from "../_components/date-range";
import SliderBar from "../_components/slider";

export default async function Epoch() {
  const latestEpoch = await BlockFrostApi.epochsLatest();
  const a = Date.now() / 1000 - latestEpoch.start_time;
  const b = latestEpoch.end_time - latestEpoch.start_time;
  const progressValue = a / b * 100;

  const latestBlock = await BlockFrostApi.blocksLatest();
  // const nextEpoch = await BlockFrostApi.epochsNext(currentEpochNumber);
  // const previousEpoch = await BlockFrostApi.epochsPrevious(currentEpochNumber);

  return (
    <>
      <div className="flex justify-center gap-20">
        <div className="flex-1 p-4 max-w-md">
          <SliderBar label="Epoch" defaultValue={latestEpoch.epoch} />
        </div>
        <div className="flex-1 p-4 max-w-md">
          <DateRange
            startDateTime={DateTimePipe.toISO8601(latestEpoch.start_time)}
            endDateTime={DateTimePipe.toISO8601(latestEpoch.end_time)}
          />
        </div>
      </div>
      <p>Current Epoch: {latestEpoch.epoch}</p>
      <p>Start Time: {DateTimePipe.DateTimePipe1(latestEpoch.start_time)}</p>
      <p>End Time: {DateTimePipe.DateTimePipe1(latestEpoch.end_time)}</p>
      <p>First Block Time: {DateTimePipe.DateTimePipe1(latestEpoch.first_block_time)}</p>
      <p>Last Block Time: {DateTimePipe.DateTimePipe1(latestEpoch.last_block_time)}</p>
      <p>Block Count: {latestEpoch.block_count}</p>
      <p>Transaction Count: {latestEpoch.tx_count}</p>
      <p>Fee: {latestEpoch.fees}</p>
      <p>output: {parseFloat(latestEpoch.output) / 1000000}</p>
      <p>active stack: {latestEpoch.active_stake}</p>
      <div className="flex">
        <div className="flex-1 p-4">
          <SliderBar label="Epoch" defaultValue={latestEpoch.epoch} />
          <DateRange
            startDateTime={DateTimePipe.toISO8601(latestEpoch.start_time)}
            endDateTime={DateTimePipe.toISO8601(latestEpoch.end_time)}
          />
        </div>
        <div className="flex-1 p-4">
          <ProgressBar value={progressValue} />
        </div>
        <div className="flex-1 p-4">

        </div>
      </div>
      <pre>
        {beautify(latestEpoch)}
      </pre>
      <pre>
        {beautify(latestBlock)}
      </pre>
      {/* <p>Next Epoch:</p>
      <pre>
        {beautify(nextEpoch)}
      </pre>
      <p>Previous Epoch:</p>
      <pre>
        {beautify(previousEpoch)}
      </pre> */}
    </>
  );
}