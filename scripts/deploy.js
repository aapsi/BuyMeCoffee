// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function getBalances(address) {
  // the following will get balance of account
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  // we will convert the value to ether
  return hre.ethers.utils.formatEther(balanceBitInt);
}

// fetch balance of address
async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance: `, await getBalances(address))
  }
}

// here we are checking if all our memos are fetching
async function consoleMemos(memos) {
  for(const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.address;
    const message = memo.message;

    console.log(`At ${timestamp}, name ${name}, address ${from}, message ${message} `);

  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const coffee = await hre.ethers.getContractFactory("BuyMeCoffee");
  const contract = await coffee.deploy(); // instance of our smart contract

  await contract.deployed();

  // this function will help us retrieve balance of the address we will pass in it
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
