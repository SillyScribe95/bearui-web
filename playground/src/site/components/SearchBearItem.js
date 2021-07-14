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
  BearSocialShare,
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
import { bearConst } from "../const/bearConst";

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
      divContainer: aoke,
    };

    // 1title
    const oksadew =
      //
      title;
    // `<Bear${title}>`;

    const ijsfwe = {
      title: oksadew,
      subtitle: subtitle,
      titleConfig: sdfwe,
      fontSize: "20px",
      style: { color: "black" },
      // tite
      //   lineBetween: true,
    };

    // 1tags
    const oskdr = {
      ignoreEmpty: true,
      bearName: "tags",
      list: tags,
      horiz: true,
      listNumber: 3,
      itemConfig: {
        fontSize: "12px",
        margin: "30px 0 10px",
      },
    };

    const ndfigjt = {
      style: {
        // bottom: 0,
        margin: "30px 0 10px",
      },
    };

    const okasdew = (
      <>
        <BearTitle {...ijsfwe} />
        <BearDiv {...ndfigjt}>
          <BearTags {...oskdr} />
        </BearDiv>
        {/* Bear{title} */}
        {/* {title} */}
        {/* {title} {subtitle} */}
      </>
    );

    logs.logga("___ ExpoBear COMPONENT ___", swae);

    const ksaew = {
      //
    };

    const ijsdase = {
      obj: okasdew,
      style: ksaew,
      className: "pointer",
      // link:
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
    "tags",
    // "subtitle",
  ];

  const ijasae = bearConst["list"].length;

  const sdkfwer =
    //
    `Search ${ijasae} components`;
  // "Choose a component"

  function rtessd(adwe) {
    return "saodkaw";
  }

  const nsdjaws =
    //
    // rtessd;
    asokdwe;

  const nfide = {
    // background: "transparent",
  };

  const ijsder = {
    ...bearConst,
    // list: ["authPortal"],
    bearName: "SearchBiItem",
    noNameNeeded: true,
    searchAttrs: iskjda,
    renderItem: nsdjaws,
    // hoverStyle: nfide,
    optionBorder: "sdok",
    itemConfig: { style: { padding: "0 5%" } },
    // logtrue: "",
    placeholder: sdkfwer,
    ...args,
  };

  const okfdsd = <BearSearchList {...ijsder} />;

  return okfdsd;
}
