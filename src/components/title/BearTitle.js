import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";

export function BearTitle({
  titleConfig = {},
  title,
  children,
  belowObj,
  // sizevar = "34px",
  subtitle,
  subtitleConfig = {},
  lineBetween,
  ...args
}) {
  //
  title = children || title;

  const aijsdwe =
    //
    "";
  // "shadowBottom";
  // gens.butClass;
  // "bold";

  const asyhdwe = {
    // fontSize: sizevar,
    // padding: "0 10% 20px",
    // marginBottom: "30px",
  };

  const usdhfr = (
    <>
      {title}
      {lineBetween && <hr />}
    </>
  );

  function sadfae({ style, ...aasds }) {
    const jifdgr = {
      marginBottom: "30px",
      ...style,
    };

    const ijdf = {
      style: jifdgr,
      ...aasds,
    };

    return ijdf;
  }

  titleConfig = {
    className: aijsdwe,
    obj: usdhfr,
    ...sadfae(titleConfig),
  };

  const sijwesae = {
    style: { fontSize: "0.8em" },
    obj: subtitle,
    ...subtitleConfig,
  };

  // BediaTextDiv
  const oksd = (
    <>
      {/* asdokw */}
      <BearDiv {...titleConfig} />
      {subtitle && <BearDiv {...sijwesae} />}
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
