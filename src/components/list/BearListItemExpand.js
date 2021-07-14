import React, {
  //
  useState,
  useContext,
} from "react";
import { logs, turnarray } from "../../index";
import { BearError } from "../BearError";
import { BearButton } from "../button/BearButton";
import { BearTextMedia } from "../BearTextMedia";
import { BearDiv } from "../BearDiv";
import { BearUpper, BearErrMiss } from "../GlobalComps";

export function BearListItemExpand(
  cvbokfe,
  dasfjewr,
  {
    //
    // 1dict
    bearName = "",
    name = "",
    horiz,
    dictTrue,
    dictvar,
    dictFunc,
    typeBullet,
    addDict = {},
    //
    // 1item
    renderItem,
    noOptionObj,
    //
    // 1LOADNG
    loadobj = "",
    loadtrue,

    //
    // 1drag
    dragTrue,
    //
    // 1style
    layoutSpace,
    noItemMargin,
    itemNameStyle,
    itemStyle = {},
    itemConfig = {},
    //
    // 1logs
    logItem,
    //
    // 1between
    lineBetween,
    spaceBetween = "5px",
    //
    // 1selectable
    selectableTrue,
    //
    // 1onclick
    onClick,
    returnArray,
    clickSingle,
    //
    // 1choose
    chooseBaseFunc,
    chooseTrue,
    chosenItem,
    chosenConfig = {},
    //
    // 1error
    //
    // 1text
    capitaliseTypeText,
    pullDictItem,
    //
    typeList,
    containFunc,
    //
    // 1log
    messvar,
    logtrue,
    //
    //
    ...args
  }
) {
  //
  // 1const
  const chosios = chosenItem;

  const asdwe = itemConfig;
  const choseAll = findSelect(dasfjewr);

  const origItem = dasfjewr;
  const fuhease = typeof origItem == "object";
  // 1capitalise
  const dgste = capitaliseTypeText ? BearUpper(cvbokfe) : cvbokfe;

  //   1dict
  function conDit() {
    //

    const sdur = fuhease
      ? origItem
      : {
          itemName: origItem,
          itemType: origItem,
        };

    const iksdase = capitaliseTypeText && {
      textvar: BearUpper(origItem),
    };

    const nisdjfr = dictTrue && dgste;

    return {
      ...sdur,
      ...iksdase,
      ...nisdjfr,
      ...addDict,
    };
  }

  // 1type
  const ijdfwr =
    //
    dictTrue;
  // dictTrue || pullDictItem;
  // capitaliseTypeText || dictTrue;

  const listarr = ijdfwr ? conDit() : dgste;

  function dfasdke(asfds) {
    return dictTrue && adojaqw(asfds);
  }

  let sokwe =
    spaceBetween && horiz
      ? { margin: `0 ${spaceBetween}` }
      : { margin: `${spaceBetween} 0` };

  const dfijgert = itemNameStyle && itemNameStyle[origItem];

  // const soksrs = layoutSpace ? layoutSpace[xcvb] : "50px";
  // 1style
  const mainseo = {
    margin: !noItemMargin && "5px",
    ...sokwe,
    ...itemStyle,
    ...dfijgert,
    ...dfasdke("style"),
  };

  //   1function

  function findSelect(itmCurr) {
    const cvokbsdf =
      //
      chosenItem;
    // chooseTrue ? chosios : chosenItem;

    const itemBase =
      //
      itmCurr;
    // expandItem(itmCurr);

    const selectTrue =
      //
      returnArray && cvokbsdf
        ? cvokbsdf.includes(itemBase)
        : itemBase == cvokbsdf;

    // 1chosen
    const dfbidfg = selectTrue && {
      chosenTrue: true,
      ...chosenConfig,
    };

    const sidjas =
      //
      // bearName == "explore tabs --- ";
      "logtrue";

    if (sidjas) {
      logs.loggu(bearName, "BEARLST- CHOSEN ITEM ", {
        CURREITEM: itemBase,
        CHOSiTEM: cvokbsdf,
        SELECTTRUE: selectTrue,
        CONFIG: dfbidfg,
      });
    }

    return dfbidfg;
  }

  function adojaqw(theoasd) {
    logs.loggu("___ CHOOSING ITEM " + theoasd + ":", {
      asdwe,
      listarr,
      choseAll,
    });

    function sadke(wirew) {
      return wirew && wirew[theoasd];
    }

    const iasda = {
      ...sadke(asdwe),
      ...sadke(choseAll),
      ...sadke(listarr),
    };
    return iasda;
  }

  const ijswe = dictTrue || pullDictItem;
  const endRet = ijswe
    ? {
        ...asdwe,
        ...listarr,
        ...choseAll,
        style: mainseo,
      }
    : dgste;

  if (logtrue) {
    logs.loggu("___ endRet ___", endRet);
  }

  const dictRet = typeof endRet == "object";
  const itmBase = dictRet ? listarr : "";

  const asjds = {
    listarr,
    dictRet,
    endRet,
  };

  // 1console
  // messvar = "sdfwer";
  // logtrue = "oaskd";

  if (logtrue) {
    logs.loggu(bearName + "___" + name + "---BrList---", asjds);
  }

  function rettobjoo(objo, aokd) {
    const oksdf = {
      ...endRet,
      ...aokd,
    };

    const dsifjw = dictRet
      ? oksdf
      : {
          ...oksdf,
          obj: listarr,
        };

    if (logtrue) {
      logs.loggu(bearName, "___ dsifjw ___", {
        RENDERTYPE: typeList,
        ...dsifjw,
      });
    }

    return objo(dsifjw);
  }

  let asdpkwe = "";
  switch (typeList) {
    case "div":
      asdpkwe = rettobjoo(BearDiv);

      break;
    case "iconText":
    case "textMedia":
      // asdpkwe = "sodawewqs";
      asdpkwe = rettobjoo(BearTextMedia);

      break;
    case "button":
      let sdfker = {
        itemType: "button",
      };
      asdpkwe = rettobjoo(BearTextMedia, sdfker);

      break;
    case "dict":
      asdpkwe = endRet;
      break;
    case "return":
      asdpkwe = <BearDiv {...endRet} obj={listarr} />;
      break;

    default:
      const findobj = endRet.renderItem ? endRet.renderItem : renderItem;
      const noContain =
        //
        "";
      // dictRet && !findobj
      // dictRet && !findobj && !typeList && !containFunc;

      if (logtrue) {
        logs.loggu("___ beListItem FINAL ___", {
          findobj,
          noContain,
        });
      }

      function finLog(sdasd) {
        if (logItem) {
          logs.logga(bearName, "_ BLIST ITEM RENDER__", sdasd);
        }

        return findobj(sdasd);
      }

      function findObjPress() {
        const jsdw = typeof findobj;
        const trueGo = jsdw == "function";

        logs.logga("___ trueGo ___", { findobj, jsdw, trueGo });

        return trueGo ? (
          <BearDiv {...endRet} obj={finLog(endRet)} />
        ) : (
          BearError("must be a function, not " + jsdw)
        );
      }

      asdpkwe =
        //
        noContain
          ? BearErrMiss("renderItem / typeList", bearName, "BearList")
          : findobj
          ? findObjPress()
          : !dictRet && <BearDiv {...endRet} obj={listarr} />;
  }
  //

  const isjdew =
    //
    dragTrue ? "<DragBase />" : asdpkwe;

  // 1onclick
  const dfgjs = !clickSingle;
  const clickBase = dfgjs ? conDit() : dgste;

  function clickList() {
    const asd0okw =
      //
      clickSingle;

    const okgs = asd0okw
      ? origItem
      : {
          //
          ...clickBase,
          ...args,
        };

    let fijsde =
      //
      // okgs;
      returnArray ? turnarray(okgs) : okgs;

    const clickEnd = endRet.onClick ? endRet.onClick : onClick;

    if ("logtrue") {
      logs.loggu(bearName + "___ OCLICK FUNC ___", {
        FUNCTION: clickEnd,
        ITEM: fijsde,
        okgs,
        cvbokfe,
        choseAll,
        origItem,
        fuhease,
      });
    }

    if (clickEnd) {
      clickEnd(fijsde);
    }
  }

  const filleoo = {
    onClick: clickList,
    span: true,
    obj: isjdew,
  };

  // 1console
  if (logtrue) {
    logs.loggu(bearName, "___ itmExpand ___", {
      origItem,
      itemNameStyle,
      CLICK: filleoo,
      STYLE: mainseo,
    });
  }

  const auewasdash = loadtrue
    ? loadobj
    : selectableTrue
    ? "<SelectComp {...filleoo} />"
    : //
      // isjdew;
      BearDiv(filleoo);

  const ijsew =
    //
    // "";
    lineBetween && <hr />;

  // const saewe = origItem["title"] && titleTrue;
  // const sdijfw = saewe && <Tjisae {...origItem} />;

  // typeBullet =
  const ijdsasew =
    //
    !typeBullet ? auewasdash : <li>{auewasdash}</li>;

  const asidjwe = (
    <>
      {/* {sdijfw} */}
      {ijdsasew}
      {ijsew}
    </>
  );

  return asidjwe;
}
