// import * as logs from "../functions/logFuncs"

import prettyFormat from "pretty-format";

export function logga(messageIt, valY) {
  // logs.logga(messageIt, valY);
}

export function loggo(...asw) {
  // console.log("loggo--", ...asw);
  console.log("loggo--", ...asw);
  // baseLog(asw)

  // logs.logga('logs.logga:', logs.logga)
}

export function logCheck(name, first, ...asw) {
  const asuhw =
    //
    name == first;

  //
  if (asuhw) {
    loggo(...asw);
  }
}

function baseLog(o) {
  const arro = Array.isArray(o);
  const obkjo = typeof o === "object";

  const doTable =
    //
    arro || obkjo;

  // console.log("loggo--aaaa", {
  //   o: o,
  //   doTable: doTable,
  // })
  console.log(o);

  // if (doTable){
  //   console.table(o)
  // } else {
  //   console.log(o)
  // }
}

export function logge(...sdf) {
  loggo(...sdf);
  // logs.logga('logs.logga:', logs.logga)
}

export function loggu(...sdf) {
  // loggo(...sdf)
}

export function logJSON(messageIt, valY, ...asw) {
  let sodase =
    //
    // JSON.stringify(valY)
    prettyFormat(valY);

  console.log("loggo--", messageIt, sodase, ...asw);
  // logs.logga('logs.logga:', logs.logga)
}

//   export function logga(messageIt, valY) {
//     logs.logga(messageIt, valY);
//   }

export function logLines(nubfd) {
  let saodkwe = "-";
  for (let i = 0; i < nubfd; i++) {
    saodkwe += "-";
    loggo(saodkwe);
  }
}

export function logLinas(...sdf) {
  // loggo(...sdf)
}
