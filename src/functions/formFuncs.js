import { BearDiv, bearlog } from "..";
import { BearErrMiss } from "../components/ErrorComps";
import { BearFormSetup } from "../components/form/BearFormSetup";
import { BearInputBase } from "../components/input/BearInputBase";

export function focusBase({
  //
  list,
  dictvar,
  focusInput,
  onFocus,
}) {
  const kvdsf =
    //
    focusInput;

  bearlog.lug("___ focusBase ___", {
    //
    kvdsf,
  });

  if (kvdsf) {
    onFocus(kvdsf);
  }
}

// 1submit
// export function formSubmit(){
// //
// }

export function BearFormList({ inputList, horizList, ...jdfsd }) {
  //

  const sijewer = inputList || horizList;
  //
  function sdjfwer() {
    function cvlbk({ label, ...dfewer }) {
      const isdjfre = !label && {
        noLabel: true,
      };
      const dfjsds = {
        ...jdfsd,
        ...isdjfre,
        ...dfewer,
        label,
      };

      bearlog.lug("___ dfjsds ___", dfjsds);

      const sidjer =
        //
        // sdfok(dfjsds);
        BearFormList(dfjsds);

      return sidjer;
    }

    const jdfwea =
      //
      // "oksdfer";
      sijewer.map(cvlbk);

    const fbjdfg = horizList && {
      flex: true,
      vertAlign: true,
    };

    const ijdfges = (
      <>
        {/* <BearList {...dijfgtr} /> */}
        {/* <Flex> */}
        {/* <BearFloat {...args} /> */}
        <BearDiv {...fbjdfg}>{jdfwea}</BearDiv>
        {/* </Flex> */}
      </>
    );

    return BearInputBase(ijdfges, jdfsd);
  }

  const ijfgase = sijewer ? sdjfwer() : firstInputCheck(jdfsd);

  return ijfgase;
}

export function firstInputCheck({ addTrue, noName, inputItem, ...baseObj }) {
  //
  const nameeo = baseObj.name;

  bearlog.lug(nameeo, "___BeaForm firstInputeck ___", {
    baseObj: baseObj,
    NAME: nameeo,
  });

  const ijsre = noName
    ? {
        //
        // noLabel: true,
      }
    : {
        name: inputItem,
        // inputItem
      };

  const isjdfe = {
    ...baseObj,
    // ...ijsre,
  };

  // 1name
  const okwaew =
    //
    // "oskdfwerw"
    noName
      ? BearFormSetup(isjdfe)
      : nameeo
      ? BearFormSetup(isjdfe)
      : BearErrMiss("name", baseObj.bearName + "'s input elementk");

  return okwaew;
}
