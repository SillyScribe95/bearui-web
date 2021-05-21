import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";

export default function BearTitle({
  subtitleConfig,
  titlevar,
  belowObj,
  sizevar = "34px",
  subtitlevar,
  ...args
}) {
  const aijsdwe =
    //
    // gens.butClass;
    "bold";

  const asyhdwe = {
    fontSize: sizevar,
    // padding: "0 2% 20px",
  };

  //
  const titleConfig = {
    style: asyhdwe,
    className: aijsdwe,
    obj: titlevar,
    ...args,
  };

  const sijwesae = {
    style: { fontSize: "28px" },
    obj: subtitlevar,
    ...subtitleConfig,
  };

  // BediaTextDiv
  const oksd = args && (
    <>
      {/* asdokw */}
      <BearDiv {...titleConfig} />
      <BearDiv {...sijwesae} />
      {belowObj}
      {/* sdfoker */}
      {/* <ImageTextDiv noIcon noImage {...titleConfig} /> */}
    </>
  );

  const iasjwe = {
    obj: oksd,
    style: { width: "100%" },
  };

  return <BearDiv {...iasjwe} />;
}
