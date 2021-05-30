import React, {
  //
  useState,
  useContext,
} from "react";
import { getLength, logs } from "@SillyScribe95/bedia-shared/";
import { BearDiv } from "../../components/BearDiv";
import { ModelObject } from "./ModelObject";
import { getLengthString, indexHighlights } from "@SillyScribe95/bedia-shared/";
import { getDocModel } from "@SillyScribe95/bedia-shared/";

export default function ModelPlaylist({
  obj,
  //   noBefore
  beforeText,
  addTrue,
  numberVar,
  playFunc,
  afterText,
  changeCurr,
  addFunc,
  media,
  index,
  nameFunc,
  editTrue,
  indexTrue,
  ...asfew
}) {
  // const { focusHighlight, setcurrHighlight } = useContext(MainContext);

  const { data: highobj, loading } =
    //
    "";
  // getDocModel(indexHighlights, obj?.introHighlight);

  let sadsae = {
    ...obj,
    // imageAttr:
    introHighlight: highobj,
  };

  logs.logga("___ sadsae ___", sadsae);

  function PlayCount() {
    const kdsaw = getLengthString(obj.highlights, "highlight");

    const oikeqwwq = {
      obj: kdsaw,
      fontSize: "0.5em",
    };

    return <BearDiv {...oikeqwwq} />;
  }

  function ImgBasoe() {
    //   cont
  }

  //   1center

  const ksaasd = {
    // centerobj: <PlayCount />,
  };

  const ksaae = {
    // shareText: sajdae,
  };

  //   const saew =

  function ofksadas(isfer) {
    const okvds = getLength(obj.highlights);
    const kxmvdf = `${okvds} ⭐ - ${isfer.name}`;

    return kxmvdf;
  }

  const saawe = {
    // topObj: asudwe,
    obj: sadsae,
    linkTrue: true,
    typevar: "playlist",
    bottomConfig: ksaasd,
    shareConfig: ksaae,
    // nameFunc: ofksadas,
    ...asfew,
  };

  logs.logga("___ Highlight - OrrObject ___", saawe);

  return <ModelObject {...saawe} />;
}
