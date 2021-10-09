import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearDiv } from "../../components/BearDiv";

//   import {
//     BlankWrap,
//     setGlobalSource,
//     //
//   } from "../functions/GlobalFunctions";

export function BearFooter({
  onClick,
  closeTrue,
  sticky,
  className = "",
  //   obj,
  ...argos
}) {
  // const [truShowa, settruShowa] = useState(true);

  let asdew = sticky ? "sticky" : "";

  const ajsw = {
    className: `footer ${asdew} ${className}`,
    ...argos,
  };

  return <BearDiv {...ajsw} />;
}
