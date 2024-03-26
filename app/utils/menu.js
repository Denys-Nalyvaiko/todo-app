// import { list, check, todo, home } from "./Icons";

import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: <FaHome />,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: <FaListUl />,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: <FaCalendarCheck />,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <LuListTodo />,
    link: "/incomplete",
  },
];

export default menu;
