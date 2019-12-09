import React, { useState, useEffect } from "react";
import { Context, ContextType } from "./index";
import Summary from "./summary";

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
  detailsId?: string | undefined;
};

export default function Details({ detailsId, children, className }: Props) {
  let [isScriptingEnabled, setIsScriptingEnabled] = useState(false);
  useEffect(() => setIsScriptingEnabled(true), []);
  return (
    <Context.Consumer>
      {(value: ContextType) => {
        const kids = React.Children.toArray(children);
        const SummaryChildren = kids.filter(
          (kid: React.ReactNode) =>
            // @ts-ignore
            kid && kid.type && kid.type.toString() === Summary.toString()
        );
        const OtherChildren = kids.filter(
          (kid: React.ReactNode) =>
            // @ts-ignore
            (kid && !kid.type) ||
            // @ts-ignore
            (kid && kid.type && kid.type.toString() !== Summary.toString())
        );

        return (
          <details
            open={value.isOpen}
            role="group"
            className={className || undefined}
            id={detailsId}
          >
            {SummaryChildren}

            {!isScriptingEnabled || value.isOpen ? (
              <div>{OtherChildren}</div>
            ) : null}
          </details>
        );
      }}
    </Context.Consumer>
  );
}
