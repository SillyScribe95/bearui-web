import React from "react";
import { BearError, BearQuote, BearSpace } from "..";

export function BearFalseLog(...asdf) {}

// 1must
export function BearErrArgType(arg, type, { bearName, ...asd }) {
  //

  return BearError(
    bearName + "'s " + BearQuote(arg) + " argument must be a " + type,
    asd
  );
}

export function BearErrMiss(...asd) {
  //

  return BearError(BearMissing(...asd));
}

export function BearMissing(attr, mainnum, aseqwe = "Your component") {
  //
  const nisdfrw = mainnum ? mainnum : aseqwe;
  const kdsdae = (
    <>
      {/*  */}
      {BearQuote(nisdfrw)}'s
      {BearSpace(BearQuote(attr))}
      attribute is empty or missing.
      {/*  */}
    </>
  );

  const sadwew =
    //
    kdsdae;

  return sadwew;
}
