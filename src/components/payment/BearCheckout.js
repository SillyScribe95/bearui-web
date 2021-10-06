import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";
import { BearForm } from "../form/BearForm.js";
import { BearCheckMain } from "../check/BearCheckMain";
import { bearlog } from "../../index";
import {
  BearDivMain,
  BearErrMiss,
  BearErrNote,
  BearMissing,
  BearUpper,
} from "../GlobalComps.js";
// import { BearCurrency } from "./BearCurrency";
// import { BearNotification } from "../BearNotification";

export function BearCheckout({
  //
  //
  provider = "stripe",
  providerConfig,
  onSubmit,
  testTrue,
  billingDetails,
  title,
  // dictvar,
  onSuccess,
  onFailure,
  typeComp = "BearCheckout",
  bearName,
  totalPayment,
  messageConfig = {},
  message,
  disableNotification,
  buttonConfig,
  ...args
}) {
  //

  args = {
    bearName,
    ...args,
  };

  // const ijsdsae = {
  //   ...providerConfig,
  //   mode: testTrue ? "test" : "live",
  //   testTrue,
  //   ...args,
  // };

  // 1const
  const [loadPay, setloadPay] = useState();

  // 1list
  const oiksaaa = [
    "card",
    "name",
    // "mobileNumber",
    "address",
  ];

  // 1address
  const jfrese = {
    // required
  };

  const sidjfr = {
    // address:
    // ...dictvar
  };

  const jisdre =
    //
    totalPayment < 0;

  function asidje(sdfwe) {
    return <>Pay {sdfwe}</>;
  }

  // 1currency
  const ijsdfr =
    //
    "";
  // BearCurrency(totalPayment, { divContainer: asidje });
  // "Pay " + totalPayment;
  // paymentintentFunction
  //   ? "Pay " + totalPayment
  //   : BearError(BearMissing("paymentintentFunction", "provideConfig"));

  // 1button
  const usdjfwer = {
    disabled: jisdre,
    text: ijsdfr,
    ...buttonConfig,
  };

  function adsrew({ provider, baseai, ...sadre }) {
    const sidjwreed = (
      <>
        {provider} payment {baseai}
      </>
    );

    const ewurw = {
      fontSize: "1.3em",
      style: { margin: "20px 0" },
    };

    const ijdwewe = (
      <>
        <BearDiv {...ewurw}>{sidjwreed}</BearDiv>
        {message}
        <br />
        To disable these notification, set the "disableNotification" attribute
        to "true" in your {typeComp} component.
      </>
    );

    const ijdfer = {
      ...messageConfig,
      ...sadre,
    };

    const odkeqd =
      //
      "";
    // BearNotification(ijdwewe, ijdfer);

    return odkeqd;
  }

  function handStripeNote(vwer) {
    const djfwe =
      //
      !disableNotification;
    // && testTrue

    if (djfwe) {
      adsrew(vwer);
    }
  }

  function handSuccess(sdfds) {
    const idsfwe = {
      //
      baseai: "succeeded",
      ...sdfds,
    };

    handStripeNote(idsfwe);
  }

  function handFail(sdfds) {
    const xifjsre = {
      //
      baseai: "failed",
      noteType: "error",
      ...sdfds,
    };

    handStripeNote(xifjsre);
  }

  async function er9eras(origDct) {
    setloadPay(true);

    //
    const asdok = await onSubmit(origDct);

    bearlog.lug("bearCheckout -AFTER  onSubmit --", { origDct, asdok });
    //
    if (asdok) {
      if (asdok.error) {
        handFail(asdok);
        onFailure(asdok);
      } else {
        handSuccess(asdok);
        onSuccess(asdok);
      }
    }

    setloadPay(false);
  }

  const dfjgrt = {
    list: oiksaaa,
    buttonConfig: usdjfwer,
    loading: loadPay,
    bearName: "payment-Form",
    formData: billingDetails,
    onSubmit: er9eras,
    noTitle: true,
    ...args,
  };

  bearlog.lug("___ dfjgrt ___", dfjgrt);

  const okfdsd = (
    <>
      {/*  */}
      <BearForm noAdvert {...dfjgrt} />
    </>
  );

  // let askjdew = "";
  // switch (provider) {
  //   case "stripe":
  //     askjdew = (
  //       <>
  //         {/*  */}
  //         {/* <Elements stripe={stripePromise}> */}
  //         {BearCheckStripe(ijsdsae)}
  //         {/* </Elements> */}
  //       </>
  //     );
  // }

  const missCheck = { onFailure, onSuccess, totalPayment };

  const idjft = {
    ...args,
    requiredArgs: missCheck,
    title,
  };

  bearlog.lug("___ idjft ___", idjft);

  const qwejase = BearCheckMain(typeComp, okfdsd, idjft);

  return qwejase;
}
