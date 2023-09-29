const { ethers } = require("hardhat");

async function main() {
    // we can get all the addresses using hardhat 
  const [owner, from1, from2, from3] = await ethers.getSigners();
  const Coffee = await ethers.getContractFactory("Coffee");
  const contract = await Coffee.deploy(); //instance of contract

  await contract.waitForDeployment();
  
  const coffeeAddress = await contract.getAddress();
  console.log("Address of contract:", coffeeAddress);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });