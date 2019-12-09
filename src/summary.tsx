import React from "react";
import { Context } from "./index";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string | undefined;
};

const KEYS = {
  ENTER: 13,
  SPACE: 32
};

export default function Summary({ id, children, className }: Props) {
  return (
    <Context.Consumer>
      {value => {
        return (
          <summary
            id={id}
            role="button"
            aria-expanded={value.isOpen}
            tabIndex={0}
            onClick={e => {
              e.preventDefault();
              if (!value.setIsOpen) return;
              value.setIsOpen(!value.isOpen);
            }}
            onKeyDown={e => {
              if ([KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode) !== -1) {
                e.preventDefault();
                if (!value.setIsOpen) return;
                value.setIsOpen(!value.isOpen);
              }
            }}
            className={className || undefined}
          >
            {children}
          </summary>
        );
      }}
    </Context.Consumer>
  );
}
