import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  bearlog,
} from "../index";
import { BearDiv } from "./BearDiv";
import { BearBorder, BearQuote } from "./GlobalComps";

// { inLineTrue, ...asdd }
export function BearError(sdfjer, afijqwe = {}) {
  return BearErASDJIQWE(sdfjer, afijqwe);
}

export function BearErASDJIQWE(asdfower, { bearName, hideError, ...asdd }) {
  // 1const

  const ijsawe = asdfower && (
    <>
      <br />
      <br />
      {asdfower}
    </>
  );

  const sidjfr = hideError && (
    <>
      <br />
      <br />
      {BearHideError(hideError, bearName)}
    </>
  );

  const okfdsd = (
    <>
      🐻 ERROR
      {ijsawe}
      {sidjfr}
      <br />
      <br />
      {/* {BearHideError("ignoreError", "BearContextProvider")} */}
      {/*  */}
    </>
  );

  const ijsad = {
    //
    // width: "100%",
    padding: "5px 20%",
    fontSize: "16px",
    margin: "20px",
    background: "darkred",
    color: "white",
    textAlign: "center",
    ...BearBorder("transparent", "5px"),
    ...(asdd && asdd.style),
  };

  const adkease = {
    // className: "buttonHover shadowHover bold",
    obj: okfdsd,
    ...asdd,
    style: ijsad,
  };

  const okasew = <BearDiv {...adkease} />;

  return okasew;
}

export function BearHideError(attr, name) {
  const isjdfre = (
    <>
      To hide this error, set {BearQuote(attr)} as true in {BearQuote(name)}s{" "}
      arguments.
    </>
  );

  return isjdfre;
}

// export function BearErrMust(attr, name) {
//   const isjdfre = (
//     <>
//      {attr} attribute must be {name}
//     </>
//   );

//   return isjdfre;
// }
