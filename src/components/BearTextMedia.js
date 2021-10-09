import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  bearlog,
} from "../index";
import { BearDiv } from "./BearDiv";
// import { BearIcon } from "./BearIcon";
import { BearImage } from "./BearImage";
import { BearButton } from "./button/BearButton";
import { SwitchComp } from "./GlobalComps.js";
import { BearTitle } from "./title/BearTitle";

export function BearTextMedia({
  //
  imagevar,
  leftWidth = "5px",
  padvar = "5px",
  vertSize,
  vertTrue,
  iconSize,
  alignConfig,
  imageConfig = {},
  textvar,
  renderText,
  children,
  iconvar,
  noImage,
  noIcon,
  noText,
  onlyIcons,
  buttonTrue,
  iconConfig = {},
  textConfig = {},
  itemType = "",
  swapItems,
  className,
  style,
  // 1subtitle
  subtitle,
  subtitleConfig = {},
  ...args
}) {
  // 1const
  textvar = textvar ? textvar : children;
  textvar = renderText ? renderText(textvar) : textvar;

  function sadkwe(dsafe) {
    const fijgrt = leftWidth && {
      minWidth: leftWidth,
    };

    const kfwer = iconSize && {
      fontSize: iconSize ? iconSize : "1.7em",
    };

    const ksease = {
      ...fijgrt,
      ...kfwer,
      ...dsafe,
    };

    bearlog.lug("___ ksease ___", ksease);

    return ksease;
  }

  // 1image
  function ImgMain({ ...dsfew }) {
    return BearImage({
      shape: "circle",
      image: imagevar,
      ...dsfew,
    });
  }

  // 1text
  function Ajiwq({ ...dsfew }) {
    const oisde = subtitle
      ? BearTitle({
          title: textvar,
          subtitle,
          subtitleConfig,
          ...dsfew,
        })
      : BearDiv({
          obj: textvar,
          span: true,
          // style: ksawe,
          ...dsfew,
        });

    return oisde;
    //
  }

  // 1icon
  function INcoio({ style, ...ase }) {
    //
    const ksawe = style;

    const sdlf = {
      style: ksawe,
      ...ase,
    };

    bearlog.lug("___ bertextmed ___", sdlf);

    const isajdawe = (
      //
      // "oasdkfasd";
      // BearIcon(iconvar);
      <BearDiv span {...sdlf}>
        {iconvar}
        {/* {BearIcon(iconvar)} */}
      </BearDiv>
    );

    return isajdawe;
  }

  let okeasw =
    //
    imagevar;
  // !noImage && imagevar;

  // 1left
  const okdsre = okeasw && ImgMain(imageConfig);
  const kadse =
    //
    // okdsre;
    // "";
    // INcoio(iconConfig);
    okdsre ? okdsre : iconvar ? INcoio(iconConfig) : "";

  const textShow = !noText && !onlyIcons && textvar;
  const okdswq = textShow && Ajiwq(textConfig);

  const okasew = {
    style: {
      margin: padvar,
    },
  };

  const sdijwqe = iconvar || imagevar;
  const bothTrue =
    //
    true;
  // textShow && sdijwqe;
  const centro = bothTrue && <BearDiv span ignoreNull {...okasew}></BearDiv>;

  function RendMain() {
    const lftoe = swapItems ? okdswq : kadse;
    const righto = swapItems ? kadse : okdswq;

    // 1console
    bearlog.lug("RendMain-zzz", { lftoe, righto });

    const oskdawe = (
      <>
        {/* {kadse} */}
        {/* {textvar} */}
        {lftoe}
        {centro}
        {righto}
      </>
    );

    function Rendo() {
      let xxvczc =
        //
        // "@";
        kadse;

      const aokdas = xxvczc && {
        flex: true,
        vertAlign: true,
      };

      let xcvasd =
        //
        // lftoe;
        // centro
        // righto
        // oskdawe;
        // "dojwewq";
        BearDiv({ obj: oskdawe, ...aokdas, ...alignConfig });

      return xcvasd;
    }

    const okfdsd =
      //
      vertTrue ? oskdawe : Rendo();

    return okfdsd;
  }

  // funct;

  args = {
    obj: RendMain(),
    className,
    style,
    ...args,
  };

  bearlog.lug("___ BETEXTMEDIA args ___", args);

  // return "Asdoqwkewq";
  return SwitchComp(itemType, args);
}
