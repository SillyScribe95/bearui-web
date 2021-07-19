import React, {
  //
  useState,
  useContext,
} from "react";
import SelectSearch from "react-select-search";

import {
  //
  getListAll,
  logs,
  mapSelectValue,
  mapDictAttrToString,
} from "@SillyScribe95/bedia-shared/";
import { BearListItem } from "../../components/list/BearListItem";
import { BearList } from "../../components/list/BearList";
import { BearDiv } from "../../components/BearDiv";
import { BearError } from "../../components/BearError";
import { argPass, BearBorder, nameComb } from "../../components/GlobalComps";
import { isEmpty } from "lodash";
import { BearCheckList } from "../../components/check/BearCheckList";
import { getListComplex } from "../../components/list/getListComplex";
import { BearSearchSelect } from "./BearSearchSelect";
import { BearSearchBase } from "./BearSearchBase";

export function BearSearchList({
  //
  onChange,
  list,
  dictvar,
  bearName,
  renderItem,
  searchAttrs,
  listConfig,
  optionStyle,
  // header
  initialValue,
  layoutList,
  headerAtts,
  headerConfig,
  ...args
}) {
  // 1baseargs
  const dfijgret = {
    //
    renderItem,
    bearName,
    list,
    // ignoreEmpty: true
  };

  const baseargs = {
    dictvar,
    ...dfijgret,
    ...args,
  };

  // 1const

  searchAttrs = searchAttrs
    ? searchAttrs
    : getListAll(list, {
        //
        listDictAdd: true,
        dictvar,
      });

  const [searchTerm, setsearchTerm] =
    //
    // [initialValue, ""];
    useState(initialValue);

  const dfigre = {
    inputValue: searchTerm,
  };

  const searchArr = [];
  const extractSplit =
    //
    "*";

  function askdwew({ listItemName = "", ...map }) {
    const sdfgoekse =
      //
      // map;
      listItemName + extractSplit + mapDictAttrToString(searchAttrs, " ", map);

    logs.logga("___ sdfgoekse ___", {
      map: map,
      listItemName: listItemName,
      searchAttrs: searchAttrs,
      sdfgoekse: sdfgoekse,
    });

    return sdfgoekse;
  }

  function xvibjrg(sadofkwe) {
    logs.logga("sadofkwe--zzz", sadofkwe);

    const stringios = typeof sadofkwe;
    const doNot = stringios == "object";

    const digjer = doNot
      ? sadofkwe
      : //
        { listItemName: sadofkwe };
    // BearError("Bearsearch is not an object");

    const mdvokdfdsa = {
      ...digjer,
      ...dfigre,
    };

    logs.logga("___ mdvokdfdsa ___", mdvokdfdsa);

    const dibjgret =
      //
      // digjer;
      // "okweerq"
      aassae(mdvokdfdsa);

    return dibjgret;
  }

  function aassae({ listItemName, ...mapase }) {
    const kjsad = {
      ...baseargs,
      ...listConfig,
      // ...asaes,
      logtrue: true,
    };

    logs.logLinas(10);
    logs.logga("___ kjsad ___", {
      listItemName,
      mapase: mapase,
      ...kjsad,
    });

    const sdfje = isEmpty(mapase)
      ? listItemName
      : {
          listItemName,
          ...mapase,
        };

    const oksaase = BearListItem(sdfje, kjsad);

    const dfgijert = (
      <>
        {/* aaa */}
        {/*  */}
        {oksaase}
      </>
    );

    const ijsf = {
      //
      // className: "buttonHover shadowHover",
      // style: isjfer,
    };

    const sdifjwer = <BearDiv {...ijsf}>{dfgijert}</BearDiv>;

    return sdifjwer;
  }

  const vcxbfg =
    //
    // isdae;
    !list
      ? []
      : mapSelectValue(list, {
          dictvar: dictvar,
          labelFunc: xvibjrg,
          valueFunc: searchAttrs && askdwew,
          // headerFunc:
        });

  // 1header
  function DSIFJ() {
    //
    //
    const sodfer = {
      ...dfijgret,
      // list: layoutList,
      bearName: nameComb(bearName, "searchList-HEADER"),
      capitaliseTypeText: true,
      // item: headerConfig,
      // renderItem: aassae,
      typeList: "div",
      flex: true,
    };

    logs.logga("___ sodfer ___", sodfer);

    return <BearList {...sodfer} />;
  }

  const arrmode =
    //
    vcxbfg;
  // headerAtts
  //   ? {
  //       label: DSIFJ(),
  //       options: vcxbfg,
  //     }
  //   : vcxbfg;

  // 1list
  // 1console
  logs.logga("___ brSeacrch LIST ___", {
    searchAttrs,
    arrmode,
  });

  function qe4ead(vcdfge) {
    var nameos = vcdfge.substr(0, vcdfge.indexOf(extractSplit));

    logs.logga("___ BearSearchList  ___", {
      mainValue: vcdfge,
      actualItem: nameos,
    });

    if (onChange) {
      onChange(nameos);
    }
  }

  const jsdrase = {
    options: arrmode,
    onChange: qe4ead,
  };

  const hsdr = {
    background: "transparent",
    ...optionStyle,
  };

  function asodkwe(zxcvdf) {
    logs.logga("___ zxcvdf ___", zxcvdf);
    setsearchTerm(zxcvdf);
  }

  const vobkv = {
    onInputChange: asodkwe,
  };

  args = {
    menuStick: true,
    noMenuBorder: true,
    optionStyle: hsdr,
    menuIsOpen: true,
    placeholder: "Search",
    searchBarIcon: "search",
    bearName,
    ...jsdrase,
    ...vobkv,
    ...args,
  };

  logs.logga("args-zz", args);
  // args = argPass(args);

  const qasds = headerAtts && DSIFJ();

  const kdserase =
    //
    // BearSearchBase(args);
    BearSearchSelect(args);
  // <SelectSearch {...args} />;

  const dfjgert = (
    <>
      {/*  */}
      {qasds}
      {kdserase}
    </>
  );

  return BearCheckList("BearSearchList", dfjgert, baseargs);
  // return kdserase;
}
