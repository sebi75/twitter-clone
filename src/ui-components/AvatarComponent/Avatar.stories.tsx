import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";
import type { IAvatarProps } from "./Avatar";

export default {
  title: "Components/Avatars",
  component: Avatar,
  args: {
    pictureURL:
      "https://pbs.twimg.com/profile_images/1456596901504094208/k3gqJ2e5_400x400.jpg",
    width: "48px",
    height: "48px",
  },
} as ComponentMeta<typeof Avatar>;

export const UiUserAvatar: ComponentStory<typeof Avatar> = (
  args: IAvatarProps
) => <Avatar {...args} />;
