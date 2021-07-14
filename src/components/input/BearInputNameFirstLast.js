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
import { BearFormList } from "../form/BearForm";
import { BearInputBase } from "./BearInputBase";

export function BearInputNameFirstLast({
  //
  ...args
}) {
  // 1const

  function SSmasow(aosdkf) {
    const cvbije = {
      required: true,
      ...aosdkf,
    };
    const ijsdsae =
      //
      "";
    // BearInputBase(BearInput(cvbije), cvbije);

    return ijsdsae;
  }

  const firsto = {
    //
    name: "firstName",
    label: "First Name",
  };

  // 1last
  const lasto = {
    name: "lastName",
    label: "Last Name",
  };

  const ijsdae = {
    horizList: [firsto, lasto],
    ...args,
    noName: true,
    noLabel: false,
  };

  const okfdsd = (
    <>
      {/*  */}
      {SSmasow(firsto)}
      {SSmasow(lasto)}
    </>
  );

  const zxhsawe = [
    //
    SSmasow(firsto),
    SSmasow(lasto),
  ];

  args = {
    list: zxhsawe,
    horiz: true,
    // flex: true,
    // obj: okfdsd,
    ...args,
  };

  logs.logga("___ ijsdae ___", ijsdae);

  const ijdse = (
    //
    // <BearDiv {...args} />;
    <BearFormList {...ijsdae} />
    // <BearFloat {...args} />
  );

  return ijdse;
}
