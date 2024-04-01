"use client";

import { useEffect } from "react";
import { useGlobalState } from "@/app/context/GlobalProvider";
import Tasks from "@/app/components/Tasks/Tasks";

const Home = () => {
  const { tasks, isLoggedIn, getAllTasks }: any = useGlobalState();

  useEffect(() => {
    isLoggedIn && getAllTasks(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <Tasks tasks={tasks} title={"All Tasks"} />;
};

export default Home;
