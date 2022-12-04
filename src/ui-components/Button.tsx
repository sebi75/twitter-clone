import type { FunctionComponent, ReactNode , MouseEventHandler } from 'react';
import React from 'react';

import { clsx } from 'clsx'

interface IButtonProps {
    className?: string;
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FunctionComponent<IButtonProps> = ({ className, children, onClick }) => {
    return (
        <button onClick={onClick} className={clsx(className, 'p-3 uppercase rounded-lg')}>
            {children}
        </button>
    )
}

