import React, {
  //
  useState,
  useContext,
} from "react";

import { logs } from "../../index";
import { BearError } from "../BearError";
import { BearListItemExpand } from "./BearListItemExpand";
import { BearPossess } from "../GlobalComps";

export function BearListItem(
  coimswe,
  {
    //
    // 1dict
    bearName,
    dictvar,
    dictFunc,
    noShowItems,
    emptyDictReplace,
    logtrue,
    //
    //
    ...args
  }
) {
  //
  //  1const
  const dgste = coimswe && expandItem(coimswe);
  const eixstso = dgste || coimswe;
  const typovar = typeof dgste;
  const dictTrue = typovar == "object";

  function asdkwe(coimswe) {
    const ksdfew = dictvar[coimswe]
      ? dictvar[coimswe]
      : emptyDictReplace
      ? emptyDictReplace
      : coimswe;

    logs.loggu("CHCEK ITEMS", {
      ksdfew: ksdfew,
      emptyDictReplace: emptyDictReplace,
      //   emptyDictReplace,
      coimswe: coimswe,
    });

    return ksdfew;
  }

  //   1dict
  function expandItem(coimswe) {
    const isdjfdsa = dictFunc
      ? dictFunc(coimswe)
      : dictvar
      ? asdkwe(coimswe)
      : coimswe;

    return isdjfdsa;
  }

  logtrue = "asd";

  if (logtrue) {
    logs.loggu(bearName, "___ BrListItem  DICT ___", {
      ORIGINAL: coimswe,
      ITEM: dgste,
      imetos: typovar,
      TRUE: dictTrue,
      EXISTS: eixstso,
    });
  }

  // 1baseargs

  const ijssr = {
    bearName,
    dictTrue,
    logtrue,
    ...args,
  };

  if (logtrue) {
    logs.loggu(bearName, "___Blist Item ___", ijssr);
  }

  function mainOso() {
    return BearListItemExpand(dgste, coimswe, ijssr);
  }

  const sijfawe = dictvar
    ? dictTrue
      ? mainOso()
      : noShowItems
      ? ""
      : BearError(
          `No entry exists in '${BearPossess(
            "dictionary",
            bearName,
            "this list"
          )}' for "${coimswe}" `
        )
    : eixstso
    ? mainOso()
    : noShowItems
    ? ""
    : BearError("No list item declared!");

  return sijfawe;
}
