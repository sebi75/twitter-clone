import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchInput } from "./SearchInput";
import type { ISearchInputProps } from "./SearchInput";

import { CgNotes } from "react-icons/cg";

export default {
  title: "Components/Inputs",
  component: SearchInput,
  args: {
    onClick: action("button clicked"),
    icon: <CgNotes width="25px" height="25px" />,
    tooltipText: "Twitter",
  },
} as ComponentMeta<typeof SearchInput>;

export const UiSearchInput: ComponentStory<typeof SearchInput> = (
  args: ISearchInputProps
) => <SearchInput {...args}>{"Twitter"}</SearchInput>;
