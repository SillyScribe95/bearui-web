import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { BearDiv } from "../BearDiv";
import { BearTabs } from "./BearTabs";
import { BearCarousel } from "./BearCarousel";

export function BearTabMain({
  list,
  dictvar,
  // notab
  bearName,
  noTabs,
  tabConfig = {},
  itemConfig,
  initialItem,
  noBottom,
  ...args
}) {
  // 1const
  initialItem = initialItem ? initialItem : list[0];

  const [currView, setcurrView] = useState(initialItem);

  // 1baseargs
  const ijsde = {
    bearName,
    list,
    dictvar,
    ...args,
  };

  const ijsdaw = dictvar[currView];

  function Tbos({ style, ...asdew }) {
    function dsiwer({ itemName, ...sdsaea }) {
      logs.logga("___ sdsaea ___", itemName);
      setcurrView(itemName);
    }
    const xcvokd = {
      margin: "20px 0",
      ...style,
    };

    const ijsdre = {
      chosenItem: currView,
      onClick: dsiwer,
      ...asdew,
      ...ijsde,
      style: xcvokd,
    };

    logs.logga("___ ijsdre ___", ijsdre);

    // return "asok";
    return <BearTabs {...ijsdre} />;
  }

  function Carbraro() {
    const isdjwre = {
      slideNum: 0,
      typeList: "return",
      ...ijsde,
    };

    return BearCarousel(isdjwre);
  }

  function DoneIMASO() {
    let qeswe = "";

    // switch (currView) {

    // }
    qeswe = ijsdaw["item"];

    const dfigjr =
      //
      itemConfig;

    return <BearDiv {...dfigjr}>{qeswe}</BearDiv>;
  }

  // function Msaijew(){
  //   return
  // }

  const okfdsd = (
    <>
      {/*  */}
      {!noTabs && Tbos(tabConfig)}
      {/* <Carbraro /> */}
      {!noBottom && <DoneIMASO />}
    </>
  );

  // 1console
  logs.logga(bearName, "___ BEARTBMAIN ___", {
    currView,
    ijsdaw,
    // ijsde
  });

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
