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
  children?: ReactNode;
  className?: string;
  tooltipText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const DefaultIconButton: FunctionComponent<IDefaultIconButtonProps> = ({
  icon,
  children,
  className,
  tooltipText,
  ...rest
}) => {
  return (
    <div>
      <button
        {...rest}
        className={clsx(
          className,
          "flex flex-row items-center justify-center rounded-full p-4 text-xl transition-all duration-200 hover:bg-opacity-shadow"
        )}
      >
        <span
          className={`${children && "mr-2"} flex items-center justify-center`}
        >
          {icon}
        </span>
        {children && children}
      </button>
    </div>
  );
};
