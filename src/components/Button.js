import React from "react";

export function BigButton() {
  const aswe = {
    onClick: () => console.log("saokdaw"),
  };

  const okaew = <button {...aswe}>click asdij me bedia</button>;

  return okaew;
}
