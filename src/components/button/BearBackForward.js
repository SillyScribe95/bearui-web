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
  bearlog,
} from "../../index";

export function BearBackForward({
  onBack,
  onForward,
  back = "Back",
  forward = "Forward",
  hideBack,
  hideForward,
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
    obj: back,
    onClick: onBack,
    // disVar: disBack,
    ...backConfig,
  };

  const endRighto = {
    obj: forward,
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
    const zdsdar = {
      ...buttonConfig,
      ...oskwe,
    };

    return BearDiv(zdsdar);
  }

  return BearFloat({
    left: xcijsdf,
    right: dfgkmre,
    ...argssdf,
  });
}
