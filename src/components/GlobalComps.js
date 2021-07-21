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

import { logs } from "../index";
import { vertAlign } from "../consts/genStyle";
import { BearList } from "./list/BearList";
import { getListComplex } from "./list/getListComplex";
import { BearTextMedia } from "./BearTextMedia";
import { BearError } from "./BearError";
import { BearListMap } from "./list/BearListMap";
import { BearInputBase } from "./input/BearInputBase";

// import SearchKnowledge from "../containers/search/SearchKnowledge";
// import { AlignMain } from "./AlignMain";

export function BearLog(...asdf) {
  console.log("___ BearLog ___", ...asdf);
}

export function BearFalseLog(...asdf) {}

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
      : BearError(`BearSwitch doesn's have a ${oksdfew}`)
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

// 1must
export function BearErrArgType(arg, type, { bearName, ...asd }) {
  //

  return BearError(
    bearName + "'s " + BearQuote(arg) + " argument must be a " + type,
    asd
  );
}

export function BearErrMiss(...asd) {
  //

  return BearError(BearMissing(...asd));
}

export function BearMissing(attr, mainnum, aseqwe = "Your component") {
  //
  const nisdfrw = mainnum ? mainnum : aseqwe;
  const kdsdae = (
    <>
      {/*  */}
      {BearQuote(nisdfrw)}'s
      {BearSpace(BearQuote(attr))}
      attribute is empty or missing.
      {/*  */}
    </>
  );

  const sadwew =
    //
    kdsdae;

  return sadwew;
}

export function InputForm({ ...sae }) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"

  const sadwew =
    //
    "";
  // <Input {...sae} />;

  return sadwew;
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

export function linkBase(link, objvar, osdfds) {
  const dkfdsfre = {
    link: link,
    obj: objvar,
    ...osdfds,
  };

  const sadwew = <BearDiv {...dkfdsfre} />;

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

// 1list
export function ListReturn({ ...sae }) {
  const sadwew = <BearList returnTrue {...sae} />;

  return sadwew;
}

export function ListFlex({ ...sae }) {
  const sadwew = <BearList returnTrue {...sae} />;

  return sadwew;
}

export function BearFlex({
  padvar = "20px",
  list,
  itemStyle,
  style,
  leftobj,
  rightobj,
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

    logs.logga("___ BearFlex ITEM ___", oksade);

    return <div {...oksade}>{obj}</div>;
  }

  function redndo(asdwa) {
    const ijase = asdwa.obj
      ? asdwa
      : {
          obj: asdwa,
        };

    return dokesad(ijase);
  }

  function RendFlex() {
    const sdijrwe = {
      obj: leftobj,
    };

    const ijasew = {
      obj: rightobj,
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

export function FlexHorz({ children, horiz }) {
  //
  const ijdrwer = {
    spacing: 10,
    direction: horiz && "row",
  };

  return <Stack {...ijdrwer}>{children}</Stack>;
}

// 1slider
export function SliderMain({ ...sae }) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"

  const sadwew =
    //
    "";
  // <Slider {...sae} />;
  // <Slider marks={marks} step={null} defaultValue={37} />

  return sadwew;
}

// 1input
export function InputMain({ ...sae }) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"

  const sadwew =
    //
    "";
  // <Input {...sae} />;

  return sadwew;
}

// 1image
export function ImageAlign({
  //
  imageConfig,
  ...argo
}) {
  //
  //

  const okswe = <ImageMain {...imageConfig} />;

  argo = {
    mainObj: okswe,
    ...argo,
  };

  logs.logga("argo-zzz", argo, "asd09js");

  //
  return "";
  //   return <AlignMain {...argo} />;
}

export function ImageGroup({ list, ...sae }) {
  // max size
  const sadwew = (
    <AvatarGroup {...sae}>
      {list.map((asowe) => (
        <ImageMain typevar="chakra" {...asowe} />
      ))}
    </AvatarGroup>
  );

  return sadwew;
}

export function PagePad({ left = "", padvar = "38vw", ...sae }) {
  const oksae = left
    ? {
        paddingRight: padvar,
      }
    : {
        paddingLeft: padvar,
      };

  const sadwew = {
    ...sae,
    style: oksae,
  };

  return <BearDiv {...sadwew} />;
}

export function BearCopy({ copyText, obj, copyMessage, ...asd }) {
  // const [copssetot, setcopssetot] = useState(obj);

  // function sajwe() {
  //   // const iewawe = <div>Copied!</div>;
  //   logs.logga("___ CopyMain ___", "CopyMain");

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

  logs.logga("___ ijsdr ___", {
    sdkrwe: sdkrwe,
    typeoe: typeoe,
  });

  const idfjgr = typeoe
    ? sdkrwe.charAt(0).toUpperCase() + sdkrwe.slice(1)
    : sdkrwe;

  return idfjgr;
}

export function SwitchComp(itemType, args) {
  let sokae = "";
  switch (itemType) {
    case "button":
      const fsdfsad = {
        // className: "buttonHover shadowHover",
        ...args,
      };
      sokae = BearButton(fsdfsad);
      break;
    default:
      sokae = BearDiv(args);
  }

  return sokae;
}

export function LoadMain({
  obj,
  typevar,
  // style,
  rowvar = 10,
  ...sadww
}) {
  const ijsdwqe = {
    // ...style,
    ...sadww,
    title: false,
    paragraph: { rows: rowvar },
    // height: "200px"
  };

  let endValue = "";

  switch (typevar) {
    case "skeleton":
      endValue = "";
      break;

    default:
      endValue = (
        <>
          {/* <Skeleton startColor="pink.500" endColor="orange.500" height="60px" /> */}
          {/* <Skeleton {...ijsdwqe} /> */}
          {/* <SkeletonCircle size="10" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" /> */}
        </>
      );
  }

  return endValue;
}
export function BearSpace(dataVar, asdwe) {
  const kmxvs = {
    obj: " " + dataVar + " ",
    ...asdwe,
  };

  return <BearSpan {...kmxvs} />;
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
  return cxadfa(color, radius, sdfr);
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

export function BearListComp(list, sdfwre) {
  const xcovk = getListComplex(list, sdfwre);

  logs.logga("___ xcovk ___", xcovk);

  const jadew = BearListMap(xcovk, sdfwre);

  logs.logga("___ jadew ___", jadew);

  return jadew;
}

export function argMiss({
  //
  className,
  style,
  ...sdf
}) {
  //
  return sdf;
}

export function argPass({
  //
  id,
  className,
  style,
  name,
  flex,
  obj,
  loadtrue,
  children,
  genConfig,
  ...sdf
}) {
  //
  const dfigjt = {
    ...genConfig,
    id,
    className,
    style,
    obj,
    children,
    name,
    flex,
  };

  return dfigjt;
}

//
//

export function functioMa({ pass, ...sdf }) {
  //
  // const ikasae
  return "";
}

export function InputBaseCheck(sfkr, { noBase, ...asdw }) {
  //
  //

  logs.logga("___InputBaseCheck asdw ___", { noBase, asdw });

  return noBase ? sfkr : BearInputBase(sfkr, asdw);
}

export function BearButtonList(sfkr) {
  //
  sfkr = {
    typeList: "button",
    ...sfkr,
  };

  return BearList(sfkr);
}

export function nameComb(sfkr, oskdfr) {
  //
  // const ikasae
  return sfkr + "___" + oskdfr;
}

// 1function

export function Exmapl(dataVar) {
  const skdfsa = {
    height: "",
  };

  const zxcmsd = (
    <>
      {/* EXAMPLE TEXT  */}
      Hello!
    </>
  );

  const kmxvs = {
    obj: zxcmsd,
    style: skdfsa,
  };

  return <BearDiv {...kmxvs} />;
}
