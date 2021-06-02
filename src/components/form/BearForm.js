import React, { useState } from "react";
import * as yup from "yup";
import { isEmpty } from "lodash";
import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

//
import { BearInput } from "../form/BearInput";
import { BearDiv } from "../BearDiv";
import { BearList } from "../list/BearList";
import { BearButton } from "../button/BearButton";
import * as logs from "../../functions/logFuncs";
import { LoadMain } from "../GlobalComps";

export function BearForm({
  noButton,
  noText,
  listDict,
  loadConfig,
  subtitleConfig,
  textConfig,
  overObj,
  listvar,
  buttonSize = "35px",
  inputConfig,
  //
  // 1button
  buttonConfig,
  buttonText = "Submit",
  //
  //
  toplist,
  noForm,
  dictvar,
  formid,
  headerObj,
  singleTrue,
  headerConfig,
  logtrue,
  tabConfig,
  schemavar,
  hookConfig,
  typeForm,
  sameLine,
  topButtonConfig,
  ImageTextList,
  topButtonTrue,
  //
  // 1submit
  loadSubmit,
  onSubmit,
  submitExtra,
  topObj,
  //
  // style
  marginBetween,
  //
  // title
  titlevar,
  titleConfig,
  changeGlobal,
  //
  ...args
}) {
  //
  //

  // 1const
  const [loadSetto, setloadSetto] = useState();

  let nameMessError =
    //
    "";
  // "Please add your name."

  schemavar = {
    name: yup
      .string()
      //
      // .match("")
      .required(nameMessError),
    email: yup
      .string()
      .email("This is not a valid email.")
      .required("Please add your email."),
    // age: yup.number().required(),
    ...schemavar,
  };

  const finsaShc =
    //
    // schemavar
    {};

  function asifjew(asdofj) {
    finsaShc[asdofj] = schemavar[asdofj];
  }

  listvar.map(asifjew);

  const schemabas = yup.object().shape(finsaShc);

  logs.logga("___ finsaShc ___", finsaShc);
  logs.logga("___ schemabas ___", schemabas);

  const oksdaew = {
    // validationSchema: schemaYup
    // mode: "onBlur",
    mode: "onSubmit",
    // reValidateMode: "onChange",
    // resolver: yupResolver(schemabas),
    ...hookConfig,
  };

  const { handleSubmit, register, errors, control, watch, ...asdwe } =
    //
    // "";
    useForm(oksdaew);

  function goSing(doksad) {
    let sdifje = Object.values(doksad)[0];

    return sdifje;
  }

  function mainFI(values) {
    let asaoke = submitExtra && submitExtra();

    values = {
      typeForm: typeForm,
      ...values,
      ...asaoke,
    };

    return values;
  }

  function parsVal(values) {
    let dsifer = singleTrue ? goSing(values) : mainFI(values);

    logs.logga("FORMA--MAIN Submit", dsifer);

    onSubmit(dsifer);
  }

  // 1submit
  function subbTo(values) {
    //
    if (loadSubmit) {
      setloadSetto(true);
    }

    const emptiosa = !isEmpty(values);
    const trudsoe = onSubmit && emptiosa;

    const gifhjer = {
      values: values,
      emptiosa: emptiosa,
      trudsoe: trudsoe,
    };

    // 1submit
    logs.logga("___ FORMAMAIN SUBMIT ___", gifhjer);
    logs.logga("___ Fomain values ___", values);

    onSubmit(values);
    setloadSetto();

    // parsVal(values);

    //
    // if (trudsoe) {
    //   onSubmit(values);
    //   parsVal(values);
    // }
    //
  }

  function sease(e) {
    e.preventDefault();
    // subbTo()

    logs.logga("___ e ___", e);
  }

  logs.logga("argwwwwws-zzzzzz", args, "asdy89io211");
  logs.logga("___ args AAAAAA ___", args);

  const kasewse =
    //
    handleSubmit(subbTo);
  // subbTo
  // sease;

  args = {
    ...args,
    id: formid,
    onSubmit: kasewse,
  };

  // 1button
  function Buttiona({ ...siwerew }) {
    //

    const aewsadw = {
      style: {
        margin: "20px 0",
      },
    };
    //
    const jsadcvx = {
      // width: "100%",
      // padding: "60px",
      fontSize: buttonSize,
    };

    //
    const dvbijkrw = {
      type: "submit",
      textAlign: "center",
      form: formid,
      // color: "black",
      // height: "60px",
      // padding: "10px 20px",
      style: jsadcvx,
      genConfig: aewsadw,
      obj: buttonText,
      longTrue: true,
      ...siwerew,
      // marginTop: ""
    };

    logs.logga("___ dvbijkrw ___", dvbijkrw);

    const adhwdse = (
      //
      <BearButton {...dvbijkrw} />
      // <button {...dvbijkrw}>sdfjwerw</button>
    );

    const asidja = {
      obj: adhwdse,
      style: {
        marginBottom: "20px",
        textAlign: "center",
      },
    };

    return <BearDiv {...asidja} />;
  }

  const uasdw = {
    required: "Required",
    //   pattern: {
    //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //     message: "invalid email address",
    //   },
  };

  const objbase = {
    // ref: register(uasdw),
    // errorobj: asw,
    name: "name",
    // textvar: textvar,
    // ...args,
    // ...inputConfig,
    // ...obj,
  };

  function FormError(textvar) {
    const okaease = {
      obj: textvar,
    };

    const dfbokerr = <BearDiv {...okaease} />;

    return dfbokerr;
  }

  function firstInputCheck(baseObj) {
    //
    const nameeo = baseObj.name;

    logs.logga(nameeo, "___BeaForm firstInputCheck ___", {
      baseObj: baseObj,
      NAME: nameeo,
    });

    // 1name
    const okwaew = nameeo
      ? secondCheck(baseObj)
      : FormError("No Form Name Supplied");

    return okwaew;
  }

  // 1FUNCTION
  function secondCheck({ ...baseObj }) {
    logs.logga("___ REGISTER BASE  ___", baseObj);

    const nameeo = baseObj["name"];
    const titlCheck = topButtonTrue && {
      noTitle: true,
    };

    function getRef({ name, titlevar, iconvar, ...asdsa }) {
      //
      const reffo =
        //
        // register("name");
        register(name, asdsa);

      return reffo;
    }

    const okasew = getRef(baseObj);
    const hookArgs = {
      control: control,
      errors: errors,
      ref: okasew,
      ...okasew,
    };

    const existo = overObj && overObj[nameeo];
    const ijawe = existo ? existo : baseObj["textvar"];

    const odkasew = {
      //   ...asdwe,
      ...hookArgs,
      sameLine: sameLine,
      overObj: overObj,
      changeGlobal: changeGlobal,
      ...baseObj,
      ...inputConfig,
      ...titlCheck,
      textvar: ijawe,
    };

    const fhgsdf =
      //
      nameeo == "name";
    // logtrue;
    // true;

    if (fhgsdf) {
      // logs.logga("___ regDict ___", regDict);
      logs.logga(nameeo + "___ baseObj ___", baseObj);
      logs.logga(nameeo + "___ baseObj ___", baseObj);
      logs.logga(nameeo + "___ InputBase TEXT ___", odkasew);
      //logs.logga(obj + "___ InputBase ___", odkasew);
    }

    // 1inputbase
    const oiaswe = BearInput(odkasew);

    return oiaswe;
  }

  function sdfok(obj) {
    const inDict = dictvar && dictvar[obj];
    const baseObj = {
      ...getFormDict(obj),
      ...inDict,
    };

    const fdjgre = baseObj.obj;
    const obvdsaf = fdjgre
      ? fdjgre
      : isEmpty(baseObj)
      ? FormError("no form Dictionary supplied - " + obj)
      : firstInputCheck(baseObj);

    logs.logga("___ FORMAMIN - FIRST RUN OBJECT___", {
      INITIAL: obj,
      baseObj: baseObj,
      FINAL: obvdsaf,
    });

    return obvdsaf;
  }

  //   const [currTab, setcurrTab] = useState(initBase);
  const currTab = "";
  const currForm = currTab;
  const initBase = topButtonTrue && listvar[0];
  const listRend = listDict && listDict[currForm];
  const atbosa = listRend ? listRend : currForm;
  const listaros = topButtonTrue ? [atbosa] : listvar;

  const ijawesdafr = {
    dictvar: dictvar,
    listvar: listvar,
  };

  const buttio = !noButton && <Buttiona {...buttonConfig} />;

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

    function aidsjfew({ titlevar, iconvar, style, ...zcvdf }) {
      logs.logga("___ zcvdf ___", zcvdf);

      const okawe = {
        style: { fontSize: "1.5em" },
        obj: iconvar,
      };

      const lpsda = (
        <>
          <BearDiv {...okawe} />
          {titlevar}
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
    <>{sudhawe}</>
  );

  const aidjwe = (
    <>
      {topObj}
      {mappit}
      {buttio}
    </>
  );

  const duhiew = {
    ...args,
    listvar: listvar,
    listaros: listaros,
  };

  // 1console
  let dskf = `${typeForm} ${formid} ___ BearForm args ___`;
  logs.logga(dskf, duhiew);

  const aweuw = noForm ? (
    aidjwe
  ) : formid ? (
    <form {...args}>{aidjwe}</form>
  ) : (
    "NO FORM ID SPECIFIED"
  );

  function Titren({ style, ...sdfok }) {
    const kjase = {
      style: {
        textAlign: "left",
        fontSize: "1.3em",
        marginBottom: "30px",
        ...style,
      },
      obj: titlevar,
      ...sdfok,
    };

    // const sdfijre =

    const noisae = <BearDiv {...kjase} />;

    return noisae;
  }

  const askew = titlevar && <Titren {...titleConfig} />;

  const vbokre = {
    //
  };

  const isae = loadSetto ? (
    <LoadMain {...loadConfig} />
  ) : (
    <div {...vbokre}>
      {askew}
      {aweuw}
    </div>
  );

  const isjdwesdfoek =
    //
    isae;
  // aweuw;
  // <div {...genConfig}>{aweuw}</div>;

  return isjdwesdfoek;
}

function getFormDict(objsoa) {
  const vbijdf9te =
    //
    "Email";
  // ("Email address");
  // "What's your email address?";
  // "Where should we send the transcript to?";

  // // "/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
  const emailPatto = {
    //   // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //   message: "invalid email address",
  };

  const emalBaso = {
    required: true,
    // pattern: emailPatto,
    titlevar: "Email address",
    titlevar: vbijdf9te,
    iconvar: "email",
    // iconvar: "email",
  };

  const nasmwoBL = {
    required: true,
    // pattern: emailPatto,
    name: "name",
    titlevar: "Name",
    // titlevar: vbijdf9te,
    iconvar: "",
    // iconvar: "email",
  };

  const diewrsm = {
    required: true,
    name: "password",
    titlevar: "Password",
    type: "password",
  };

  //  1tags
  const tgsoer = {
    name: "tags",
    titlevar: "Tags",
  };

  const nvcbxf = {
    email: emalBaso,
    name: nasmwoBL,
    password: diewrsm,
    tags: tgsoer,
    // firstname:
    // lastname:
  };

  const ocvbds = nvcbxf[objsoa];

  return ocvbds;
}
