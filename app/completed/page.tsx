"use client";

import Tasks from "../components/Tasks/Tasks";
import { useGlobalState } from "../context/GlobalProvider";

const Completed = () => {
  const { completedTasks }: any = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};

export default Completed;
