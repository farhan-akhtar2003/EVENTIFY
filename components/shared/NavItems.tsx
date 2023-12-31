"use client"; //USEPATHNAME IS CLIENT COMPONENT 

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {

  const pathname = usePathname();// HELPS TO KNOW ON WHICH PATH I.E ON WHICH LINK WE ARE ACTIVE 

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          // NAVITEMS IS BEEN IMPORTED FROM CONSTANTS > INDEX.TS
          // FOR EVERY HEADERLINK WE RETURN ==>
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"// IS USED TO MAKE ACTIVE PAGE PATH AS VIOLET IN COLOR
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
