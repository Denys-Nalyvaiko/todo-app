"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ChildrenProps from "../interfaces/ChildrenProps";
import { GlobalProvider } from "../context/GlobalProvider";

const ContextProvider = ({ children }: ChildrenProps) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <GlobalProvider>
      <Toaster />
      {children}
    </GlobalProvider>
  );
};

export default ContextProvider;
