import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../index";
import { BearModalWarning } from "./modal/BearModalWarning";
import { BearDiv } from "../components/BearDiv";

// export function BearSelfNote() {
//   const ijsde = "";
//   return BearNotification();
// }
// export function BearErrNote(zcivjds, asdf = {}) {
//   const ijsde = BearError(zcivjds);
//   asdf["error"] = true;

//   return BearNotification(ijsde, asdf);
// }

export function BearWarnDelete({ onDelete, children, warnMessage, ...args }) {
  const nsidjfs =
    //
    // true;
    "";

  const [warnTrue, setwarnTrue] = useState(nsidjfs);
  const idjv =
    //
    // true;
    warnTrue;

  function Modska() {
    const sidjfewr = {
      open: idjv,
      message: warnMessage,
      confirmConfig: {
        textvar: "Delete",
        background: "red",
        color: "white",
      },
      onConfirm: onDelete,
      onCancel: () => setwarnTrue(),
    };

    return BearModalWarning(sidjfewr);
  }

  const ijsdfer = {
    onClick: () => setwarnTrue(true),
  };

  const sidjfer =
    //
    // idjv
    "";

  const zxcmsd = sidjfer ? (
    Modska()
  ) : (
    <>
      {/* EXAMPLE TEXT  */}
      <Modska />
      <BearDiv {...ijsdfer}>{children}</BearDiv>
    </>
  );

  return zxcmsd;
}

// // 1back 1forward
// export function Exmapl(dataVar) {
//     const skdfsa = {
//       height: "",
//     };

//     const vndfga =
//       //
//       // "plus";
//       "back";

//     const cvkbfg = {
//       onClick: () => setNewDraft(),
//       iconvar: vndfga,
//       textvar: jnvsdfsa,
//       iconConfig: {
//         //
//         className: "buttonHover expandHover",
//       },
//     };

//     const sjdfsr = [
//       //
//       <BearTextMedia {...cvkbfg} />,
//     ];

//     const sijfsr = {
//       list: sjdfsr,
//     };
//     const nbcvsdzx = BearFlex(sijfsr);

//     const zxcmsd = (
//       <>
//         {/* EXAMPLE TEXT  */}
//         {nbcvsdzx}
//       </>
//     );

//     const kmxvs = {
//       obj: zxcmsd,
//       style: skdfsa,
//     };

//     return <BearDiv {...kmxvs} />;
//   }

// 1search
export function BearSearch(sfkr) {
  //
  return BearSearchList(sfkr);
}
