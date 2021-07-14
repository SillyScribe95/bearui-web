import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
} from "../index"
import { BearDiv } from "./BearDiv";
import { BearIcon } from "./BearIcon";
import { BearImage } from "./BearImage";
import { BearButton } from "./button/BearButton";
import { SwitchComp } from "./GlobalComps.js";

export function BearTextMedia({
  //
  imagevar,
  imagesize = 20,
  leftWidth = "5px",
  padvar = "5px",
  vertSize,
  vertTrue,
  iconSize,
  imageText,
  imageConfig,
  textvar,
  iconvar,
  noImage,
  noIcon,
  noText,
  onlyIcons,
  buttonTrue,
  iconConfig,
  textconfig,
  itemType = "",
  swapItems,
  className,
  style,
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

    logs.logga("___ ksease ___", ksease);

    return ksease;
  }

  function ImgMain({ ...dsfew }) {
    const fnkfg = {
      // style: ksawe,
      imagevar: imagevar,
      size: imagesize,
      name: imageText,
      ...dsfew,
    };

    logs.logga("___ imgBaseText  IMAGE ___", fnkfg);

    const oksaw = <BearImage {...fnkfg} />;

    return oksaw;
  }

  // 1text
  function Ajiwq({ ...dsfew }) {
    const oisde = {
      obj: textvar,
      // style: ksawe,
      ...dsfew,
    };

    return <BearDiv span {...oisde} />;
  }

  function INcoio({ style, ...ase }) {
    //
    const ksawe = sadkwe(style);

    const sdlf = {
      style: ksawe,
      obj: BearIcon(iconvar),
      ...ase,
    };

    logs.logga("___ bertextmed ___", sdlf);

    const isajdawe = (
      //
      // BearIcon(iconvar);
      <BearDiv span {...sdlf} />
    );

    return isajdawe;
  }

  let okeasw = !noImage && imagevar;
  const okdsre = okeasw ? <ImgMain {...imageConfig} /> : "";
  const kadse = okdsre ? okdsre : iconvar && <INcoio {...iconConfig} />;

  const textShow = !noText && !onlyIcons && textvar;
  const okdswq = textShow && <Ajiwq {...textconfig} />;

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

      const fdghew = (
        <BearDiv
          //
          flex
          vertAlign
          {...VCIFWRE}
        />
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

  logs.logga("___ BETEXTMEDIA args ___", args);

  return SwitchComp(itemType, args);
}
