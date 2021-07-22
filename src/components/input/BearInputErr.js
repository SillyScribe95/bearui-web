import React, {
  //
  useState,
  useContext,
} from "react";

// import {
//   //
//   joinString,
//   stringinarray,
//   logs,
//   checkAllArray,
// } from "../../index/";
import validator from "validator";

export function BearInputErr(
  changeVal,
  {
    //
    // 1validation
    mustInclude,
    mustOnlyInclude,
    mustNotInclude,
    //
    // 1error
    errorName = "Your input",
    errorMessage,
    checkExistError,
    checkNotExistArr,
    ...args
  }
) {
  //
  //
  // 1const
  function sdjfewr(dogfsdf) {
    //
    let checkIt;
    switch (dogfsdf) {
      case "letters":
        checkIt = validator.isAlpha(changeVal);
        break;
    }

    return checkIt;
  }

  function asdae(zcaaed) {
    return changeVal && sdjfewr(zcaaed);
  }

  function sdifjre() {}

  function sfer(listo, error) {
    //
  }

  const onNot = mustNotInclude && mustNotInclude.map(asdae);
  const errorNot = mustNotInclude && checkAllArray(onNot);
  const notMess =
    errorNot &&
    errorName + " must not include " + joinString(mustNotInclude, " and ");

  const onMust = mustInclude && mustInclude.map(asdae);
  const errorMust = "";
  const mustMess = "";
  // errorMust ?

  function asdjwe(arro, asdfk) {
    const ifdjwes = arro && changeVal;
    const sroesad = ifdjwes && arro.map(asdae);
    const xvcbkgf = ifdjwes && checkAllArray(sroesad, asdfk);

    return xvcbkgf;
  }
  const onOnly = "";
  const errorOnly = asdjwe(mustOnlyInclude, false);
  const onlyMess =
    errorOnly &&
    errorName + " must only include " + joinString(mustOnlyInclude, " and ");

  // 1console
  logPut("validate", {
    onNot,
    errorNot,
    notMess,
    onMust,
    errorMust,
    mustMess,
    onOnly,
    errorOnly,
    onlyMess,
  });
  //
  //
  const bothExist = checkNotExistArr && changeVal;
  // 1error
  const errorExist = bothExist && stringinarray(changeVal, checkNotExistArr);
  const ndsijr = errorExist
    ? checkExistError(changeVal)
    : errorNot
    ? notMess
    : errorOnly
    ? onlyMess
    : errorMessage;

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
