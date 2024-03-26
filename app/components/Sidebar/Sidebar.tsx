"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../public/images/avatar.jpg";
import menu from "@/app/utils/menu";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigationItemClick = (link: string) => {
    router.push(link);
  };

  return (
    <nav className="relative w-60 bg-colorBg2 rounded border-solid border-borderColor2">
      <div>
        <div>
          <Image src={avatar} alt="profile" width={70} height={70} />
        </div>
        <h1>
          <span>User</span>
          <span>Name</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map(({ id, icon, link, title }) => (
          <li
            key={id}
            className={`nav-item flex ${
              pathname === link ? "text-green-300" : ""
            }`}
            onClick={() => {
              handleNavigationItemClick(link);
            }}
          >
            {icon}
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
