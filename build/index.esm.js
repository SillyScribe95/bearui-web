import prettyFormat from 'pretty-format';
import { sortBy, filter, isEmpty, remove, chunk } from 'lodash';
import React, { useState } from 'react';
import { Spacer, Checkbox, ChakraProvider, Modal, Textarea, InputGroup, InputLeftElement, InputRightElement, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import { MdArrowBack, MdArrowForward, MdPlaylistPlay } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';
import { BiExpand, BiShare, BiEditAlt, BiCommentDetail } from 'react-icons/bi';
import { BsChatQuote } from 'react-icons/bs';
import 'react-icons/io';
import { SiTwitter, SiReddit, SiYcombinator, SiLinkedin, SiGoogle, SiWhatsapp, SiFacebook, SiMicrosoftteams, SiSlack, SiNotion } from 'react-icons/si';
import { AiOutlinePlus, AiOutlineInfoCircle, AiOutlineCloseCircle, AiFillDelete, AiOutlineLink, AiOutlineSearch, AiOutlineMail, AiOutlineCopy } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { RiTimerLine } from 'react-icons/ri';
import { FaCopy, FaCheck, FaSignOutAlt, FaPlay, FaQuoteLeft, FaQuoteRight, FaCode } from 'react-icons/fa';
import { Controller, useForm } from 'react-hook-form';
import ResizeTextarea from 'react-textarea-autosize';
import { passwordStrength } from 'check-password-strength';
import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import 'yup';
import { Flex as Flex$1 } from '@chakra-ui/layout';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import '..';
import { createButton, GoogleLoginButton, InstagramLoginButton, FacebookLoginButton, GithubLoginButton, AppleLoginButton, TwitterLoginButton, LinkedInLoginButton, MicrosoftLoginButton, DiscordLoginButton } from 'react-social-login-buttons';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".item.selected{background:#177779;color:#fff;border-color:#206748}.lp-copy-sel__option,.lp-copy-sel__single-value{white-space:pre-wrap!important}.vidobbo::-webkit-scrollbar{display:none}.fadeOut{opacity:0;width:0;height:0;transition:width .5s .5s,height .5s .5s,opacity .5s}.fadeIn{opacity:1;width:100px;height:100px;transition:width .5s,height .5s,opacity .5s .5s}.noresize{resize:none}.vidobbo{-ms-overflow-style:none}.ant-btn-clicked:after,[ant-click-animating-without-extra-node]:after{-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;-ms-animation:none!important;animation:none!important}.ais-InstantSearch__root{display:flex;border:1px solid grey}.btn:hover{opacity:1}.selectHov:hover{background:green}.selectHov{transition:.3s}.selectHov:hover{background:red}.hoverMain{position:relative}.hoverMain.no-hover:hover{opacity:1}.hoverMain.no-hover{opacity:0}.hoverMain.hover{opacity:1}.hoverMain.hover:hover{opacity:0}.wrapQuotes:before{content:\"❝\"}.wrapQuotes:after{content:\"❞\"}.playText:hover{cursor:pointer}.playTextLight:hover{background-color:#e5e5e5;cursor:pointer}.playTextDark:hover{color:#00f;cursor:pointer}.playCurrent{background-color:purple}.ant-list-item{padding:0}.iconNum{padding:0 1px}.vertCont{align-items:center}.vertAlign,.vertBox{display:flex;align-items:center}.vertAlign{justify-content:\"center\";vertical-align:middle}.vertTop{display:flex;align-items:top;vertical-align:top}.lineBetween:after{content:\"\";height:100%;border-right:1px solid #d3d3d3}.nowap{white-space:nowap;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.wrap{-webkit-line-clamp:1}.wrap,.wrapTwo{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.wrapTwo{-webkit-line-clamp:2}.hiddenTrue{display:none;display:block}.hideSect{display:hidden}.scrollTrue{overflow:scroll}.overflow-scrolling{overflow:auto;-webkit-overflow-scrolling:touch}.pulseTrue{cursor:pointer;border:3px solid transparent;transition:.3s}.pulseTrue:hover{border:3px solid #add8e6}.greyHover,.pointer:hover{cursor:pointer}.greyHover:hover{cursor:pointer;background:radial-gradient(circle,#fff 0,hsla(0,0%,60.4%,.2) 100%,#fff 0)}.circleHover,.circleHover:hover{border-radius:50%;padding:5px}.shadowBottom{box-shadow:inset 0 4px 2px -2px grey}.lighthover{transition:.1s}.lightHover:hover{cursor:pointer;border:2px solid #00164d}.sdfaszxc{opacity:.8;padding-left:5px;transition:.1s}.sdfaszxc:hover{cursor:pointer;opacity:1}.buttonBase{background-color:initial;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:none}.buttonHover,.buttonMain{cursor:pointer;border-radius:5px;border:2px solid transparent;transition:.1s;padding:2px 5px}.buttonHover:hover{border:2px solid #2c4179}.borderRound{border:2px solid #00008b;border-radius:5px}.borderHover,.borderMain{border:2px solid #d3d3d3;transition:.1s;border-radius:5px}.error{color:red}.error,.titleMain{font-weight:700}.shadowMain{border:2px solid #d3d3d3;transition:.1s;border-radius:5px}.bordeViddo{background:#000;border:2px solid #fff}.darkenBehind{text-shadow:0 0 10px #00f}.darkenOver{background:linear-gradient(180deg,transparent 0,#000)}.speakSelect{background:#add8e6;border:2px solid #00008b;transition:.3s}.buttonselect{border:15px solid red}.transitMain{transition:background-color 1s linear;-webkit-transition:background-color 1s linear;transition:color .3s linear;-webkit-transition:color .3s linear}.popAnim{-webkit-transition:color .25s;transition:color .25s}.popAnim:after,.popAnim:before{border:2px solid transparent;width:0;height:0}.popAnim:before{top:0;left:0}.popAnim:after{bottom:0;right:0}.popAnim:hover{color:#60daaa}.popAnim:hover:after,.popAnim:hover:before{width:100%;height:100%}.popAnim:hover:before{border-top-color:#60daaa;border-right-color:#60daaa;-webkit-transition:width .25s ease-out,height .25s ease-out .25s;transition:width .25s ease-out,height .25s ease-out .25s}.popAnim:hover:after{border-bottom-color:#60daaa;border-left-color:#60daaa;-webkit-transition:border-color 0s ease-out .5s,width .25s ease-out .5s,height .25s ease-out .75s;transition:border-color 0s ease-out .5s,width .25s ease-out .5s,height .25s ease-out .75s}.backMain{background-color:#f3f3f3}.flashBox{border:2px solid transparent}.flashBox:hover{border-color:red;animation-name:flash_border;animation-duration:2s;animation-timing-function:linear;animation-iteration-count:infinite;-webkit-animation-name:flash_border;-webkit-animation-duration:2s;-webkit-animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-name:flash_border;-moz-animation-duration:2s;-moz-animation-timing-function:linear;-moz-animation-iteration-count:infinite}@keyframes flash_border{0%{border-color:transparent}50%{border-color:#00f}to{border-color:transparent}}.linkPlush{font-weight:10;color:#fff}.linkPlush:hover{text-decoration:underline}.linkPlush:active{color:#add8e6}.hoverPointer{cursor:pointer}.selectMain{background:red}.selectMain:hover{background-color:#00f}.highText{color:red;border-radius:50px}.textpopup{background:#00f;transition:3s;transform:translateY(-100%)}.animate-bottom{-webkit-animation-name:animatebottom;-webkit-animation-duration:.5s;animation-name:animatebottom;animation-duration:.5s}@keyframes animatebottom{0%{bottom:-50;opacity:0}to{bottom:0;opacity:1}}.textpopup:hover{transform:translateY(0)}.highText:hover{background-color:rgba(0,22,77,.2)}.disabled:hover{cursor:not-allowed}.shadeBorder{border:2px}.shadeBorder:hover{border:2px solid #00f}.shadeDisable{opacity:.3}.shadeDisable:hover{cursor:not-allowed}.shadeTrue{opacity:.6}.hoverOpac:hover,.shadeTrue:hover{opacity:1}.shadeReverse{opacity:.3}.shadeReverse:hover{opacity:1}.whiteHover:hover{background:#fff;color:#00164d}.expandHover{transition:transform .2s}.expandHover:hover{transform:scale(1.1)}.slick-prev{left:3%!important}.slick-next{right:3%!important}";
styleInject(css_248z,{"insertAt":"top"});

// import * as logs from "../functions/logFuncs"
function logga(messageIt, valY) {// logs.logga(messageIt, valY);
}
function loggo(...asw) {
  // console.log("loggo--", ...asw);
  console.log("loggo--", ...asw); // baseLog(asw)
  // logs.logga('logs.logga:', logs.logga)
}
function logCheck(name, first, ...asw) {
  const asuhw = //
  name == first; //

  if (asuhw) {
    loggo(...asw);
  }
}

function logge(...sdf) {
  loggo(...sdf); // logs.logga('logs.logga:', logs.logga)
}
function loggu(...sdf) {// loggo(...sdf)
}
function logJSON(messageIt, valY, ...asw) {
  let sodase = //
  // JSON.stringify(valY)
  prettyFormat(valY);
  console.log("loggo--", messageIt, sodase, ...asw); // logs.logga('logs.logga:', logs.logga)
} //   export function logga(messageIt, valY) {
//     logs.logga(messageIt, valY);
//   }

function logLines(nubfd) {
  let saodkwe = "-";

  for (let i = 0; i < nubfd; i++) {
    saodkwe += "-";
    loggo(saodkwe);
  }
}
function logLinas(...sdf) {// loggo(...sdf)
}

var logFuncs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  logga: logga,
  loggo: loggo,
  logCheck: logCheck,
  logge: logge,
  loggu: loggu,
  logJSON: logJSON,
  logLines: logLines,
  logLinas: logLinas
});

function spaceSurround(stringVar) {
  // eeeeee
  return " " + stringVar + " ";
}
function quoteSurround(stringVar) {
  // eeeeee
  return "'" + stringVar + "'";
}
function joinString$1(arrayo, strngo = "", first = "") {
  arrayo = turnarray(arrayo);
  const okasd = arrayo ? arrayo.join(strngo) : "";
  return okasd;
}
const getExtString = sdfweq => {
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(sdfweq)[1];
  return ext;
};

function turnDict(dictvar) {
  return Object.entries(dictvar);
}
function objectTrue(dictvar) {
  return typeof dictvar == "object";
} // 1match

function matchDictAttr(vlbdf, string, attr) {
  for (const [key, value] of Object.entries(vlbdf)) {
    const ndifvd = attr ? value[attr] : value;

    if (ndifvd == string) {
      return value;
    }
  }
}
function getAnyDictValue(vlbdf) {
  if (vlbdf) {
    for (const [key, value] of Object.entries(vlbdf)) {
      if (!value) {
        return key;
      }
    }
  }
}
function checkDict(dictvar, cxzvd) {
  const asdrae = dictvar ? {
    listItemName: cxzvd,
    ...dictvar[cxzvd]
  } : cxzvd;
  return asdrae;
}
function mapDictAttr(obj, dictvar) {
  for (const [key, value] of Object.entries(dictvar)) {
    obj[key] = value;
  }

  return obj;
}
function mapDictNew(dictvar, nqeo) {
  const iase = {};

  for (const [key, value] of Object.entries(dictvar)) {
    const sdoeae = { ...value,
      ...nqeo
    };
    iase[key] = sdoeae;
  }

  return iase;
}
function mapDictAttrToString(listvar, join, dictvar) {
  //
  function sigjt(dfigjtr) {
    const ijfge = typeof dfigjtr == "string";
    const bifdre = ijfge ? dfigjtr : "";
    return bifdre;
  }

  function sidjfer(asda) {
    const dfigjtr = dictvar && dictvar[asda];
    return turnarray(dfigjtr).map(sigjt);
  }

  const okasasd = listvar.map(sidjfer);
  const ofkew = joinString$1(okasasd, join);
  return ofkew;
}
function removeEmptyDict(obj) {
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
function removeKeyDict(params, itemo) {
  delete params[itemo]; // omit(params, itemo)

  return params;
}
function removeKeyList(parmas, listo) {
  listo.map(function (wewq) {
    parmas = removeKeyDict(parmas, wewq);
  });
  return parmas;
}
function mapDictVals(dictvar) {
  const toksaew = [];

  for (const [key, value] of Object.entries(dictvar)) {
    toksaew.push(value);
  }

  return toksaew;
}
function mapDictKey(dictvar) {
  const toksaew = [];

  for (const [key, value] of Object.entries(dictvar)) {
    toksaew.push(key);
  }

  return toksaew;
} // 1map

function mapDictFunc(dictvar, dictfunc) {
  const ijsdase = {};

  for (const [key, value] of Object.entries(dictvar)) {
    ijsdase[key] = dictfunc(value);
  }

  return ijsdase;
}
function mapDictKeyToValue(dict, attr) {
  const sdjfer = {};

  for (const [key, value] of Object.entries(dict)) {
    const jsfer = {
      [attr]: key,
      ...value
    };
    sdjfer[key] = jsfer;
  }

  return sdjfer;
}
function createNewDictFromAttr(arrvar, attr) {
  var oksae = {};
  arrvar.map(function (wewq) {
    oksae[wewq[attr]] = wewq;
  });
  return oksae;
}
function convertObjectDict(obj) {
  function odkaeww(key) {
    let okdsa = {
      [key]: obj[key]
    };
    return okdsa;
  }

  let iase = Object.keys(obj);
  let oaksde = iase.map(odkaeww);

  return oaksde;
} // export function mapDictFunc(dictvar, dictfunc) {
//   const ijsdase = {};
//   for (const [key, value] of Object.entries(dictvar)) {
//     ijsdase[key] = dictfunc(value);
//   }
//   return ijsdase;
// }

function moveItemFront(listo, itemo) {
  const jsdas = sortBy(listo, ({
    type
  }) => type === itemo ? 0 : 1);
  return jsdas;
}
function getFirstArr(dataVar) {
  dataVar = turnarray(dataVar)[0];
  return dataVar;
}
function turnarray(arrVary) {
  const checkArr = Array.isArray(arrVary) ? arrVary : [arrVary];
  return checkArr;
}
function mapFuncDict(arrVar, funcVar, dictvar) {
  function hereo(obj, indexvar) {
    const obrar = dictvar ? dictvar[obj] : obj;
    const vkbmdfs = //
    // "opkcwqe";
    funcVar ? funcVar(obrar) : obrar;
    return vkbmdfs;
  } //


  const asudjwe = //
  // "asodkaewqe";
  arrVar.map(hereo);
  return asudjwe;
}
function mapListDict(arrvar, dictvar) {
  return mapFuncDict(arrvar, "", dictvar);
}
function mapFunc(arrVar, funcVar, dictvar) {
  function hereo(obj, indexvar) {
    const obrar = //
    obj; //  dictvar ? dictvar[obj] : obj;

    const ijadw = {
      indexvar: indexvar,
      ...obrar
    };
    const vkbmdfs = //
    // "opkcwqe";
    funcVar ? funcVar(obj) : ijadw;
    return vkbmdfs;
  } //


  const ndfigt = arrVar && removeEmptyArray(turnarray(arrVar));
  const asudjwe = //
  // "asodkaewqe";
  ndfigt && ndfigt.map(hereo);
  return asudjwe;
} // movearray

function moveItemArray(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;

    while (k--) {
      arr.push(undefined);
    }
  }

  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}
function getEnchancedArray(arrayeo, numVar = 0, endNum) {
  //
  const oskew = getLength(arrayeo);

  function sakdwe({
    indexvar,
    ...obj
  }) {
    //
    const nextNumo = indexvar + 1;
    const okacve = indexvar < oskew;
    const nexitos = //
    // "";
    okacve ? arrayeo[nextNumo] : "";
    const ladsa = {
      // indexvar,
      nextItem: nexitos,
      ...obj
    };
    return ladsa;
  }

  const odsfr = //
  mapFunc(arrayeo, sakdwe);
  return odsfr;
}
function checkLenArray(dataVar, numVar = 0, endNum) {
  dataVar = getLength(dataVar) == numVar;
  return dataVar;
}
function checkEmptyArray(arr) {
  arr = turnarray(arr).length < 1;
  return arr;
}
function removeEmptyArray(arr) {
  const sofksd = turnarray(arr).filter(item => item);
  return sofksd;
}
function addArray(obj, array) {
  array.push(obj);
  return array;
}
function addArrayNumber(array) {
  const endNum = array.reduce((a, b) => a + b, 0);
  return endNum;
}
function getLength(arr) {
  arr = turnarray(arr).length;
  return arr;
}
function removeItemArray(...asdf) {
  return removeArray(...asdf);
}
function removeArray(array, obj, attr) {
  //   _.remove(obj.subTopics, {
  //     subTopicId: stToDelete
  // });
  function baseRem(currentObject) {
    let asweas = //
    attr ? currentObject[attr] != obj : currentObject != obj;
    return asweas;
  }

  let okdsasd = filter(array, baseRem); // remove(
  return okdsasd;
}
function filterDictArray(myArr, sdofkewr) {
  const okada = filter(myArr, sdofkewr);
  return okada;
}
function mapSelectEnd(odsfe, asdfer) {
  let sdore = asdfer && {
    [odsfe]: mapValue(asdfer)
  };
  return sdore;
}
function mapSelectValue(arrBig, {
  dictvar,
  labelFunc,
  valueFunc,
  isDisabled,
  ...sdas
}) {
  //
  function asijdwe(asdae) {
    const ndsire = //
    // asdae
    checkDict(dictvar, asdae);
    const sidjf = //
    // asdae
    ndsire;
    let sakde = {
      label: labelFunc ? labelFunc(sidjf) : asdae,
      value: valueFunc ? valueFunc(ndsire) : asdae,
      isDisabled
    };
    return sakde;
  }
  const dretjer = mapFunc(arrBig, asijdwe);
  return dretjer;
} // 1map

function mapDictMain(listo, dicto) {
  mapFunc();
}
function mapInnerJoin(arrVar, attrVar, connectVar) {
  connectVar = connectVar ? connectVar : " ";
  return mapFunc(arrVar, linearray => linearray[attrVar]).join(connectVar);
}
function mapInnerAttr(arrVar, attrVar) {
  const enaso = mapFunc(arrVar, linearray => linearray[attrVar]); // aijdwq.push(linearray[attrVar]));

  return enaso;
}
function mapValue(arrBig) {
  return arrBig && arrBig.map(asdae => asdae.value);
} // 1map mapDict

function mipBase(dictvar) {
  const dfokg = new Set();

  for (const [key, value] of Object.entries(dictvar)) {
    const xcbsfd = objectTrue(value) && Object.keys(value);

    if (xcbsfd) {
      xcbsfd.map(sfwew => dfokg.add(sfwew));
    }
  }

  return Array.from(dfokg);
}
function getListAll(arrvar, {
  dictvar
}) {
  return dictvar ? mipBase(dictvar) : arrvar;
}
function mapReturn(arrBig, arrSmall) {
  return arrBig && arrBig.map(arrSmall);
}
function sliceArray(arrBig, limmo) {
  return arrBig.slice(0, limmo);
}
function removeArrayArray(arrBig, arrSmall, ...sawe) {
  let arBiggo = []; //
  //

  function plusSpace(obj, indexvar) {
    let saase = removeArray(arrBig, obj, ...sawe);
    arBiggo = checkFullArray(saase) ? [...arBiggo, ...saase] : arBiggo;
    return arBiggo;
  }
  const fullo = checkFullArray(arrSmall) ? arrSmall.map(plusSpace) : arrBig;
  return fullo;
}
function moveItemToFront(arrBig, item) {
  let okasdw = removeArray(arrBig, item);
  okasdw.unshift(item);
  return okasdw;
}
function checkFullArray(arrBig, arrSmall) {
  let okasdw = !isEmpty(removeEmptyArray(arrBig));
  return okasdw;
}
function stringinarray(stirngo, arreo) {
  let okasdw = //
  arreo.includes(stirngo); // includes(col,go);

  return okasdw;
}
function checkAllArray(arr, item) {
  return arr && arr.every(dsf => dsf === item);
}
function addRemoveArray(pushArr, obj, attrVar) {
  //   pushArr = turnarray(pushArr);
  //   const dicto = findArrayTrue(pushArr, obj, attrVar);
  //   // const dicto = findArrayAttr(pushArr, obj, attrVar);
  //   logs.logs.logga("pushArr-zzz", pushArr, "2193e1h2");
  //   logs.logs.logga("dicto-zzz", dicto, "2193e1h2");
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
function mapArrFunc(arrfunc, funco) {
  var vallo = "";

  for (var i = 0; i < arrfunc.length; i++) {
    const ITEMO = arrfunc[i];
    const ITEMAFTERFUNC = funco(ITEMO);

    if (ITEMAFTERFUNC) {
      vallo = ITEMAFTERFUNC;
      break;
    }
  }

  return vallo;
}

function BearLink$1({
  //
  outsideLink,
  blankTrue,
  linkParams,
  outsideTrue,
  hrefTrue,
  spaceTrue,
  hashTrue,
  homeTrue,
  disableNone,
  blackVar,
  // styleVar,
  target,
  disabled,
  toVar,
  linkConfig,
  link,
  blackTrue,
  linkTextTrue,
  textvar,
  obj,
  style,
  className,
  ...argso
}) {
  const nsdijfwer = linkParams ? "?" + turnDictLink(linkParams) : "";
  toVar = linkTextTrue && textvar ? textvar.toLowerCase() : hashTrue ? "#" + toVar : homeTrue ? "/" : toVar;
  toVar += nsdijfwer;
  const outBlank = outsideTrue || outsideLink || blankTrue;
  const noLink = disabled | !toVar;
  const sdjfwe = outBlank && {
    target: "_blank"
  };
  const aisdwq = { // target: "_blank",
    ...sdjfwe,
    href: toVar,
    to: toVar
  };

  function Rlasdow() {
    return outBlank ? /*#__PURE__*/React.createElement("a", aisdwq, textvar) :
    /*#__PURE__*/
    // <gens.StyledLink {...aisdwq}>{textPush}</gens.StyledLink>
    // <span {...idjfewr}>{textvar}</span>
    React.createElement("a", aisdwq, textvar) // <Link {...aisdwq}>{textPush}</Link>
    ;
  }

  return noLink ? textvar : /*#__PURE__*/React.createElement(Rlasdow, null);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const alignItemsFlex = //
// ""
// "flex-start";
// "space-between";
"center"; // "stretch";

const justifyContentFlex = //
// "";
"flex-start"; // "space-between";
// "center";
// "stretch";
// "space-around"
// "space-evenly";
// "flex-end";

const vertAlign = {
  alignItems: alignItemsFlex,
  justifyContent: justifyContentFlex // flexWrap: "wrap",
  // alignContent: alignContentFlex,

  /* vertical-align: middle; */

  /* width: 100%; */

  /* flex-direction: row; */

  /* flex-wrap: wrap; */

};

function BearFloat({
  //
  bearName,
  layoutType,
  verticalTrue,
  noVertTop,
  noPadding,
  alignTrue,
  //
  showRight,
  showLeft,
  disvar,
  noSpace,
  padding = 0,
  paddingVert = 0,
  paddingHorz = 0,
  //
  //
  topLeft,
  topLeftConfig = {},
  topRight,
  topRightConfig = {},
  bottom,
  bottomConfig = {},
  bottomLeft,
  bottomLeftConfig = {},
  bottomRight,
  bottomRightConfig = {},
  //
  //
  left,
  leftConfig = {},
  center,
  children,
  centerConfig = {},
  right,
  rightConfig = {},
  noVertAlign,
  logtrue,
  messvar,
  style,
  ...args
}) {
  const trueClass = //
  // "";
  "flex"; // noVertAlign ? (noVertTop ? "" : allPasow) : vertAlign;

  const jndf = {
    // paddingLeft: noPadding
    className: "float-left",
    p: "0 2",
    padding: "0 10px",
    marginRight: "auto"
  };
  const centros = {
    left: 0,
    right: 0,
    width: "100%",
    margin: "auto",
    textAlign: "center" // bottom: paddingVert,

  };
  let sasease = //
  // left;
  left || showLeft; // 1left

  const lefto = sasease && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", jndf, left), !noSpace && /*#__PURE__*/React.createElement(Spacer, null));
  const kdsdf = { ...centerConfig // style: { textAlign: "center", ...centerConfig.style },

  };
  const centio = /*#__PURE__*/React.createElement("div", kdsdf, center || children);
  const ijsad = {
    marginLeft: "auto",
    style: alignTrue && {
      textAlign: "right"
    },
    class: "float-right"
  }; // right
  const rightos = /*#__PURE__*/React.createElement(React.Fragment, null, !noSpace && /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement("div", ijsad, right)); // position: "absolute",

  function sfewr(itemo, {
    style,
    ...adsf
  }, ...were) {
    adsf = {
      style: {
        position: "absolute",
        ...style
      },
      ...adsf
    };
    return itemo && eqweew(itemo, adsf, ...were);
  }

  function eqweew(itemo, {
    style
  }, typoe) {
    const ijsdrw = { //
      // left={0}
      // bottom={0}
      // verticalAlign: "top",
      ...typoe,
      ...style
    };
    const asoke = {
      // align: typoe,
      style: ijsdrw,
      class: "flex-none"
    };
    const ijsdf = /*#__PURE__*/React.createElement(BearDiv$1, asoke, itemo);
    return ijsdf;
  }

  const sokwerr = /*#__PURE__*/React.createElement(React.Fragment, null, sfewr(topLeft, topLeftConfig, {
    top: paddingVert,
    left: paddingHorz
  }), sfewr(topRight, topRightConfig, {
    top: paddingVert,
    right: paddingHorz
  }), centio, sfewr(bottomLeft, bottomLeftConfig, {
    bottom: paddingVert,
    left: paddingHorz
  }), sfewr(bottom, bottomConfig, {
    // top: 0,
    bottom: 0,
    ...centros
  }), sfewr(bottomRight, bottomRightConfig, {
    bottom: paddingVert,
    right: paddingHorz
  }));
  const ksaewe = /*#__PURE__*/React.createElement(React.Fragment, null, lefto, sokwerr, rightos);
  let endValue = "";

  switch (layoutType) {
    case "vertical":
      endValue = ksaewe;
      break;

    default:
      const oesfdrtw = {
        flex: true,
        vertAlign: true,
        ...trueClass,
        obj: ksaewe
      };
      endValue = /*#__PURE__*/React.createElement(BearDiv$1, oesfdrtw);
  }

  const noSides = //
  // "";
  !left && !right;
  disvar = //
  disvar || noSides;
  const sdifjw = //
  disvar ? sokwerr : endValue; // oeqewq;

  const ijdsfe = {
    position: "relative",
    height: "100%",
    width: "100%",
    ...style
  };
  args = { ...args,
    style: ijdsfe,
    obj: sdifjw
  }; // topRight
  // return endValue;


  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

function BearButton({
  textConfig,
  genConfig,
  disabled,
  errorTrue,
  background,
  color,
  noBackground,
  style,
  obj,
  children,
  className,
  fontSize,
  longTrue,
  downloadLink,
  fullWidth,
  padvar,
  extStyle,
  bearName,
  buttonType,
  //
  // 1loading
  // isLoading,
  loading,
  loadClick,
  //
  //
  groupConfig,
  link,
  logtrue,
  //
  // 1onclick
  clickObj,
  onClick,
  //
  // background,
  divConfig,
  onlyText,
  typevar,
  ...arg
}) {
  // const asndiw = {
  //   order: {
  //     link: "/order",
  //     iconvar: "transcript",
  //     textvar: "Order Transcripts",
  //   },
  //   confirm: {
  //     textvar: "Confirm",
  //   },
  // };
  // textConfig = textConfig ? textConfig : asndiw[typevar];
  // const asdijwe = {
  //   font-weight: bold;
  //   height: 45px;
  //   padding: 2px 15px;
  //   border-radius: 5px;
  //   outline: none;
  //   background: #09d3ac;
  //   color: white;
  //   font-size: 14px;
  //   border: none;
  //   box-sizing: border-box;
  // }
  // 1const
  const [clickTrue, setclickTrue, loadRend, setloadRend] = ["", "", "", ""]; // const [clickTrue, setclickTrue] = useState();
  // const [loadRend, setloadRend] = useState();

  const sdfoer = errorTrue && {
    background: "red",
    color: "white"
  };
  const longeos = longTrue && {
    width: "200px"
  };
  const ijdase = {
    color: "white",
    background: "darkgreen",
    color,
    background
  };
  const baseoSt = {
    padding: "2px 10px",
    ...longeos // fontSize: "30px",
    // height: "50px",

  };
  const fdoewrw = padvar && {
    padding: padvar + " 0"
  };
  const kasew = fullWidth && {
    width: "100%"
  }; // 1style

  const baseStlas = {
    cursor: "pointer",
    fontSize,
    borderRadius: "5px",
    ...baseoSt,
    ...fdoewrw,
    ...sdfoer,
    ...ijdase,
    ...kasew,
    ...style,
    ...extStyle // padding: "500px",
    // fontSize: "50px",

  }; // "";
  // 1disable

  const dwesae = //
  // true;
  disabled; // 1classname

  const cllosk = //
  "buttonBase " + className; // "buttonHover shadowHover";
  //   gens.butClass;
  // gens.butClass + dwesae ? " disabled" : "";
  // 1onclick

  function asoke() {

    if (clickObj) {
      setclickTrue(!clickTrue);
    }

    if (loadClick) {
      setloadRend(true);
    }

    if (onClick) {
      onClick();
    }
  }

  const locvbfdr = loading || loadRend; // 1obj

  const asodkwe = locvbfdr ? "Loading..." : clickTrue ? clickObj : obj || children;
  const qy7eww = //
  asodkwe; // asodkwe ? asodkwe : "Confirm";

  const aisjqw = /*#__PURE__*/React.createElement(React.Fragment, null, qy7eww); // const xcvfdc = {
  //   borderRadius:
  //   ...style
  // }

  const sfasdokwe = {
    form: bearName,
    ...arg,
    onClick: asoke,
    style: baseStlas,
    className: cllosk,
    isDisabled: dwesae,
    disabled: dwesae // ...uahwe,

  }; // 1console

  function GroupBase({
    right,
    left,
    leftConfig,
    rightConfig,
    ...qwe
  }) {
    //   <Button {...rghtFunnp}>
    //     <div {...nsidjew}>{right}</div>{" "}
    //   </Button>
    // );

    const isadjwe = //
    ""; // (
    //   <ButtonGroup {...nidsfjer}>
    //     <Button {...sfasdokwe}>{aisjqw}</Button>
    //     {/* {nsdijs} */}
    //     {/* <Button mr="-px">Save</Button> */}
    //     {/* <IconButton icon={<TiEdit />} /> */}
    //   </ButtonGroup>
    // );

    return isadjwe;
  }

  const sfdsgwe = groupConfig ? /*#__PURE__*/React.createElement(GroupBase, groupConfig) : /*#__PURE__*/React.createElement("button", sfasdokwe, aisjqw) // <button {...sfasdokwe}>{aisjqw}</button>
  ;
  const jawewe = { ...arg,
    obj: sfdsgwe,
    link,
    ...divConfig
  };
  const asdgvwe = //
  BearDiv$1(jawewe); // sfdsgwe;
  // asdijew ? BearDiv(jawewe) : sfdsgwe;

  const pdska = downloadLink ? /*#__PURE__*/React.createElement("a", {
    href: downloadLink,
    download: true
  }, asdgvwe) : asdgvwe;
  return pdska;
}

function BearError(sdfjer, afijqwe = {}) {
  return BearErASDJIQWE(sdfjer, afijqwe);
}
function BearErASDJIQWE(asdfower, {
  bearName,
  hideError,
  ...asdd
}) {
  // 1const
  const ijsawe = asdfower && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), asdfower);
  const sidjfr = hideError && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), BearHideError(hideError, bearName));
  const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, "\uD83D\uDC3B ERROR", ijsawe, sidjfr, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
  const ijsad = {
    //
    // width: "100%",
    padding: "5px 20%",
    fontSize: "16px",
    margin: "20px",
    background: "darkred",
    color: "white",
    textAlign: "center",
    ...BearBorder("transparent", "5px"),
    ...(asdd && asdd.style)
  };
  const adkease = {
    // className: "buttonHover shadowHover bold",
    obj: okfdsd,
    ...asdd,
    style: ijsad
  };
  const okasew = /*#__PURE__*/React.createElement(BearDiv$1, adkease);
  return okasew;
}
function BearHideError(attr, name) {
  const isjdfre = /*#__PURE__*/React.createElement(React.Fragment, null, "To hide this error, set ", BearQuote(attr), " as true in ", BearQuote(name), "s", " ", "arguments.");
  return isjdfre;
} // export function BearErrMust(attr, name) {
//   const isjdfre = (
//     <>
//      {attr} attribute must be {name}
//     </>
//   );
//   return isjdfre;
// }

function BearIcon(sdfoger, sdfke) {
  // 1tick
  const lasew = {
    style: {
      // background: "green",
      color: "green" // ...sdfke,

    }
  };
  const okasdew =
  /*#__PURE__*/
  //
  // <TiTickOutline />
  React.createElement(FaCheck, lasew) // <AiOutlineCheckCircle {...lasew} />
  ; // 1signout

  const sduhfer =
  /*#__PURE__*/
  //
  React.createElement(FaSignOutAlt, null); // 1time

  const lasdew =
  /*#__PURE__*/
  //
  React.createElement(RiTimerLine, null) // <AiOutlineClockCircle />
  ; // 1info

  const jdfgrt =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineInfoCircle, null); // 1play

  const sfdgmr =
  /*#__PURE__*/
  //
  React.createElement(FaPlay, null); // 1playlist

  const asdkqe =
  /*#__PURE__*/
  //
  React.createElement(MdPlaylistPlay, null); // 1share

  const sjerw =
  /*#__PURE__*/
  //
  React.createElement(BiShare, null); // 1edit

  const sdiwer =
  /*#__PURE__*/
  //
  // <FiEdit2 />
  React.createElement(BiEditAlt, null) // <VscEdit />
  // <BiEdit />
  ; // 1star

  const dfigjew =
  /*#__PURE__*/
  //
  React.createElement(TiStar, null); // 1close

  const kxmvs =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineCloseCircle, null);
  const iosade =
  /*#__PURE__*/
  //
  React.createElement(FaQuoteLeft, null);
  const asdhgew =
  /*#__PURE__*/
  //
  React.createElement(FaQuoteRight, null); // 1quote

  const oksaew =
  /*#__PURE__*/
  //
  React.createElement(BsChatQuote, null); // 1comment

  const sowaseowq =
  /*#__PURE__*/
  //
  React.createElement(BiCommentDetail, null); // 1delete

  const asdfewr =
  /*#__PURE__*/
  //
  React.createElement(AiFillDelete, null); // 1link

  const linkios =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineLink, null) // <FiExternalLink />
  ; // 1search

  const sdfgorek =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineSearch, null) // < />
  ; // 1settings

  const sdijwqe =
  /*#__PURE__*/
  //
  React.createElement(FiSettings, null); // 1email

  const ijsfr =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineMail, null); // 1brands 1social

  const brandCons = {
    twitter: /*#__PURE__*/React.createElement(SiTwitter, null),
    reddit: /*#__PURE__*/React.createElement(SiReddit, null),
    ycombinator: /*#__PURE__*/React.createElement(SiYcombinator, null),
    linkedin: /*#__PURE__*/React.createElement(SiLinkedin, null),
    google: /*#__PURE__*/React.createElement(SiGoogle, null),
    whatsapp: /*#__PURE__*/React.createElement(SiWhatsapp, null),
    facebook: /*#__PURE__*/React.createElement(SiFacebook, null),
    teams: /*#__PURE__*/React.createElement(SiMicrosoftteams, null),
    slack: /*#__PURE__*/React.createElement(SiSlack, null),
    // 1notion
    notion: /*#__PURE__*/React.createElement(SiNotion, null)
  }; // 1general 1icon

  const ijsadwe = {
    // left: <
    // right:
    back: /*#__PURE__*/React.createElement(MdArrowBack, null),
    forward: /*#__PURE__*/React.createElement(MdArrowForward, null),
    info: jdfgrt,
    email: ijsfr,
    search: sdfgorek,
    signout: sduhfer,
    copy: /*#__PURE__*/React.createElement(FaCopy, null),
    expand: /*#__PURE__*/React.createElement(BiExpand, null),
    tick: okasdew,
    delete: asdfewr,
    playlist: asdkqe,
    settings: sdijwqe,
    share: sjerw,
    star: dfigjew,
    plus: /*#__PURE__*/React.createElement(AiOutlinePlus, null),
    comment: sowaseowq,
    link: linkios,
    play: sfdgmr,
    edit: sdiwer,
    quote: oksaew,
    quoteLeft: iosade,
    quoteRight: asdhgew,
    //
    time: lasdew,
    clock: lasdew,
    //
    close: kxmvs,
    ...brandCons
  };
  let oksdew = ijsadwe[sdfoger];
  oksdew = oksdew ? oksdew : //
  //
  sdfoger; // BearError("No icon found in BearUI's libary for '" + sdfoger + "'.");

  const okasde = {
    span: true,
    obj: oksdew,
    ...sdfke
  };
  const cbnkfg = //
  // oksdew
  sdfke ? BearDiv$1(okasde) : oksdew; //   ? //
  //     // Berios()
  //     JAsds()
  //   : //
  //     oksdew;

  return cbnkfg;
}

function BearImage({
  typevar,
  badgecolor,
  size = 40,
  width,
  height,
  style,
  image,
  ...sae
}) {
  let sacwe = {
    width: width,
    height: height,
    ...style
  };
  let osdew = {
    size,
    src: image,
    style: sacwe,
    shape: "circle",
    ...sae
  };
  let endValue = "";

  switch (typevar) {
    //
    default:
      endValue =
      /*#__PURE__*/
      //
      // "sadwqe";
      React.createElement("img", osdew) // <Avatar {...osdew} />
      ;
  }

  return endValue;
}

function BearTextMedia({
  //
  imagevar,
  imagesize = 20,
  leftWidth = "5px",
  padvar = "5px",
  vertSize,
  vertTrue,
  iconSize,
  imageText,
  imageConfig,
  textvar,
  iconvar,
  noImage,
  noIcon,
  noText,
  onlyIcons,
  buttonTrue,
  iconConfig,
  textconfig,
  itemType = "",
  swapItems,
  className,
  style,
  ...args
}) {
  // 1const
  function sadkwe(dsafe) {
    const fijgrt = leftWidth && {
      minWidth: leftWidth
    };
    const kfwer = iconSize && {
      fontSize: iconSize ? iconSize : "1.7em"
    };
    const ksease = { ...fijgrt,
      ...kfwer,
      ...dsafe
    };
    return ksease;
  }

  function ImgMain({ ...dsfew
  }) {
    const fnkfg = {
      // style: ksawe,
      imagevar: imagevar,
      size: imagesize,
      name: imageText,
      ...dsfew
    };
    const oksaw = /*#__PURE__*/React.createElement(BearImage, fnkfg);
    return oksaw;
  } // 1text


  function Ajiwq({ ...dsfew
  }) {
    const oisde = {
      obj: textvar,
      // style: ksawe,
      ...dsfew
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      span: true
    }, oisde));
  }

  function INcoio({
    style,
    ...ase
  }) {
    //
    const ksawe = sadkwe(style);
    const sdlf = {
      style: ksawe,
      obj: BearIcon(iconvar),
      ...ase
    };
    const isajdawe =
    /*#__PURE__*/
    //
    // BearIcon(iconvar);
    React.createElement(BearDiv$1, _extends({
      span: true
    }, sdlf));
    return isajdawe;
  }

  let okeasw = !noImage && imagevar;
  const okdsre = okeasw ? /*#__PURE__*/React.createElement(ImgMain, imageConfig) : "";
  const kadse = okdsre ? okdsre : iconvar && /*#__PURE__*/React.createElement(INcoio, iconConfig);
  const textShow = !noText && !onlyIcons && textvar;
  const okdswq = textShow && /*#__PURE__*/React.createElement(Ajiwq, textconfig);
  const okasew = {
    style: {
      margin: padvar
    }
  };
  const sdijwqe = iconvar || imagevar;
  const bothTrue = textShow && sdijwqe;
  const oksaew = bothTrue && /*#__PURE__*/React.createElement(BearDiv$1, _extends({
    span: true,
    ignoreNull: true
  }, okasew));

  function RendMain() {
    const lftoe = swapItems ? okdswq : kadse;
    const righto = swapItems ? kadse : okdswq;
    const oskdawe = /*#__PURE__*/React.createElement(React.Fragment, null, lftoe, oksaew, righto);

    function Rendo() {
      const VCIFWRE = {
        obj: oskdawe
      };
      const fdghew = /*#__PURE__*/React.createElement(BearDiv$1 //
      , _extends({
        flex: true,
        vertAlign: true
      }, VCIFWRE)); // return "dojwewq";

      return fdghew;
    }

    const okfdsd = //
    vertTrue ? oskdawe : Rendo();
    return okfdsd;
  } // funct;


  args = {
    obj: RendMain(),
    className,
    style,
    ...args
  };
  return SwitchComp(itemType, args);
}

function BearListItemExpand(cvbokfe, dasfjewr, {
  //
  // 1dict
  bearName = "",
  name = "",
  horiz,
  dictTrue,
  dictvar,
  dictFunc,
  typeBullet,
  addDict = {},
  //
  // 1item
  renderItem,
  noOptionObj,
  //
  // 1LOADNG
  loadobj = "",
  loadtrue,
  //
  // 1drag
  dragTrue,
  //
  // 1style
  layoutSpace,
  noItemMargin,
  itemNameStyle,
  itemStyle = {},
  itemConfig = {},
  //
  // 1logs
  logItem,
  //
  // 1between
  lineBetween,
  spaceBetween = "5px",
  //
  // 1selectable
  selectableTrue,
  //
  // 1onclick
  onClick,
  returnArray,
  clickSingle,
  //
  // 1choose
  chooseBaseFunc,
  chooseTrue,
  chosenItem,
  chosenConfig = {},
  //
  // 1error
  //
  // 1text
  capitaliseTypeText,
  pullDictItem,
  //
  typeList,
  containFunc,
  //
  // 1log
  messvar,
  logtrue,
  //
  //
  ...args
}) {
  const asdwe = itemConfig;
  const choseAll = findSelect(dasfjewr);
  const origItem = dasfjewr;
  const fuhease = typeof origItem == "object"; // 1capitalise

  const dgste = capitaliseTypeText ? BearUpper(cvbokfe) : cvbokfe; //   1dict

  function conDit() {
    //
    const sdur = fuhease ? origItem : {
      itemName: origItem,
      itemType: origItem
    };
    const iksdase = capitaliseTypeText && {
      textvar: BearUpper(origItem)
    };
    const nisdjfr = dictTrue && dgste;
    return { ...sdur,
      ...iksdase,
      ...nisdjfr,
      ...addDict
    };
  } // 1type


  const ijdfwr = //
  dictTrue; // dictTrue || pullDictItem;
  // capitaliseTypeText || dictTrue;

  const listarr = ijdfwr ? conDit() : dgste;

  function dfasdke(asfds) {
    return dictTrue && adojaqw(asfds);
  }

  let sokwe = spaceBetween && horiz ? {
    margin: `0 ${spaceBetween}`
  } : {
    margin: `${spaceBetween} 0`
  };
  const dfijgert = itemNameStyle && itemNameStyle[origItem]; // const soksrs = layoutSpace ? layoutSpace[xcvb] : "50px";
  // 1style

  const mainseo = {
    margin: !noItemMargin && "5px",
    ...sokwe,
    ...itemStyle,
    ...dfijgert,
    ...dfasdke("style")
  }; //   1function

  function findSelect(itmCurr) {
    const cvokbsdf = //
    chosenItem; // chooseTrue ? chosios : chosenItem;

    const itemBase = //
    itmCurr; // expandItem(itmCurr);

    const selectTrue = //
    returnArray && cvokbsdf ? cvokbsdf.includes(itemBase) : itemBase == cvokbsdf; // 1chosen

    const dfbidfg = selectTrue && {
      chosenTrue: true,
      ...chosenConfig
    };

    return dfbidfg;
  }

  function adojaqw(theoasd) {

    function sadke(wirew) {
      return wirew && wirew[theoasd];
    }

    const iasda = { ...sadke(asdwe),
      ...sadke(choseAll),
      ...sadke(listarr)
    };
    return iasda;
  }

  const ijswe = dictTrue || pullDictItem;
  const endRet = ijswe ? { ...asdwe,
    ...listarr,
    ...choseAll,
    style: mainseo
  } : dgste;

  const dictRet = typeof endRet == "object";

  function rettobjoo(objo, aokd) {
    const oksdf = { ...endRet,
      ...aokd
    };
    const dsifjw = dictRet ? oksdf : { ...oksdf,
      obj: listarr
    };

    return objo(dsifjw);
  }

  let asdpkwe = "";

  switch (typeList) {
    case "div":
      asdpkwe = rettobjoo(BearDiv$1);
      break;

    case "iconText":
    case "textMedia":
      // asdpkwe = "sodawewqs";
      asdpkwe = rettobjoo(BearTextMedia);
      break;

    case "button":
      let sdfker = {
        itemType: "button"
      };
      asdpkwe = rettobjoo(BearTextMedia, sdfker);
      break;

    case "dict":
      asdpkwe = endRet;
      break;

    case "return":
      asdpkwe = /*#__PURE__*/React.createElement(BearDiv$1, _extends({}, endRet, {
        obj: listarr
      }));
      break;

    default:
      const findobj = endRet.renderItem ? endRet.renderItem : renderItem;

      function finLog(sdasd) {

        return findobj(sdasd);
      }

      function findObjPress() {
        const jsdw = typeof findobj;
        const trueGo = jsdw == "function";
        return trueGo ? /*#__PURE__*/React.createElement(BearDiv$1, _extends({}, endRet, {
          obj: finLog(endRet)
        })) : BearError("must be a function, not " + jsdw);
      }

      asdpkwe = //
      findobj ? findObjPress() : !dictRet && /*#__PURE__*/React.createElement(BearDiv$1, _extends({}, endRet, {
        obj: listarr
      }));
  } //


  const isjdew = //
  dragTrue ? "<DragBase />" : asdpkwe; // 1onclick

  const dfgjs = !clickSingle;
  const clickBase = dfgjs ? conDit() : dgste;

  function clickList() {
    const asd0okw = //
    clickSingle;
    const okgs = asd0okw ? origItem : { //
      ...clickBase,
      ...args
    };
    let fijsde = //
    // okgs;
    returnArray ? turnarray(okgs) : okgs;
    const clickEnd = endRet.onClick ? endRet.onClick : onClick;

    if (clickEnd) {
      clickEnd(fijsde);
    }
  }

  const filleoo = {
    onClick: clickList,
    span: true,
    obj: isjdew
  }; // 1console

  const auewasdash = loadtrue ? loadobj : selectableTrue ? "<SelectComp {...filleoo} />" : //
  // isjdew;
  BearDiv$1(filleoo);
  const ijsew = //
  // "";
  lineBetween && /*#__PURE__*/React.createElement("hr", null); // const saewe = origItem["title"] && titleTrue;
  // const sdijfw = saewe && <Tjisae {...origItem} />;
  // typeBullet =

  const ijdsasew = //
  !typeBullet ? auewasdash : /*#__PURE__*/React.createElement("li", null, auewasdash);
  const asidjwe = /*#__PURE__*/React.createElement(React.Fragment, null, ijdsasew, ijsew);
  return asidjwe;
}

function BearListItem(coimswe, {
  //
  // 1dict
  bearName,
  dictvar,
  dictFunc,
  noShowItems,
  emptyDictReplace,
  containFunc,
  logtrue,
  //
  //
  ...args
}) {
  //
  //  1const
  const dgste = coimswe && expandItem(coimswe);
  const eixstso = dgste || coimswe;
  const typovar = typeof dgste;
  const dictTrue = typovar == "object";

  function asdkwe(coimswe) {
    const ksdfew = dictvar[coimswe] ? dictvar[coimswe] : emptyDictReplace ? emptyDictReplace : coimswe;
    return ksdfew;
  } //   1dict


  function expandItem(coimswe) {
    const isdjfdsa = dictFunc ? dictFunc(coimswe) : dictvar ? asdkwe(coimswe) : coimswe;
    return isdjfdsa;
  }

  logtrue = "asd";


  const ijssr = {
    bearName,
    dictTrue,
    logtrue,
    ...args
  };

  function mainOso() {
    return BearListItemExpand(dgste, coimswe, ijssr);
  }

  const sijfawe = dictvar ? dictTrue ? mainOso() : noShowItems ? "" : BearError(`No entry exists in '${BearPossess("dictionary", bearName, "this list")}' for "${coimswe}" `) : eixstso ? mainOso() : noShowItems ? "" : BearError("No list item declared!");

  function xcjsd() {

    return containFunc(sijfawe, dgste);
  }

  return containFunc ? xcjsd() : sijfawe;
}

function BearListMap(list, {
  logtrue,
  bearName = "",
  ...sidwre
}) {
  //
  function mapoBap(saokae, indexvr) {
    const asidjwe = //
    saokae["renderItem"] ? saokae["renderItem"] : saokae;

    const djfge = bearName + "__ITEM__" + indexvr;
    const oskda = {
      //
      logtrue,
      key: djfge,
      listIndex: indexvr,
      ...sidwre
    };
    const jcvbfd = BearListItem(asidjwe, oskda);

    return jcvbfd;
  }

  const lytoLis = Array.isArray(list);
  const gjdfg = //
  // list.map(mapoBap);
  lytoLis ? list.map(mapoBap) : BearError(bearName + "'list' attribute needs to be an array");
  return gjdfg; // return list.map(mapoBap)
}

function getListComplex(listo, //
{
  logtrue,
  listNumber,
  listDictAdd,
  removeItem,
  keepNull,
  useDictList,
  dictvar
}) {
  // 1list PREPARE
  const dictTrugo = useDictList && dictvar;
  let list = dictTrugo ? Object.keys(dictvar) : listo;

  const jvsdr = turnarray(list);
  list = keepNull ? list : jvsdr.filter(function (el) {
    return el != null;
  });
  list = removeItem ? remove(list, function (currentObject) {
    return currentObject.id != removeItem.id;
  }) : list;
  list = listNumber ? list.slice(0, listNumber) : list;
  return list;
}

function BearTitle({
  titleConfig = {},
  title,
  children,
  belowObj,
  // sizevar = "34px",
  subtitle,
  subtitleConfig = {},
  lineBetween,
  ...args
}) {
  //
  title = children || title;
  const aijsdwe = //
  ""; // "shadowBottom";
  const usdhfr = /*#__PURE__*/React.createElement(React.Fragment, null, title, lineBetween && /*#__PURE__*/React.createElement("hr", null));

  function sadfae({
    style,
    ...aasds
  }) {
    const jifdgr = {
      marginBottom: "30px",
      ...style
    };
    const ijdf = {
      style: jifdgr,
      ...aasds
    };
    return ijdf;
  }

  titleConfig = {
    className: aijsdwe,
    obj: usdhfr,
    ...sadfae(titleConfig)
  };
  const sijwesae = {
    style: {
      fontSize: "0.8em"
    },
    obj: subtitle,
    ...subtitleConfig
  }; // BediaTextDiv

  const oksd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, titleConfig), subtitle && /*#__PURE__*/React.createElement(BearDiv$1, sijwesae), belowObj);
  const iasjwe = {
    obj: oksd,
    style: {
      width: "100%"
    },
    ...args
  };
  return /*#__PURE__*/React.createElement(BearDiv$1, iasjwe);
}

function BearCheckMain(asdf, zczx, sdfwe = {}) {
  return dfkbijv(asdf, zczx, sdfwe);
} // bearbase

function dfkbijv(named, children, {
  //
  // 1title
  noTitle,
  title,
  titleConfig = {},
  subtitle,
  subtitleConfig = {},
  //
  //
  bearName,
  missName,
  noNameNeeded,
  //
  //
  advert,
  advertConfig = {},
  //
  //
  //
  ignoreErrors,
  requiredArgs = {},
  //
  //
  degradedArgs = {},
  //
  topItem,
  bottomItem,
  //
  //
  style,
  //
  ...args
}) {
  // 1const
  function Titren(adfok = {}) {
    return Titoas(adfok);
  }

  function Titoas({
    style,
    ...sdfok
  }) {
    const nsidjr = {
      //
      title,
      subtitle,
      subtitleConfig
    };
    const kjase = { ...nsidjr,
      ...sdfok,
      style: {
        textAlign: "center",
        fontSize: "1.5em",
        marginBottom: "5px",
        ...style
      } // titleConfig: titleConfig,

    };
    const noisae = /*#__PURE__*/React.createElement(BearTitle, kjase);
    return noisae;
  } // 1title


  const dfjer = !noTitle && title;
  const askew = dfjer && Titren(titleConfig); // 1love 1built 1avert

  function Adverto({
    style
  }) {
    //
    //
    const asqewew = {
      className: "shadowHover",
      style: { ...BearBackBorder("darkblue", "5px"),
        color: "white",
        // padding: "5px 10px",
        fontSize: "16px",
        // margin: "15px",
        ...style
      },
      outsideLink: "http://bearui.io/"
    };
    const xvbijewr = /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      span: true
    }, asqewew), "Built with love by", " ", /*#__PURE__*/React.createElement(BearDiv$1, {
      span: true,
      className: "bold"
    }, "\uD83D\uDC3B Bear UI"));
    return xvbijewr;
  }

  const dfsigwer = /*#__PURE__*/React.createElement(React.Fragment, null, askew, children);
  const disjwe = {
    style: advert ? { ...BearBorder("grey", "5px"),
      paddingTop: "60px"
    } : {}
  };
  const jfdert = {
    topRight: advert && Adverto(advertConfig),
    // center: ,
    paddingVert: "5px",
    centerConfig: disjwe
  };
  const ikjdwer = /*#__PURE__*/React.createElement(BearFloat, jfdert, dfsigwer);
  const okfdsd = //
  ikjdwer; // dfsigwer;

  const idfg = {
    textAlign: "center",
    ...style
  };
  args = {
    obj: /*#__PURE__*/React.createElement(BearDiv$1, {
      obj: okfdsd
    }),
    style: idfg,
    ...args
  };
  const sdufdsf = missName ? missName : named;
  const objDegrade = getAnyDictValue(degradedArgs);
  const objRequre = getAnyDictValue(requiredArgs);

  function sajwae(sdfer) {
    const goCHecko = !ignoreErrors;
    const uhfgewq = goCHecko ? sdfer : /*#__PURE__*/React.createElement(BearDiv$1, args);
    return uhfgewq;
  }

  function degradMess() {
    const usdfer = //
    "MISSING ARGUMENT GOO"; // objDegrade + " is missing "

    const dfwewa = BearError(usdfer);
    return dfwewa;
  }

  function rendName() {
    return !bearName && !noNameNeeded ? sajwae(BearErrMiss("bearName", bearName, sdufdsf) // BearError(
    //   `${BearPossess(
    //     "argument",
    //     bearName,
    //     sdufdsf
    //   )}' needs a 'bearName' attribute!`
    // )
    ) : objRequre ? sajwae(BearErrMiss(objRequre, bearName, sdufdsf)) : objDegrade ? sajwae(degradMess()) : /*#__PURE__*/React.createElement(BearDiv$1, args);
  }

  return rendName();
}

function BearCheckList(named, obj, {
  //
  bearName,
  list,
  renderItem,
  typeList,
  noError,
  ignoreEmpty,
  containFunc,
  ...args
}) {
  // 1const
  const skfwe = {
    list,
    renderItem,
    typeList,
    noError,
    bearName,
    ...args
  };

  function renderCheck() {
    //
    const ijsdfw = renderItem || typeList || containFunc;
    const cisas = ijsdfw ? obj : BearErrMiss("'containFunc' or 'renderItem' or 'typeList'", bearName, named);
    return cisas;
  }

  const okfdsd = renderCheck();
  const jsdawse = Array.isArray(list);
  const listFull = jsdawse && list.length > 0; // 1console

  const idfjger = {
    bearName,
    hideError: "ignoreEmpty"
  };
  const emptyall = !list || !listFull;
  const ijsfre = emptyall && !ignoreEmpty ? BearError(BearMissing("list", bearName) // "wtf is this mate"
  , idfjger) : !jsdawse ? BearError("list attribute must be an array!") : okfdsd;
  return BearCheckMain(named, ijsfre, skfwe);
}

function BearList( //
// list,
{
  obj,
  typevar,
  // 1remove
  containFunc,
  list,
  // 1name
  bearName,
  //
  // 1display
  displayNumber,
  rowConfig,
  //
  //
  // 1list
  //
  compName = "BearList",
  // 1log
  messvar,
  logtrue,
  //
  //
  addTrue,
  scrollTrue,
  className,
  // SELECT
  selectableTrue,
  selectableConfig,
  // 1STYLE
  styleList,
  // 1load
  loadtrue,
  typeBullet,
  emptyItem,
  loadNumber = 10,
  //
  // 1error
  noError,
  //
  //
  //
  // 1horizotal
  centerItem = true,
  horiz,
  flex,
  //
  // 1list,
  // COLLAPSeE
  hideList,
  collapseTrue,
  renderItem,
  typeList,
  ...listArgs
}) {
  // 1list
  list = list && getListComplex(list, listArgs);
  // const [chosios, setchosios] = useState(chosenItem);
  // function passChoose(itmBase) {
  //   if (chooseTrue) {
  //     let ogfsdfds =
  //       //
  //       itmBase;
  //     setchosios(ogfsdfds);
  //   }
  // }
  // 1baseargs

  const sidwre = {
    bearName,
    horiz,
    typeBullet,
    logtrue,
    loadtrue,
    containFunc,
    renderItem,
    typeList,
    list
  };
  const sidjfwe = { ...sidwre,
    ...listArgs
  };

  styleList = {
    overflowY: scrollTrue ? "scroll" : "",
    // overflowY: "scroll",
    ...styleList
  }; // 1horiz

  function HozBar(lsoeas) {
    // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
    const okaewq = centerItem && {
      alignContent: "center",
      justifyContent: "space-around"
    };
    const okadwe = {
      flex: true,
      style: okaewq,
      obj: donelist(lsoeas)
    }; // 1console

    const jisad = //
    BearDiv$1(okadwe); // "okafsdf";
    // EndListA();
    // mapoBap();
    // <HorizChoiceBar {...endoa} />;

    return jisad;
  } // 1select


  function Seletio() {
    const as83asd = //
    ""; // <SelectArray {...asikwe} />

    return as83asd;
  } // 1display


  function ksajda() {
    const sdidsf = displayNumber && Number.isInteger(displayNumber);
    return sdidsf ? xvcbmf() : BearErrArgType("displayNumber", "integer", {
      bearName
    });
  }

  function xvcbmf() {
    const domase = chunk(list, displayNumber);
    const jfsdas = domase.map(sfjsd);

    function sfjsd(xcvkm) {
      const kseasd = { ...rowConfig
      };
      return /*#__PURE__*/React.createElement(BearDiv$1, kseasd, HozBar(xcvkm));
    }

    return jfsdas;
  } // 1name


  const sadfwe = //
  //
  selectableTrue ? /*#__PURE__*/React.createElement(Seletio, null) : displayNumber ? ksajda() : horiz ? HozBar(list) : donelist(list);

  function donelist(listio) {
    !isEmpty(listio) || loadtrue;

    const ushdsa = //
    hideList ? "" : BearListMap(listio, sidjfwe); // fullVar ? BearListMap(list, sidjfwe) : "";
    // fullVar && list.map(mapoBap);

    return ushdsa;
  }

  const saokwe = typeBullet ? /*#__PURE__*/React.createElement("ul", null, sadfwe) : sadfwe;

  function RendBase() {
    const saidje = argPass({
      obj: saokwe,
      flex,
      ...listArgs
    }); // return "sodkweeqw";

    return BearDiv$1(saidje);
  }

  const idjsae = BearCheckList(compName, RendBase(), sidjfwe); //
  // BearDiv(saidje)
  // rendName();
  // renderCheck();
  // list ? renderCheck() :
  // RendBase();

  return idjsae;
}

function BearInputLabel({
  //
  children,
  // 1subtitle
  subtitle,
  subtitleConfig = {},
  subtitlePlacement,
  //
  labelFunc,
  addFunc,
  iconvar,
  newTrue,
  errorMessage,
  //
  checkbox,
  checkboxConfig = {},
  //
  // 1popup
  infoPopup,
  infoPopupConfig = {},
  infoConfig,
  //
  required,
  requiredFormat = "star",
  requiredConfig,
  ...args
}) {
  // 1const
  // 1required
  function RendReq() {
    const difjger = //
    "*"; // BearIcon("star");

    const ijweq = {
      style: {
        marginLeft: "10px",
        // fontSize: "1em",
        color: "red"
      }
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      span: true
    }, ijweq), difjger);
  }

  const olbknfr = {
    fontSize: "0.4em",
    // color: "red",
    marginLeft: "10px" // className: "error",

  };
  const asdwe = {
    obj: errorMessage,
    className: "error",
    style: olbknfr
  };
  /*#__PURE__*/React.createElement(BearDiv$1, _extends({
    span: true
  }, asdwe)); // 1info 1popup

  let okgerwe = infoPopup;

  switch (subtitlePlacement) {
    case "infoPopup":
      okgerwe = subtitle;
      subtitle = "";
  }

  const poppoBas = okgerwe && FoPop(infoPopupConfig);

  function FoPop({
    style,
    ...aswe
  }) {
    const fidje = {
      //
      fontSize: "1.2em",
      marginTop: "10px"
    };
    const ndgjtre = {
      //
      className: "pointer",
      style: fidje,
      ...infoConfig
    };
    const sfdgr = BearIcon("info", ndgjtre);
    return sfdgr; // return <BearPopover {...jdfgrwe}>{sfdgr}</BearPopover>;
  } // 1checkbox


  function ceckcio(dfokewr) {
    return /*#__PURE__*/React.createElement(Checkbox, dfokewr);
  } // 1title


  function AllNo() {
    // required = true;
    const ijstewr = required && RendReq();
    const xcvkdsijdew = BearIconText(iconvar, children);
    const sdgr = checkbox ? ceckcio({
      children: xcvkdsijdew,
      ...checkboxConfig
    }) : xcvkdsijdew;
    const okdsras = /*#__PURE__*/React.createElement(BearDiv$1, {
      vertAlign: true,
      flex: true
    }, sdgr, ijstewr);
    const idjfg = [//
    okdsras, poppoBas // { obj: okdsras },
    // { obj: poppoBas },
    ];
    const sdfij = {
      //
      fontWeight: "bold",
      fontSize: "1.2em"
    };
    const nisdjre = {
      list: idjfg,
      style: sdfij
    };
    const dijrw =
    /*#__PURE__*/
    //
    // ""
    // BearFlex(nisdjre)
    React.createElement(BearDiv$1, _extends({
      flex: true
    }, nisdjre), okdsras, poppoBas);
    return dijrw;
  } // TITLE MAIN


  const okasde = //
  AllNo(); // newTrue ? ChooseTit() : AllNo();

  const ioakawe = /*#__PURE__*/React.createElement(React.Fragment, null, okasde);

  function BswTi() {
    const cvobkof = {
      className: "shadowHover pointer",
      onClick: addFunc,
      obj: BearIcon("➕", ""),
      style: {
        padding: "5px",
        marginTop: "-5px",
        fontSize: "0.8em" // marginLeft: "20px",

      }
    };
    const dfigjrt = /*#__PURE__*/React.createElement(BearDiv$1, cvobkof);
    const kcmdr = {
      center: ioakawe,
      right: dfigjrt
    };
    const ijcwe = BearFloat(kcmdr);
    return ijcwe;
  }

  const ijsae = addFunc ? BswTi() : ioakawe; // 1icon
  const asdojwqs = {
    obj: ijsae // ...sdijr,
    // textvar: ioakawe,
    // noText: true,
    // disVar: true,

  };
  const seokwer =
  /*#__PURE__*/
  //
  // <ImageTextDiv {...asdojwqs} />
  // <BediaTextDiv {...asdojwqs} />
  React.createElement(BearDiv$1, asdojwqs);
  const skdae = subtitle;
  const ijawe = skdae && Subtoter(subtitleConfig);

  function Subtoter(asdxc) {
    const ikawed = {
      fontSize: "0.8em"
    };
    const okawe = {
      obj: subtitle,
      style: ikawed,
      ...asdxc
    };
    const uiajwe = /*#__PURE__*/React.createElement(BearDiv$1, okawe);
    return uiajwe;
  }

  const sdfgret = /*#__PURE__*/React.createElement(React.Fragment, null, seokwer, ijawe);
  const kase = {
    padding: "0 0 10px 5px",
    textAlign: "left"
  };
  const isawqe = {
    obj: sdfgret,
    style: kase,
    ...args
  }; // 1console
  const sdfewr = /*#__PURE__*/React.createElement(BearTextMedia, isawqe);
  return labelFunc ? labelFunc(sdfewr) : sdfewr;
}

function BearInputBase(ujsdqwe, {
  // 1title
  noLabel,
  labelConfig,
  label,
  labelWidth = "160px",
  //
  // 1value
  initialValue,
  //
  // 1change 1onchange
  changeGlobal,
  onChange,
  obj,
  ref,
  //
  // 1required
  required,
  name,
  //
  // 1error
  error,
  errorMessage,
  errorobj,
  checkExistError,
  hideError,
  errors,
  errorConfig = {},
  errorFunction,
  //
  //
  // 1button
  rightSubmit,
  //
  //
  addTrue,
  // 1style
  style,
  containerStyle,
  fontSize = "28px",
  sameLine,
  lineBelow,
  //
  formData,
  noIcon,
  //
  ...dfsgre
}) {
  //
  // 1baseargs

  const ifdjsfd = {
    required,
    ref,
    ...dfsgre
  };
  const ashwe = {
    width: "100%",
    padding: "5px",
    fontSize,
    ...containerStyle,
    ...style
  };

  useState(initialValue);


  function TitleOBbi({
    style,
    ...cxzv
  }) {
    //
    const skdowqe = sameLine ? {
      //
      fontSize: "1.15em",
      minWidth: labelWidth // marginTop: "-10px",

    } : {
      fontSize: "1.15em",
      margin: "0px 0 10px 10px"
    };
    const iawqe = { ...skdowqe,
      fontWeight: "bold",
      ...style
    };
    const sdfkewr = argMiss({ ...cxzv,
      ...ifdjsfd,
      style: iawqe
    });

    return /*#__PURE__*/React.createElement(BearInputLabel, sdfkewr, label);
  }

  const showTit = //
  // true;
  !noLabel && label;
  const saewase = { // ...zdssdire,
    ...labelConfig
  };
  const oksdwqe = showTit && /*#__PURE__*/React.createElement(TitleOBbi, saewase);
  const confijre = {
    size: "sm",
    type: "submit",
    obj: "YES"
  };
  const jaewdsr = {
    right: /*#__PURE__*/React.createElement(BearButton, confijre),
    center: ujsdqwe
  }; // rightSubmit = true;

  const asdijwe = rightSubmit ?
  /*#__PURE__*/
  //
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearFloat, jaewdsr)) : ujsdqwe;
  const asodkwqe = sameLine && {
    alignItems: "center"
  };
  let ijsa = {
    style: { ...asodkwqe,
      ...ashwe
    }
  };
  const okdsae = {
    style: {
      width: "100%"
    }
  }; // lineBelow = true;

  lineBelow && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null)); // 1error

  function ErroBase({
    style,
    ...ase
  }) {
    const nisjrad = {
      minHeight: "30px",
      color: "red",
      textAlign: "left",
      // fontWeight: "bold",
      padding: "5px 10px",
      fontSize: "0.8em",
      ...style
    }; // error = "ss9qw3q";

    const difg = { ...ase,
      style: nisjrad
    };
    const fjdgse = //
    errorFunction ? errorFunction(errorMessage) : errorMessage;
    return /*#__PURE__*/React.createElement(BearDiv$1, difg, fjdgse);
  }

  const xcbmd = !hideError && ErroBase(errorConfig);
  const okaweasd = /*#__PURE__*/React.createElement(React.Fragment, null, oksdwqe, /*#__PURE__*/React.createElement("div", okdsae, asdijwe), xcbmd); // 1return

  const zxcvdf = sameLine ? /*#__PURE__*/React.createElement(Flex, ijsa, okaweasd) : /*#__PURE__*/React.createElement("div", ijsa, okaweasd);
  const kaosdew = /*#__PURE__*/React.createElement(React.Fragment, null, zxcvdf);
  return kaosdew;
}

// import { AlignMain } from "./AlignMain";

function BearLog(...asdf) {
  console.log("___ BearLog ___", ...asdf);
}
function BearFalseLog(...asdf) {}
function BearQuote(sdofkr) {
  let leftie = "'";
  let rightie = "'";
  const vobdesa = //
  // leftie;
  leftie + sdofkr + rightie;
  return vobdesa; // return <BearDiv span {...ijsdaw} />;
}
function BearDivMain(asok, zxsd) {
  //
  const asdwe = {
    obj: asok,
    ...zxsd
  };
  return BearDiv$1(asdwe);
}
function BearSwitch(item, dict, oksdfew = "") {
  return item ? dict[item] ? dict[item] : BearError(`BearSwitch doesn's have a ${oksdfew}`) : oksdfew;
}
function BearSurround() {
  //
  // const ikasae
  return "";
}
function BearAttrNeeds(bearName) {
  //
  // const ikasae
  return "";
} // 1must

function BearErrArgType$1(arg, type, {
  bearName,
  ...asd
}) {
  //
  return BearError(bearName + "'s " + BearQuote(arg) + " argument must be a " + type, asd);
}
function BearErrMiss(...asd) {
  //
  return BearError(BearMissing(...asd));
}
function BearMissing(attr, mainnum, aseqwe = "Your component") {
  //
  const nisdfrw = mainnum ? mainnum : aseqwe;
  const kdsdae = /*#__PURE__*/React.createElement(React.Fragment, null, BearQuote(nisdfrw), "'s", BearSpace(BearQuote(attr)), "attribute is empty or missing.");
  const sadwew = //
  kdsdae;
  return sadwew;
}
function InputForm({ ...sae
}) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  const sadwew = //
  ""; // <Input {...sae} />;

  return sadwew;
}
function BearIconText(icon, text, osdfds) {
  //
  const bodfg = {
    iconvar: icon,
    textvar: text,
    ...osdfds
  };
  const sadwew = /*#__PURE__*/React.createElement(BearTextMedia, bodfg);
  return sadwew;
}
function linkBase(link, objvar, osdfds) {
  const dkfdsfre = {
    link: link,
    obj: objvar,
    ...osdfds
  };
  const sadwew = /*#__PURE__*/React.createElement(BearDiv$1, dkfdsfre);
  return sadwew;
}
function BearWrap({
  elipsisTrue,
  obj,
  pushTrue,
  disVar,
  className,
  lineCount,
  dropLine,
  ...argos
}) {
  //
  const xvobkvds = lineCount ? "wrapTwo" : "wrapMain";
  const okxcvzx = xvobkvds;
  const asdwem = xvobkvds + " " + okxcvzx;
  const lokgos = {
    className: asdwem + " " + className,
    ...argos
  };
  const pksdf = /*#__PURE__*/React.createElement("div", lokgos, obj);
  return pksdf; //
}
function BearPossess(item, name, othername = "") {
  const iksdwa = name ? name : othername;
  const isjdfr = iksdwa ? iksdwa + "'s " : "";
  const oasd = isjdfr + item;
  return oasd;
}
function BearLink(obj, link, ...sdsda) {
  const ksdase = {
    link: link,
    obj: obj,
    ...sdsda
  };
  const jksdrwa = /*#__PURE__*/React.createElement(BearDiv$1, ksdase);
  return jksdrwa;
}
function BearBlankLink(obj, link, ...asd) {
  const ksdase = {
    linkConfig: {
      outsideTrue: true
    },
    ...asd
  };
  return BearLink(obj, link, ksdase);
}
function BearPlural(stringVar, lengAfter, {
  noNumber
}) {
  var pluralize = require("pluralize");

  var plT = pluralize(stringVar, lengAfter);
  var finalSt = noNumber ? plT : lengAfter + " " + plT;
  return finalSt;
} // 1list

function ListReturn({ ...sae
}) {
  const sadwew = /*#__PURE__*/React.createElement(BearList, _extends({
    returnTrue: true
  }, sae));
  return sadwew;
}
function ListFlex({ ...sae
}) {
  const sadwew = /*#__PURE__*/React.createElement(BearList, _extends({
    returnTrue: true
  }, sae));
  return sadwew;
}
function BearFlex({
  padvar = "20px",
  list,
  itemStyle,
  style,
  left,
  right,
  noVertAlign,
  obj,
  ...sae
}) {
  const difreeq = !noVertAlign && vertAlign;
  const kdsse = {
    style: { ...difreeq,
      ...style
    }
  };

  function dokesad({
    obj,
    width,
    ...asd
  }) {
    const oksade = {
      style: {
        width: width,
        textAlign: "left",
        marginRight: padvar,
        ...itemStyle
      },
      ...asd
    };
    return /*#__PURE__*/React.createElement("div", oksade, obj);
  }

  function redndo(asdwa) {
    const ijase = asdwa.obj ? asdwa : {
      obj: asdwa
    };
    return dokesad(ijase);
  }

  function RendFlex() {
    const sdijrwe = {
      obj: left
    };
    const ijasew = {
      obj: right,
      style: {
        marginLeft: "auto"
      }
    };
    const saijwe = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, sdijrwe), /*#__PURE__*/React.createElement(BearDiv$1, ijasew));
    return saijwe;
  }

  const okdsse = list ? list.map(redndo) : /*#__PURE__*/React.createElement(RendFlex, null);
  const vbdrewe = {
    obj: okdsse,
    flex: true,
    ...kdsse,
    ...sae
  };
  const sadwew = /*#__PURE__*/React.createElement(BearDiv$1, vbdrewe);
  return sadwew;
}
function FlexHorz({
  children,
  horiz
}) {
  //
  const ijdrwer = {
    spacing: 10,
    direction: horiz && "row"
  };
  return /*#__PURE__*/React.createElement(Stack, ijdrwer, children);
} // 1slider

function SliderMain({ ...sae
}) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  const sadwew = //
  ""; // <Slider {...sae} />;
  // <Slider marks={marks} step={null} defaultValue={37} />

  return sadwew;
} // 1input

function InputMain({ ...sae
}) {
  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  const sadwew = //
  ""; // <Input {...sae} />;

  return sadwew;
} // 1image

function ImageAlign({
  //
  imageConfig,
  ...argo
}) {
  //
  //
  const okswe = /*#__PURE__*/React.createElement(ImageMain, imageConfig);
  argo = {
    mainObj: okswe,
    ...argo
  };

  return ""; //   return <AlignMain {...argo} />;
}
function ImageGroup({
  list,
  ...sae
}) {
  // max size
  const sadwew = /*#__PURE__*/React.createElement(AvatarGroup, sae, list.map(asowe => /*#__PURE__*/React.createElement(ImageMain, _extends({
    typevar: "chakra"
  }, asowe))));
  return sadwew;
}
function PagePad({
  left = "",
  padvar = "38vw",
  ...sae
}) {
  const oksae = left ? {
    paddingRight: padvar
  } : {
    paddingLeft: padvar
  };
  const sadwew = { ...sae,
    style: oksae
  };
  return /*#__PURE__*/React.createElement(BearDiv$1, sadwew);
}
function BearCopy({
  copyText,
  obj,
  copyMessage,
  ...asd
}) {
  const iawe = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, obj));
  return iawe;
} // 1capitalise

function BearUpper(sdkrwe) {
  const typeoe = typeof sdkrwe == "string";
  const idfjgr = typeoe ? sdkrwe.charAt(0).toUpperCase() + sdkrwe.slice(1) : sdkrwe;
  return idfjgr;
}
function SwitchComp(itemType, args) {
  let sokae = "";

  switch (itemType) {
    case "button":
      const fsdfsad = { // className: "buttonHover shadowHover",
        ...args
      };
      sokae = BearButton(fsdfsad);
      break;

    default:
      sokae = BearDiv$1(args);
  }

  return sokae;
}
function LoadMain({
  obj,
  typevar,
  // style,
  rowvar = 10,
  ...sadww
}) {
  let endValue = "";

  switch (typevar) {
    case "skeleton":
      endValue = "";
      break;

    default:
      endValue = /*#__PURE__*/React.createElement(React.Fragment, null);
  }

  return endValue;
}
function BearSpace(dataVar, asdwe) {
  const kmxvs = {
    obj: " " + dataVar + " ",
    ...asdwe
  };
  return /*#__PURE__*/React.createElement(BearSpan, kmxvs);
}
function BearSpan(asdwe) {
  return /*#__PURE__*/React.createElement(BearDiv$1, _extends({
    span: true
  }, asdwe));
} // export function ElStripo(dataVar) {
//   return         <Elements stripe={stripePromise}>
//             {dataVar}
//         </Elements>
// }

function BearBorder(color, radius, sdfr = {}) {
  const okfg = objectTrue(sdfr);
  const vijder = okfg ? cxadfa(color, radius, sdfr) : BearError("Third argument of 'BearBorder' must be an object");
  return vijder;
}
function cxadfa(color, radius, {
  noPadding,
  borderSize = "2px",
  ...asd
} = {}) {
  //
  const sjdfrwe = noPadding ? {// padding: "0px",
  } : {
    padding: "5px"
  };
  const ijsde = {
    border: borderSize + " solid " + color,
    borderRadius: radius,
    ...sjdfrwe,
    ...asd // ...sjdfrwe,

  };
  return ijsde;
}
function BearBackBorder(color, ...sdfew) {
  const ijsde = {
    background: color,
    ...BearBorder(color, ...sdfew)
  };
  return ijsde;
}
function BearListComp(list, sdfwre) {
  const xcovk = getListComplex(list, sdfwre);
  const jadew = BearListMap(xcovk, sdfwre);
  return jadew;
}
function argMiss({
  //
  className,
  style,
  ...sdf
}) {
  //
  return sdf;
}
function argPass({
  //
  id,
  className,
  style,
  name,
  flex,
  obj,
  loadtrue,
  children,
  genConfig,
  ...sdf
}) {
  //
  const dfigjt = { ...genConfig,
    id,
    className,
    style,
    obj,
    children,
    name,
    flex
  };
  return dfigjt;
} //
//

function functioMa({
  pass,
  ...sdf
}) {
  //
  // const ikasae
  return "";
}
function InputBaseCheck(sfkr, {
  noBase,
  ...asdw
}) {
  return noBase ? sfkr : BearInputBase(sfkr, asdw);
}
function BearButtonList(sfkr) {
  //
  sfkr = {
    typeList: "button",
    ...sfkr
  };
  return BearList(sfkr);
}
function SwitchLayout({
  children
}) {
  const skdfsa = {
    height: ""
  };
  const zxcmsd = /*#__PURE__*/React.createElement(React.Fragment, null, "Hello!");
  const kmxvs = {
    obj: zxcmsd,
    style: skdfsa
  };
  return /*#__PURE__*/React.createElement(BearDiv$1, kmxvs);
}
function nameComb(sfkr, oskdfr) {
  //
  // const ikasae
  return sfkr + "___" + oskdfr;
} // 1function

function Exmapl(dataVar) {
  const skdfsa = {
    height: ""
  };
  const zxcmsd = /*#__PURE__*/React.createElement(React.Fragment, null, "Hello!");
  const kmxvs = {
    obj: zxcmsd,
    style: skdfsa
  };
  return /*#__PURE__*/React.createElement(BearDiv$1, kmxvs);
}

function BearDiv$1({
  //
  obj,
  text,
  children,
  bearName = "BearDiv",
  divContainer,
  bediaTrue,
  flex,
  equalSpacing = true,
  vertAlign,
  ignoreNull,
  typeDiv,
  centerTrue,
  span,
  logtrue,
  fontSize,
  //
  // 1link
  linkParams,
  href,
  preLink = "",
  link,
  outsideLink,
  //
  linkConfig,
  //
  //
  style,
  loadTrue,
  loadConfig,
  ...args
}) {
  //
  //
  const osdakew = flex && {
    display: "flex"
  };
  const zxcsd = vertAlign && {
    alignItems: "center" // justifyContent: "center",

  };
  const sidjfr = !equalSpacing && {// alignItems: "flex-start",
  };
  const kdfr = bediaTrue && {
    background: "red",
    color: "white" // ...bediaMainStyle

  };
  const oksdae = fontSize && {
    fontSize: fontSize
  };
  const centerConf = centerTrue && {
    width: "100%",
    margin: "auto",
    textAlign: "center"
  };
  const baseFonto = {
    fontFamily: "Arial"
  };
  const gibjr = { // ...centerConf,
    ...oksdae,
    ...centerConf,
    ...osdakew,
    ...zxcsd,
    ...kdfr,
    ...sidjfr,
    ...baseFonto,
    ...style
  };
  const oksde = {
    style: gibjr,
    ...args
  };
  const aokdwe = //
  span ? "span" : typeDiv;
  const sijewr = children ? children : obj ? obj : text;
  const ksdrewq = //
  // obj
  divContainer ? divContainer(sijewr) : sijewr;
  let endo = "";

  switch (aokdwe) {
    case "span":
      endo = /*#__PURE__*/React.createElement("span", oksde, ksdrewq);
      break;

    default:
      endo = /*#__PURE__*/React.createElement("div", oksde, ksdrewq);
  }

  const iasje = outsideLink && {
    //
    outsideTrue: true
  }; // link = href || outsideLink || link;

  const dfuhsdw = preLink;
  const sjfweqw = outsideLink || link;
  const linkTrue = sjfweqw || dfuhsdw;
  const nsdas = sjfweqw ? preLink + sjfweqw : preLink; // 1link

  const okdas = {
    toVar: nsdas,
    textvar: endo,
    linkParams,
    ...iasje,
    ...linkConfig
  };

  const xczaeewqa = //
  //
  linkTrue ? /*#__PURE__*/React.createElement(BearLink$1, okdas) : endo;

  function Lodio() {
    const cvboker = { //
      ...loadConfig
    };
    return /*#__PURE__*/React.createElement(LoadMain, cvboker);
  }

  const sadijqwe = loadTrue ? Lodio() : xczaeewqa;

  !sijewr && !ignoreNull ? BearError(bearName + " is empty") : sadijqwe; // return difjgerwas

  return sadijqwe;
}

function BearBackForward({
  obj,
  onBack,
  onForward,
  disVar,
  arrVar,
  textTrue,
  disBack,
  children,
  disForward,
  hideBack,
  hideForward,
  genConfig,
  backConfig,
  forwardConfig,
  buttonConfig = {},
  ...argssdf
}) {
  //
  //
  // function asdjie(funco){
  // }
  const endLeftfsa = {
    iconvar: "back",
    onClick: onBack,
    // disVar: disBack,
    ...backConfig
  };
  const endRighto = {
    iconvar: "forward",
    onClick: onForward,
    // disVar: disForward,
    ...forwardConfig
  };
  const xcijsdf = //
  // "BACK";
  !hideBack && //
  // "left"
  saaoekwq(endLeftfsa);
  const dfgkmre = //
  // "FORWARD";
  !hideForward && //
  // "right"
  saaoekwq(endRighto);

  function saaoekwq(oskwe) {
    const ijawe = {// className: gens.butClass,
    };
    const zdsdar = { ...oskwe,
      ...ijawe,
      ...buttonConfig,
      itemType: "button"
    };
    const uajwe = //
    // "asdfeqws";
    BearTextMedia(zdsdar); // BearList();

    return uajwe;
  } // 1float

  const uawhe = {
    // iconvar
    obj: /*#__PURE__*/React.createElement(React.Fragment, null, xcijsdf, children, dfgkmre),
    // list: [xcijsdf, children, dfgkmre],
    // left: xcijsdf,
    // center: children,
    // right: dfgkmre,
    padvar: "5px",
    ...argssdf
  };
  const ijwqeq = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, _extends({
    flex: true,
    vertAlign: true
  }, uawhe)));
  return ijwqeq;
}

function BearButtonDownload({
  //
  fileName,
  json,
  ...args
}) {
  const sdifjewr = //
  fileName; // 1const
  // 1json FON

  function downJSON() {
    var _myArray = JSON.stringify(json, null, 4); //indentation in json format, human readable


    var vLink = document.createElement("a"),
        vBlob = new Blob([_myArray], {
      type: "octet/stream"
    }),
        vName = sdifjewr,
        vUrl = window.URL.createObjectURL(vBlob);
    vLink.setAttribute("href", vUrl);
    vLink.setAttribute("download", vName);
    vLink.click();
  }

  function downlood() {
    if (json) {
      downJSON();
    }
  }

  const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, "sssss");
  args = {
    obj: okfdsd,
    onClick: downlood,
    ...args
  };
  return /*#__PURE__*/React.createElement(BearButton, args);
}

const emojiDict = {
  surprise: {
    emoji: "😲",
    textvar: "Surprised!"
  },
  angry: {
    emoji: "😡",
    textvar: "Angry"
  },
  happy: {
    emoji: "😃",
    textvar: "Happy"
  },
  sad: {
    emoji: "😢",
    textvar: "Sad"
  },
  funny: {
    emoji: "🤣",
    textvar: "Funny"
  },
  love: {
    emoji: "😍",
    textvar: "Love"
  },
  interest: {
    emoji: "🤔",
    textvar: "Interesting"
  }
};

function getEMoj(asofkr) {
  const idfwer = emojiDict[asofkr];
  let side = idfwer && idfwer.emoji;
  side = side ? side : "";
  return side;
}

function mapEmojiFace(list) {
  const iewase = list && list.map(getEMoj);
  return iewase;
}

function mainRet(cxsd) {
  const aijew = emojiDict[cxsd];
  const oiajew = `${aijew["emoji"]} ${aijew["textvar"]} `;
  return oiajew;
}

function labelMoj(cxsd) {
  const xcokvse = {
    value: cxsd,
    label: mainRet(cxsd)
  };
  return xcokvse;
}
function EmojiLabelMap(cxsd) {
  let sd9fwq = cxsd.map(labelMoj);
  return sd9fwq;
}

function BearEmoji({
  initialValue,
  selectBlue,
  selectTrue,
  chooseFunc,
  typevar,
  list,
  onlyEmoji,
  itemConfig,
  ...sdaa
}) {
  //
  const ijsae = //
  emojiDict;
  const kjsijsa = [//
  "funny", "happy", "interest", // "surprise",
  "sad" // "angry",
  ];
  const [asdoe, setasdoe] = useState();
  const jdfew = //
  // kjsijsa
  list ? list : kjsijsa; //
  //

  let plaqwe = //
  // greyHover circleHover
  "expandHover pointer";
  const sadwqe = //
  plaqwe; // selectBlue ? plaqwe : "pointer";

  const oksae = {
    // background: "red",
    padding: "5px 10px",
    borderRadius: "50%"
  };
  const sfjaw = {
    className: sadwqe,
    style: oksae,
    ...itemConfig
  }; // 1tick
  // function goTick() {
  //   logs.logga("___ qweq ___", qweq);
  //   const bocd = onlyEmoji ? emoji : <>{emoji}</>;
  //   const qwtgsa = chosenTrue && BearIcon("tick");
  //   // 1emoji
  //   const okaew = {
  //     mainObj: bocd,
  //     smallObj: qwtgsa,
  //     alignvar: "topRight",
  //   };
  //   const lfdijg = (
  //     <>
  //       {bocd}
  //       {qwtgsa}
  //     </>
  //   );
  //   return lfdijg;
  // }

  function saokde({
    chosenTrue,
    emoji,
    textvar,
    ...qweq
  }) {
    const lsadwe = //
    emoji; // textvar;
    const oksaew = {
      obj: lsadwe,
      flex: true,
      ...sfjaw
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, oksaew); // return <BearPopover {...aokdwe} />;
  }

  function Listso({ ...ssdwedf
  }) {
    //
    // 1chosen
    const djifwsare = {
      style: {
        border: "2px solid black",
        borderRadius: "50%" // background: "blue",

      },
      className: "shadowBottom"
    };
    const ijdwq = {
      // style: { background: "red" },
      chosenItem: asdoe,
      chosenConfig: djifwsare,
      // chooseTick
      chooseTrue: true,
      returnArray: true,
      clickSingle: true
    };

    function asdoke(sdfswe) {
      let oksadw = //
      // "dsfoker";
      saokde(sdfswe);
      return oksadw;
    }
    const logBaso = {
      logtrue: "asdas",
      messvar: "BEAEMOJI"
    };
    const dsjs = {
      list: jdfew,
      dictvar: ijsae,
      // typeList: "div",
      renderItem: asdoke,
      horiz: true,
      itemConfig: sfjaw,
      ...logBaso,
      ...ijdwq,
      ...ssdwedf
    };
    return /*#__PURE__*/React.createElement(BearList, dsjs);
  }

  function Selectos() {
    // const sidjew = {
    //   value:
    // }
    const fdogkre = //
    // jdfew
    Object.keys(ijsae);
    EmojiLabelMap(fdogkre);
    EmojiLabelMap(initialValue);
    const asiew = //
    ""; //   <BearSelect {...ijsaew} />;

    return asiew;
  }

  let endValue = "";

  switch (typevar) {
    case "select":
      endValue = Selectos();
      break;

    case "base":
      endValue = /*#__PURE__*/React.createElement(React.Fragment, null, mapEmojiFace(jdfew));
      break;

    default:
      endValue = /*#__PURE__*/React.createElement(Listso, sdaa);
  }

  return endValue;
}

function BearTags({
  //
  itemConfig,
  ...args
}) {
  // 1const
  function rendios(itemo) {
    const kasde = {
      color: "black",
      background: "lightgrey"
    };
    const djfwer = /*#__PURE__*/React.createElement(React.Fragment, null, "# ", itemo);
    const oksdewqsa = {
      className: "shadowHover",
      style: kasde,
      obj: djfwer,
      ...itemConfig
    };
    return /*#__PURE__*/React.createElement(BearButton, oksdewqsa);
  }

  args = {
    noError: true,
    renderItem: rendios,
    ...args
  };
  return /*#__PURE__*/React.createElement(BearList, args);
}

function ProvideMain({
  query,
  children,
  chakra
}) {
  // const queryClient = query ? query : new QueryClient();
  let asijew = /*#__PURE__*/React.createElement(React.Fragment, null, children);
  asijew =
  /*#__PURE__*/
  // !chakra. ? (
  //   asijew
  // ) : (
  React.createElement(ChakraProvider, null, children);
  return asijew;
}

function BearContextProvider({ ...dsfer
}) {
  const sidjfewr = /*#__PURE__*/React.createElement(ProvideMain, dsfer);
  const jads = //
  sidjfewr; // ProvideAuth({
  //   obj: sidjfewr,
  //   ...dsfer,
  // });

  return jads;
}

function BearModal({
  //
  open,
  onClose,
  height,
  header,
  noFooter,
  footer,
  footerConfig,
  // message,
  children,
  buttonConfig,
  ...args
}) {
  // 1const
  // const { isOpen, onOpen, onClose } = useDisclosure();
  React.useRef(); // 1footer
  // 1antd

  const antGo = {
    // title="Title"
    visible: open,
    onOk: onClose,
    onCancel: onClose,
    footer: ""
  };
  args = { // ...skdfer,
    ...args
  };
  const sirew = {
    isOpen: open,
    onClose,
    toggle: onClose,
    ...antGo,
    ...args
  };
  const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal, sirew, children)); //   args = {
  //     obj: okfdsd,
  //     ...args,
  //   };
  //   return "sdoksdf0";

  return okfdsd; //   return <BearDiv {...args} />;
}

function BearModalWarning({
  open,
  children,
  //
  //
  seriesObj,
  onCancel,
  onConfirm,
  message,
  confirmConfig,
  cancelConfig,
  //   buttonConfig,
  ...args
}) {
  // 1const
  // const [setto, setsetto] = useState(open);
  const dgifsad = {
    confirm: {
      onClick: onConfirm,
      ...confirmConfig
    },
    cancel: {
      style: {
        color: "black",
        background: "transparent",
        ...BearBorder("darkblue", "5px")
      },
      onClick: onCancel,
      textvar: "Cancel",
      ...cancelConfig
    }
  };
  const cvxbfdg = {
    list: ["confirm", "cancel"],
    dictvar: dgifsad,
    horiz: true,
    bearName: "buttonGo",
    itemConfig: {
      style: {
        fontSize: "20px"
      }
    }
  };
  const dfigjrt = {
    style: {
      height: "50vh"
    }
  };
  const cvofdd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, dfigjrt, message), /*#__PURE__*/React.createElement(BearButtonList, cvxbfdg));
  const ijfgr = {
    style: {
      textAlign: "center",
      fontSize: "20px",
      padding: "3%"
    }
  };
  const okfdsd =
  /*#__PURE__*/
  //
  // cvofdd;
  React.createElement("div", ijfgr, " ", cvofdd); //   buttonConfig = {
  //   }

  args = {
    // message: okfdsd,
    open,
    // children,
    onClose: onCancel,
    ...args
  }; // return okfdsd;
  // return open ? okfdsd : children;

  return /*#__PURE__*/React.createElement(BearModal, args, okfdsd);
}

//   const ijsde = "";
//   return BearNotification();
// }
// export function BearErrNote(zcivjds, asdf = {}) {
//   const ijsde = BearError(zcivjds);
//   asdf["error"] = true;
//   return BearNotification(ijsde, asdf);
// }

function BearWarnDelete({
  onDelete,
  children,
  warnMessage,
  ...args
}) {
  const nsidjfs = //
  // true;
  "";
  const [warnTrue, setwarnTrue] = useState(nsidjfs);
  const idjv = //
  // true;
  warnTrue;

  function Modska() {
    const sidjfewr = {
      open: idjv,
      message: warnMessage,
      confirmConfig: {
        textvar: "Delete",
        background: "red",
        color: "white"
      },
      onConfirm: onDelete,
      onCancel: () => setwarnTrue()
    };
    return BearModalWarning(sidjfewr);
  }

  const ijsdfer = {
    onClick: () => setwarnTrue(true)
  };
  const zxcmsd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modska, null), /*#__PURE__*/React.createElement(BearDiv$1, ijsdfer, children));
  return zxcmsd;
} // // 1back 1forward

function BearModel({
  //
  iconListConfig,
  buttonConfig,
  children,
  dictvar,
  //
  //
  onEdit,
  editConfig,
  onShare,
  shareConfig,
  onCancel,
  //
  onDelete,
  warnDelete,
  deleteConfig,
  //
  buttonLayout = "bottom",
  //
  ...args
}) {
  // 1const
  const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, children);

  function asdsade(asdf) {
    const dhfgr = {
      onDelete,
      ...deleteConfig
    }; // return asdf;

    return /*#__PURE__*/React.createElement(BearWarnDelete, dhfgr, asdf);
  }

  const sidjfer = warnDelete ? {
    divContainer: asdsade
  } : {
    onClick: onDelete
  };
  const isdfewr = {
    edit: {
      iconvar: "edit",
      textvar: "Edit",
      onClick: onEdit,
      ...editConfig
    },
    share: {
      iconvar: "share",
      textvar: "Share",
      onClick: onShare,
      ...shareConfig
    },
    cancel: {
      iconvar: "close",
      textvar: "Cancel",
      onClick: onCancel
    },
    delete: {
      iconvar: "delete",
      textvar: "Delete",
      ...sidjfer,
      ...deleteConfig
    }
  };
  const isdre = {
    bearName: "sodkwqe",
    list: ["delete"],
    typeList: "button",
    // ...iconConfig,
    dictvar: { ...isdfewr,
      ...dictvar
    },
    ...argMiss(args),
    // itemConfig: kmfase,
    ...buttonConfig
  }; // 1console
  const ijdwer = /*#__PURE__*/React.createElement(BearList, isdre);
  args = {
    center: okfdsd,
    // right: ijdwer,
    [buttonLayout]: ijdwer,
    noVertAlign: true,
    // floatConfi:
    ...argPass(args)
  };
  return /*#__PURE__*/React.createElement(BearFloat, args);
}

//
function linkOrdse({
  //
  typevar,
  textvar,
  link,
  linkBase,
  linkConnect,
  textConnect
}) {
  link = encodeURIComponent(link);
  const twitTure = typevar == "twitter";
  const noLink = twitTure;
  const showLink = //
  !noLink && linkConnect;
  let tnstFinal = //
  twitTure ? textvar + " " + link : textvar;
  tnstFinal = encodeURIComponent(tnstFinal);
  let linkeo = //
  link; // encodeURIComponent(link)

  const bsaeio = showLink && joinString([//
  linkConnect, linkeo], "=");
  const txtooeio = textConnect && joinString([//
  textConnect, tnstFinal], "=");
  const ihjtt = [//
  txtooeio, bsaeio];
  const linksiw = joinString(ihjtt, "&"); // const okasew = linkBase

  const sadije = joinString([//
  linkBase, "?", linksiw]);
  const didsfe = //
  sadije; // encodeURIComponent(sadije);
  return didsfe;
} // 1onchange

function onChangeFunc(inputAtts, {
  onChange,
  onChangeValue
}) {
  //
  // const ikasae
  const valueMain = inputAtts.target.value;

  if (onChangeValue) {
    onChangeValue(valueMain);
  }

  if (onChange) {
    onChange(inputAtts);
  }
}
 // 1function

function BearTextarea({
  //
  //   default,
  value,
  rows,
  style,
  initialValue,
  expand = true,
  ...dfgre
}) {
  // 1rows
  rows = rows ? rows : 3; // expand = "";

  const ijdfwer = expand && {
    as: ResizeTextarea
  };
  const chakResize = {
    minH: "unset",
    overflow: "hidden",
    w: "100%",
    resize: "none",
    ...ijdfwer
  };

  function sofkes(fdas) {
    onChangeFunc(fdas, dfgre);
  }

  const djfo = {
    padding: "20px",
    ...style
  };
  const sdfezd = value && {
    value
  };
  const ijsdfasd = { ...sdfezd,
    rows,
    minRows: rows,
    // initialValue:
    // defaultValue: initialValue,
    ...chakResize,
    style: djfo,
    ...dfgre,
    onChange: sofkes
  }; // 1console

  loggo("___ bertextarea FULL ___", ijsdfasd);
  const xcvbkf =
  /*#__PURE__*/
  //
  // <textarea {...ijsdfasd}/>
  // <textarea {...ijsdfasd}>{initialValue}</textarea>
  //  <TextareaAutosize {...ijsdfasd} />
  // <TextChak {...ijsdfasd}>{value}</TextChak>
  // <TextChak {...ijsdfasd}>{initialValue}</TextChak>
  React.createElement(Textarea, ijsdfasd);
  return InputBaseCheck(xcvbkf, dfgre);
}

function RendGroup(center, {
  renderInput,
  inputLeft,
  leftConfig,
  inputRight,
  rightConfig,
  ...asdsd
}) {
  const leftRendos = inputLeft && /*#__PURE__*/React.createElement(InputLeftElement, leftConfig, inputLeft);
  const rightRendos = inputRight && /*#__PURE__*/React.createElement(InputRightElement, rightConfig, inputRight);
  const sdijfr = inputRight || inputLeft;
  const sdresar = {//
  };
  const cvdfsoe = sdijfr ? /*#__PURE__*/React.createElement(InputGroup, sdresar, leftRendos, center, rightRendos) : center;
  const dfgjer = renderInput ? renderInput(cvdfsoe) : cvdfsoe;
  return InputBaseCheck(dfgjer, asdsd);
} // 1input

function BearInputText({
  //
  inputObjectFunction,
  onChange,
  initialValue,
  bearName,
  onChangeValue,
  style,
  noBase,
  formData,
  ...sfdgert
}) {
  // 1const
  // textvar = "DEFAULT TEXT";
  // 1console
  function logPut(...adfsd) {
    sfdgert.name;
  } // checkNotExistArr


  useState(initialValue);
  const sjdfer = {
    // value: changeVal,
    defaultValue: initialValue
  };
  const erroBase = {// errorMessage: BearInputErr(changeVal, sfdgert),
  };
  const sdkfewr = {// focusBorderColor: isjwqe,
    // placeholder: "Here is a sample placeholder"
  }; // const nsidjfe

  function sdijfer(ghtrer) {// logs.logga("___ ghtrer ___", ghtrer);
    // dfogkre(ghtrer);
  }


  const baseo = {
    //
    rows: 1,
    autoComplete: "off",
    className: "noresize"
  };
  const xvbjdfr = {
    noBase,
    formData,
    ...sfdgert,
    ...erroBase
  };
  const ijawe = { ...sjdfer,
    ...sdkfewr,
    ...baseo,
    ...sfdgert,
    onChange: sdijfer // ...inputStyles(style),

  }; // 1console

  const centFsow = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, ijawe));
  logPut("___ intput BASEO ___", xvbjdfr);
  const cvdfsoe = RendGroup(centFsow, xvbjdfr);
  return cvdfsoe;
}

function BearFormButton({
  //
  children,
  ...args
}) {
  // 1const
  /*#__PURE__*/React.createElement(React.Fragment, null, "sssss");
  args = { // obj: okfdsd,
    ...args
  };
  return /*#__PURE__*/React.createElement("button", args, children);
}

function BearPassword({
  //
  requiredText,
  showStrenghBar,
  ...objaosdf
}) {
  //
  // 1const
  const [strenghBase, setstrenghBase] = useState();
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  function StrenchBarro(sdfgret) {
    const zxvds = {
      //
      required: {
        background: "red",
        text: "Required"
      },
      tooWeak: {
        background: "orange",
        text: "Weak"
      },
      weak: {
        background: "yellow",
        text: "OK"
      },
      good: {
        background: "green",
        text: "Strong"
      }
    };
    const sdersd = zxvds[sdfgret]; // 1me

    const isdjfr = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearButton, sdersd, sdersd["text"]));
    const dfbdft = {
      flex: true
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, dfbdft, isdjfr);
  }

  function InRead(sdfgoekse) {
    const ijsdr = passwordStrength(strenghBase);
    const ifjgewr = ijsdr && ijsdr.id;
    const ndfke = ["tooWeak", "weak", "good"];
    const strenchVall = !strenghBase ? "required" : ifjgewr > 1 ? "strong" : ifjgewr > -1 ? ndfke[ifjgewr] : "";
    const vcbmd = strenchVall && StrenchBarro(strenchVall);
    const uhdfgr = {
      obj: vcbmd,
      style: {
        //
        fontSize: "0.9em",
        width: "80px",
        marginLeft: "10px"
      }
    };
    const nsdijfe = /*#__PURE__*/React.createElement(React.Fragment, null, sdfgoekse, /*#__PURE__*/React.createElement(BearDiv$1, uhdfgr));
    return /*#__PURE__*/React.createElement(BearDiv$1, {
      vertAlign: true,
      flex: true
    }, nsdijfe);
  } // function aidjew(){
  // }


  function aidjew(sdgfds) {
    setstrenghBase(sdgfds);
  }

  const typoFond = show ? "text" : "password";
  const ijsdae = { ...objaosdf,
    onChangeValue: aidjew,
    renderInput: InRead,
    type: typoFond
  };
  const isjda = show ? "Hide" : "Show";
  const sdjfewr = {
    h: "1.75rem",
    size: "sm",
    onClick: handleClick
  };
  const ijvsf = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearFormButton, sdjfewr, isjda));
  const dsfijsr = { ...ijsdae,
    inputRight: ijvsf,
    rightConfig: {
      width: "4.5rem"
    }
  };
  return BearInputText(dsfijsr);
}

function BearCheckbox({
  //
  disabled,
  color,
  children,
  onChange,
  checkboxText,
  checkMessage,
  // defaulTrue,
  ...xcvbojd
}) {
  //   // obj: textvar,
  //   style: {
  //     marginRight: "10px",
  //   },
  // };
  // {/* <input {...dsoadkw0} />; */}
  //     {/* <InputChak {...isawe} /> */}
  //     {/* <input {...isawe} /> {dsf9jewr} */}
  //     {/* </input> */}
  //     {/* <gens.CheckboxMain {...dsoadkw0}>{obj["textvar"]}</gens.CheckboxMain> */}

  const jidfrte = false;
  const [checkedItems, setCheckedItems] = React.useState(jidfrte); // const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  function adfkwer() {
    const difjrt = { //
      ...checkMessageConfig
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, difjrt, checkMessage);
  }

  const ijsf = checkedItems && checkMessage && adfkwer(); // onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
  const ijsdr = /*#__PURE__*/React.createElement(FlexHorz, {
    horiz: true
  }, ijsf); // 1console

  const vobkdf = /*#__PURE__*/React.createElement(React.Fragment, null, ijsdr);
  return vobkdf;
}

function BearRadio({
  //
  seriesObj,
  ...args
}) {
  // 1const
  const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, "sssss");
  args = {
    obj: okfdsd,
    ...args
  };
  return /*#__PURE__*/React.createElement(BearDiv, args);
}

// import AsyncSelect, { makeAsyncSelect } from "react.-select/async";

function BearSelect({
  //
  multi,
  dictvar,
  noMenu,
  menuConfig,
  typeSelect,
  //
  // 1options
  options,
  optionsArray,
  optionStyle,
  hoverStyle,
  optionConfig,
  initOptions,
  optionBorder,
  bearName,
  //
  //
  maxSelect,
  //
  //
  // 1value
  onChangeSetValue = true,
  initialValue,
  // 1create
  create,
  onCreate,
  onCreateValue,
  createTop,
  //
  // 1blur
  onBlurValue,
  //
  //
  hideSearchIcon,
  //
  //
  notClearable,
  logtrue,
  //
  //
  valueFormat,
  valueFunc,
  //
  //
  fontSize = "16px",
  newLineTrue,
  // 1none
  noOptionsMessage,
  //
  //
  // 1change
  onChange,
  //
  // 1menu
  introMessage,
  showMenuIfValue,
  menuStyle,
  searchBarIcon,
  noMenuBorder,
  menuStick,
  //
  //
  messvar = "",
  name = "",
  limitvar,
  //
  // 1ref
  // ref,
  // onInputChange,
  //
  // 1style
  resultsStyle,
  menuHeight,
  width = "100%",
  style = {},
  noValueReturn,
  ...args
}) {
  // 1baseargs
  //
  // bearName;
  // 1const
  const [inputBase, setinputBase] = useState();
  const [type, setType] = useState("");
  const sodkfre = overLen(type); // 1optionstyle

  const waeaj = { ...optionStyle
  };
  width = width ? width : style["width"] ? style["width"] : "100%";

  function DropdownIndicator(props) {
    const ijsde = {
      //
      fontSize: "1.3em"
    };
    const asew = searchBarIcon && BearIcon(searchBarIcon, ijsde);
    const isdjfew = /*#__PURE__*/React.createElement(components.DropdownIndicator, props, asew);
    const uhfesa = //
    hideSearchIcon ? "" : isdjfew; // "sdwqe";

    return uhfesa;
  }

  function showTrue(inputValue, selectValue, selectOptions) {
    if (!inputValue) {
      return false;
    }

    let isValid = true; // for (let option of selectOptions) {
    //   if (isOptionMatchesInputValue(option, inputValue)) {
    //     isValid = false;
    //     break;
    //   }
    // }

    return isValid;
  } // 1OPEN

  const sdjfre = //
  optionsArray; // !optionsArray
  let vbmofd = //
  options ? options : sdjfre ? asdiwje9(sdjfre) : initOptions;
  let dsfijaae = //
  // optBase;
  vbmofd;

  function asdiwje9(xckjvf) {
    return mapSelectValue(xckjvf, {});
  } // 1option STYLE


  function optRdio({
    color,
    width,
    ...base
  }, {
    isDisabled
  }) {
    //
    // 1border
    const deqwease = //
    // "";
    optionBorder && BearBorder("grey", "5px", "0.5px");
    const colorOpt = {
      color: "black"
    };
    const ijsdr = { ...base,
      textAlign: "left",
      // fontSize: fontSize - 4,
      ...waeaj,
      ...deqwease,
      ...vertAlign,
      ...colorOpt
    };
    const sodk = //
    hoverbase(ijsdr); // skwe(ijsdr);

    return allSty(sodk);
  } // 1hover


  function hoverbase(sfdger) {
    const ijsaew = {
      // background: "white",
      "&:hover": { ...waeaj,
        ...hoverStyle // background: "red",
        // border: "11px solid green",

      },
      "&active": {
        color: "black"
      }
    };
    return { ...sfdger,
      ...ijsaew
    };
  } // 1menu


  function rendMenu(bsao) {
    const aaese = menuStick && {
      marginTop: "0px"
    };
    const sdoewr = !noMenuBorder && bsao;
    const oasde = {
      // paddingRight: "0 100px",
      marginTop: "0px",
      ...sdoewr,
      ...menuStyle,
      ...aaese // ...misdfs,

    };
    return allSty(oasde);
  } // 1control


  function rendCont(base) {
    //
    const iksdrqe = { ...base,
      // maxHeight: 20,
      // fontSize: fontSize,
      ...style
    };
    return allSty(iksdrqe);
  } // 1menulist


  function allLios({
    maxHeight,
    ...styles
  }) {
    const oksdr = { ...styles,
      //
      // padding: "0 100px",
      // WebkitOverflowScrolling: "",
      // boxSizing: "",
      ...misdfs // paddingTop: "-30px",

    };
    return allSty(oksdr);
  }

  function allSty(adfwer, mesioa) {
    // 1width
    const fullWdh = {
      fontSize,
      ...adfwer,
      width
    };
    return fullWdh;
  } // 1nooption STYLE


  function optNoos(base) {
    const cvbf = {// ...base,
      // ...introStyle,
    };
    return allSty(cvbf);
  } // 1height


  const misdfs = menuHeight && {
    height: menuHeight // menuHeight:

  }; //   1styles

  const stylBasoe = {
    control: rendCont,
    option: optRdio,
    menuList: allLios,
    menu: rendMenu,
    noOptionsMessage: optNoos // clearIndicator: (base) => ({
    //   ...base,
    //   paddingTop: 0,
    //   paddingBottom: 0,
    // }),

  };
  // isEmpty();
  // 1empty

  const fullOpts = // emptio &&
  {
    components: {
      DropdownIndicator,
      IndicatorSeparator: () => null // Menu: () => null,

    }
  }; //   1menu
  //   newLineTrue

  const mennoPIt = newLineTrue && {
    classNamePrefix: "lp-copy-sel"
  };
  const asidjwe = multi && {
    isMulti: true
  };

  function sijsad(sdfe) {
    return sdfe && sdfe.value;
  }

  function changeos(params) {
    //
    const ijsdre = valueFormat ? valueFormat : sijsad;
    let sovkoe = //
    noValueReturn ? params : multi ? params.map(ijsdre) : params.value;


    if (onChange) {
      onChange(sovkoe);
    }

    if (valueFunc) {
      valueFunc(params);
    }
  }

  function overLen(xvfd) {
    const dasf = maxSelect && xvfd && xvfd.length === maxSelect;
    return dasf;
  } // 1onchange maxSelect ?


  function dfgoe(aewqe) {
    overLen(aewqe);

    {
      changeos(aewqe);
    } // setType(difjre);
    // if (lenOver) {
    // changeos(aewqe);
    //   setType(aewqe)
    // } else {
    //   setType()
    // }

  } // limitvar ? sliceArray(vbmofd, limitvar) : vbmofd;
  // 1id reffo


  let ideoBasa = {
    inputProps: name,
    inputId: name,
    name: name
  }; // 1ref
  const iasjdwe = !notClearable && {
    isClearable: true
  };
  const xcvbfmg = {
    // MENU
    //
    isSearchable: true,
    ...iasjdwe,
    ...mennoPIt,
    ...asidjwe,
    ...args,
    ...ideoBasa
  };
  let toppoIos = //
  // "first";
  createTop ? "first" : "last";

  const creatios = onCreate && {
    onCreateOption: onCreate // value: type,

  };

  function Notspse(inputValue, sdsa) {
    const svnsdfsr = typeof noOptionsMessage == "function";
    const idjvsa = !svnsdfsr ? BearErrArgType$1("noOptionsMessage", "function", {
      bearName
    }) : noOptionsMessage(inputValue, sdsa);
    return idjvsa;
  } // 1nooptions


  function Rendoa({
    inputValue,
    ...sdsa
  }) {
    noOptionsMessage ? Notspse(inputValue, sdsa) : sodkfre ? "You can only chooe" : "no options for '" + inputValue + "'";
  } // 1create Daosm


  const sdijer = { ...creatios,
    createOptionPosition: toppoIos
  };
  const xockozd = onBlurValue && {
    onBlur: sofad => onBlurValue(sofad.target.value)
  };

  const fsdogkdr = //
  optionConfig && bijewwe;

  function bijewwe({
    value,
    label,
    customAbbreviation
  }) {
    const ijsras = { ...optionConfig
    }; // return "asokqweq";

    return /*#__PURE__*/React.createElement(BearDiv$1, ijsras, label);
  }

  const dfijger = !onChangeSetValue && {
    value: ""
  }; // 1input

  const fgoktr = initialValue && {
    // initialValue: initialValue,
    // defaultInputValue: initialValue,
    defaultValue: asdiwje9(initialValue) // value: asdiwje9(initialValue),
    // defaultValue: {label: initialValue, value: initialValue },
    // inputValue: initialValue,

  }; // 1blur

  const nvxsads = noOptionsMessage && {
    promptTextCreator: Notspse,
    formatCreateLabel: Notspse,
    noOptionsMessage: Rendoa
  };

  function ShowItMENU(zxcvok) {
    setinputBase(zxcvok);
  } // 1intro


  const sdfer = showMenuIfValue && {
    inputValue: inputBase,
    options: inputBase ? dsfijaae : [],
    noOptionsMessage: inputBase ? Rendoa : asd => introMessage,
    // menuIsOpen: inputBase,
    onInputChange: ShowItMENU
  };
  const fdgrt = {
    // ...dfgjrt,
    styles: stylBasoe,
    onChange: dfgoe,
    formatOptionLabel: fsdogkdr,
    //
    // STYLE
    //
    // 1blur
    // ...blurBase,
    //
    //
    // 1create
    ...sdijer,
    //
    // 1nooptions
    ...nvxsads,
    // 1EMPTY
    ...fullOpts,
    isValidNewOption: showTrue,
    options: dsfijaae,
    ...dfijger,
    ...xockozd,
    ...fgoktr,
    ...xcvbfmg,
    ...sdfer // ...ogkfds,

  }; // 1return 1args

  let dfijew = //
  // {};
  fdgrt; // xcvbfmg;

  typeSelect = !sodkfre && create ? "create" : typeSelect;
  let endValue = ""; //

  switch (typeSelect) {
    case "create":
      endValue = /*#__PURE__*/React.createElement(CreatableSelect, dfijew);
      break;

    case "async":
      endValue = /*#__PURE__*/React.createElement(AsyncCreatableSelect, dfijew);
      break;

    default:
      endValue =
      /*#__PURE__*/
      //
      // <CreatableSelect {...dfijew} />
      React.createElement(Select, dfijew);
  }

  return endValue;
} // autoFocus - focus the control when it mounts
// className - apply a className to the control
// classNamePrefix - apply classNames to inner elements with the given prefix
// isDisabled - disable the control
// isMulti - allow the user to select multiple values
// isSearchable - allow the user to search for matching options
// name - generate an HTML input with this name, containing the current value
// onChange - subscribe to change events
// options - specify the options the user can select from
// placeholder - change the text displayed when no option is selected
// value - control the current value

function BearInputNumber({
  //
  onlyPositive,
  step,
  min,
  style,
  onChange,
  ...vboret
}) {
  // 1min
  const zxcds = min ? min : onlyPositive && 0;
  const jsder = zxcds && {
    min: zxcds
  };
  const idfjew = {// style.fontSize;
  };
  const nsdij = {
    width: "100px",
    paddingRight: "20px",
    // fontSize:
    ...style
  };
  const sfijwer = { ...jsder,
    ...vboret,
    style: nsdij // ...inputStyles(nsdij),
    // defaultValue={15} max={30} clampValueOnBlur={false}

  };
  // value={format(value)}
  // const format = (val) => `$` + val
  // const parse = (val) => val.replace(/^\$/, "")
  // const [value, setValue] = React.useState("1.53")
  // keepWithinRange={false}
  // clampValueOnBlur={false}
  // step={5} defaultValue={15} min={10} max={30}
  // precision={2}

  const nsidjer = step && /*#__PURE__*/React.createElement(NumberInputStepper, idfjew, /*#__PURE__*/React.createElement(NumberIncrementStepper, null), /*#__PURE__*/React.createElement(NumberDecrementStepper, null));
  const serhhee = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NumberInput, sfijwer, /*#__PURE__*/React.createElement(NumberInputField, null), nsidjer)); // return serhhee;
  // return BearInputText(sfijwer);

  return RendGroup(serhhee, sfijwer);
}

function BearFormInputCheck({
  //
  // FORM
  control,
  //
  //
  noInput,
  inputType,
  inputObj,
  inputFunction,
  inputObjectFunction,
  //
  //
  //
  // 1style
  style,
  fontSize = "18px",
  //
  //
  subtitle,
  subtitlePlacement,
  placeholder,
  obj,
  ref,
  containerStyle,
  name,
  //
  dictvar,
  spaceBetween,
  //
  //
  ...dfsgre
}) {
  //
  const ashwe = {
    // width: "100%",
    padding: "5px",
    fontSize,
    ...style
  };
  const stylBsae = {
    style: ashwe
  };
  let sdokwre = {};

  switch (subtitlePlacement) {
    case "placeholder":
      sdokwre = {
        subtitle: "",
        placeholder: subtitle
      };
      break;
    // default:
  } // 1baseargs


  const sdweew = {
    subtitle,
    ...sdokwre,
    // subtitlePlacement,
    name,
    fontSize,
    // containerStyle,
    ...stylBsae,
    ref
  };
  let cntrMan = {
    control,
    name,
    ...dfsgre
  };
  const zdssdire = { ...sdweew,
    ...dfsgre
  };
  const objbase = { ...zdssdire // ...cntrMan,
    // ...changBssoe,

  }; // 1console

  function sijdgdf(objer, {
    //
    noBase,
    formData,
    errorMessage,
    ...argoes
  } = {}, nameo) {
    //
    const idjfr = {
      noBase: true,
      ...objbase,
      ...argoes
    };
    const kdfjg = //
    // "";
    "firstLast";
    logCheck("sijddf", idjfr.name, kdfjg, idjfr.name, nameo, "___ BrFormInpCheck ___", idjfr);
    return objer(idjfr);
  }

  let ujsdqwe = "";
  let baseTop = true;

  function retFunc() {

    switch (inputType) {
      case "timeList":
        const jsdrse = {
          width: "100px",
          // style: { width: "40px" },
          hideSearchIcon: true,
          optionsArray: ["hours", "days", "weeks", "months", "years"]
        };
        ujsdqwe = goCont(BearSelect, jsdrse);
        break;

      case "select":
        const sfkwer = {// fontSize: "0.2em",
        };
        ujsdqwe = goCont(BearSelect, sfkwer); // ujsdqwe = sijdgdf(BearSelect);
        // ujsdqwe = <Select {...objbase} />;
        // ujsdqwe = <AsyncCreatableSelect {...objbase} />;
        // ujsdqwe = <CreatableSelect {...objbase} />;

        break;

      case "radio":
        ujsdqwe = sijdgdf(BearRadio);
        break;

      case "checkbox":
        ujsdqwe = sijdgdf(BearCheckbox);
        break;

      case "password":
        ujsdqwe = sijdgdf(BearPassword);
        break;

      case "textarea":
        ujsdqwe = sijdgdf(BearTextarea);
        break;

      case "number":
        baseTop = "";
        const jidr = {
          noBase: false
        };
        ujsdqwe = sijdgdf(BearInputNumber, jidr);
        break;
      // case "NAME ":
      //   ujsdqwe = Bear(objbase);
      //   break;

      case "checkboxList":
        ujsdqwe = "ijadqwoek";
        break;

      case "checkbox":
        ujsdqwe = sijdgdf(BearCheckbox);
        break;

      case "number":
        // [type] = "tel";
        break;

      default:
        ujsdqwe = noInput ? "" : sijdgdf(BearInputText, {
          //
          bearName: "BInput"
        });
    }

    return ujsdqwe;
  }

  function goCont(funcPush, aisjdwe) {
    //
    //
    const difjgr = //
    // Rendo
    inEar; // funcPush(aisjdwe);
    // inputFunction(objbase);
    // BearSelect(testSelect)
    // <Select {...testSelect} />

    const xbvkf = { // as: inputFunction(objbase),
      ...cntrMan,
      render: difjgr
    };
    let asod =
    /*#__PURE__*/
    //
    React.createElement(Controller, xbvkf);

    function inEar({
      //
      field: {
        //
        ref,
        value,
        ...field
      }
    }) {
      const jodswre = { ...containerStyle,
        ...ashwe
      };
      const sfeqwwe = { ...objbase,
        ...aisjdwe,
        inputRef: ref,
        ref,
        ...field,
        style: jodswre
      };
      const nfdgers = //
      // "";
      funcPush(sfeqwwe); // BearInputBase(fijsdd, "");

      const dfigjew = /*#__PURE__*/React.createElement(React.Fragment, null, nfdgers);
      return dfigjew;
    }

    return asod;
  }
  ujsdqwe = inputObj ? inputObj : inputFunction ? goCont(inputFunction) : inputObjectFunction ? inputObjectFunction(retFunc()) : retFunc();
  const xsdd = //
  // dfsgre
  zdssdire;
  const nidferw = //
  // ujsdqwe
  baseTop ? BearInputBase(ujsdqwe, xsdd) : ujsdqwe;
  return nidferw;
}

function _dictEmail() {
  const emalBaso = {
    required: true,
    // pattern: emailPatto,
    title: "Email address",
    // title: vbijdf9te,
    type: "email",
    iconvar: "email" // iconvar: "email",

  };
  return emalBaso;
}

function getFormPass(objsoa, asdwe = {} // { value, ...asdwe } = {}
) {
  let osakde = "";

  switch (objsoa) {
    case "time":
      osakde = _dictTime();
      break;

    case "email":
      osakde = _dictEmail();
      break;

    case "url":
      osakde = _dictURL(asdwe);
      break;

    case "nameFirstLast":
      osakde = {
        noLabel: true,
        inputType: "firstLast"
      };
      break;

    case "name":
      osakde = _dictName();
      break;

    case "datetime":
      osakde = dictDate(asdwe);
      break;

    case "tags":
      osakde = {
        inputType: "select",
        create: true,
        multi: true
      };
      break;

    case "mobileNumber":
      osakde = //
      _dictMobile(); //  _dictMobBase();

      break;

    case "password":
      osakde = _dictPassword();
      break;

    case "address":
      osakde = _dictAddress();
      break;

    case "description":
      osakde = {
        label: "Description",
        inputType: "textarea"
      };
      break;

    case "keyValue":
      osakde = {//
      };
  }

  const retier = {
    name: objsoa,
    ...osakde // ...asdwe,

  };
  return retier;
} // 1date

function dictDate({
  value,
  containConfig,
  defaultNow,
  ...cvsd
}) {
  function xvkbdffs() {
    // logs.logga("___ vfdgd ___", vfdgd);
    const sdifjer = value ? value : defaultNow && new Date();
    const sidfjwer = {
      disableCalendar: true,
      disableClock: true,
      isCalendarOpen: false,
      isClockOpen: false,
      value: sdifjer,
      ...cvsd,
      style: {
        width: "100%"
      }
    };
    const ijsdfewr = {
      style: {
        textAlign: "left",
        padding: "0 10px"
      },
      ...containConfig
    };
    return /*#__PURE__*/React.createElement("div", ijsdfewr, " ", /*#__PURE__*/React.createElement(DateTimePicker, sidfjwer));
  }

  return {
    inputObjectFunction: xvkbdffs
  };
} // 1url 1link


function _dictURL({
  register,
  ...asdf
}) {
  const ijsdrase = {// adsfokew: "okdasdas",
    // name: "timeNumber",
    // type: "number",
    // pattern: {
    //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //   message: "invalid email address",
    // },
  };
  return ijsdrase;
} // 1time


function _dictTime() {
  const ijsdrase = {
    name: "timeNumber",
    inputType: "number"
  };
  const xvnfs = [//
  "seconds", "minutes", "hours", "days", "weeks"];
  const jfdgre = {
    name: "timeString",
    inputType: "select",
    optionsArray: xvnfs
  };
  return {
    required: true,
    horizList: [//
    ijsdrase, jfdgre]
  };
} // 1address


function _dictAddress() {
  return {
    required: true,
    name: "address",
    inputType: "textarea",
    label: "Address"
  };
} // function
//   1name


function _dictName() {
  //
  const nasmwoBL = {
    required: true,
    // pattern: emailPatto,
    name: "name",
    label: "Name",
    // label: vbijdf9te,
    iconvar: "" // iconvar: "email",

  };
  return nasmwoBL;
} //   1password


function _dictPassword() {
  return {
    required: true,
    name: "password",
    label: "Password",
    inputType: "password"
  };
}

function _dictMobile() {
  useState();

  function asdwease(sdfwer) {
    const sdjfewr = {
      style: {
        marginRight: "10px" // width: "30px",

      }
    };
    const jsdfw = "+44";
    const sdifjer = /*#__PURE__*/React.createElement(BearFormButton, sdjfewr, jsdfw);
    const ijsdsf = /*#__PURE__*/React.createElement(Flex$1, null, sdifjer, sdfwer);
    const dfjgr = //
    // sdfwer;
    ijsdsf;
    return dfjgr;
  }

  return {
    inputObjectFunction: asdwease,
    name: "mobileNumber",
    label: "Mobile Number",
    inputType: "number" // inputLeft: "+44",

  };
}

function BearFormSetup({
  register,
  inputStyle,
  formData,
  inputType,
  style,
  name,
  horizList,
  errors,
  ...baseObj
}) {
  //
  const ndifjg = {
    //
    errors,
    name,
    formData,
    ...baseObj
  }; // 1log 1console

  function getRef(refDone) {
    return xcvdfe(refDone);
  }

  function xcvdfe({ ...asdsa
  }) {
    //
    const reffo = //
    // {};
    // register()
    // register(asdsa);
    // register(name);
    // register(name, {});
    register(name, asdsa);
    const jdsedr = {
      innerRef: reffo,
      ref: reffo,
      ...reffo
    };
    return jdsedr;
  }

  const ijdfewr = inputType && { ...getFormPass(inputType, ndifjg),
    inputType
  };
  const cxvijdsf = { ...ndifjg,
    ...getFormPass(name, ndifjg),
    ...ijdfewr
  };
  const okasew = getRef(cxvijdsf);
  const hookArgs = { ...okasew
  };
  const existo = formData && formData[name];
  const ijawe = existo ? existo : baseObj.textvar;
  const cadwee = { ...style
  };
  const cvbijv = ijawe && {
    initialValue: ijawe // value: ijawe,
    // textvar: ijawe,

  };
  const asw = //
  errors && errors[name] && errors[name]["message"];
  const fudger = { ...cvbijv,
    name,
    errorMessage: asw,
    ...hookArgs,
    // ...ndifjg,
    register,
    label: BearUpper(name),
    ...cxvijdsf,
    // ...getFormPass(name, ndifjg),
    style: cadwee,
    containerStyle: inputStyle
  };
  const odkasew = //
  fudger; // argMiss(fudger);

  const oiaswe = //
  // "sodkwea";
  BearFormInputCheck(odkasew); // BearInput(odkasew);
  // <input {...odkasew} />
  // <InputChak {...odkasew} />

  return oiaswe;
}

function BearForm({
  noButton,
  noText,
  listDict,
  loadConfig,
  bearName = "",
  textConfig,
  list,
  //
  inputConfig,
  //
  // 1button
  buttonConfig = {},
  buttonText = "Submit",
  buttonSize = "35px",
  betweenItem,
  //
  //
  // 1focus
  focusFirst,
  //
  buttonList,
  toplist,
  noForm,
  dictvar,
  headerObj,
  singleTrue,
  headerConfig,
  logtrue,
  tabConfig,
  schema,
  hookConfig,
  typeForm,
  //
  topButtonConfig,
  ImageTextList,
  topButtonTrue,
  autofocus,
  formid,
  // 1required
  requireAll,
  //
  // 1submit
  loadSubmit,
  onSubmit,
  submitExtra,
  topObj,
  //
  // style,
  marginBetween,
  //
  //
  ...args
}) {
  //
  // 1const
  const [loadSetto, setloadSetto] = //
  ["", ""]; // useState();

  function goSing(doksad) {
    let sdifje = Object.values(doksad)[0];
    return sdifje;
  }

  function mainFI(values) {
    let asaoke = submitExtra && submitExtra();
    values = {
      typeForm,
      bearName,
      ...values,
      ...asaoke
    };
    return values;
  }

  function subbTo({
    _reactName,
    listIndex,
    ...values
  }, funta) {
    const kjdsasd = //
    // funta
    !_reactName && !listIndex && funta;

    if (kjdsasd) {
      cxvbmf(values, funta);
    }
  } // 1submit


  function cxvbmf(values, funta) {
    //
    if (loadSubmit) {
      setloadSetto(true);
    }

    const emptiosa = !isEmpty(values);
    const trudsoe = onSubmit && emptiosa;

    if (trudsoe) {
      let dsifer = singleTrue ? goSing(values) : mainFI(values);
      funta(dsifer);
      setloadSetto();
    }
  }

  const difjgr = { ...args,
    id: formid
  };
  args = { ...args,
    bearName
  }; // 1button

  function Buttiona({
    text,
    style,
    ...siwerew
  }) {
    const jsadcvx = {
      // width: "100%",
      // padding: "60px",
      color: "white",
      background: "green",
      padding: "5px 10px",
      fontSize: buttonSize,
      // marginBottom: "20px",
      ...style
    };
    const nsdijfer = {
      name: "submitButton",
      text: buttonText
    };
    const dvbijkrw = { // ...fghtr,
      ...nsdijfer,
      ...siwerew,
      type: "submit",
      value: text,
      form: formid,
      style: jsadcvx,
      // genConfig: aewsadw,
      className: "buttonHover" // marginTop: ""

    };
    const adhwdse = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", dvbijkrw, text ? text : buttonText));
    return adhwdse;
  }

  function FormError(textvar) {
    const dfbokerr = BearError(textvar);
    return dfbokerr;
  }

  function sdfok(obj) {
    const inDict = dictvar && dictvar[obj];
    const nissase = requireAll && {
      required: true
    };
    const bfdg = { ...nissase,
      ...inputConfig
    };
    const baseObj = {
      dictvar,
      inputItem: obj,
      name: obj,
      ...idjfe,
      ...bfdg,
      ...inDict,
      ...argMiss(args)
    };
    const fdjgre = baseObj.obj;
    const obvdsaf = fdjgre ? fdjgre : isEmpty(baseObj) ? FormError("no form Dictionary supplied - " + obj) : BearFormList(baseObj);
    const sdijfr = //
    obvdsaf; // "sdofkwerw";

    return sdijfr;
  } //   const [currTab, setcurrTab] = useState(initBase);


  const currTab = "";
  const currForm = currTab;
  topButtonTrue && list[0];
  const listRend = listDict && listDict[currForm];
  const atbosa = listRend ? listRend : currForm;
  const listaros = topButtonTrue ? [atbosa] : list;
  const ijawesdafr = {
    dictvar: dictvar,
    list: list
  }; // function sasee(){
  //   const jsid = onSaveDraft &&
  // }

  function sdijfwer({
    onClick,
    ...sdf
  }) {
    function xcvase(adfad) {
      subbTo(adfad, onClick);
    } // const ijfde =


    const jidsfjd = { ...buttonConfig,
      ...sdf,
      onClick: onClick && handleSubmit(xcvase)
    }; // return "asokdewe";

    return Buttiona(jidsfjd);
  }

  function ajde() {
    const jsdre = //
    buttonList; // buttonList ? buttonList : [mainSb];

    const jnsdf = //
    bearName + "_BearForm_Buttons";
    const xcvnsdf = {
      bearName: jnsdf,
      list: jsdre,
      horiz: true,
      renderItem: sdijfwer
    }; // function

    const ijsdrwe = BearList(xcvnsdf);
    return ijsdrwe;
  } // 1button


  const buttio = //
  //
  !noButton && buttonList ? ajde() : Buttiona(buttonConfig);

  function vijsd9({
    name,
    ...adaw
  }) {
  }

  function iasjdwe(obj) {
    // const chsersd = checkTick()
    const kadwesd = /*#__PURE__*/React.createElement(React.Fragment, null, obj["tabTitle"]);
    return kadwesd;
  }

  function Tabios() {
    const bdoewr = //
    "greyHover pointer";
    const okae = {
      margin: "10px",
      borderRadius: "20px"
    };
    const oksae = {
      chosenConfig: {
        bediaTrue: true
      },
      itemConfig: {
        style: okae,
        className: bdoewr
      }
    };

    function aidsjfew({
      title,
      iconvar,
      style,
      ...zcvdf
    }) {
      const okawe = {
        style: {
          fontSize: "1.5em"
        },
        obj: iconvar
      };
      const lpsda = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, okawe), title);
      style["textAlign"] = "center";
      return lpsda; //   return <BearDiv {...oaewc} />;
      // return "oskdasd";
    }

    const asodwe = {
      onClick: vijsd9,
      singleClick: true,
      horiz: true,
      chosenItem: currTab,
      // titleAttr: "tabTitle",
      titleFunc: iasjdwe,
      ...oksae,
      ...ijawesdafr,
      ...tabConfig,
      obj: aidsjfew // obj: (adqq) => "aspdle",

    };
    const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearList, asodwe));
    return okfdsd;
  } // 1map


  function maperlis(sdfew) {
    return sdfew.map(sdfok);
  }

  const kaewsae = maperlis(listaros);
  const sudhawe = topButtonTrue ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabios, null), kaewsae) : kaewsae;
  /*#__PURE__*/React.createElement(React.Fragment, null, sudhawe);
  const iterwr = toplist;
  const mappit = iterwr ? /*#__PURE__*/React.createElement(React.Fragment, null, maperlis(toplist), /*#__PURE__*/React.createElement("br", null), sudhawe) : /*#__PURE__*/React.createElement(React.Fragment, null, sudhawe);
  const aidjwe = /*#__PURE__*/React.createElement(React.Fragment, null, topObj, mappit, betweenItem, buttio);
  const ijdfsr = //
  difjgr; // argPass

  const xcvsfs = loadSetto ? /*#__PURE__*/React.createElement(LoadMain, loadConfig) : noForm ? aidjwe : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", ijdfsr, aidjwe));
  const nsdokfer = argPass(args);
  const isae = /*#__PURE__*/React.createElement("div", nsdokfer, xcvsfs);
  const isjdwesdfoek = //   //
  !formid ? BearErrMiss("formid", bearName, "BearForm") : BearCheckMain("BearForm", isae, args); // // aweuw;
  // BearCheckMain("BearForm", <BearForm {...dfjgrt} />, args);
  // // <div {...genConfig}>{aweuw}</div>;

  return isjdwesdfoek;
}
function BearFormList({
  inputList,
  horizList,
  ...jdfsd
}) {
  //
  const sijewer = inputList || horizList; //

  function sdjfwer() {
    function cvlbk({
      label,
      ...dfewer
    }) {
      const isdjfre = !label && {
        noLabel: true
      };
      const dfjsds = { ...jdfsd,
        ...isdjfre,
        ...dfewer,
        label
      };
      return firstInputCheck(dfjsds);
    }

    const jdfwea = //
    // "oksdfer";
    sijewer.map(cvlbk);
    const fbjdfg = horizList && {
      flex: true,
      vertAlign: true
    };
    const ijdfges = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, fbjdfg, jdfwea));
    return BearInputBase(ijdfges, jdfsd);
  }

  const ijfgase = sijewer ? sdjfwer() : firstInputCheck(jdfsd);
  return ijfgase;
}
function firstInputCheck({
  addTrue,
  noName,
  inputItem,
  ...baseObj
}) {
  //
  const nameeo = baseObj.name;
  const ijsre = noName ? {//
    // noLabel: true,
  } : {
    name: inputItem // inputItem

  };
  const isjdfe = { ...baseObj,
    ...ijsre
  }; // 1name

  const okwaew = //
  // "oskdfwerw"
  noName ? BearFormSetup(isjdfe) : nameeo ? BearFormSetup(isjdfe) : BearErrMiss("name", baseObj.bearName + "'s input elementk");
  return okwaew;
}

function FormBase({ //
  // seriesObj,
  ...args
}) {
  // 1const
  const modeo = //
  // "onBlur";
  // "onSubmit";
  // "onChange";
  "all";
  const oksdaew = {
    // validationSchema: asokew,
    // resolver: asokew,
    //
    reValidateMode: "onBlur",
    mode: modeo // ...hookConfig,

  };
  const {
    //
    handleSubmit,
    // watch,
    ...asdw
  } = //
  useForm(oksdaew);

  function fdijgg(okdfg) {
  }

  const cvkbdf = {
    onSubmit: handleSubmit(fdijgg)
  };
  const bkgfo = {
    name: "password",
    // required: true,
    ...asdw
  };
  const ijsasr = [//
  "List", "Base"];
  const koerte = {
    // inputFunction: BearSelect,
    name: "dfgerr",
    multi: true,
    optionsArray: ijsasr,
    ...asdw
  };
  BearFormSetup(bkgfo);
  const kdfgr = {
    type: "submit"
  };
  const okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", cvkbdf, BearFormSetup(koerte), /*#__PURE__*/React.createElement("button", kdfgr, "SUBMIT")));
  return okfdsd;
}

// import firebase from "firebase/app";
function fireConnect(fireObj, {
  processType,
  authType,
  onFailure,
  onSuccess
}) {
  let dsofkes = "";

  switch (authType) {
    case "google":
      dsofkes = new fireObj.auth.GoogleAuthProvider();
      break;

    case "facebook":
      dsofkes = new fireObj.auth.FacebookAuthProvider();
      break;

    case "twitter":
      dsofkes = new fireObj.auth.TwitterAuthProvider();
      break;

    case "github":
      dsofkes = new fireObj.auth.GithubAuthProvider();
      dsofkes.addScope("repo");
      break;

    case "microsoft":
      dsofkes = new fireObj.auth.MicrosoftAuthProvider();
      break;

    case "instagram":
      dsofkes = new fireObj.auth.FacebookAuthProvider();
      break;

    case "yahoo":
      dsofkes = new fireObj.auth.YahooAuthProvider();
      break;

    case "apple":
      dsofkes = new fireObj.auth.AppleAuthProvider();
      break;

    case "phone":
      dsofkes = new fireObj.auth.PhoneAuthProvider();
  }

  function aokdw(userBase) {
    // creatUseAfter(userBase, funcvar);
    onSuccess(userBase);
  }

  if (dsofkes) {
    switch (processType) {
      case "redirect":
        fireObj.auth().signInWithRedirect(dsofkes).then(aokdw).catch(asd9eiqw);

      default:
        fireObj.auth().signInWithPopup(dsofkes).then(aokdw).catch(asd9eiqw);
    }
  } else if (onFailure) {
    onFailure({
      authType,
      errorType: "unsupported"
    });
  }

  function asd9eiqw({
    code,
    message,
    ...asdfkwer
  }) {
    const erroDit = //
    "auth/operation-not-allowed";
    const errrFin = //
    "The identity provider configuration is not found.";
    let errIdent = "";

    switch (code) {
      case erroDit:
        switch (message) {
          case errrFin:
            errIdent = "unsupportedAuth";
            break;
        }

    }

    if (onFailure) {
      onFailure({
        authType: authType,
        errorType: errIdent
      });
    }
  }
}

function BearUserConnect({
  firebase,
  ...asaea
}) {
  if (firebase) {
    // const userBase = await
    fireConnect(firebase, asaea); // ijsdr = {
    //   user: userBase,
    //   ...ijsdr,
    // };
  }
}

function BearAuthPortal({
  //
  funcvar,
  typeSign = "register",
  socialConfig,
  socialSubmit,
  onSubmit,
  bearName = "BearAuthPortal",
  emailSubmit,
  firebase,
  onSuccess,
  onFailure,
  list,
  authList,
  formConfig,
  changeButton,
  ...sdse
}) {
  //
  //
  // 1baseargs
  // let emaTrue;
  // setemaTrue;
  // sdfer;
  // setsignType = "";
  const [emaTrue, setemaTrue] = useState();
  const [sdfer, setsignType] = useState(typeSign);
  let signType = //
  typeSign; // sdfer;

  function signCheck(typevar) {
    let okads = //
    // "";
    "Continue with " + typevar; // switch (signType) {
    //   case "login":
    //     okads = "Log in with " + typevar;
    //     break;
    //   case "signup":
    //     okads = "Sign up with " + typevar;
    //     break;
    // }

    return okads;
  }

  const Jfase = () => //
  // "telegram";
  // "google";
  BearIcon("email"); // <BiShare />
  // 1emailbase


  const emaCon = {
    text: signCheck("Email"),
    icon: Jfase,
    // iconFormat: (name) => `fa fa-${name}`,
    style: {
      background: "#FF5733"
    },
    activeStyle: {
      background: "#ff6700"
    }
  };
  /** My Facebook login button. */

  const EmailLoginButton = createButton(emaCon);
  const idfjgrt =
  /*#__PURE__*/
  ///
  React.createElement(EmailLoginButton, null); // BearIconText("email", signCheck("Email"));

  function dskwad() {
  }

  const emBaso = {
    textvar: idfjgrt,
    onClick: dskwad,
    typevar: "email"
  }; // function retto(typeo, button){
  //   return
  // }

  const fdsogkret = {
    google: {
      textvar: /*#__PURE__*/React.createElement(GoogleLoginButton, null, signCheck("Google")),
      // textvar: "Google",
      typevar: "google"
    },
    instagram: {
      textvar: /*#__PURE__*/React.createElement(InstagramLoginButton, null, signCheck("Instagram"))
    },
    facebook: {
      textvar: /*#__PURE__*/React.createElement(FacebookLoginButton, null, signCheck("Facebook")),
      // textvar: "Facebook",
      // iconvar: <SiFacebook />,
      typevar: "facebook"
    },
    email: emBaso,
    github: {
      textvar: /*#__PURE__*/React.createElement(GithubLoginButton, null, signCheck("Github")),
      // textvar: "Twitter",
      // iconvar: <SiGithub />,
      typevar: "github"
    },
    apple: {
      textvar: /*#__PURE__*/React.createElement(AppleLoginButton, null, signCheck("Apple")),
      typevar: "apple"
    },
    twitter: {
      textvar: /*#__PURE__*/React.createElement(TwitterLoginButton, null, signCheck("Twitter")),
      typevar: "github"
    },
    linkedin: {
      typevar: "linkedin",
      textvar: /*#__PURE__*/React.createElement(LinkedInLoginButton, null, signCheck("Discord"))
    },
    microsoft: {
      typevar: "microsoft",
      textvar: /*#__PURE__*/React.createElement(MicrosoftLoginButton, null, signCheck("Discord"))
    },
    discord: {
      textvar: /*#__PURE__*/React.createElement(DiscordLoginButton, null, signCheck("Discord")),
      typevar: "github"
    } //

  };

  async function osadew({
    itemType
  }) {
    const typevar = itemType;
    let isdfwer = {
      firebase,
      onSuccess,
      onFailure,
      authType: itemType
    }; // isdfwer["authType"] = typevar;

    switch (typevar) {
      case "email":
        setemaTrue(true);
        break;

      default:
        const ijsre = //
        firebase; // firebase || supabase || passportjs || auth0

        if (ijsre) {
          BearUserConnect(isdfwer);
        } else if (onSubmit) {
          onSubmit(itemType);
        }

      //
      // socialSubmit(typevar);
    }
  }

  function ASsfokse({
    textvar
  }) {
    // const sdfke = { style: { margin: "20px 0" } };
    // const ijsder = <BearDiv {...sdfke}>{textvar}</BearDiv>;
    return textvar; // return ijsder;
  }

  const difjewr = //
  list; // authList ? authList : ifje;

  const igfder = {
    list: difjewr,
    dictvar: fdsogkret,
    onClick: osadew,
    bearName: "BearAuthPortal - Social Authentication",
    logtrue: true,
    spaceBetween: "30px",
    renderItem: dsafweR,
    ...socialConfig
  };

  function dsafweR(asdfe) {
    return ASsfokse(asdfe); // return "gisdfoe";
  }

  function spfdewr({
    email,
    password
  }) {
    // userLogSign(email, password, funcvar);
  } // 1console

  const dsfijd =
  /*#__PURE__*/
  //
  // {/* <BearTextMedia {...igfder} /> */}
  React.createElement(BearList, igfder);

  function FOrnaW() {
    //
    //
    const dfijd = [//
    "email", "password"];
    const klmi = //
    // sofer;
    spfdewr;
    const dfgre = {
      list: dfijd,
      // dictvar:
      // sameline
      buttonText: "Register",
      bearName: "register",
      onSubmit: klmi,
      ...sdse,
      ...formConfig
    };
    const forso = /*#__PURE__*/React.createElement(BearForm, dfgre);
    return forso;
  }

  const jvsfeer = //
  emaTrue ? /*#__PURE__*/React.createElement(FOrnaW, null) : dsfijd;

  function OrCHekc() {
    let baseTEST = "";
    let bottLink = "";
    let changeit = "";

    switch (signType) {
      case "login":
        changeit = "signup";
        baseTEST = "Don't have an account?";
        bottLink = "Sign Up for free";
        break;

      case "signup":
      case "register":
        baseTEST = "Already have an account?";
        bottLink = "Sign in to Bedia";
        changeit = "login";
        break;
    }

    const kasesd = {
      obj: baseTEST
    };

    function saoke(sad) {
      setsignType(changeit);
    }

    const koewqe = {
      onClick: saoke,
      // link: "?typeSign=" + signType,
      // link: " signType,
      // linkConfig: {
      //   noBlack: true,
      // },
      obj: bottLink,
      style: {
        marginBottom: "20p",
        fontSize: "1.3em"
      }
    };
    const oksae = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, kasesd), /*#__PURE__*/React.createElement(BearDiv$1, koewqe));
    const sdease = {
      obj: oksae,
      bediaTrue: true,
      style: {
        padding: "15px"
      }
    };
    const kdsfse = /*#__PURE__*/React.createElement(BearButton, sdease);
    const oasebd = {
      style: {
        paddingTop: "20px",
        textAlign: "center",
        fontSize: "1.3em"
      },
      obj: kdsfse
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, oasebd);
  }

  const jdtre = sdfer && /*#__PURE__*/React.createElement(React.Fragment, null, jvsfeer, changeButton && /*#__PURE__*/React.createElement(OrCHekc, null));
  const nsifjew = {
    // requiredArgs: { onSubmit },
    titleConfig: {
      // lineBetween: true,
      // class: "shadowButton",
      style: {
        fontWeight: "bold",
        // padding: "0 20%",
        fontSize: "1.6em",
        marginBottom: "30px"
      }
    },
    bearName,
    ...sdse
  }; // return "aaaaaaaasdja";

  return BearCheckMain("BearAuthPortal", jdtre, nsifjew);
}

const twitLink = "https://twitter.com/";
const plsusew = "";
const twitterShareLink = twitLink + "intent/tweet" + plsusew;
const twittDirectLink = twitLink + "messages/compose" + plsusew; // 1twitter

const skeweewr = {
  linkBase: twitterShareLink,
  iconvar: "twitter",
  toolText: "Twitter",
  textConnect: "text",
  linkConnect: "url",
  styleIcon: {
    color: "white",
    background: "#1da1f2"
  }
}; // 1reddit

const rddito = {
  linkBase: "https://www.reddit.com/submit",
  linkConnect: "url",
  toolText: "Reddit",
  textConnect: "title",
  styleIcon: {
    color: "white",
    background: "#FF4301"
  }
}; // 1hacker

const hckn = {
  toolText: "Hacker News",
  linkBase: "https://news.ycombinator.com/submitlink",
  textConnect: "t",
  linkConnect: "u"
}; // 1linkedin

const lnkeos = {
  linkBase: "https://www.linkedin.com/sharing/share-offsite",
  toolText: "Linkedin",
  // textConnect: "url",
  linkConnect: "url",
  summaryVar: "summary",
  styleIcon: {
    color: "white",
    background: "#0e76a8"
  }
}; // 1google

const ggge = {
  toolText: "Google",
  linkBase: "https://www.google.com/search",
  textConnect: "q"
}; // 1embed

const okfgfd =
/*#__PURE__*/
//
//  <ImEmbed2/>
React.createElement(FaCode, null);
const dkewqew = {
  iconvar: okfgfd,
  toolText: "Embed",
  copyLink: true
}; // 1whatsapp

const whstConfo = {
  // linkBase: "https://api.whatsapp.com/send/?phone",
  linkBase: "https://web.whatsapp.com/send",
  textConnect: "text",
  toolText: "Whatsapp",
  styleIcon: {
    color: "white",
    background: "#128C7E"
  }
}; // 1facebook

const fceConfo = {
  linkBase: "https://www.facebook.com/sharer/sharer.php",
  // textConnect: "u",
  linkConnect: "u",
  typevar: "facebook",
  toolText: "Facebook",
  styleIcon: {
    color: "white",
    background: "#3b5998"
  }
}; // 1telegram

const teldsofe = {
  linkBase: "https://t.me/share/url",
  textConnect: "text",
  linkConnect: "url"
}; // 1copy

const cppyo = {
  // toolText: "Copy link to Clipboard",
  // noLink: true,
  toolText: "Copy Link",
  copyLink: true,
  iconvar: /*#__PURE__*/React.createElement(AiOutlineCopy, null)
};
const authListDict = {
  facebook: fceConfo,
  telegram: teldsofe,
  // messenger: {
  //   iconvar: "messenger",
  //   linkBase: "https://www.messenger.com/t/",
  //   // textConnect: "t",
  //   // linkConnect: "u",
  // },
  copy: cppyo,
  embed: dkewqew,
  quote: {
    noLink: true,
    iconvar: "quote",
    toolText: "Copy Quote"
  },
  whatsapp: whstConfo,
  email: {
    linkBase: "mailto:",
    title: "subject",
    textConnect: "body"
  },
  //   1twitter
  twitter: skeweewr,
  twitterdm: { ...skeweewr,
    linkBase: twittDirectLink,
    toolText: "Twitter DM"
  },
  reddit: rddito,
  hackerNews: hckn,
  linkedin: lnkeos,
  google: ggge,
  slack: {//
  },
  skype: {//
  },
  instagram: {//
  },
  wechat: {
    iconvar: "weixin"
  },
  weibo: {//
  },
  qq: {//
  }
};

function BearSocialBase({
  //
  shareLink,
  shareText,
  userText,
  iconSide,
  nameTrue,
  iconPop,
  dictvar,
  iconStyle,
  embedCode,
  itemConfig,
  ...sdfsrew
}) {
  // 1const
  useState("");
  const [cosNamB, setcosNamB] = useState();
  userText = cosNamB ? cosNamB : userText; // userText = "okwqeasd sodkdsfo";

  const sdokfwe = userText ? `&usrn=${userText}` : "";
  shareLink = //
  // shareLink + "sdokfwe";
  shareLink + sdokfwe;

  function iasjde({
    //
    typevar,
    iconvar,
    iconText,
    textvar,
    toolText,
    styleIcon,
    style,
    copyLink,
    ...asswd
  }) {
    /*#__PURE__*/React.createElement(React.Fragment, null);
    let mainIco = {
      iconConfig: {
        className: "pointer",
        style: {
          fontSize: "0.9em",
          // width: "50px",
          // height: "50px",
          borderRadius: "60%",
          padding: "10px",
          ...styleIcon,
          ...iconStyle
        }
      }
    };
    let saewawe = iconSide && {
      textvar: toolText,
      ...mainIco
    };
    let ikasde = iconPop && {
      popConfig: {
        trigger: "click",
        content: toolText
      }
    }; // textvar: toolText,
    // left: iconvar,
    // popContent: toolText,

    const jsaease = { ...saewawe,
      ...ikasde,
      ...itemConfig,
      ...mainIco,
      iconvar,
      noVertTop: true,
      padvar: 5,
      ...asswd
    };
    const gfnmeir = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearTextMedia, jsaease));

    return gfnmeir;
  }

  function sadqwe({
    itemName,
    ...cvdfa
  }) {
    //
    const jweqwe = !dictvar ? cvdfa : { ...dictvar[itemName],
      ...cvdfa
    };
    let osdasew = //
    iasjde({
      iconvar: itemName,
      ...jweqwe
    }); // "qplwqe";
    return osdasew;
  }
  const ijsadwe = {
    dictvar: authListDict,
    // list: okaasad,
    renderItem: sadqwe,
    typeTrue: "t",
    iconSide: iconSide,
    // horiz: true,
    // itemConfig: sdije,
    // linkConfig: linksos,
    ...sdfsrew
  };
  const compBase = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearList, ijsadwe)); //

  const ijfdewr = BearCheckMain("BearSocialShare", compBase, ijsadwe);
  return ijfdewr;
}

function BearSocialLinks({
  //
  twitter,
  whatsapp,
  github,
  facebook,
  ...args
}) {
  // 1const
  /*#__PURE__*/React.createElement(React.Fragment, null, "sssss");
  const isjdfer = {
    facebook,
    twitter,
    whatsapp
  };

  function asdhwe(faes) {
    return {
      logtrue: true,
      outsideLink: faes // link: faes

    };
  }

  const isjdre = {};

  for (const [key, value] of Object.entries(isjdfer)) {
    isjdre[key] = asdhwe(value);
  } // const isjdre = mapDictFunc(isjdfer, asdhwe);
  args = {
    dictvar: isjdre,
    ...args
  }; //   return "dkew";

  return /*#__PURE__*/React.createElement(BearSocialBase, args);
}

function BearSocialShare({
  //
  shareLink,
  shareText,
  userText,
  iconSide,
  nameTrue,
  iconPop,
  dictvar,
  iconStyle,
  embedCode,
  itemConfig,
  ...sdfsrew
}) {
  // 1const
  useState("");
  const [cosNamB, setcosNamB] = useState();
  const sodkfwe = "asdqweqs";
  userText = cosNamB ? cosNamB : userText; // userText = "okwqeasd sodkdsfo";

  const sdokfwe = userText ? `&${linkuseNameProvide}=${userText}` : "";
  shareLink = //
  // shareLink + "sdokfwe";
  shareLink + sdokfwe;

  function sfasawe({
    //
    typevar,
    iconvar,
    iconText,
    textvar,
    toolText,
    styleIcon,
    style,
    copyLink,
    ...asswd
  }) {
    const ijsaew = {
      compName: "BearSocialShare",
      typevar: typevar,
      textvar: shareText,
      link: shareLink,
      ...asswd
    }; // endValue = {
    //   copyLink {
    //     copyText: shareLink,
    //   } : {
    //   link: linkOrdse(ijsaew)}

    let endValue = "";

    switch (typevar) {
      case "copy":
        endValue = {
          copyConfig: {
            copyMessage: "Copied Link",
            copyText: shareLink
          }
        };
        break;

      case "embed":
        endValue = {
          copyConfig: {
            copyMessage: "Copied Embed Code!",
            copyText: embedCode
          }
        };
        break;

      default:
        endValue = { ...getBlankLink(linkOrdse(ijsaew))
        };
    }

    const jsaease = { ...endValue,
      ...mainIco,
      iconvar,
      // textvar: toolText,
      // left: iconvar,
      noVertTop: true,
      // popContent: toolText,
      padvar: 5
    };
    return jsaease;
  }

  const ijsadwe = {
    dictvar: authListDict,
    renderFunc: sfasawe,
    ...sdfsrew
  };

  function NameSingio() {
    function asokds(sdfer) {
    }

    const okasew = {
      bearName: sodkfwe,
      // onSubmit: subopens,
      onChange: asokds,
      singleTrue: true,
      noButton: true,
      list: [{
        name: "name"
      }]
    };
    const vcbfd = /*#__PURE__*/React.createElement(BearForm, okasew);
    return vcbfd;
  }

  const tkdf = nameTrue && /*#__PURE__*/React.createElement(NameSingio, null);
  const compBase = /*#__PURE__*/React.createElement(React.Fragment, null, tkdf, /*#__PURE__*/React.createElement(BearSocialBase, ijsadwe)); //

  const ijfdewr = BearCheckMain("BearSocialShare", compBase, ijsadwe);
  return ijfdewr;
}

function BearSearchSelect({
  //
  seriesObj,
  ...args
}) {
  // 1const
  args = { // obj: okfdsd,
    ...args
  };
  const kdserase =
  /*#__PURE__*/
  //
  React.createElement(BearSelect, args) // <SelectSearch {...args} />;
  ;
  return kdserase;
}

function BearSearchList({
  //
  onChange,
  list,
  dictvar,
  bearName,
  renderItem,
  searchAttrs,
  listConfig,
  optionStyle,
  // header
  initialValue,
  layoutList,
  headerAtts,
  headerConfig,
  ...args
}) {
  // 1baseargs
  const dfijgret = {
    //
    renderItem,
    bearName,
    list // ignoreEmpty: true

  };
  const baseargs = {
    dictvar,
    ...dfijgret,
    ...args
  }; // 1const

  searchAttrs = searchAttrs ? searchAttrs : getListAll(list, {
    //
    listDictAdd: true,
    dictvar
  });
  const [searchTerm, setsearchTerm] = //
  // [initialValue, ""];
  useState(initialValue);
  const dfigre = {
    inputValue: searchTerm
  };
  const extractSplit = //
  "*";

  function askdwew({
    listItemName = "",
    ...map
  }) {
    const sdfgoekse = //
    // map;
    listItemName + extractSplit + mapDictAttrToString(searchAttrs, " ", map);
    return sdfgoekse;
  }

  function xvibjrg(sadofkwe) {
    const stringios = typeof sadofkwe;
    const doNot = stringios == "object";
    const digjer = doNot ? sadofkwe : //
    {
      listItemName: sadofkwe
    }; // BearError("Bearsearch is not an object");

    const mdvokdfdsa = { ...digjer,
      ...dfigre
    };
    const dibjgret = //
    // digjer;
    // "okweerq"
    aassae(mdvokdfdsa);
    return dibjgret;
  }

  function aassae({
    listItemName,
    ...mapase
  }) {
    const kjsad = { ...baseargs,
      ...listConfig,
      // ...asaes,
      logtrue: true
    };
    const sdfje = isEmpty(mapase) ? listItemName : {
      listItemName,
      ...mapase
    };
    const oksaase = BearListItem(sdfje, kjsad);
    const dfgijert = /*#__PURE__*/React.createElement(React.Fragment, null, oksaase);
    const ijsf = {//
      // className: "buttonHover shadowHover",
      // style: isjfer,
    };
    const sdifjwer = /*#__PURE__*/React.createElement(BearDiv$1, ijsf, dfgijert);
    return sdifjwer;
  }

  const vcxbfg = //
  // isdae;
  !list ? [] : mapSelectValue(list, {
    dictvar: dictvar,
    labelFunc: xvibjrg,
    valueFunc: searchAttrs && askdwew,
    // headerFunc:
    isDisabled: true
  }); // 1header

  function DSIFJ() {
    //
    //
    const sodfer = { ...dfijgret,
      // list: layoutList,
      bearName: nameComb(bearName, "searchList-HEADER"),
      capitaliseTypeText: true,
      // item: headerConfig,
      // renderItem: aassae,
      typeList: "div",
      flex: true
    };
    return /*#__PURE__*/React.createElement(BearList, sodfer);
  }

  const arrmode = //
  vcxbfg; // headerAtts

  function qe4ead(vcdfge) {
    var nameos = vcdfge.substr(0, vcdfge.indexOf(extractSplit));

    if (onChange) {
      onChange(nameos);
    }
  }

  const jsdrase = {
    options: arrmode,
    onChange: qe4ead
  };
  const hsdr = {
    background: "transparent",
    ...optionStyle
  };

  function asodkwe(zxcvdf) {
    setsearchTerm(zxcvdf);
  }

  const vobkv = {
    onInputChange: asodkwe
  };
  args = {
    menuStick: true,
    noMenuBorder: true,
    optionStyle: hsdr,
    menuIsOpen: true,
    placeholder: "Search",
    searchBarIcon: "search",
    bearName,
    onChangeSetValue: false,
    ...jsdrase,
    ...vobkv,
    ...args
  };

  const qasds = headerAtts && DSIFJ();
  const kdserase = //
  // BearSearchBase(args);
  BearSearchSelect(args); // <SelectSearch {...args} />;

  const dfjgert = /*#__PURE__*/React.createElement(React.Fragment, null, qasds, kdserase);
  return BearCheckList("BearSearchList", dfjgert, baseargs); // return kdserase;
}

export { BearAttrNeeds, BearAuthPortal, BearBackBorder, BearBackForward, BearBlankLink, BearBorder, BearButton, BearButtonDownload, BearButtonList, BearCheckMain, BearContextProvider, BearCopy, BearDiv$1 as BearDiv, BearDivMain, BearEmoji, BearErASDJIQWE, BearErrArgType$1 as BearErrArgType, BearErrMiss, BearError, BearFalseLog, BearFlex, BearFloat, BearForm, BearFormList, BearHideError, BearIcon, BearIconText, BearImage, BearLink, BearList, BearListComp, BearLog, BearMissing, BearModel, BearPlural, BearPossess, BearQuote, BearSearchList, BearSelect, BearSocialBase, BearSocialLinks, BearSocialShare, BearSpace, BearSpan, BearSurround, BearSwitch, BearTags, BearTextMedia, BearTitle, BearUpper, BearWrap, Exmapl, FlexHorz, FormBase, ImageAlign, ImageGroup, InputBaseCheck, InputForm, InputMain, ListFlex, ListReturn, LoadMain, PagePad, SliderMain, SwitchComp, SwitchLayout, addArray, addArrayNumber, addRemoveArray, argMiss, argPass, checkAllArray, checkDict, checkEmptyArray, checkFullArray, checkLenArray, convertObjectDict, createNewDictFromAttr, cxadfa, dfkbijv, filterDictArray, firstInputCheck, functioMa, getAnyDictValue, getEnchancedArray, getExtString, getFirstArr, getLength, getListAll, joinString$1 as joinString, linkBase, logFuncs as logs, mapArrFunc, mapDictAttr, mapDictAttrToString, mapDictFunc, mapDictKey, mapDictKeyToValue, mapDictMain, mapDictNew, mapDictVals, mapFunc, mapFuncDict, mapInnerAttr, mapInnerJoin, mapListDict, mapReturn, mapSelectEnd, mapSelectValue, mapValue, matchDictAttr, mipBase, moveItemArray, moveItemFront, moveItemToFront, nameComb, objectTrue, quoteSurround, removeArray, removeArrayArray, removeEmptyArray, removeEmptyDict, removeItemArray, removeKeyDict, removeKeyList, sliceArray, spaceSurround, stringinarray, turnDict, turnarray };
//# sourceMappingURL=index.esm.js.map
