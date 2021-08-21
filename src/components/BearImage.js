import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  bearlog,
} from "../index";

export function BearImage({
  typevar,
  badgecolor,
  size = 40,
  width,
  height,
  style,
  image,
  ...sae
}) {
  let sacwe = {
    width: width,
    height: height,
    ...style,
  };

  let osdew = {
    size,
    src: image,
    style: sacwe,
    shape: "circle",
    ...sae,
  };

  bearlog.lug("___BearIamge tosdew ___", osdew);

  let endValue = "";
  switch (typevar) {
    //
    default:
      endValue = (
        //
        // "sadwqe";
        <img {...osdew} />
        // <Avatar {...osdew} />
      );
  }

  return endValue;
}
