import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "../../index";
import * as soco from "../../consts/socialConst";
import { BearTextMedia } from "../BearTextMedia";
import { BearList } from "../list/BearList";
import { BearCheckMain } from "../check/BearCheckMain";

export function BearSocialBase({
  //
  shareLink,
  shareText,
  userText,
  iconSide,
  nameTrue,
  iconPop,
  dictvar,
  iconStyle,
  embedCode,
  itemConfig,
  ...sdfsrew
}) {
  // 1const
  const [type, setType] = useState("");
  const [cosNamB, setcosNamB] = useState();
  const sodkfwe = "asdqweqs";

  userText = cosNamB ? cosNamB : userText;
  // userText = "okwqeasd sodkdsfo";
  const sdokfwe = userText ? `&usrn=${userText}` : "";

  shareLink =
    //
    // shareLink + "sdokfwe";
    shareLink + sdokfwe;

  let zoeqasd =
    //
    cosNamB;
  // "cosNamB"

  function iasjde({
    //
    typevar,
    iconvar,
    iconText,
    textvar,
    toolText,
    styleIcon,
    style,
    copyLink,
    ...asswd
  }) {
    // toolText = "Share on " + toolText;

    const sdfebvjf = {
      ...style,
    };

    const fdjwqe = <>{/*  */}</>;

    let mainIco = {
      iconConfig: {
        className: "pointer",
        style: {
          fontSize: "0.9em",
          // width: "50px",
          // height: "50px",
          borderRadius: "60%",
          padding: "10px",
          ...styleIcon,
          ...iconStyle,
        },
      },
    };

    let saewawe = iconSide && {
      textvar: toolText,
      ...mainIco,
    };

    let ikasde = iconPop && {
      popConfig: {
        trigger: "click",
        content: toolText,
      },
    };

    // textvar: toolText,
    // left: iconvar,
    // popContent: toolText,

    const jsaease = {
      ...saewawe,
      ...ikasde,
      ...itemConfig,
      ...mainIco,
      iconvar,
      noVertTop: true,
      padvar: 5,
      ...asswd,
    };

    logs.logga("___ jsaease ___", jsaease);

    const gfnmeir = (
      <>
        <BearTextMedia {...jsaease} />
        {/* <BearFloat {...jsaease} /> */}
        {/* dowqe */}
      </>
    );

    const sdjerw =
      //
      typevar == "facebook";
    // true

    if (sdjerw) {
      // 1console
      logs.logga(typevar + "___ns Link Social FULL ___", jsaease);
      logs.logga(typevar, "___ mainIco ___", mainIco);
    }

    return gfnmeir;
  }

  const sdije = {
    className: "buttonHover expandHover",
  };

  const niajdw = [
    //
    "twitter",
    // "twitterdm",
    // "linkedin",
    // ""
  ];

  function sadqwe({ itemName, ...cvdfa }) {
    //

    const jweqwe = !dictvar
      ? cvdfa
      : {
          ...dictvar[itemName],
          ...cvdfa,
        };

    logs.logga("___ jweqwe ___", jweqwe);

    let osdasew =
      //
      iasjde({ iconvar: itemName, ...jweqwe });
    // "qplwqe";

    logs.logga("___ osdasew ___", osdasew);

    return osdasew;
  }

  let okaasad = [
    //
    "facebook",
    "twitter",
    "whatsapp",
    "reddit",
    "hackernews",
    "embed",
    "copy",
  ];

  const ijsadwe = {
    dictvar: soco.authListDict,
    // list: okaasad,
    renderItem: sadqwe,
    typeTrue: "t",
    iconSide: iconSide,
    // horiz: true,
    // itemConfig: sdije,
    // linkConfig: linksos,
    ...sdfsrew,
  };

  logs.logga("___ LISTSOCIAL ___", ijsadwe);

  const compBase = (
    <>
      <BearList {...ijsadwe} />
    </>
  );

  //
  const ijfdewr = BearCheckMain("BearSocialShare", compBase, ijsadwe);

  return ijfdewr;
}
