import React, {
  //
  useState,
  useContext,
} from "react";
import { BearLink } from "./BearLink";

export function BearDiv({
  //
  obj,
  flexTrue,
  vertAlign,
  typeDiv,
  fontSize,
  linkvar,
  linkConfig,
  style,
  ...args
}) {
  //
  //
  const osdakew = flexTrue && {
    display: "flex",
  };

  const zxcsd = vertAlign && {
    alignItems: "center",
    justifyContent: "center",
  };

  const gibjr = {
    fontSize: fontSize,
    ...osdakew,
    ...zxcsd,
    ...style,
  };

  const oksde = {
    style: gibjr,
    ...args,
  };

  let endo = "";
  switch (typeDiv) {
    case "span":
      endo = <span {...oksde}>{obj}</span>;
      break;
    default:
      endo = <div {...oksde}>{obj}</div>;
  }

  // 1link
  const okdas = {
    toVar: linkvar,
    textvar: endo,
    ...linkConfig,
  };

  const linkTrue = linkvar;

  const xczaeewqa =
    //
    //
    linkTrue ? <BearLink {...okdas} /> : endo;

  return xczaeewqa;
}
