"use client";

import { ChildrenProps } from "@/app/interfaces";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface DropdownButtonProps extends ChildrenProps {
  shownDropdown: boolean;
  toggleShownDropdown(): void;
}

const DropdownButton = ({
  children,
  shownDropdown,
  toggleShownDropdown,
}: DropdownButtonProps) => {
  return (
    <button
      type="button"
      className="flex items-center w-fit px-4 py-2 cursor-pointer bg-transparent"
      onClick={toggleShownDropdown}
    >
      {children}
      <span className="flex justify-center items-center ml-2">
        {shownDropdown ? (
          <FaChevronUp size="14" />
        ) : (
          <FaChevronDown size="14" />
        )}
      </span>
    </button>
  );
};

export default DropdownButton;
