import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";
//   import SelectMain from "./SelectMain";
//   import HorizChoiceBar from "./HorizChoiceBar";
import { BearList } from "./BearList";
import { emojiDict } from "../../consts/emojiConst";
import * as logs from "../../functions/logFuncs";
import {
  // EmojiLabel,
  EmojiLabelMap,
  mapEmojiFace,
} from "../../functions/emojiFuncs";

export function BearEmoji({
  initialValue,
  selectBlue,
  fontSize,
  typevar,
  listvar,
  onlyEmoji,
  itemConfig,
  ...sdaa
}) {
  //
  const ijsae =
    //
    emojiDict;

  const kjsijsa = [
    //
    "funny",
    "happy",
    "interest",
    // "surprise",
    "sad",
    // "angry",
  ];

  const jdfew =
    //
    // kjsijsa
    listvar ? listvar : kjsijsa;

  //
  //

  let plaqwe =
    //
    // greyHover circleHover
    "expandHover pointer";

  const sadwqe =
    //
    plaqwe;
  // selectBlue ? plaqwe : "pointer";

  const oksae = {
    fontSize: fontSize,
    // background: "red",
    // padding: "40%",
    // borderRadius: "50%",
  };

  const sfjaw = {
    className: sadwqe,
    style: oksae,
    // bediaTrue: true,
    ...itemConfig,
  };

  function saokde({ chosenTrue, emoji, textvar, ...qweq }) {
    logs.logga("___ qweq ___", qweq);

    const dsfge = {
      minWidth: "100px",
      fontSize: "22px",
    };

    const xdffsd = {
      obj: textvar,
      style: dsfge,
    };

    const sdfiewrw = (
      //
      // "sodkqeq"
      <BearDiv {...xdffsd} />
    );

    const bocd = onlyEmoji ? emoji : <>{emoji}</>;

    const qwtgsa = chosenTrue && iconFind("tick");
    const okaew = {
      mainObj: bocd,
      smallObj: qwtgsa,
      alignvar: "topRight",
    };

    const lfdijg = (
      <>
        {bocd}
        {qwtgsa}
      </>
    );

    const lsadwe =
      //
      lfdijg;
    // bocd
    // ureytue;

    const oksaew = {
      obj: lsadwe,
      ...sfjaw,
    };

    const aokdwe = {
      // style:
      obj: <BearDiv {...oksaew} />,
      popConfig: {
        content: sdfiewrw,
      },
      ...qweq,
    };

    logs.logga("___ aokdwe ___", aokdwe);

    return <BearDiv {...aokdwe} />;
  }

  function Listso({ ...ssdwedf }) {
    //
    const ijdwq = {
      // style: { background: "red" },
      //   chosenItem: asdoe,
      chosenConfig: {
        //
        // className: "shadowBottom",
        // bediaTrue: true,
      },
    };

    function asdoke(sdfswe) {
      logs.loggo("___ asdoke ___", sdfswe);

      let oksadw =
        //
        // "dsfoker";
        saokde(sdfswe);

      return oksadw;
    }

    const dsjs = {
      listvar: jdfew,
      dictvar: ijsae,
      renderItem: asdoke,
      //   chooseBaseFunc: setasdoe,
      horizTrue: true,
      returnArray: true,
      itemConfig: sfjaw,
      // mainClass: "pointer",
      clickSingle: true,
      // chooseBedia: true,
      logtrue: "false",
      // returnTrue: true,
      // constTrue: true,
      ...ijdwq,
      ...ssdwedf,
    };

    logs.loggo("___ emojListo MAIN LIST  ___", dsjs);

    return <BearList {...dsjs} />;
  }

  const ijadw = {
    style: { textAlign: "left" },
  };

  // 1select
  function Selectos() {
    // const sidjew = {
    //   value:
    // }

    const fdogkre =
      //
      // jdfew
      Object.keys(ijsae);

    const awwsa = EmojiLabelMap(fdogkre);
    const adsfw = EmojiLabelMap(initialValue);

    const ijsaew = {
      initOptions: awwsa,
      limitvar: 3,
      ...sdaa,
      logtrue: false,
      messvar: "emojListo",
      value: adsfw,
    };

    let mssade =
      //
      // fdogkre;
      ijsaew;

    logs.logga("___ EmoijList MAIN ___", mssade);

    const asiew =
      //
      "";
    //   <SelectMain {...ijsaew} />;

    return asiew;
  }

  let endValue = "";
  switch (typevar) {
    case "select":
      endValue = Selectos();
      break;
    case "base":
      endValue = <>{mapEmojiFace(jdfew)}</>;

      break;

    default:
      endValue = <Listso {...sdaa} />;
  }

  return endValue;
}
