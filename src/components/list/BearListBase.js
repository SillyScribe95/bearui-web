import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
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

  logs.logga("___ BearListBase args ___", args);

  return <BearList {...args} />;
}
