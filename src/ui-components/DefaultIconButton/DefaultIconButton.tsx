import React from "react";
import type {
  FunctionComponent,
  ReactNode,
  DetailedHTMLProps,
  MouseEventHandler,
  ButtonHTMLAttributes,
} from "react";
import clsx from "clsx";

export interface IDefaultIconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const DefaultIconButton: FunctionComponent<IDefaultIconButtonProps> = ({
  children,
  icon,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        "flex flex-row items-center justify-center rounded-full p-3 transition-all duration-200 hover:bg-opacity-shadow"
      )}
    >
      <span className="mr-2 flex items-center justify-center">{icon}</span>
      {children}
    </button>
  );
};
