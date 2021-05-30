import React, {
  //
  useState,
  useContext,
} from "react";
import { BearIconText } from "../GlobalComps";
import { BearDiv } from "../BearDiv";

import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";
import { BearIcon } from "../BearIcon";
import { BearFloat } from "../BearFloat";

export function InputTitle({
  //
  titlevar,
  subtitlevar,
  //
  addFunc,
  iconvar,
  newTrue,
  errorMessage,
  ...args
}) {
  // 1const

  const ijweq = {
    obj: " *",
    style: {
      color: "red",
    },
  };

  const aokdwe =
    //
    "";
  // ijdsew ? <BearDiv spanTrue {...ijweq} /> : "";

  const olbknfr = {
    fontSize: "0.7em",
    color: "red",
    marginLeft: "10px",
    // className: "error",
  };

  const asdwe = {
    obj: errorMessage,
    className: "error",
    style: olbknfr,
  };

  const bnkifg = <BearDiv spanTrue {...asdwe} />;

  // 1title
  function AllNo() {
    const okdsras = (
      <>
        {/* aaaaaa */}
        {BearIconText(iconvar, titlevar)}
        {/* {iconvar} {titlevar} */}
      </>
    );

    const nisdjre = {
      // flexTrue: true,
      // vertAlign: true,
      obj: okdsras,
    };

    const dijrw = <BearDiv {...nisdjre} />;

    return dijrw;
  }

  // TITLE MAIN
  const okasde =
    //
    newTrue ? ChooseTit() : AllNo();

  const ioakawe = (
    <>
      {okasde}
      {aokdwe}
      {bnkifg}
    </>
  );

  function BswTi() {
    const cvobkof = {
      className: "shadowHover pointer",
      onClick: addFunc,
      obj: BearIcon("➕", ""),
      style: {
        padding: "5px",
        marginTop: "-5px",
        fontSize: "0.8em",
        // marginLeft: "20px",
      },
    };

    const dfigjrt = <BearDiv {...cvobkof} />;
    const kcmdr = {
      centerobj: ioakawe,
      rightobj: dfigjrt,
    };

    const ijcwe = BearFloat(kcmdr);

    return ijcwe;
  }

  const ijsae = addFunc ? BswTi() : ioakawe;

  const asdojwqs = {
    obj: ijsae,
    // textvar: ioakawe,
    iconvar: iconvar,
    noImage: !iconvar,
    noIcon: !iconvar,
    // noText: true,
    // disVar: true,
  };

  logs.logga(name + "___ inpuBase TITLE CONF ___", asdojwqs);

  const seokwer = (
    //
    // <ImageTextDiv {...asdojwqs} />
    // <BediaTextDiv {...asdojwqs} />
    <BearDiv {...asdojwqs} />
  );

  function Subtoter() {
    const ikawed = {
      fontSize: "0.8em",
    };

    const okawe = {
      obj: subtitlevar,
      style: ikawed,
    };
    const uiajwe = <BearDiv {...okawe} />;

    return uiajwe;
  }

  const ijawe = subtitlevar && <Subtoter />;

  const sdfgret = (
    <>
      {/* {okasde} */}
      {/* TITLE */}
      {seokwer}
      {ijawe}
      {/* <hr /> */}
    </>
  );

  const kase = {
    padding: "0px 0",
    textAlign: "left",
  };

  const isawqe = {
    obj: sdfgret,
    style: kase,
    ...args,
  };

  return <BearDiv {...isawqe} />;
}
