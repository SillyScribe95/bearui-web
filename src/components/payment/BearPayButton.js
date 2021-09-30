import React, { useState, useEffect } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";

export function BearPayButton({
  //
  stripeConfig,
}) {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  // if (paymentRequest) {
  //   return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  // }

  // Use a traditional checkout form.
  return "Insert your form or button component here.";
}
