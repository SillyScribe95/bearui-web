import React, {
  //
  useState,
  useContext,
} from "react";
import * as logs from "../functions/logFuncs";
import { BearDiv } from "./BearDiv";
import { BearIcon } from "./BearIcon";
import { BearImage } from "./BearImage";
import { BearButton } from "./button/BearButton";

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
  buttonTrue,
  iconConfig,
  textconfig,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

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

    return <BearDiv spanTrue {...oisde} />;
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
      <BearDiv spanTrue {...sdlf} />
    );

    return isajdawe;
  }

  let okeasw = !noImage && imagevar;
  const okdsre = okeasw ? <ImgMain {...imageConfig} /> : "";
  const kadse = okdsre ? okdsre : iconvar && <INcoio {...iconConfig} />;

  const okdswq = textvar && <Ajiwq {...textconfig} />;

  const okasew = {
    style: {
      margin: padvar,
    },
  };

  const sdijwqe = iconvar || imagevar;
  const bothTrue = textvar && sdijwqe;
  const oksaew = bothTrue && <BearDiv spanTrue {...okasew} />;

  const oskdawe = (
    <>
      {/* {kadse} */}
      {/* {textvar} */}
      {kadse}
      {oksaew}
      {okdswq}
    </>
  );

  function Rendo() {
    const VCIFWRE = {
      obj: oskdawe,
    };

    const fdghew = (
      <BearDiv
        //
        flexTrue
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

  args = {
    obj: okfdsd,
    ...args,
  };

  // switch (typeDiv){
  //   case "button":

  //     default:
  // }

  return buttonTrue ? <BearButton {...args} /> : <BearDiv {...args} />;
}
