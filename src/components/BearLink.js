import React, {
  useState,
  useReducer,
  Fragment,
  createRef,
  forwardRef,
  useContext,
  useRef,
} from "react";
// import { Link } from "react-router-dom";
import { bearlog } from "../index";

export function BearLink({
  //
  outsideLink,
  blankTrue,
  linkParams,
  outsideTrue,
  hrefTrue,
  spaceTrue,
  hashTrue,
  homeTrue,
  disableNone,
  blackVar,
  // styleVar,
  target,
  disabled,
  toVar,
  linkConfig,
  link,
  blackTrue,
  linkTextTrue,
  textvar,
  obj,
  style,
  className,
  ...argso
}) {
  const nsdijfwer = linkParams ? "?" + turnDictLink(linkParams) : "";

  toVar =
    linkTextTrue && textvar
      ? textvar.toLowerCase()
      : hashTrue
      ? "#" + toVar
      : homeTrue
      ? "/"
      : toVar;

  toVar += nsdijfwer;

  const handleClick = () => {
    //
    // history.push(toVar);
  };

  // const outReg = gens.outsideReg;
  const outReg = /^(https?:\/\/)|(mailto:)/;
  const outBlank = outsideTrue || outsideLink || blankTrue;
  const noLink = disabled | !toVar;

  let kmda = blackTrue && {
    textDecoration: "none",
    color: "black",
    // color: colorTextMain,
  };

  let okasdw = {
    ...kmda,
    ...style,
  };

  const isdaeqw = {
    style: okasdw,
    className: className,
    ...argso,
  };

  const sdjfwe = outBlank && {
    target: "_blank",
  };

  const aisdwq = {
    // target: "_blank",
    ...sdjfwe,
    href: toVar,
    to: toVar,
  };

  const idjfewr = {
    // onClick: handleClick,
    ...isdaeqw,
  };
  // bearlog.lug("___ aisdwq ___", aisdwq);

  function Rlasdow() {
    return outBlank ? (
      <a {...aisdwq}>{textvar}</a>
    ) : (
      // <gens.StyledLink {...aisdwq}>{textPush}</gens.StyledLink>
      // <span {...idjfewr}>{textvar}</span>
      <a {...aisdwq}>{textvar}</a>
      // <Link {...aisdwq}>{textPush}</Link>
    );
  }

  return noLink ? textvar : <Rlasdow />;
}
