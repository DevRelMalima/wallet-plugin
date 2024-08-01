import '@matterlabs/hardhat-zksync-deploy';
import '@matterlabs/hardhat-zksync-solc';

module.exports = {
  solidity: "0.8.17",
  zkSyncDeploy: {
    zkSyncNetwork: 'sepolia',
    ethNetwork: 'sepolia'
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/uunxF5ZdK9FAR-jZZDnOo88AAuLIY-Dn',
      accounts: [`9673488150c05380c2d245a4b7926252132489ecc9f19fd3513e926993cce2d1`],
    }
  },
  typechain: {
    outDir: 'types'
  }
};























