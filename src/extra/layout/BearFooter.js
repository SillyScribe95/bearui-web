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
  className,
  //   obj,
  // style,
  ...argos
}) {
  // const [truShowa, settruShowa] = useState(true);

  let asdew = sticky ? "sticky" : "";

  const ajsw = {
    className: `bearFooter mainfoot ${asdew} ${className}`,
    // style: {...}
    ...argos,
  };

  bearlog.lug("___ ajsw ___", ajsw);

  return <div {...ajsw} />;
  // return (
  //   <>
  //     <div className="mainfoot"></div>
  //     <div {...ajsw} />
  //   </>
  // );
}
