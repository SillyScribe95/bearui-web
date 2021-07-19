import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  logs,
} from "bearui-web";
import Cards from "react-credit-cards";
import { BearDiv } from "../BearDiv";
import { BearForm } from "../form/BearForm";
import { BearList } from "../list/BearList";
import { BearInputText } from "../input/BearInputText";

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
      title: "Card Number",
      onChange: setnumberCard,
    };

    // 1expiry
    const adsfoker = {
      name: "expiry",
      title: "Expiry Date",
      onChange: setexpiryCard,
    };

    // 1cvc
    const niswes = {
      name: "cvc",
      title: "CVC Number",
      onChange: setcvcCard,
    };

    // 1name
    const sijfeww = {
      name: "name",
      title: "Card Name",
      onChange: setnameCard,
    };

    // 1list
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
      bearName: "sdfiew",
      dictvar: aijewe,
      sameLine: true,
      list: lstcard,
      ...formConfig,
    };

    const ogertew = (
      <>
        {/*  */}
        {BearInputText(aijewe["number"])}
        {BearInputText(aijewe["name"])}
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
    list: weyrw,
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
