import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";
//   import BearSelect from "./BearSelect";
//   import HorizChoiceBar from "./HorizChoiceBar";
import { BearList } from "./BearList";
import { emojiDict } from "../../consts/emojiConst";
import * as logs from "../../functions/logFuncs";
import {
  // EmojiLabel,
  EmojiLabelMap,
  mapEmojiFace,
} from "../../functions/emojiFuncs";
import { BearIcon } from "../BearIcon";

export function BearEmoji({
  initialValue,
  selectBlue,
  selectTrue,
  chooseFunc,
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

  const [asdoe, setasdoe] = useState();

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
    // background: "red",
    padding: "5px",
    borderRadius: "50%",
  };

  const sfjaw = {
    className: sadwqe,
    style: oksae,
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

    const qwtgsa = chosenTrue && BearIcon("tick");
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

    logs.logga("___BearEmoji BASE EMOJI ___", aokdwe);

    return <BearDiv {...aokdwe} />;
  }

  function Listso({ ...ssdwedf }) {
    //
    const ijdwq = {
      // style: { background: "red" },
      chosenItem: asdoe,
      chooseTrue: true,
      returnArray: true,
      clickSingle: true,
      chosenConfig: {
        // style: {
        //   background: "blue",
        // },
        // className: "shadowBottom",
      },
    };

    function asdoke(sdfswe) {
      logs.logga("___ asdoke ___", sdfswe);

      let oksadw =
        //
        // "dsfoker";
        saokde(sdfswe);

      return oksadw;
    }

    const kfdgew = {
      clickSingle: true,
    };

    const logBaso = {
      logtrue: "asdas",
      messvar: "BEAEMOJI",
    };

    const dsjs = {
      listvar: jdfew,
      dictvar: ijsae,
      renderItem: asdoke,
      horizTrue: true,
      itemConfig: sfjaw,
      ...logBaso,
      ...ijdwq,
      ...ssdwedf,
    };

    logs.logga("___ emojListo MAIN LIST  ___", dsjs);

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
    //   <BearSelect {...ijsaew} />;

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
