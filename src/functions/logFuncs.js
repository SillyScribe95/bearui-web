// import * as logs from "../functions/logFuncs"

import prettyFormat from "pretty-format";

function lug(...sdf) {
  // bearlog.lug(messageIt, valY);
}

function log(...sdf) {
  luggo(...sdf);
}

function lugga(messageIt, valY) {
  // bearlog.lug(messageIt, valY);
}

function luggo(...asw) {
  // console.log("luggo--", ...asw);
  console.log("🐻 bearlog loggo: ", ...asw);
  // baseLog(asw)

  // bearlog.lug('bearlog.lug:', bearlog.lug)
}

function lugCheck(name, first, ...asw) {
  const asuhw =
    //
    name == first;

  //
  if (asuhw) {
    luggo(...asw);
  }
}

function baseLog(o) {
  const arro = Array.isArray(o);
  const obkjo = typeof o === "object";

  const doTable =
    //
    arro || obkjo;

  // console.log("luggo--aaaa", {
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

function lugge(...sdf) {
  luggo(...sdf);
  // bearlog.lug('bearlog.lug:', bearlog.lug)
}

function laggu(...sdf) {
  // luggo(...sdf)
}

function lugJSON(messageIt, valY, ...asw) {
  let sodase =
    //
    // JSON.stringify(valY)
    prettyFormat(valY);

  console.log("luggo--", messageIt, sodase, ...asw);
  // bearlog.lug('bearlog.lug:', bearlog.lug)
}

function logga(messageIt, valY) {
  //
}

function lugLines(nubfd) {
  let saodkwe = "-";
  for (let i = 0; i < nubfd; i++) {
    saodkwe += "-";
    luggo(saodkwe);
  }
}

function lugLinas(...sdf) {
  // luggo(...sdf)
}

export const bearlog = {
  log,
  lug,
  laggu,
  lugga,
  lugge,
  lugJSON,
  lugLines,
  lugLinas,
  lugCheck,
};
