import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
// import { Button } from "@chakra-ui/react";

export function BearFormButton({
  //
  children,
  ...args
}) {
  // 1const

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  args = {
    // obj: okfdsd,
    ...args,
  };

  return <button {...args}>{children}</button>;
}
