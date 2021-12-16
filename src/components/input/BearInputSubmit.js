import { BearForm, bearlog } from "../..";

export function BearInputSubmit({ 
  // 
  formConfig,
  onSubmit,
  focusInitial,
  ...dfdsf 
  }) {
  //
  
  function difjsda(asdfa) {
    if (onSubmit) {
      onSubmit(asdfa);
    }
  }
  
  const ijasqwe = focusInitial && {
    focusInput: "base",
  }

  const dfobker = {
    dictvar: {
      base: {
        noLabel: true,
        //   noLabel: true,
        ...dfdsf,
      },
    },
    list: ["base"],
  }

  const frmotest = BearForm({
    noButton: true,
    sameLine: true,
    bearName: "asdfasd",
    formid: "xzcvcxz",
    onSubmit: asdwe,
    ...ijasqwe,
    // singleTrue: true,
    ...dfobker,
    ...formConfig,
  });

  function asdwe(fadsfs) {
    bearlog.lug("___ fadsfs ___", fadsfs);
    xcads(fadsfs);
  }

  function xcads({ itemName, bearName, ...doksad }) {
    let sdifje = Object.values(doksad);
    bearlog.lug("___ doksad ___", { doksad, sdifje });
    sdifje = sdifje[0];
    difjsda(sdifje);
  }

  return frmotest;
}
