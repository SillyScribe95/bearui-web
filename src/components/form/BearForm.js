import React, { useEffect, useState } from "react";
import { isEmpty, isObject } from "lodash";
import { useForm, Controller } from "react-hook-form";
import { BearDiv } from "../BearDiv";
import { BearList } from "../list/BearList";
import { BearButton } from "../button/BearButton";
import {
  //
  logs,
} from "../../index";
import {
  //
  BearUpper,
  argMiss,
  argPass,
  BearErrMiss,
  LoadMain,
} from "../GlobalComps";
import { BearError } from "../BearError";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearFormInputCheck } from "./BearFormInputCheck";
import { formValidPass } from "./formValidPass";
import { BearFormSetup } from "./BearFormSetup";
import { getFormPass } from "./getFormPass";
import { BearInputBase } from "../input/BearInputBase";
import { focusBase } from "../../functions/formFuncs";

export function BearForm({
  noButton,
  noText,
  listDict,
  loadConfig,
  bearName = "",
  textConfig,
  list,
  //
  inputConfig,
  //
  // 1button
  buttonConfig = {},
  buttonText = "Submit",
  buttonSize = "35px",
  betweenItem,
  //
  //
  // 1focus
  focusFirst,
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
  hookConfig,
  typeForm,
  //
  topButtonConfig,
  ImageTextList,
  topButtonTrue,
  autofocus,
  formid,
  // 1required
  requireAll,
  //
  // 1submit
  loadSubmit,
  onSubmit,
  submitExtra,
  topObj,
  //
  // style,
  marginBetween,
  //
  //
  ...args
}) {
  //
  // 1const
  const [loadSetto, setloadSetto] =
    //
    ["", ""];
  // useState();

  const asokew =
    //
    "";
  // formValidPass({ list, dictvar });

  const modeo =
    //
    // "onBlur"
    "onSubmit";
  // "onChange";

  const oksdaew = {
    // validationSchema: asokew,
    // resolver: asokew,
    //
    // reValidateMode: "onChange",
    mode: modeo,
    ...hookConfig,
  };

  const {
    //
    handleSubmit,
    register,
    errors,
    control,
    setFocus,
    // watch,
    ...asdw
  } =
    //
    useForm(oksdaew);

  const idjfe = {
    errors,
    control,
    register,
  };

  // 1focus
  function Faoksd() {
    if (focusFirst) {
      focusBase({
        list,
        onFocus: setFocus,
      });
    }
  }

  // 1useEffect
  useEffect(() => {
    Faoksd();
  });

  logs.logga("___ idjfe ___", { ...idjfe, asdw });
  logs.logga("___ bEARFORM userForm MAIN___", asdw);

  function goSing(doksad) {
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

    logs.logga("___ ijsdr ___", ijsdr);

    if (kjdsasd) {
      cxvbmf(values, funta);
    }
  }

  // 1submit
  function cxvbmf(values, funta) {
    //

    if (loadSubmit) {
      setloadSetto(true);
    }

    const emptiosa = !isEmpty(values);
    const trudsoe = onSubmit && emptiosa;

    const gifhjer = {
      loadSubmit,
      values,
      emptiosa,
      trudsoe,
    };

    logs.logga("___ FORMAMAIN SUBMIT ___", gifhjer);
    logs.logga("___ Fomain values ___", values);

    if (trudsoe) {
      let dsifer = singleTrue ? goSing(values) : mainFI(values);

      logs.logga("FORMA--MAIN Submit", dsifer);

      funta(dsifer);
      setloadSetto();
    }
  }

  function sease(e) {
    // e.preventDefault();
    // subbTo()

    logs.logga("___ e ___", e);
  }

  function onSubMain(fjdwe) {
    subbTo(fjdwe, onSubmit);
  }

  const kasewse =
    //
    handleSubmit(onSubMain);
  // handleSubmit(sease);
  // subbTo;
  // sease;

  const noSumibt =
    //
    !buttonList;

  const jsidwer = noSumibt && {
    onSubmit: kasewse,
  };

  const difjgr = {
    ...args,
    id: formid,
    ...jsidwer,
  };

  args = {
    ...args,
    bearName,
  };

  // 1button
  function Buttiona({ text, style, ...siwerew }) {
    //
    const aewsadw = {
      style: {
        margin: "20px 0",
      },
    };

    const jsadcvx = {
      // width: "100%",
      // padding: "60px",
      color: "white",
      background: "green",
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
      type: "submit",
      value: text,
      form: formid,
      style: jsadcvx,
      // genConfig: aewsadw,
      className: "buttonHover",
      // marginTop: ""
    };

    logs.logga("___ bForm BUTTON ___", dvbijkrw);

    const adhwdse = (
      <>
        {/* <BearButton {...dvbijkrw}>{buttonText}</BearButton> */}
        {/* <Button {...dvbijkrw}>{text}</Button> */}
        <button {...dvbijkrw}>{text ? text : buttonText}</button>
        {/* <input {...dvbijkrw} /> */}
      </>
    );

    return adhwdse;
  }

  function FormError(textvar) {
    const dfbokerr = BearError(textvar);

    return dfbokerr;
  }

  function sdfok(obj) {
    const inDict = dictvar && dictvar[obj];

    const nissase = requireAll && {
      required: true,
    };

    const bfdg = {
      ...nissase,
      ...inputConfig,
    };

    const baseObj = {
      dictvar,
      inputItem: obj,
      name: obj,
      ...idjfe,
      ...bfdg,
      ...inDict,
      ...argMiss(args),
    };

    logs.logga("___ baseObj ___", baseObj);

    const fdjgre = baseObj.obj;
    const obvdsaf = fdjgre
      ? fdjgre
      : isEmpty(baseObj)
      ? FormError("no form Dictionary supplied - " + obj)
      : BearFormList(baseObj);

    logs.logga("___ FORMAMIN - FIRST RUN OBJECT___", {
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
  const listaros = topButtonTrue ? [atbosa] : list;

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
      logs.logga("___BFORM BTTON CLICK VALS ___", adfad);

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
  const buttio =
    //
    //
    !noButton && buttonList ? ajde() : Buttiona(buttonConfig);

  function vijsd9({ name, ...adaw }) {
    let as = name;

    logs.logga("___ formMian TAB ONCLICK  ___", as);
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
      logs.logga("___ zcvdf ___", zcvdf);

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

    logs.logga("___formain TABS TOP ___", asodwe);

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
      {topObj}
      {mappit}
      {betweenItem}
      {buttio}
    </>
  );

  const ijdfsr =
    //
    difjgr;
  // argPass

  // 1console
  let dskf = `${typeForm} ${bearName} ___ BearForm args ___`;
  logs.logga(dskf, {
    ...ijdfsr,
    list,
    listaros,
  });

  const xcvsfs = loadSetto ? (
    <LoadMain {...loadConfig} />
  ) : noForm ? (
    aidjwe
  ) : (
    <>
      <form {...ijdfsr}>
        {aidjwe}
        {/* <button type="submit">asidje</button> */}
      </form>
    </>
  );

  const nsdokfer = argPass(args);
  const isae = <div {...nsdokfer}>{xcvsfs}</div>;

  const isjdwesdfoek =
    //   //
    !formid
      ? BearErrMiss("formid", bearName, "BearForm")
      : BearCheckMain("BearForm", isae, args);
  // // aweuw;
  // BearCheckMain("BearForm", <BearForm {...dfjgrt} />, args);
  // // <div {...genConfig}>{aweuw}</div>;

  return isjdwesdfoek;
}

export function BearFormList({ inputList, horizList, ...jdfsd }) {
  //

  const sijewer = inputList || horizList;
  //
  function sdjfwer() {
    function cvlbk({ label, ...dfewer }) {
      const isdjfre = !label && {
        noLabel: true,
      };
      const dfjsds = {
        ...jdfsd,
        ...isdjfre,
        ...dfewer,
        label,
      };

      logs.logga("___ dfjsds ___", dfjsds);

      return firstInputCheck(dfjsds);
    }

    const jdfwea =
      //
      // "oksdfer";
      sijewer.map(cvlbk);

    const fbjdfg = horizList && {
      flex: true,
      vertAlign: true,
    };

    const ijdfges = (
      <>
        {/* <BearList {...dijfgtr} /> */}
        {/* <Flex> */}
        {/* <BearFloat {...args} /> */}
        <BearDiv {...fbjdfg}>{jdfwea}</BearDiv>
        {/* </Flex> */}
      </>
    );

    return BearInputBase(ijdfges, jdfsd);
  }

  const ijfgase = sijewer ? sdjfwer() : firstInputCheck(jdfsd);

  return ijfgase;
}

export function firstInputCheck({ addTrue, noName, inputItem, ...baseObj }) {
  //
  const nameeo = baseObj.name;

  logs.loggu(nameeo, "___BeaForm firstInputCheck ___", {
    baseObj: baseObj,
    NAME: nameeo,
  });

  const ijsre = noName
    ? {
        //
        // noLabel: true,
      }
    : {
        name: inputItem,
        // inputItem
      };

  const isjdfe = {
    ...baseObj,
    ...ijsre,
  };

  // 1name
  const okwaew =
    //
    // "oskdfwerw"
    noName
      ? BearFormSetup(isjdfe)
      : nameeo
      ? BearFormSetup(isjdfe)
      : BearErrMiss("name", baseObj.bearName + "'s input elementk");

  return okwaew;
}
