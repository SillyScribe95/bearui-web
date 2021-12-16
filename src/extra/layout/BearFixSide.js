import React, {
  //
  useState,
  useContext,
} from "react";
import { BearFloat} from "../../components/BearFloat";

export function BearFixSide({
  //
  fixSide = "right",
  left,
  fixWidth,
  mainWidth,
  right,
  fixConfig = {},
  ...aaa
}) {
  
  function sdfer(obj, cccc) {
    const sdfjwe = {
      style: {
        //
        textAlign: "center",
        width: fixWidth,
        // border: "solid 2px red",
      },
      ...cccc,
    };
    const okdfwe = {
      ...fixConfig,
      style: {
        top: "100px",
        right: "2%",
        position: "fixed",
        ...fixConfig.style,
      },
    };

    return (
      <div {...sdfjwe}>
        <div {...okdfwe}>
          {/*  */}
          {obj}
        </div>
      </div>
    );
  }

  function dsfR(xfdg) {
    const aaewa = {
      style: {
        width: mainWidth,
      },
    };
    return <div {...aaewa}>{xfdg}</div>;
  }

  let obj;
  switch (fixSide) {
    case "left":
      obj = {
        left: sdfer(left),
        right: dsfR(right),
      };
      break;
    case "right":
      obj = {
        left: dsfR(left),
        right: sdfer(right),
      };
      break;
  }

  //
  const okfdsd = BearFloat({
    bearName: "zxcvokds",
    noVertAlign: true,
    ...obj,
    ...aaa,
  });

  return okfdsd;
}
