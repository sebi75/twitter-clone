import React from "react";
import type { FunctionComponent } from "react";

import { DefaultIconButton } from "../";
import {
  leftBarData,
  IconVariantEnum,
  IconVariantToComponent,
} from "./menuData";
import { DefaultButton } from "../";

export interface ILeftNavbarProps {
  showSomething: boolean;
}

export const LeftNavbar: FunctionComponent<ILeftNavbarProps> = () => {
  return (
    <div className="fixed flex h-screen max-w-[25%] flex-col justify-between">
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
                className={`${
                  item.icon === IconVariantEnum.logo && "self-start"
                } mb-2`}
              >
                {item.icon != IconVariantEnum.logo && item.tooltipText}{" "}
              </DefaultIconButton>
            );
          }
        })}
      </div>

      <div className="relative bottom-5">
        <h1>ProfileCardComponent</h1>
      </div>
    </div>
  );
};
