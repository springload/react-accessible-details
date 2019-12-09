import React from "react";
export { default as Summary } from "./summary";
declare type Props = {
    children: React.ReactNode;
    isOpen?: boolean;
    isOpenDefault?: boolean | undefined;
    className?: string;
    onChange?: Function;
    id?: string;
};
export declare type ContextType = {
    id?: string;
    isOpen: boolean;
    setIsOpen?: (isOpen: boolean) => void;
};
export declare const Context: React.Context<ContextType>;
export declare function Details({ children, isOpen, isOpenDefault, className, onChange, id: detailsId }: Props): JSX.Element;
export declare const generateId: (prefix: string) => string;
