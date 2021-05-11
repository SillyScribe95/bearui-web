import React from "react";

export function BeginButton() {
  const aswe = {
    onClick: () => console.log("saokdaw"),
  };

  const okaew = <button {...aswe}>Button Begin Team!</button>;

  return okaew;
}
