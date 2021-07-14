import React, {
  //
  useState,
  useContext,
} from "react";
import { BearTextMedia } from "../BearTextMedia";
import { BearFloat } from "../BearFloat";
import { BearButton } from "./BearButton";
import { BearDiv } from "../BearDiv";
import { BearFlex } from "../GlobalComps";
import {
  //
  logs,
} from "../../index"

export function BearBackForward({
  obj,
  onBack,
  onForward,
  disVar,
  arrVar,
  textTrue,
  disBack,
  children,
  disForward,
  hideBack,
  hideForward,
  genConfig,
  backConfig,
  forwardConfig,
  buttonConfig = {},
  ...argssdf
}) {
  //
  //

  // function asdjie(funco){

  // }

  const endLeftfsa = {
    iconvar: "back",
    onClick: onBack,
    // disVar: disBack,
    ...backConfig,
  };

  const endRighto = {
    iconvar: "forward",
    onClick: onForward,
    // disVar: disForward,
    ...forwardConfig,
  };

  const xcijsdf =
    //
    // "BACK";
    !hideBack &&
    //
    // "left"
    saaoekwq(endLeftfsa);

  const dfgkmre =
    //
    // "FORWARD";
    !hideForward &&
    //
    // "right"
    saaoekwq(endRighto);

  function saaoekwq(oskwe) {
    const ijawe = {
      // className: gens.butClass,
    };

    const zdsdar = {
      ...oskwe,
      ...ijawe,
      ...buttonConfig,
      itemType: "button",
    };

    logs.logga("___ zdsdar ___", zdsdar);

    const uajwe =
      //
      // "asdfeqws";
      BearTextMedia(zdsdar);
    // BearList();

    return uajwe;
  }

  // 1float
  function Flaoto(){
    const ksdfasd = {
      // topLeft
    }
  }

  const uawhe = {
    // iconvar
    obj: (
      <>
        {xcijsdf}
        {children}
        {dfgkmre}
      </>
    ),
    // list: [xcijsdf, children, dfgkmre],
    // leftobj: xcijsdf,
    // centerobj: children,
    // rightobj: dfgkmre,
    padvar: "5px",
    ...argssdf,
  };

  const ijwqeq = (
    <>
      <BearDiv
        flex
        vertAlign
        {...uawhe}
      />
    
    </>
  );

  return ijwqeq;
}
