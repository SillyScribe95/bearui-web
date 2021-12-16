import { turnarray } from "./arrayFuncs";
import { getType } from "./globalFuncs";
import { bearlog } from "./logFuncs";
import { joinString } from "./stringFuncs";

export function turnDict(dictvar) {
  return Object.entries(dictvar);
}

export function objectTrue(dictvar) {
  return typeof dictvar == "object";
}

// 1match
export function matchDictAttr(vlbdf, string, attr) {
  for (const [key, value] of Object.entries(vlbdf)) {
    const ndifvd = attr ? value[attr] : value;
    if (ndifvd == string) {
      return value;
      break;
    }
  }
}

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

export function checkDict(dictvar, cxzvd) {
  const endit = dictvar[cxzvd]
  let asdrae;
  switch (typeof cxzvd) {
    case "object":
      asdrae = cxzvd;
      break;
    case "string":
       switch (typeof endit) {
        case "object":
          asdrae = {
            listItemName: cxzvd,
            ...endit,
          };
        break;
        case "string":
          asdrae = {
            listItemName: endit,
          }
        break;
       }
      break;
  }

  return asdrae;
}

// 1attr
export function getDictvalues(dict, attr = "value") {
  let obj = {};
  for (const [key, value] of Object.entries(dict)) {
    let inVal = "";
    const sderase = getType(value);
    bearlog.lug("getDictvalues TYPEODF-zzz", { value, sderase });

    switch (sderase) {
      case "array":
        inVal = value.map((sdofr) => sdofr[attr]);
        break;
      case "object":
        inVal = value[attr];
        break;
      default:
        inVal = value;
    }
    obj[key] = inVal;
  }

  return obj;
}

export function mapDictAttr(obj, dictvar) {
  for (const [key, value] of Object.entries(dictvar)) {
    obj[key] = value;
  }

  return obj;
}

export function mapDictNew(dictvar, nqeo) {
  const iase = {};
  for (const [key, value] of Object.entries(dictvar)) {
    const sdoeae = {
      ...value,
      ...nqeo,
    };
    iase[key] = sdoeae;
  }

  return iase;
}

export function mapDictAttrToString(listvar, join, dictvar) {
  //
  function sigjt(dfigjtr) {
    const ijfge = typeof dfigjtr == "string";
    const bifdre = ijfge ? dfigjtr : "";

    bearlog.lug("___ mapDictAttrToString ___", { dfigjtr, ijfge, bifdre });

    return bifdre;
  }

  function sidjfer(asda) {
    const dfigjtr = dictvar && dictvar[asda];

    return turnarray(dfigjtr).map(sigjt);
  }

  const okasasd = listvar.map(sidjfer);
  const ofkew = joinString(okasasd, join);

  bearlog.lug("___ mapDictAttrToString ___", {
    ATTR_LIST: listvar,
    DICT: dictvar,
    ARRAY: okasasd,
    JOINED: ofkew,
  });

  return ofkew;
}

export function mergeDict(values, formData) {
  bearlog.lug("vlaos-sbmit--AAAA", values);

  const jease =
    //
    // values;
    removeEmptyDict(values);

  bearlog.lug("vlaos-sbmit--BBBB", jease);

  const nisjd = {
    ...formData,
    ...jease,
  };

  bearlog.lug("vlaos-sbmit--CCCC", nisjd);

  return nisjd;
}

// 1removeempty
export function removeEmptyDict(zxcvlsdf) {
  //
  bearlog.lug("remoEmptyDict-aaaa", zxcvlsdf);
  const sdfer =
    //
    // zxcvlsdf;
    Object.fromEntries(Object.entries(zxcvlsdf).filter(bestRem));

  function bestRem(...zxcok) {
    bearlog.lug("bestRem-zzz", ...zxcok);
    return cvbos(...zxcok);
  }

  function cvbos([_, v]) {
    return v;
  }

  bearlog.lug("remoEmptyDict-bbbb", sdfer);

  return sdfer;
}

export function removeKeyDict(params, itemo) {
  delete params[itemo];
  // omit(params, itemo)

  return params;
}

export function removeKeyList(parmas, listo) {
  listo.map(function (wewq) {
    parmas = removeKeyDict(parmas, wewq);
  });

  return parmas;
}

export function mapDictVals(dictvar) {
  const toksaew = [];
  for (const [key, value] of Object.entries(dictvar)) {
    toksaew.push(value);
  }

  return toksaew;
}

export function mapDictKey(dictvar) {
  const toksaew = [];
  for (const [key, value] of Object.entries(dictvar)) {
    toksaew.push(key);
  }

  return toksaew;
}

// 1map

export function mapDictFunc(dictvar, dictfunc) {
  const ijsdase = {};
  for (const [key, value] of Object.entries(dictvar)) {
    ijsdase[key] = dictfunc(value);
  }

  return ijsdase;
}

export function mapDictKeyToValue(dict, attr) {
  const sdjfer = {};

  for (const [key, value] of Object.entries(dict)) {
    const jsfer = {
      [attr]: key,
      ...value,
    };

    sdjfer[key] = jsfer;
  }

  return sdjfer;
}

export function createNewDictFromAttr(arrvar, attr) {
  var oksae = {};
  arrvar.map(function (wewq) {
    bearlog.lug("___ createNewDictFromAttr aaaa ___", oksae);
    oksae[wewq[attr]] = wewq;
    bearlog.lug("___ createNewDictFromAttr BBBB ___", oksae);
  });

  bearlog.lug("___ createNewDictFromAttr END ___", oksae);

  return oksae;
}

export function convertObjectDict(obj) {
  function odkaeww(key) {
    let okdsa = {
      [key]: obj[key],
    };

    const ijadew = {
      key: key,
      obj: obj,
      okdsa: okdsa,
    };

    bearlog.lug("___ convertObjDict ORIG ___", ijadew);

    return okdsa;
  }

  let iase = Object.keys(obj);
  let oaksde = iase.map(odkaeww);

  let oaskdew = {
    //

    ORIGINAL: obj,
    KEYS: iase,
    FINAL: oaksde,
  };

  bearlog.lug("___ convertObjectDict ___", oaskdew);

  //   aodks
  return oaksde;
}

// export function mapDictFunc(dictvar, dictfunc) {
//   const ijsdase = {};
//   for (const [key, value] of Object.entries(dictvar)) {
//     ijsdase[key] = dictfunc(value);
//   }

//   return ijsdase;
// }
