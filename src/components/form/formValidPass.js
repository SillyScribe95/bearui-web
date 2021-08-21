import React, {
  //
  useState,
  useContext,
} from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { bearlog } from "../../index";

export function formValidPass({
  //
  list,
  dictvar,
  // yupSchema,
  ...args
}) {
  // 1const
  const schemavar = {
    name: yup
      .string()
      //
      // .match("")
      .required(),
    email: yup
      .string()
      .email("This is not a valid email.")
      .required("Please add your email."),
    // age: yup.number().required(),
    // ...schemavar,
  };

  const finsaShc =
    //
    // schemavar
    {};

  function asifjew(name, asdofj) {
    schemavar[name] = asdofj;
    // finsaShc[asdofj] = schemavar[asdofj];
  }

  function resolveValid(type) {
    let sdofkwr = "";
    switch (type) {
      case "string":
        sdofkwr = yup.string();
        break;
    }
    return sdofkwr;
  }

  function xcvibjdf({ name, validationType, validationFunc }) {
    //
    const xvcbkmfd = resolveValid(validationType);
    const ijdsf = validationFunc ? validationFunc(xvcbkmfd) : xvcbkmfd;

    asifjew(name, ijdsf);
    //   return xvcbkmfd
  }

  function dssr(fgde) {
    bearlog.lug("___ fgde ___", fgde);

    if (fgde.validationType) {
      xcvibjdf(fgde);
    }
  }

  mapFuncDict(list, dssr, dictvar);

  const schmeShape =
    //
    // yup.object(schemavar);
    yup.object().shape(schemavar);

  const schmResol =
    //
    schmeShape;
  // yupResolver(schmeShape);

  bearlog.lug("___ schemavar ___", schemavar);
  bearlog.lug("___ schmeShape ___", schmeShape);
  bearlog.lug("___ schmResol ___", schmResol);

  return schmResol;
}
