enum Network {
    Mainnet = 'https://cardano-mainnet.blockfrost.io/api/v0',
    Preprod = 'https://cardano-preprod.blockfrost.io/api/v0',
    Preview = 'https://cardano-preview.blockfrost.io/api/v0'
}

// TODO:remove or hide token
const projectId = 'mainnetu5nmITJybEaNjj01WHytbovIcOAW8HBH';

const HttpClient = () => {
    const network = Network.Mainnet;

    const getLatestEpoch = async () => {
        const response = await fetch(`${network}/epochs/latest`, { headers: { Project_id: projectId } });
        const data = await response.json();
        return data;
    }

    const getEpoch = async (value: number) => {
        const response = await fetch(`${network}/epochs/${value}`, { headers: { Project_id: projectId } });
        const data = await response.json();
        return data;
    }

    const getLatestBlock = async () => {
        const response = await fetch(`${network}/blocks/latest`, { headers: { Project_id: projectId } });
        const data = await response.json();
        return data;
    }

    const getBlock = async (height: number) => {
        const response = await fetch(`${network}/blocks/${height}`, { headers: { Project_id: projectId } });
        const data = await response.json();
        return data;
    }

    return { getLatestEpoch, getEpoch, getLatestBlock, getBlock };
}

export default HttpClient;