import React, {
  //
  useState,
  useContext,
} from "react";
import { useForm, Controller } from "react-hook-form";
import {
  //
  logs,
} from "../../index"
import { BearFormSetup } from "./BearFormSetup";
// import { BearSelect } from "../select/BearSelect";

export function FormBase({
  //
  // seriesObj,
  ...args
}) {
  // 1const

  const modeo =
    //
    // "onBlur";
    // "onSubmit";
    // "onChange";
    "all";

  const oksdaew = {
    // validationSchema: asokew,
    // resolver: asokew,
    //
    reValidateMode: "onBlur",
    mode: modeo,
    // ...hookConfig,
  };

  const {
    //
    handleSubmit,
    // watch,
    ...asdw
  } =
    //
    useForm(oksdaew);

  logs.logga("___ asdw ___", asdw);

  function fdijgg(okdfg) {
    logs.logga("___ SUMIBT TRAP ___", okdfg);
  }
  const cvkbdf = {
    onSubmit: handleSubmit(fdijgg),
  };

  const bkgfo = {
    name: "password",
    // required: true,
    ...asdw,
  };

  const djfgt = {
    name: "name",
    ...asdw,
  };

  const ijsasr = [
    //
    "List",
    "Base",
  ];

  const koerte = {
    // inputFunction: BearSelect,
    name: "dfgerr",
    multi: true,
    optionsArray: ijsasr,
    ...asdw,
  };

  const idfgt = BearFormSetup(bkgfo);

  logs.logga("___ bkgfo ___", bkgfo);

  const kdfgr = {
    type: "submit",
  };

  const okfdsd = (
    <>
      {/*  */}
      <form {...cvkbdf}>
        {/* {BearFormSetup(djfgt)} */}
        {/* {BearFormSetup(bkgfo)} */}
        {BearFormSetup(koerte)}
        {/* <input {...idfgt} /> */}
        {/* <InputChak {...idfgt} /> */}
        <button {...kdfgr}>SUBMIT</button>
      </form>
    </>
  );

  return okfdsd;
}
