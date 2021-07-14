import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { BearFormButton } from "../button/BearFormButton";
import { _dictEmail } from "./_dictEmail";
// import PhoneInput from "react-phone-number-input";
import {
  //
  logs,
} from "../../index"

export function getFormPass(
  objsoa,
  asdwe = {}
  //   { dictvar, emailConfig, nameConfig, passwordConfig }
) {
  let osakde = "";

  switch (objsoa) {
    case "time":
      osakde = _dictTime();
      break;
    case "email":
      osakde = _dictEmail();
      break;
    case "url":
      osakde = _dictURL(asdwe);
      break;
    case "nameFirstLast":
      osakde = {
        noLabel: true,
        inputType: "firstLast",
      };
      break;
    case "name":
      osakde = _dictName();
      break;
    case "tags":
      osakde = {
        inputType: "select",
        create: true,
        multi: true,
      };
      break;
    case "mobileNumber":
      osakde =
        //
        _dictMobile();
      //  _dictMobBase();
      break;
    case "password":
      osakde = _dictPassword();
      break;
    case "address":
      osakde = _dictAddress();
      break;
    case "description":
      osakde = {
        label: "Description",
        inputType: "textarea",
      };
      break;
    case "keyValue":
      osakde = {
        //
      };
  }
  const retier = {
    name: objsoa,
    ...osakde,
    ...asdwe,
  };

  return retier;
}

// 1url 1link
function _dictURL({ register, ...asdf }) {
  logs.logga("___ URL register, ...asdf ___", register, asdf);

  const ijsdrase = {
    // adsfokew: "okdasdas",
    // name: "timeNumber",
    // type: "number",
    // pattern: {
    //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //   message: "invalid email address",
    // },
  };

  return ijsdrase;
}

// 1time
function _dictTime() {
  const ijsdrase = {
    name: "timeNumber",
    inputType: "number",
  };

  const xvnfs = [
    //
    "seconds",
    "minutes",
    "hours",
    "days",
    "weeks",
  ];

  const jfdgre = {
    name: "timeString",
    inputType: "select",
    optionsArray: xvnfs,
  };

  return {
    required: true,
    horizList: [
      //
      ijsdrase,
      jfdgre,
    ],
  };
}

// 1address
function _dictAddress() {
  return {
    required: true,
    name: "address",
    inputType: "textarea",
    label: "Address",
  };
}

// function

//   1name
function _dictName() {
  //
  const nasmwoBL = {
    required: true,
    // pattern: emailPatto,
    name: "name",
    label: "Name",
    // label: vbijdf9te,
    iconvar: "",
    // iconvar: "email",
  };

  return nasmwoBL;
}

//   1password
function _dictPassword() {
  return {
    required: true,
    name: "password",
    label: "Password",
    inputType: "password",
  };
}

function _dictMobBase() {
  const [nubemr, setnubemr] = useState();

  // const idjfger = (
  //   <PhoneInput
  //     placeholder="Enter phone number"
  //     value={nubemr}
  //     onChange={setnubemr}
  //   />
  // );

  return "idjfger";
}

function _dictMobile() {
  const [nubemr, setnubemr] = useState();

  function asdwease(sdfwer) {
    const sdjfewr = {
      style: {
        marginRight: "10px",
        // width: "30px",
      },
    };

    const jsdfw = "+44";

    const sdifjer = <BearFormButton {...sdjfewr}>{jsdfw}</BearFormButton>;

    const ijsdsf = (
      <Flex>
        {sdifjer}
        {sdfwer}
      </Flex>
    );

    const dfjgr =
      //
      // sdfwer;
      ijsdsf;

    return dfjgr;
  }

  return {
    inputObjectFunction: asdwease,
    name: "mobileNumber",
    label: "Mobile Number",
    inputType: "number",
    // inputLeft: "+44",
  };
}
