import React, { useState } from "react";
import //
//   BearDiv,
//   BearList,
//   logs,
"bearui-web";
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

export default function BearForm({
  noButton,
  noText,
  listDict,
  buttonText,
  subtitleConfig,
  textConfig,
  overObj,
  listvar,
  buttonSize = "35px",
  inputConfig,
  buttonConfig,
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
  typevar,
  sameLine,
  topButtonConfig,
  ImageTextList,
  topButtonTrue,
  // 1submit
  //
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
  //
  ...args
}) {
  //
  //

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
    // reValidateMode: "onChange",
    mode: "onSubmit",
    reValidateMode: "onChange",
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
      typevar: typevar,
      ...values,
      ...asaoke,
    };

    return values;
  }

  // 1submit
  function subbTo(values) {
    //
    const emptiosa = !isEmpty(values);
    const trudsoe = emptiosa && onSubmit;

    const gifhjer = {
      values: values,
      emptiosa: emptiosa,
    };

    logs.logga("___ FORMAMAIN AAAA ___", gifhjer);

    if (trudsoe) {
      let dsifer = singleTrue ? goSing(values) : mainFI(values);

      logs.logga("FORMA--MAIN Submit", dsifer);

      onSubmit(dsifer);
    }
  }

  logs.logga("argwwwwws-zzzzzz", args, "asdy89io211");
  logs.logga("___ args AAAAAA ___", args);

  args = {
    ...args,
    id: formid,
    onSubmit: subbTo,
    // onSubmit: handleSubmit(subbTo),
  };

  function Buttiona({ ...siwerew }) {
    //

    const aewsadw = {
      style: {
        margin: "20px",
      },
    };
    //
    const jsadcvx = {
      // width: "100%",
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
      //   <button {...dvbijkrw}>sdfjwerw</button>
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

  // 1FUNCTION
  function asdiwe(obj, baseObj) {
    // 1name
    const nameeo =
      //
      // obj
      baseObj["name"];
    const existo = overObj && overObj[nameeo];

    const regDict = baseObj["regDict"];
    const pattBase = getFormDict(obj);
    const asokwe = {
      ...pattBase,
      ...regDict,
    };

    const ijawe = existo ? existo : baseObj["textvar"];

    function sdifnew(asdf) {
      logs.logga("___ asdf ___", asdf);
    }

    const gihrw = topButtonTrue && {
      noTitle: true,
    };

    const hookArgs = {
      //   control: control,
      //   errors: errors,
      //   ref: register(asokwe),
    };

    const odkasew = {
      // ...asdwe,
      //   ...hookArgs,
      sameLine: sameLine,
      overObj: overObj,
      ...baseObj,
      ...inputConfig,
      ...asokwe,
      ...gihrw,
      onChange: sdifnew,
      textvar: ijawe,
    };

    const asodkwe = {
      baseObj: baseObj,
      existo: existo,
      ijawe: ijawe,
    };

    const fhgsdf =
      //
      nameeo == "topic";
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
    // const horzTrue = obj?.horizTrue
    const inDict = dictvar && dictvar[obj];
    const baseObj = inDict ? inDict : obj;
    const fdjgre = baseObj?.obj;
    const obvdsaf = fdjgre ? fdjgre : baseObj ? asdiwe(obj, baseObj) : "";

    logs.logga("___ FORMAMIN - FIRST RUN OBJECT___", {
      INITIAL: obj,
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
      horizTrue: true,
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
  let dskf = `${typevar} ${formid} ___ formMain args ___`;
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

  const isae = (
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
    // required: true,
    // pattern: emailPatto,
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
