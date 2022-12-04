import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { LeftNavbar } from "./LeftNavbar";
import type { ILeftNavbarProps } from "./LeftNavbar";

export default {
  title: "Components/Navigation",
  component: LeftNavbar,
  args: {
    showSomething: true,
  },
} as ComponentMeta<typeof LeftNavbar>;

export const UiLeftNavbar: ComponentStory<typeof LeftNavbar> = (
  args: ILeftNavbarProps
) => (
  <div
    style={{
      //height to test that the navbar is fixed on the side when scrolling
      height: "3000px",
    }}
  >
    <LeftNavbar {...args} />
  </div>
);
