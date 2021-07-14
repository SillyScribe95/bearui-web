import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "../../index"
import {
  Button,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { InputBaseCheck } from "../GlobalComps";
import { BearTextarea } from "./BearTextarea";
import { BearInputText } from "./BearInputText";

export function BearInput({
  //
  // name
  ...sfdgert
}) {
  //
  return BearInputText(sfdgert);
}

export function RendGroup(
  centerObj,
  { renderInput, inputLeft, leftConfig, inputRight, rightConfig, ...asdsd }
) {
  const leftRendos = inputLeft && (
    <InputLeftElement {...leftConfig}>
      {inputLeft}
      {/* <Button {...leftConfig}>{inputLeft}</Button> */}
      {/* {inputLeft} */}
    </InputLeftElement>
  );

  const rightRendos = inputRight && (
    <InputRightElement {...rightConfig}>
      {inputRight}
      {/* <Button {...rightConfig}>{inputRight}</Button> */}
    </InputRightElement>
  );

  const sdijfr = inputRight || inputLeft;

  const sdresar = {
    //
  };

  const cvdfsoe = sdijfr ? (
    <InputGroup {...sdresar}>
      {/*  */}
      {leftRendos}
      {centerObj}
      {rightRendos}
    </InputGroup>
  ) : (
    centerObj
  );

  const dfgjer = renderInput ? renderInput(cvdfsoe) : cvdfsoe;

  return InputBaseCheck(dfgjer, asdsd);
}

// 1input

// 1textarea

// 1onchange
export function inputChange(adowe, funcvra) {
  const valows =
    //
    // adowe;
    // adowe.target;
    adowe.target && adowe.target.value;

  const undoas =
    //
    funcvra && valows;

  logs.logga("___Asidnw obj ___", {
    MAIN: adowe,
    VALUE: valows,
    TRUE: undoas,
  });

  if (undoas) {
    funcvra(valows);
  }
}

export function inputStyles(adsre) {
  return sdfg(adsre);
}

export function sdfg({ fontSize, ...style }) {
  //

  const ijsdre =
    //
    // 20;
    fontSize;

  const sdre =
    //
    // fontSize;
    // "md";
    "";
  // ijsdre ? "" : "sm";

  const xcigj = {
    fontSize: ijsdre,
    size: sdre,
    style: {
      fontSize: ijsdre,
      padding: "2px",
      ...style,
    },
  };

  return xcigj;
}
