"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "../context/globalProvider";
import ChildrenProps from "../interfaces/ChildrenProps";

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
