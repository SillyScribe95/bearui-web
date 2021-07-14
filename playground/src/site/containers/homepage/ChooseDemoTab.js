import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearTabs,
  BearTabMain,
  BearDiv,
} from "bearui-web";
import {
  getFirstArr,
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { CodeEncompBear } from "../CodeEncompBear";
import { bearConstDict } from "../../const/bearConst";

export function ChooseDemoTab({
  //
  // seriesObj,
  ...args
}) {
  // 1const

  const nisdjfer =
    //
    "form";
  const [typView, settypView] = useState(nisdjfer);

  //
  function DFskosew() {
    const difgr = {
      // form:
    };

    const xbjfg = [
      //
      "form",
      "list",
      "tags",
    ];

    const difjgret = {
      //
    };

    function goChooseo(zxcv) {
      logs.logga("___ zxcv ___", zxcv);
      settypView(zxcv);
    }

    const dfigjesd = {
      // dictvar:
      bearName: "ChooseTabz",
      list: xbjfg,
      itemConfig: { style: difjgret },
      capitaliseTypeText: true,
      clickSingle: true,
      onClick: goChooseo,
    };

    const xckvds = <BearTabs {...dfigjesd} />;

    const ifjgrew = bearConstDict[typView];

    const djsfer = {
      flex: true,
      ...ifjgrew,
      code: getFirstArr(ifjgrew.codeList),
    };

    logs.logga("___ djsfer ___", djsfer);

    const bqteae = (
      <>
        {/*  */}
        {xckvds}
        {CodeEncompBear(djsfer)}
      </>
    );

    return bqteae;
  }

  const okfdsd = (
    <>
      {/*  */}
      <DFskosew />
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
