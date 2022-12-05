import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NavbarProfileCard } from "./NavbarProfileCard";
import type { INavbarProfileCardProps } from "./NavbarProfileCard";

export default {
  title: "Components/Navigation",
  component: NavbarProfileCard,
  args: {
    profilePicture:
      "https://pbs.twimg.com/profile_images/1456596901504094208/k3gqJ2e5_400x400.jpg",
    username: "@sebyss7",
    fullName: "Sebastian Semeniuc",
    onClick: action("clicked the profile card"),
  },
} as ComponentMeta<typeof NavbarProfileCard>;

export const UiNavbarProfileCard: ComponentStory<typeof NavbarProfileCard> = (
  args: INavbarProfileCardProps
) => <NavbarProfileCard {...args} />;
