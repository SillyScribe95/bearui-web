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
  logs,
} from "../../index";
import { inputStyles, RendGroup } from "./BearInput";
import { BearInputText } from "./BearInputText";

export function BearInputNumber({
  //
  onlyPositive,
  step,
  min,
  style,
  onChange,
  ...vboret
}) {
  // 1min
  const zxcds = min ? min : onlyPositive && 0;
  const jsder = zxcds && {
    min: zxcds,
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

  const sfijwer = {
    ...jsder,
    ...vboret,
    style: nsdij,
    // ...inputStyles(nsdij),
    // defaultValue={15} max={30} clampValueOnBlur={false}
  };

  logs.logga("___ bNumber ___", sfijwer);

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
  // return BearInputText(sfijwer);
  return RendGroup(serhhee, sfijwer);
}
