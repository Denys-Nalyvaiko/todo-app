"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import { ChildrenProps } from "@/app/interfaces";
import { useGlobalState } from "../context/GlobalProvider";

const HomeLayout = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const { isLoggedIn, isLoading }: any = useGlobalState();

  useLayoutEffect(() => {
    console.log("IS LOGGED IN: ", isLoggedIn);
    console.log("ISLOADING: ", isLoading.auth);

    if (!isLoggedIn && !isLoading.auth) {
      router.push("/auth/login");
      return;
    }
  }, [router, isLoggedIn, isLoading]);

  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default HomeLayout;
