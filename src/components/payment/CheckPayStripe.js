import React, { useState, useEffect } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { bearlog } from "../../index";
import { BearCheckoutStripeBase } from "./BearCheckoutStripeBase";
import { BearError } from "../BearError";

export function CheckPayStripe({
  totalPayment,
  paymentLabel,
  paymentConfig,
  bearName,
  noPaymentMessage = "",
  buttonConfig = "",
  noNativePaymentMessage = "",
  ...aaaaa
}) {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  const isjdfewe = {
    country: "US",
    currency: "usd",
    total: {
      label: paymentLabel,
      amount: totalPayment,
    },
    requestPayerName: true,
    requestPayerEmail: true,
    ...paymentConfig,
  };

  useEffect(() => {
    bearlog.log("stripe DONE-zz", stripe);
    if (stripe) {
      const pr = stripe.paymentRequest(isjdfewe);

      bearlog.log("prrrr-zz", pr);

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then((result) => {
        bearlog.log("result-zz", result);

        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe]);

  const payoitreu =
    //
    // true;
    paymentRequest;

  const sdijfer = {
    options: { paymentRequest },
  };

  const paygo = payoitreu ? (
    <PaymentRequestButtonElement {...sdijfer} />
  ) : noNativePaymentMessage ? (
    noNativePaymentMessage
  ) : (
    BearError(
      //
      "Your site isn't secure to serve a native payment button. It will look like this.",
      { bearName }
    )
  );

  const sodkfwe = <div {...buttonConfig}>{paygo}</div>;

  return sodkfwe;
}
