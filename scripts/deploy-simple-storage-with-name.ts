import 'dotenv/config';
import Web3 from 'web3';
import HDWalletProvider from '@truffle/hdwallet-provider';

async function main() {
    const privateKey = process.env.PRIVATE_KEY;
    const alchemyProjectId = process.env.ALCHEMY_PROJECT_ID;

    if (!privateKey || !alchemyProjectId) {
        console.error("Private key or Infura project ID is missing in environment variables.");
        return;
    }

    const provider = new HDWalletProvider({
        privateKeys: [privateKey],  // Correctly formatted private key
        providerOrUrl: `https://zksync-sepolia.g.alchemy.com/v2/uunxF5ZdK9FAR-jZZDnOo88AAuLIY-Dn`
    });

    const web3 = new Web3();
    console.log(`Using account: ${provider.getAddresses()[0]}`);
    // Additional deployment logic here...
}

main().catch(console.error);
