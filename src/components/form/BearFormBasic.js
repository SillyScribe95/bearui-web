import React, { useEffect, useState } from "react";
import {
  //
  bearlog,
  BearDiv,
  BearPage,
  BearImage,
  BearInputText,
  BearButtonList,
  BearTextarea,
  BearInputSubmit,
  BearFloat,
  BearList,
  BearError,
  //   BearFormHooks,
  BearCheckMain,
  BearBackBorder,
} from "@sillyscribe95/bear-ui-web";
import { BearFormSubmit } from "./BearFormSubmit";
import { BearColors } from "./BearGlobals";

export function BearFormBasic({
  id,
  bearName = "",
  inputConfig,
  formFieldsConfig,
  //
  // 1button
  renderButton,
  noButton,
  noButtonEnd,
  buttonConfig = {},
  buttonText = "Submit",
  buttonSize = "35px",
  //
  // 1required
  requireAll,
  //
  // 1submit
  onSubmit,
  disableSubmit,
  submitDisplay,
  submitExtra,

  //
  //
  style,
  children,

  ...args
}) {
  id = id ? id : bearName;
  //
  // 1const
  const [loadVars, setloadVars] = useState();
  const [loadSetto, setloadSetto] = useState();

  const baseargs = {
    onSubmit,
  };

  const completeArgs = {
    bearName,
    ...baseargs,
    ...args,
  };

  // 1onsubmit
  function onSubMain(event) {
    bearlog.lug("___ formBSIC SUBMIT ___", event);

    BearFormSubmit({ event, ...baseargs });
  }

  // 1button
  function Buttiona({ disabledConfig, disabled, text, style, ...siwerew }) {
    disabled = disableSubmit || disabled;

    const jsadcvx = {
      ...BearColors("white", "green"),
      padding: "5px 10px",
      margin: "5px 10px",
      fontSize: buttonSize,
      // marginBottom: "20px",
      ...style,
    };

    const nsdijfer = {
      name: "submitButton",
      text: buttonText,
    };

    const dvbijkrw = {
      ...nsdijfer,
      ...siwerew,
      type: !disabled && "submit",
      value: text,
      form: id,
      style: jsadcvx,
    };

    const sdijfwr =
      //
      buttonText;

    bearlog.lug("___ bForm BUTTON ___", dvbijkrw);

    let adhwdse = (
      <button {...dvbijkrw}>
        {/*  */}
        {sdijfwr}
      </button>
    );

    return adhwdse;
  }

  const sdnfer = {
    onSubmit: onSubMain,
    id,
    style: {
      position: "relative",
      ...style,
    },
  };

  const checkArgs = {
    ...completeArgs,
    requiredArgs: baseargs,
  };

  const goBut = !noButton && Buttiona(buttonConfig);

  const sadwe = BearFloat({
    center: children,
    bottom: goBut,
  });

  const xcvsfs = (
    <>
      <form {...sdnfer}>
        <div {...formFieldsConfig}>{children}</div>
        {children && goBut}
        {/* {sadwe} */}
      </form>
    </>
  );

  return BearCheckMain("BearForm", xcvsfs, checkArgs);
}
