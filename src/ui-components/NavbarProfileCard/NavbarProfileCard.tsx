import React from "react";
import type { FunctionComponent, MouseEventHandler } from "react";
import Image from "next/image";

import { HiOutlineDotsHorizontal } from "react-icons/hi";

export interface INavbarProfileCardProps {
  fullName: string;
  username: string;
  profilePicture: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const NavbarProfileCard: FunctionComponent<INavbarProfileCardProps> = ({
  onClick,
  username,
  fullName,
  profilePicture,
}) => {
  return (
    /* card container layout */
    <div
      onClick={onClick}
      className="flex max-h-[68px] w-full cursor-pointer items-center justify-center rounded-full p-3 transition-all duration-200 hover:bg-opacity-shadow"
    >
      {/* card content layout */}
      <div className="flex items-center">
        {/* avatar */}
        <div className="relative mr-3 h-12 w-12">
          <Image
            fill
            className="rounded-full"
            src={profilePicture}
            alt={profilePicture.slice(7)}
          />
        </div>
        {/* middle content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-bold ml-0 text-base">{fullName}</h1>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
        {/* three dots icon */}
        <div>
          <HiOutlineDotsHorizontal className="ml-5 h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
