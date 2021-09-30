import { filter, isEmpty, remove } from "lodash";
import { checkDict, objectTrue } from "./dictFuncs";
import { bearlog } from "../index";
import { sortBy } from "lodash";

export function moveItemFront(listo, itemo) {
  const jsdas = sortBy(listo, ({ type }) => (type === itemo ? 0 : 1));

  return jsdas;
}

export function getFirstArr(dataVar) {
  dataVar = turnarray(dataVar)[0];

  return dataVar;
}

export function turnarray(arrVary) {
  const checkArr = Array.isArray(arrVary) ? arrVary : [arrVary];
  return checkArr;
}

export function mapFuncDict(arrVar, funcVar, dictvar) {
  function hereo(obj, indexvar) {
    const obrar = dictvar ? dictvar[obj] : obj;

    const vkbmdfs =
      //
      // "opkcwqe";
      funcVar ? funcVar(obrar) : obrar;

    return vkbmdfs;
  }
  //

  const asudjwe =
    //
    // "asodkaewqe";
    arrVar.map(hereo);

  return asudjwe;
}

export function mapListDict(arrvar, dictvar) {
  return mapFuncDict(arrvar, "", dictvar);
}

export function mapFunc(arrVar, funcVar, dictvar) {
  if (Array.isArray(arrVar)) {
    return removeEmptyArray(arrVar).map(hereo);
  } else {
    return hereo(arrVar);
  }
  function hereo(obj, indexvar) {
    const obrar =
      //
      // obj;
      dictvar ? dictvar[obj] : obj;

    const ijadw = {
      indexvar: indexvar,
      ...obrar,
    };

    bearlog.lug("___ ijadw ___", ijadw);

    const vkbmdfs =
      //
      // "opkcwqe";
      funcVar ? funcVar(obj) : ijadw;

    return vkbmdfs;
  }
  //
}

// movearray
export function moveItemArray(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

export function getEnchancedArray(arrayeo, numVar = 0, endNum) {
  //

  const oskew = getLength(arrayeo);

  function sakdwe({ indexvar, ...obj }) {
    //

    const nextNumo = indexvar + 1;
    const okacve = indexvar < oskew;

    const nexitos =
      //
      // "";
      okacve ? arrayeo[nextNumo] : "";

    const ladsa = {
      // indexvar,
      nextItem: nexitos,
      ...obj,
    };

    bearlog.lug("___ geEnchas ITEM ___", ladsa);

    return ladsa;
  }

  const odsfr =
    //
    mapFunc(arrayeo, sakdwe);

  return odsfr;
}

export function checkLenArray(dataVar, numVar = 0, endNum) {
  dataVar = getLength(dataVar) == numVar;
  return dataVar;
}

export function checkEmptyArray(arr) {
  arr = turnarray(arr).length < 1;

  return arr;
}

export function removeEmptyArray(arr) {
  const sofksd = turnarray(arr).filter((item) => item);

  return sofksd;
}

export function addArray(obj, array) {
  array.push(obj);
  return array;
}

export function addArrayNumber(array) {
  const endNum = array.reduce((a, b) => a + b, 0);
  return endNum;
}

export function getLength(arr) {
  arr = turnarray(arr).length;

  return arr;
}

export function removeItemArray(...asdf) {
  return removeArray(...asdf);
}

export function removeArray(array, obj, attr) {
  //   _.remove(obj.subTopics, {
  //     subTopicId: stToDelete
  // });

  function baseRem(currentObject) {
    let asweas =
      //
      attr ? currentObject[attr] != obj : currentObject != obj;

    bearlog.lug("removArra - BASE FUNCTION", {
      obj: obj,
      attr: attr,
      currentObject: currentObject,
      asweas: asweas,
    });

    return asweas;
  }

  let okdsasd = filter(array, baseRem);

  // remove(

  // pushArr = new Sugar.Array(pushArr);
  // // pushArr = new gens.Sugar.Array(pushArr);
  // pushArr.remove(function (el) {
  //   //
  // });

  // const index = array.indexOf(obj);
  // if (index > -1) {
  //   array.splice(index, 1);
  // }t

  const oksadew = {
    array: array,
    obj: obj,
    attr: attr,
    FINAL_obj: okdsasd,
  };

  bearlog.lug("___ REMOVARRAY ___", oksadew);

  return okdsasd;
}

export function filterDictArray(myArr, sdofkewr) {
  const okada = filter(myArr, sdofkewr);

  return okada;
}

export function mapSelectEnd(odsfe, asdfer) {
  let sdore = asdfer && {
    [odsfe]: mapValue(asdfer),
  };

  bearlog.lug("___ sdore ___", sdore);

  return sdore;
}

// 1map

export function mapDictMain(listo, dicto) {
  const asokew = mapFunc();
}

export function mapInnerJoin(arrVar, attrVar, connectVar) {
  var prevSpeak = "";
  connectVar = connectVar ? connectVar : " ";

  return mapFunc(arrVar, (linearray) => linearray[attrVar]).join(connectVar);
}

export function mapInnerAttr(arrVar, attrVar) {
  const aijdwq = [];
  const enaso = mapFunc(arrVar, (linearray) => linearray[attrVar]);
  // aijdwq.push(linearray[attrVar]));

  const aodjw = {
    arrVar: arrVar,
    attrVar: attrVar,
    aijdwq: aijdwq,
    enaso: enaso,
  };
  // bearlog.lug("mapInnerAttr-zzz", aodjw);

  return enaso;
}

export function mapValue(arrBig) {
  return arrBig && arrBig.map((asdae) => asdae.value);
}

// 1map mapDict
export function mipBase(dictvar) {
  const dfokg = new Set();

  for (const [key, value] of Object.entries(dictvar)) {
    const xcbsfd = objectTrue(value) && Object.keys(value);

    if (xcbsfd) {
      xcbsfd.map((sfwew) => dfokg.add(sfwew));
    }
  }

  return Array.from(dfokg);
}

export function getListAll(arrvar, { dictvar }) {
  return dictvar ? mipBase(dictvar) : arrvar;
}

export function mapReturn(arrBig, arrSmall) {
  return arrBig && arrBig.map(arrSmall);
}

export function sliceArray(arrBig, limmo) {
  return arrBig.slice(0, limmo);
}

export function removeArrayArray(arrBig, arrSmall, ...sawe) {
  let arBiggo = [];
  //
  //
  function plusSpace(obj, indexvar) {
    bearlog.lug("___ asdwqe ___", {
      indexvar: indexvar,
      obj: obj,
    });

    let saase = removeArray(arrBig, obj, ...sawe);

    arBiggo = checkFullArray(saase) ? [...arBiggo, ...saase] : arBiggo;

    bearlog.lug("removArrFunc", {
      ARR_ITEM: obj,
      ORIG_ARRAY: arBiggo,
      OBJECT: saase,
      NEW_ARRA: arBiggo,
    });

    return arBiggo;
  }

  bearlog.lug("___ removeArrayArray AAA ___", {
    arrSmall: arrSmall,
    arrBig: arrBig,
  });

  const fullo = checkFullArray(arrSmall) ? arrSmall.map(plusSpace) : arrBig;

  bearlog.lug("___ removeArrayArray bbbb ___", {
    arrSmall: arrSmall,
    fullo: fullo,
    arBiggo: arBiggo,
    // arrBig:arrBig,
  });

  return fullo;
}

export function moveItemToFront(arrBig, item) {
  let okasdw = removeArray(arrBig, item);
  okasdw.unshift(item);

  return okasdw;
}

export function checkFullArray(arrBig, arrSmall) {
  let okasdw = !isEmpty(removeEmptyArray(arrBig));

  return okasdw;
}

export function stringinarray(stirngo, arreo) {
  let okasdw =
    //
    arreo.includes(stirngo);

  // includes(col,go);

  return okasdw;
}

export function checkAllArray(arr, item) {
  return arr && arr.every((dsf) => dsf === item);
}

export function addRemoveArray(pushArr, obj, attrVar) {
  //   pushArr = turnarray(pushArr);
  //   const dicto = findArrayTrue(pushArr, obj, attrVar);
  //   // const dicto = findArrayAttr(pushArr, obj, attrVar);

  //   bearlog.bearlog.lug("pushArr-zzz", pushArr, "2193e1h2");
  //   bearlog.bearlog.lug("dicto-zzz", dicto, "2193e1h2");

  //   if (dicto > -1) {
  //     _.remove(pushArr, function (el) {
  //       return attrVar ? el[attrVar] === obj : el === obj;
  //     });
  //     // pushArr = removeArray(obj, pushArr, attrVar);
  //   } else {
  //     pushArr.push(obj);
  //   }

  return pushArr;
}

export function mapArrFunc(arrfunc, funco) {
  var vallo = "";

  bearlog.lug("___ arrfunc, funco ___", { arrfunc, funco });

  for (var i = 0; i < arrfunc.length; i++) {
    const ITEMO = arrfunc[i];
    const ITEMAFTERFUNC = funco(ITEMO);

    bearlog.lug("___ nsdifwer ___", { ITEMO, ITEMAFTERFUNC });

    if (ITEMAFTERFUNC) {
      vallo = ITEMAFTERFUNC;
      break;
    }
  }

  return vallo;
}
