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
import {
  //
  bearlog,
} from "../../index";
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
  list,
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
    list ? list : kjsijsa;

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
  //   bearlog.lug("___ qweq ___", qweq);

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
      flex: true,
      ...sfjaw,
    };

    const aokdwe = {
      // style:
      popConfig: {
        content: sdfiewrw,
      },
      ...qweq,
    };

    bearlog.lug("___BearEmoji BASE EMOJI ___", aokdwe);

    return <BearDiv {...oksaew} />;
    // return <BearPopover {...aokdwe} />;
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
      bearlog.lug("___ asdoke ___", sdfswe);

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
      list: jdfew,
      dictvar: ijsae,
      // typeList: "div",
      renderItem: asdoke,
      horiz: true,
      itemConfig: sfjaw,
      ...logBaso,
      ...ijdwq,
      ...ssdwedf,
    };

    bearlog.lug("___ emojListo MAIN LIST  ___", dsjs);

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

    bearlog.lug("___ EmoijList MAIN ___", mssade);

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
