import React from "react";
import type { FunctionComponent, ReactNode } from "react";

interface IFeedLayoutProps {
  children: ReactNode;
}

export const FeedLayout: FunctionComponent<IFeedLayoutProps> = ({
  children,
}) => {
  return (
    <div className="w-full max-w-[600px] border-r border-l border-opacity-shadow">
      {children}
    </div>
  );
};
