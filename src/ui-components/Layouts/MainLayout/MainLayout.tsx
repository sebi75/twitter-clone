import React from "react";
import type { FunctionComponent, ReactNode } from "react";
import { LeftNavbar, RightNavbar } from "../../";
import { FeedLayout } from "../";

export interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FunctionComponent<IMainLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex h-screen w-full">
      <header className="flex h-full w-[40%] justify-center">
        <LeftNavbar />
      </header>
      <div className="flex h-full w-full gap-8">
        <FeedLayout>{children}</FeedLayout>
        <RightNavbar />
      </div>
    </div>
  );
};
