import React from "react";
import { logs, BearList, BearDiv, BigButton, HiButton } from "bearui-web";
import { isEmpty, remove } from "lodash";
// import SelectComp from "./general/SelectComp";
// import HorizChoiceBar from "./HorizChoiceBar";
// import * as gens from "../consts/GenStyled";
// import { SelectArray } from "../functions/GlobalFunctions";
// import { Flex } from "@chakra-ui/layout";

export function TestList({
  renderItem,
  typevar,
  listNumber,
  typeList,
  removeEmpty,
  removeItem,
  listvar,
  dictFunc,
  // drag
  dragTrue,
  // log
  messvar,
  logtrue,
  noListObj,
  addTrue,
  addDict = {},
  scrollTrue,
  // SELECT
  selectableTrue,
  selectableConfig,
  // CHOSEN
  chosenItem,
  chosenConfig = {},
  chooseBedia,
  // GENERAL
  genConfig,
  // TITLE
  fixTitle,
  noOptionObj,
  // 1STYLE
  styleList,
  // 1LOADNG
  loadobj = "",
  loadtrue,
  loadNumber = 10,
  // 1onclick
  onClick,
  chooseBaseFunc,
  returnArray,
  clickSingle,
  itemConfig = {},
  spaceBetween,
  //
  // HORIZ
  horizTrue,
  flexTrue,
  //
  // TITLE
  titlevar,
  // DICT
  dictvar,
  lineBetween,
  // COLLAPSE
  collapseTrue,
  ...listArgs
}) {
  logs.logga("___ listvar BBB___", listvar);

  // 1list PREPARE
  // listvar = noRemove ? listvar : removeEmptyArray(listvar);
  listvar = removeItem
    ? remove(listvar, function (currentObject) {
        return currentObject.id != removeItem.id;
      })
    : listvar;
  listvar = listNumber ? listvar.slice(0, listNumber) : listvar;

  logs.logga("___ listvar CCC___", listvar);

  // 1style
  styleList = {
    overflowY: scrollTrue ? "scroll" : "",
    // overflowY: "scroll",
    ...styleList,
  };

  const fullVar = !isEmpty(listvar) || loadtrue;

  function EndListA(coimswe, indexSort) {
    const asdwe = itemConfig;
    const origText = coimswe;
    const cvokbsdf = chosenItem;
    const selectTrue = coimswe == cvokbsdf;

    // 1chosen
    const choseAll = selectTrue && {
      chosenTrue: true,
      ...chosenConfig,
    };
    const dictTrue = dictvar;
    const dgste = dictFunc
      ? dictFunc(coimswe)
      : dictvar
      ? dictvar[coimswe]
      : coimswe;

    const listarr = dictTrue
      ? //
        {
          listName: coimswe,
          ...dgste,
          ...addDict,
        }
      : dgste;

    let sokwe = spaceBetween && { margin: `${spaceBetween} 0` };

    // 1style
    const mainseo = {
      ...sokwe,
      ...adojaqw("style"),
    };

    function adojaqw(theoasd) {
      //

      const olaqwefs = {
        asdwe: asdwe,
        choseAll: choseAll,
        listarr: listarr,
      };

      logs.logga("___ CHOOSING ITEM " + theoasd + ":", olaqwefs);

      const iasda = {
        ...asdwe[theoasd],
        ...choseAll[theoasd],
        ...listarr[theoasd],
      };
      return iasda;
    }

    const endRet = {
      ...asdwe,
      ...listarr,
      ...choseAll,
      style: mainseo,
    };

    logs.logga("___ endRet ___", endRet);

    const findoobj = endRet.obj ? endRet.obj : renderItem;

    const asjds = {
      // selectTrue: selectTrue,
      // itemConfig: asdwe,
      findoobj: findoobj,
      listarr: listarr,
      endRet: endRet,
    };

    // 1console
    // messvar = "sdfwer";
    // logtrue = "oaskd";

    if (logtrue) {
      logs.loggo(messvar + "---listMain---", asjds);
    }

    let asdpkwe = "";
    switch (typeList) {
      case "div":
        asdpkwe = (
          <BearDiv
            {...endRet}
            // {...listarr}
          />
        );
        break;
      case "dict":
        asdpkwe = endRet;
      case "return":
        asdpkwe = <BearDiv {...itemConfig} obj={listarr} />;
        break;

      default:
        asdpkwe = findoobj ? findoobj(endRet) : "NONE";
    }

    const isjdew =
      //
      dragTrue ? "<DragBase />" : asdpkwe;

    function clickList() {
      const asd0okw = clickSingle;
      const okgs = asd0okw ? origText : listarr;
      let fijsde =
        //
        okgs;
      // returnArray ? turnarray(okgs) : okgs;

      const clickEnd = endRet.onClick ? endRet.onClick : onClick;

      // 1onClick
      if (clickEnd) {
        clickEnd(fijsde);
      }
    }

    const filleoo = {
      onClick: clickList,
      obj: isjdew,
    };

    const auewasdash = loadtrue ? (
      loadobj
    ) : selectableTrue ? (
      "<SelectComp {...filleoo} />"
    ) : (
      <BearDiv {...filleoo} />
    );

    const ijsew =
      //
      // "";
      lineBetween && <hr />;

    // const saewe = coimswe["titlevar"] && titleTrue;
    // const sdijfw = saewe && <Tjisae {...coimswe} />;

    const asidjwe = (
      <>
        {/* {sdijfw} */}
        {auewasdash}
        {ijsew}
      </>
    );

    return asidjwe;
  }

  function TitleFix() {
    const iasjew = "";
    return iasjew;
  }

  function mapoBap(saokae, indexvr) {
    logs.logga("___ saokae ___", saokae);

    const asidjwe = saokae["mainObj"];
    const jcvbfd =
      //
      asidjwe ? asidjwe : EndListA(saokae, indexvr);

    return jcvbfd;
  }

  // 1horiz
  function HozBar() {
    const endoa = {
      messvar: messvar,
      ...listArgs,
      listvar: listvar,
      dictvar: dictvar,
      dictFunc: dictFunc,
      selectableTrue: selectableTrue,
      retObj: mapoBap,
    };

    // 1console
    // logs.logga("xxx-LIST-MAIN--args", messvar, listvar, "asd90u12321");
    logs.logga("xxx-LIST-MAIN--args", endoa, "asd90u12321");
    // gens.messCheck("sd9jqwxas", listMess, "ListMain --AAAA--", oaskdwq);

    const jisad =
      //
      "";
    // <HorizChoiceBar {...endoa} />;
    return jisad;
  }

  function Seletio() {
    const asikwe = {
      // ...selectableContext,
      //   obj: 1,
      ...selectableConfig,
    };

    const as83asd =
      //
      "";
    // <SelectArray {...asikwe} />

    return as83asd;
  }

  const sadfwe = !listvar ? "" : horizTrue ? <HozBar /> : listvar.map(mapoBap);

  // 1TITLE
  const showTit = titlevar && !collapseTrue;
  const titlo = showTit && <TitleFix />;
  const asudwe =
    //
    //   fullVar ? selectableTrue ? <Seletio /> : aisjwe : noListObj;
    sadfwe;

  const saokwe = (
    <>
      {titlo}
      {asudwe}
    </>
  );

  const saidje = {
    loadtrue: loadtrue,
    obj: saokwe,
    ...genConfig,
  };

  return <BearDiv {...saidje} />;
}
