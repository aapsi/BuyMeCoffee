import  abi  from "./contracts/Coffee.json" 
// importing ABI is imp because it helps us to interact with frontend and it has all the details about the smart contract
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
const { providers } = ethers;
import './App.css';
import Buy from "./components/Buy.js";
import Memos from "./components/Memos.js";

function App() {
  // we created n object here otherwise we have to create a different state for everything
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xd2Cb10497b5f605c7cb69b35735F626B66b714d9"
      const contractAbi = abi.abi;

      try {

        const {ethereum} = window;

        // code for metamask connection
        if (ethereum) {
          const accounts = await ethereum.requests({method: "eth_requestAccounts", })
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );

        setState({provider, signer, contract});
      }

      catch(error) {
        console.log(error);
      }
    };

    connectWallet();

  }, []);

  return (
    <div className="App">
      {/* state is passed as props because it has the contract instance */}
      <Buy state></Buy>
      <Memos />
    </div>
  );
}

export default App;
