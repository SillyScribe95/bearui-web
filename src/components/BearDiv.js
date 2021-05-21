import React, {
  //
  useState,
  useContext,
} from "react";
import { BearLink } from "./BearLink";

export function BearDiv({
  //
  obj,
  bediaTrue,
  flexTrue,
  vertAlign,
  typeDiv,
  spanTrue,
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

  const kdfr = bediaTrue && {
    background: "red",
    color: "white",
    // ...bediaMainStyle
  };

  const oksdae = fontSize && {
    fontSize: fontSize,
  };

  const gibjr = {
    ...oksdae,
    ...osdakew,
    ...zxcsd,
    ...kdfr,
    ...style,
  };

  const oksde = {
    style: gibjr,
    ...args,
  };

  const aokdwe =
    //
    spanTrue ? "span" : typeDiv;

  let endo = "";
  switch (aokdwe) {
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
