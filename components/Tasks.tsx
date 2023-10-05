import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { GOAL_CONTRACT_ADDRESS } from "../constants/addresses";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";

type Props = {};

const Tasks = (props: Props) => {
  const { contract } = useContract(GOAL_CONTRACT_ADDRESS);
  const { data: taskCount, isLoading: isTaskCountLoading } = useContractRead(
    contract,
    "getTaskCount",
  );

  const [firstTask, setFirstTask] = useState("");

  const { data: tasks, isLoading: isTasksLoading } = useContractRead(
    contract,
    "getTasks",
  );

  return (
    <>
      <div className="p-4">
        {!isTaskCountLoading ? (
          taskCount != 0 ? (
            <div>
              {!isTasksLoading ? (
                tasks.map((task: any, index: number) => (
                  <TaskCard
                    key={index}
                    task={task}
                    taskId={index}
                    isCompleted={task.isCompleted}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          ) : (
            <div className="gap-5 py-3">
              <h3 className="text-xl font-bold">Create a your first task:</h3>
              <input
                className="rounded-md p-2 text-gray-900 w-3/4"
                placeholder="First task"
                type="text"
                value={firstTask}
                onChange={(e) => setFirstTask(e.target.value)}
              />
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <AddTaskButton />
    </>
  );
};

export default Tasks;
