"use client";

import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchTaskProps {
  filter: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const SearchTask = ({ filter, onChange }: SearchTaskProps) => (
  <label
    htmlFor="search"
    className="flex relative justify-center items-center text-colorGrey2 max-w-72 max-sm:max-w-40 w-full"
  >
    <FaSearch className="absolute left-2" />
    <input
      type="text"
      name="search"
      id="search"
      value={filter}
      placeholder="Search Task"
      className="input_control border-2 border-solid border-borderColor2 rounded-xl pr-4 pl-8 py-2 w-full text-ellipsis"
      onChange={onChange}
    />
  </label>
);

export default SearchTask;
