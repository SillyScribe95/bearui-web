import React, {
  //
  useState,
  useContext,
} from "react";
import TextareaAutosize from "react-textarea-autosize";
import ResizeTextarea from "react-textarea-autosize";
import {
  Button,
  NumberInputField,
  NumberInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea as TextChak,
  Input as InputChak,
} from "@chakra-ui/react";
import {
  //
  logs,
} from "../../index";
import { InputBaseCheck } from "../GlobalComps";
import { onChangeFunc } from "../../functions/globalFuncs";

export function BearTextarea({
  //
  //   default,
  value,
  rows,
  style,
  initialValue,
  expand = true,
  ...dfgre
}) {
  // 1rows
  rows = rows ? rows : 3;

  // expand = "";
  const ijdfwer = expand && {
    as: ResizeTextarea,
  };

  const chakResize = {
    minH: "unset",
    overflow: "hidden",
    w: "100%",
    resize: "none",
    ...ijdfwer,
  };

  function sofkes(fdas) {
    logs.logga("___ fdas ___", fdas);

    onChangeFunc(fdas, dfgre);
  }

  const djfo = {
    padding: "20px",
    ...style,
  };

  const sdfezd = value && {
    value,
  };

  const ijsdfasd = {
    ...sdfezd,
    rows,
    minRows: rows,
    // initialValue:
    // defaultValue: initialValue,
    ...chakResize,
    style: djfo,
    ...dfgre,
    onChange: sofkes,
  };

  // 1console
  logs.loggo("___ bertextarea FULL ___", ijsdfasd);

  const xcvbkf = (
    //
    // <textarea {...ijsdfasd}/>
    // <textarea {...ijsdfasd}>{initialValue}</textarea>
    //  <TextareaAutosize {...ijsdfasd} />
    // <TextChak {...ijsdfasd}>{value}</TextChak>
    // <TextChak {...ijsdfasd}>{initialValue}</TextChak>
    <TextChak {...ijsdfasd} />
  );

  return InputBaseCheck(xcvbkf, dfgre);
}
