import { bearlog } from "../index";

import React, {
  //
  useState,
  useContext,
  useEffect,
} from "react";

import { BearDiv } from "./BearDiv";
import { BearFloat } from "./BearFloat";
import { BearButton } from "./button/BearButton";
// import { ImageTextList } from "../functions/GlobalFunctions";
// import { CopyToClipboard } from "react-copy-to-clipboard";

import { vertAlign } from "../consts/genStyle";
import { BearList } from "./list/BearList";
import { getListComplex } from "./list/getListComplex";
import { BearTextMedia } from "./BearTextMedia";
import { BearError } from "./BearError";
import { BearListMap } from "./list/BearListMap";
import { BearInputBase } from "./input/BearInputBase";
import { BearCheckMain } from "./check/BearCheckMain";
import { objectTrue } from "../functions/dictFuncs";

const size = {
  // viewL: "700px",
  viewL: "780px",
  custHeight: "650px",
  //
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// percentQu: `${percentPlayed}`,
const MediaQueries = {
  viewtype: "(min-width: 780px)",
  customHeight: "(min-height: 650px)",
};

function aazafadsfas() {
  const widthVary = window.matchMedia(MediaQueries.viewtype);
  const heightVary = window.matchMedia(MediaQueries.customHeight);
  return !widthVary.matches;
}
// export const mobileNot = widthVary.matches;
export const bearMobileView =
  //
  aazafadsfas();

export function BearQuote(sdofkr) {
  let leftie = "'";
  let rightie = "'";
  const vobdesa =
    //
    // leftie;
    leftie + sdofkr + rightie;

  const ijsdaw = {
    //
    obj: vobdesa,
  };

  return vobdesa;
  // return <BearDiv span {...ijsdaw} />;
}

export function BearIconList(asdfds) {
  const sjdrase = {
    tye,
    noText: true,
    ...asdfds,
  };
}

export function BearDivMain(asok, zxsd) {
  //

  const asdwe = {
    obj: asok,

    ...zxsd,
  };

  return BearDiv(asdwe);
}

export function BearSwitch(item, dict, oksdfew = "") {
  return item
    ? dict[item]
      ? dict[item]
      : BearError(`BearSwitch doesn's have a ${item}`)
    : oksdfew;
}

export function BearSurround() {
  //
  // const ikasae
  return "";
}

export function BearAttrNeeds(bearName) {
  //
  // const ikasae
  return "";
}

export function BearIconText(icon, text, osdfds) {
  //
  const bodfg = {
    iconvar: icon,
    textvar: text,
    ...osdfds,
  };

  const sadwew = <BearTextMedia {...bodfg} />;

  return sadwew;
}

export function BearImageText(image, text, osdfds) {
  //
  const bodfg = {
    imagevar: image,
    textvar: text,
    ...osdfds,
  };

  const sadwew = <BearTextMedia {...bodfg} />;

  return sadwew;
}

export function BearWrap({
  elipsisTrue,
  obj,
  pushTrue,
  disVar,
  className,
  lineCount,
  dropLine,
  ...argos
}) {
  //
  const xvobkvds = lineCount ? "wrapTwo" : "wrapMain";
  const okxcvzx = xvobkvds;
  const asdwem = xvobkvds + " " + okxcvzx;
  const lokgos = {
    className: asdwem + " " + className,
    ...argos,
  };

  const pksdf = <div {...lokgos}>{obj}</div>;
  return pksdf;

  //
}

export function BearPossess(item, name, othername = "") {
  const iksdwa = name ? name : othername;
  const isjdfr = iksdwa ? iksdwa + "'s " : "";
  const oasd = isjdfr + item;

  return oasd;
}




export function BearLink(obj, link, ...sdsda) {
  const ksdase = {
    link: link,
    obj: obj,
    ...sdsda,
  };

  const jksdrwa = <BearDiv {...ksdase} />;

  return jksdrwa;
}

export function BearBlankLink(obj, link, ...asd) {
  const ksdase = {
    linkConfig: { outsideTrue: true },
    ...asd,
  };

  return BearLink(obj, link, ksdase);
}

export function BearPlural(stringVar, lengAfter, { noNumber }) {
  var pluralize = require("pluralize");

  var plT = pluralize(stringVar, lengAfter);
  var finalSt = noNumber ? plT : lengAfter + " " + plT;

  return finalSt;
}



export function BearURLParam(param) {
  var url_string = 
  // "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; 
  window.location.href
    
  var url = new URL(url_string);
  var c = url.searchParams.get(param);
  // console.log(c);
  return c;
}





export function BearFlex({
  padvar = "20px",
  list,
  itemStyle,
  style,
  left = "",
  right = "",
  noVertAlign,
  obj,
  ...sae
}) {
  const difreeq = !noVertAlign && vertAlign;

  const kdsse = {
    style: {
      ...difreeq,
      ...style,
    },
  };

  function dokesad({ obj, width, ...asd }) {
    const oksade = {
      style: {
        width: width,
        textAlign: "left",
        marginRight: padvar,
        ...itemStyle,
      },
      ...asd,
    };

    bearlog.lug("___ BearFlex ITEM ___", oksade);

    return <div {...oksade}>{obj}</div>;
  }

  function redndo(asdwa) {
    bearlog.lug("___ bearflex MAIN  ___", asdwa);

    const ijase = {
      obj: asdwa,
    };
    // asdwa.obj
    //   ? asdwa
    //   : {
    //       obj: asdwa,
    //     };

    return dokesad(ijase);
  }

  function RendFlex() {
    const sdijrwe = {
      obj: left,
    };

    const ijasew = {
      obj: right,
      style: {
        marginLeft: "auto",
      },
    };

    const saijwe = (
      <>
        <BearDiv {...sdijrwe} />
        <BearDiv {...ijasew} />
      </>
    );

    return saijwe;
  }

  const okdsse = list ? list.map(redndo) : <RendFlex />;

  const vbdrewe = {
    obj: okdsse,
    flex: true,
    ...kdsse,
    ...sae,
  };
  const sadwew = <BearDiv {...vbdrewe} />;

  return sadwew;
}

export function BearCopy({ copyText, obj, copyMessage, ...asd }) {
  // const [copssetot, setcopssetot] = useState(obj);

  // function sajwe() {
  //   // const iewawe = <div>Copied!</div>;
  //   bearlog.lug("___ CopyMain ___", "CopyMain");

  //   // ShowNote(copyMessage);
  //   // setcopssetot(iewawe);
  // }

  const ovkewwe = {
    text: obj ? obj : copyText,
    // onCopy: sajwe,
    ...asd,
  };

  const iawe = (
    <>
      {/* <CopyToClipboard {...ovkewwe}> */}
      {/*  */}
      <span>{obj}</span>
      {/* {copssetot} */}
      {/* </CopyToClipboard> */}
    </>
  );

  return iawe;
}

// 1capitalise
export function BearUpper(sdkrwe) {
  const typeoe = typeof sdkrwe == "string";

  bearlog.lug("___ ijsdr ___", {
    sdkrwe: sdkrwe,
    typeoe: typeoe,
  });

  const idfjgr = typeoe
    ? sdkrwe.charAt(0).toUpperCase() + sdkrwe.slice(1)
    : sdkrwe;

  return idfjgr;
}

export function BearLower(sdkrwe) {
  return sdkrwe.toLowerCase();
}

export function BearSpace(dataVar, asdwe) {
  const kmxvs = {
    obj: " " + dataVar + " ",
    ...asdwe,
  };

  return <BearSpan {...kmxvs} />;
}

export function BearLine(asbdfr) {
  return <hr style={asbdfr} />;
}

export function BearBlock({ children, ...asde }) {
  return BearCheckMain("blboc", children, {
    bearName: "qweoq",
    ...asde,
  });
}

export function BearHeight(height, extra) {
  return <div style={{ height, ...extra }}></div>;
}

export function BearSpan(asdwe) {
  return <BearDiv span {...asdwe} />;
}

// export function ElStripo(dataVar) {
//   return         <Elements stripe={stripePromise}>
//             {dataVar}
//         </Elements>
// }

export function BearBorder(color, radius, sdfr = {}) {
  const okfg = objectTrue(sdfr);
  const vijder = okfg
    ? cxadfa(color, radius, sdfr)
    : BearError("Third argument of 'BearBorder' must be an object");

  return vijder;
}

export function cxadfa(
  color,
  radius,
  { noPadding, borderSize = "2px", ...asd } = {}
) {
  //
  const sjdfrwe = noPadding
    ? {
        // padding: "0px",
      }
    : {
        padding: "5px",
      };

  const ijsde = {
    border: borderSize + " solid " + color,
    borderRadius: radius,
    ...sjdfrwe,
    ...asd,
    // ...sjdfrwe,
  };

  return ijsde;
}

export function BearBackBorder(color, ...sdfew) {
  const ijsde = {
    background: color,
    ...BearBorder(color, ...sdfew),
  };

  return ijsde;
}

export function BearButtonList(sfkr) {
  //
  sfkr = {
    typeList: "button",
    ...sfkr,
  };

  return BearList(sfkr);
}



// 1fixside


