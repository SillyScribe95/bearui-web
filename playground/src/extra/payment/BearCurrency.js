import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";

export function BearCurrency(amount, { country = "US", ...sadf }) {
  const flotAm = parseFloat(amount);
  const showTrue = flotAm > 0;

  function adojwer() {
    var ccvar = require("iso-country-currency");

    const kawe = ccvar.getAllInfoByISO(country);
    const ijadwe = kawe.currency;

    const dkhdt = {
      from: "USD",
      to: ijadwe,
      value: flotAm,
    };

    logs.logga("___ flotAm ___", flotAm);
    logs.logga("___ dkhdt ___", dkhdt);

    const amono =
      //
      // "ERRR";
      showTrue ? <CurrencyConverter {...dkhdt} /> : "0.00";

    const ijasdw = (
      <>
        {kawe.symbol}
        {amono}
      </>
    );

    return nijfs;
  }

  const usTrue = country == "US";
  const countryBase = showTrue ? flotAm.toFixed(2) : "0.00";
  const dasjwee = usTrue ? "$" + countryBase : adojwer();

  const nsdijfre = {
    obj: dasjwee,
    flex: true,
    ...sadf,
  };

  return <BearDiv {...nsdijfre} />;
}
