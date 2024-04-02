"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PiSignOutBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import avatar from "../../../public/images/avatar.jpg";
import menu from "@/app/utils/menu";
import { useGlobalState } from "@/app/context/GlobalProvider";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { username, collapsed, collapseMenu, logoutUser }: any =
    useGlobalState();

  const handleNavigationItemClick = (link: string) => {
    router.push(link);
  };

  return (
    <nav
      className={`nav_container max-md:mobile_nav_container text-colorGrey3 transition-all ${
        collapsed ? "max-md:translate-x-minus-custom" : "max-md:translate-x-0"
      }`}
    >
      <button
        type="button"
        className="toggle_border md:hidden absolute p-4 -right-10 top-8 bg-colorBg2 rounded-tr-lg rounded-br-2xl"
        onClick={collapseMenu}
      >
        {collapsed ? <FaBars size="18" /> : <FaArrowLeft size="18" />}
      </button>

      <div className="nav_profile text-colorGrey0">
        <div className="bg-colorBg3 border-borderColor2 nav_profile_overlay hover:border-borderColor2">
          <div className="shrink-0 inline-block overflow-hidden transition-all rounded-full cursor-pointer hover:scale-110">
            <Image
              src={avatar}
              alt="profile"
              width={60}
              height={60}
              priority={true}
              className="w-auto h-auto"
            />
          </div>
          <h3 className="text-sm flex flex-col relative z-1 capitalize">
            {username}
          </h3>
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
      <button
        type="button"
        className="signout_button text-gray-300 hover:text-gray-100"
        onClick={logoutUser}
      >
        <PiSignOutBold /> Sign out
      </button>
    </nav>
  );
};

export default Sidebar;
