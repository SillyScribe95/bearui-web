import React, { useEffect, useState } from "react";
import { isEmpty, isObject } from "lodash";
import { BearDiv } from "../BearDiv";
import { BearList } from "../list/BearList";
import { BearButton } from "../button/BearButton";
import {
  //
  logs,
} from "../../index";
import { useForm, Controller } from "react-hook-form";

import {
  //
  BearUpper,
  argMiss,
  argPass,
  BearErrMiss,
  LoadMain,
} from "../GlobalComps";
import { BearError } from "../BearError";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearFormInputCheck } from "./BearFormInputCheck";
import { formValidPass } from "./formValidPass";
import { BearFormSetup } from "./BearFormSetup";
import { getFormPass } from "./getFormPass";
import { BearInputBase } from "../input/BearInputBase";
import { focusBase } from "../../functions/formFuncs";

export function BearForm({ children, ...args }) {
  //
  // 1const

  const modeo =
    //
    // "onBlur"
    "onSubmit";
  // "onChange";

  const oksdaew = {
    // validationSchema: asokew,
    // resolver: asokew,
    //
    // reValidateMode: "onChange",
    mode: modeo,
    ...hookConfig,
  };

  const {
    //
    handleSubmit,
    register,
    errors,
    control,
    setFocus,
    // watch,
    ...asdw
  } =
    //
    useForm(oksdaew);

  const idjfe = {
    errors,
    control,
    register,
  };

  // 1focus
  function Faoksd() {
    const sdjfrwe =
      //
      "";
    // focusFirst

    if (sdjfrwe) {
      focusBase({
        list,
        onFocus: setFocus,
      });
    }
  }

  // 1useEffect
  useEffect(() => {
    Faoksd();
  });

  const kasewse =
    //
    handleSubmit(onSubMain);
  // handleSubmit(sease);
  // subbTo;
  // sease;

  const noSumibt =
    //
    !buttonList;

  const jsidwer = noSumibt && {
    onSubmit: kasewse,
  };

  const xcvsfs = (
    <>
      <form {...args}>{children}</form>
    </>
  );

  return xcvsfs;
}
