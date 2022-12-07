import React from "react";
import type { FunctionComponent } from "react";
import { Avatar } from "../AvatarComponent";

import { TweetCardHeader, TweetCardBody, TweetCardFooter } from "./";

export interface ITweetCardProps {
  profilePicture?: string;
  numOfLikes?: string;
  numOfComments?: string;
  numOfRetweets?: string;
  fullName?: string;
  username?: string;
  createdAt?: number;
}

export const TweetCard: FunctionComponent<ITweetCardProps> = ({
  fullName,
  username,
  createdAt,
  numOfLikes,
  numOfRetweets,
  numOfComments,
  profilePicture,
}) => {
  return (
    <div className="flex">
      {/* avatar */}
      <div className="mr-3">
        <Avatar pictureURL={profilePicture} />
      </div>
      {/* rest of tweet content */}
      <div>
        <TweetCardHeader
          fullName={fullName}
          username={username}
          createdAt={createdAt}
        />
        <TweetCardBody content={""} />
        <TweetCardFooter
          numOfLikes={numOfLikes}
          numOfRetweets={numOfRetweets}
          numOfComments={numOfComments}
        />
      </div>
    </div>
  );
};
