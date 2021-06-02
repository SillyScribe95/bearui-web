export function CurrencyMain(count = "US", amount, ijfwew) {
  const flotAm = parseFloat(amount);
  const showTrue = flotAm > 0;

  function adojwer() {
    var ccvar = require("iso-country-currency");

    const kawe = ccvar.getAllInfoByISO(count);
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
        <Flex>
          {ijfwew}
          {kawe.symbol}
          {amono}
        </Flex>
      </>
    );

    return ijasdw;
  }

  const usTrue = count == "US";
  const countBase = showTrue ? flotAm.toFixed(2) : "0.00";
  const dasjwee = usTrue ? "$" + countBase : adojwer();

  return dasjwee;
}