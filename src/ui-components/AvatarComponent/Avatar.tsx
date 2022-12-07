import React from "react";
import type { FunctionComponent } from "react";

import Image from "next/image";

export interface IAvatarProps {
  pictureURL?: string;
  width?: string;
  height?: string;
}

export const Avatar: FunctionComponent<IAvatarProps> = ({
  pictureURL,
  height,
  width,
}) => {
  return (
    <div
      className="relative z-10 h-12 w-12 rounded-full transition-all duration-200"
      style={{
        width: `${width} !important`,
        height: `${height} !important`,
      }}
    >
      <Image
        fill
        className="z-0 rounded-full"
        src={pictureURL as string} // fix this assertion with default picture
        alt={(pictureURL as string).slice(7)}
      />
    </div>
  );
};
