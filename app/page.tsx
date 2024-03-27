"use client";

import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "./context/GlobalProvider.js";

const Home = () => {
  const { tasks } = useGlobalState();

  return <Tasks tasks={tasks} title={"All Tasks"} />;
};

export default Home;
