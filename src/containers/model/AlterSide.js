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
} from "@SillyScribe95/bedia-shared/";

export function AlterSide({ obj, slideNumber, modelCreateFunc, ...args }) {
  const fdijt = {
    hideForward: true,
    showRight: true,
    backFunc: backPlay,
    centerobj: "New Playlist",
  };

  //   const naoe = {
  // titlevar: <BackForwardObj {...fdijt} />;
  // }

  function backPlay() {
    modelCreateFunc(0);
  }

  const oiksade = {
    ...args,
    // ...naoe,
    displayNumber: 1,
    onSubmit: backPlay,
    formid: "altModPlay",
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
    listvar: kjvsew,
    slideNum: slideNumber,
  };

  const sdke =
    //
    BearCarousel(xcovre);
  // BearList(xcovre);

  return sdke;
}
