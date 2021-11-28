//import "./styles.css";
import React, { useEffect, useState } from "react";

import Web3 from "web3";
/* import SimplePaper from "./SimplePaper";
import Loader from "./Loader";
import DataLoading from "./DataLaoding"; */
import Cards from "./Cards";

export default function App() {
  const [blockNo, setBlockNo] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [blockMiner, setBlockMiner] = useState("");
  const [totalDifficulty, setTotalDifficulty] = useState("");

  const [isPause, setIsPause] = useState();
  useEffect(() => {
    const web3 = new Web3(
      "https://mainnet.infura.io/v3/0b293a89346f49939d411e2a44f94c65"
    );
    async function Go() {
      try {
        //console.log("web3 instance: ", web3);
        let blockno = await web3.eth.getBlockNumber();
        //console.log("blockNo: ", blockno);
        setBlockNo(blockno); // latest Block No

        // that latest block details
        let data = await web3.eth.getBlock(blockno);
        console.log("data: ", data);
        setTotalTransactions(data.transactions.length); //total Transactions

        setBlockMiner(data.miner); // Block miner
        setTotalDifficulty(data.totalDifficulty); //block difficulty
      } catch (e) {
        console.log(e);
      }
    }
    //Go();
     let interval = setInterval(() => {
      Go();
    }, 5000);
    return () => clearInterval(interval); 
  }, []);
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "-webkit-xxx-large",
          fontFamily: "cursive",
          background: "khaki",
          color: "firebrick",
          textAlign: "center"
        }}
      >
        React Web3
      </h1>
      <Cards
        blockNo={blockNo}
        totalTransactions={totalTransactions}
        blockMiner={blockMiner}
        totalDifficulty={totalDifficulty}
      />
    </div>
  );
}