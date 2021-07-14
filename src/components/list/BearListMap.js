import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "../../index";
import { BearListItem } from "./BearListItem";
import { BearError } from "../BearError";

export function BearListMap(
  list,
  { logtrue, containFunc, bearName = "", ...sidwre }
) {
  //
  function mapoBap(saokae, indexvr) {
    logs.logga("___ saokae ___", saokae);

    const asidjwe =
      //
      saokae["renderItem"] ? saokae["renderItem"] : saokae;

    if (logtrue) {
      logs.loggu(bearName + "___BearlistMAP ITEM ___", saokae);
    }

    const djfge = bearName + "__ITEM__" + indexvr;

    const oskda = {
      //
      logtrue,
      key: djfge,
      listIndex: indexvr,
      ...sidwre,
    };

    logs.logga("___ asidjwe, oskda ___", asidjwe, oskda);

    const jcvbfd = BearListItem(asidjwe, oskda);

    const cvbokds = {
      containFunc,
      ...oskda,
    };

    return containFunc ? containFunc(jcvbfd, saokae) : jcvbfd;
  }

  const lytoLis = Array.isArray(list);

  logs.logga("___ bListMap ___", {
    list: list,
    ARRAY: lytoLis,
  });

  const gjdfg =
    //
    // list.map(mapoBap);
    lytoLis
      ? list.map(mapoBap)
      : BearError(bearName + "'list' attribute needs to be an array");

  return gjdfg;
  // return list.map(mapoBap)
}
