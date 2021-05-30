//
//
//
//
import {
  //
  logs,
  joinString,
} from "@SillyScribe95/bedia-shared";

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
  linkvar,
  linkBase,
  linkConnect,
  textConnect,
}) {
  linkvar = encodeURIComponent(linkvar);
  const twitTure = typevar == "twitter";
  const noLink = twitTure;
  const showLink =
    //
    !noLink && linkConnect;

  let tnstFinal =
    //
    twitTure ? textvar + " " + linkvar : textvar;

  tnstFinal = encodeURIComponent(tnstFinal);

  let linkeo =
    //
    linkvar;
  // encodeURIComponent(linkvar)

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
