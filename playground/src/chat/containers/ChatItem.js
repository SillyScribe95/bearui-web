import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearCopy,
  BearModel,
  BearDiv,
  BearFloat,
  BearIconText,
} from "bearui-web";
import {
  //
  logs,
  removeItemArray,
  copyTextToClipboard,
} from "@SillyScribe95/bedia-shared";
import { MainContext } from "../context/ChatContext";
import { copyChatText } from "../const/ChatConst";

export function ChatItem({
  //
  folder,
  name,
  id,
  message,
  ...args
}) {
  // 1const
  const [copied, setcopied] =
    //
    // ["", ""];
    useState();
  // const copied = "";

  const { setNewDraft, wrapmessageItems, setChatStorage, chatConstDict } =
    useContext(MainContext);

  // 1copy
  function messaFInd() {
    // const isadjawe =
    // const

    logs.logga("___ messaFInd ___");

    // copyChatText(message);
    copyTextToClipboard(message);

    setcopied(true);
    setTimeout(function () {
      setcopied(false);
    }, 1000);

    // setcopied({ title: message });
  }

  // 1wrap
  const wrappo =
    //
    true;
  // wrapmessageItems

  const ikfesae = wrappo && {
    className: "wrapTwo",
  };

  args = {
    obj: message,
    copyText: message,
    onClick: messaFInd,
    style: {
      padding: "2px 5px",
    },
    ...args,
    ...ikfesae,
    // onCopy: messaFInd,
    // onClick: messaFInd,
  };

  logs.logga("___ message ___", message);

  const vdsa =
    //
    // BearCopy(args)
    BearDiv(args);

  const copio =
    //
    // true;
    copied;

  const jdswre =
    //
    copio && "✔️";
  // copio && "tick";
  // copio ? "tick" : "copy";

  const fhgjr =
    //
    "fadeIn";
  // copio ?

  // 1itck
  const vcokbfd = {
    className: fhgjr,
    style: {
      textAlign: "left",
      // marginRight: "20px",
      width: "45px",
    },
  };

  const isdfe = {
    centerobj: vdsa,
    leftobj: <div {...vcokbfd}>{jdswre}</div>,
    showLeft: true,
  };

  const sdijfsr =
    //
    // message;
    // BearIconText(jdswre, vdsa);
    BearFloat(isdfe);

  const fjdfds = {
    //
    style: {
      width: "100%",
      // background: "red",
      paddingRight: "15px",
    },
    className: "buttonHover",
  };

  const idfjerwa = (
    //
    <BearDiv {...fjdfds}>{sdijfsr}</BearDiv>
  );

  // 1copy
  function xcvbd(xcdf) {
    //
    const sdrer =
      //
      message;

    logs.logga("___ sdrer ___", sdrer);

    setcopied("aokdqw");
    // const jisadsd = removeItemArray()

    // changeItemArr()
  }

  // 1schedule
  function sijas() {
    //
    // logs.logga("oscfas", )
  }

  const difvjd =
    //
    [
      //
      // "edit",
      // "schedule",
      "delete",
    ];

  const ifjdre = {
    dictvar: {
      schedule: {
        iconvar: "clock",
        onClick: sijas,
      },
    },
    list: difvjd,
  };

  // 1delete
  function SAksd() {
    // title
    // message

    // removeItemArray
    const nameAll = chatConstDict[name];
    const ijsdor =
      //
      // chatConstDict;
      // chatConstDict[name];
      nameAll["drafts"];

    // const sidfer

    const asdweas =
      //
      // "";
      removeItemArray(ijsdor, message);

    logs.logga("___ REMOVING MESSAGE ___", {
      //
      // chatConstDict,
      ijsdor,
      // name,
      asdweas,
    });

    const dfigjer = {
      ...chatConstDict,
      [name]: {
        ...nameAll,
        drafts: asdweas,
      },
    };

    // logs.logga("___ dfigjer ___", dfigjer);
    setChatStorage(dfigjer);

    // return "";
  }

  function kcjvdsf() {
    //

    logs.logga("___ EDIT ___");
    setNewDraft({ name, message, id });
  }

  function asdae9() {
    logs.logga("___ DELETE ITEM DRAFT ___");

    SAksd();
  }

  const fgdfijg = {
    // className: "wrap",
  };

  const vxcvc = (
    <>
      Are you sure you want to delete this draft?
      <div {...fgdfijg}>
        {/*  */}
        {/*  */}'{message}'
      </div>
    </>
  );

  const qweasse = {
    // onEdit:
    deleteConfig: {
      warnMessage: vxcvc,
    },
    warnDelete: true,
    onDelete: asdae9,
    onEdit: kcjvdsf,
    itemConfig: {
      noText: true,
    },
    // iconConfig: ifjdre,
    children: idfjerwa,
    ...ifjdre,
  };
  const jsdrwe =
    //
    // idfjerwa;
    BearModel(qweasse);

  return jsdrwe;
}
