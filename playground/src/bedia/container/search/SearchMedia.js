import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { SearchKnowledge } from "./SearchKnowledge";

export function SearchPeople({
  //
  ...args
}) {
  // 1const

  //   function creatPeep(adfke){
  //     vduwr9
  //   }

  args = {
    includeImage: true,
    // onCreate: vduwr9,
    ...args,
  };

  return <SearchKnowledge {...args} />;
}
