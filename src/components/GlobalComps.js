import React, {
  //
  useState,
  useContext,
  useEffect,
} from "react";
import { BearDiv } from "../components/BearDiv";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import BearFloat from "./BearFloat";
// import BearButton from "./BearButton";
// import { ImageTextList } from "../functions/GlobalFunctions";
//
//
//
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";
import {
  //
  Skeleton,
} from "antd";
import { vertAlign } from "../consts/genStyle";
import { BearList } from "./list/BearList";
import { BearTextMedia } from "./BearTextMedia";
// import SearchKnowledge from "../containers/search/SearchKnowledge";
// import { AlignMain } from "./AlignMain";

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

export function linkBase(linkvar, objvar, osdfds) {
  const dkfdsfre = {
    linkvar: linkvar,
    obj: objvar,
    ...osdfds,
  };

  const sadwew = <BearDiv {...dkfdsfre} />;

  return sadwew;
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
  listvar,
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

  // listvar = [{
  //   obj:"aaaa"
  // }, {
  //   obj: "bbbb"
  // }]

  const okdsse = listvar ? listvar.map(redndo) : <RendFlex />;

  const vbdrewe = {
    obj: okdsse,
    flexTrue: true,
    ...kdsse,
    ...sae,
  };
  const sadwew = <BearDiv {...vbdrewe} />;

  return sadwew;
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

export function ImageGroup({ listvar, ...sae }) {
  // max size
  const sadwew = (
    <AvatarGroup {...sae}>
      {listvar.map((asowe) => (
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

export function CopyMain({ copyText, obj, copyMessage, ...asd }) {
  // const [copssetot, setcopssetot] = useState(obj);

  function sajwe() {
    // const iewawe = <div>Copied!</div>;
    logs.logga("___ CopyMain ___", "CopyMain");

    ShowNote(copyMessage);
    // setcopssetot(iewawe);
  }

  const ovkewwe = {
    text: copyText,
    onCopy: sajwe,
  };

  const iawe = (
    <CopyToClipboard {...ovkewwe}>
      {/*  */}
      {obj}
      {/* {copssetot} */}
    </CopyToClipboard>
  );

  return iawe;
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
          <Skeleton {...ijsdwqe} />
          {/* <SkeletonCircle size="10" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" /> */}
        </>
      );
  }

  return endValue;
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
