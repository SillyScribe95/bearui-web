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

export function BearListBase(
  list,
  //
  { itemDict, ...args }
) {
  // 1const

  args = {
    list,
    dictvar: itemDict,
    ...args,
  };

  bearlog.lug("___ BearListBase args ___", args);

  return <BearList {...args} />;
}
