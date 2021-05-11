import React from "react";

export function HiButton() {
  const aswe = {
    onClick: () => console.log("saokdaw"),
  };

  const okaew = <button {...aswe}>Hi From the Team!</button>;

  return okaew;
}
