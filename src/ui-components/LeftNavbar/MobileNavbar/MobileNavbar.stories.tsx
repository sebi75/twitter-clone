import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { MobileNavbar } from "./MobileNavbar";

export default {
  title: "Components/Navigation/Navbars",
  component: MobileNavbar,
} as ComponentMeta<typeof MobileNavbar>;

export const UiMobileNavbar: ComponentStory<typeof MobileNavbar> = (args) => (
  <div
    style={{
      //height to test that the navbar is fixed on the side when scrolling
      height: "3000px",
    }}
  >
    <MobileNavbar {...args} />
  </div>
);
