import { Center } from "@chakra-ui/layout";
import React, {
  //
  useState,
  useContext,
} from "react";
import { BearLink } from "./BearLink";
import { LoadMain } from "./GlobalComps";

export function BearDiv({
  //
  obj,
  renderObj,
  bediaTrue,
  flexTrue,
  vertAlign,
  typeDiv,
  centerTrue,
  spanTrue,
  fontSize,
  // 1link
  href,
  linkvar,
  newtabLink,
  linkConfig,
  style,
  loadTrue,
  loadConfig,
  ...args
}) {
  //
  //
  const osdakew = flexTrue && {
    display: "flex",
  };

  const zxcsd = vertAlign && {
    alignItems: "center",
    // justifyContent: "center",
  };

  const kdfr = bediaTrue && {
    background: "red",
    color: "white",
    // ...bediaMainStyle
  };

  const oksdae = fontSize && {
    fontSize: fontSize,
  };

  const centerConf = centerTrue && {
    width: "100%",
    margin: "auto",
    textAlign: "center",
  };

  const gibjr = {
    // ...centerConf,
    ...oksdae,
    ...centerConf,
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

  const ksdrewq =
    //
    // obj
    renderObj ? renderObj(obj) : obj;

  let endo = "";
  switch (aokdwe) {
    case "center":
      endo = (
        <Center bg="tomato" h="100px" color="white" {...oksde}>
          {ksdrewq}
        </Center>
      );
    case "span":
      endo = <span {...oksde}>{ksdrewq}</span>;
      break;
    default:
      endo = <div {...oksde}>{ksdrewq}</div>;
  }

  const iasje = newtabLink && {
    //
    outsideTrue: true,
  };

  // 1link
  const okdas = {
    toVar: linkvar,
    textvar: endo,
    ...iasje,
    ...linkConfig,
  };

  // linkvar = href || newtabLink || linkvar;

  const linkTrue = newtabLink || linkvar;

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

  return sadijqwe;
}
