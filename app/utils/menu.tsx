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
    link: "/",
  },
  {
    id: 2,
    title: "Important",
    icon: <FaListUl />,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed",
    icon: <FaCalendarCheck />,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <LuListTodo />,
    link: "/incompleted",
  },
];

export default menu;
