import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { GOAL_CONTRACT_ADDRESS } from "../constants/addresses";
import { ethers } from "ethers";

type Props = {};

const DepositFunds = (props: Props) => {
  const [depositAmount, setDepositAmount] = useState(0);
  return (
    <div className="">
      <h3 className="text-xl">You currently do not have a goal set.</h3>
      <h4 className="text-md">
        Deposit funds that will be transferred back once you complete the task
        you set.
      </h4>
      <div className="m-3">
        <h3>Deposit Amount:</h3>
        <input
          placeholder="0.0"
          type="number"
          value={depositAmount}
          className="border bg-transparent text-xl rounded-md p-1"
          onChange={(e) => setDepositAmount(e.target.valueAsNumber)}
        />
      </div>
      <Web3Button
        contractAddress={GOAL_CONTRACT_ADDRESS}
        action={(contract) =>
          contract.call("depositFunds", [], {
            value: ethers.utils.parseEther(depositAmount.toString()),
          })
        }>
        Deposit to start
      </Web3Button>
    </div>
  );
};

export default DepositFunds;
