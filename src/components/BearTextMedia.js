import React, {
  //
  useState,
  useContext,
} from "react";
import * as logs from "../functions/logFuncs";
import { BearDiv } from "./BearDiv";
import { BearIcon } from "./BearIcon";
import { BearImage } from "./BearImage";

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

  function Ajiwq({ ...dsfew }) {
    const oisde = {
      obj: textvar,
      // style: ksawe,
      ...dsfew,
    };

    return <BearDiv {...oisde} />;
  }

  function INcoio({ style, ...ase }) {
    //
    const ksawe = sadkwe(style);

    const sfksr = iconvar ? BearIcon(iconvar) : iconvar;

    const sdlf = {
      style: ksawe,
      obj: sfksr,
      ...ase,
    };
    const isajdawe = <BearDiv {...sdlf} />;

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
  const oksaew = bothTrue && <BearDiv {...okasew} />;

  const oskdawe = (
    <>
      {kadse}
      {oksaew}
      {okdswq}
    </>
  );

  const okfdsd =
    //
    vertTrue ? oskdawe : <BearDiv flexTrue vertTrue obj={oskdawe} />;

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
