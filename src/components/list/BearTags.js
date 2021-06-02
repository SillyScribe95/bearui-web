import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";
import { BearList } from "./BearList";
import { BearButton } from "../button/BearButton";

export function BearTags({
  //
  itemConfig,
  ...args
}) {
  // 1const

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  function rendios(itemo) {
    const osdfks = <># {itemo}</>;

    const oksasde = {
      obj: osdfks,
    };

    return <BearButton {...oksasde} />;
  }

  const kasde = {
    color: "darkblue",
    background: "lightgrey",
  };

  const oksdewqsa = {
    className: "shadowHover",
    style: kasde,
    ...itemConfig,
  };

  args = {
    obj: okfdsd,
    noError: true,
    itemConfig: oksdewqsa,
    typeList: "button",
    renderItem: rendios,
    ...args,
  };

  return <BearList {...args} />;
}
