import React, { useState } from "react";
import BaseDetails from "./details";
export { default as Summary } from "./summary";

type Props = {
  children: React.ReactNode;
  isOpen?: boolean;
  isOpenDefault?: boolean | undefined;
  className?: string;
  onChange?: Function;
  id?: string;
};

export type ContextType = {
  id?: string;
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export const Context = React.createContext<ContextType>({
  id: undefined,
  isOpen: false,
  setIsOpen: undefined
});

export function Details({
  children,
  isOpen,
  isOpenDefault,
  className,
  onChange,
  id: detailsId
}: Props) {
  const [id] = useState(generateId("Details"));
  const [_isOpen, _setIsOpen] = useState(
    isOpen !== undefined
      ? isOpen
      : isOpenDefault !== undefined
      ? isOpenDefault
      : false
  );

  const setIsOpen = (isOpen: boolean) => {
    _setIsOpen(isOpen);
    if (onChange) {
      onChange(isOpen);
    }
  };

  return (
    <Context.Provider
      value={{
        id,
        isOpen: isOpen !== undefined ? isOpen : _isOpen,
        setIsOpen
      }}
    >
      <BaseDetails className={className} detailsId={detailsId}>
        {children}
      </BaseDetails>
    </Context.Provider>
  );
}

let idCounter = 0;

export const generateId = (prefix: string): string => {
  idCounter++;
  return `${prefix}_${idCounter}`;
};
