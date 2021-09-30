import React, {
  //
  useState,
  useEffect,
  useContext,
} from "react";
import { bearlog } from "../../index";
import {
  //
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BearCheckoutStripeBase } from "./BearCheckoutStripeBase";
import { CheckPayStripe } from "./CheckPayStripe";

export function BearCheckoutStripe({
  livepubKey,
  testpubKey,
  testsecKey,
  livesecKey,
  testTrue,
  nativePayment,
  nativePaymentConfig,
  ...aaaaa
}) {
  const zvarew = testTrue ? testpubKey : livepubKey;
  const secretos = testTrue ? testsecKey : livesecKey;
  const stripePromise = loadStripe(zvarew);

  // // 1useeffect
  // useEffect(() => {
  //   if (stripe) {
  //     const pr = stripe.paymentRequest();

  //     // Check the availability of the Payment Request API.
  //     pr.canMakePayment().then((result) => {
  //       if (result) {
  //         setPaymentRequest(pr);
  //       }
  //     });
  //   }
  // }, [stripe]);

  // 1console
  bearlog.lug("stricheck main ", {
    stripePromise,
  });

  async function getStripe() {
    return useStripe();
  }

  async function PayGo() {
    const stripe =
      //
      getStripe();
    // await getStripe();
    // useStripe();

    const payMe =
      //
      "";
    // getReq();
    const prMAIN = stripe.paymentRequest();
    const makeTrue = prMAIN.canMakePayment();
    bearlog.lug("---paybutton", { stripe, payMe, prMAIN, makeTrue });

    return "asdjwe";
  }

  const saidjew = {
    ...aaaaa,
    ...nativePaymentConfig,
  };
  bearlog.lug("saidjew-zz", saidjew);

  return (
    <>
      <Elements stripe={stripePromise}>
        {/* <PayGo /> */}
        <BearCheckoutStripeBase
          topFormItem={nativePayment && <CheckPayStripe {...saidjew} />}
          {...aaaaa}
        />
        {/* {CheckPayStripe(aaaaa)} */}
        {/* <BearCheckoutStripeBase /> */}
        {/* aaaa */}
        {/* <PayGo /> */}
        {/* {payFirst ? <PayGo /> : <Bearios />} */}
        {/* {Bearios()} */}
      </Elements>
    </>
  );
}
