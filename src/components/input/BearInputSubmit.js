import { BearForm, bearlog } from "../..";

export function BearInputSubmit({ onSubmit, ...dfdsf }) {
  //
  function difjsda(asdfa) {
    if (onSubmit) {
      onSubmit(asdfa);
    }
  }

  const frmotest = BearForm({
    noButton: true,
    bearName: "asdfasd",
    formid: "xzcvcxz",
    onSubmit: asdwe,
    // singleTrue: true,
    dictvar: {
      input: {
        noLabel: true,
        //   noLabel: true,
        ...dfdsf,
      },
    },
    list: ["input"],
  });

  function asdwe(fadsfs) {
    bearlog.log("___ fadsfs ___", fadsfs);
    xcads(fadsfs);
  }

  function xcads({ itemName, bearName, ...doksad }) {
    let sdifje = Object.values(doksad);
    bearlog.log("___ doksad ___", { doksad, sdifje });
    sdifje = sdifje[0];

    difjsda(sdifje);
  }

  return frmotest;
}
