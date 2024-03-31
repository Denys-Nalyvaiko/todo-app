"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import printError from "../helpers/printError";
import initialLoadingProps from "../utils/initialLoadingPorps";
import {
  ChildrenProps,
  IGlobalContext,
  IGlobalUpdateContext,
  ITask,
} from "../interfaces";
import {
  createOneTask,
  deleteOneTask,
  fetchAllTasks,
  fetchOneTask,
  updateOneTask,
} from "../data/services";

export const GlobalContext = createContext<IGlobalContext | null>(null);
export const GlobalUpdateContext = createContext<IGlobalUpdateContext | null>(
  null
);

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [modalTask, setModalTask] = useState<ITask | undefined>();
  const [isLoading, setIsLoading] = useState(initialLoadingProps);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    getAllTasks(undefined);
  }, []);

  const openModal = (id: number | null) => {
    const targetTask = tasks.find(({ id: taskId }) => taskId === id);
    setModal(true);

    setModalTask(targetTask);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed((prev) => !prev);
  };

  const getAllTasks = async (sortBy: string | undefined) => {
    setIsLoading((prev) => ({ ...prev, taskList: true }));

    try {
      const tasksData = await fetchAllTasks(sortBy);
      setTasks(tasksData);
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, taskList: false }));
    }
  };

  const getOneTask = async (taskId: number) => {
    setIsLoading((prev) => ({ ...prev, taskUpsert: true }));

    try {
      return await fetchOneTask(taskId);
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, taskUpsert: false }));
    }
  };

  const createTask = async (newTask: ITask) => {
    setIsLoading((prev) => ({ ...prev, taskUpsert: true }));

    try {
      const taskData = await createOneTask(newTask);
      setTasks((prev) => [{ ...taskData }, ...prev]);
      toast.success("Successfully created");
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, taskUpsert: false }));
    }
  };

  const updateTask = async (taskToUpdate: ITask) => {
    setIsLoading((prev) => ({ ...prev, taskUpsert: true }));

    try {
      const targetTask = tasks.find(
        ({ id: taskId }) => taskToUpdate.id === taskId
      );

      if (!targetTask) {
        throw new Error("Task not found");
      }

      await updateOneTask(targetTask.id, { ...targetTask, ...taskToUpdate });

      const updatedTasks = tasks.map((task) =>
        task.id !== targetTask.id ? task : { ...task, ...taskToUpdate }
      );

      setTasks(updatedTasks);
      toast.success("Successfully updated");
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, taskUpsert: false }));
    }
  };

  const deleteTask = async (taskId: number) => {
    setIsLoading((prev) => ({ ...prev, taskUpsert: true }));

    try {
      await deleteOneTask(taskId);

      setTasks((prev) => prev.filter(({ id }) => id !== taskId));
      toast.success("Successfully deleted");
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, taskUpsert: false }));
    }
  };

  const completedTasks = tasks.filter(
    ({ is_completed }) => is_completed === true
  );

  const incompletedTasks = tasks.filter(
    ({ is_completed }) => is_completed === false
  );

  const importantTasks = tasks.filter(
    ({ is_important }) => is_important === true
  );

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        modalTask,
        isLoading,
        completedTasks,
        incompletedTasks,
        importantTasks,
        modal,
        collapsed,
        openModal,
        closeModal,
        collapseMenu,
        getAllTasks,
        getOneTask,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
