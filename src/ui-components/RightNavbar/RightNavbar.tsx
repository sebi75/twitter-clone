import React from "react";
import type { FunctionComponent, ChangeEvent } from "react";

import { SearchInput } from "../";

export const RightNavbar: FunctionComponent = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="hidden flex-col bg-red-600 md:flex md:w-[290px] xl:w-[350px]">
      <SearchInput onChange={handleInputChange} />
      <h1>content</h1>
    </div>
  );
};
