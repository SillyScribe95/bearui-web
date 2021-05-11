import React from "react";

export function BigButton() {
  const aswe = {
    onClick: () => console.log("saokdaw"),
  };

  const okaew = <button {...aswe}>Another big BUTTON me bedia</button>;

  return okaew;
}
