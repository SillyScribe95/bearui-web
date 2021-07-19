// import React, {
//     //
//     useState,
//     useContext,
//   } from "react";
//   import axios from "axios";

//   import { useQuery } from "react-query";
//   import { MainContext } from "../../contexts/MainContext";
//   import { AuthContext } from "../../contexts/AuthContext";

//   import { BearDiv  } from "../../components/BearDiv";

//   import BearList from "../../components/BearList";
//   import BearSelect from "../../components/BearSelect";
//   import ImageTextDiv from "../../components/ImageTextDiv";
//   import BearTextMedia from "../../components/BearTextMedia";
//   import { mapInnerAttr, slugFunc } from "../../functions/GlobalFunctions";

//   export default function SearchKnowledge({
//     //
//     typevar = "wikipedia",
//     chooseFunc,
//     createIndex,
//     includeImage,
//     resultConfig,
//     ...args
//   }) {
//     //
//     includeImage = "y";

//     // 1context
//     const { aaaaaa } = useContext(MainContext);
//     const { userObj } = useContext(AuthContext);

//     const saodkwe =
//       //
//       "";
//     // "elon musk";
//     // "taylor swift"

//     // logs.logga(
//     //   "TEST EXMAPLE",
//     //   createNewDictFromAttr(
//     //     [
//     //       {
//     //         id: "Elon_Musk",
//     //         name: "Elon Musk",
//     //         wikiID: "909036",
//     //       },
//     //     ],
//     //     "id"
//     //   )
//     // );

//     // 1const
//     const [InpTexto, setInpTexto] = useState();
//     const [adfa, setoptios] = useState();

//     const optios = checkFullArray(adfa) && adfa;
//     const adqew = optios && mapInnerAttr(optios, "wikiID");

//     // 1query

//     function doneItme(asdwqe) {
//       let arrios =
//         //
//         mapInnerAttr(asdwqe, "wikiID");

//       const anyLeft = removeArrayArray(optios, arrios, "wikiID");
//     }

//     function onCreat(okweqq) {
//       logs.logga("___ CREAT TOPIC ___", okweqq);

//       let oksaew = checkFullArray(okweqq) && createIndex;

//       // if (oksaew) {
//       //   CreateTopic(okweqq, userObj);
//       // }
//     }

//     function aseowqe(asdwqe) {
//       let arrios = mapInnerAttr(asdwqe, "id");
//       const setById = optios && createNewDictFromAttr(optios, "id");
//       let withoutInners = removeKeyList(setById, arrios);
//       const anyLeft = mapDictVals(withoutInners);
//       const anleftleng = checkFullArray(anyLeft);

//       const saokdwe = {
//         ALL_OPTIONSS: optios,
//         ID_DICT: setById,
//         FOUND_OPTION: asdwqe,
//         arrios: arrios,
//         anyLeft: anyLeft,
//         anleftleng: anleftleng,
//       };

//       if (anleftleng) {
//         onCreat(anyLeft);
//       }

//       logs.logga("___ asdwqe ___", saokdwe);
//     }

//     const asokdae = {
//       funcvar: aseowqe,
//     };

//     const { ...modelFinitos } =
//       //
//       "";
//     // filtModelin(indexTopic, "wikiID", adqew, asokdae);

//     //   1limit
//     const limVaro =
//       //
//       // 1;
//       // 10;
//       2;

//     // 1google
//     let googlLink = "https://kgsearch.googleapis.com/v1/entities:search";
//     function getGoogLink() {
//       const googleApiKey =
//         //
//         // "";
//         "AIzaSyA9TnNyVDuilrsSdYIy9zxv_2B3XLjCVG4";

//       const iawes = {
//         // query: InpTexto,
//         query: "Facebook",
//         limit: limVaro,
//         //   indent: true,
//         key: googleApiKey,
//         // types: "Person",
//       };

//       logs.logga("___SEARCH getGooleLink ___", iawes);

//       return iawes;
//     }

//     // 1wikipedia
//     let wikoaslw = "https://en.wikipedia.org/w/api.php";
//     function getWikiLink(searcho) {
//       // exintro&explaintext&

//       const sadesdf =
//         //
//         //   "";
//         //   "imageinfo";
//         //   "pageimages";
//         "extracts|pageimages";
//       // "pageimages|info|extracts";
//       // pithumbsize: 400,
//       // exlimit: "max",

//       const sdfuhwq = {
//         piprop: "thumbnail",
//         //   piprop: "original",
//         pithumbsize: 600,
//         exsentences: 1,
//       };

//       logs.logga("___ getWikiLink SEARCH   ___", InpTexto);

//       return {
//         format: "json",
//         generator: "search",
//         action: "query",
//         gsrnamespace: 0,
//         gsrlimit: limVaro,
//         origin: "*",
//         gsrsearch: searcho,
//         //   titles: searcho,
//         //
//         // IMAGE
//         inprop: "url",
//         prop: sadesdf,
//         exintro: true,
//         explaintext: true,
//         //   redirects: 1,
//         ...sdfuhwq,
//       };
//     }

//     // 1link
//     let initFunit = "";
//     let retFuncit = "";
//     let service_url = "";
//     //

//     switch (typevar) {
//       case "google":
//         initFunit = getGoogLink;
//         retFuncit = returnGoogle;
//         service_url = googlLink;

//         break;

//       case "wikipedia":
//         initFunit = getWikiLink;
//         retFuncit = returnWiki;
//         service_url = wikoaslw;

//         break;
//     }

//     function asokdwe(adsf) {
//       return retFuncit(adsf.data);
//     }

//     async function baseKNow() {
//       let ijsad =
//         "https://kgsearch.googleapis.com/v1/entities:search?query=taylor+swift&key=AIzaSyA9TnNyVDuilrsSdYIy9zxv_2B3XLjCVG4&limit=1&indent=True";

//       // let adsfr

//       const vxeew = {
//         params: getGoogLink(),
//       };

//       let aksdsd =
//         //
//         // googlLink
//         ijsad;
//       // service_url

//       return await axios
//         // .get(aksdsd)
//         .get(aksdsd, vxeew)
//         .then(asokdwe);
//     }

//     async function getKnow(searchvar) {
//       const sadijwe =
//         //
//         searchvar;
//       //   type;

//       let odkaew = initFunit(sadijwe);

//       const vxeew = {
//         params: odkaew,
//       };

//       const adwqe = {
//         SEARCH: searchvar,
//         // LINK: service_url,
//         // ...ijasew,
//         // ...vxeew
//       };

//       logs.logga(typevar + "___ gentKnow ___", adwqe);

//       return await axios.get(service_url, vxeew).then(asokdwe).catch(console.log);
//     }

//     //
//     // 1select return
//     function selectRend({ imageAttr, name, ...asww }) {
//       const cbjdigr = {
//         imageAttr: imageAttr,
//         name: name,
//         ...asww,
//       };

//       let sdokfer = {
//         style: {
//           fontSize: "27px",
//         },
//       };

//       const daease = {
//         imagevar: imageAttr,
//         textvar: name,
//         imagesize: 35,
//         // ...sdokfer,
//         ...resultConfig,
//       };

//       const fdgorr =
//         //
//         includeImage ? <BearTextMedia {...daease} /> : name;

//       const asjwaswe = (
//         <>
//           {/*  */}
//           {/* {name} */}
//           {fdgorr}
//           {/* <ImageTextDiv {...daease} /> */}
//         </>
//       );

//       const dsoqw = {
//         value: cbjdigr,
//         label: asjwaswe,
//         // label: name,
//       };

//       logs.logga("___ Kowled OBJECT ___", dsoqw);

//       return dsoqw;
//     }

//     // 1google RETURN
//     function googItem({ name, image, ...asdwe }) {
//       const ijisae = {
//         type: asdwe["@type"],
//         googleID: asdwe["@id"],
//         name: name,
//         imageAttr: image,
//       };

//       logs.logga("___ gooItem ___", ijisae);

//       return selectRend(ijisae);
//     }

//     function returnGoogle({ itemListElement, ...asew }) {
//       logs.logga("___ retuGoogle ___", asew);

//       function saie(adsfwr) {
//         let ksad = adsfwr.result;
//         return googItem(ksad);
//       }

//       const asdeq = itemListElement.map(saie);

//       return asdeq;
//     }

//     //   1wiki RETURN
//     function wikItem({ thumbnail, title, pageid, ...asdw }) {
//       //
//       const daease = {
//         imageAttr: thumbnail?.source,
//         name: title,
//         wikiID: pageid.toString(),
//         id: slugFunc(title, "_"),
//       };

//       logs.logga("___ WIKIPEDI AOTHER ___", asdw);
//       logs.logga("___ wikItem ___", daease);

//       return selectRend(daease);
//     }

//     function returnWiki(cxzvfd) {
//       const asduw =
//         //
//         cxzvfd?.query?.pages;

//       const sidwq =
//         //
//         asduw && //
//         //   Object.values(asduw);
//         Object.values(asduw).map(wikItem);

//       logs.logga(typevar + "___ retRsult ___", sidwq);

//       return sidwq;
//     }

//     function asdiwe(adwq) {
//       let mdsao =
//         //
//         adwq;
//       //   adwq.target.value;

//       // logs.logga("Search=---", mdsao);

//       setInpTexto(adwq);
//     }

//     const ofew =
//       //
//       // cvbff
//       optios;

//     function changeoos({ value, isNew, ...sde }) {
//       const xvuew = {
//         name: isNew && value,
//         ...value,
//       };

//       return xvuew;
//     }

//     //
//     // 1create

//     function chooesi(vxcob) {
//       //
//       //
//       const endRes = vxcob.map(changeoos);

//       const asoke = {
//         LIST: endRes,
//         createIndex: createIndex,
//       };

//       logs.logga("___ searcKnowl ONHANGE ___", asoke);

//       setoptios(endRes);
//       // onCreat(endRes);
//       chooseFunc(endRes);
//     }

//     function changeos(aewqe) {
//       logs.logga("___ OHANGE KOWLEDGE ___", aewqe);

//       chooesi(aewqe);
//     }

//     // 1create
//     function vduwr9(bdfg) {
//       //
//     }

//     const creaFinso = {
//       // onCreate: vduwr9,
//     };

//     const asdyw = {
//       // isDisabled: true,
//       //
//       // cacheOptions: true,
//       typevar: "async",
//       // options: ofew,
//       placeholder: InpTexto,
//       ...args,
//       onInputChange: asdiwe,
//       onChange: changeos,
//       // onChange: asdiwe,
//       loadOptions: getKnow,
//       noValueReturn: true,
//       // createTop: true,
//       // EMPTY
//     };

//     // 1console

//     logs.logga("___ modelFinitos ___", {
//       optios: optios,
//       modelFinitos: modelFinitos,
//     });

//     logs.logga("___ SEAR KNowledge MAIN ___", asdyw);

//     const xcvear = <BearSelect {...asdyw} />;

//     return xcvear;
//   }
