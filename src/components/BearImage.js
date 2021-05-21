import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared";
import { Avatar } from "antd";

export function BearImage({
  typevar,
  badgecolor,
  imagesize = 40,
  width,
  height,
  style,
  imagevar = "https://bit.ly/tioluwani-kolawole",
  ...sae
}) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"

  let sacwe = {
    // width: width,
    // height: height,
    ...style,
  };

  const okasdew = {
    htmlWidth: imagesize,
    htmlHeight: imagesize,
  };

  imagesize =
    //
    35;
  // imagesize

  let osdew = {
    src: imagevar,
    size: imagesize,
    style: sacwe,
    shape: "circle",
    ...sae,
  };

  logs.logga("___BearIamge tosdew ___", osdew);

  let endValue = "";
  switch (typevar) {
    case "chakra":
      const cxvkf = {
        borderColor: "papayawhip",
        bg: badgecolor,
        // boxSize: "1.25em",
      };

      // endValue = badgecolor ? (
      //   <ChakAva {...osdew}>
      //     <AvatarBadge {...cxvkf} />
      //   </ChakAva>
      // ) : (
      //   <ChakAva {...osdew} />
      // );
      break;

    default:
      endValue = (
        //
        // "sadwqe";
        <Avatar {...osdew} />
      );
  }

  return endValue;
}
