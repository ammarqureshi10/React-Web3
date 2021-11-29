import "./App.css"
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import Web3 from "web3";
import Cards from "./Cards";
import TransactonsTable from "./TransactionsTable";

export default function App() {
  const [blockNo, setBlockNo] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [blockMiner, setBlockMiner] = useState("");
  const [totalDifficulty, setTotalDifficulty] = useState("");

  const [isPause, setIsPause] = useState(false);
  useEffect(() => {
    const web3 = new Web3(
      "https://mainnet.infura.io/v3/0b293a89346f49939d411e2a44f94c65"
    );
    async function Go() {
      try {
        //console.log("web3 instance: ", web3);
        let blockno = await web3.eth.getBlockNumber();
        //console.log("blockNo: ", blockno);
        setBlockNo(blockno); //1. latest Block No

        // that latest block details
        let data = await web3.eth.getBlock(blockno);
        //console.log("data: ", data);
        setTotalTransactions(data.transactions.length); //2. total Transactions
        setBlockMiner(data.miner); //3. Block miner
        setTotalDifficulty(data.totalDifficulty); //4. block difficulty

      } catch (e) {
        console.log(e);
      }
    }
    Go();
      /* let interval = setInterval(() => {
      Go();
    }, 5000);
    return () => clearInterval(interval); */
  }, []);
  return (
    <div className="App" >
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
        isPause={isPause}
      /><br/>
      {isPause ? <Button variant="contained" color="inherit" onClick={()=> {
        setIsPause(!isPause)
      }}>
        Resume
      </Button> : <Button variant="outlined" color="secondary" onClick={()=> {
        setIsPause(!isPause)
      }}>
        Pause
      </Button>}
      {/* <TransactonsTable/> */}
    </div>
  );
}