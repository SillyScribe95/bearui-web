import React from "react"; //
import {
  //
  bearlog,
  BearDiv,
  BearFixSide,
} from "@sillyscribe95/bear-ui-web";
import { BearCheckoutStripeNew } from "./BearCheckoutStripeNew";

export function BearPageWithStripeCheckout({
  mobileTrue,
  userLoad,
  userItem,
  renderMobile,
  checkoutConfig,
  mainItem,
  fixConfig,
}) {
  // 1checkout
  function RendCheck(args) {
    args = {
      formFieldsConfig: {
        style: {
          minHeight: mobileTrue ? "260px" : "50vh",
          textAlign: "center",
        },
      },
      ...args,
    };

    return BearCheckoutStripeNew(args);
  }
  const CheckoutItem =
    //
    // ""
    RendCheck(checkoutConfig);

  const okfdsd = mobileTrue
    ? renderMobile(CheckoutItem)
    : BearFixSide({
        left: mainItem,
        right: CheckoutItem,
        mainWidth: "40vw",
        fixConfig: {
          style: {
            //
            width: "35vw",
            minHeight: "560px",
            padding: "5px 20px 20px",
            right: "5vw",
          },
          className: "shadowMain",
        },
      });

  return okfdsd;
}
