"use client";

import { useGlobalState } from "../context/GlobalProvider";
import Tasks from "../components/Tasks/Tasks";

const Incomplete = () => {
  const { incompletedTasks }: any = useGlobalState();

  return <Tasks title="Incompleted Tasks" tasks={incompletedTasks} />;
};

export default Incomplete;
