import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearDiv,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { HomepageAuth } from "./HomepageAuth";

export function HomePageBear({
  //
  // ,
  ...args
}) {
  // 1const

  function BSADWE() {
    return <HomepageAuth />;
  }

  // 1return
  const okfdsd = (
    <>
      <BSADWE />
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
