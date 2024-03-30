"use client";

import { ChildrenProps } from "@/app/interfaces";

interface DropdownItemProps extends ChildrenProps {
  id: string;
  currentOrder: string;
  onClick(): void;
}

const DropdownItem = ({
  children,
  id,
  currentOrder,
  onClick,
}: DropdownItemProps) => {
  return (
    <li
      className={`cursor-pointer w-full transition-all hover:text-colorGrey0 ${
        currentOrder === id ? "text-colorGrey0" : ""
      }`}
    >
      <button
        type="button"
        className="w-full h-full flex items-center gap-2 p-2 bg-transparent"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};

export default DropdownItem;
