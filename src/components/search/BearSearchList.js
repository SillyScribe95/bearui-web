import React, {
  //
  useState,
  useContext,
} from "react";
import SelectSearch from "react-select-search";

import {
  //
  logs,
  mapSelectValue,
  mapDictAttrToString,
} from "@SillyScribe95/bedia-shared/";
import { BearSelect } from "../select/BearSelect";

export function BearSearchList({
  //
  listvar,
  dictvar,
  renderItem,
  searchAttrs,
  ...args
}) {
  // 1const

  const [searchTerm, setsearchTerm] = useState();

  const searchArr = [];

  function sadkoe(objo) {
    const kaewase = mapFunc;

    searchArr.append();

    const asdfkre = "";

    const ikdwer = {
      options: mapFuncDict(listvar),
      //  value="sv"
    };

    return;
  }

  const isdae = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];

  function askdwew(mapp) {
    const sdfgoekse = mapDictAttrToString(searchAttrs, " ", mapp);

    logs.logga("___ sdfgoekse ___", sdfgoekse);

    return sdfgoekse;
  }

  const arrmode =
    //
    // isdae;
    mapSelectValue(listvar, {
      dictvar: dictvar,
      labelFunc: renderItem,
      valueFunc: searchAttrs && askdwew,
    });

  logs.logga("___ brSeacrch LIST ___", arrmode);

  function qe4ead(vcdfge) {
    logs.loggo("___ vcdfge ___", vcdfge);
  }

  const jsdrase = {
    options: arrmode,
    onChange: qe4ead,
  };

  args = {
    menuStick: true,
    noMenuBorder: true,
    menuIsOpen: true,
    ...jsdrase,
    ...args,
  };

  const kdserase = (
    //
    <BearSelect {...args} />
    // <SelectSearch {...args} />;
  );

  return kdserase;
}
