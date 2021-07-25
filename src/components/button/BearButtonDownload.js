import React, {
  //
  useState,
  useContext,
} from "react";

import { BearButton } from "./BearButton";
import {
  //
  logs,
} from "../../index";

export function BearButtonDownload({
  //
  fileName,
  json,
  ...args
}) {
  const sdifjewr =
    //
    fileName;

  // 1const
  // 1json FON
  function downJSON() {
    var _myArray = JSON.stringify(json, null, 4); //indentation in json format, human readable

    var vLink = document.createElement("a"),
      vBlob = new Blob([_myArray], { type: "octet/stream" }),
      vName = sdifjewr,
      vUrl = window.URL.createObjectURL(vBlob);
    vLink.setAttribute("href", vUrl);
    vLink.setAttribute("download", vName);
    vLink.click();
  }

  function downlood() {
    if (json) {
      downJSON();
    }
  }

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  args = {
    obj: okfdsd,
    onClick: downlood,
    ...args,
  };

  return <BearButton {...args} />;
}
