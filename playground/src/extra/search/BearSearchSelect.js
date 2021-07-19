import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { BearSelect } from "../select/BearSelect";

export function BearSearchSelect({
  //
  seriesObj,
  ...args
}) {
  // 1const

  args = {
    // obj: okfdsd,
    ...args,
  };

  const kdserase = (
    //
    <BearSelect {...args} />
    // <SelectSearch {...args} />;
  );

  return kdserase;
}
