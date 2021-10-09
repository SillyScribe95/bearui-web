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

// import SearchKnowledge from "../containers/search/SearchKnowledge";
// import { AlignMain } from "./AlignMain";

export function CheckListExist({
  list,
  dictvar,
  renderItem,
  itemConfig,
  ...aaaa
}) {
  return list.map(function (itemName) {
    const sdijfwe = dictvar ? dictvar[itemName] : itemName;

    const isdjfr = {
      itemName,
      ...itemConfig,
      ...sdijfwe,
    };
    //   const { textvar } = sdijfwe;

    const okfdsd = renderItem(isdjfr);

    return okfdsd;
  });
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

export function linkBase(link, objvar, osdfds) {
  const dkfdsfre = {
    link: link,
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

  bearlog.lug("argo-zzz", argo, "asd09js");

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

export function BearListComp(list, sdfwre) {
  const xcovk = getListComplex(list, sdfwre);

  bearlog.lug("___ xcovk ___", xcovk);

  const jadew = BearListMap(xcovk, sdfwre);

  bearlog.lug("___ jadew ___", jadew);

  return jadew;
}

// mapdict mapobject
export function mapDict(asd) {
  const sdfok = {};
  for (const [key, value] of Object.entries(asd)) {
    if (value) {
      sdfok[key] = value;
    }
  }

  bearlog.lug("___ mapObj ___", sdfok);

  return sdfok;
}

export function listArgPass({
  //
  // 1main
  list,
  typeList,
  containFunc,
  //
  // 1text
  capitaliseTypeText,
  pullDictItem,
  //
  // 1dict
  dictTrue,
  dictvar,
  dictFunc,
  addDict = {},
  //
  // 1item
  renderItem,

  //
  // 1between
  lineBetween,
  spaceBetween,
  //
  // 1onclick
  onClick,
  click,
  returnArray,
  clickSingle,
  //
  // 1choose 1chosen
  chooseBaseFunc,
  chooseTrue,
  chosenItem,
  chosenAttr = "itemName",
  chosenStyle,
  chosenConfig = {},

  ...args
}) {
  const listArgs = {
    // 1main
    list,
    typeList,
    containFunc,
    //
    // 1text
    capitaliseTypeText,
    pullDictItem,
    //
    // 1dict
    dictTrue,
    dictvar,
    dictFunc,
    addDict,
    //
    // 1item
    renderItem,

    //
    // 1between
    lineBetween,
    spaceBetween,
    //
    // 1onclick
    onClick,
    click,
    returnArray,
    clickSingle,
    //
    // 1choose 1chosen
    chooseBaseFunc,
    chooseTrue,
    chosenItem,
    chosenAttr,
    chosenStyle,
    chosenConfig,
  };

  return {
    listArgs: mapDict(listArgs),
    ...args,
  };
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

  bearlog.lug("___InputBaseCheck asdw ___", { noBase, asdw });

  return noBase ? sfkr : BearInputBase(sfkr, asdw);
}

export function SwitchLayout({ children }) {
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
