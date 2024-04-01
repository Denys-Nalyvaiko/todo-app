"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { ChildrenProps } from "@/app/interfaces";
import { useGlobalState } from "../context/GlobalProvider";

const HomeLayout = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const { isLoggedIn }: any = useGlobalState();

  useLayoutEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [router, isLoggedIn]);

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default HomeLayout;
