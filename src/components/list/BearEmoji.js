import React, {
  //
  useState,
  useContext,
} from "react";
import { BearPopover } from "../BearPopover";
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
    padding: "5px 10px",
    borderRadius: "50%",
  };

  const sfjaw = {
    className: sadwqe,
    style: oksae,
    ...itemConfig,
  };

  // 1tick
  // function goTick() {
  //   logs.logga("___ qweq ___", qweq);

  //   const bocd = onlyEmoji ? emoji : <>{emoji}</>;

  //   const qwtgsa = chosenTrue && BearIcon("tick");

  //   // 1emoji
  //   const okaew = {
  //     mainObj: bocd,
  //     smallObj: qwtgsa,
  //     alignvar: "topRight",
  //   };

  //   const lfdijg = (
  //     <>
  //       {bocd}
  //       {qwtgsa}
  //     </>
  //   );

  //   return lfdijg;
  // }

  function saokde({ chosenTrue, emoji, textvar, ...qweq }) {
    const lsadwe =
      //
      emoji;
    // textvar;
    // lfdijg;
    // bocd
    // ureytue;

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

    const oksaew = {
      obj: lsadwe,
      flexTrue: true,
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

    return <BearPopover {...aokdwe} />;
  }

  function Listso({ ...ssdwedf }) {
    //

    // 1chosen
    const djifwsare = {
      style: {
        border: "2px solid black",
        borderRadius: "50%",
        // background: "blue",
      },
      className: "shadowBottom",
    };

    const ijdwq = {
      // style: { background: "red" },
      chosenItem: asdoe,
      chosenConfig: djifwsare,
      // chooseTick
      chooseTrue: true,
      returnArray: true,
      clickSingle: true,
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
      // typeList: "div",
      renderItem: asdoke,
      horiz: true,
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
