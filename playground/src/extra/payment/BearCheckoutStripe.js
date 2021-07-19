import React, {
  //
  useState,
  useContext,
} from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  //
  logs,
} from "bearui-web";
import { loadStripe } from "@stripe/stripe-js";
import {
  BearDivMain,
  BearErrMiss,
  BearErrNote,
  BearMissing,
  BearUpper,
} from "../GlobalComps.js";
import { BearNotification } from "../BearNotification.js";
import { BearError } from "../BearError.js";
import { BearCheckout } from "./BearCheckout.js";

export function BearCheckoutStripe({
  //
  type,
  //
  bearName,
  // 1payment
  cardInputConfig,
  paymentConfig,
  onSubmit,
  //
  mode,
  ignoreErrors,
  livepubKey,
  testpubKey,
  testsecKey,
  livesecKey,
  totalPayment,
  hidePostalCode,
  onCardInputError,
  paymentintentFunction,
  testTrue,
  ...args
}) {
  args = {
    totalPayment,
    ignoreErrors,
    bearName,
    ...args,
  };

  // 1const
  const zvarew = testTrue ? testpubKey : livepubKey;
  const secretos = testTrue ? testsecKey : livesecKey;
  const dsfgkr = testTrue ? "test/" : "";
  const stripePromise = loadStripe(zvarew);
  const linkShow =
    //
    `https://dashboard.stripe.com/${dsfgkr}logs`;

  // 1errro
  const [errTexto, seterrTexto] = useState();
  const [disablo, setdisablo] = useState();

  function handError({ message }) {
    logs.loggu("___ hide ERROR ___", message);
    seterrTexto(message);
  }

  function handComplete(message) {
    logs.logga("___ hide SUCCESS ___", message);
    setdisablo(false);
  }

  function hadsnwi({ error, complete }) {
    //

    if (error) {
      handError(error);
    } else {
      seterrTexto();
      if (complete) {
        handComplete();
      }
    }

    // asew
  }

  function handleCardDetailsChange(sfa) {
    logs.logga("cardeets", sfa);
    // hadsnwi(sfa);
  }

  // https://dashboard.stripe.com/test/logs?object=pm_1IzkTtGy7WLw7ia52LTyKtml&created%5Bgte%5D=1622462400&dashboard=false&direction%5B%5D=self&direction%5B%5D=connect_out

  function Bearios() {
    const stripe = useStripe();
    const elements = useElements();

    function handRes(keweqw) {
      // const oksdasd
    }

    // 1message
    const wuheqw = (
      <>
        Click to open the record in your Stripe dashboard.
        <br />
        It may take a couple of minutes for the record to appear.
      </>
    );

    // 1submit
    async function secPass(dvbdero) {
      //
      const sidjfer = {
        amount: totalPayment,
        currency: "usd",
        payment_method_types: ["card"],
        ...paymentConfig,
      };

      const sdfkewr = {
        ...sidjfer,
        stripeAPI: stripe,
        ...dvbdero,
      };

      logs.logga("---PAYMENT CHECK ALL DEETS", sdfkewr);
      // logs.logga("___ dvbdero ___", dvbdero);

      if (onSubmit) {
        return onSubmit(dvbdero);
      } else {
        return await onDone(sdfkewr);
      }
    }

    async function onDone({ cardDetails, ...asdras }) {
      const secretos =
        //
        // await stripe.paymentIntents.create(sidjfer);
        await paymentintentFunction(asdras);

      const ijsrew = {
        payment_method: cardDetails,
      };

      logs.logga("___ paymentIntents asdqw ___", {
        secretos,
        ijsrew,
      });

      const { ...asdf } =
        //
        // await stripe.createPaymentMethod(rejweae);
        await stripe.confirmCardPayment(secretos, ijsrew);

      logs.logga("CARDPAY ", asdf);

      const jdfesawe = (
        <>
          {/*  */}
          Stripe
          {/* {BearUpper(mode)} */}
        </>
      );

      let fdgok = {
        provider: jdfesawe,
        ...asdf,
      };

      return fdgok;
    }

    async function er9eras(dvbdero) {
      const nsidfre = elements.getElement(CardElement);

      if (nsidfre) {
        const rejweae = {
          type: "card",
          card: nsidfre,
        };
        const kisdjfre = {
          cardDetails: rejweae,
          ...dvbdero,
        };

        return await secPass(kisdjfre);
      } else {
        return {
          //
        };
        // BearErrNote("Sorry")
      }
      // logs.logga("PAYMENT---asd");
      // handRes(asd);
    }

    // 1card
    function cardios(sdfgr = {}) {
      logs.logga("___ CARD BASEO ___", sdfgr);

      // return "aodkaew";
      return vxcobr(sdfgr);
    }

    function vxcobr({ containerStyle, style }) {
      //
      //

      const ijser = sdjfr(style);

      // 1style
      const sokre = {
        iconStyle: "solid",
        style: ijser,
        hidePostalCode,
        ...cardInputConfig,
      };

      const dsfoqeqs = {
        options: sokre,
        onChange: handleCardDetailsChange,
      };

      const jsdrs = !paymentintentFunction && !ignoreErrors;

      return jsdrs ? (
        BearErrMiss("paymentintentFunction", bearName, "BearCheckoutStripe")
      ) : (
        <>
          <CardElement {...dsfoqeqs} />
        </>
      );
    }

    function asodke(error) {
      const ksdrse9 =
        //
        // "sofkwq"
        errTexto;
      // error;

      return ksdrse9;
    }

    // 1card
    const ijsdf = {
      bearName: "STRIPE CARD",
      name: "card",
      // required: true,
      // error: errTexto,
      errorFunction: asodke,
      inputFunction: cardios,
      style: {
        minHeight: "40px",
      },
    };

    logs.logga("___ STRIPE CARD ___", ijsdf);

    // 1dict
    const ndufgase = {
      card: ijsdf,
    };

    function errorbaso({ code, message, type }) {
      //
      // onCardInputError()
    }

    function sdferi({ error, ...sdf }) {
      //
      if (error) {
        errorbaso(error);
      }
      //
    }

    function sdjfr(gijr9) {
      //
      //
      const colBase = "black";
      // const backBase = "red";

      const dfige = {
        color: colBase,
        // background: colBase,
        ...gijr9,
        // fontSize: 24,
      };

      logs.logga("___ dfige ___", dfige);

      //
      // BASE
      const sidjfre = {
        "::placeholder": dfige,
        ...dfige,
      };

      const redalbe = {
        iconColor: "red",
        color: "red",
      };

      const autho = {
        iconColor: "green",
      };

      const iframeStyles = {
        base: sidjfre,
        invalid: redalbe,
        complete: autho,
      };

      return iframeStyles;
    }

    const ijsase = {
      ...args,
      message: wuheqw,
      messageConfig: {
        outsideLink: linkShow,
      },
      buttonConfig: {
        disabled: disablo,
      },
      logtrue: true,
      dictvar: ndufgase,
      onSubmit: er9eras,
      typeComp: "BearCheckoutStripe",
    };

    logs.logga("___ ijsase ___", ijsase);

    const urwsese = (
      <>
        <BearCheckout {...ijsase} />
      </>
    );

    const ndifj =
      //
      // BearCheckMain("BearCheckoutStripe", urwsese, ijsase);
      urwsese;

    return ndifj;
  }

  return (
    <Elements stripe={stripePromise}>
      <Bearios />
      {/* {Bearios()} */}
    </Elements>
  );
}