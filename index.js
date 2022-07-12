const { ethers } = require("ethers");
const { abi } = require("./SimpleWalletAbi");

const PRIVATE_KEY = "<YOUR_PRIVATE_KEY>";

const simpleWalletAddress = "<YOUR_INSTANCE_ADDRESS>";

// Query the balance of the contract by calling
// the getBalance function
const getBalance = async (simpleWallet) => {
  const result = await simpleWallet.callStatic.getBalance();
  console.log(
    "Current Balance in SimpleWallet: ",
    ethers.utils.formatEther(result),
    " $RinkebyETH"
  );
};

const main = async () => {
  // Inits a new ethers object with a provider
  const provider = ethers.getDefaultProvider("<YOUR_RINKEBY_PROVIDER>");

  // Inits a new ethers wallet to send transactions
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  // Inits a new SimpleWallet instance
  const simpleWallet = new ethers.Contract(simpleWalletAddress, abi, signer);

  await getBalance(simpleWallet);

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
};

main();
