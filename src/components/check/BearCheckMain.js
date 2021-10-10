import React, {
  //
  useState,
  useContext,
} from "react";
import { bearlog } from "../../index";
import { BearTitle } from "../title/BearTitle";
import { BearDiv } from "../BearDiv";
import { BearFloat } from "../BearFloat";
import { BearError } from "../BearError";
import { getAnyDictValue } from "../../functions/dictFuncs";
import { BearBorder } from "../InnerComps";
import { BearErrMiss } from "../ErrorComps";

export function BearCheckMain(asdf, zczx, sdfwe = {}) {
  return dfkbijv(asdf, zczx, sdfwe);
}
// bearbase
export function dfkbijv(
  named,
  children,
  {
    //
    // 1title
    noTitle,
    title,
    titleConfig = {},
    subtitle,
    subtitleConfig = {},
    //
    //
    bearName,
    missName,
    noNameNeeded,
    //
    //
    advert,
    advertConfig = {},
    //
    //
    //
    ignoreErrors,
    requiredArgs = {},
    //
    //
    degradedArgs = {},
    //
    topItem,
    bottomItem,
    //
    //
    style,
    //
    ...args
  }
) {
  // 1const

  function Titren(adfok = {}) {
    bearlog.lug("___ adfok ___", adfok);

    return Titoas(adfok);
  }

  function Titoas({ style, ...sdfok }) {
    const nsidjr = {
      //
      title,
      subtitle,
      subtitleConfig,
    };

    const kjase = {
      ...nsidjr,
      ...sdfok,
      style: {
        textAlign: "center",
        fontSize: "1.5em",
        marginBottom: "5px",
        ...style,
      },
      // titleConfig: titleConfig,
    };

    const noisae = <BearTitle {...kjase} />;

    return noisae;
  }

  // 1title
  const dfjer = !noTitle && title;
  const askew = dfjer && Titren(titleConfig);

  // 1love 1built 1avert
  function Adverto({ style }) {
    //
    //
    const asqewew = {
      className: "shadowHover",
      style: {
        ...BearBackBorder("darkblue", "5px"),
        color: "white",
        // padding: "5px 10px",
        fontSize: "16px",
        // margin: "15px",
        ...style,
      },
      outsideLink: "http://bearui.io/",
    };

    const xvbijewr = (
      <BearDiv span {...asqewew}>
        {/*  */}
        Built with love by{" "}
        <BearDiv span className="bold">
          🐻 Bear UI
        </BearDiv>
      </BearDiv>
    );

    return xvbijewr;
  }

  const dfsigwer = (
    <>
      {/*  */}
      {askew}
      {children}
    </>
  );

  const disjwe = {
    style: advert
      ? {
          ...BearBorder("grey", "5px"),
          paddingTop: "60px",
        }
      : {},
  };

  const jfdert = {
    topRight: advert && Adverto(advertConfig),
    // center: ,
    paddingVert: "5px",
    centerConfig: disjwe,
  };

  const ikjdwer =
    //
    dfsigwer;
  // BearFloat {...jfdert}>{dfsigwer}</BearFloat>;

  const okfdsd =
    //
    ikjdwer;
  // dfsigwer;

  const idfg = {
    // textAlign: "center",
    ...style,
  };

  args = {
    obj: <BearDiv obj={okfdsd} />,
    style: idfg,
    ...args,
  };

  const sdufdsf = missName ? missName : named;

  const objDegrade = getAnyDictValue(degradedArgs);

  const objRequre = getAnyDictValue(requiredArgs);
  bearlog.lug("___ objRequre ___", objRequre);

  function sajwae(sdfer) {
    const goCHecko = true && !ignoreErrors;

    const uhfgewq = goCHecko ? sdfer : <BearDiv {...args} />;

    return uhfgewq;
  }

  function degradMess() {
    const usdfer =
      //
      "MISSING ARGUMENT GOO";
    // objDegrade + " is missing "

    const dfwewa = BearError(usdfer);

    return dfwewa;
  }

  function rendName() {
    return !bearName && !noNameNeeded ? (
      sajwae(
        BearErrMiss("bearName", bearName, sdufdsf)
        // BearError(
        //   `${BearPossess(
        //     "argument",
        //     bearName,
        //     sdufdsf
        //   )}' needs a 'bearName' attribute!`
        // )
      )
    ) : objRequre ? (
      sajwae(BearErrMiss(objRequre, bearName, sdufdsf))
    ) : objDegrade ? (
      sajwae(degradMess())
    ) : (
      <BearDiv {...args} />
    );
  }

  return rendName();
}
