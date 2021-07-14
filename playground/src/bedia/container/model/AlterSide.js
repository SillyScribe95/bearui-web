import React, {
  //
  useState,
  useContext,
  useRef,
} from "react";
import { BearCarousel } from "../../components/list/BearCarousel";
import { ModelObject } from "./ModelObject";
import ModelPlaylist from "./ModelPlaylist";
import {
  //
  logs,
} from "bearui-web";

export function AlterSide({ obj, slideNumber, modelonCreate, ...args }) {
  const fdijt = {
    hideForward: true,
    showRight: true,
    backFunc: backPlay,
    centerobj: "New Playlist",
  };

  //   const naoe = {
  // title: <BackForwardObj {...fdijt} />;
  // }

  function backPlay() {
    modelonCreate(0);
  }

  const oiksade = {
    ...args,
    // ...naoe,
    displayNumber: 1,
    onSubmit: backPlay,
    bearName: "altModPlay",
    noButton: false,
    noOtherList: true,
    noExtraModels: true,
  };

  logs.logga("___ altPlaylist ___", oiksade);

  // 1list
  const kjvsew = [
    //
    obj,
    // <ModelPlaylist {...oiksade} />,
  ];

  const xcovre = {
    list: kjvsew,
    slideNum: slideNumber,
  };

  const sdke =
    //
    BearCarousel(xcovre);
  // BearList(xcovre);

  return sdke;
}
