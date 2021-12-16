import React, { useEffect, useState } from "react"; //
import {
  //
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BearCheckoutStripeElement } from "./BearCheckoutStripeElement";
import { BearCheckMain } from "@sillyscribe95/bear-ui-web";

export function BearCheckoutStripeNew(config) {
  const {
    //
    errorItem = "",
    loadItem = "",
    paymentIntentFunction,
    publicKey,
    return_url,
  } = config;

  const stripe = loadStripe(publicKey);

  const [clientSecret, setclientSecret] = useState();
  const [loadClient, setloadClient] = useState(true);
  useEffect(() => {
    async function getto() {
      const { client_secret } = await paymentIntentFunction();
      setclientSecret(client_secret);
      setloadClient(false);
    }

    if (paymentIntentFunction) {
      getto();
    }
  }, []);

  const options = {
    clientSecret,
  };
  const configo = { stripe, options };
  const extra = { ...options, ...config };

  // let result;
  let result = loadClient ? (
    loadItem
  ) : clientSecret ? (
    <Elements {...configo}>
      <BearCheckoutStripeElement {...extra} />
    </Elements>
  ) : (
    errorItem
  );

  const requiredArgs = {
    publicKey,
    paymentIntentFunction,
    return_url,
  };

  const args = {
    requiredArgs,
    ...config,
  };

  result = BearCheckMain("BearCheckoutStripeNew", result, args);

  return result;
}
