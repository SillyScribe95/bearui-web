import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearDiv,
  BearList,
  BearButton,
} from "bearui-web";
import {
  //
  checkFullArray,
  logs,
} from "@SillyScribe95/bedia-shared";
import { ChatMain } from "./ChatMain";
import { MainContext } from "../context/ChatContext";
import { testChatDit } from "../const/ChatConst";

export function ChatContainer({
  //
  seriesObj,
  ...args
}) {
  // 1const
  const { setChatStorage, setchatConstBase, chatConstList, chatConstDict } =
    useContext(MainContext);

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  args = {
    name: " Nathan Singh",
    // obj: okfdsd,
    ...args,
  };

  function BaseBelow() {
    const sdifwe = {
      new: {
        iconvar: "plus",
        textvar: "New",
      },
      reminder: {
        iconvar: "clock",
        textvar: "Reminders",
      },
    };

    const sdofkr = {
      dictvar: sdifwe,
      list: ["new", "reminder"],
      typeList: "button",
      bearName: " ADQW",
      horiz: true,
      itemConfig: {
        className: "buttonHover",
      },
    };

    return BearList(sdofkr);
  }

  //   1height
  const ifjsd =
    //
    "400px";
  // "40vh"

  const gfuhs = {
    style: { height: ifjsd },
  };

  function sadake() {
    const ijfsrwe =
      //
      testChatDit;
    // chatConstDict

    logs.logga("___ dfjs ___", ijfsrwe);

    setChatStorage(ijfsrwe);
  }

  const sadsjfr = {
    onClick: sadake,
  };

  const iasa = checkFullArray(chatConstList);
  // const shfas = iasa && ChatMain(args);

  const jdsesa = (
    <>
      <button {...sadsjfr}>ijadse</button>
      <BearDiv {...gfuhs}>
        {/*  */}
        {ChatMain(args)}
      </BearDiv>
      <BaseBelow />
    </>
  );

  const jsdfsae = {
    style: {
      padding: "0 20%",
    },
  };

  return <BearDiv {...jsdfsae}>{jdsesa}</BearDiv>;
}
