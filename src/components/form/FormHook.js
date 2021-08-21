import React, { useEffect, useState } from "react";
import { isEmpty, isObject } from "lodash";
import { BearDiv } from "../BearDiv";
import { BearList } from "../list/BearList";
import { BearButton } from "../button/BearButton";
import {
  //
  bearlog,
} from "../../index";
import { useForm, Controller } from "react-hook-form";
import { focusBase } from "../../functions/formFuncs";

export default function FormHook({
  buttonList,
  onSubmit,
  hookConfig,
  focusFirst,
  focusInput,
  ...args
}) {
  //
  // 1const

  const modeo =
    //
    // "onBlur"
    // "onSubmit";
    "onChange";

  const oksdaew = {
    // validationSchema: asokew,
    // resolver: asokew,
    //
    reValidateMode: "onChange",
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

  bearlog.lug("idjfe--", idjfe);

  // 1focus
  function Faoksd() {
    const sdjfrwe =
      //
      // "";
      focusInput;
    // focusFirst || focusInput;

    //   const existo =
    //   //
    //   Array.isArray(list) && list[0];
    // const ijdswer =
    //   //
    //   existo && isObject(existo) ? existo.name : existo;

    if (sdjfrwe) {
      focusBase({
        focusInput,
        ...args,
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
    handleSubmit(onSubmit);
  // handleSubmit(sease);
  // subbTo;
  // sease;

  const noSumibt =
    //
    !buttonList;

  const jsidwer = noSumibt && {
    ...idjfe,
    onSubmit: kasewse,
  };

  return jsidwer;
}
