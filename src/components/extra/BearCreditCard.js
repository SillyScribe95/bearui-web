import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import { BearDiv } from "../BearDiv";
import { BearForm } from "../form/BearForm";
import { BearList } from "../list/BearList";
import { BearInput } from "../form/BearInput";

export function BearCreditCard({
  //
  genConfig,
  formConfig,
  ...args
}) {
  // 1const

  const [cvcCard, setcvcCard] = useState("");
  const [expiryCard, setexpiryCard] = useState("");
  const [numberCard, setnumberCard] = useState("");
  const [focusedCard, setfocusedCard] = useState("");
  const [nameCard, setnameCard] = useState("");

  const ijae = {
    cvc: cvcCard,
    expiry: expiryCard,
    focused: focusedCard,
    name: nameCard,
    number: numberCard,
  };

  function FormGo() {
    // 1number
    const nuneias = {
      name: "cardnumber",
      titlevar: "Card Number",
      onChange: setnumberCard,
    };

    // 1expiry
    const adsfoker = {
      name: "expiry",
      titlevar: "Expiry Date",
      onChange: setexpiryCard,
    };

    // 1cvc
    const niswes = {
      name: "cvc",
      titlevar: "CVC Number",
      onChange: setcvcCard,
    };

    // 1name
    const sijfeww = {
      name: "name",
      titlevar: "Card Name",
      onChange: setnameCard,
    };

    // 1listvar
    const lstcard = [
      //
      "number",
      "name",
      "expiry",
      "cvc",
    ];

    // 1dictvar
    const aijewe = {
      name: sijfeww,
      number: nuneias,
      cvc: niswes,
      expiry: adsfoker,
    };

    const ijase = {
      formid: "sdfiew",
      dictvar: aijewe,
      sameLine: true,
      listvar: lstcard,
      ...formConfig,
    };

    const ogertew = (
      <>
        {/*  */}
        {BearInput(aijewe["number"])}
        {BearInput(aijewe["name"])}
      </>
    );

    return ogertew;
    // return <BearForm {...ijase} />;
  }

  const okfdsd = (
    <div {...genConfig}>
      {/*  */}
      <Cards {...ijae} />
      {FormGo()}
    </div>
  );

  const weyrw = [
    //
    <Cards {...ijae} />,
    <FormGo />,
  ];

  args = {
    listvar: weyrw,
    horiz: true,
    typeList: "return",
    // obj: okfdsd,
    ...args,
  };

  // const sdfogkret = (<>
  //   //
  //   // <BearDiv {...args} />;
  //   // <BearList {...args} />
  // </>

  return okfdsd;
}
