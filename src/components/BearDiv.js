import React, {
  //
  useState,
  useContext,
} from "react";
import { BearLink } from "./BearLink";
import { LoadMain } from "./GlobalComps";
import { bearlog } from "../index";

import { BearCheckMain } from "./check/BearCheckMain";
import { BearError } from "./BearError";

export function BearDiv({
  //
  itemConfig,
  //
  //
  obj,
  text,
  children,
  bearName = "BearDiv",
  divContainer,
  bediaTrue,
  flex,
  equalSpacing = true,
  vertAlign,
  ignoreNull,
  typeDiv,
  center,
  span,
  logtrue,
  fontSize,
  bold,
  //
  // 1link
  linkParams,
  href,
  preLink = "",
  link,
  outsideLink,
  //
  linkConfig,
  //
  //
  style,
  align,
  loadTrue,
  loadConfig,
  ...args
}) {
  //
  //
  const osdakew = flex && {
    display: "flex",
  };

  const zxcsd = vertAlign && {
    alignItems: "center",
  };

  const sidjfr =
    !equalSpacing &&
    {
      // alignItems: "flex-start",
    };

  const kdfr = bediaTrue && {
    background: "red",
    color: "white",
    // ...bediaMainStyle
  };

  const oksdae = fontSize && {
    fontSize: fontSize,
  };

  const centerConf = center && {
    // width: "100%",
    // margin: "auto",
    // textAlign: "center",
    justifyContent: "center",
  };

  const baseFonto = {
    fontFamily: "Arial",
  };

  const dksf = bold && {
    fontWeight: "bold",
  };

  const nvsse = align && {
    textAlign: align,
  };

  // 1style
  const gibjr = {
    // ...centerConf,
    ...dksf,
    ...oksdae,
    ...centerConf,
    ...osdakew,
    ...zxcsd,
    ...kdfr,
    ...sidjfr,
    ...baseFonto,
    ...nvsse,
    ...style,
  };

  bearlog.log("___ gibjr ___", gibjr);

  const oksde = {
    style: gibjr,
    ...args,
  };

  const aokdwe =
    //
    span ? "span" : typeDiv;

  const sijewr = children ? children : obj ? obj : text;
  const ksdrewq =
    //
    // obj
    divContainer ? divContainer(sijewr) : sijewr;

  let endo = "";
  switch (aokdwe) {
    case "span":
      endo = <span {...oksde}>{ksdrewq}</span>;
      break;
    default:
      endo = <div {...oksde}>{ksdrewq}</div>;
  }

  const iasje = outsideLink && {
    //
    outsideTrue: true,
  };

  // link = href || outsideLink || link;
  const dfuhsdw = preLink;
  const sjfweqw = outsideLink || link;
  const linkTrue = sjfweqw || dfuhsdw;
  const nsdas = sjfweqw ? preLink + sjfweqw : preLink;

  // 1link
  const okdas = {
    toVar: nsdas,
    textvar: endo,
    linkParams,
    ...iasje,
    ...linkConfig,
  };

  if (logtrue) {
    bearlog.lug("___ okdas ___", okdas);
  }

  if (linkTrue) {
    bearlog.lug("___ linkTrue ___", okdas);
  }

  const xczaeewqa =
    //
    //
    linkTrue ? <BearLink {...okdas} /> : endo;

  function Lodio() {
    const cvboker = {
      //
      ...loadConfig,
    };

    return <LoadMain {...cvboker} />;
  }

  const sadijqwe = loadTrue ? Lodio() : xczaeewqa;

  const jswaee = {
    noNameNeeded: true,
    // requiredArgs: { obj, text, children },
    // degr
  };
  if (logtrue) {
    bearlog.lug("___ sijewr ___", sijewr);
    // bearlog.lug("___ sadijqwe ___", sadijqwe);
  }

  const difjgerwas =
    !sijewr && !ignoreNull ? BearError(bearName + " is empty") : sadijqwe;

  // return difjgerwas
  return sadijqwe;
}
