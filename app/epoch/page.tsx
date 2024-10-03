import beautify from "../_lib/beautify";
import BlockFrostApi from "../_lib/block-frost-api";
import DateTimePipe from "../_lib/date-fns";
import ProgressBar from "../_components/progress-bar";
import DateRange from "../_components/date-range";
import SliderBar from "../_components/slider";
import EpochClient from "./_components/epoch-client";

export default async function Epoch() {
  const latestBlock = await BlockFrostApi.blocksLatest();
  // const nextEpoch = await BlockFrostApi.epochsNext(currentEpochNumber);
  // const previousEpoch = await BlockFrostApi.epochsPrevious(currentEpochNumber);


  return (
    <>
      <EpochClient />      
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