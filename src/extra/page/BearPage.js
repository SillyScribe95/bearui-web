import React, { useEffect, useState, useContext } from "react";
import { BearDiv } from "../../components/BearDiv";
import { repClass } from "../../components/GlobalComps";
import { bearMobileView } from "../../components/ExportComps";
import { bearlog } from "../../index";
import { BearFooter } from "../layout/BearFooter";
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
  footer,
  footerConfig,
  heightBottom,
  title,
  titleConfig,
  description,
  image,
  className,
  children,
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

  const sjd3as =
    title &&
    BearDiv({
      obj: title,
      align: "center",
      fontSize: "2.1em",
      ...titleConfig,
    });

  const sdifjwe = (
    <>
      {/*  */}
      {sjd3as}
      {children}
    </>
  );

  // 1padding
  const paddos = bearMobileView ? "2%"  : "10%"
  const sdfwr = `2% ${paddos}`

  const ijfer = {
    style: {
      // minHeight: "100vh",
      padding: sdfwr,
    },
    children: sdifjwe,
  };

  // 1footer
  const footios = footer && (
    // <div className="bearFooter">
    <BearFooter {...footerConfig}>{footer}</BearFooter>
    // {/* </div> */}
  );

  const aijewqe = (
    <>
      {baseItHelm}
      {headerConfig && Headdos(headerConfig)}
      <div {...ijfer} />
      {/* {eewewqw} */}
    </>
  );

  orga = {
    ...repClass(className, "bearPage"),
    ...orga,
  };
  //
  // 1console
  bearlog.lug("___ orga ___", orga);

  let adsas = (
    //
    // <BearDiv {...orga}>{aijewqe}</BearDiv>;
    <div {...orga}>
      {/*  */}
      {aijewqe}
      {footios}
    </div>
  );

  return adsas;
}
