import React from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { GOAL_CONTRACT_ADDRESS } from "../constants/addresses";
import { toast } from "./ui/use-toast";
import styles from "../styles/Home.module.css";

type Props = {
  taskId: number;
  task: string;
  isCompleted: boolean;
};

const TaskCard = ({ taskId, task, isCompleted }: Props) => {
  let backgroundColor = isCompleted ? "bg-green-300" : "";
  let borderColor = isCompleted ? "border-gray-900 dark:border-white" : "dark:border-white border-gray-800";
  let fontColor = isCompleted ? "text-green-900" : "text-black dark:text-white";

  return (
    <div
      className={`${backgroundColor} ${borderColor} border rounded-md p-5 mb-1`}>
      <div className="justify-between flex text-center items-center">
        <h3 className={`${fontColor} text-left`}>{task}</h3>
        {isCompleted ? (
          <h3 className={`${fontColor} mr-1`}>Completed</h3>
        ) : (
          <Web3Button
          className={styles.completeBtn}
            contractAddress={GOAL_CONTRACT_ADDRESS}
            action={(contract) => contract.call("completeTask", [taskId])}
            onSuccess={() => {
              toast({
                title: "Task completed",
                description: "Task completed",
              });
            }}>
            ✔
          </Web3Button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
