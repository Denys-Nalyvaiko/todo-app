"use client";

import { useGlobalState } from "../context/GlobalProvider";
import Tasks from "../components/Tasks/Tasks";

const Important = () => {
  const { importantTasks }: any = useGlobalState();

  return <Tasks title="Important Tasks" tasks={importantTasks} />;
};

export default Important;
