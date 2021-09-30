import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
  BearDiv,
} from "@sillyscribe95/bear-ui-web";
import { MainContext } from "../context/MainContext";

export function Hookall({
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
