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
  paymentintentFunction,
  livepubKey,
  testpubKey,
  testsecKey,
  livesecKey,
  testTrue,
  nativePayment,
  nativePaymentConfig,
  elementType,
  ...aaaaa
}) {
  const publicKey = testTrue ? testpubKey : livepubKey;
  const secretKey = testTrue ? testsecKey : livesecKey;
  const stripe = loadStripe(publicKey);

  const [clientSecret, setclientSecret] = useState();
  useEffect(() => {
    async function getto() {
      const { client_secret } = 
      await paymentintentFunction();
      
      setclientSecret(client_secret);
    }

    getto();
  }, []);

  async function getStripe() {
    return useStripe();
  }

  const saidjew = {
    ...aaaaa,
    ...nativePaymentConfig,
  };
  bearlog.lug("saidjew-zz", saidjew);


  const options = {
    clientSecret,
  };
  const configo = { stripe, options };

  return !clientSecret ? (
    ""
  ) : (
    <>
      <Elements {...configo}>
        <BearCheckoutStripeBase
          nativePayment={nativePayment && <CheckPayStripe {...saidjew} />}
          {...aaaaa}
        />
        {/* {CheckPayStripe(aaaaa)} */}
        {/* <BearCheckoutStripeBase /> */}
        {/* aaaa */}
      </Elements>
    </>
  );
}
