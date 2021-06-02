import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";

export function BearTitle({
  titleConfig,
  titlevar,
  belowObj,
  // sizevar = "34px",
  subtitlevar,
  subtitleConfig,
  lineBetween,
  ...args
}) {
  const aijsdwe =
    //
    // gens.butClass;
    "bold";

  const asyhdwe = {
    // fontSize: sizevar,
    // padding: "0 2% 20px",
  };

  //
  titleConfig = {
    style: asyhdwe,
    className: aijsdwe,
    obj: titlevar,
    ...titleConfig,
  };

  const sijwesae = {
    style: { fontSize: "0.8em" },
    obj: subtitlevar,
    ...subtitleConfig,
  };

  // BediaTextDiv
  const oksd = (
    <>
      {/* asdokw */}
      <BearDiv {...titleConfig} />
      {lineBetween && <hr />}
      <BearDiv {...sijwesae} />
      {belowObj}
      {/* sdfoker */}
      {/* <ImageTextDiv noIcon noImage {...titleConfig} /> */}
    </>
  );

  const iasjwe = {
    obj: oksd,
    style: { width: "100%" },
    ...args,
  };

  return <BearDiv {...iasjwe} />;
}
