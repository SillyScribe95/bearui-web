import React, {
  //
  useState,
  useContext,
} from "react";
import {
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";

import {
  //
  bearlog,
} from "../../index";
import { inputStyles, RendGroup } from "./BearInput";

export function BearInputNumber({
  //
  onlyPositive,
  positive,
  step,
  min,
  style,
  onChange,
  initialValue,
  onChangeNumber,
  ...vboret
}) {
  // 1min
  positive = positive || onlyPositive || min;

  const zxcds = min || positive;
  const jsder = zxcds && {
    min: min ? min : positive && 0,
  };

  const idfjew = {
    // style.fontSize;
  };

  const nsdij = {
    width: "100px",
    paddingRight: "20px",
    // fontSize:
    ...style,
  };

  function asjwe(asdfoke) {
    bearlog.lug("nCahnge PROPR NUMBER", { asdfoke, onChange });

    let sjdfer = parseFloat(asdfoke);
    if (onChangeNumber) {
      //
      onChangeNumber(sjdfer);
    }

    if (onChange) {
      //
      onChange({
        //
        target: { value: asdfoke },
      });
    }
  }

  const sfijwer = {
    defaultValue: initialValue,
    ...jsder,
    ...vboret,
    onChange: asjwe,
    style: nsdij,
    value: 0,
    // ...inputStyles(nsdij),
    // defaultValue={15} max={30} clampValueOnBlur={false}
  };

  // 1console
  bearlog.lug("___ bNumber ___", sfijwer);

  // onChange={(valueString) => setValue(parse(valueString))}
  // value={format(value)}
  // const format = (val) => `$` + val
  // const parse = (val) => val.replace(/^\$/, "")

  // const [value, setValue] = React.useState("1.53")

  // keepWithinRange={false}
  // clampValueOnBlur={false}
  // step={5} defaultValue={15} min={10} max={30}

  // precision={2}

  const nsidjer = step && (
    <NumberInputStepper {...idfjew}>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  );

  const serhhee = (
    <>
      <NumberInput {...sfijwer}>
        <NumberInputField />
        {nsidjer}
      </NumberInput>
    </>
  );

  // return serhhee;
  return RendGroup(serhhee, sfijwer);
}
