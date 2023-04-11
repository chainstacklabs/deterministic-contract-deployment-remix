<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> • <br>
  • <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# Deploying a deterministic smart contract on Ethereum

This project shows how you how to use a method called deterministic deployment that allows for precomputing contract addresses before deployment. 

Read the full guide on the Chainstack Blog
* [Deploying a deterministic smart contract on Ethereum](https://chainstack.com/deploying-a-deterministic-contract-on-ethereum/)

## Project details

For this example, we built a simple contract factory for a `SimpleWallet` contract. The factory allows you to deploy the `SimpleWallet` at a predefined address. The `index.js` file holds a script in interact with the smart contract.

## Quickstart

Clone the repository:

```sh
git clone https://github.com/chainstacklabs/deterministic-contract-deployment-remix.git
```

Deploy an instance of the `SimpleWallet` contract with [Remix](https://remix.ethereum.org/).

Edit the `index.js` file to include the contract address, private key, and RPC endpoint.

```js
const PRIVATE_KEY = "<YOUR_PRIVATE_KEY>";

const simpleWalletAddress = "<YOUR_INSTANCE_ADDRESS>";

const provider = ethers.getDefaultProvider("<YOUR_GOERLI_PROVIDER>");
```

Install  dependencies:

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.

Run the script to interact:

```sh
node index
```

## Prerequisites

* Node.js: ^16.17.0— [install Node](https://nodejs.org/en/download/)
* A node RPC endpoint.

Deploy a node with Chainstack:

1. [Sign up with Chainstack](https://console.chainstack.com/user/account/create).  
1. [Deploy a node](https://docs.chainstack.com/platform/join-a-public-network).  
1. [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials).
