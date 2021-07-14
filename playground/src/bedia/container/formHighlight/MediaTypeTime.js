import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
  mediaTypeTrue,
} from "@SillyScribe95/bedia-shared/";

import { MediaTypeChoose } from "../formHighlight/MediaTypeChoose";
import { TimeButtons } from "../time/TimeButtons";
import { BearDiv } from "../../components/BearDiv";

export function MediaTypeTime({
  //
  mediaType,
  chooseConfig,
  noTiming,
  timeConfig,
  ...args
}) {
  const basos = {
    //
    mediaType: mediaType,
    ...args,
  };
  //
  // 1TimeButtons
  function ButtoTop() {
    //

    const bknmvkf = [
      //
      "track",
      "play",
    ];

    const okrte = {
      //
      style: {
        fontSize: "40px",
        width: "400px",
      },
    };

    const dfkgret = {
      //   list: bknmvkf,
      ...basos,
      itemConfig: okrte,
      ...timeConfig,
    };

    logs.logga("___ TieButtons ___", dfkgret);

    const ijsadwqe = <TimeButtons {...dfkgret} />;

    const hutry = {
      obj: ijsadwqe,
    };

    return <BearDiv {...hutry} />;
  }

  function ChooseIo() {
    //
    const cvbokf = {
      ...basos,
      ...chooseConfig,
      style: { marginBottom: "20px" },
    };

    const fdjeaw = <MediaTypeChoose {...cvbokf} />;

    return fdjeaw;
  }

  const ijaase =
    //
    "";
  // ChooseIo();

  //   1timing
  const timeNotTrue =
    //
    // "";
    // true;
    mediaTypeTrue(mediaType) && !noTiming;

  const sfdgre = timeNotTrue && ButtoTop();

  const asidwe = (
    <>
      {/*  */}
      {ijaase}
      {sfdgre}
    </>
  );

  const fsdfs = {
    obj: asidwe,
    style: { marginBottom: "20px" },
    // ...args,
  };

  return <BearDiv {...fsdfs} />;
}
