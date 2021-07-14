import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  BearDiv,
  BearList,
  BearCarousel,
  BearCodePreview,
  BearIcon,
  TimeButtons,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { CodeEncompBear } from "../CodeEncompBear";

export function ExploCode({
  //
  codeDict,
  codeList,
  ...sadsd
}) {
  // 1const
  const [typeNum, settypeNum] = useState();

  function enCar(sdfwker) {
    //
    logs.logga("___ sdfwker ___", sdfwker);
    const idjgt = CodeEncompBear(sdfwker);

    return idjgt;
  }

  function sijfe({ ...asew }) {
    const ijdsrwe = {
      // code: asew,
      ...asew,
      ...sadsd,
    };

    logs.logga("___ ijdsrwe ___", ijdsrwe);

    // return "ABBBB";
    return enCar(ijdsrwe);
  }

  function casjd(okqwq) {
    logs.logga("___ okqwq ___", okqwq);

    return "dsafaserasokd";
  }

  const difjew =
    //
    sijfe;
  // casjd;

  // 1carousel
  const qwhads = {
    bearName: "Explore code carousel",
    slideNum: typeNum,
    // useDictList: true,
    logtrue: true,
    ignoreEmpty: true,
    // dictvar: codeList,
    list: codeList,
    renderItem: difjew,
  };

  logs.logga("___ qwhads ___", qwhads);

  function drjw({ listIndex, ...exra }) {
    logs.logga(" __expldf ___", listIndex, exra);

    // listIndex
    if (listIndex) {
      settypeNum(listIndex);
    }
  }

  const oerwwse = {
    basic: {
      // iconvar: "a",
    },
    medium: {
      // iconvar: "a",
      background: "darkblue",
    },
    hard: {
      iconvar: "",
      background: "darkorange",
    },
    expert: {
      // iconvar: "d",
      background: "darkred",
    },
  };

  const dfijer = {
    horiz: true,
    bearName: "Code list level choose",
    capitaliseTypeText: true,
    list: ["basic", "medium", "hard", "expert"],
    // useDictList: true,
    typeList: "button",
    onClick: drjw,
    dictvar: oerwwse,
    logtrue: "",
  };

  const xcovksd = [{ obj: "Hello" }, { obj: "sder" }];

  const jsidase = {
    bearName: "adq",
    list: xcovksd,
    typeList: "button",
  };

  const okfdsd = (
    <>
      {/*  */}
      {/* <BearList {...jsidase} /> */}
      <BearList {...dfijer} />
      {codeList && difjew(codeList[0])}
      {/* <BearList {...qwhads} /> */}
      {/* <BearCarousel {...qwhads} /> */}
    </>
  );

  return okfdsd;
}
