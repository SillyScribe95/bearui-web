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
// import { useHistory } from "react-router-dom";

export function BearLink({
  //
  outsideVar,
  blankTrue,
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
  linkvar,
  blackTrue,
  linkTextTrue,
  textvar,
  obj,
  style,
  className,
  ...argso
}) {
  toVar =
    linkTextTrue && textvar
      ? textvar.toLowerCase()
      : hashTrue
      ? "#" + toVar
      : homeTrue
      ? "/"
      : toVar;

  // const outReg = gens.outsideReg;
  const outReg = /^(https?:\/\/)|(mailto:)/;
  const outBlank = outsideTrue || outsideVar || blankTrue;
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

  const aisdwq = {
    // target: "_blank",
    target: outBlank ? "_blank" : "",
    href: toVar,
    to: toVar,
    style: okasdw,
    className: className,
    ...argso,
  };

  // logs.logga("___ aisdwq ___", aisdwq);

  function Rlasdow() {
    return outBlank ? (
      <a {...aisdwq}>{textvar}</a>
    ) : (
      // <gens.StyledLink {...aisdwq}>{textPush}</gens.StyledLink>
      <a {...aisdwq}>{textvar}</a>
      //   <Link {...aisdwq}>{textPush}</Link>
    );
  }

  return noLink ? textvar : <Rlasdow />;
}
