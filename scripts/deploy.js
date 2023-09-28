// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.


const { ethers } = require("hardhat");

async function getBalances(address) {
  // the following will get balance of account
  const balanceBigInt = await ethers.provider.getBalance(address);
  // we will convert the value to ether
  return ethers.formatEther(balanceBigInt);
}

// fetch balance of address
async function cosoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}

// here we are checking if all our memos are fetching
async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}
async function main() {
    // we can get all the addresses using hardhat 
  const [owner, from1, from2, from3] = await ethers.getSigners();
  const Coffee = await ethers.getContractFactory("Coffee");
  const contract = await Coffee.deploy(); //instance of contract

  console.log("Address of contract:", contract.address);

    //  passing all the other addresses to the instance

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before buying chai");
  await cosoleBalances(addresses);

  const amount = { value: ethers.parseEther("0.001") };
    // we are connecting from1 to the contract address and then calling the buyCoffee function through it
  await contract.connect(from1).buyCoffee("from1", "Very nice chai", amount);
   // amount is the value we are sending through msg.value
  await contract.connect(from2).buyCoffee("from2", "Very nice course", amount);
   // this function will help us retrieve balance of the address we will pass in it
  await contract
    .connect(from3)
    .buyCoffee("from3", "Very nice information", amount);

  console.log("After buying chai");
  await cosoleBalances(addresses);

  const memos = await contract.getMemos();
  consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere 
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});