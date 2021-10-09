import React, {
  //
  useState,
  useContext,
} from "react";
import { BearList, bearlog, BearTextMedia, BearUpper } from "../..";

export function BearNavigation({ blankTrue, ...aaaa }) {
  //
  function asid(xcvdf) {
    // switch getTpye

    bearlog.log("aAS ssss", xcvdf);

    // return "forewa";
    return sdfrdsf(xcvdf);
  }

  function sdfrdsf({ itemName, textvar, ...xcvdf }) {
    // const itemName = textvar;
    const isdeww =
      //
      // "21331";
      //   itemName;
      BearUpper(textvar ? textvar : itemName);

    bearlog.lug("hedor INAOSD", { isdeww });

    let asokdas =
      //
      itemName;
    //   "itemName";
    // `/${removeLower(itemName)}`,

    let kaszaa = {
      children: isdeww,
      link: asokdas,
      ...xcvdf,
      //   itemCon
    };

    bearlog.lug("___ kaszaa ___", kaszaa);

    let soksase =
      //
      // BearDiv(kaszaa);
      BearTextMedia(kaszaa);

    return soksase;
  }

  const nasase = {
    typeList: "button",
    itemConfig: {
      renderText: asid,
      outsideLink: true,
      ...aaaa.itemConfig,
    },
  };

  const msddf = {
    // itemConfig: {
    //   // renderText: asid,
    //   outsideLink: true,
    //   alignConfig: { center: true },
    //   ...aaaa.itemConfig,
    // },
    renderItem: asid,
  };

  const jfease = BearList({
    // ...nasase,
    ...msddf,
    // style: { textAlign: "right" },
    // typeList: "return",
    ...aaaa,
  });

  //   const ijwe = list.map;

  return jfease;
}
