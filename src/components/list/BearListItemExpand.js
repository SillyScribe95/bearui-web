import React, {
  //
  useState,
  useContext,
} from "react";
import { bearlog } from "../../index";
import { BearError } from "../BearError";
import { BearButton } from "../button/BearButton";
import { BearTextMedia } from "../BearTextMedia";
import { BearDiv } from "../BearDiv";
import { turnarray } from "../../functions/arrayFuncs";
import { BearUpper } from "../ExportComps";
import { BearErrMiss } from "../ErrorComps";

export function BearListItemExpand(
  cvbokfe,
  dasfjewr,
  {
    //
    bearName = "",
    name = "",
    horiz,
    // 1dict
    dictTrue,
    dictvar,
    dictFunc,
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
    itemClass = "",
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
    click,
    returnArray,
    clickSingle,
    //
    // 1choose
    chooseBaseFunc,
    chooseTrue,
    chosenItem,
    chosenAttr = "itemName",
    chosenStyle,
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
  const asdwe = itemConfig;
  const choseAll = findSelect(dasfjewr);

  const origItem = dasfjewr;
  const fuhease = typeof origItem == "object";

  // 1object
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
    ...itemConfig.style,
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

    let itemBase;
    // INFO: check whether the list item is a full dict or a string
    switch (typeof itmCurr) {
      case "string":
        itemBase = itmCurr;
        break;
      case "object":
        itemBase = itmCurr[chosenAttr]
          ? itmCurr[chosenAttr]
          : itmCurr.id
          ? itmCurr.id
          : itemBase;
        break;
    }

    const selectTrue =
      //
      returnArray && cvokbsdf
        ? cvokbsdf.includes(itemBase)
        : itemBase == cvokbsdf;

    // 1chosen
    const dfbidfg = selectTrue && {
      chosenTrue: true,
      ...chosenConfig,
      style: {
        ...(chosenConfig && chosenConfig.style),
        ...chosenStyle,
      },
    };

    const sidjas =
      //
      // bearName == "explore tabs --- ";
      "logtrue";

    if (sidjas) {
      bearlog.laggu(bearName, "BEARLST- CHOSEN ITEM ", {
        CURREITEM: itemBase,
        CHOSiTEM: cvokbsdf,
        SELECTTRUE: selectTrue,
        CONFIG: dfbidfg,
      });
    }

    return dfbidfg;
  }

  function adojaqw(theoasd) {
    bearlog.laggu("___ CHOOSING ITEM " + theoasd + ":", {
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

  const osdf = itemClass && {
    className: itemClass,
  };

  // 1main
  const sijdfr = {
    ...asdwe,
    style: mainseo,
    ...osdf,
  };

  const ijswe = dictTrue || pullDictItem;
  const zcxvzx = ijswe
    ? {
        ...asdwe,
        ...listarr,
        ...choseAll,
        ...sijdfr,
      }
    : dgste;

  const endRet =
    //
    zcxvzx;

  if (logtrue) {
    bearlog.laggu("___ endRet ___", endRet);
  }

  const dictRet = typeof endRet == "object";
  const itmBase = dictRet ? listarr : "";

  // 1chosen LOG
  const chslog = { chosenItem, dasfjewr, cvbokfe };

  const asjds = {
    ...chslog,
    // listarr,
    // dictRet,
    // endRet,
  };

  // 1console
  // messvar = "sdfwer";
  // logtrue = "oaskd";

  bearlog.lug(bearName + "___" + name + "---BrList---", asjds);

  function rettobjoo(objo, aokd) {
    const oksdf = {
      children: endRet.itemName,
      ...endRet,
      ...aokd,
    };

    const dsifjw = dictRet
      ? oksdf
      : {
          ...oksdf,
          obj: listarr,
        };

    bearlog.lug(bearName, "___ dsifjw ___", {
      RENDERTYPE: typeList,
      objo,
      ...dsifjw,
    });

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
      // asdpkwe = "adsfaswqreq";
      asdpkwe = <BearDiv {...sijdfr} obj={listarr} />;
      break;

    default:
      const findobj = endRet.renderItem ? endRet.renderItem : renderItem;
      const noContain =
        //
        "";
      // dictRet && !findobj
      // dictRet && !findobj && !typeList && !containFunc;

      bearlog.lug("___ beListItem FINAL ___", {
        findobj,
        asdpkwe,
        noContain,
      });

      function finLog(sdasd) {
        let fsadfsd;
        let kdfsdf = typeof sdasd;

        // 1findobj
        bearlog.lug("___ sdasd ___", { sdasd, kdfsdf, sijdfr });
        switch (kdfsdf) {
          case "object":
            fsadfsd = findobj(sdasd);
            break;
          default:
            fsadfsd = BearDiv({
              ...sijdfr,
              obj: findobj(sdasd),
            });
        }

        if (logItem) {
          bearlog.lug(bearName, "_ BLIST ITEM RENDER__", sdasd);
        }

        return fsadfsd;
      }

      function findObjPress() {
        const jsdw = typeof findobj;
        const trueGo = jsdw == "function";

        bearlog.lug("___ trueGo ___", { findobj, jsdw, trueGo });

        return trueGo
          ? finLog(endRet)
          : BearError("must be a function, not " + jsdw);
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

  // 1onclick LIST
  const dfgjs = !clickSingle;
  const clickBase = dfgjs ? conDit() : dgste;

  function clickList() {
    clicknons(onClick, "onClick");
    clicknons(click, "click");
  }

  function clicknons(typasd, nameasd) {
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

    const clickEnd = endRet[nameasd] ? endRet[nameasd] : typasd;

    const sdnfsw = {
      FUNCTION: clickEnd,
      ITEM: fijsde,
      okgs,
      cvbokfe,
      choseAll,
      origItem,
      fuhease,
    };

    bearlog.lug(bearName, "___ OCLICK FUNC ___", sdnfsw);

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
  bearlog.laggu(bearName, "___ itmExpand ___", {
    origItem,
    itemNameStyle,
    CLICK: filleoo,
    STYLE: mainseo,
  });

  const auewasdash = loadtrue
    ? loadobj
    : selectableTrue
    ? "<SelectComp {...filleoo} />"
    : //
      // isjdew;
      BearDiv(filleoo);

  const ijsew = lineBetween && <hr />;
  const asidjwe = (
    <>
      {auewasdash}
      {ijsew}
    </>
  );

  return asidjwe;
}
