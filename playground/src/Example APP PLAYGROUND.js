import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";

import {
  //
  BearDiv,
} from "bearui-web";
import { MainContext } from "../context/MainContext";

export function SpeakAdd({
  //
  seriesObs,
  ...args
}) {
  // 1const
  const { viewType, setviewType } = useContext(MainContext);

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
