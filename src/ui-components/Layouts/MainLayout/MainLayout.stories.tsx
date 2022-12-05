import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainLayout } from "./MainLayout";
import type { IMainLayoutProps } from "./MainLayout";

export default {
  title: "Components/Layouts",
  component: MainLayout,
  args: {
    showSomething: true,
  },
} as ComponentMeta<typeof MainLayout>;

export const UiLeftNavbar: ComponentStory<typeof MainLayout> = (
  args: IMainLayoutProps
) => (
  <MainLayout {...args}>
    <div>
      <p>Hello</p>
      <p>from</p>
      <p>main layout</p>
      <p>main content</p>
    </div>
  </MainLayout>
);
