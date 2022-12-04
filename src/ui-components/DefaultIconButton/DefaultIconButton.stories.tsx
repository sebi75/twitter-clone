import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DefaultIconButton } from "./DefaultIconButton";
import type { IDefaultIconButtonProps } from "./DefaultIconButton";

import { CgNotes } from "react-icons/cg";

export default {
  title: "Components/Buttons",
  component: DefaultIconButton,
  args: {
    onClick: action("button clicked"),
    icon: <CgNotes width="25px" height="25px" />,
  },
} as ComponentMeta<typeof DefaultIconButton>;

export const UiDefaultIconButtin: ComponentStory<typeof DefaultIconButton> = (
  args: IDefaultIconButtonProps
) => <DefaultIconButton {...args}>{"Twitter"}</DefaultIconButton>;
