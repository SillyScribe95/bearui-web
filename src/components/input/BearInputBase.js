import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  bearlog,
} from "../../index";
import { BearButton } from "../button/BearButton";
import { BearInputLabel } from "./BearInputLabel";
import { BearFloat } from "../BearFloat";
import { BearDiv } from "../BearDiv";
import { argMiss, BearFlex } from "../GlobalComps";
import { Flex } from "@chakra-ui/layout";

export function BearInputBase(
  ujsdqwe,
  {
    // 1title 1label
    noLabel,
    containFunc,
    labelConfig,
    label,
    labelStyle,
    title,
    labelWidth,
    //
    // 1value
    initialValue,
    //
    // 1change 1onchange
    changeGlobal,
    onChange,
    obj,
    ref,
    //
    // 1required
    required,
    name,
    //
    // 1error
    error,
    errorMessage,
    errorobj,
    checkExistError,
    hideError,
    errors,
    errorConfig = {},
    errorFunction,
    //
    //
    // 1button
    rightSubmit,
    //
    //
    addTrue,
    // 1style
    style,
    containerStyle,
    fontSize = "28px",
    sameLine,
    lineBelow,
    //
    formData,
    noIcon,
    //
    ...dfsgre
  }
) {
  logros("___ dfsgre ___", dfsgre);

  errorMessage = errorMessage || error;
  label = label || title;

  //
  //
  // 1baseargs
  const ifdjsfd = {
    required,
    ref,
    ...dfsgre,
  };

  const ashwe = {
    width: "100%",
    padding: "5px",
    fontSize,
    ...containerStyle,
    ...style,
  };

  const ijdsew =
    //
    required;
  // requireClass && required;

  const slasso = ijdsew ? "required" : "";

  // 1onchange
  function mainChange(valows) {
    // bearlog.lug("___ adowe ___", adowe);
    bearlog.lug("___ valows ___", valows);

    setvalInit(valows);

    // if (onChange) {
    //   onChange(valows);
    // }
  }
  const [valInit, setvalInit] = useState(initialValue);

  const changBssoe = {
    value: valInit,
    valueFunc: setvalInit,
  };

  const isjdfr =
    //
    "";
  // { onChange: inputFunction };

  const changeAll = {
    ...changBssoe,
    ...isjdfr,
  };

  const nsijqwe =
    //
    // isjdfr;
    changeGlobal && isjdfr;

  // 1ref
  function getRef(rfo) {
    return { ref: rfo, inputRef: rfo, innerRef: rfo };
  }

  const sdweew = {
    name,
    required,
    id: name,
    className: slasso,
    ...getRef(ref),
  };

  const nfijgr = {
    style: ashwe,
  };

  const dfijgr = {
    fontSize,
  };

  const objbase = {
    ...sdweew,
    ...dfsgre,
    ...changeAll,
    ...nfijgr,
    // ...changBssoe,
    ...nsijqwe,
    ...dfijgr,
  };

  // 1console
  function logros(...asa) {
    //

    const oisdkre =
      //
      "card";
    // "testSelect"

    let sdfijer =
      //
      "asda";
    // name == oisdkre;

    if (sdfijer) {
      bearlog.laggu(name + "___ BearForm--INPUT------zzz", ...asa);
    }
  }

  function ChooseTit() {
    const isade = {
      // ,
    };

    const ijasde =
      //
      "";
    // <SearchFormFields {...isade} />;

    return ijasde;
  }

  // 1title 1label
  function TitleOBbi({ style, ...cxzv }) {
    //

    const skdowqe = sameLine
      ? {
          //
          fontSize: "1.15em",

          minWidth: labelWidth,
          margin: "0px 10px",
          // marginTop: "-10px",
        }
      : {
          fontSize: "1.15em",
          margin: "0px 0 10px 10px",
        };

    const iawqe = {
      ...skdowqe,
      textAlign: "left",
      fontWeight: "bold",
      ...style,
      ...labelStyle,
    };

    const sdfkewr = {
      ...cxzv,
      ...ifdjsfd,
      style: iawqe,
    };

    bearlog.lug(name, "___ inptLabel ___", sdfkewr);

    // return "sokere";
    return <BearInputLabel {...sdfkewr}>{label}</BearInputLabel>;
  }

  const showTit =
    //
    // true;
    !noLabel && label;

  const saewase = {
    // ...zdssdire,
    ...labelConfig,
  };

  const oksdwqe = showTit && <TitleOBbi {...saewase} />;

  const confijre = {
    size: "sm",
    type: "submit",
    obj: "YES",
  };

  const jaewdsr = {
    right: <BearButton {...confijre} />,
    center: ujsdqwe,
  };

  // rightSubmit = true;

  const asdijwe = rightSubmit ? (
    //
    <>
      <BearFloat {...jaewdsr} />
    </>
  ) : (
    ujsdqwe
  );

  logros("___ ujsdqwe ___", ujsdqwe);
  logros("___ asdijwe ___", asdijwe);
  logros("___ style ___", style);

  const asodkwqe = sameLine && {
    textAlign: "center",
    alignItems: "center",
  };

  let ijsa = {
    style: { ...asodkwqe, ...ashwe },
  };

  const okdsae = {
    style: {
      width: "100%",
    },
  };

  // lineBelow = true;
  const xvcmfde = lineBelow && (
    <>
      <hr />
      {/* sadowqkewqe */}
      {/* <Divider /> */}
    </>
  );

  // 1error
  function ErroBase({ style, ...ase }) {
    const nisjrad = {
      minHeight: "30px",
      color: "red",
      textAlign: "left",
      fontWeight: "bold",
      padding: "5px 10px",
      fontSize: "0.8em",
      ...style,
    };

    // error = "ss9qw3q";

    const difg = {
      ...ase,
      style: nisjrad,
    };

    const fjdgse =
      //
      errorFunction ? errorFunction(errorMessage) : errorMessage;

    return <BearDiv {...difg}>{fjdgse}</BearDiv>;
  }

  const xcbmd = !hideError && ErroBase(errorConfig);

  const inpMid = (
    <>
      {/* <div {...okdsae}> */}
      {/*  */}
      {asdijwe}
      {/* </div> */}
    </>
  );

  // 1sameline
  const xcvkd =
    //
    false;
  // sameLine;

  const dksfds = xcvkd ? (
    BearFloat({
      left: oksdwqe,
      center: inpMid,
    })
  ) : (
    <>
      {oksdwqe}
      {inpMid}
    </>
  );

  const okaweasd = (
    <>
      {dksfds}
      {/* dgokdsf */}
      {xcbmd}
    </>
  );

  // 1return

  // 1same
  function SameRet() {
    const kdfss = (
      <>
        {/* <BearFlex {...ijsa}> */}
        <BearDiv
          //
          flex
          {...ijsa}
        >
          {/*  */}
          {okaweasd}
        </BearDiv>
        {/* </BearFlex> */}
      </>
    );
    return kdfss;
  }

  // 1console
  bearlog.lug("___ ashwe ___", ashwe);
  bearlog.lug("ijsa-zzz", ijsa);

  const zxcvdf =
    //
    sameLine ? SameRet() : <div {...ijsa}>{okaweasd}</div>;

  const jsidew = {
    style: containerStyle,
  };

  const kaosdew = (
    <>
      {/* <div> */}
      {/* <div {...jsidew}> */}
      {/*  */}
      {zxcvdf}
      {/* {xvcmfde} */}
      {/* </div> */}
      {/* </div> */}
    </>
  );

  return containFunc ? containFunc(kaosdew) : kaosdew;
}
