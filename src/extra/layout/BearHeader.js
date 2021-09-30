import React, { useState, useReducer, Fragment, createRef } from "react";

import { BearFloat } from "../../components/BearFloat";
import { BearTextMedia } from "../../components/BearTextMedia";
import { BearFlex } from "../../components/GlobalComps";
import { BearList } from "../../components/list/BearList";
import { bearlog } from "../../functions/logFuncs";
import {
  capitalizeFirstLetter,
  removeLower,
} from "../../functions/stringFuncs";
import { BearDiv } from "../../importBase";

export default function BearHeader({
  leftConfig,
  logo,
  logoImage,
  logoText,
  logoConfig,
  name,
  navLeft,
  navRight,
  navConfig,
  middleConfig,
  rightConfig,
  floatConfig,
  height = "100px",
  ...asdwew
}) {
  // 1nav LIST
  function listo({ dictvar, ...adsfa }) {
    const isjdfre = {
      // list: adsfa,
      renderItem: asid,
      ...adsfa,
    };

    function asid(xcvdf) {
      // switch getTpye

      bearlog.lug("aAS ssss", { xcvdf });

      return sdfrdsf(xcvdf);
    }

    function sdfrdsf(itemName) {
      const isdeww =
        //
        // "21331";
        capitalizeFirstLetter(itemName);

      bearlog.lug("hedor INAOSD", { isdeww });

      const ijsdfqwe = dictvar && dictvar[itemName];
      const sdifjr = {
        // background: "red",
        margin: "0 5px",
        padding: "5px",
        ...(ijsdfqwe && ijsdfqwe.style),
      };

      return BearDiv({
        ...ijsdfqwe,
        style: sdifjr,
        obj: isdeww,
        link: `/${removeLower(itemName)}`,
      });
    }

    return askawe(isjdfre);
  }
  // { dictvar, ...faadsf }
  function askawe(faadsf) {
    let aokew = {
      horiz: true,
      bearName: "asdoqwe",
      // typeList: "button",
      // ren
      ...navConfig,
      ...faadsf,
    };

    bearlog.lug("zzz--", aokew);

    return BearList(aokew);
  }

  // function
  // 1nav
  const oswersr =
    //
    navRight && listo(navRight);
  // 1center

  // 1right

  // 1left
  function asd9a() {
    const sdrwer = {
      link: "/",
      // children: logo,
      imagevar: logoImage,
      textvar: logoText,
      ...logoConfig,
    };

    const sfjwere =
      //
      // BearDiv(sdrwer)
      BearTextMedia(sdrwer);

    const ijsdfr = navLeft && listo(navLeft);

    return BearFlex({
      padvar: "20px",
      // flex: true,
      // vertAlign: true,
      // pad
      // obj: (
      //   <>
      //     {sfjwere} {ijsdfr}
      //   </>
      // ),
      list: [sfjwere, ijsdfr],
    });
  }

  // 1float
  const jsvdss = {
    left: asd9a(),
    // center: "qsdokqweqw",
    right: oswersr,
    noVertAlign: true,
    style: { fontSize: "24px" },
    ...floatConfig,
    ...asdwew,
  };

  bearlog.lug("brHeader", jsvdss);

  const dkfre = BearFloat(jsvdss);

  const askwe = {
    height,
    padding: "10px 20px 0",
  };

  const ovkcsdd = {
    style: askwe,
  };

  // const fsdokgs =
  //   //
  //   // "splfwfewr"
  //   pslda;

  return <div {...ovkcsdd}>{dkfre}</div>;
}
