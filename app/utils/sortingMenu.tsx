import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { ISortingMenu } from "../interfaces";

const sortingMenu: ISortingMenu[] = [
  {
    id: "original",
    title: "Original",
    icon: <FaRegCheckCircle size="14" />,
  },
  {
    id: "titleAsc",
    title: "Title asc",
    icon: <IoArrowUpCircleOutline />,
  },
  {
    id: "titleDesc",
    title: "Title desc",
    icon: <IoArrowDownCircleOutline />,
  },
  {
    id: "dateAsc",
    title: "Date asc",
    icon: <IoArrowUpCircleOutline />,
  },
  {
    id: "dateDesc",
    title: "Date desc",
    icon: <IoArrowDownCircleOutline />,
  },
];

export default sortingMenu;
