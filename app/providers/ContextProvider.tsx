"use client";

import { useEffect, useState } from "react";
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

  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
