import React, {
  //
  useState,
  useContext,
} from "react";
import { useForm, Controller } from "react-hook-form";
import {
  //
  bearlog,
} from "../../index";
import { BearFormSetup } from "./BearFormSetup";
// import { BearSelect } from "../select/BearSelect";

export function BearFormBase({
  //
  // seriesObj,
  children,
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
    register,
    ...asdw
  } =
    //
    useForm(oksdaew);

  bearlog.lug("___ FORM BASE ___", asdw);

  function fdijgg(okdfg) {
    bearlog.lug("___ SUMIBT TRAP ___", okdfg);
  }
  const cvkbdf = {
    onSubmit: handleSubmit(fdijgg),
    // ...asdw
  };

  const kdfgr = {
    type: "submit",
  };

  const sidjfer = register("name", { required: true });

  const sdfm = {
    name: "name",
    // ...register,
    ...sidjfer,
  };

  const kvdsdr = <input {...sdfm} />;

  const okfdsd = (
    <>
      {/*  */}
      <form {...cvkbdf}>
        {/* {BearFormSetup(djfgt)} */}
        {/* {BearFormSetup(bkgfo)} */}
        {/* {BearFormSetup(koerte)} */}
        {children}
        {kvdsdr}
        {/* <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} /> */}
        {/* <input typje="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /> */}
        {/* <input {...idfgt} /> */}
        {/* <InputChak {...idfgt} /> */}
        <button {...kdfgr}>SUBMIT</button>
      </form>
    </>
  );

  return okfdsd;
}
