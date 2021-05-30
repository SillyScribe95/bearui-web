import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";

// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
// } from "@chakra-ui/react";
import { Popover, Button } from "antd";
// import Popover from "@material-ui/core/Popover";
import { BearDiv } from "./BearDiv";

export function BearPopover({
  obj,
  noCenter,
  popConfig,
  content,
  testShow,
  titleConfig,
  titlevar,
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

    const okasdw = <Divo {...okaew} />;

    return okasdw;
  }

  let oksaew = {
    style: {
      padding: "0",
    },
    title: titlevar,
    content: <Daokwe />,
    ...popConfig,
  };

  const dfijwr =
    //
    "";
  // "asdfewr";
  // titlevar && <PopoverHeader>{titlevar}</PopoverHeader>;

  //   const isadwqe = (
  //     <Popover>
  //       <PopoverTrigger>{obj}</PopoverTrigger>
  //       <PopoverContent>
  //         <PopoverArrow />
  //         {/* <PopoverCloseButton /> */}
  //         {dfijwr}
  //         <PopoverBody>
  //           adsfokewrewrw
  //           {/* <Divo {...popConfig} /> */}
  //         </PopoverBody>
  //       </PopoverContent>
  //     </Popover>
  //   );

  //   placement="leftTop" title={text} content={content} trigger="click"

  const jdse = testShow ? (
    content
  ) : (
    <Popover {...oksaew}>
      {/*  */}
      {/* asdew */}
      {obj}
    </Popover>
  );

  const sadwe =
    //
    jdse;

    const fdiisdjr = {
        obj:sadwe,
    ...args,
    }

  return <BearDiv {...fdiisdjr} />;
}
