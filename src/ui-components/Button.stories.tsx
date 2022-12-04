import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions" 
import { Button } from './Button';

export default {
    title: "Components/Button",
    component: Button,
    args: {
        onClick: action("button clicked")
    }
} as ComponentMeta<typeof Button>

export const UiButton: ComponentStory<typeof Button> = (args) => <Button {...args}>{"Hello Storybook"}</Button>