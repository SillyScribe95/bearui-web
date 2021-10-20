import React, {
  //
  useState,
  useContext,
  useEffect,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { turnarray } from "../../functions/arrayFuncs";
import { remove } from "../../functions/globalFuncs";

export function getListComplex(
  listo,
  //
  {
    logtrue,
    listNumber,
    listDictAdd,
    removeItem,
    keepNull,
    useDictList,
    dictvar,
  }
) {
  // 1list PREPARE

  const dictTrugo = useDictList && dictvar;
  let list = dictTrugo ? Object.keys(dictvar) : listo;

  function isdjfae() {}

  const ijfgret = listDictAdd && dictvar;

  if (logtrue) {
    bearlog.laggu("___ getListComplex ORIGINAL ___", listo);
    bearlog.laggu("___ useDictList ___", {
      useDictList: useDictList,
      dictvar: dictvar,
      dictTrugo: dictTrugo,
      list: list,
    });
  }

  const jvsdr = turnarray(list);
  list = keepNull
    ? list
    : jvsdr.filter(function (el) {
        return el != null;
      });

  list = removeItem
    ? remove(list, function (currentObject) {
        return currentObject.id != removeItem.id;
      })
    : list;

  list = listNumber ? list.slice(0, listNumber) : list;

  return list;
}
