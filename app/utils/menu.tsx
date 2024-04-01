import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { IMenu } from "../interfaces";

const menu: IMenu[] = [
  {
    id: 1,
    title: "All Tasks",
    icon: <FaHome />,
    link: "/home",
  },
  {
    id: 2,
    title: "Important",
    icon: <FaListUl />,
    link: "/home/important",
  },
  {
    id: 3,
    title: "Completed",
    icon: <FaCalendarCheck />,
    link: "/home/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <LuListTodo />,
    link: "/home/incompleted",
  },
];

export default menu;
