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
  bediaTrue,
  flexTrue,
  vertAlign,
  typeDiv,
  centerTrue,
  spanTrue,
  fontSize,
  linkvar,
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

  let endo = "";
  switch (aokdwe) {
    case "center":
      endo = (
        <Center bg="tomato" h="100px" color="white" {...oksde}>
          {obj}
        </Center>
      );
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
