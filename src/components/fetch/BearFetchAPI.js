import React, {
  //
  useState,
  useContext,
} from "react";

import { BearError } from "../BearError";
import { QueryMain, fetchParams } from "../../functions/backendFuncs";

import {
  //
  bearlog,
} from "bearui-web";
import { BearList } from "../list/BearList";
import { BearErrMiss } from "../GlobalComps";

export function BearFetchAPI(
  BearFetchFunc,
  {
    //
    //
    link,
    renderLoad,
    errorItem,
    renderData,
    renderListData,
    renderArray,
    params,
    bearName,
    ...args
  }
) {
  //
  // let data;
  // let loading;
  const { dataList, loading, ...asse } = BearFetchFunc
    ? fetchParams(BearFetchFunc, params)
    : "";

  const arrFine = loading ? "" : Array.isArray(dataList);

  function asidja(asdaeq) {
    const xsaasa = {
      loading,
      ...asdaeq,
      fetchData: asse,
    };

    return xsaasa;
  }

  const isda = arrFine ? dataList.map(asidja) : asidja(dataList);

  const sijdf = loading
    ? renderLoad
    : renderListData
    ? renderListData
    : renderData;

  function Lisreo() {
    const asewase = {
      list: isda,
      renderItem: sijdf,
      bearName: bearName,
      ...args,
    };

    const jasewe = BearList(asewase);

    return jasewe;
  }

  const oksaewae = bearName ? bearName : "BearFetchApi";

  const sdadasd = !renderLoad
    ? BearErrMiss(oksaewae, "renderLoad")
    : BearFetchFunc
    ? arrFine
      ? Lisreo()
      : sijdf(isda)
    : BearError(oksaewae + " needs a link to fetch!");

  return sdadasd;
}
