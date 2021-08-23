import React, { useEffect, useState, useContext } from "react";
import { bearlog } from "../../index";
// import HelmetInfo from "../functions/HelmetInfo";
import BearHeader from "../layout/BearHeader";
// import Divo from "../components/Divo";
// import TitleMain from "./TitleMain";
import { BearMetaTags } from "./BearMetaTags";

export function BearPage({
  //
  // 1helmet 1meta
  pageArgs,
  headerConfig,
  metaConfig,
  heightBottom,
  title,
  description,
  image,
  style,
  ...orga
}) {
  //   function TitFinso({ ...ase }) {
  //     logs.logga("___ PAGBASE TITLE ___", ase);

  //     return <TitleMain {...ase} />;
  //   }

  //   function SubFinso({ ...asdwe }) {
  //     const topSize = mobview("24px", 34);
  //     const bttmtSize = mobview("20px", 30);

  //     const iadqweok = {
  //       obj: "The fastest, easiest way",
  //       style: { fontWeight: "bold" },
  //     };

  //     const yeqwe = {
  //       style: { fontSize: bttmtSize },
  //       obj: fastestvar,
  //     };

  //     const sdfrasw = {
  //       obj: <Divo {...iadqweok} />,
  //       subtitlevar: <Divo {...yeqwe} />,
  //     };

  //     const gfigerw = (
  //       <>
  //         <Divo {...iadqweok} />
  //         <Divo {...yeqwe} />
  //       </>
  //     );

  //     const heigTitle =
  //       //#
  //       // "5px";
  //       mobview("40px", "60px");

  //     const fghktrt = {
  //       verticalAlign: "text-bottom",
  //       fontSize: topSize,
  //       marginBottom: heigTitle,
  //       // background: "blue",
  //       // color: "black",
  //       textAlign: "left",
  //       // padding
  //     };

  //     const iewq = {
  //       obj: gfigerw,
  //       style: fghktrt,
  //       // ...asdwe,
  //     };

  //     const oawe = (
  //       //
  //       // <TitleMain {...iewq} />;
  //       <Divo {...iewq} />
  //     );

  //     return oawe;
  //   }

  function HelmBao({ ...asd }) {
    metaConfig = {
      //   formData: pageObj,
      //   ...ijasew,
      title,
      description,
      image,
      ...asd,
      // ...orga,
    };

    const aodkwaw =
      //
      // "";
      BearMetaTags(metaConfig);

    return aodkwaw;
  }

  const baseItHelm =
    //
    // "";
    metaConfig && HelmBao(metaConfig);

  // const faese =

  //   const basTItle =
  //     //
  //     // "";
  //     !noTitle && <TitFinso {...titleConfig} />;

  //   logs.logga("___ subtleConfig ___", subtitleConfig);

  //   const kjsadwqe =
  //     //
  //     // "";
  //     (!noSubtitle && subtitleConfig) || fastestvar;
  //   // !noSubtitle || subtitleConfig;

  //   logs.logga("___ kjsadwqe ___", kjsadwqe);

  //   const titleSmal = kjsadwqe && <SubFinso {...subtitleConfig} />;

  function Headdos(zxga) {
    const xcvixf = {
      ...zxga,
      ...pageArgs,
      // centerobj: stepObj,
      // centerobj: <>doasdoakewqeqeqw </>,
    };

    const sdfgtea =
      //
      BearHeader(xcvixf);
    // <HeaderChak />

    return sdfgtea;
  }

  const ijfer = {
    style: {
      padding: "2% 10%",
      ...style,
    },
    ...orga,
  };

  // 1height
  const dfigjsd = heightBottom && <div style={{ height: heightBottom }} />;

  const aijewqe = (
    <>
      {baseItHelm}
      {Headdos(headerConfig)}
      <div {...ijfer} />
      {dfigjsd}
      {/* {eewewqw} */}
    </>
  );

  return aijewqe;
}
