import type { FunctionComponent , MouseEventHandler, ReactNode } from 'react';
import React from 'react';

import { clsx } from 'clsx'

type OmittedPropertiesUnion = "className" | "children" | "disabled"
export interface IDefaultButtonProps extends Omit<HTMLButtonElement, OmittedPropertiesUnion> {
    className?: string;
    children: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean;
}

export const DefaultButton: FunctionComponent<IDefaultButtonProps> = ({ className, children, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={clsx(className, `p-4 text-white
        bg-primary rounded-full shadow-md hover:bg-primary-dark
        transition-all duration-200 min-w-full ${disabled && 'bg-primary-disabled hover:bg-primary-disabled'}`)}>
            {children}
        </button>
    )
}

