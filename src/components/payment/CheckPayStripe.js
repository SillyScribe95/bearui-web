import React, { useState, useEffect } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { bearlog } from "../../index";
import { BearCheckoutStripeBase } from "./BearCheckoutStripeBase";
import { BearError } from "../BearError";
import { BearDiv } from "../BearDiv";

export function CheckPayStripe({
  totalPayment,
  paymentLabel,
  dividerObj,
  loadingItem = "",
  paymentConfig,
  nativePaymentConfig,
  hideErrors,
  bearName,
  noPaymentMessage = "",
  buttonConfig = "",
  noNativePaymentMessage = "",
  //
  //
  onSuccess,
  onCancel,
  //
  //
  style,
  className,
  ...aaaaa
}) {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [loadPay, setloadPay] = useState(true);

  const isjdfewe = {
    country: "US",
    currency: "usd",
    total: {
      label: paymentLabel,
      amount: totalPayment,
    },
    ...paymentConfig,
    ...nativePaymentConfig,
  };

  useEffect(() => {
    bearlog.lug("stripe DONE-zz", stripe);
    if (stripe) {
      const pr = stripe.paymentRequest(isjdfewe);

      bearlog.lug("prrrr-zz", pr);

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then((result) => {
        bearlog.lug("result-zz", result);

        if (result) {
          setPaymentRequest(pr);
        }
      });
    }

    setloadPay();
  }, [stripe]);

  const payoitreu =
    //
    // true;
    paymentRequest;

  const sdijfer = {
    options: {
      //
      paymentRequest,
      paymentRequestButton: buttonConfig,
    },
  };

  // if (paymentRequest) {
  //   payFuncs()
  // }

  // 1paymentrequest
  function payFuncs() {
    // 1cancel
    // paymentRequest.on("cancel", onCancel);
    // 1token
    // paymentRequest.on("token", function (event) {
    //   bearlog.lug("--token-xxx", event);
    // });
    // 1source
    // paymentRequest.on("source", function (event) {
    //   bearlog.lug("--source-xxx", event);
    // });
    // 1success 1paymentmethod
    // paymentRequest.on("paymentmethod", async function (event) {
    //   bearlog.lug("--paymentmethod-xxx", event);
    // });
    // paymentRequest.on("paymentmethod", async (ev) => {
    //   // Confirm the PaymentIntent without handling potential next actions (yet).
    //   const { paymentIntent, error: confirmError } =
    //     await stripe.confirmCardPayment(
    //       clientSecret,
    //       { payment_method: ev.paymentMethod.id },
    //       { handleActions: false }
    //     );
    //   if (confirmError) {
    //     // Report to the browser that the payment failed, prompting it to
    //     // re-show the payment interface, or show an error message and close
    //     // the payment interface.
    //     ev.complete("fail");
    //   } else {
    //     // Report to the browser that the confirmation was successful, prompting
    //     // it to close the browser payment method collection interface.
    //     ev.complete("success");
    //     // Check if the PaymentIntent requires any actions and if so let Stripe.js
    //     // handle the flow. If using an API version older than "2019-02-11"
    //     // instead check for: `paymentIntent.status === "requires_source_action"`.
    //     if (paymentIntent.status === "requires_action") {
    //       // Let Stripe.js handle the rest of the payment flow.
    //       const { error } = await stripe.confirmCardPayment(clientSecret);
    //       if (error) {
    //         // The payment failed -- ask your customer for a new payment method.
    //       } else {
    //         // The payment has succeeded.
    //       }
    //     } else {
    //       // The payment has succeeded.
    //     }
    //   }
    // });
  }

  const paygo = loadPay ? (
    loadingItem
  ) : payoitreu ? (
    <>
      <PaymentRequestButtonElement {...sdijfer} />
      {dividerObj ? dividerObj : Divideo()}
    </>
  ) : !hideErrors ? (
    BearError(
      //
      "Your site isn't secure to serve a native payment button. It will look like this.",
      { bearName }
    )
  ) : (
    noNativePaymentMessage
  );

  const sidjfre = {
    style,
    className,
  };

  // 1divider
  function Divideo() {
    const sdkfr = {
      style: { margin: "10px 0", textAlign: "center " },
      obj: "Or pay with card",
    };
    return BearDiv(sdkfr);
  }

  const sodkfwe = (
    <div {...sidjfre}>
      {/*  */}
      {paygo}
    </div>
  );

  return sodkfwe;
}
