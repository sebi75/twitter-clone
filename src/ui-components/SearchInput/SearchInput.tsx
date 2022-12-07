import React, { useCallback, useRef, useState } from "react";
import type { FunctionComponent, ChangeEventHandler } from "react";

import { BsSearch } from "react-icons/bs";

export interface ISearchInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput: FunctionComponent<ISearchInputProps> = ({
  onChange,
}) => {
  const [hasElementFocus, setHasElementFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleElementClick = () => {
    if (!hasElementFocus) {
      document.addEventListener("click", handleOutsideClick, false);
      inputRef.current?.focus();
      setHasElementFocus(true);
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
    }
  };

  const handleOutsideClick = (e: any) => {
    if (!elementRef.current?.contains(e.target)) {
      setHasElementFocus(false);
    }
  };

  return (
    <div
      className={`flex items-center rounded-full ${
        hasElementFocus
          ? "border border-primary bg-white"
          : "border border-transparent bg-primary-light-opacity"
      } transition-all duration-200`}
      onClick={handleElementClick}
      ref={elementRef}
    >
      <BsSearch
        className={`ml-5 h-4 w-4 ${
          hasElementFocus ? "text-primary" : "text-text-color"
        }`}
      />
      <input
        placeholder="Search Twitter"
        className="box-border w-full bg-transparent p-3 text-left text-sm outline-0 focus:border-none"
        type="text"
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};
