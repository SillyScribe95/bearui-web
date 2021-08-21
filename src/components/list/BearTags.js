import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearList } from "./BearList";
import { BearButton } from "../button/BearButton";

export function BearTags({
  //
  itemConfig,
  ...args
}) {
  // 1const

  function rendios(itemo) {
    const kasde = {
      color: "black",
      background: "lightgrey",
    };

    const djfwer = <># {itemo}</>;

    const oksdewqsa = {
      className: "shadowHover",
      style: kasde,
      obj: djfwer,
      ...itemConfig,
    };

    return <BearButton {...oksdewqsa} />;
  }

  args = {
    noError: true,
    renderItem: rendios,
    ...args,
  };

  return <BearList {...args} />;
}
