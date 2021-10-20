import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearCheckMain } from "./BearCheckMain";
import { BearError } from "../BearError";
import { BearErrArgType, BearErrMiss, BearMissing } from "../ErrorComps";

export function BearCheckList(
  named,
  obj,
  {
    //
    noContain,
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

  bearlog.lug("___ BEARCHCKMAIN ___", skfwe);

  function renderCheck() {
    //
    const ijsdfw = renderItem || typeList || containFunc || args.return;

    const cisas = ijsdfw
      ? obj
      : BearErrMiss(
          "'containFunc' or 'renderItem' or 'typeList' or 'return'",
          bearName,
          named
        );

    return cisas;
  }

  const okfdsd = noContain ? true : renderCheck();
  const jsdawse = Array.isArray(list);
  const listFull = jsdawse && list.length > 0;

  // 1console

  bearlog.lug("___ listFull ___", {
    //
    list,
    jsdawse,
    listFull,
  });

  // function sajE

  const idfjger = { bearName, hideError: "ignoreEmpty" };

  const emptyall = !list;

  const ijsfre =
    emptyall && !ignoreEmpty
      ? BearError(
          BearMissing("list", bearName),
          // "wtf is this mate"
          idfjger
        )
      : !jsdawse
      ? BearErrArgType("list", "array", { bearName })
      : okfdsd;

  return BearCheckMain(named, ijsfre, skfwe);
}
