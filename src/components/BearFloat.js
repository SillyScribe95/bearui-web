import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  bearlog,
} from "../index";
import { vertAlign } from "../consts/genStyle";
import { BearDiv } from "./BearDiv";
import { Flex, Spacer } from "@chakra-ui/react";
import { BearList } from "../importBase";

export function BearFloat({
  horiz = true,
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
  top,
  topConfig = {},
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
  noLeft,
  leftConfig = {},
  center,
  noCenter,
  children,
  centerConfig = {},
  right,
  noRight,
  vertAlign = true,
  rightConfig = {},
  ...args
}) {
  const trueClass = {
    // flex: true,
    className: "bearFloat",
    // vertAlign: true,
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

  const jndf = {
    // paddingLeft: noPadding
    // className: "float-left",
    // p: "0 2",
    // padding: "0 10px",
    // marginRight: "auto",
    ...leftConfig,
  };

  // 1left
  const lefto = !noLeft && (
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

  // 1center
  const centio = (
    <div {...kdsdf}>
      {/*  */}
      {/* asdowe */}
      {/* {center} */}
      {center || children}
    </div>
  );

  const ijsad = {
    // marginLeft: "auto",
    // style: alignTrue && { textAlign: "right" },
    // class: "float-right",
    ...rightConfig,
  };

  // 1right
  let askdw = right || showRight;
  const rightos =  !noRight && (
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
      // class: "flex-none",
    };

    bearlog.lug("___ asoke ___", asoke);

    const ijsdf = (
      <div {...asoke}>
        {/*  */}
        {/* adsfjewro */}
        {itemo}
      </div>
    );

    return ijsdf;
  }

  const sokwerr = (
    <>
      {sfewr(top, topConfig, {
        top: 0,
        ...centros,
      })}
      {sfewr(topLeft, topLeftConfig, { top: paddingVert, left: paddingHorz })}
      {sfewr(topRight, topRightConfig, {
        top: paddingVert,
        right: paddingHorz,
      })}
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

  const asdokwe = horiz && {
    flex: true,
    vertAlign,
  };

  const dfgokew = (
    <BearDiv {...asdokwe}>
      {/* {isjfwe} */}
      {lefto}
      {/* {eqweew(left, leftConfig, {
        padding: "0 10px",
        marginRight: "auto",
        // left: paddingHorz,
      })} */}
      {centio}
      {rightos}
      {/* {eqweew(right, rightConfig, {
        padding: "0 10px",
        marginLeft: "auto",
        // right: paddingHorz,
      })} */}
    </BearDiv>
  );

  const ksaewe = (
    <>
      {dfgokew}
      {sokwerr}
    </>
  );

  return BearDiv({
    ...args,
    obj: ksaewe,
  });
}
