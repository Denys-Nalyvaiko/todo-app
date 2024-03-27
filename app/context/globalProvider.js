"use client";

import { createContext, useContext, useState, useEffect } from "react";
import themes from "./themes";
import printError from "../helpers/printError";

import tasksData from "../data/tasksData.json";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const theme = themes[selectedTheme];

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    setIsLoading(true);

    try {
      const initialTasks = tasksData;
      setTasks(initialTasks);
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlobalContext.Provider value={{ theme, tasks }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
