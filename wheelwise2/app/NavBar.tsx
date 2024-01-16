"use client";

import Link from "next/link";
import { LiaCarSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Leads", href: "/leads" },
  ];

  return (
    <nav className="flex space-x-6 border-b p-5 mb-5 items-center">
      <Link href="/">
        <LiaCarSolid />
      </Link>
      <ul className="flex space-x-6 items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-rose-400": link.href === currentPath,
              "text-rose-500": link.href !== currentPath,
              "hover:text-rose-700 transition-colors": true,
            })}
            href={link.href}
          >
            {link.lable}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
