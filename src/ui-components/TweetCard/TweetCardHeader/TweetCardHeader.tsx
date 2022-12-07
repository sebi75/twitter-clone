import type { FunctionComponent } from "react";
import React from "react";

interface ITweetCardHeaderProps {
  fullName?: string;
  username?: string;
  createdAt?: number;
}

export const TweetCardHeader: FunctionComponent<ITweetCardHeaderProps> = ({
  createdAt,
  fullName,
  username,
}) => {
  return <div></div>;
};
