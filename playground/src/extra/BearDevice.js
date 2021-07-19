import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export function BearDevice({
  //
  mobileItem,
  browserItem,
  tabletItem,
  ...args
}) {
  // 1const

  //   1dekstop
  const dsktoTreu =
    //
    isBrowser;

  const dsktoTreu = dsktoTreu && <BrowserView>{browserItem}</BrowserView>;

  //   1tablet

  //   1mobile
  const cxijwas =
    //
    isMobile;

  const mobiob = cxijwas && <MobileView>{mobileItem}</MobileView>;

  const okfdsd = (
    <>
      {/*  */}
      {deskiop}
      {mobiob}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
