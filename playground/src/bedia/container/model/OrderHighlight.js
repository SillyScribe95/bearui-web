// import React, {
//   //
//   useState,
//   useContext,
// } from "react";
// import { logs } from "bearui-web"

// import { SiTwitter } from "react-icons/si";

// import BearDiv from "../components/BearDiv";

// // import ListSocial from "./ListSocial";

// import { PlayContext } from "../contexts/PlayContext";
// import { MainContext } from "../contexts/MainContext";
// import ModelObject from "../containers/ModelObject";
// import {
//   getLinkPlay,
//   getshareLink,
//   joinString,
//   highEditLink,
//   setGlobalSource,
//   timeDecim,
//   WrapQuotes,
//   //
// } from "../functions/GlobalFunctions";
// import BearFloat from "../components/BearFloat";
// import UserMain from "../components/user/UserMain";
// import { isEmpty } from "lodash";
// import { checkSameHigh } from "../functions/highlight/highlightFuncs";

// export default function ModelHighlight({
//   obj,
//   //   noBefore
//   beforeText,
//   addTrue,
//   numberVar,
//   playFunc,
//   afterText,
//   noPlay,
//   addFunc,
//   media,
//   index,
//   nameFunc,
//   editTrue,
//   indexTrue,
//   ...asfew
// }) {
//   const { focusHighlight, currHighlight, setcurrHighlight } = useContext(
//     MainContext
//   );
//   const { changePlayerTime } = useContext(PlayContext);

//   const combineString = joinString([
//     //
//     beforeText,
//     obj?.name,
//     afterText,
//   ]);

//   const descroppo = obj["description"];
//   const combineLink = descroppo
//     ? joinString([descroppo, " '", combineString, "'"])
//     : combineString;

//   const nameos = (
//     <>
//       {combineString}
//       {/* {beforeText}
//       {obj["name"]}
//       {afterText} */}
//     </>
//   );

//   // 1name
//   const oasaow = {
//     obj: nameFunc ? nameFunc(nameos) : nameos,
//     // style: { padding: "0 10px" },
//     // className: "bold",
//   };

//   const sdfewra = {
//     obj: timeDecim(obj["duration"]),
//     style: { fontSize: "0.8em" },
//   };

//   const vbfdgf = obj["index"];
//   // "2";

//   const fhetw = {
//     obj: vbfdgf,
//     // badgeTrue: true,
//     className: "italics",
//     // bediaTrue: true,
//     style: {
//       // color: "darkblue",
//       fontSize: "1.3em",
//       borderRadius: "50%",
//     },
//   };

//   const BadgeGoHere = indexTrue && <BearDiv {...fhetw} />;

//   const asidje = (
//     <>
//       {/* <Badge colorScheme="purple">{vbfdgf}</Badge> */}
//       {/* {BadgeGoHere} */}
//       <BearDiv {...sdfewra} />
//     </>
//   );

//   const sjewewij =
//     //
//     "";
//   // "No description"

//   const isdjf = obj.description ? obj.description : sjewewij;

//   // 1descr
//   const descrCon = {
//     obj: isdjf,
//     // className: " wrapTrue",
//     style: { fontSize: "0.8em" },
//   };

//   const kmaons = obj.keyQuote;
//   const keyoQuo = {
//     obj: kmaons,
//     className: "italics",
//     style: { marginTop: "-10px", fontSize: "0.6em" },
//   };

//   const rightisa = {
//     obj: asidje,
//   };

//   const saijwe = <BearDiv {...rightisa} />;

//   const isjde = {
//     marginBottom: "15px",
//   };

//   const idsfer = kmaons && <WrapQuotes {...keyoQuo} />;
//   const ijdsse = {
//     obj: (
//       <>
//         <BearDiv {...oasaow} />
//         {idsfer}
//       </>
//     ),
//     style: isjde,
//   };

//   const centros = (
//     <>
//       {/* <BearDiv {...keyoQuo} /> */}
//       {/* <hr /> */}
//       <BearDiv {...ijdsse} />
//       {/* <hr /> */}
//       <BearDiv {...descrCon} />
//     </>
//   );

//   function changeHighOva(dsafew) {
//     let ioosamehg = checkSameHigh(dsafew, currHighlight);

//     let bfdgifd = {
//       obj: dsafew,
//       SAME_HIGH: ioosamehg,
//     };

//     logs.logga("___ baseHghSet AAA ___", bfdgifd);

//     let sadwqwe =
//       //
//       // true;
//       ioosamehg;

//     if (sadwqwe) {
//       // setcurrStartTime(dsafew.startTime);
//       changePlayerTime(dsafew.startTime);
//     } else {
//       setcurrHighlight(dsafew);
//       // changeHighWatch(dsafew, currenUser);
//       // if (asd9ewq) {
//       //   setwatchHighlight(dsafew);
//       //   asd9ewq(dsafew);
//       //   // asd9ewq(dsafew);
//       // }
//     }
//   }

//   function waije() {
//     let adsfker = obj;
//     logs.logga("___ ModelHighlights clickTop___", adsfker);

//     if (!noPlay) {
//       changeHighOva(adsfker);
//     }
//   }

//   const mediso = obj["media"]?.mediaFileLink;

//   const timeViddod =
//     //
//     getLinkPlay(mediso, obj["startTime"], obj["endTime"]);

//   function Listosa() {
//     //

//     const asdijwe = {
//       link: timeViddod,
//       textvar: sajdae,
//     };

//     const sdowe =
//       //
//       "";
//     // <ListSocial {...asdijwe} />;

//     return sdowe;
//   }

//   // <Listosa />

//   const cnmfoe = [
//     //
//     "edit",
//     "tweet",
//     // "play",
//     "remove",
//   ];

//   //

//   const mainFaceo = [
//     //
//     "rating",
//     // edit"
//   ];

//   const awsaew = editTrue ? mainFaceo : cnmfoe;

//   const asidjwe = [
//     //
//     "twitter",
//     "linkedin",
//   ];

//   const adweew = {
//     // list: awsaew,
//     dictvar: ijweqw,
//   };

//   const nsijasd = highEditLink(obj);

//   logs.logga("___ nsijasd ___", nsijasd);

//   function sdijsde() {
//     focusHighlight(obj);
//   }

//   const saawe = {
//     mainConfig: {
//       onClick: waije,
//     },
//     obj: obj,
//     typevar: "highlight",
//     buttonConfig: adweew,
//     ...asfew,
//     // noButton: true,
//     // editConfig:
//     editFunc: sdijsde,
//     editLink: nsijasd,
//     // editBefore: "/edit/" + media.slugURL + "/highlights",
//     // editAfter: obj.id,
//     shareConfig: {
//       shareText: sajdae,
//     },
//   };

//   logs.logga("___ Highlight - OrrObject ___", saawe);

//   const ijwaewe = (
//     <>
//       {/* asdkweq */}
//       {/* {asudwe} */}

//       <ModelObject {...saawe} />
//     </>
//   );

//   return ijwaewe;
// }
