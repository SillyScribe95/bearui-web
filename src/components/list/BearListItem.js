import React, {
  //
  useState,
  useContext,
} from "react";

import { bearlog } from "../../index";
import { BearError } from "../BearError";
import { BearPossess } from "../ExportComps";
import { BearPossQuote } from "../GlobalComps";
import { BearListItemExpand } from "./BearListItemExpand";

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
    containFunc,
    logtrue,
    ignoreEmpty,
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

    bearlog.laggu("CHCEK ITEMS", {
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
    bearlog.laggu(bearName, "___ BrListItem  DICT ___", {
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
    bearlog.laggu(bearName, "___Blist Item ___", ijssr);
  }

  function mainOso() {
    let asdase =
      //
      // "BearListItemExpand";
      BearListItemExpand(dgste, coimswe, ijssr);

    return asdase;
  }

  const adsfewr = noShowItems || ignoreEmpty
  const sijfawe = dictvar
    ? dictTrue
      ? mainOso()
      : adsfewr
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
    : adsfewr
    ? ""
    : BearError(`No list item declared in ${BearPossQuote(bearName)} list!`);

  function xcjsd() {
    bearlog.lug("sijfawez--zz", sijfawe);

    // return ""
    return containFunc(sijfawe, dgste);
  }
  let jsaase =
    //
    containFunc ? xcjsd() : sijfawe;
  // "adfokadsd";

  return jsaase;
}
