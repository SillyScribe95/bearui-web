import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearDiv,
  BearBorder,
  BearCheckoutStripe,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";
import axios from "axios";

export function TestCheckout({
  //

  ...args
}) {
  const idsfwa = {
    address: "5 colqound",
    name: "Andrwe asdmqwe",
  };

  async function getSecret(payMethod) {
    // return new Promise((resolve) => {
    //   fetch("gens.intentLink", payMethod).then(function (result) {
    //     //
    //       // resolve(enqo);
    //     });
    //   });
    // });
  }

  async function sfrase({ stripeAPI, bearName, ...sidjfer }) {
    logs.logga("___ paymentIntents CREATE ___", sidjfer);

    const { data, ...aewq } =
      //
      // "";
      // await fetchParams(, sidjfer)
      await axios.get("http://localhost:4000/pay", {
        params: sidjfer,
      });

    const jsdae =
      //
      data["client_secret"];
    // data["success"]["client_secret"];

    logs.logga("___ paymentIntents GOT ___", jsdae);

    return jsdae;
  }

  const jifdwe =
    //
    // getSecret
    sfrase;

  const sdfjer = {
    paymentintentFunction: jifdwe,
    // livesecKey:
    testsecKey: "sk_test_3Plmiw9Ss6DvlcC8fMLV8iZY00UHd8cMUF",
    livepubKey: "pk_live_2XSjS8VsEriy1nDzuG9L5g0B00ytBxblyN",
    testpubKey: "pk_test_XMNFkGHPKSnOQmmomRgwUBup00O7esmB0z",
  };

  const jisdfer = {
    background: "red",
    color: "white",
    // border: "2px solid black",
    ...BearBorder("green", "5px"),
    // padding: "20px",
    margin: "5px",
    fontSize: "20px",
  };

  const qweuhs = {
    style: {
      // background: "green",
      // color: "blue",
      fontWeight: "bold",
    },
  };

  function sad9qwe(cvkbmdfg) {
    //

    logs.logga("___ SUCCESS ON ___", cvkbmdfg);
  }

  function failo(asdre) {
    //

    logs.logga("___ failo ___", asdre);
  }

  const usjdre = {
    bearName: "bearCheckTest",
    formid: "bearCe",
    // provider: "stripe",
    ...sdfjer,
    testTrue: true,
    billingDetails: idsfwa,
    totalPayment: 100,
    // inputStyle: jisdfer,
    title: "Get paid today.",
    titleConfig: qweuhs,
    hidePostalCode: true,
    // ignoreErrors: true,
    // logtrue: true,
    // onSubmit:
    // submitLink
    onSuccess: sad9qwe,
    onFailure: failo,
    // failNoteConfig:
  };

  // return "";
  return <BearCheckoutStripe {...usjdre} />;
}
