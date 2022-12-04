import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';

import { clsx } from 'clsx'

interface IButtonProps {
    className?: string;
    children?: ReactNode
}

export const Button: FunctionComponent<IButtonProps> = ({ className, children }) => {
    return (
        <button className={clsx(className, 'p-3 uppercase rounded-lg')}>
            {children}
        </button>
    )
}

