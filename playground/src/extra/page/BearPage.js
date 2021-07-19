import React, { useEffect, useState, useContext } from "react";
import { logs } from "bearui-web";
// import HelmetInfo from "../functions/HelmetInfo";
// import HeaderContent from "./HeaderContent";
// import Divo from "../components/Divo";
// import TitleMain from "./TitleMain";
import { BearDiv } from "../BearDiv";
import { BearMetaTags } from "./BearMetaTags";

export function BearPage({
  //
  // 1helmet
  helmetConfig,
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
    helmetConfig = {
      //   formData: pageObj,
      //   ...ijasew,
      ...asd,
      // ...orga,
    };

    const aodkwaw =
      //
      // "";
      BearMetaTags(helmetConfig);

    return aodkwaw;
  }

  const baseItHelm =
    //
    // "";
    !helmetConfig && <HelmBao {...helmetConfig} />;

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

  //   function Headdos() {
  //     const xcvixf = {
  //       ...headerConfig,
  //       ...pageArgs,
  //       centerobj: stepObj,
  //       // centerobj: <>doasdoakewqeqeqw </>,
  //     };

  //     logs.logga("___ headConfig ___", headerConfig);

  //     const sdfgtea = (
  //       //
  //       <HeaderContent {...xcvixf} />
  //       // <HeaderChak />
  //     );

  //     const askwe = {
  //       height: headerHeight,
  //     };

  //     const ovkcsdd = {
  //       obj: sdfgtea,
  //       style: askwe,
  //     };

  //     // const fsdokgs =
  //     //   //
  //     //   // "splfwfewr"
  //     //   pslda;

  //     return <Divo {...ovkcsdd} />;
  //   }

  const aijewqe = (
    <>
      {baseItHelm}
      <BearDiv {...orga} />
      {/* {eewewqw} */}
    </>
  );

  return aijewqe;
}
