import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "../../index"
import { BearCheckMain } from "./BearCheckMain";
import { BearErrMiss, BearMissing, BearQuote } from "../GlobalComps";
import { BearError } from "../BearError";

export function BearCheckList(
  named,
  obj,
  {
    //
    bearName,
    list,
    renderItem,
    typeList,
    noError,
    ignoreEmpty,
    containFunc,
    ...args
  }
) {
  // 1const
  const skfwe = {
    list,
    renderItem,
    typeList,
    noError,
    bearName,
    ...args,
  };

  logs.logga("___ BEARCHCKMAIN ___", skfwe);

  function renderCheck() {
    //
    const ijsdfw = renderItem || typeList || containFunc;

    const cisas = ijsdfw
      ? obj
      : BearErrMiss(
          "'containFunc' or 'renderItem' or 'typeList'",
          bearName,
          named
        );

    return cisas;
  }

  const okfdsd = renderCheck();
  const jsdawse = Array.isArray(list);
  const listFull = jsdawse && list.length > 0;

  // 1console

  logs.logga("___ listFull ___", {
    //
    list,
    jsdawse,
    listFull,
  });

  // function sajE

  const idfjger = { bearName, hideError: "ignoreEmpty" };

  const ijsfre = !list
    ? BearError(BearMissing("list", bearName), idfjger)
    : !jsdawse
    ? BearError("list attribute must be an array!")
    : !listFull && !ignoreEmpty
    ? BearError(
        <>{BearQuote(bearName)} + "'s list argument is a empty array.</>,
        idfjger
      )
    : okfdsd;

  return BearCheckMain(named, ijsfre, skfwe);
}
