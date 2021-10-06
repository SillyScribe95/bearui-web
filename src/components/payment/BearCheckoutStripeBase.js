import React, {
  //
  useState,
  useEffect,
  useContext,
} from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  //
  bearlog,
} from "../../index";
import {
  BearDivMain,
  BearErrMiss,
  BearErrNote,
  BearMissing,
  BearUpper,
} from "../GlobalComps.js";
// import { BearNotification } from "../BearNotification.js";
import { BearError } from "../BearError.js";
import { BearCheckout } from "./BearCheckout.js";
import { BearInputBase } from "../input/BearInputBase";

export function BearCheckoutStripeBase({
  //
  type,
  //
  bearName,
  // 1button
  payFirst,
  dictvar,
  // 1payment
  cardInputConfig,
  paymentConfig,
  paymentLabel,
  onSubmit,
  nativePayment,
  //
  mode,
  // 1card
  cardConfig,
  ignoreErrors,
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
  // 1stripe
  const [paymentRequest, setPaymentRequest] = useState(null);
  const dsfgkr = testTrue ? "test/" : "";
  const linkShow =
    //
    `https://dashboard.stripe.com/${dsfgkr}bearlog`;

  // 1errro
  const [errTexto, seterrTexto] = useState();
  const [disablo, setdisablo] = useState(true);

  function handError({ message }) {
    bearlog.luggu("___ hide ERROR ___", message);
    seterrTexto(message);
  }

  function handComplete(message) {
    bearlog.lug("___ hide SUCCESS ___", message);
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
    bearlog.lug("cardeets", sfa);
    // hadsnwi(sfa);
  }

  // https://dashboard.stripe.com/test/bearlog?object=pm_1IzkTtGy7WLw7ia52LTyKtml&created%5Bgte%5D=1622462400&dashboard=false&direction%5B%5D=self&direction%5B%5D=connect_out

  // 1checkout
  function Bearios() {
    const stripe = useStripe();
    const elements = useElements();

    bearlog.lug("STRIPE CHECKOUT---", {
      //
      stripe,
      elements,
    });

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

      bearlog.lug("---PAYMENT CHECK ALL DEETS", sdfkewr);
      // bearlog.lug("___ dvbdero ___", dvbdero);

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

      bearlog.lug("___ paymentIntents asdqw ___", {
        secretos,
        ijsrew,
      });

      const { ...asdf } =
        //
        // await stripe.createPaymentMethod(rejweae);
        await stripe.confirmCardPayment(secretos, ijsrew);

      bearlog.lug("CARDPAY ", asdf);

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

    // 1submit CHECK(){
    async function checkoSub() {
      const nsidfre = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: nsidfre,
      });

      bearlog.lug("___ check SUBMIT CARD ___", { error, nsidfre });

      if (!error) {
        return true;
      } else {
        seterrTexto("Please add your card details");
        return false;
      }
    }

    // 1submit FIRST
    async function er9eras(dvbdero) {
      const nsidfre = elements.getElement(CardElement);

      bearlog.lug("___ submit FIRST CARD ___", nsidfre, dvbdero);

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
        seterrTexto("Please add your card details");
      }
      // bearlog.lug("PAYMENT---asd");
      // handRes(asd);
    }

    // 1card
    function cardios(sdfgr = {}) {
      bearlog.lug("___ CARD BASEO ___", sdfgr);

      // return "aodkaew";
      return (
        <>
          {nativePayment}
          {/*  */}
          {vxcobr(sdfgr)}
        </>
      );
    }

    // 1cardeleemtns
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
          {/* {errTexto} */}
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

    // 1card CONFIG
    const ijsdf = {
      bearName: "STRIPE CARD",
      name: "card",
      label: "Credit / Debit card",
      // required: true,
      // error: errTexto,
      errorFunction: asodke,
      inputFunction: cardios,
      style: {
        minHeight: "40px",
      },
      ...cardConfig,
    };

    bearlog.lug("___ STRIPE CARD ___", ijsdf);

    // 1dict 1card INLCUDE IN LIST
    const ndufgase = {
      dictvar: { card: ijsdf, ...dictvar },
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

      bearlog.lug("___ dfige ___", dfige);

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
      logtrue: true,
      confirmModal: true,
      ...args,
      // topFormItem: BearInputBase(cardios, ijsdf),
      ...ndufgase,
      message: wuheqw,
      messageConfig: {
        outsideLink: linkShow,
      },
      // buttonConfig: {
      //   disabled: disablo,
      // },
      onSubmit: er9eras,
      preSubmit: checkoSub,
      typeComp: "BearCheckoutStripe",
    };

    bearlog.lug("___ ijsase ___", ijsase);

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

  async function getReq() {
    const pr = stripe.paymentRequest();
    return pr.canMakePayment();
  }

  // 1button

  const findTrue =
    //
    true;
  // paymentRequest

  // 1console
  bearlog.lug("CHECKOUTSTRIPE-zzzz", {
    //
    paymentRequest,
    findTrue,
  });

  return (
    <>
      {/* {findTrue ? <PayGo /> : <Bearios />} */}
      {/* <PayGo /> */}
      <Bearios />
    </>
  );
}
