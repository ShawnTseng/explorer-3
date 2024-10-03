enum Network {
    Mainnet = 'https://cardano-mainnet.blockfrost.io/api/v0/',
    Preprod = 'https://cardano-preprod.blockfrost.io/api/v0/',
    Preview = 'https://cardano-preview.blockfrost.io/api/v0/'
}

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

    return { getEpoch, getLatestEpoch };
}

export default HttpClient;