import { useContract, useContractRead } from "@thirdweb-dev/react";
import React from "react";
import { GOAL_CONTRACT_ADDRESS } from "../constants/addresses";
import { ethers } from "ethers";
import DepositFunds from "./DepositFunds";
import Tasks from "./Tasks";

type Props = {};

const AccountabilityCard = (props: Props) => {
  const { contract } = useContract(GOAL_CONTRACT_ADDRESS);

  const { data: depositAmount, isLoading: isDepositAmountLoading } =
    useContractRead(contract, "getDeposit");
  const { data: taskCount, isLoading: isTaskCountLoading } = useContractRead(
    contract,
    "getTaskCount",
  );

  return (
    <div className="fixed text-center justify-center border w-full sm:w-2/3 px-4 h-auto border-cyan-600 rounded-xl py-4">
        <h2 className="text-xl">Accountability App</h2>
      {!isDepositAmountLoading && !isTaskCountLoading ? (
        <div className="">
          {depositAmount == 0 && taskCount == 0 ? (
            <DepositFunds />
          ) : (
            <div>
              <p className="text-2xl">
                Goal amount: {ethers.utils.formatEther(depositAmount)} MATIC.
              </p>
              <h3 className="text-sm">
                Deposit amount will be transferred back when all tasks are
                completed
              </h3>
              <Tasks />
            </div>
          )}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default AccountabilityCard;
