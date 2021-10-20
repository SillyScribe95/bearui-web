import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearInputText } from "./BearInputText";
import { BearTextMedia } from "../BearTextMedia";
import { BearDiv } from "../BearDiv";

export function BearPassword({
  //
  showItem,
  hideItem,
  showHideElement,
  showHideConfig,
  requiredText,
  showStrenghBar,
  ...objaosdf
}) {
  //
  // 1const
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const typoFond = show ? "text" : "password";
  const ijsdae = {
    ...objaosdf,
    type: typoFond,
  };

  // 1show 1hide
  const sdfnwer =
    //
    asdijew();

  function asdijew() {
    //   showItem,
    // hideItem

    const sdfgr = BearDiv({
      obj: show ? (hideItem ? hideItem : "Hide") : showItem ? showItem : "Show",
      ...showHideConfig,
    });

    const sidjf =
      //
      // show ? showItem : hideItem;
      // show ? "Hide" : "Show";
      sdfgr;

    const sdjfewr = {
      h: "1.75rem",
      size: "sm",
      // style: {
      //   //
      //   // minWidth: "50px",
      //   marginRight: "40px",
      // },
      onClick: handleClick,
    };

    const ijvsf = (
      <>
        <div {...sdjfewr}>
          {sidjf}
          {/* </BearFormButton> */}
        </div>
        {/* </ */}
      </>
    );

    return ijvsf;
  }

  const dsfijsr = {
    ...ijsdae,
    inputRight: sdfnwer,
    rightConfig: {
      width: "4.5rem",
    },
  };

  const sfwq =
    //
    // "asdjkew";
    BearInputText(dsfijsr);

  return sfwq;
}
