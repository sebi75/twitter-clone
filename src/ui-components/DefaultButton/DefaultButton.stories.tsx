import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions" 
import { DefaultButton } from './DefaultButton';
import type { IDefaultButtonProps } from './DefaultButton'

export default {
    title: "Components/Button",
    component: DefaultButton,
    args: {
        onClick: action("button clicked"),
        className: "bg-red-500"
    }
} as ComponentMeta<typeof DefaultButton>

export const UiDefaultButton: ComponentStory<typeof DefaultButton> = (args: IDefaultButtonProps) => <DefaultButton {...args}>{"Twitter"}</DefaultButton>