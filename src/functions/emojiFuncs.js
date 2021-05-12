// import * as logs from "../functions/logFuncs";
// import { mapReturn } from "@todcode/components";
import { emojiDict } from "../consts/emojiConst";

function getEMoj(asofkr) {
  let side = emojiDict[asofkr]?.emoji;
  side = side ? side : "";

  return side;
}

export function mapEmojiFace(listvar) {
  const iewase = listvar && listvar.map(getEMoj);
  return iewase;
}

function mainRet(cxsd) {
  const aijew = emojiDict[cxsd];
  const oiajew = `${aijew["emoji"]} ${aijew["textvar"]} `;

  let oaksde = {
    DICT: emojiDict,
    inits: cxsd,
    LABEL: oiajew,
  };

  logs.logga("___ emojilist--mainRet ___", oaksde);

  return oiajew;
}

export function labelMoj(cxsd) {
  const xcokvse = {
    value: cxsd,
    label: mainRet(cxsd),
  };

  return xcokvse;
}

export function EmojiLabelMap(cxsd) {
  let sd9fwq = cxsd.map(labelMoj);

  logs.logga("___ EmojiLabelMap ___", sd9fwq);

  return sd9fwq;
}

export function emojiNameString({ name, id, emoji, ...asa }) {
  const iewase =
    //
    // getEMoj(emoji)
    mapEmojiFace(emoji);

  let naemiw = iewase ? `${iewase}    ${name}` : name;

  const aesdse = {
    value: id,
    label: naemiw,
  };

  return aesdse;
}