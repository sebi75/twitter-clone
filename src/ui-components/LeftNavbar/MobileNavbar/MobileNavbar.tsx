import type { FunctionComponent } from "react";

import {
  leftBarData,
  IconVariantEnum,
  IconVariantToComponent,
} from "../config/menuData";
import { DefaultIconButton } from "../../";
import Image from "next/image";

export const MobileNavbar: FunctionComponent = () => {
  const mockProfilePicture =
    "https://pbs.twimg.com/profile_images/1456596901504094208/k3gqJ2e5_400x400.jpg";

  return (
    <div className="flex h-full flex-col items-center justify-between xl:hidden">
      <div className="flex flex-col justify-center">
        {leftBarData.map((item) => {
          const Icon = IconVariantToComponent[item.icon];
          const styles = item.hasDefaultStyle
            ? "h-6 w-7 text-text-color"
            : "h-6 w-7 text-primary";

          return (
            <DefaultIconButton
              key={item.icon}
              icon={<Icon className={styles} />}
              tooltipText={item.tooltipText}
              blueThemed={
                item.icon === IconVariantEnum.logo ||
                item.icon === IconVariantEnum.compose
              }
              className={`${
                item.icon === IconVariantEnum.logo && "self-start"
              } mb-2`}
            />
          );
        })}
      </div>

      <div className="relative bottom-5 xl:hidden">
        <DefaultIconButton
          icon={
            <div className="relative h-12 w-12">
              <Image
                fill
                className="rounded-full"
                src={mockProfilePicture}
                alt={mockProfilePicture.slice(7)}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};
