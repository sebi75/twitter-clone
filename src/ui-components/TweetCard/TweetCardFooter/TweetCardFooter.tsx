import type { FunctionComponent } from "react";
import React from "react";

interface ITweetCardFooterProps {
  numOfLikes?: string;
  numOfRetweets?: string;
  numOfComments?: string;
}

export const TweetCardFooter: FunctionComponent<ITweetCardFooterProps> = ({
  numOfComments,
  numOfLikes,
  numOfRetweets,
}) => {
  return <div></div>;
};
