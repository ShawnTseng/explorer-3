import { BlockFrostAPI } from '@blockfrost/blockfrost-js';

const BlockFrostApi = new BlockFrostAPI({
    projectId: process.env.BlockFrostProjectId || ''
});

export default BlockFrostApi;