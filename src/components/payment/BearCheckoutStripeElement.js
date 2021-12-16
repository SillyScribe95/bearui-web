import React from "react"; //
import {
  //
  bearlog,
  BearDiv,
  BearForm,
} from "@sillyscribe95/bear-ui-web";
import {
  //
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";

export function BearCheckoutStripeElement({
  onSuccess,
  onFailure,
  clientSecret,
  title,
  elementConfig,
  onLoading,
  ...args
}) {
  const stripe = useStripe();
  const elements = useElements();

  function onSubmit() {
    const redirect = "if_required";

    if (onLoading) {
      onLoading();
    }

    stripe
      .confirmPayment({
        elements,
        redirect,
      })
      .then(doneSub);

    function doneSub({ error, paymentIntent }) {
      const errTrue = "";

      if (errTrue) {
        onFailure(error);
      } else if (paymentIntent) {
        onSuccess(paymentIntent);
      }
    }
  }

  function Jdqwe() {
    const config = {
      ...elementConfig,
    };

    return (
      <div>
        <PaymentElement {...config} />
      </div>
    );
  }

  const config = {
    onSubmit,
  };
  args = {
    children: Jdqwe(),
    ...config,
    ...args,
  };


  const formos = BearFormBasic(args);

  return formos;
}
