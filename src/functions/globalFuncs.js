//
//
//
//
import { logs } from "../index";

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

  logs.logga("___ linkOrdse-zzz ___", didsfe);

  return didsfe;
}

// 1onchange
export function onChangeFunc(inputAtts, { onChange, onChangeValue }) {
  //
  // const ikasae

  const valueMain = inputAtts.target.value;

  logs.logga("___ onChangeFunc ___", valueMain, {
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
