import React, {
  //
  useState,
  useContext,
} from "react";

import * as logs from "../../functions/logFuncs";
import { BearDiv } from "../../components/BearDiv";

//   import {
//     BlankWrap,
//     setGlobalSource,
//     //
//   } from "../functions/GlobalFunctions";

export function BearFooter({
  onClick,
  heightVar,
  disVar,
  style,
  closeTrue,
  //   obj,
  signText,
  ...argos
}) {
  heightVar = heightVar ? heightVar : "40px";

  // const [truShowa, settruShowa] = useState(true);

  const styleo = {
    position: "fixed",
    bottom: 0,
    left: 0,
  };

  const selSt = {
    width: "100vw",
    // zIndex: gens.indexz["footer"],
    background: "white",
    minHeight: heightVar,
    //   // // width: widthGlobal,
    ...styleo,
    ...style,
  };

  const ajsw = {
    // obj: obj ? obj : <SignUpDiv />,
    style: selSt,
    ...argos,
    // style={{
    //   width: "100vw",
    //   background: "white",
    //   // // width: widthGlobal,
    // }}
    // onClick={() => {
    //   setListView(!listView);
    // }}
  };

  logs.logga("ajsw---zzzz", ajsw, "asdi9hw");

  const iqjwe = <BearDiv {...ajsw} />;
  const gfnofkr = {
    obj: iqjwe,
    //   closeFunc: () => settruShowa(false),
  };

  const qkwead =
    //
    iqjwe;
  // closeTrue ? <WithCloseBut {...gfnofkr} /> : iqjwe;

  const saokdwe = (
    <>
      {/* <BlankWrap heightVar={heightVar} /> */}
      {qkwead}
    </>
  );

  return saokdwe;
}
