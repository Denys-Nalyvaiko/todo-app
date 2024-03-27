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
    <nav className="nav_container text-colorGrey3">
      <div className="nav_profile text-colorGrey0">
        <div className="bg-colorBg3 border-borderColor2 nav_profile_overlay hover:border-borderColor2">
          <div className="shrink-0 inline-block overflow-hidden transition-all rounded-full cursor-pointer hover:scale-110">
            <Image src={avatar} alt="profile" width={70} height={70} />
          </div>
          <h1 className="text-sm flex flex-col relative z-1">
            <span>User</span>
            <span>Name</span>
          </h1>
        </div>
      </div>
      <ul>
        {menu.map(({ id, icon, link, title }) => (
          <li
            key={id}
            className={`nav_item ${
              pathname === link
                ? "text-green-300 bg-activeNavLink hover:text-green-300 hover:bg-activeNavLink"
                : "hover:bg-activeNavLinkHover hover:text-slate-300"
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
      <button type="button">Sign out</button>
    </nav>
  );
};

export default Sidebar;
