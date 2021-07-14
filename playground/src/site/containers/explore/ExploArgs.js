import React, {
  //
  useState,
  useContext,
} from "react";
import { BearBorder, BearCodeArgs, BearDiv } from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";

export function ExploArgs({
  //
  argConfig,
  ...args
}) {
  //
  // 1const
  const [currmodo, setcurrmodo] = useState();

  function sdawer(dsaofe) {
    const ijweae = argConfig.dictvar[dsaofe];

    logs.logga("___ dsaofe ___", { dsaofe, argConfig, ijweae });

    // currmodo
    // setcurrmodo()
  }

  const ijsdres = {
    hoverStyle: {
      ...BearBorder("grey", "2px"),
    },
    optionStyle: { cursor: "pointer", ...BearBorder("transparent", "2px") },
    // background: "red",},
    ...argConfig,
    width: "39vw",
    onChangeDict: true,
    onChange: sdawer,
  };

  const xcvsf = argConfig && <BearCodeArgs {...ijsdres} />;

  //   1modal
  function ModInfo({ name, description, boolean }) {
    const ijsers = <>{/*  */}</>;
  }

  const okfdsd = (
    <>
      {/*  */}
      {xcvsf}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
