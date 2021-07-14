import React, {
  //
  useState,
  useContext,
  useRef,
} from "react";

import AlterModelConst from "./AlterModelConst.js";
import AlterUserCheck from "./AlterUserCheck.js";
import { useHistory } from "react-router-dom";
import { LoadMain } from "../../components/GlobalComps";
import { changePage } from "../../functions/pageFuncs";
// import { BackForwardObj }. from "../../components/";
import { BearForm } from "../../components/form/BearForm";
import {
  //
  SaveUser,
  mapSelectEnd,
  logs,
} from "@SillyScribe95/bedia-shared/";
import { AlterSide } from "./AlterSide.js";
import { ModelPanel } from "./ModelPanel.js";

export function AlterModel({
  //
  typevar,
  formObj,
  noSave,
  //
  aboveLoad,
  topObj,
  //
  //
  // 1STYLE
  fontSize = 30,
  //
  // TITLE
  titleConfig,
  //
  // LOAD
  loadConfig,
  loadTrue,
  //
  // 1user
  userObj,
  //
  // 1SUBMIT
  onSubmit,
  submitLink,
  noJump,
  //
  noOtherList,
  //
  // 1save
  modelStage,
  savePanelTrue,
  formConfig,
  noExtraModels,
  ...args
}) {
  // 1context
  //   const { SaveUser, userObj } = useContext(AuthContext);

  // function subios()

  // 1const

  // 1baseArgs
  const baseArgs = {
    typevar: typevar,
  };

  // 1load
  const [loadSave, setloadSave] = useState();
  const [emoStto, setemoStto] = useState();

  const [currStage, setcurrStage] = useState(modelStage);

  function sdkfje9(fgijgre) {
    logs.logga("___ fgijgre ___", fgijgre);

    // setemoStto;
  }

  // 1emoji
  const jasmoji = {
    onClick: setemoStto,
    chosenItem: emoStto,
  };

  const [PlayTrue, setPlayTrue] = useState(0);
  const [playCreate, setplayCreate] = useState();

  const oksae = {
    ...formConfig,
    userObj: userObj,
    emojiConfig: jasmoji,
    modelonCreate: setplayCreate,
    ...args,
  };

  const sdoew = {
    // ...oksae,
    ...AlterModelConst(oksae),
  };

  // 1history
  let history = useHistory();

  function logsaid(aodkwe, asdjew) {
    logs.logga(typevar + "___ AltModel__" + aodkwe, asdjew);
  }

  function subAfter(asdjew) {
    // if (!noJump) {
    //   changePage();
    // }

    logsaid("subAfter", asdjew);

    if (onSubmit) {
      onSubmit(asdjew);
    }

    logsaid("submtLink__", submitLink);

    if (submitLink) {
      history.push(submitLink);
    } else {
      changePage();
      if (setLoadSave) {
        setloadSave(false);
        // clearSettos();
      }
      if (savePanelTrue) {
        setcurrStage("save");
      }
    }
  }

  // 1function
  function addNew(typep) {
    setPlayTrue(typep);
  }

  function secSub(ijdsfe) {
    logs.logga("___ AlrModel fitsUBMIT bbbb___", ijdsfe);

    if (noSave) {
      subAfter(ijdsfe);
    } else {
      setloadSave(true);
      SaveUser(typevar, userObj, ijdsfe, subAfter);
    }
  }

  function firstsUBMIT({ playlist, topic, otherTitles, speakers, ...asewe }) {
    //
    const oksaew = {
      ...asewe,
      ...mapSelectEnd("speakers", speakers),
      ...mapSelectEnd("topic", topic),
      ...mapSelectEnd("playlist", playlist),
      ...mapSelectEnd("otherTitles", otherTitles),
      emoji: emoStto,
    };

    logs.logga("___ AltModel SUBMIT ___", oksaew);

    secSub(oksaew);
  }

  // 1submit 1onsubmit
  function fdogkdf(sdfse) {
    logs.logga("___ SUBMIT BASE ___", sdfse);
  }

  const asdowe =
    //
    // fdogkdf;
    firstsUBMIT;

  const ixjvse = [
    // "emoji",
    "name",
    // "topic",
    // "playlist",
    // "quote",
    // "topic",
  ];

  //  1test
  const ifders = {
    list: ixjvse,
  };

  const lisComplo = {
    ...sdoew,
    onSubmit: asdowe,
    // ...ifders,
  };

  function ShwChabe() {
    //
    const ijsdwe = {
      // obj: "Saving...",
      // style: {
      //   height: "100px",
      //   fontSize: "40px",
      //   textAlign: "center",
      // },
      ...loadConfig,
    };

    return <LoadMain {...ijsdwe} />;
  }

  // 1console

  logs.logga("___ AlterMod ___", oksae);
  logs.logga("___AlterModel lComplo ___", {
    userObj,
    lisComplo,
  });

  let mskesdf = "";
  switch (currStage) {
    case "save":
      const iksfer = {
        ...baseArgs,
        newFunc: () => setcurrStage(),
        // list:
      };

      mskesdf = <ModelPanel {...iksfer} />;

    default:
      // 1form
      let asdokwe = <BearForm {...lisComplo} />;
      mskesdf = (
        <>
          {topObj}
          {asdokwe}
        </>
      );
  }

  const asesae = {
    ...oksae,
    obj: mskesdf,
    slideNumber: playCreate,
  };

  // mskesdf = AlterSide(asesae);

  const okasde =
    //
    loadSave || loadTrue;

  const iewqas =
    //
    okasde ? <ShwChabe /> : mskesdf;

  let sdgfre3 = (
    //
    // asdokwe;
    <AlterUserCheck {...oksae} obj={iewqas} />
  );

  return sdgfre3;
}
