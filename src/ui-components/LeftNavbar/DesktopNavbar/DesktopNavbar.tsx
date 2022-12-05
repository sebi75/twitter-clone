import React from "react";
import type { FunctionComponent } from "react";

import {
  leftBarData,
  IconVariantEnum,
  IconVariantToComponent,
} from "../config/menuData";
import { DefaultButton, DefaultIconButton, NavbarProfileCard } from "../../";

export const DesktopNavbar: FunctionComponent = () => {
  const mockFullname = "Sebastian Semeniuc";
  const mockUsername = "@sebyss7";
  const mockProfilePicture =
    "https://pbs.twimg.com/profile_images/1456596901504094208/k3gqJ2e5_400x400.jpg";

  return (
    <div className="hidden h-full flex-col justify-between xl:flex">
      <div className="flex flex-col justify-center">
        {leftBarData.map((item) => {
          const Icon = IconVariantToComponent[item.icon];
          const styles = item.hasDefaultStyle
            ? "h-6 w-7 text-text-color"
            : "h-6 w-7 text-primary";
          if (item.icon === IconVariantEnum.compose) {
            return (
              <DefaultButton
                className="mt-4"
                onClick={() => console.log("tweet")}
                key={item.tooltipText}
              >
                {item.tooltipText}
              </DefaultButton>
            );
          } else {
            return (
              <DefaultIconButton
                key={item.icon}
                icon={<Icon className={styles} />}
                tooltipText={item.tooltipText}
                blueThemed={item.icon === IconVariantEnum.logo}
                className={`${
                  item.icon === IconVariantEnum.logo && "self-start"
                } mb-2`}
              >
                {item.icon != IconVariantEnum.logo && item.tooltipText}
              </DefaultIconButton>
            );
          }
        })}
      </div>

      <div className="mb-5 hidden xl:flex">
        <NavbarProfileCard
          fullName={mockFullname}
          profilePicture={mockProfilePicture}
          username={mockUsername}
        />
      </div>
    </div>
  );
};
