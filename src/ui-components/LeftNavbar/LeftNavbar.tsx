import React from "react";
import type { FunctionComponent } from "react";

import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export interface ILeftNavbarProps {
  showSomething?: boolean;
}

export const LeftNavbar: FunctionComponent<ILeftNavbarProps> = () => {
  return (
    <div className="fixed h-screen">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};
