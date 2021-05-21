import React, {
  //
  useState,
  useContext,
} from "react";

import { getModelImage } from "@SillyScribe95/bedia-shared/";

export function ThumbnailMedia({
  obj,
  typevar = "media",
  styleMain,
  imagevar,
  alignvar,
  dictvar,
  smallItem,
  timeConfig,
  accessConfig,
  noReplaceBedia,
  imageConfig,
  listConfig,
  smallVar,
  style,
  ...args
}) {
  //

  const whonbl = {
    background: "black",
    color: "white",
  };
  const blonwh = {
    background: "white",
    color: "black",
  };
  const stlTh = {
    ...whonbl,
    // ...blonwh,
    fontSize: "0.9em",
    // padding: "5px",
  };

  smallItem = smallItem ? smallItem : "duration";
  // const mainImg = getPrimeSeriesImage(obj)
  //   ? getPrimeSeriesImage(obj)
  //   : obj.videoThumbnail;
  //

  const gods = {
    obj: obj,
  };

  timeConfig = {
    obj: obj.duration,
    style: stlTh,
    ...timeConfig,
  };

  accessConfig = {
    //
    ...gods,
    ...accessConfig,
  };

  logs.logga("___ accessConfig ___", accessConfig);

  // const gfobks = <CheckAccessIcon {...accessConfig} />;
  const ccssOjb =
    //
    "";
  // "fdgpkewr";
  // gfobks;
  //

  const alignDura =
    //
    // "bottomRight"
    "topLeft";

  // 1duration
  const objDura = (
    <>
      qwoekqq
      {/* <DurationMain {...obj} /> */}
      {/* <BearDiv spanTrue {...timeConfig} /> */}
    </>
  );

  const asdokw = "bbb";

  const immo = {
    access: {
      alignvar: "topLeft",
      obj: ccssOjb,
    },
    duration: {
      alignType: alignDura,
      obj: objDura,
    },
    link: {
      alignvar: "topRight",
      obj: "vvv",
    },
    link: {
      alignvar: "bottomRight",
      obj: asdokw,
    },
    number: {
      alignvar: "bottomRight",
      // obj: "$",
    },
    ...dictvar,
  };

  // const kdsfoew =

  const lksdoe = [
    //
    "link",
    "duration",
    "access",
  ];

  const dkfr = {
    style: {
      background: "black",
      color: "white",
    },
  };

  const lstDoca = {
    ...listConfig,
    // obj: asokdwe,
    itemConfig: dkfr,
    listvar: lksdoe,
    dictvar: immo,
  };

  logs.logga("___ obj ___", obj);

  let endValue = "";
  switch (typevar) {
    case "playlist":
      endValue = obj.introHighlight;
      break;

    default:
      endValue = obj;
  }

  let okvsea =
    //
    // gens.BediaLogoWhite;
    endValue && getModelImage(endValue);
  // gens.BediaMagBlack;

  const sdokdea = {
    // borderRadius: "10px",
    ...style,
  };

  const soadkaewa = {
    shape: "square",
    style: sdokdea,
    imagevar: okvsea,
    ...imageConfig,
    ...args,
  };

  logs.logga("___ soadkaewa ___", soadkaewa);
  logs.logga("___ okvsea ___", okvsea);

  const mkfsa =
    //
    "lstDoca";
  // <BearList {...lstDoca} />

  const dfokr = {
    alignvar: "bottomRight",
    smallObj: "diwwqea",
  };

  const asdinw = {
    imageConfig: soadkaewa,
    // smallObj: mkfsa,
    smallConfig: lstDoca,
    // ...args,
    // ...dfokr,
  };

  logs.logga("___ thumbnailmedias ___", asdinw);

  const oaksdwq = (
    //
    // <ImageAlign {...asdinw} />
    <ImageMain {...soadkaewa} />
  );

  return oaksdwq;
}
