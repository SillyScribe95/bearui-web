import React, { useEffect, useState } from "react";
import { BearDiv } from "../BearDiv";
import { BearList } from "../list/BearList";
import { BearButton } from "../button/BearButton";
import {
  //
  bearlog,
} from "../../index";
import { argMiss, argPass, LoadMain, styClass } from "../GlobalComps";
import { BearError } from "../BearError";
import { BearCheckMain } from "../check/BearCheckMain";
import { formValidPass } from "./formValidPass";
import { BearFormSetup } from "./BearFormSetup";
import { BearInputBase } from "../input/BearInputBase";
import { BearFormList, focusBase } from "../../functions/formFuncs";
import BearFormHooks from "./BearFormHooks";
import { removeEmptyArray } from "../../functions/arrayFuncs";
import { getDictvalues, mergeDict } from "../../functions/dictFuncs";
import { BearBackBorder } from "../ExportComps";
import { BearErrMiss } from "../ErrorComps";
import { isEmpty } from "../../functions/globalFuncs";
import { BearCheckList } from "../check/BearCheckList";

export function BearForm({
  noText,
  listDict,
  name,
  topItem,
  loadConfig,
  bearName = "",
  textConfig,
  list,
  //
  inputStyle,
  inputConfig,
  //
  // 1button
  renderButton,
  noButton,
  noButtonEnd,
  onCancel,
  buttonConfig = {},
  buttonText = "Submit",
  buttonSize = "35px",
  betweenItem,
  //
  //
  //
  //
  buttonList,
  toplist,
  noForm,
  dictvar,
  headerObj,
  singleTrue,
  headerConfig,
  logtrue,
  tabConfig,
  schema,
  typeForm,
  //
  topButtonConfig,
  ImageTextList,
  topButtonTrue,
  autofocus,
  id,
  // 1required
  requireAll,
  //
  // 1submit
  disableSubmit,
  preSubmit,
  submitDisplay,
  formData,
  extractValues,
  //
  // 1error
  errorButton,
  errorButtonConfig={},
  // 
  // 1modal
  confirmModal,
  //
  // 1value
  loadSubmit,
  onSubmit,
  submitExtra,
  //
  //
  hiddenItem,
  topFormItem,
  bottomFormItem,
  buttonItem,
  //
  style,
  marginBetween,
  //
  //
  //
  //
  ...args
}) {
  id = id ? id : bearName;
  //
  // 1const
  const [loadVars, setloadVars] = useState();
  const [loadSetto, setloadSetto] = useState();
  const [modalConf, setmodalConf] = useState();

  const asokew =
    //
    "";
  // formValidPass({ list, dictvar });

  function goSing({
    //
    itemName,
    bearName,
    ...doksad
  }) {
    let sdifje = Object.values(doksad)[0];

    return sdifje;
  }

  function mainFI(values) {
    let asaoke = submitExtra && submitExtra();

    values = {
      typeForm,
      bearName,
      ...values,
      ...asaoke,
    };

    return values;
  }

  function subbTo({ _reactName, listIndex, ...values }, funta) {
    const kjdsasd =
      //
      // funta
      !_reactName && !listIndex && funta;

    const ijsdr = {
      _reactName,
      listIndex,
    };

    bearlog.lug("___ ijsdr ___", ijsdr);

    if (kjdsasd) {
      cxvbmf(values, funta);
    }
  }

  // 1error 

function ErrBaseo(aaa){
  const {style}= aaa
  const sfqw = {
    obj: errorButton,
    ...aaa,
    style: styClass(style, {
      // height: "50px",
      color: "red", fontWeight: "bold"})
  }

  return <div {...sfqw}>
  {errorButton}
  </div>
}

  // 1modal 1presubmit
  async function cxvbmf(...asd) {
    bearlog.lug("preSubmit-zzz", { preSubmit, asd });
    if (preSubmit) {
      const asokwe = await preSubmit(...asd);
      if (asokwe) {
        confirmOs(...asd);
      }
    } else {
      confirmOs(...asd);
    }
  }

  // 1submit MODAL
  function confirmOs(values, funta) {
    bearlog.lug("___ values ___", values);

    if (confirmModal) {
      switch (typeof confirmModal) {
        case "string":
          confirmModal = confirmModal;
          break;
        case "object":
          confirmModal = confirmModal(values);
          break;
        default:
          confirmModal = "Are you sure?";
      }

      if (window.confirm(confirmModal)) {
        sdaseas(values, funta);
      } else if (onCancel) {
        onCancel(values);
      }
    } else {
      sdaseas(values, funta);
    }
  }

  // 1submit BASIC
  function sdaseas(values, funta) {
    //

  if (loadSubmit){
    setloadVars(true);
  }
    // setloadSetto(true);

    const emptiosa = !isEmpty(values);
    const trudsoe = onSubmit && emptiosa;

    bearlog.lug("___ FORMAMAIN SUBMIT ___", {
      loadSubmit,
      loadSetto,
      values,
      emptiosa,
      trudsoe,
    });
    bearlog.lug("___ Fomain values ___", values);

    if (trudsoe) {
      let dsifer = singleTrue ? goSing(values) : mainFI(values);
      dsifer = extPrep(dsifer);

      funta(dsifer);
      setloadSetto();
    }
  }

  function extPrep(values) {
    bearlog.lug("values-sbmit--AAAA", { values, formData });
    values = mergeDict(values, formData);
    values = extractValues
      ? { data: values, values: getDictvalues(values) }
      : values;
    bearlog.lug("values-sbmit--BBBBB", values);

    return values;
  }

  function sease(e) {
    // e.preventDefault();
    // subbTo()

    bearlog.lug("___ e ___", e);
  }

  function onSubMain(fjdwe) {
    subbTo(fjdwe, onSubmit);
  }

  // 1args
  args = {
    ...args,
    list,
    dictvar,
    formData,
    bearName,
  };

  const sdnfer = {
    onSubmit: onSubMain,
    ...args,
  };


  const sdjifwer = BearFormHooks(sdnfer);

  bearlog.lug("sdnfer---", sdnfer);
  bearlog.lug("sdjifwer---", sdjifwer);

  // 1args FORM
  const difjgr = {
    ...args,
    ...sdjifwer,
    id,
    name,
  };

  // 1args DIV
  const nsdokfer = {
    style: {
      textAlign: "center",
      ...style,
    },
    ...argPass(args),
  };

  bearlog.lug("___ nsdokfer ___", nsdokfer);

  // 1button
  function Buttiona({
    disabledConfig,
    disabled,
    loadingText = "Loading...",
    text,
    style,
    onClick,
    ...siwerew
  }) {
    disabled = disableSubmit || disabled;
    //
    const aewsadw = {
      style: {
        margin: "20px 0",
      },
    };

    const ijda = disabled
      ? {
          // style: { color: "greyscale" },
          className: "disabled",
          ...disabledConfig,
        }
      : {
          onClick,
          className: "buttonHover",
        };

    const jsadcvx = {
      // width: "100%",
      // padding: "60px",
      ...BearBackBorder("green", "5px"),
      color: "white",
      // background: "green",
      padding: "5px 10px",
      fontSize: buttonSize,
      // marginBottom: "20px",
      ...style,
    };

    const fghtr = {
      loadClick: true,
      loading: true,
    };

    const nsdijfer = {
      name: "submitButton",
      text: buttonText,
    };

    const ksfs = {
      longTrue: true,
    };

    const dvbijkrw = {
      // ...fghtr,
      ...nsdijfer,
      ...siwerew,
      type: !disabled && "submit",
      value: text,
      form: id,
      style: jsadcvx,
      // genConfig: aewsadw,
      ...ijda,
      // marginTop: ""
    };

    const sdijfwr =
      //
      loadVars ? loadingText : text ? text : buttonText;

    bearlog.lug("___ bForm BUTTON ___", dvbijkrw);

    const adhwdse = renderButton ? (
      renderButton(dvbijkrw)
    ) : (
      <button {...dvbijkrw}>
        {/*  */}
        {sdijfwr}
      </button>
    );

    return adhwdse;
  }

  function FormError(textvar) {
    const dfbokerr = BearError(textvar);

    return dfbokerr;
  }

  function sdfok(sdfi) {
    let sweas;
    switch (sdfi) {
      case "errorButton":
        sweas = ErrBaseo(errorButtonConfig) 
        break;
      case "formButton":
        sweas = bettios();
        break;
      default:
        sweas = xcvbofd(sdfi);
    }
    return sweas;
  }
  function xcvbofd(obj) {
    const inDict = dictvar && dictvar[obj];

    const nissase = requireAll && {
      required: true,
    };

    const bfdg = {
      ...nissase,
      ...inputConfig,
      style: {
        ...(inputConfig && inputConfig.style),
        ...inputStyle,
      },
    };

    const baseObj = {
      dictvar,
      // passwordConfig,
      inputItem: obj,
      name: obj,
      ...sdjifwer,
      ...bfdg,
      ...inDict,
      ...argMiss(args),
    };

    bearlog.lug("___ bsohbjo ___", baseObj);

    const fdjgre = baseObj.obj;
    const obvdsaf = fdjgre
      ? fdjgre
      : isEmpty(baseObj)
      ? FormError("no form Dictionary supplied - " + obj)
      : BearFormList(baseObj);

    bearlog.lug("___ FORMAMIN - FIRST RUN OBJECT___", {
      dictvar,
      INITIAL: obj,
      baseObj,
      FINAL: obvdsaf,
    });

    const sdijfr =
      //
      obvdsaf;
    // "sdofkwerw";

    return sdijfr;
  }

  //   const [currTab, setcurrTab] = useState(initBase);
  const currTab = "";
  const currForm = currTab;
  const initBase = topButtonTrue && list[0];
  const listRend = listDict && listDict[currForm];
  const atbosa = listRend ? listRend : currForm;

  // 1items  1list
  const xcvbo = topButtonTrue
    ? [atbosa]
    : [
        //
        ...list,
        !noButtonEnd && "formButton",
        "errorButton",
      ];
  const listaros = removeEmptyArray(xcvbo);

  const ijawesdafr = {
    dictvar: dictvar,
    list: list,
  };

  // function sasee(){

  //   const jsid = onSaveDraft &&

  // }

  function sdijfwer({ onClick, ...sdf }) {
    function xcvase(adfad) {
      //
      bearlog.lug("___BFORM BTTON CLICK VALS ___", adfad);

      subbTo(adfad, onClick);
    }

    // const ijfde =

    const jidsfjd = {
      ...buttonConfig,
      ...sdf,
      onClick: onClick && handleSubmit(xcvase),
    };

    // return "asokdewe";
    return Buttiona(jidsfjd);
  }

  function ajde() {
    const mainSb = {
      // onClick: kasewse,
      name: "submitButton",
      text: buttonText,
      //
    };

    const jsdre =
      //
      buttonList;
    // buttonList ? buttonList : [mainSb];

    const jnsdf =
      //
      bearName + "_BearForm_Buttons";

    const xcvnsdf = {
      bearName: jnsdf,
      list: jsdre,
      horiz: true,
      renderItem: sdijfwer,
    };

    // function

    const ijsdrwe = BearList(xcvnsdf);

    return ijsdrwe;
  }

  // 1button
  function bettios() {
    return noButton ? "" : buttonList ? ajde() : Buttiona(buttonConfig);
  }

  function vijsd9({ name, ...adaw }) {
    let as = name;

    bearlog.lug("___ formMian TAB ONCLICK  ___", as);
    // setcurrTab(as);
  }

  function iasjdwe(obj) {
    // const chsersd = checkTick()

    const kadwesd = (
      <>
        {/*  */}
        {/* spwleqweqw */}
        {obj["tabTitle"]}
      </>
    );

    return kadwesd;
  }

  function Tabios() {
    const bdoewr =
      //
      "greyHover pointer";

    const okae = {
      margin: "10px",
      borderRadius: "20px",
    };

    const oksae = {
      chosenConfig: {
        bediaTrue: true,
      },
      itemConfig: {
        style: okae,
        className: bdoewr,
      },
    };

    function aidsjfew({ title, iconvar, style, ...zcvdf }) {
      bearlog.lug("___ zcvdf ___", zcvdf);

      const okawe = {
        style: { fontSize: "1.5em" },
        obj: iconvar,
      };

      const lpsda = (
        <>
          <BearDiv {...okawe} />
          {title}
        </>
      );

      style["textAlign"] = "center";

      const oaewc = {
        style: style,
        ...zcvdf,
        obj: lpsda,
      };

      return lpsda;
      //   return <BearDiv {...oaewc} />;
      // return "oskdasd";
    }

    style = { textAlign: "center", ...style };

    const asodwe = {
      onClick: vijsd9,
      singleClick: true,
      horiz: true,
      chosenItem: currTab,
      // titleAttr: "tabTitle",
      titleFunc: iasjdwe,
      ...oksae,
      ...ijawesdafr,
      ...tabConfig,
      obj: aidsjfew,
      // obj: (adqq) => "aspdle",
    };

    bearlog.lug("___formain TABS TOP ___", asodwe);

    const okfdsd = (
      <>
        <BearList {...asodwe} />
        {/* <ImageTextList {...asodwe} /> */}
        {/* <TabMain {...asodwe} /> */}
      </>
    );

    return okfdsd;
  }

  // 1map
  function maperlis(sdfew) {
    return sdfew.map(sdfok);
  }

  const kaewsae = maperlis(listaros);
  const sudhawe = topButtonTrue ? (
    <>
      <Tabios />
      {kaewsae}
    </>
  ) : (
    kaewsae
  );

  const kbmfsd = <>{sudhawe}</>;

  const iterwr = toplist;
  const mappit = iterwr ? (
    <>
      {maperlis(toplist)}
      <br />
      {sudhawe}
    </>
  ) : (
    <>
      {/*  */}
      {sudhawe}
    </>
  );

  const aidjwe = (
    <>
      {hiddenItem}
      {topFormItem}
      {topItem}
      {mappit}
      {betweenItem}
      {buttonItem}
      {bottomFormItem}
      {/* {bettios()} */}
    </>
  );

  const ijdfsr =
    //
    difjgr;
  // argPass

  // 1console
  let dskf = `${typeForm} ${bearName} ___ BearForm args ___`;
  bearlog.lug(dskf, {
    ...ijdfsr,
    list,
    listaros,
  });
  bearlog.lug("bform ALL HOOKS", sdjifwer);

  // 1form
  const xcvsfs = loadSetto ? (
    <LoadMain {...loadConfig} />
  ) : noForm ? (
    aidjwe
  ) : (
    <>
      <form {...ijdfsr}>{aidjwe}</form>
    </>
  );

  bearlog.lug("___ nsdokfer ___", nsdokfer);

  const isae = <div {...nsdokfer}>{xcvsfs}</div>;

  const isjdwesdfoek =
    //   //
    !id
      ? BearErrMiss("bearName", bearName, "BearForm")
      : BearCheckMain("BearForm", isae, args);
  let sdofkwe = { noContain: true, ...args };

  bearlog.lug("___ sdofkwe ___", sdofkwe);

  let sdawe =
    //
    isjdwesdfoek;
  // BearCheckList("BearForm", isjdwesdfoek, sdofkwe);

  return sdawe;
}
