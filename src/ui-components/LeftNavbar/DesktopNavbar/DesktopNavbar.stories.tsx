import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { DesktopNavbar } from "./DesktopNavbar";

export default {
  title: "Components/Navigation/Navbars",
  component: DesktopNavbar,
} as ComponentMeta<typeof DesktopNavbar>;

export const UiDesktopNavbar: ComponentStory<typeof DesktopNavbar> = (args) => (
  <div
    style={{
      //height to test that the navbar is fixed on the side when scrolling
      height: "3000px",
    }}
  >
    <DesktopNavbar {...args} />
  </div>
);
