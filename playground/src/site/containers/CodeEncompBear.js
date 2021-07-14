import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearCodePreview,
  BearDiv,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { codeDomString } from "../components/PlaygroundGlobalComps";

export function CodeEncompBear({
  //
  title,
  subtitle,
  codeAbove = "",
  code,
  ...sadsd
}) {
  // 1const

  const sdkjfer = `
      import { Bear${title} } from "bearui-web";
      
      ${codeAbove}
      
      ${codeDomString(code)}
      `;

  const ijases = {
    code: sdkjfer,
    ...sadsd,
  };

  logs.logga("___ sdkjfer ___", sdkjfer);
  // logs.logga("___ explroe CODE ___", ijases);

  const sdoifww =
    //
    // "sowfwer";
    BearCodePreview(ijases);

  return sdoifww;
}
