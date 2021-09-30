import { removeEmptyArray, turnarray } from "./arrayFuncs";

export function spaceSurround(stringVar) {
  // eeeeee
  return " " + stringVar + " ";
}

export function quoteSurround(stringVar) {
  // eeeeee
  return "'" + stringVar + "'";
}

export function joinString(arrayo, strngo = "", first = "") {
  arrayo = removeEmptyArray(arrayo);
  const okasd = arrayo ? arrayo.join(strngo) : "";

  return okasd;
}

export const getExtString = (sdfweq) => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(sdfweq)[1];

  return ext;
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeLower(str) {
  let sdre = str.toLowerCase().replace(/\s/g, "");

  return sdre;
}
