// // 1duration
// function getDuration
//   const { getVideoDurationInSeconds } = require('get-video-duration')
//   const { getAudioDurationInSeconds } = require('get-audio-duration');

// // From a local path...
// getVideoDurationInSeconds('video.mov').then((duration) => {
//   console.log(duration)
// })

// getAudioDurationInSeconds('audio.flac').then((duration) => {
//   console.log(duration);
// });

import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "./BearDiv";
import {
  durationParser,
  getDuration,
  sectoHours,
  timeDecim,
} from "../functions/GlobalFunctions";
import { BearIcon } from "../BearIcon";

export default function BearDuration({
  //
  // icon=
  // noIcon
  parseType = "decimal",
  duration,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  function Danida({ className }) {
    // dateTime={`P${Math.round(seconds)}S`} className={className}

    const asokew = (
      <time>
        {/*  */}
        {/* {format(seconds)} */}
      </time>
    );

    return asokew;
  }

  const djsfder =
    //
    duration;
  // getObjDuration(obj);

  let ijewwe =
    //
    // durationParser(djsfder, "ms");
    "";

  switch (parseType) {
    case "decimal":
      ijewwe = timeDecim(djsfder);
      break;
    case "short":
      ijewwe = durationParser(djsfder, "mm m ss s");
      break;
  }

  const okswq = {
    TIME: ijewwe,
  };

  logs.logga("___ ijewwe ___", okswq);

  const knbff = BearIcon("time");

  const okfdsd = (
    <>
      {/*  */}
      {/* <Danida /> */}
      {/* {knbff}
        <br /> */}
      {ijewwe}
    </>
  );

  //   1console

  const odfer = {
    ijewwe: ijewwe,
  };

  logs.logga("___ odfer ___", odfer);

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
