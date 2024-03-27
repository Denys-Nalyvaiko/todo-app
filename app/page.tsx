"use client";

import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "./context/GlobalProvider";

const Home = () => {
  const { tasks } = useGlobalState();

  return <Tasks tasks={tasks} title={"Tasks"} />;
};

export default Home;
