"use client";

import { ChildrenProps } from "@/app/interfaces";

interface DropdownItemProps extends ChildrenProps {
  onClick(): void;
}

const DropdownItem = ({ children, onClick }: DropdownItemProps) => {
  return (
    <li
      className="p-2 cursor-pointer flex items-center gap-2"
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
