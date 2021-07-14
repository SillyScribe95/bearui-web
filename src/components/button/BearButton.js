import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../../components/BearDiv";
import {
  //
  logs,
} from "../../index"

export function BearButton({
  textConfig,
  genConfig,
  disabled,
  errorTrue,
  background,
  color,
  noBackground,
  style,
  obj,
  children,
  className,
  fontSize,
  longTrue,
  downloadLink,
  fullWidth,
  padvar,
  extStyle,
  bearName,
  buttonType,
  //
  // 1loading
  // isLoading,
  loading,
  loadClick,
  //
  //
  groupConfig,
  link,
  logtrue,
  //
  // 1onclick
  clickObj,
  onClick,
  //
  // background,
  divConfig,
  onlyText,
  typevar,
  ...arg
}) {
  // const asndiw = {
  //   order: {
  //     link: "/order",
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
  const [clickTrue, setclickTrue, loadRend, setloadRend] = ["", "", "", ""];
  // const [clickTrue, setclickTrue] = useState();
  // const [loadRend, setloadRend] = useState();

  const sdfoer = errorTrue && {
    background: "red",
    color: "white",
  };

  const longeos = longTrue && {
    width: "200px",
  };

  const ijdase = {
    color: "white",
    background: "darkgreen",
    color,
    background,
  };

  const baseoSt = {
    padding: "2px 10px",

    ...longeos,
    // fontSize: "30px",
    // height: "50px",
  };

  const fdoewrw = padvar && {
    padding: padvar + " 0",
  };

  const kasew = fullWidth && {
    width: "100%",
  };

// 1style
  const baseStlas = {
    cursor: "pointer",
    fontSize,
    borderRadius: "5px",
    ...baseoSt,
    ...fdoewrw,
    ...sdfoer,
    ...ijdase,
    ...kasew,
    ...style,
    ...extStyle,
    // padding: "500px",
    // fontSize: "50px",
  };

  // "";

  // 1disable
  const dwesae =
    //
    // true;
    disabled;

  // 1classname
  const cllosk =
    //
    "buttonBase " + className;
  // "buttonHover shadowHover";
  //   gens.butClass;
  // gens.butClass + dwesae ? " disabled" : "";

  // 1onclick
  function asoke() {
    logs.logga("___ bButton ONCLICK ___", {
      loadClick: loadClick,
      onClick: onClick,
    });

    if (clickObj) {
      setclickTrue(!clickTrue);
    }

    if (loadClick) {
      setloadRend(true);
    }

    if (onClick) {
      onClick();
    }
  }

  const locvbfdr = loading || loadRend;

  // 1obj
  const asodkwe = locvbfdr
    ? "Loading..."
    : clickTrue
    ? clickObj
    : obj || children;

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

  // const xcvfdc = {
  //   borderRadius:
  //   ...style
  // }

  const sfasdokwe = {
    form: bearName,
    ...arg,
    onClick: asoke,
    style: baseStlas,
    className: cllosk,
    isDisabled: dwesae,
    disabled: dwesae,
    // ...uahwe,
  };

  // 1console
  logs.logga("___ sfasdokwe ___", sfasdokwe);

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
    // <button {...sfasdokwe}>{aisjqw}</button>
  );

  const asdijew =
    //
    // "";
    link || divConfig;

  const jawewe = {
    ...arg,
    obj: sfdsgwe,
    link,
    ...divConfig,
  };

  logs.logga("___ jawewe ___", jawewe);

  const asdgvwe =
    //
    BearDiv(jawewe);
  // sfdsgwe;
  // asdijew ? BearDiv(jawewe) : sfdsgwe;

  const pdska = downloadLink ? (
    <a href={downloadLink} download>
      {asdgvwe}
    </a>
  ) : (
    asdgvwe
  );

  return pdska;
}
