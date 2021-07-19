import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { BearDiv } from "./BearDiv";

export function BearPopover({
  obj,
  children,
  noCenter,
  popConfig,
  content,
  testShow,
  titleConfig,
  title,
  ...args
}) {
  //

  function Daokwe() {
    const okaew = {
      obj: content,
      style: {
        textAlign: "center",
      },
    };

    const okasdw = <BearDiv {...okaew} />;

    return okasdw;
  }

  let oksaew = {
    style: {
      padding: "0",
    },
    title: title,
    content: <Daokwe />,
    ...popConfig,
  };

  const dfijwr =
    //
    "";
  // "asdfewr";
  // title && <PopoverHeader>{title}</PopoverHeader>;

  //   const isadwqe = (
  //     <Popover>
  //       <PopoverTrigger>{obj}</PopoverTrigger>
  //       <PopoverContent>
  //         <PopoverArrow />
  //         {/* <PopoverCloseButton /> */}
  //         {dfijwr}
  //         <PopoverBody>
  //           adsfokewrewrw
  //           {/* <BearDiv {...popConfig} /> */}
  //         </PopoverBody>
  //       </PopoverContent>
  //     </Popover>
  //   );

  //   placement="leftTop" title={text} content={content} trigger="click"

  const jdse = testShow ? (
    content
  ) : (
    <>
      {/* <Popover {...oksaew}> */}
      {/*  */}
      {/* asdew */}
      {children}
      {/* </Popover> */}
    </>
  );

  const sadwe =
    //
    jdse;

  const fdiisdjr = {
    obj: sadwe,
    ...args,
  };

  return <BearDiv {...fdiisdjr} />;
}
