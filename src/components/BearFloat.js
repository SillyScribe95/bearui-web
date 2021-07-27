import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
} from "../index";
import { vertAlign } from "../consts/genStyle";
import { BearDiv } from "./BearDiv";
import { Flex, Spacer } from "@chakra-ui/react";

export function BearFloat({
  //
  bearName,
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
  padding = 0,
  paddingVert = 0,
  paddingHorz = 0,
  //
  //
  topLeft,
  topLeftConfig = {},
  topRight,
  topRightConfig = {},
  bottom,
  bottomConfig = {},
  bottomLeft,
  bottomLeftConfig = {},
  bottomRight,
  bottomRightConfig = {},
  //
  //
  left,
  leftConfig = {},
  center,
  children,
  centerConfig = {},
  right,
  rightConfig = {},
  noVertAlign,
  logtrue,
  messvar,
  style,
  ...args
}) {
  //
  const vertTop = {
    display: "flex",
    /* justify-content: center; */
  };

  const allPasow =
    //
    // {};
    vertTop;

  const trueClass =
    //
    // "";
    "flex";
  // noVertAlign ? (noVertTop ? "" : allPasow) : vertAlign;

  const jndf = {
    // paddingLeft: noPadding
    className: "float-left",
    p: "0 2",
    padding: "0 10px",
    marginRight: "auto",
  };

  const centros = {
    left: 0,
    right: 0,
    width: "100%",
    margin: "auto",
    textAlign: "center",
    // bottom: paddingVert,
  };

  let sasease =
    //
    // left;
    left || showLeft;

  // 1left
  const lefto = sasease && (
    <>
      <div {...jndf}>
        {/*  */}
        {left}
      </div>
      {!noSpace && <Spacer />}
    </>
  );

  const kdsdf = {
    ...centerConfig,
    // style: { textAlign: "center", ...centerConfig.style },
  };

  const centio = (
    <div {...kdsdf}>
      {/*  */}
      {/* asdowe */}
      {center || children}
    </div>
  );

  const ijsad = {
    marginLeft: "auto",
    style: alignTrue && { textAlign: "right" },
    class: "float-right",
  };

  // right
  let askdw = right || showRight;
  const rightos = (
    <>
      {!noSpace && <Spacer />}
      <div {...ijsad}>
        {/* sdokw */}
        {right}
      </div>
    </>
  );

  // position: "absolute",

  function sfewr(itemo, { style, ...adsf }, ...were) {
    adsf = {
      style: {
        position: "absolute",
        ...style,
      },
      ...adsf,
    };

    return itemo && eqweew(itemo, adsf, ...were);
  }

  function eqweew(itemo, { style }, typoe) {
    const ijsdrw = {
      //
      // left={0}
      // bottom={0}
      // verticalAlign: "top",
      ...typoe,
      ...style,
    };

    const asoke = {
      // align: typoe,
      style: ijsdrw,
      class: "flex-none",
    };

    const ijsdf = (
      <BearDiv {...asoke}>
        {/*  */}
        {/* adsfjewro */}
        {itemo}
      </BearDiv>
    );

    return ijsdf;
  }

  const sokwerr = (
    <>
      {sfewr(topLeft, topLeftConfig, { top: paddingVert, left: paddingHorz })}
      {sfewr(topRight, topRightConfig, {
        top: paddingVert,
        right: paddingHorz,
      })}
      {centio}
      {sfewr(bottomLeft, bottomLeftConfig, {
        bottom: paddingVert,
        left: paddingHorz,
      })}
      {sfewr(bottom, bottomConfig, {
        // top: 0,
        bottom: 0,
        ...centros,
      })}
      {sfewr(bottomRight, bottomRightConfig, {
        bottom: paddingVert,
        right: paddingHorz,
      })}
    </>
  );

  const ksaewe = (
    <>
      {/* {isjfwe} */}
      {lefto}
      {/* {eqweew(left, leftConfig, {
        padding: "0 10px",
        marginRight: "auto",
        // left: paddingHorz,
      })} */}
      {sokwerr}
      {rightos}
      {/* {eqweew(right, rightConfig, {
        padding: "0 10px",
        marginLeft: "auto",
        // right: paddingHorz,
      })} */}
    </>
  );

  let endValue = "";
  switch (layoutType) {
    case "vertical":
      endValue = ksaewe;
      break;

    default:
      const oesfdrtw = {
        flex: true,
        vertAlign: true,
        ...trueClass,
        obj: ksaewe,
      };
      endValue = <BearDiv {...oesfdrtw} />;
  }
  const noSides =
    //
    // "";
    !left && !right;

  disvar =
    //
    disvar || noSides;

  const sdifjw =
    //
    disvar ? sokwerr : endValue;
  // oeqewq;

  const ijdsfe = {
    position: "relative",
    height: "100%",
    width: "100%",
    ...style,
  };

  args = {
    ...args,
    style: ijdsfe,
    obj: sdifjw,
  };

  // topRight
  if ("logtrue") {
    logs.logga(bearName, " BEAR FLOAT", {
      trueClass,
      layoutType,
      topLeft,
      topRight,
      left,
      right,
      ...args,
    });
  }

  //
  // return endValue;
  return <BearDiv {...args} />;
}
