"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import printError from "../helpers/printError";
import token from "../helpers/tokenSetter";
import initialLoadingProps from "../utils/initialLoadingPorps";
import RegisterUserDto from "../data/dto/RegisterUserDto";
import LoginUserDto from "../data/dto/LoginUserDto";
import { ChildrenProps, IGlobalContext, ITask } from "../interfaces";
import { LS_KEYS } from "../constants";
import {
  createOneTask,
  deleteOneTask,
  fetchAllTasks,
  fetchOneTask,
  getCurrentUserService,
  loginUserService,
  logoutUserService,
  registerUserService,
  updateOneTask,
} from "../data/services";

export const GlobalContext = createContext<IGlobalContext | null>(null);

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const router = useRouter();

  const [username, setUsername] = useState("Username");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(initialLoadingProps);
  const [modalTask, setModalTask] = useState<ITask | undefined>();
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLoggedIn = (option: boolean) => {
    setIsLoggedIn(option);
  };

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

  const registerUser = async (userData: RegisterUserDto) => {
    setIsLoading((prev) => ({ ...prev, auth: true }));

    try {
      const user = await registerUserService(userData);
      await loginUser({ email: user.email, password: userData.password });
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, auth: false }));
    }
  };

  const loginUser = async (userData: LoginUserDto) => {
    setIsLoading((prev) => ({ ...prev, auth: true }));

    try {
      const user = await loginUserService(userData);
      token.set(user.access_token);

      setUsername(user.user.username);
      toggleLoggedIn(true);

      localStorage.setItem(LS_KEYS.ACCESS_TOKEN, user.access_token);

      router.push("/home");

      return user;
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, auth: false }));
    }
  };

  const logoutUser = async () => {
    setIsLoading((prev) => ({ ...prev, auth: true }));

    try {
      await logoutUserService();

      token.unset();
      toggleLoggedIn(false);
      router.push("/auth/login");

      localStorage.setItem(LS_KEYS.ACCESS_TOKEN, "");
    } catch (error) {
      printError(error);
    } finally {
      setIsLoading((prev) => ({ ...prev, auth: false }));
    }
  };

  const getCurrentUser = async () => {
    setIsLoading((prev) => ({ ...prev, auth: true }));
    const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN) ?? "";

    if (!accessToken) {
      setIsLoading((prev) => ({ ...prev, auth: false }));
      router.push("/");
      return;
    }

    token.set(accessToken);

    try {
      const user = await getCurrentUserService();
      token.set(user.access_token);

      setUsername(user.user.username);
      toggleLoggedIn(true);

      router.push("/home");
    } catch (error) {
      router.push("/auth/login");
    } finally {
      setIsLoading((prev) => ({ ...prev, auth: false }));
    }
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
        username,
        tasks,
        isLoggedIn,
        modalTask,
        isLoading,
        completedTasks,
        incompletedTasks,
        importantTasks,
        modal,
        collapsed,
        toggleLoggedIn,
        openModal,
        closeModal,
        collapseMenu,
        registerUser,
        loginUser,
        logoutUser,
        getCurrentUser,
        getAllTasks,
        getOneTask,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
