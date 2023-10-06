
![image](https://github.com/aapsi/BuyMeCoffee/assets/39875852/90f1c9bb-6de5-4e1d-aa0b-9ddb5bab5e6b)

# Steps to run
-> Clone this repository
-> open it in vs code and run:
    npm install
-> To run the app:
    npm start    


# How to build

-> Create a folder BuyMeCoffe in VS code

-> Open terminal and install Hardhat
    npm install --save-dev hardhat
    npx hardhat init
    npm install --save-dev "hardhat@^2.17.4" "@nomicfoundation/hardhat-toolbox@^3.0.0"

-> Now write your smart contract under the contracts folder

-> Now, lets make changes to deploy.js under the scripts folder

-> first we will deploy our smart contract on hardhat node then later on testnet
    -> hardhat is a blockchain that works like local blockchain

-> Now we will check if our smart contract is working properly or not using deploy.js
    -> run the script using
        npx hardhat run scripts/deploy.js/
  

# Deploying smartcontract on testnet
-> make changes to the hardhat.config.js file
    -> add network

-> create a .env file to keep your keys and url protected 
    -> now add api_key, url and private_keys

-> now run the script
    npx hardhat run --network sepolia scripts/finaldeploy.js

# Building with frontend
-> create a react app
    -> npx create-react-app coffeefrontend
    -> to run the app
        -> cd .\coffeefrontend\
        -> npm start  

# ABI
-> when deployed a bridge is created that is the abi between smart contract and using it somewhere

-> in the artifacts/BuyMeCoffee.sol folder we have Coffee.json, thats the abi

-> now create a folder contracts in coffeefrontend and paste Coffee.json inside it

# Building frontend that interacts with smartcontract

-> build the frontend, add the wallet connection code, etc.

