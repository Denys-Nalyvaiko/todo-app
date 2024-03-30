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
    id: "title_asc",
    title: "Title asc",
    icon: <IoArrowUpCircleOutline />,
  },
  {
    id: "title_desc",
    title: "Title desc",
    icon: <IoArrowDownCircleOutline />,
  },
  {
    id: "date_asc",
    title: "Date asc",
    icon: <IoArrowUpCircleOutline />,
  },
  {
    id: "date_desc",
    title: "Date desc",
    icon: <IoArrowDownCircleOutline />,
  },
];

export default sortingMenu;
