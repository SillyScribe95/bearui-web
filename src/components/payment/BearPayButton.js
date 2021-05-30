import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import BearButton from "../BearButton";
import { checkoutMain } from "../../functions/stripeFuncs";

export function BearPayButton({
  //
  dataImport,
  costvar,
  payFunction,
  onClick,
  errorFunc,
  ...args
}) {
  // 1const
  const [loStrip, setloStrip] = useState();
  const [type, setType] = useState("");
  const stripe = useStripe();

  function baseUSE() {
    const iksae = {
      stripe: stripe,
      // uservar: currentUser,
    };

    logs.logga("___ BASE PAY ___", iksae);

    checkoutMain(iksae);
  }

  // const asokew = {
  //   sucessFunction: successo,
  // }

  // payFunction()

  function successo() {
    const ijsase = {
      //
    };
    //
  }

  function endFunc(session) {
    logs.logga("___ session ___", session);

    const goShes =
      //
      // session.id;
      session;

    const qeuhqewq = { sessionId: goShes };
    stripe.redirectToCheckout(qeuhqewq);
  }

  function getStripPage() {
    //
    //
    const sijdwe =
      //
      "";
    //   addLinkArr("checkout_create");
    // "sdfokweaw";

    const oasdew =
      //
      // ""
      "asqe";

    // fetch(sijdwe, stripeos)
    //   .then(function (response) {
    //     logs.logga("___ response ___", response, oasdew);

    //     return response.json();
    //   })
    //   .then(endFunc)
    //   .then(function (result) {
    //     // If `redirectToCheckout` fails due to a browser or network
    //     // error, you should display the localized error message to your
    //     // customer using `error.message`.

    //     logs.logga("___ result ___", result, oasdew);

    //     if (result.error) {
    //       errorFunc(result.error);
    //     }
    //   })
    //   .catch(errorFunc);
  }

  function buttClik() {
    //
    //

    logs.logga("___ buttClik ___", onClick);

    // segReport("Pay Button Clicked", asudhwqe);

    const isadwe =
      //
      true;

    if (isadwe) {
      setloStrip(true);
      getStripPage();
    } else if (errorFunc) {
      errorFunc();
    }

    //
  }

  const oksaewa =
    //
    // buttClik
    baseUSE;
  // endFunc;

  const asdokae = {
    ...args,
    onClick: oksaewa,
    isLoading: loStrip,
    loadingText: "Connecting...",
  };

  const iaskew = {
    ...asdokae,
  };

  logs.logga("___ PaButton ___", iaskew);

  const okfdsd = <BearButton {...asdokae} />;

  return okfdsd;
}
