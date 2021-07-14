import React, { useEffect, useRef, useState, createContext } from "react";
import {
  //
  turnarray,
  mapDictKeyToValue,
  logs,
  getLocal,
  setLocal,
} from "@SillyScribe95/bedia-shared";
import { sortChatRel, testChatDit } from "../const/ChatConst";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  //   1const
  const [tim, settim] = useState();

  // 1test
  const testTrue =
    //
    // "asqewe";
    "";
  //

  function testCheck(bitOne, bitTwo) {
    return testTrue ? bitOne : bitTwo;
  }

  //

  // 1form
  const [viewType, setviewType] = useState();

  // 1local
  // 1local 1storage
  const chatID = "localocxvkfds";
  const loclData = getLocal(chatID);

  // 1data
  const xcvkbmdf =
    //
    loclData;
  // testChatDit;
  //

  const [chatConstBase, setchatConstBase] =
    //
    // xcvkbmdf;
    useState(xcvkbmdf);

  // 1dict
  const chatConstDict = chatConstBase;

  // 1list
  const listEnd = RendChatList(chatConstDict);
  const fkdoer =
    //
    listEnd;
  // listEnd.sort(sortChatRel);

  const [listState, setlistState] = useState(fkdoer);
  const chatConstList = listState;
  const totalMessageDrafts = mapArrayCombine(chatConstList, "drafts");

  // 1overnew
  const limitLength = 5;
  const overLength = totalMessageDrafts.length >= limitLength;
  const authComplete = overLength;

  function mapArrayCombine(arry, att) {
    const arryo = [];
    arry.map(fkdasd);

    function fkdasd(sodfsd) {
      const sidjfe = sodfsd[att];
      if (sidjfe) {
        sidjfe.map((cok) => arryo.push(cok));
      }
    }

    return arryo;
  }

  // 1sort 1dict
  function RendChatList(lstoas) {
    const dicfto = mapDictKeyToValue(lstoas, "name");
    const chattos = Object.values(dicfto);
    return chattos;
  }

  function setChatStorage(cxvksf) {
    const endList = RendChatList(cxvksf);

    logs.logga("___ setChatStorage ___", {
      //
      endList,
      cxvksf,
    });

    setlistState(endList);
    setchatConstBase(cxvksf);
    setLocal(chatID, cxvksf);
  }

  // 1contacts
  const [newContact, setnewContact] = useState();

  // 1layout
  const [wrapmessageItems, setwrapmessageItems] = useState(true);

  const sdjfe = {
    name: "Nathan Singh",
    message: "",
  };
  const ijfre =
    //
    "";
  // sdjfe;

  // 1draft
  const [newDraft, setNewDraft] = useState(ijfre);

  // 1console
  const baseScript = {
    local: {
      //
    },
    chat: {
      loclData,
      chatConstBase,
      setchatConstBase,
      chatConstList,
      chatConstDict,
      // setChatStorage,
      newDraft,
    },
    draft: {
      newDraft,
      totalMessageDrafts,
      overLength,
    },
    limit: {
      //
    },
    base: {
      //   hereo: hereo,
    },
    form: {
      //
    },
  };

  const okwe =
    //
    // "";
    "draft";

  const osdre = okwe ? baseScript[okwe] : baseScript;
  logs.logga("___CONTEXT LOGS ___", osdre);

  const xvokbcv = {
    chatConstBase,
    setchatConstBase,
    chatConstList,
    chatConstDict,
    setChatStorage,
    newContact,
    setnewContact,
    //
    // 1draft
    newDraft,
    setNewDraft,
    //
    //
    wrapmessageItems,
    setwrapmessageItems,
    //
    //
    viewType,
    setviewType,
    testCheck,
    // FORM
  };

  // 1return 1end
  return (
    <MainContext.Provider
      //
      value={xvokbcv}
    >
      {props.children}
    </MainContext.Provider>
  );
};
// }

export default MainContextProvider;
