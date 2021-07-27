import React, {
  //
  useState,
  useContext,
} from "react";
import { BearFlex, BearIconText } from "../GlobalComps";
import { BearDiv } from "../BearDiv";
import { BearIcon } from "../BearIcon";
import { BearFloat } from "../BearFloat";
// import { BearPopover } from "../BearPopover";
import { BearTextMedia } from "../BearTextMedia";
import * as logs from "../../functions/logFuncs";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

export function BearInputLabel({
  //
  children,
  // 1subtitle
  subtitle,
  subtitleConfig = {},
  subtitlePlacement,
  //
  labelFunc,
  addFunc,
  iconvar,
  newTrue,
  errorMessage,
  //
  checkbox,
  checkboxConfig = {},
  //
  // 1popup
  infoPopup,
  infoPopupConfig = {},
  infoConfig,
  //
  required,
  requiredFormat = "star",
  requiredConfig,
  ...args
}) {
  // 1const

  // 1required
  function RendReq() {
    const difjger =
      //
      "*";
    // BearIcon("star");

    const ijweq = {
      style: {
        marginLeft: "10px",
        // fontSize: "1em",
        color: "red",
      },
    };

    return (
      <BearDiv span {...ijweq}>
        {difjger}
      </BearDiv>
    );
  }

  const olbknfr = {
    fontSize: "0.4em",
    // color: "red",
    marginLeft: "10px",
    // className: "error",
  };

  const asdwe = {
    obj: errorMessage,
    className: "error",
    style: olbknfr,
  };

  const bnkifg = <BearDiv span {...asdwe} />;

  // 1info 1popup

  let okgerwe = infoPopup;
  switch (subtitlePlacement) {
    case "infoPopup":
      okgerwe = subtitle;
      subtitle = "";
  }

  const poppoBas = okgerwe && FoPop(infoPopupConfig);

  function FoPop({ style, ...aswe }) {
    const jsdewr = {
      style: { maxWidth: "250px", ...style },
      ...aswe,
    };

    const kidsjwer = <BearDiv {...jsdewr}>{okgerwe}</BearDiv>;

    const jdfgrwe = {
      content: kidsjwer,
      // info,
      // ...infoPopupConfig/,
    };

    const fidje = {
      //
      fontSize: "1.2em",
      marginTop: "10px",
    };

    const ndgjtre = {
      //
      className: "pointer",
      style: fidje,
      ...infoConfig,
    };
    const sfdgr = BearIcon("info", ndgjtre);

    return sfdgr;
    // return <BearPopover {...jdfgrwe}>{sfdgr}</BearPopover>;
  }

  // 1checkbox
  function ceckcio(dfokewr) {
    return <Checkbox {...dfokewr} />;
  }

  // 1title
  function AllNo() {
    // required = true;
    const ijstewr = required && RendReq(requiredConfig);
    const xcvkdsijdew = BearIconText(iconvar, children);
    const sdgr = checkbox
      ? ceckcio({
          children: xcvkdsijdew,
          ...checkboxConfig,
        })
      : xcvkdsijdew;

    const okdsras = (
      <BearDiv vertAlign flex>
        {/* aaaaaa */}
        {sdgr}
        {ijstewr}
        {/* {iconvar} {title} */}
      </BearDiv>
    );

    const idjfg = [
      //
      okdsras,
      poppoBas,
      // { obj: okdsras },
      // { obj: poppoBas },
    ];

    const sdfij = {
      //
      fontWeight: "bold",
      fontSize: "1.2em",
    };

    const nisdjre = {
      list: idjfg,
      style: sdfij,
    };

    logs.logga("___ nisdjre ___", nisdjre);

    const dijrw = (
      //
      // ""
      // BearFlex(nisdjre)
      <BearDiv flex {...nisdjre}>
        {okdsras}
        {poppoBas}
      </BearDiv>
    );

    return dijrw;
  }

  // TITLE MAIN
  const okasde =
    //
    AllNo();
  // newTrue ? ChooseTit() : AllNo();

  const ioakawe = (
    <>
      {okasde}
      {/* {aokdwe} */}
      {/* {bnkifg} */}
    </>
  );

  function BswTi() {
    const cvobkof = {
      className: "shadowHover pointer",
      onClick: addFunc,
      obj: BearIcon("➕", ""),
      style: {
        padding: "5px",
        marginTop: "-5px",
        fontSize: "0.8em",
        // marginLeft: "20px",
      },
    };

    const dfigjrt = <BearDiv {...cvobkof} />;
    const kcmdr = {
      center: ioakawe,
      right: dfigjrt,
    };

    const ijcwe = BearFloat(kcmdr);

    return ijcwe;
  }

  const ijsae = addFunc ? BswTi() : ioakawe;

  // 1icon
  const sdijr = {
    iconvar,
    // noImage: !iconvar,
    // noIcon: !iconvar,
  };

  const asdojwqs = {
    obj: ijsae,
    // ...sdijr,
    // textvar: ioakawe,
    // noText: true,
    // disVar: true,
  };

  logs.logga(name + "___ inpuBase TITLE CONF ___", asdojwqs);

  const seokwer = (
    //
    // <ImageTextDiv {...asdojwqs} />
    // <BediaTextDiv {...asdojwqs} />
    <BearDiv {...asdojwqs} />
  );

  const skdae = subtitle;
  const ijawe = skdae && Subtoter(subtitleConfig);

  function Subtoter(asdxc) {
    const ikawed = {
      fontSize: "0.8em",
    };

    const okawe = {
      obj: subtitle,
      style: ikawed,
      ...asdxc,
    };

    const uiajwe = <BearDiv {...okawe} />;

    return uiajwe;
  }

  const sdfgret = (
    <>
      {/* {okasde} */}
      {seokwer}
      {ijawe}
      {/* <hr /> */}
    </>
  );

  const kase = {
    padding: "0 0 10px 5px",
    textAlign: "left",
  };

  const isawqe = {
    obj: sdfgret,
    style: kase,
    ...args,
  };

  // 1console

  logs.logga("___ inputLabel BASE MAIN ___", {
    infoPopup,
    subtitle,
  });

  logs.logga("___ isawqe ___", isawqe);

  const sdfewr = <BearTextMedia {...isawqe} />;
  return labelFunc ? labelFunc(sdfewr) : sdfewr;
}
