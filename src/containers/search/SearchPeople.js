import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";
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
    // createFunc: vduwr9,
    ...args,
  };

  return <SearchKnowledge {...args} />;
}
