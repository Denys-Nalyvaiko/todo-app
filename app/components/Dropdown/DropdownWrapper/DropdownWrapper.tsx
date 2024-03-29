"use client";

import { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import sortingMenu from "@/app/utils/sortingMenu";
import DropdownItem from "../DropdownItem/DropdownItem";

interface DropdownWrapperProps {
  buttonText: string;
}

const DropdownWrapper = ({ buttonText }: DropdownWrapperProps) => {
  const [shownDropdown, setShownDropdown] = useState(false);

  const toggleShownDropdown = () => {
    setShownDropdown((prev) => !prev);
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
          <DropdownItem key={id} onClick={() => {}}>
            <span>{icon}</span> {title}
          </DropdownItem>
        ))}
      </DropdownContent>
    </div>
  );
};

export default DropdownWrapper;
