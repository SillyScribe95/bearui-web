import React, {
  //
  useState,
  useContext,
} from "react";
// import SelectSearch from "react-select-search";

import { bearlog } from "../../index";

// getListAll,
// mapSelectValue,
// mapDictAttrToString,

import { BearListItem } from "../../components/list/BearListItem";
import { BearList } from "../../components/list/BearList";
import { BearDiv } from "../../components/BearDiv";
import { BearError } from "../../components/BearError";
import { argPass, listArgPass, nameComb } from "../../components/GlobalComps";
import { isEmpty } from "lodash";
import { BearCheckList } from "../../components/check/BearCheckList";
import { getListComplex } from "../../components/list/getListComplex";
import { BearSearchSelect } from "./BearSearchSelect";
import { BearSearchBase } from "./BearSearchBase";
import { getListAll } from "../../functions/arrayFuncs";
import { mapDictAttrToString } from "../../functions/dictFuncs";
import { mapSelectValue } from "../../functions/selectFuncs";

export function BearSearchList({
  // 1args SELECT
  searchAttrs,
  //
  // 1args LIST
  bearName,
  list,
  dictvar,
  //
  listConfig,
  optionStyle,
  initialValue,
  layoutList,
  headerAtts,
  headerConfig,
  ...aaaa
}) {
  // 1args LIST

  // 1arg SELECT
  const dfijgret = {
    //
    dictvar,
    list,
    bearName,
    // ignoreEmpty: true
  };

  let { listArgs, ...args } = listArgPass(aaaa);

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

    bearlog.lug("___ sdfgoekse ___", {
      map: map,
      listItemName: listItemName,
      searchAttrs: searchAttrs,
      sdfgoekse: sdfgoekse,
    });

    return sdfgoekse;
  }

  // 1label
  function xvibjrg(sadofkwe) {
    const mdvokdfdsa = {
      ...sadofkwe,
      ...dfigre,
    };
    bearlog.lug("___ mdvokdfdsa ___", mdvokdfdsa);
    const dibjgret =
      //
      // digjer;
      // "SEARCH LIST ENTRY";
      aassae(mdvokdfdsa);

    return dibjgret;
  }

  function aassae(mapase) {
    const kjsad = {
      ...listConfig,
      ...listArgs,
      ...dfijgret,
    };

    bearlog.lugLinas(10);
    bearlog.lug("___ kjsad ___", {
      mapase,
      ...kjsad,
    });

    const sdfje =
      //
      mapase;
    // isEmpty(mapase)
    //   ? listItemName
    //   : {
    //       listItemName,
    //       ...mapase,
    //     };

    const oksaase = BearListItem(sdfje, kjsad);

    return (
      <>
        {/* aaa */}
        {/*  */}
        {oksaase}
      </>
    );
  }

  const vcxbfg =
    //
    // isdae;
    !list
      ? []
      : mapSelectValue(list, {
          dictvar,
          labelFunc: xvibjrg,
          valueFunc: searchAttrs && askdwew,
          // headerFunc:
          isDisabled: true,
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

    bearlog.lug("___ sodfer ___", sodfer);

    return <BearList {...sodfer} />;
  }

  // 1options
  const arrmode =
    //
    vcxbfg;
  // headerAtts
  //   ? {
  //       label: DSIFJ(),
  //       options: vcxbfg,
  //     }
  //   : vcxbfg;

  const hsdr = {
    background: "transparent",
    ...optionStyle,
  };

  function asodkwe(zxcvdf) {
    bearlog.lug("___ zxcvdf ___", zxcvdf);
    setsearchTerm(zxcvdf);
  }

  const vobkv = {
    onInputChange: asodkwe,
    valRemoveAfter: extractSplit,
  };

  args = {
    options: arrmode,
    menuStick: true,
    noMenuBorder: true,
    optionStyle: hsdr,
    menuIsOpen: true,
    placeholder: "Search",
    searchBarIcon: "search",
    onChangeSetValue: false,
    ...vobkv,
    ...dfijgret,
    ...args,
  };

  // 1list
  // 1console
  bearlog.lug(
    "___ brSeacrch LIST ___",
    //
    args
    // {
    //   searchAttrs,
    //   arrmode,
    // }
  );

  const qasds = headerAtts && DSIFJ();
  const dfjgert = (
    <>
      {/*  */}
      {qasds}
      {BearSearchSelect(args)}
    </>
  );

  return BearCheckList("BearSearchList", dfjgert, {
    ...dfijgret,
    ...aaaa,
  });
  // return kdserase;
}
