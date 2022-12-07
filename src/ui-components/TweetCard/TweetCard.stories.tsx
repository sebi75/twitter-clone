import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { TweetCard } from "./TweetCard";
import type { ITweetCardProps } from "./TweetCard";

export default {
  title: "Components/Cards",
  component: TweetCard,
  args: {
    profilePicture:
      "https://pbs.twimg.com/profile_images/1456596901504094208/k3gqJ2e5_400x400.jpg",
  },
} as ComponentMeta<typeof TweetCard>;

export const UiTweetCard: ComponentStory<typeof TweetCard> = (
  args: ITweetCardProps
) => <TweetCard {...args} />;
