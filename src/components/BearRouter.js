import React, {
  //
  useState,
  useContext,
} from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

export function BearRouter({
  //
  list,
  //   function,
  children,
  homepage,
  routeDict,
  ...args
}) {
  // 1const

  function sijaee({ path, ...adsfr }) {
    const ijdrwe =
      //
      // "/test";
      path;
    // "/" + path;

    const ijsdfr = <Route path={ijdrwe} {...adsfr} />;

    return ijsdfr;
  }

  const okfdsd = (
    <>
      {/*  */}
      <BrowserRouter>
        <Switch>
          {/*  */}
          <Route path="/" component={homepage} />
          {children.map(sijaee)}
        </Switch>
      </BrowserRouter>
    </>
  );

  return okfdsd;
}
