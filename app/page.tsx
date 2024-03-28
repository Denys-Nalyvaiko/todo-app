"use client";

import Tasks from "./components/Tasks/Tasks";
import { useGlobalState } from "./context/GlobalProvider";

const Home = () => {
  const { tasks }: any = useGlobalState();

  return <Tasks tasks={tasks} title={"All Tasks"} />;
};

export default Home;
