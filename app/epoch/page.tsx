import beautify from "../_lib/beautify";
import BlockFrostApi from "../_lib/block-frost-api";

export default async function Epoch() {
  const latestEpochs = await BlockFrostApi.epochsLatest();

  return (
    <>
      <p>Epoch Page</p>
      <pre>
        {beautify(latestEpochs)}
      </pre>
    </>
  );
}