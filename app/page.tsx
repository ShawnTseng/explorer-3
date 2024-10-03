import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

export default async function Home() {
  const API = new BlockFrostAPI({
    projectId: process.env.BlockFrostProjectId || ''
  });

  // const latestBlock = await API.blocksLatest();
  const latestBlock = { "time": 1727924360, "height": 2748451, "hash": "5f6dd00f0817696a2707188832fb6316155bb3b1595e83baebaf3ba249071360", "slot": 72241160, "epoch": 171, "epoch_slot": 10760, "slot_leader": "pool1tlpsswg9ev0frsrcgukpz5nsw5gcetldunwg6clrvxyz5sn2xaz", "size": 669, "tx_count": 1, "output": "18531794", "fees": "489638", "block_vrf": "vrf_vk1a6qwkvyw3j4g0xe4g7qv9mc6aewpgrpzuy85twqxg9sv62hrsrvs3dhg2n", "op_cert": "3f3772e5fc15d046c2be81df6604b38c9a573686aaabb492d08705cd86f8a8ea", "op_cert_counter": "5", "previous_block": "ac9b59546b701e6d31497df1ac062e613da51963e7b1822d2fb37a817c92a30b", "next_block": null, "confirmations": 0 };

  const beautify = (data: object) => {
    return JSON.stringify(data, null, '\t');
  }

  return (
    <div>
      <pre>
        {beautify(latestBlock)}
      </pre>
    </div>
  );
}
