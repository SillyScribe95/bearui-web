import { Image } from "@chakra-ui/image";
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
  size = "100px",
  shape,
  width,
  height,
  style,
  image,
  ...sae
}) {
  ///
  let sacwe = {
    // width: width,
    // height: height,
    ...style,
  };

  switch (shape) {
    case "circle":
      sae["borderRadius"] = "full";
      break;
    // case "square":
    //   break;
  }

  let osdew = {
    size,
    boxSize: size,
    objectFit: "cover",
    src: image,
    style: sacwe,
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
        // <img {...osdew} />
        <Image {...osdew} />
        // <Avatar {...osdew} />
      );
  }

  return endValue;
}
