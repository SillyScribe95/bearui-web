import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../../components/BearDiv";
import * as logs from "../../functions/logFuncs";
//   import { IconButton, Button, ButtonGroup } from "@chakra-ui/core";

export function BearButton({
  textConfig,
  genConfig,
  disableTrue,
  errorTrue,
  background,
  noBackground,
  style,
  obj,
  textvar,
  fontSize,
  longTrue,
  downloadLink,
  fullWidth,
  padvar,
  extStyle,
  formid,
  buttonType,
  // isLoading,
  groupConfig,
  loadClick,
  linkvar,
  logtrue,
  //
  // 1onclick
  clickObj,
  onClick,
  //
  noGreen,
  divConfig,
  onlyText,
  typevar,
  ...arg
}) {
  // const asndiw = {
  //   order: {
  //     linkvar: "/order",
  //     iconvar: "transcript",
  //     textvar: "Order Transcripts",
  //   },
  //   confirm: {
  //     textvar: "Confirm",
  //   },
  // };

  // textConfig = textConfig ? textConfig : asndiw[typevar];

  // const asdijwe = {
  //   font-weight: bold;
  //   height: 45px;
  //   padding: 2px 15px;
  //   border-radius: 5px;
  //   outline: none;
  //   background: #09d3ac;
  //   color: white;
  //   font-size: 14px;
  //   border: none;
  //   box-sizing: border-box;
  // }

  // 1const
  const [clickTrue, setclickTrue] = useState();

  const sdfoer = errorTrue && {
    background: "red",
    color: "white",
  };

  const longeos = longTrue && {
    width: "200px",
  };

  const baseoSt = {
    padding: "2px 10px",
    ...longeos,
    color: noBackground ? "black" : "white",
    // fontSize: "30px",
    // height: "50px",
    background: background ? background : !noBackground && "green",
  };

  const fdoewrw = padvar && {
    padding: padvar + " 0",
  };

  const kasew = fullWidth && {
    width: "100%",
  };

  const baseStlas = {
    fontSize: fontSize,
    ...baseoSt,
    ...fdoewrw,
    ...sdfoer,
    ...kasew,
    ...style,
    ...extStyle,
    // padding: "500px",
    // fontSize: "50px",
  };

  // "";

  const dwesae =
    //
    // true;
    disableTrue;

  const cllosk =
    //
    "buttonHover shadowHover";
  //   gens.butClass;
  // gens.butClass + dwesae ? " disabled" : "";

  function asoke() {
    if (clickObj) {
      setclickTrue(!clickTrue);
    }

    if (onClick) {
      onClick();
    }
  }

  const sfasdokwe = {
    form: formid,
    ...arg,
    onClick: asoke,
    style: baseStlas,
    className: cllosk,
    isDisabled: dwesae,
    disabled: dwesae,
    // ...uahwe,
  };

  const asodkwe = clickTrue ? clickObj : obj;

  const qy7eww =
    //
    asodkwe;
  // asodkwe ? asodkwe : "Confirm";

  const aisjqw = (
    <>
      {/* qy7eww */}
      {qy7eww}
      {/* {njgyret} */}
    </>
  );

  // qy7eww ? qy7eww : <ImageTextDiv {...asduhqwe} />;

  // chakTrue = chakTrue ? chakTrue : sfasdokwe["isLoading"];

  function GroupBase({ rightobj, leftobj, leftConfig, rightConfig, ...qwe }) {
    const nidsfjer = {
      // size: "sm",
      // isAttached: true,
      // variant: "outline",
      ...qwe,
    };

    const nsidjew = {
      style: { fontSize: "1.0em" },
    };

    const rghtFunnp = {
      ...sfasdokwe,
      ...rightConfig,
    };

    const nsdijs =
      //
      "";
    // rightobj && (
    //   <Button {...rghtFunnp}>
    //     <div {...nsidjew}>{rightobj}</div>{" "}
    //   </Button>
    // );

    const isadjwe =
      //
      "";
    // (
    //   <ButtonGroup {...nidsfjer}>
    //     <Button {...sfasdokwe}>{aisjqw}</Button>
    //     {/* {nsdijs} */}
    //     {/* <Button mr="-px">Save</Button> */}
    //     {/* <IconButton icon={<TiEdit />} /> */}
    //   </ButtonGroup>
    // );

    return isadjwe;
  }

  const sfdsgwe = groupConfig ? (
    <GroupBase {...groupConfig} />
  ) : (
    <button {...sfasdokwe}>{aisjqw}</button>
  );

  const asdijew =
    //
    // "";
    linkvar || divConfig;

  const jawewe = {
    obj: sfdsgwe,
    linkvar: linkvar,
    ...divConfig,
  };

  logs.logga("___ jawewe ___", jawewe);

  const asdgvwe = asdijew ? <BearDiv {...jawewe} /> : sfdsgwe;

  const pdska = downloadLink ? (
    <a href={downloadLink} download>
      {asdgvwe}
    </a>
  ) : (
    asdgvwe
  );

  const dweasdd = {
    obj: pdska,
    ...genConfig,
  };

  // logtrue = true;
  // 1console
  // logs.logga("___ sfasdokwe ___", sfasdokwe);

  if (logtrue) {
    logs.logga(obj + "___CONIRM BUTTON " + aisjqw, sfasdokwe);
    logs.logga("___ BearButton  STYLE___", baseStlas);
    logs.logga("___ baseStlas ___", baseStlas);
  }

  const asdhwqe = <BearDiv {...dweasdd} />;

  return asdhwqe;
}
