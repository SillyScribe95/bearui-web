import React, {
  //
  useState,
  useContext,
} from "react";
import { BearDiv } from "../BearDiv";
import CurrencyConverter from 'react-currency-conv';

export function BearCurrency(amount, { country = "US", ...sadf }) {
  const flotAm = parseFloat(amount);
  const showTrue = flotAm > 0;

  function adojwer() {
    var ccvar = require("iso-country-currency");
    const kawe = ccvar.getAllInfoByISO(country);
    const ijadwe = kawe.currency;

    return ijadwe;
  }

  

  const usTrue = country == "US";
  const countryBase = 
  // 
  ""
  // showTrue ? adojwer()
  
  const dasjwee = 
  // 
  ""
  // CurrencyConverter(sdfease)
  // usTrue ? "$" + countryBase : adojwer();

  return dasjwee
}
