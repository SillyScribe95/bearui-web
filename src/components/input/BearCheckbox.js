import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "../../index";

import { BearDiv } from "../BearDiv";
import { FlexHorz } from "../GlobalComps";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

export function BearCheckbox({
  //
  disabled,
  color,
  children,
  onChange,
  checkboxText,
  checkMessage,
  // defaulTrue,
  ...xcvbojd
}) {
  const isawe = {
    type: "checkbox",
    isDisabled: disabled,
    colorScheme: color,
    // defaultIsChecked: defaulT
    // onChange: (e) => setchekBxTrue(!chekBxTrue),
    ...xcvbojd,
  };

  // const ijasdwe = {
  //   // obj: textvar,
  //   style: {
  //     marginRight: "10px",
  //   },
  // };

  // {/* <input {...dsoadkw0} />; */}

  //     {/* <InputChak {...isawe} /> */}
  //     {/* <input {...isawe} /> {dsf9jewr} */}
  //     {/* </input> */}
  //     {/* <gens.CheckboxMain {...dsoadkw0}>{obj["textvar"]}</gens.CheckboxMain> */}

  const jidfrte = false;
  const [checkedItems, setCheckedItems] = React.useState(jidfrte);

  // const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  function adfkwer() {
    const difjrt = {
      //
      ...checkMessageConfig,
    };

    return <BearDiv {...difjrt}>{checkMessage}</BearDiv>;
  }

  const ijsf = checkedItems && checkMessage && adfkwer();

  // onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}

  const ijfder = {
    // colorScheme, "red": defaultIsChecked
  };

  const ijsdr = (
    <FlexHorz horiz>
      {/*  */}
      {/* <Checkbox {...isawe}> */}
      {/*  */}
      {/* {checkboxText} */}
      {/* </Checkbox> */}
      {ijsf}
    </FlexHorz>
  );

  // 1console

  const vobkdf = (
    <>
      {/*  */}
      {ijsdr}
    </>
  );

  return vobkdf;
}
