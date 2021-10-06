import React, {
  //
  useState,
  useContext,
} from "react";
import { BearTitle } from "../importBase";
import {
  //
  bearlog,
} from "../index";
import { BearDiv } from "./BearDiv";
import { BearIcon } from "./BearIcon";
import { BearImage } from "./BearImage";
import { BearButton } from "./button/BearButton";
import { SwitchComp } from "./GlobalComps.js";

export function BearTextMedia({
  //
  imagevar,
  leftWidth = "5px",
  padvar = "5px",
  vertSize,
  vertTrue,
  iconSize,
  imageConfig = {},
  textvar,
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
        {BearIcon(iconvar)}
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
  const bothTrue = textShow && sdijwqe;
  const oksaew = bothTrue && <BearDiv span ignoreNull {...okasew}></BearDiv>;

  function RendMain() {
    const lftoe = swapItems ? okdswq : kadse;
    const righto = swapItems ? kadse : okdswq;

    // 1console
    bearlog.log("RendMain-zzz", { lftoe, righto });

    const oskdawe = (
      <>
        {/* {kadse} */}
        {/* {textvar} */}
        {lftoe}
        {oksaew}
        {righto}
      </>
    );

    function Rendo() {
      const VCIFWRE = {
        obj: oskdawe,
      };

      const isdjfwer = kadse && {
        flex: true,
        vertAlign: true,
      };

      const fdghew = (
        <BearDiv
          //
          {...isdjfwer}
        >
          {oskdawe}
        </BearDiv>
      );

      // return "dojwewq";
      return fdghew;
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
