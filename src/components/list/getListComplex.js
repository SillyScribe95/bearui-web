import React, {
  //
  useState,
  useContext,
  useEffect,
} from "react";

import { turnarray } from "../../index"
import { isEmpty, remove } from "lodash";
import {
  //
  logs,
} from "../../index";

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
    logs.loggu("___ getListComplex ORIGINAL ___", listo);
    logs.loggu("___ useDictList ___", {
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
