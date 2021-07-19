import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { BearDiv } from "./BearDiv";

export function BearNotification(
  sdfwr,
  {
    //
    error,
    ...args
  }
) {
  // 1const

  args = {
    obj: sdfwr,
    fontSize: "18px",
    ...args,
  };

  logs.logga("___ args ___", args);

  const sdijfwer = <BearDiv {...args} />;

  const kjsder =
    //
    // error
    "error";

  // const ijsfr =
  //   //
  //   notification;
  // // notification[kjsder]

  // ijsfr.open({
  //   description: sdijfwer,
  // });

  // return;
}
