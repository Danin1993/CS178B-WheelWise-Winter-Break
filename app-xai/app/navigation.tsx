"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbWheel } from "react-icons/tb";
import classnames from "classnames";

const Nav = () => {
  // [1.1.0] Get Path Name
  const currentPath = usePathname();

  // [1.0.0] Array of links
  const links = [
    { lable: "dashbord", href: "/" },
    { lable: "leads", href: "/leads" },
  ];

  return (
    <nav className="flex space-x-6 border-b h-14 items-center p-5">
      <Link href="/">
        <TbWheel />
      </Link>
      <div className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-rose-500 hover:text-rose-900": link.href === currentPath,
              "text-zinc-500 hover:text-zinc-900": link.href !== currentPath,
              "transition-colors": true,
            })}
          >
            {link.lable}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
