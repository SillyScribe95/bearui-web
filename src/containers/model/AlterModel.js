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
import { mapSelectEnd } from "../../functions/arrayFuncs";
import {
  //
  SaveUser,
  logs,
} from "@SillyScribe95/bedia-shared/";
import { AlterSide } from "./AlterSide.js";

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
  formConfig,
  noExtraModels,
  ...args
}) {
  // 1context
  //   const { SaveUser, currentUser } = useContext(AuthContext);

  // function subios()

  // 1const

  // 1load
  const [loadSave, setloadSave] = useState();
  const [emoStto, setemoStto] = useState();

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
    modelCreateFunc: setplayCreate,
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

  function firstsUBMIT({ playlist, topic, otherTitles, ...asewe }) {
    //
    const oksaew = {
      ...asewe,
      ...mapSelectEnd("topic", topic),
      ...mapSelectEnd("playlist", playlist),
      ...mapSelectEnd("otherTitles", otherTitles),
      emoji: emoStto,
    };

    logs.logga("___ AltModel SUBMIT ___", oksaew);

    secSub(oksaew);
  }

  // 1submit
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
    listvar: ixjvse,
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
  logs.logga("___AlterModel lComplo ___", {
    userObj,
    lisComplo,
  });

  // 1form
  let asdokwe = <BearForm {...lisComplo} />;
  let mskesdf = (
    <>
      {topObj}
      {asdokwe}
    </>
  );

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