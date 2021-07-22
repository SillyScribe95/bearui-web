import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  Input as InputChak,
} from "@chakra-ui/react";
import {
  //
  logs,
} from "../../index";
import { InputBaseCheck } from "../GlobalComps";
import { BearTextarea } from "./BearTextarea";
import { inputChange, inputStyles, RendGroup } from "./BearInput";

export function BearInputText({
  //
  inputObjectFunction,
  onChange,
  initialValue,
  bearName,
  onChangeValue,
  style,
  noBase,
  formData,
  ...sfdgert
}) {
  // 1const
  // textvar = "DEFAULT TEXT";

  // 1console
  function logPut(...adfsd) {
    const ndifjt =
      //
      "name";

    const idjfg = sfdgert.name;
    const hsdfer = idjfg == ndifjt;
    if (hsdfer) {
      logs.loggu(bearName, idjfg, "___ bInput ___", ...adfsd);
    }
  }

  // checkNotExistArr
  const [changeVal, setchangeVal] = useState(initialValue);

  const sjdfer = {
    // value: changeVal,
    defaultValue: initialValue,
  };

  const erroBase = {
    // errorMessage: BearInputErr(changeVal, sfdgert),
  };

  const isjwqe =
    //
    "lime";

  const sdkfewr = {
    // focusBorderColor: isjwqe,
    // placeholder: "Here is a sample placeholder"
  };

  // const nsidjfe

  const changeLocal =
    //
    "";
  // true;

  function sdijfer(ghtrer) {
    // logs.logga("___ ghtrer ___", ghtrer);
    // dfogkre(ghtrer);
  }

  function dfogkre(asdofre) {
    if (changeLocal) {
      inputChange(asdofre, setchangeVal);
    }
    if (onChangeValue) {
      inputChange(asdofre, onChangeValue);
    } else if (onChange) {
      onChange(asdofre);
    }
  }

  // 1console

  const baseo = {
    //
    rows: 1,
    autoComplete: "off",
    className: "noresize",
  };

  const xvbjdfr = {
    noBase,
    formData,
    ...sfdgert,
    ...erroBase,
  };

  const ijawe = {
    ...sjdfer,
    ...sdkfewr,
    ...baseo,
    ...sfdgert,
    onChange: sdijfer,
    // ...inputStyles(style),
  };

  // 1console
  logs.logga("___ BeaInputText ___", ijawe);

  // 1input
  const centFsow = (
    <>
      {/* <input {...ijawe}>{textvar}</input>
    <input {...ijawe} />
    <textarea {...ijawe}>{textvar}</textarea>
    <gens.StInput {...ijawe} />
    <InputChak {...ijawe}>{changeVal}</InputChak>
    <InputStrap {...ijawe} /> */}
      <InputChak {...ijawe} />
      {/* <BearTextarea {...ijawe} /> */}
      {/* <input {...ijawe} /> */}
    </>
  );

  logPut("___ intput BASEO ___", xvbjdfr);

  const cvdfsoe = RendGroup(centFsow, xvbjdfr);

  return cvdfsoe;
}
