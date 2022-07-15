const { ethers } = require("ethers");
const { abi } = require("./SimpleWalletAbi");

const PRIVATE_KEY = "<YOUR_PRIVATE_KEY>";

const simpleWalletAddress = "<YOUR_INSTANCE_ADDRESS>";

const main = async () => {
  // Inits a new ethers object with a provider
  const provider = ethers.getDefaultProvider("<YOUR_GOERLI_PROVIDER>");

  // Inits a new ethers wallet to send transactions
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  // Inits a new SimpleWallet instance
  const simpleWallet = new ethers.Contract(simpleWalletAddress, abi, signer);

  // Withdraw funds from the contract
  try {
    console.log("Attempting to withdraw funds...");
    const receipt = await simpleWallet.withdraw();
    console.log("Funds withdrawn! :)");

    console.log(receipt);
  } catch (error) {
    console.log("Funds can't be withdrawn");
    console.error(error);
  }

  // Query the balance of the contract by calling
  // the getBalance function
  provider.getBalance(simpleWalletAddress).then((balance) => {
    // convert a currency unit from wei to ether
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(`Current balance in SimpleWallet: ${balanceInEth} ETH`);
  });
};

main();
