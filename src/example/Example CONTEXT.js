import React, { useEffect, useRef, useState, createContext } from "react";
import { bearlog } from "@sillyscribe95/bear-ui-web";
export const MainContext = createContext();

const MainContextProvider = (props) => {
  //   1const
  const [tim, settim] = useState();

  // 1test
  const testTrue =
    //
    // "asqewe";
    "";
  //

  function testCheck(bitOne, bitTwo) {
    return testTrue ? bitOne : bitTwo;
  }

  // 1form
  const [viewType, setviewType] = useState();

  // 1console
  const baseScript = {
    base: {
      //   hereo: hereo,
    },
    form: {
      //
    },
  };

  const okwe =
    //
    "base";

  const osdre = okwe ? baseScript[okwe] : baseScript;

  const xvokbcv = {
    tim,
    settim,
    viewType,
    setviewType,
    testCheck,
    // FORM
  };

  let isfas = {
    value: xvokbcv,
  };

  // 1return 1end
  return (
    <MainContext.Provider {...isfas}>{props.children}</MainContext.Provider>
  );
};
// }

export default MainContextProvider;
