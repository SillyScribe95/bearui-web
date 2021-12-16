
import React from //
"react";
import {
  //
  bearlog,
  BearDiv,
} from "@sillyscribe95/bear-ui-web";
import {
  PaymentElement,
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export function TestComp() {

const stripePromise = loadStripe("pk_test_KVgZyP8E6Mk5EJQdiXvDQkGo00ZURqto0D");
  const okfdsd = (
    <>
      {/*  */}
      <Elements stripe={stripePromise}>
        <form>
        <PaymentElement />
        <button>Submit</button>
        </form>
    </Elements>
    </>
  );

  return okfdsd;
}
