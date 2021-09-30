import React, {
  //
  useState,
  useContext,
} from "react";
import { bearlog } from "../../index";
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
  center,
  {
    renderInput,
    inputLeft,
    leftMargin = "7px",
    leftConfig,
    inputRight,
    rightConfig,
    ...asdsd
  }
) {
  const leftRendos =
    inputLeft &&
    aswqe(
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

  function aswqe(xcvadf) {
    const sdresar = (
      <div
        //
        style={{
          //
          // paddingLeft: leftMargin,
          marginRight: leftMargin,
          // marginLeft: "20px",
        }}
      >
        {xcvadf}
      </div>
    );

    const ijsw =
      //
      // sdresar
      xcvadf;

    return ijsw;
  }

  let cvdfsoe = sdijfr ? (
    <>
      <InputGroup>
        {/*  */}
        {leftRendos}
        {/* {center} */}
        {/* {sdresar} */}
        {aswqe(center)}
        {rightRendos}
      </InputGroup>
    </>
  ) : (
    center
  );

  cvdfsoe =
    //
    // ""
    cvdfsoe;
  // center;

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

  bearlog.lug("___Asidnw obj ___", {
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
