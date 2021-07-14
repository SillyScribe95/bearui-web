


export function getAnyDictValue(vlbdf) {
  if (vlbdf) {
    for (const [key, value] of Object.entries(vlbdf)) {
      if (!value) {
        return key;
      } else {
        // return false;
      }
    }
  }
}

export function objectTrue(dictvar) {
  return typeof dictvar == "object";
}
