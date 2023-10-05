import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Web3Button } from "@thirdweb-dev/react";
import { GOAL_CONTRACT_ADDRESS } from "../constants/addresses";
import { useToast } from "./ui/use-toast";

type Props = {};

const AddTaskButton = (props: Props) => {
  const { toast } = useToast();
  const [task, setTask] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Dialog open={isMenuOpen} onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}>
      <DialogTrigger className="bg-lime-400 rounded-md p-2 h-1/3 w-1/3">
        Add task
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a task</DialogTitle>
          <DialogDescription>
            Add a task to your accountability list. All tasks must be completed
            to receive deposit back.
          </DialogDescription>
          <p>Task:</p>
          <input
            className="text-black rounded-md p-2 px-2"
            placeholder="Your task here."
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}></input>
          <Web3Button
            contractAddress={GOAL_CONTRACT_ADDRESS}
            action={(contract) => contract.call("createTask", [task])}
            onSuccess={() => {
              setTask("");
              setIsMenuOpen(false);
              toast({
                title: "Task added.",
                description: "Your new task has been added to your list.",
                duration: 9000,
              });
            }}>
            Add Task
          </Web3Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskButton;
