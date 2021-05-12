import React from "react";
import * as logs from "../../functions/logFuncs";
import { BearDiv } from "../BearDiv";
import { isEmpty, remove } from "lodash";
// import SelectComp from "./general/SelectComp";
// import * as gens from "../consts/GenStyled";
// import { SelectArray } from "../functions/GlobalFunctions";

export function BearList({
  renderItem,
  obj,
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
  itemStyle = {},
  itemConfig = {},
  spaceBetween,
  //
  // 1horizotal
  centerItem = true,
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
  logs.loggo("___ listvar BBB___", listvar);

  // 1list PREPARE
  // listvar = noRemove ? listvar : removeEmptyArray(listvar);
  listvar = removeItem
    ? remove(listvar, function (currentObject) {
        return currentObject.id != removeItem.id;
      })
    : listvar;
  listvar = listNumber ? listvar.slice(0, listNumber) : listvar;

  logs.loggo("___ listvar CCC___", listvar);

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
      ...itemStyle,
      ...adojaqw("style"),
    };

    function adojaqw(theoasd) {
      //

      const olaqwefs = {
        asdwe: asdwe,
        choseAll: choseAll,
        listarr: listarr,
      };

      logs.loggo("___ CHOOSING ITEM " + theoasd + ":", olaqwefs);

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

    logs.loggo("___ endRet ___", endRet);

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
        asdpkwe = <BearDiv {...endRet} />;
        break;
      case "dict":
        asdpkwe = endRet;
      case "return":
        // asdpkwe = "dict";
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
        // okgs;
        returnArray ? turnarray(okgs) : okgs;

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

    const auewasdash = loadtrue
      ? loadobj
      : selectableTrue
      ? "<SelectComp {...filleoo} />"
      : //
        isjdew;
    // BearDiv(filleoo)

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
  // 1horiz
  function HozBar() {
    //
    const endoa = {
      messvar: messvar,
      ...listArgs,
      listvar: listvar,
      dictvar: dictvar,
      dictFunc: dictFunc,
      selectableTrue: selectableTrue,
      retObj: mapoBap,
    };

    // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

    const okaewq = centerItem && {
      alignContent: "center",
      justifyContent: "space-around",
    };

    const okadwe = {
      flexTrue: true,
      style: okaewq,
      obj: listvar.map(mapoBap),
    };

    // 1console
    // logs.loggo("xxx-LIST-MAIN--args", messvar, listvar, "asd90u12321");
    logs.loggo("xxx-LIST-MAIN--args", endoa, "asd90u12321");
    // gens.messCheck("sd9jqwxas", listMess, "ListMain --AAAA--", oaskdwq);

    const jisad = (
      //
      <BearDiv {...okadwe} />
    );
    // "okafsdf";
    // EndListA();
    // mapoBap();
    // <HorizChoiceBar {...endoa} />;

    return jisad;
  }

  function mapoBap(saokae, indexvr) {
    logs.loggo("___ saokae ___", saokae);

    const asidjwe = saokae["mainObj"];
    const jcvbfd = asidjwe ? asidjwe : EndListA(saokae, indexvr);

    return jcvbfd;
  }

  const sadfwe =
    //
    // "oaksdwqew";
    !listvar ? "" : horizTrue ? <HozBar /> : listvar.map(mapoBap);

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

  // return saokwe;
  return <BearDiv {...saidje} />;
}
