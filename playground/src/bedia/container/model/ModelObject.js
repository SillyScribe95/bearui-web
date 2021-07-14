import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  modelLink,
  logs,
} from "@SillyScribe95/bedia-shared/";

import { ModelThumbnail } from "./ModelThumbnail";
import { BearFlex } from "../../components/GlobalComps";
import { BearDiv } from "../../components/BearDiv";

export function ModelObject({
  //
  typevar,
  layoutType = "",
  obj,
  topObj,
  nameFunc,
  loadTrue,
  clickTop,
  topConfig,
  // topClick,
  //
  // NAME
  nameConfig,
  //
  // MAIN
  mainConfig,
  //
  //  1THUMBNAI
  imagesize = 80,
  imageConfig,
  //

  linkTrue,
  editLink,
  noButton,
  formData,
  index,
  logtrue,
  messvar,
  // 1middle
  middleConfig,

  // 1USER
  userObj,
  userConfig,

  style,

  // 1BOTTOM
  noBottom,
  // noBottom
  bottomFunc,
  bottomConfig,

  // 1SAVE
  saveTrue,
  starConfig,
  editBefore = "",
  editAfter = "",
  listOver,
  noStar,
  noThumbnail,
  buttonConfig,
  // USER
  noUser,
  rightConfig,
  playFunc,
  editFunc,
  editTrue,
  removeFunc,
  ...args
}) {
  //
  // 1layoutType
  layoutType =
    //
    layoutType;
  // "boxFeed";
  // "web"

  // 1const

  const basArgosa = {
    typevar: typevar,
    obj: obj,
    formData: formData,
  };

  // 1top
  function TopBsae() {
    const okeas = nameFunc ? nameFunc(obj) : obj.name;

    return okeas;
  }

  function MidBottt() {
    const vfdeew = bottomFunc ? bottomFunc(obj) : obj.description;

    const osdkre = {
      obj: vfdeew,
      style: { fontSize: "0.7em" },
    };

    return <BearDiv {...osdkre} />;
  }

  const showLoad = !loadTrue && obj;
  const arewr = showLoad && (
    <>
      {/* asodkwqeq */}
      {TopBsae()}
      {!noBottom && MidBottt()}
      {/* {!noBottom && MidBottt()} */}
      {/* {obj.name} */}
      {/* <ModelComplex {...} /> */}
    </>
  );

  const ijsaew =
    //
    //   expandHover
    "shadowHover pointer";

  let oksdw = linkTrue && { link: modelLink(typevar, obj) };

  // 1image 1thumbnail
  function ThumbObj() {
    const okdaew = {
      ...basArgosa,
      imagesize: imagesize,
      ...imageConfig,
    };

    return <ModelThumbnail {...okdaew} />;
  }

  function imgbeside(xcvkr) {
    const oksdew = !noThumbnail && <ThumbObj />;

    const oksde = {
      list: [{ obj: oksdew }, { obj: xcvkr }],
      padvar: "10px",
    };

    const oadase = <BearFlex {...oksde} />;

    return oadase;
  }

  const osdker = imgbeside(arewr);

  // 1style
  const okdsew = {
    style: {
      fontSize: "18px",
      padding: "5px 10px",
      ...style,
    },
  };

  const sadawq = {
    ...args,
    obj: osdker,
    className: ijsaew,
    ...oksdw,
    ...okdsew,
  };

  return <BearDiv {...sadawq} />;
}
