// import React, {
//     //
//     useState,
//     useContext,
//   } from "react";
//   import { logs } from "@SillyScribe95/bedia-shared/";
//   import BearFloat from "./BearFloat";
//   import Divo from "./Divo";
//   import BearButton from "./BearButton";

//   export default function BearStep({
//     //
//     obj,
//     backFunc,
//     disVar,
//     arrVar,
//     textTrue,
//     forwardFunc,
//     disBack,
//     betweenObj,
//     disForward,
//     hideBack,
//     hideForward,
//     genConfig,
//     backConfig,
//     forwardConfig,
//     buttonConfig = {},
//     ...argssdf
//   }) {
//     // 1const
//     const endLeftfsa = {
//       iconvar: "left",
//       obj: textTrue ? "Back" : "⬅",
//       onClick: backFunc,
//       bediaTrue: true,
//       // disVar: disBack,
//       ...backConfig,
//     };

//     const endRighto = {
//       iconvar: "right",
//       obj: textTrue ? "Next" : "",
//       onClick: forwardFunc,
//       // disVar: disForward,
//       ...forwardConfig,
//     };

//     function saaoekwq(oskwe) {
//       const ijawe = {
//         //   className: gens.butClass,
//       };

//       const zdsdar = {
//         ...oskwe,
//         ...ijawe,
//         ...buttonConfig,
//       };

//       const uajwe = (
//         //
//         <BearButton {...zdsdar} />
//         // <ImageTextDiv {...endRighto} />;
//         // <Divo {...zdsdar} />
//       );

//       return uajwe;
//     }

//     const xcijsdf =
//       //
//       // "okasdwqe";
//       !hideBack && saaoekwq(endLeftfsa);

//     const dfgkmre =
//       //
//       // "sadokqwe";
//       !hideForward && saaoekwq(endRighto);
//     // {<Divo {...centerConfig} obj={obj} />}

//     const uawhe = {
//       leftobj: xcijsdf,
//       centerobj: betweenObj,
//       rightobj: dfgkmre,
//       ...argssdf,
//     };

//     logs.logga("___ backforward BASE ___", uawhe);

//     const ijwqeq = (
//       <>
//         <BearFloat
//           //
//           noVertAlign
//           // nowap
//           listTrue
//           {...uawhe}
//         />
//         {obj}
//       </>
//     );

//     const dfbire = {
//       obj: ijwqeq,
//       ...genConfig,
//     };

//     return <Divo {...dfbire} />;
//   }