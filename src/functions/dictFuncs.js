import { turnarray } from "./arrayFuncs";
import * as logs from "./logFuncs";
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
  const asdrae = dictvar
    ? {
        listItemName: cxzvd,
        ...dictvar[cxzvd],
      }
    : cxzvd;

  return asdrae;
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

    logs.logga("___ mapDictAttrToString ___", { dfigjtr, ijfge, bifdre });

    return bifdre;
  }
  
  function sidjfer(asda) {
    const dfigjtr = dictvar && dictvar[asda];

    return turnarray(dfigjtr).map(sigjt);
  }

  const okasasd = listvar.map(sidjfer);
  const ofkew = joinString(okasasd, join);

  logs.logga("___ mapDictAttrToString ___", {
    ATTR_LIST: listvar,
    DICT: dictvar,
    ARRAY: okasasd,
    JOINED: ofkew,
  });

  return ofkew;
}

export function removeEmptyDict(obj) {
  // obj = JSON.parse(JSON.stringify(obj));
  // // listArray = _.pickBy(listArray, _.identity);

  // for (var propName in obj) {
  //   if (obj[propName] === null || obj[propName] === undefined) {
  //     delete obj[propName];
  //   }
  // }

  // return obj;
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
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
    logs.logga("___ createNewDictFromAttr aaaa ___", oksae);
    oksae[wewq[attr]] = wewq;
    logs.logga("___ createNewDictFromAttr BBBB ___", oksae);
  });

  logs.logga("___ createNewDictFromAttr END ___", oksae);

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

    logs.logga("___ convertObjDict ORIG ___", ijadew);

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

  logs.logga("___ convertObjectDict ___", oaskdew);

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
