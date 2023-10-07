import abi from "./contracts/Coffee.json";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // Import ethers directly
import './App.css';
import Buy from "./components/Buy.js";
import Memos from "./components/Memos.js";
import Coffee from "./components/coffee/Coffee";
import img from "./asset/bg.jpg";

function App() {

  // app background 
  const pageStyles = {
    backgroundImage: `url(${img})`, // Replace with the path to your image
    backgroundSize: 'cover', // Ensures the image covers the entire viewport
    minHeight: '100vh', // Ensures the image covers the entire viewport height
  };


  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");

  useEffect(() => {
    // this code will be used in every dapp because it connects to the wallet metamask
    const connectWallet = async () => {
      const contractAddress = "0xd2Cb10497b5f605c7cb69b35735F626B66b714d9";
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);

  return (
    <div className="App" style={pageStyles}>
      <nav style={{ background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>BUY ME A COFFEE</nav>
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px", color: "white" }}
      >
        <small style={{ marginTop: "px", marginLeft: "5px", color: "white" }}>Connected Account - {account}</small>
      </p>
      <div className="box">
        <Buy state={state} /> {/* Pass the state as a prop */}
        <Coffee/>
      </div>

      <Memos state={state} />
    </div>
  );
}

export default App;
