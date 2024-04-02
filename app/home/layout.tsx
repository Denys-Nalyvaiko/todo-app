"use client";

import Sidebar from "@/app/components/Sidebar/Sidebar";
import { ChildrenProps } from "@/app/interfaces";

const HomeLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default HomeLayout;
