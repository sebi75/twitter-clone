import type { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import React from "react";

import { clsx } from "clsx";

type OmittedPropertiesUnion = "className" | "children" | "disabled";
export interface IDefaultButtonProps
  extends Omit<HTMLButtonElement, OmittedPropertiesUnion> {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const DefaultButton: FunctionComponent<IDefaultButtonProps> = ({
  className,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        `min-w-full rounded-full
        bg-primary p-4 text-white shadow-md
        transition-all duration-200 hover:bg-primary-dark ${
          disabled && "bg-primary-disabled hover:bg-primary-disabled"
        }`
      )}
    >
      {children}
    </button>
  );
};
