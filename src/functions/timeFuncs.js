import moment from "moment";
import * as logs from "./logFuncs";

export function durationParser(inputTime, formatType = "h[h] m[m]") {
  // finalForm = moment.duration(inputTime).format("h[hrs] m[min] s[sec]");
  var momentDurationFormatSetup = require("moment-duration-format");

  const ijge = {
    inputTime: inputTime,
    formatType: formatType,
  };

  logs.logga("___ ijge ___", ijge);

  const timeDicto = {
    hms: "h:*mm:ss",
    sfp: "s",
    ms: "m[m] s[s]",
    hm: "h[h] m[m]",
    // decimal: "mm m ss s",
    hms: "h:*mm:ss",
  };

  const bvnfdgd =
    //
    // "";
    moment.duration(inputTime, "seconds");

  const formios =
    //
    formatType ? timeDicto[formatType] : formatType;
  // timeDicto[formatType]

  const finalForm =
    //
    // "";
    bvnfdgd.format(formios);

  const cvlmbfddsf = {
    MOMENTED: bvnfdgd,
    TYP: formios,
    finalForm: finalForm,
  };

  logs.logga("___ cvlmbfddsf ___", cvlmbfddsf);

  return finalForm;
}

export const iajew = "h:mm:ss";
const asdokass = "mm m ss s";
export function timeDecim(minuteva) {
  // let endinqqqq = durationParser(minuteva, iajew);

  function goins() {
    const inneioa = minuteva < 1;
    const hjrdfft = inneioa ? "0:00" : durationParser(minuteva, iajew);

    return hjrdfft;
  }

  let endinqqqq = minuteva > 0 ? goins() : "0:00";

  return endinqqqq;
}
