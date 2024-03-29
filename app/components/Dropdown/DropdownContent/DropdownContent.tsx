"use client";

import { ChildrenProps } from "@/app/interfaces";

interface DropdownContentProps extends ChildrenProps {
  shownDropdown: boolean;
}

const DropdownContent = ({ children, shownDropdown }: DropdownContentProps) => {
  return shownDropdown ? (
    <ul className="absolute flex flex-col items-start min-w-1/5 max-h-2/5 p-4 mt-2 overflow-auto z-10 bg-colorBg3 rounded-xl">
      {children}
    </ul>
  ) : (
    <></>
  );
};

export default DropdownContent;
