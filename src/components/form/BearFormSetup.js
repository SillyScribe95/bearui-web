import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
} from "../../index"
import { BearFormInputCheck } from "./BearFormInputCheck";
import { argMiss, BearUpper } from "../GlobalComps";
import { getFormPass } from "./getFormPass";

export function BearFormSetup({
  register,
  inputStyle,
  formData,
  inputType,
  style,
  name,
  horizList,
  errors,
  ...baseObj
}) {
  //

  const ndifjg = {
    //
    errors,
    name,
    formData,
    ...baseObj,
  };

  // 1log 1console
  function logall(...asd) {
    const ijdsrw =
      //
      // "card"
      // "name"
      "tsdlsae";
    // "firstLastName";

    const fhgsdf =
      //
      name == ijdsrw;
    // logtrue;
    // true;

    if (fhgsdf) {
      logs.loggu(...asd);
    }
  }

  logs.loggu("___ REGISTER BASE  ___", baseObj);

  function getRef(refDone) {
    logs.logga("___ refDone ___", refDone);
    return xcvdfe(refDone);
  }

  function xcvdfe({ ...asdsa }) {
    //
    const reffo =
      //
      // {};
      // register()
      // register(asdsa);
      // register(name);
      // register(name, {});
      register(name, asdsa);

    const jdsedr = {
      innerRef: reffo,
      ref: reffo,
      ...reffo,
    };

    return jdsedr;
  }

  const ijdfewr = inputType && {
    ...getFormPass(inputType, ndifjg),
    inputType,
  };

  const cxvijdsf = {
    ...getFormPass(name, ndifjg),
    ...ijdfewr,
    ...ndifjg,
  };

  logs.logga("___ formFullRef ___", cxvijdsf);

  const okasew = getRef(cxvijdsf);
  const hookArgs = {
    ...okasew,
  };

  const existo = formData && formData[name];
  const ijawe = existo ? existo : baseObj.textvar;

  const cadwee = {
    ...style,
  };

  const cvbijv = ijawe && {
    initialValue: ijawe,
    // value: ijawe,
    // textvar: ijawe,
  };

  const asw =
    //
    errors && errors[name] && errors[name]["message"];

  const fudger = {
    ...cvbijv,
    name,
    errorMessage: asw,
    ...hookArgs,
    // ...ndifjg,
    register,
    label: BearUpper(name),
    ...cxvijdsf,
    // ...getFormPass(name, ndifjg),
    style: cadwee,
    containerStyle: inputStyle,
  };

  const odkasew =
    //
    fudger;
  // argMiss(fudger);

  // logall(name + "___ baseObj ___", baseObj);
  // logall(name + "___ STYLE ___", cadwee);
  logs.logga(name + "___ InputBase TEXT ___", odkasew);

  // 1inputbase
  const oiaswe =
    //
    // "sodkwea";
    BearFormInputCheck(odkasew);
  // BearInput(odkasew);
  // <input {...odkasew} />
  // <InputChak {...odkasew} />

  return oiaswe;
}
