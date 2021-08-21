import React, { useState, useReducer, Fragment, createRef } from "react";

import { BearFloat } from "../../components/BearFloat";
import { BearTextMedia } from "../../components/BearTextMedia";
import { BearList } from "../../components/list/BearList";
import { bearlog } from "../../functions/logFuncs";
import { BearDiv } from "../../importBase";

export default function BearHeader({
  leftConfig,
  logo,
  logoConfig,
  name,
  navConfig,
  middleConfig,
  rightConfig,
  floatConfig,
  height = "100px",
  ...asdwew
}) {
  // function
  // 1nav
  const oswersr =
    //
    navConfig &&
    BearList({
      horiz: true,
      typeList: "button",
      ...navConfig,
    });

  // 1center

  // 1right

  function asd9a() {
    const sdrwer = {
      link: "/",
      // children: logo,
      iconvar: logo,
      textvar: name,
      ...logoConfig,
    };

    const sfjwere =
      //
      // BearDiv(sdrwer)
      BearTextMedia(sdrwer);

    return sfjwere;
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
