import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearListItem } from "./BearListItem";
import { BearError } from "../BearError";

export function BearListMap(list, { logtrue, bearName = "", ...sidwre }) {
  //
  function mapoBap(saokae, indexvr) {
    bearlog.lug("___ saokae ___", saokae);

    const asidjwe =
      //
      saokae["renderItem"] ? saokae["renderItem"] : saokae;

    if (logtrue) {
      bearlog.laggu(bearName + "___BearlistMAP ITEM ___", saokae);
    }

    const djfge = bearName + "__ITEM__" + indexvr;

    const oskda = {
      //
      logtrue,
      key: djfge,
      listIndex: indexvr,
      ...sidwre,
    };

    bearlog.lug("___ asidjwe, oskda ___", asidjwe, oskda);

    const jcvbfd = BearListItem(asidjwe, oskda);

    const cvbokds = {
      ...oskda,
    };

    // return "ajqeqw"
    return jcvbfd;
  }

  const lytoLis = Array.isArray(list);

  bearlog.lug("___ bListMap ___", {
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
