import { mapFunc } from "./arrayFuncs";
import { checkDict } from "./dictFuncs";
import { bearlog } from "./logFuncs";

export function mapSelectValue(
  arrBig,
  { dictvar, labelFunc, valueFunc, isDisabled, ...sdas }
) {
  //
  function asijdwe(asdae) {
    const ndsire =
      //
      // asdae
      checkDict(dictvar, asdae);

    const sidjf =
      //
      // asdae
      ndsire;

    let sakde = {
      label: labelFunc ? labelFunc(sidjf) : asdae,
      value: valueFunc ? valueFunc(ndsire) : asdae,
      isDisabled,
    };

    bearlog.lug("___ brSeacrch MAPPO ___", {
      asdae: asdae,
      sakde: sakde,
      // dictvar: dictvar,
    });

    return sakde;
  }

  bearlog.lug("___ brSeacrch LIST ___", {
    arrBig: arrBig,
    dictvar: dictvar,
  });

  const dretjer = arrBig.map(asijdwe);

  return dretjer;
}
