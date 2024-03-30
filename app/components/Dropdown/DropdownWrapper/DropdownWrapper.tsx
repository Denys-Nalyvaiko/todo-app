"use client";

import { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import sortingMenu from "@/app/utils/sortingMenu";
import DropdownItem from "../DropdownItem/DropdownItem";
import { useGlobalState } from "@/app/context/GlobalProvider";

interface DropdownWrapperProps {
  buttonText: string;
}

const DropdownWrapper = ({ buttonText }: DropdownWrapperProps) => {
  const [shownDropdown, setShownDropdown] = useState(false);
  const [currentOrder, setCurrentOrder] = useState("original");

  const { getAllTasks }: any = useGlobalState();

  const toggleShownDropdown = () => {
    setShownDropdown((prev) => !prev);
  };

  const handleSortTasksButtonClick = (sortById: string) => {
    getAllTasks(sortById);
    setCurrentOrder(sortById);
    toggleShownDropdown();
  };

  return (
    <div className="relative min-w-44 -mb-4 text-colorGrey2">
      <DropdownButton
        shownDropdown={shownDropdown}
        toggleShownDropdown={toggleShownDropdown}
      >
        {buttonText}
      </DropdownButton>
      <DropdownContent shownDropdown={shownDropdown}>
        {sortingMenu.map(({ id, title, icon }) => (
          <DropdownItem
            key={id}
            id={id}
            currentOrder={currentOrder}
            onClick={() => {
              handleSortTasksButtonClick(id);
            }}
          >
            <span>{icon}</span> {title}
          </DropdownItem>
        ))}
      </DropdownContent>
    </div>
  );
};

export default DropdownWrapper;
