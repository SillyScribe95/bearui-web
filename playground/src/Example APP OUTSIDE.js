import React, {
  //
  useState,
  useContext,
} from "react";
import { MainContext } from "../context/MainContext";
import {
  //
  logs,
  BearDiv,
} from "@bearui/bearui-web";

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
