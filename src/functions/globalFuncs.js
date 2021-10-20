//
//
//
//
import { bearlog } from "../index";

export function slugFunc(sdrsdfe, asdok = "") {
  var slugify = require("slugify");

  let iuhiij =
    //
    // "";
    // sdrsdfe;
    slugify(sdrsdfe, asdok);

  return iuhiij;
}

export function getSlugName(sdrsdfe) {
  return slugFunc(sdrsdfe);
}

export function getType(sdrsdfe) {
  let arrtrue = Array.isArray(sdrsdfe);
  const getto = arrtrue ? "array" : typeof sdrsdfe;

  return getto;
}

export function linkOrdse({
  //
  typevar,
  textvar,
  link,
  linkBase,
  linkConnect,
  textConnect,
}) {
  link = encodeURIComponent(link);
  const twitTure = typevar == "twitter";
  const noLink = twitTure;
  const showLink =
    //
    !noLink && linkConnect;

  let tnstFinal =
    //
    twitTure ? textvar + " " + link : textvar;

  tnstFinal = encodeURIComponent(tnstFinal);

  let linkeo =
    //
    link;
  // encodeURIComponent(link)

  const bsaeio =
    showLink &&
    joinString(
      [
        //
        linkConnect,
        linkeo,
      ],
      "="
    );

  const txtooeio =
    textConnect &&
    joinString(
      [
        //
        textConnect,
        tnstFinal,
      ],
      "="
    );

  const ihjtt = [
    //

    txtooeio,
    bsaeio,
  ];
  const linksiw = joinString(ihjtt, "&");

  // const okasew = linkBase

  const sadije = joinString([
    //
    linkBase,
    "?",
    linksiw,
  ]);

  const didsfe =
    //
    sadije;
  // encodeURIComponent(sadije);

  bearlog.lug("___ linkOrdse-zzz ___", didsfe);

  return didsfe;
}

// 1onchange
export function onChangeFunc(inputAtts, { onChange, onChangeValue }) {
  //
  // const ikasae

  const valueMain = inputAtts.target.value;

  bearlog.lug("___ onChangeFunc ___", valueMain, {
    valueMain,
    inputAtts,
    onChange,
    onChangeValue,
  });

  if (onChangeValue) {
    onChangeValue(valueMain);
  }

  if (onChange) {
    onChange(inputAtts);
  }
}

export function EXAMPLE(sfkr, oskdfr) {
  //
  // const ikasae
  return sfkr + "___" + oskdfr;
}
// 1function

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export function sortBy(list, func) {
  // const sortBy = (key) => {
  //   return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  // };

  // The native sort modifies the array in place. `_.orderBy` and `_.sortBy` do not, so we use `.concat()` to
  // copy the array, then sort.
  return list.concat().sort(func);
}

export const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

export function remove(array, filterMethod) {
  return array.filter(function () {
    return !filterMethod.apply(this, arguments);
  });
}
