import React, {
  //
  useState,
  useContext,
} from "react";
import * as logs from "../functions/logFuncs";
import { vertAlign } from "../consts/genStyle";
import { BearDiv } from "./BearDiv";

export function BearFloat({
  //
  layoutType,
  verticalTrue,
  noVertTop,
  noPadding,
  alignTrue,
  //
  showRight,
  showLeft,
  disvar,
  noSpace,
  leftobj,
  leftConfig,
  centerobj,
  centerConfig,
  rightobj,
  rightConfig,
  noVertAlign,
  logtrue,
  messvar,
  ...args
}) {
  const vertTop = {
    display: "flex",
    /* justify-content: center; */
    // alignItems: "top",
    // verticalAlign: "top",
  };

  const allPasow =
    //
    // {};
    vertTop;

  const trueClass =
    //
    // "";
    noVertAlign ? (noVertTop ? "" : allPasow) : vertAlign;

  const jndf = {
    // paddingLeft: noPadding
    p: "0 2",
    padding: "0 10px",
  };

  let sasease = leftobj || showLeft;
  const lefto = sasease && (
    <>
      <div {...jndf}>
        {/*  */}
        {leftobj}
      </div>
      {/* {!noSpace && <Spacer />} */}
    </>
  );

  const centio = (
    <div {...centerConfig}>
      {/*  */}
      {/* asdowe */}
      {centerobj}
    </div>
  );

  const ijsad = {
    style: alignTrue && { textAlign: "right" },
  };

  let askdw = rightobj || showRight;
  const rightos = (
    <>
      {/* {!noSpace && <Spacer />} */}
      <div {...ijsad}>
        {/* sdokw */}
        {rightobj}
      </div>
    </>
  );

  const ksaewe = (
    <>
      {lefto}
      {centio}
      {rightos}
    </>
  );

  let endValue = "";
  switch (layoutType) {
    case "vertical":
      endValue = ksaewe;
      break;

    default:
      const oesfdrtw = {
        flexTrue: true,
        ...trueClass,
        obj: ksaewe,
      };
      endValue = <BearDiv {...oesfdrtw} />;
  }
  const noSides =
    //
    !leftobj && !rightobj;

  disvar =
    //
    disvar || noSides;

  const sdifjw =
    //
    disvar ? centio : endValue;
  // oeqewq;

  args = {
    ...args,
    obj: sdifjw,
  };

  if (logtrue) {
    logs.logga(messvar + " Flotmainall", {
      trueClass: trueClass,
      layoutType: layoutType,
      ...args,
    });
  }

  //
  // return endValue;
  return <BearDiv {...args} />;
}
