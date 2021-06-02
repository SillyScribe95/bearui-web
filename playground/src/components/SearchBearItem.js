import React, {
  //
  useState,
  useContext,
} from "react";
import {
  BearCarousel,
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearEmoji,
  BearSocial,
  BearSelect,
  BearTitle,
  BearTags,
  BearSearchList,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearCreditCard,
  BearForm,
  NewHighlight,
  HiButton,
  BearCodePreview,
  BearIcon,
  TimeButtons,
} from "bearui-web";
import { bearConst } from "../bearConst";

export function SearchBearItem({
  //
  ...args
}) {
  // 1const

  function asokdwe({ paidTrue, tags, title, subtitle, ...swae }) {
    function aoke(tilas) {
      const asdsdf = {
        //
        fontSize: "0.8em",
        background: "green",
        padding: "2px 5px",
        borderRadius: "2px",
        color: "white",
      };

      //   const isdse =

      const sdrase = paidTrue && <BearDiv obj="PAID" style={asdsdf} />;

      const ijsaew = {
        leftobj: (
          <>
            {tilas}
            <hr />
          </>
        ),
        rightobj: sdrase,
      };

      const cvbokfd = <BearFloat {...ijsaew} />;

      return cvbokfd;
    }

    const sdfwe = {
      renderObj: aoke,
    };

    const oksadew =
      //
      // title
      `<Bear${title}>`;

    const ijsfwe = {
      titlevar: oksadew,
      subtitlevar: subtitle,
      titleConfig: sdfwe,
      fontSize: "20px",
      //   style: { height: "10px" },
      // tite
      //   lineBetween: true,
    };

    // 1tags
    const oskdr = {
      listvar: tags,
      horiz: true,
      itemConfig: {
        fontSize: "12px",
      },
      style: {
        // bottom: 0,
        margin: "30px 0 10px",
      },
    };

    const okasdew = (
      <>
        <BearTitle {...ijsfwe} />
        <BearTags {...oskdr} />
        {/* Bear{title} */}
        {/* {title} */}
        {/* {title} {subtitle} */}
      </>
    );

    logs.logga("___ swae ___", swae);

    const ksaew = {
      width: "300px",
    };

    const ijsdase = {
      obj: okasdew,
      style: ksaew,
      className: "pointer",
      href: "/",
    };

    return <BearDiv {...ijsdase} />;
  }

  function adease(asdfkew) {
    logs.logga("___ asdfkew ___", asdfkew);
  }

  const iskjda = [
    //
    "type",
    "title",
    // "subtitle",
  ];

  const ijasae = bearConst["listvar"].length;

  const sdkfwer =
    //
    `Search ${ijasae} components`;
  // "Choose a component"

  const ijsder = {
    ...bearConst,
    // searchAttrs: iskjda,
    renderItem: asokdwe,
    placeholder: sdkfwer,
    // onChange: adease,
    ...args,
  };

  const okfdsd = <BearSearchList {...ijsder} />;

  return okfdsd;
}
