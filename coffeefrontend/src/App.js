import abi from "./contracts/Coffee.json";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // Import ethers directly
import './App.css';
import Buy from "./components/Buy.js";
import Memos from "./components/Memos.js";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    // this code will be used in every dapp because it connects to the wallet metamask
    const connectWallet = async () => {
      const contractAddress = "0xd2Cb10497b5f605c7cb69b35735F626B66b714d9";
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          // Corrected method name from "requests" to "request"
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );

        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div className="App" style={{backgroundColor: '#fffdd0'}}>
      <Buy state={state} /> {/* Pass the state as a prop */}
      <Memos state={state} />
    </div>
  );
}

export default App;
