import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";
import { 
  // 
  logs
  } from "../../index";
import { isEmpty, remove } from "lodash";
import { BearError } from "../BearError";
import { BearListMap } from "./BearListMap";
import { BearListItem } from "./BearListItem";
import { argPass, BearMissing, BearPossess } from "../GlobalComps";
import { getListComplex } from "./getListComplex";
import { BearCheckList } from "../check/BearCheckList";

export function BearList(
  //
  // list,
  {
    obj,
    typevar,
    // 1remove
    containFunc,
    list,
    // 1name
    bearName,
    // 1list
    //
    compName = "BearList",
    // 1log
    messvar,
    logtrue,
    //
    //
    addTrue,
    scrollTrue,
    className,
    // SELECT
    selectableTrue,
    selectableConfig,
    // 1STYLE
    styleList,
    // 1load
    loadtrue,
    typeBullet,
    emptyItem,
    loadNumber = 10,
    //
    // 1error
    noError,
    //
    //
    //
    // 1horizotal
    centerItem = true,
    horiz,
    flex,
    //
    // 1list,
    // COLLAPSeE
    hideList,
    collapseTrue,
    renderItem,
    typeList,
    ...listArgs
  }
) {
  // 1list
  list = list && getListComplex(list, listArgs);
  logs.logga("___Blist list ___", list);

  // 1const
  // const [chosios, setchosios] = useState(chosenItem);

  // function passChoose(itmBase) {
  //   if (chooseTrue) {
  //     let ogfsdfds =
  //       //
  //       itmBase;

  //     setchosios(ogfsdfds);
  //   }
  // }

  // 1baseargs
  const sidwre = {
    bearName,
    horiz,
    typeBullet,
    logtrue,
    loadtrue,
    containFunc,
    renderItem,
    typeList,
    list,
  };

  const sidjfwe = {
    ...sidwre,
    ...listArgs,
  };

  logs.logga("___ list BBB___", list);
  logs.logga("___ list CCC___", list);

  // 1style
  styleList = {
    overflowY: scrollTrue ? "scroll" : "",
    // overflowY: "scroll",
    ...styleList,
  };

  // 1horiz
  function HozBar() {
    // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

    const okaewq = centerItem && {
      alignContent: "center",
      justifyContent: "space-around",
    };

    const okadwe = {
      flex: true,
      style: okaewq,
      obj: donelist(),
    };

    // 1console
    logs.logga("xxx-LIST-MAIN--args", messvar, list, "asd90u12321");
    // gens.messCheck("sd9jqwxas", listMess, "BearList --AAAA--", oaskdwq);

    const jisad =
      //
      BearDiv(okadwe);
    // "okafsdf";
    // EndListA();
    // mapoBap();
    // <HorizChoiceBar {...endoa} />;

    return jisad;
  }

  // 1select
  function Seletio() {
    const asikwe = {
      // ...selectableContext,
      // renderItem:
      ...selectableConfig,
    };

    const as83asd =
      //
      "";
    // <SelectArray {...asikwe} />

    return as83asd;
  }

  // 1name
  const sadfwe =
    //
    //
    selectableTrue ? <Seletio /> : horiz ? <HozBar /> : donelist();

  function donelist() {
    const fullVar = !isEmpty(list) || loadtrue;

    if (logtrue) {
      logs.logLinas(5);
      logs.loggu(bearName, "___ BEARLIST ___", list);
      logs.loggu("___ listArgs ___", listArgs);
      logs.loggu("___ sidwre ___", sidwre);
      logs.loggu("___ beList ___", sidjfwe);
    }

    const ushdsa =
      //
      hideList ? "" : BearListMap(list, sidjfwe);
    // fullVar ? BearListMap(list, sidjfwe) : "";
    // fullVar && list.map(mapoBap);

    return ushdsa;
  }

  const saokwe = typeBullet ? <ul>{sadfwe}</ul> : sadfwe;

  function RendBase() {
    const saidje = argPass({
      obj: saokwe,
      flex,
      ...listArgs,
    });

    // return "sodkweeqw";
    return BearDiv(saidje);
  }

  const idjsae = BearCheckList(compName, RendBase(), sidjfwe);
  //
  // BearDiv(saidje)
  // rendName();
  // renderCheck();
  // list ? renderCheck() :
  // RendBase();

  return idjsae;
}
