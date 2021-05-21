import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import React, { useState, useReducer, useEffect, useRef } from 'react';
import { logs as logs$1, turnarray, getParamVar, userLogSign, getUserPlaylists, userConnect, SaveUser as SaveUser$1, moveItemFront, getDuration, timeDecim as timeDecim$1, mediaTypeTrue, joinString, indexHighlights, checkFullArray as checkFullArray$1 } from '@SillyScribe95/bedia-shared/';
import { Avatar, Skeleton } from 'antd';
import { remove, isEmpty } from 'lodash';
import { MdPlaylistPlay } from 'react-icons/md';
import { TiStar } from 'react-icons/ti';
import { BsChatQuote } from 'react-icons/bs';
import { BiShare, BiEdit, BiCommentDetail } from 'react-icons/bi';
import { SiMicrosoftteams, SiSlack, SiNotion, SiGoogle, SiTwitter } from 'react-icons/si';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiFillDelete, AiOutlineLink } from 'react-icons/ai';
import 'react-icons/fi';
import { RiTimerLine } from 'react-icons/ri';
import { FaPlay, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { logs as logs$2, mapFunc, emojiNameString, SaveUser, checkFullArray, mapInnerAttr, turnDictLink, slugFunc } from '@SillyScribe95/bedia-shared';
import { createButton, GoogleLoginButton, FacebookLoginButton, GithubLoginButton, AppleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import 'react-select';
import CreatableSelect$1 from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { Carousel, CarouselItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import moment from 'moment';
import { useQuery } from 'react-query';
import { HiEmojiHappy } from 'react-icons/hi';
import axios$1 from 'axios';
import { useHistory } from 'react-router-dom';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// import { useHistory } from "react-router-dom";

function BearLink(_ref) {
  var outsideVar = _ref.outsideVar,
      blankTrue = _ref.blankTrue,
      outsideTrue = _ref.outsideTrue;
      _ref.hrefTrue;
      _ref.spaceTrue;
      var hashTrue = _ref.hashTrue,
      homeTrue = _ref.homeTrue;
      _ref.disableNone;
      _ref.blackVar;
      _ref.target;
      var disabled = _ref.disabled,
      toVar = _ref.toVar;
      _ref.linkConfig;
      _ref.linkvar;
      var noBlack = _ref.noBlack,
      linkTextTrue = _ref.linkTextTrue,
      textvar = _ref.textvar;
      _ref.obj;
      var style = _ref.style,
      className = _ref.className,
      argso = _objectWithoutProperties(_ref, ["outsideVar", "blankTrue", "outsideTrue", "hrefTrue", "spaceTrue", "hashTrue", "homeTrue", "disableNone", "blackVar", "target", "disabled", "toVar", "linkConfig", "linkvar", "noBlack", "linkTextTrue", "textvar", "obj", "style", "className"]);

  //
  toVar = linkTextTrue && textvar ? textvar.toLowerCase() : hashTrue ? "#" + toVar : homeTrue ? "/" : toVar; // const outReg = gens.outsideReg;
  var outBlank = outsideTrue || outsideVar || blankTrue;
  var noLink = disabled | !toVar;
  var kmda = !noBlack && {
    textDecoration: "none",
    color: "black" // color: colorTextMain,

  };

  var okasdw = _objectSpread2(_objectSpread2({}, kmda), style);

  var aisdwq = _objectSpread2({
    // target: "_blank",
    target: outBlank ? "_blank" : "",
    href: toVar,
    to: toVar,
    style: okasdw,
    className: className
  }, argso); // logs.logga("___ aisdwq ___", aisdwq);


  function Rlasdow() {
    return outBlank ? /*#__PURE__*/React.createElement("a", aisdwq, textvar) :
    /*#__PURE__*/
    // <gens.StyledLink {...aisdwq}>{textPush}</gens.StyledLink>
    React.createElement("a", aisdwq, textvar) //   <Link {...aisdwq}>{textPush}</Link>
    ;
  }

  return noLink ? textvar : /*#__PURE__*/React.createElement(Rlasdow, null);
}

function BearDiv$1(_ref) {
  var obj = _ref.obj,
      bediaTrue = _ref.bediaTrue,
      flexTrue = _ref.flexTrue,
      vertAlign = _ref.vertAlign,
      typeDiv = _ref.typeDiv,
      spanTrue = _ref.spanTrue,
      fontSize = _ref.fontSize,
      linkvar = _ref.linkvar,
      linkConfig = _ref.linkConfig,
      style = _ref.style,
      args = _objectWithoutProperties(_ref, ["obj", "bediaTrue", "flexTrue", "vertAlign", "typeDiv", "spanTrue", "fontSize", "linkvar", "linkConfig", "style"]);

  //
  //
  var osdakew = flexTrue && {
    display: "flex"
  };
  var zxcsd = vertAlign && {
    alignItems: "center",
    justifyContent: "center"
  };
  var kdfr = bediaTrue && {
    background: "red",
    color: "white" // ...bediaMainStyle

  };
  var oksdae = fontSize && {
    fontSize: fontSize
  };

  var gibjr = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, oksdae), osdakew), zxcsd), kdfr), style);

  var oksde = _objectSpread2({
    style: gibjr
  }, args);

  var aokdwe = //
  spanTrue ? "span" : typeDiv;
  var endo = "";

  switch (aokdwe) {
    case "span":
      endo = /*#__PURE__*/React.createElement("span", oksde, obj);
      break;

    default:
      endo = /*#__PURE__*/React.createElement("div", oksde, obj);
  } // 1link


  var okdas = _objectSpread2({
    toVar: linkvar,
    textvar: endo
  }, linkConfig);

  var linkTrue = linkvar;
  var xczaeewqa = //
  //
  linkTrue ? /*#__PURE__*/React.createElement(BearLink, okdas) : endo;
  return xczaeewqa;
}

function BearError(obj) {
  // 1const
  var okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, "ERROR", /*#__PURE__*/React.createElement("br", null), obj);
  var adkease = {
    style: {
      background: "darkred",
      color: "white",
      textAlign: "center"
    },
    className: "bold",
    obj: okfdsd
  };
  /*#__PURE__*/React.createElement(BearDiv, adkease);
}

var alignItemsFlex = //
// ""
// "flex-start";
// "space-between";
"center"; // "stretch";

var justifyContentFlex = //
// "";
// "flex-start";
"space-between"; // "center";
// "stretch";
// "space-around"
// "space-evenly";
// "flex-end";

var vertAlign = {
  alignItems: alignItemsFlex,
  justifyContent: justifyContentFlex // flexWrap: "wrap",
  // alignContent: alignContentFlex,

  /* vertical-align: middle; */

  /* width: 100%; */

  /* flex-direction: row; */

  /* flex-wrap: wrap; */

};
function flexStyle(asfjwe) {
  var okase = {
    style: _objectSpread2({
      //
      display: "flex"
    }, asfjwe)
  };
  return okase;
}

// import * as gens from "../consts/genStyle";
// import { SelectArray } from "../functions/GlobalFunctions";

function BearList$1(_ref) {
  var renderItem = _ref.renderItem;
      _ref.obj;
      _ref.typevar;
      var listNumber = _ref.listNumber,
      typeList = _ref.typeList;
      _ref.removeEmpty;
      var removeItem = _ref.removeItem,
      listvar = _ref.listvar,
      dictFunc = _ref.dictFunc,
      dragTrue = _ref.dragTrue,
      messvar = _ref.messvar,
      logtrue = _ref.logtrue;
      _ref.noListObj;
      _ref.addTrue;
      var _ref$addDict = _ref.addDict,
      addDict = _ref$addDict === void 0 ? {} : _ref$addDict,
      scrollTrue = _ref.scrollTrue,
      selectableTrue = _ref.selectableTrue;
      _ref.selectableConfig;
      var genConfig = _ref.genConfig;
      _ref.fixTitle;
      _ref.noOptionObj;
      var styleList = _ref.styleList,
      _ref$loadobj = _ref.loadobj,
      loadobj = _ref$loadobj === void 0 ? "" : _ref$loadobj,
      loadtrue = _ref.loadtrue;
      _ref.loadNumber;
      var onClick = _ref.onClick;
      _ref.chooseBaseFunc;
      var chooseTrue = _ref.chooseTrue,
      returnArray = _ref.returnArray,
      clickSingle = _ref.clickSingle,
      chosenItem = _ref.chosenItem,
      _ref$chosenConfig = _ref.chosenConfig,
      chosenConfig = _ref$chosenConfig === void 0 ? {} : _ref$chosenConfig;
      _ref.chooseBedia;
      var _ref$itemStyle = _ref.itemStyle,
      itemStyle = _ref$itemStyle === void 0 ? {} : _ref$itemStyle,
      _ref$itemConfig = _ref.itemConfig,
      itemConfig = _ref$itemConfig === void 0 ? {} : _ref$itemConfig,
      spaceBetween = _ref.spaceBetween,
      _ref$centerItem = _ref.centerItem,
      centerItem = _ref$centerItem === void 0 ? true : _ref$centerItem,
      horizTrue = _ref.horizTrue;
      _ref.flexTrue;
      var titlevar = _ref.titlevar,
      dictvar = _ref.dictvar,
      lineBetween = _ref.lineBetween,
      collapseTrue = _ref.collapseTrue,
      listArgs = _objectWithoutProperties(_ref, ["renderItem", "obj", "typevar", "listNumber", "typeList", "removeEmpty", "removeItem", "listvar", "dictFunc", "dragTrue", "messvar", "logtrue", "noListObj", "addTrue", "addDict", "scrollTrue", "selectableTrue", "selectableConfig", "genConfig", "fixTitle", "noOptionObj", "styleList", "loadobj", "loadtrue", "loadNumber", "onClick", "chooseBaseFunc", "chooseTrue", "returnArray", "clickSingle", "chosenItem", "chosenConfig", "chooseBedia", "itemStyle", "itemConfig", "spaceBetween", "centerItem", "horizTrue", "flexTrue", "titlevar", "dictvar", "lineBetween", "collapseTrue"]);

  logs$1.logga("___ listvar BBB___", listvar); // 1list PREPARE
  // listvar = noRemove ? listvar : removeEmptyArray(listvar);

  listvar = removeItem ? remove(listvar, function (currentObject) {
    return currentObject.id != removeItem.id;
  }) : listvar;
  listvar = listNumber ? listvar.slice(0, listNumber) : listvar;
  logs$1.logga("___ listvar CCC___", listvar); // 1style

  styleList = _objectSpread2({
    overflowY: scrollTrue ? "scroll" : ""
  }, styleList);
  !isEmpty(listvar) || loadtrue;

  var _useState = useState(chosenItem),
      _useState2 = _slicedToArray(_useState, 2),
      chosios = _useState2[0],
      setchosios = _useState2[1];

  function passChoose(itmBase) {
    if (chooseTrue) {
      var ogfsdfds = //
      itmBase; // expandItem(itmBase)

      setchosios(ogfsdfds);
    }
  }

  function findSelect(itmCurr) {
    var cvokbsdf = chooseTrue ? chosios : chosenItem;
    var itemBase = //
    itmCurr; // expandItem(itmCurr);

    var selectTrue = //
    returnArray && cvokbsdf ? cvokbsdf.includes(itemBase) : itemBase == cvokbsdf; // 1chosen

    var dfbidfg = selectTrue && _objectSpread2({
      chosenTrue: true
    }, chosenConfig);

    logs$1.logga(messvar, "BEARLST- CHOSEN ITEM ", {
      CURRENT_ITEM: itemBase,
      CHOSEN_ITEM: cvokbsdf,
      SELECTTRUE: selectTrue,
      CONFIG: dfbidfg
    });
    return dfbidfg;
  }

  function expandItem(coimswe) {
    return dictFunc ? dictFunc(coimswe) : dictvar ? dictvar[coimswe] : coimswe;
  }

  function EndListA(coimswe, indexSort) {
    var asdwe = itemConfig;
    var origText = coimswe;
    var choseAll = findSelect(coimswe);
    var dictTrue = dictvar;
    var dgste = expandItem(coimswe); // 1type

    var listarr = dictTrue ? //
    _objectSpread2(_objectSpread2({
      itemName: coimswe,
      itemType: coimswe
    }, dgste), addDict) : dgste;
    var sokwe = spaceBetween && {
      margin: "".concat(spaceBetween, " 0")
    }; // 1style

    var mainseo = _objectSpread2(_objectSpread2(_objectSpread2({}, sokwe), itemStyle), adojaqw("style"));

    function adojaqw(theoasd) {
      //
      var olaqwefs = {
        asdwe: asdwe,
        choseAll: choseAll,
        listarr: listarr
      };
      logs$1.logga("___ CHOOSING ITEM " + theoasd + ":", olaqwefs);

      var iasda = _objectSpread2(_objectSpread2(_objectSpread2({}, asdwe[theoasd]), choseAll[theoasd]), listarr[theoasd]);

      return iasda;
    }

    var endRet = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asdwe), listarr), choseAll), {}, {
      style: mainseo
    });

    logs$1.logga("___ endRet ___", endRet);
    var findoobj = endRet.renderItem ? endRet.renderItem : renderItem;
    var asjds = {
      // itemConfig: asdwe,
      findoobj: findoobj,
      listarr: listarr,
      endRet: endRet
    }; // 1console
    // messvar = "sdfwer";
    // logtrue = "oaskd";

    if (logtrue) {
      logs$1.logga(messvar + "---BearList---", asjds);
    }

    var asdpkwe = "";

    switch (typeList) {
      case "div":
        asdpkwe = /*#__PURE__*/React.createElement(BearDiv$1, endRet);
        break;

      case "dict":
        asdpkwe = endRet;

      case "return":
        // asdpkwe = "dict";
        asdpkwe = /*#__PURE__*/React.createElement(BearDiv$1, _extends({}, itemConfig, {
          obj: listarr
        }));
        break;

      case "button":
        // asdpkwe = "dict";
        asdpkwe =
        /*#__PURE__*/
        //
        // <BearDiv {...itemConfig} obj={listarr} />;
        React.createElement(BearButton, itemConfig);
        break;

      default:
        asdpkwe = //
        // findoobj(endRet);
        findoobj ? findoobj(endRet) : BearError("No renderItem specified in BearList's arguments");
    }

    var isjdew = //
    dragTrue ? "<DragBase />" : asdpkwe;

    function clickList() {
      var asd0okw = clickSingle;
      var okgs = asd0okw ? origText : listarr;
      var fijsde = //
      // okgs;
      returnArray ? turnarray(okgs) : okgs;
      var clickEnd = endRet.onClick ? endRet.onClick : onClick;
      passChoose(coimswe); // 1onClick

      if (clickEnd) {
        clickEnd(fijsde);
      }
    }

    var filleoo = {
      onClick: clickList,
      obj: isjdew
    };
    var auewasdash = loadtrue ? loadobj : selectableTrue ? "<SelectComp {...filleoo} />" : //
    // isjdew;
    BearDiv$1(filleoo);
    var ijsew = //
    // "";
    lineBetween && /*#__PURE__*/React.createElement("hr", null); // const saewe = coimswe["titlevar"] && titleTrue;
    // const sdijfw = saewe && <Tjisae {...coimswe} />;

    var asidjwe = /*#__PURE__*/React.createElement(React.Fragment, null, auewasdash, ijsew);
    return asidjwe;
  }

  function TitleFix() {
    var iasjew = "";
    return iasjew;
  } // 1horiz


  function HozBar() {
    //
    var endoa = _objectSpread2(_objectSpread2({
      messvar: messvar
    }, listArgs), {}, {
      listvar: listvar,
      dictvar: dictvar,
      dictFunc: dictFunc,
      selectableTrue: selectableTrue,
      retObj: mapoBap
    }); // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;


    var okaewq = centerItem && {
      alignContent: "center",
      justifyContent: "space-around"
    };
    var okadwe = {
      flexTrue: true,
      style: okaewq,
      obj: listvar.map(mapoBap)
    }; // 1console
    // logs.logga("xxx-LIST-MAIN--args", messvar, listvar, "asd90u12321");

    logs$1.logga("xxx-LIST-MAIN--args", endoa, "asd90u12321"); // gens.messCheck("sd9jqwxas", listMess, "BearList --AAAA--", oaskdwq);

    var jisad =
    /*#__PURE__*/
    //
    React.createElement(BearDiv$1, okadwe); // "okafsdf";
    // EndListA();
    // mapoBap();
    // <HorizChoiceBar {...endoa} />;

    return jisad;
  }

  function mapoBap(saokae, indexvr) {
    logs$1.logga("___ saokae ___", saokae);
    var asidjwe = saokae["mainObj"];
    var jcvbfd = asidjwe ? asidjwe : EndListA(saokae);
    return jcvbfd;
  }

  var sadfwe = //
  // "oaksdwqew";
  !listvar ? BearError("No 'listvar' argument specified") : horizTrue ? /*#__PURE__*/React.createElement(HozBar, null) : listvar.map(mapoBap); // 1TITLE

  var showTit = titlevar && !collapseTrue;
  var titlo = showTit && /*#__PURE__*/React.createElement(TitleFix, null);
  var asudwe = //
  //   fullVar ? selectableTrue ? <Seletio /> : aisjwe : noListObj;
  sadfwe;
  var saokwe = /*#__PURE__*/React.createElement(React.Fragment, null, titlo, asudwe);

  var saidje = _objectSpread2({
    loadtrue: loadtrue,
    obj: saokwe
  }, genConfig); // return saokwe;


  return /*#__PURE__*/React.createElement(BearDiv$1, saidje);
}

// import * as logs from "../functions/logFuncs"
function logga(messageIt, valY) {// logs.logga(messageIt, valY);
}
function loggo(messageIt, valY) {
  var _console;

  for (var _len = arguments.length, asw = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    asw[_key - 2] = arguments[_key];
  }

  (_console = console).log.apply(_console, ["loggo--", messageIt, valY].concat(asw)); // logs.logga('logs.logga:', logs.logga)

} //   export function logga(messageIt, valY) {
//     logs.logga(messageIt, valY);
//   }

var logFuncs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  logga: logga,
  loggo: loggo
});

// import BearTextMedia from "../components/BearTextMedia";

function BearIcon(sdfoger, sdfke) {
  // 1tick
  var lasew = {
    style: {
      // background: "green",
      color: "green" // ...sdfke,

    }
  };
  var okasdew =
  /*#__PURE__*/
  //
  // <TiTickOutline />
  React.createElement(AiOutlineCheckCircle, lasew); // 1time

  var lasdew =
  /*#__PURE__*/
  //
  React.createElement(RiTimerLine, null) // <AiOutlineClockCircle />
  ; // 1play

  var sfdgmr =
  /*#__PURE__*/
  //
  React.createElement(FaPlay, null); // 1playlist

  var asdkqe =
  /*#__PURE__*/
  //
  React.createElement(MdPlaylistPlay, null); // 1share

  var sjerw =
  /*#__PURE__*/
  //
  React.createElement(BiShare, null); // 1edit

  var sdiwer =
  /*#__PURE__*/
  //
  React.createElement(BiEdit, null); // 1star

  var dfigjew =
  /*#__PURE__*/
  //
  React.createElement(TiStar, null); // 1close

  var kxmvs =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineCloseCircle, null);
  var iosade =
  /*#__PURE__*/
  //
  React.createElement(FaQuoteLeft, null);
  var asdhgew =
  /*#__PURE__*/
  //
  React.createElement(FaQuoteRight, null); // 1quote

  var oksaew =
  /*#__PURE__*/
  //
  React.createElement(BsChatQuote, null); // 1comment

  var sowaseowq =
  /*#__PURE__*/
  //
  React.createElement(BiCommentDetail, null); // 1delete

  var asdfewr =
  /*#__PURE__*/
  //
  React.createElement(AiFillDelete, null); // 1link

  var linkios =
  /*#__PURE__*/
  //
  React.createElement(AiOutlineLink, null) // <FiExternalLink />
  ;
  var ijsadwe = {
    tick: okasdew,
    delete: asdfewr,
    playlist: asdkqe,
    share: sjerw,
    star: dfigjew,
    comment: sowaseowq,
    link: linkios,
    play: sfdgmr,
    edit: sdiwer,
    quote: oksaew,
    quoteLeft: iosade,
    quoteRight: asdhgew,
    time: lasdew,
    teams: /*#__PURE__*/React.createElement(SiMicrosoftteams, null),
    slack: /*#__PURE__*/React.createElement(SiSlack, null),
    // 1notion
    notion: /*#__PURE__*/React.createElement(SiNotion, null),
    close: kxmvs
  };
  var oksdew = ijsadwe[sdfoger];
  oksdew = oksdew ? oksdew : sdfoger;

  var okasde = _objectSpread2({
    spanTrue: true,
    obj: oksdew
  }, sdfke);

  var cbnkfg = //
  // oksdew
  BearDiv$1(okasde); // sdfke
  //   ? //
  //     // Berios()
  //     JAsds()
  //   : //
  //     oksdew;

  return cbnkfg;
}

function BearImage(_ref) {
  var typevar = _ref.typevar;
      _ref.badgecolor;
      var _ref$imagesize = _ref.imagesize,
      imagesize = _ref$imagesize === void 0 ? 40 : _ref$imagesize;
      _ref.width;
      _ref.height;
      var style = _ref.style,
      _ref$imagevar = _ref.imagevar,
      imagevar = _ref$imagevar === void 0 ? "https://bit.ly/tioluwani-kolawole" : _ref$imagevar,
      sae = _objectWithoutProperties(_ref, ["typevar", "badgecolor", "imagesize", "width", "height", "style", "imagevar"]);

  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  var sacwe = _objectSpread2({}, style);
  imagesize = //
  35; // imagesize

  var osdew = _objectSpread2({
    src: imagevar,
    size: imagesize,
    style: sacwe,
    shape: "circle"
  }, sae);

  logs$2.logga("___BearIamge tosdew ___", osdew);
  var endValue = "";

  switch (typevar) {
    case "chakra":
      //   <ChakAva {...osdew}>
      //     <AvatarBadge {...cxvkf} />
      //   </ChakAva>
      // ) : (
      //   <ChakAva {...osdew} />
      // );

      break;

    default:
      endValue =
      /*#__PURE__*/
      //
      // "sadwqe";
      React.createElement(Avatar, osdew);
  }

  return endValue;
}

function BearTextMedia(_ref) {
  var imagevar = _ref.imagevar,
      _ref$imagesize = _ref.imagesize,
      imagesize = _ref$imagesize === void 0 ? 20 : _ref$imagesize,
      _ref$leftWidth = _ref.leftWidth,
      leftWidth = _ref$leftWidth === void 0 ? "5px" : _ref$leftWidth,
      _ref$padvar = _ref.padvar,
      padvar = _ref$padvar === void 0 ? "5px" : _ref$padvar;
      _ref.vertSize;
      var vertTrue = _ref.vertTrue,
      iconSize = _ref.iconSize,
      imageText = _ref.imageText,
      imageConfig = _ref.imageConfig,
      textvar = _ref.textvar,
      iconvar = _ref.iconvar,
      noImage = _ref.noImage,
      iconConfig = _ref.iconConfig,
      textconfig = _ref.textconfig,
      args = _objectWithoutProperties(_ref, ["imagevar", "imagesize", "leftWidth", "padvar", "vertSize", "vertTrue", "iconSize", "imageText", "imageConfig", "textvar", "iconvar", "noImage", "iconConfig", "textconfig"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  function sadkwe(dsafe) {
    var fijgrt = leftWidth && {
      minWidth: leftWidth
    };
    var kfwer = iconSize && {
      fontSize: iconSize ? iconSize : "1.7em"
    };

    var ksease = _objectSpread2(_objectSpread2(_objectSpread2({}, fijgrt), kfwer), dsafe);

    return ksease;
  }

  function ImgMain(_ref2) {
    var dsfew = _extends({}, _ref2);

    var fnkfg = _objectSpread2({
      // style: ksawe,
      imagevar: imagevar,
      size: imagesize,
      name: imageText
    }, dsfew);
    var oksaw = /*#__PURE__*/React.createElement(BearImage, fnkfg);
    return oksaw;
  }

  function Ajiwq(_ref3) {
    var dsfew = _extends({}, _ref3);

    var oisde = _objectSpread2({
      obj: textvar
    }, dsfew);

    return /*#__PURE__*/React.createElement(BearDiv$1, oisde);
  }

  function INcoio(_ref4) {
    var style = _ref4.style,
        ase = _objectWithoutProperties(_ref4, ["style"]);

    //
    var ksawe = sadkwe(style);
    var sfksr = iconvar ? BearIcon(iconvar) : iconvar;

    var sdlf = _objectSpread2({
      style: ksawe,
      obj: sfksr
    }, ase);

    var isajdawe = /*#__PURE__*/React.createElement(BearDiv$1, sdlf);
    return isajdawe;
  }

  var okeasw = !noImage && imagevar;
  var okdsre = okeasw ? /*#__PURE__*/React.createElement(ImgMain, imageConfig) : "";
  var kadse = okdsre ? okdsre : iconvar && /*#__PURE__*/React.createElement(INcoio, iconConfig);
  var okdswq = textvar && /*#__PURE__*/React.createElement(Ajiwq, textconfig);
  var okasew = {
    style: {
      margin: padvar
    }
  };
  var sdijwqe = iconvar || imagevar;
  var bothTrue = textvar && sdijwqe;
  var oksaew = bothTrue && /*#__PURE__*/React.createElement(BearDiv$1, okasew);
  var oskdawe = /*#__PURE__*/React.createElement(React.Fragment, null, kadse, oksaew, okdswq);
  var okfdsd = //
  vertTrue ? oskdawe : /*#__PURE__*/React.createElement(BearDiv$1, {
    flexTrue: true,
    vertTrue: true,
    obj: oskdawe
  });
  args = _objectSpread2({
    obj: okfdsd
  }, args);
  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

// import { AlignMain } from "./AlignMain";

function InputForm(_ref) {
  _extends({}, _ref);

  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  var sadwew = //
  ""; // <Input {...sae} />;

  return sadwew;
}
function BearIconText(icon, text, osdfds) {
  //
  var bodfg = _objectSpread2({
    iconvar: icon,
    textvar: text
  }, osdfds);

  var sadwew = /*#__PURE__*/React.createElement(BearTextMedia, bodfg);
  return sadwew;
}
function linkBase(linkvar, objvar, osdfds) {
  var dkfdsfre = _objectSpread2({
    linkvar: linkvar,
    obj: objvar
  }, osdfds);

  var sadwew = /*#__PURE__*/React.createElement(BearDiv$1, dkfdsfre);
  return sadwew;
} // 1list

function ListReturn(_ref2) {
  var sae = _extends({}, _ref2);

  var sadwew = /*#__PURE__*/React.createElement(BearList$1, _extends({
    returnTrue: true
  }, sae));
  return sadwew;
}
function ListFlex(_ref3) {
  var sae = _extends({}, _ref3);

  var sadwew = /*#__PURE__*/React.createElement(BearList$1, _extends({
    returnTrue: true
  }, sae));
  return sadwew;
}
function FlexMain(_ref4) {
  var _ref4$padvar = _ref4.padvar,
      padvar = _ref4$padvar === void 0 ? "20px" : _ref4$padvar,
      listvar = _ref4.listvar,
      itemStyle = _ref4.itemStyle,
      style = _ref4.style,
      noVertAlign = _ref4.noVertAlign;
      _ref4.obj;
      var sae = _objectWithoutProperties(_ref4, ["padvar", "listvar", "itemStyle", "style", "noVertAlign", "obj"]);

  var difreeq = !noVertAlign && vertAlign;
  var kdsse = {
    style: _objectSpread2(_objectSpread2({}, difreeq), style)
  };

  function dokesad(_ref5) {
    var obj = _ref5.obj,
        width = _ref5.width,
        asd = _objectWithoutProperties(_ref5, ["obj", "width"]);

    var oksade = _objectSpread2({
      style: _objectSpread2({
        width: width,
        textAlign: "left",
        marginRight: padvar
      }, itemStyle)
    }, asd);

    logs$1.logga("___ flexMain ITEM ___", oksade);
    return /*#__PURE__*/React.createElement("div", oksade, obj);
  }

  function redndo(asdwa) {
    var ijase = asdwa.obj ? asdwa : {
      obj: asdwa
    };
    return dokesad(ijase);
  } // listvar = [{
  //   obj:"aaaa"
  // }, {
  //   obj: "bbbb"
  // }]


  var okdsse = listvar.map(redndo);

  var vbdrewe = _objectSpread2(_objectSpread2({
    obj: okdsse,
    flexTrue: true
  }, kdsse), sae);

  var sadwew = /*#__PURE__*/React.createElement(BearDiv$1, vbdrewe);
  return sadwew;
} // 1slider

function SliderMain(_ref6) {
  _extends({}, _ref6);

  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  var sadwew = //
  ""; // <Slider {...sae} />;
  // <Slider marks={marks} step={null} defaultValue={37} />

  return sadwew;
} // 1input

function InputMain(_ref7) {
  _extends({}, _ref7);

  // size="xs"
  // name="Kola Tioluwani"
  // src="https://bit.ly/tioluwani-kolawole"
  var sadwew = //
  ""; // <Input {...sae} />;

  return sadwew;
} // 1image

function ImageAlign(_ref8) {
  var imageConfig = _ref8.imageConfig,
      argo = _objectWithoutProperties(_ref8, ["imageConfig"]);

  //
  //
  var okswe = /*#__PURE__*/React.createElement(ImageMain, imageConfig);
  argo = _objectSpread2({
    mainObj: okswe
  }, argo);
  logs$1.logga("argo-zzz", argo, "asd09js"); //

  return ""; //   return <AlignMain {...argo} />;
}
function ImageGroup(_ref9) {
  var listvar = _ref9.listvar,
      sae = _objectWithoutProperties(_ref9, ["listvar"]);

  // max size
  var sadwew = /*#__PURE__*/React.createElement(AvatarGroup, sae, listvar.map(function (asowe) {
    return /*#__PURE__*/React.createElement(ImageMain, _extends({
      typevar: "chakra"
    }, asowe));
  }));
  return sadwew;
}
function PagePad(_ref10) {
  var _ref10$left = _ref10.left,
      left = _ref10$left === void 0 ? "" : _ref10$left,
      _ref10$padvar = _ref10.padvar,
      padvar = _ref10$padvar === void 0 ? "38vw" : _ref10$padvar,
      sae = _objectWithoutProperties(_ref10, ["left", "padvar"]);

  var oksae = left ? {
    paddingRight: padvar
  } : {
    paddingLeft: padvar
  };

  var sadwew = _objectSpread2(_objectSpread2({}, sae), {}, {
    style: oksae
  });

  return /*#__PURE__*/React.createElement(BearDiv$1, sadwew);
}
function CopyMain(_ref11) {
  var copyText = _ref11.copyText,
      obj = _ref11.obj,
      copyMessage = _ref11.copyMessage;
      _objectWithoutProperties(_ref11, ["copyText", "obj", "copyMessage"]);

  // const [copssetot, setcopssetot] = useState(obj);
  function sajwe() {
    // const iewawe = <div>Copied!</div>;
    logs$1.logga("___ CopyMain ___", "CopyMain");
    ShowNote(copyMessage); // setcopssetot(iewawe);
  }

  var ovkewwe = {
    text: copyText,
    onCopy: sajwe
  };
  var iawe = /*#__PURE__*/React.createElement(CopyToClipboard, ovkewwe, obj);
  return iawe;
}
function LoadMain(_ref12) {
  _ref12.obj;
      var typevar = _ref12.typevar,
      _ref12$rowvar = _ref12.rowvar,
      rowvar = _ref12$rowvar === void 0 ? 10 : _ref12$rowvar,
      sadww = _objectWithoutProperties(_ref12, ["obj", "typevar", "rowvar"]);

  var ijsdwqe = _objectSpread2(_objectSpread2({}, sadww), {}, {
    title: false,
    paragraph: {
      rows: rowvar
    } // height: "200px"

  });

  var endValue = "";

  switch (typevar) {
    case "skeleton":
      endValue = "";
      break;

    default:
      endValue = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, ijsdwqe));
  }

  return endValue;
} // 1function

function Exmapl(dataVar) {
  var skdfsa = {
    height: ""
  };
  var zxcmsd = /*#__PURE__*/React.createElement(React.Fragment, null, "Hello!");
  var kmxvs = {
    obj: zxcmsd,
    style: skdfsa
  };
  return /*#__PURE__*/React.createElement(BearDiv$1, kmxvs);
}

function BearFloat(_ref) {
  var layoutType = _ref.layoutType;
      _ref.verticalTrue;
      var noVertTop = _ref.noVertTop;
      _ref.noPadding;
      var alignTrue = _ref.alignTrue;
      _ref.showRight;
      var showLeft = _ref.showLeft,
      disvar = _ref.disvar;
      _ref.noSpace;
      var leftobj = _ref.leftobj;
      _ref.leftConfig;
      var centerobj = _ref.centerobj,
      centerConfig = _ref.centerConfig,
      rightobj = _ref.rightobj;
      _ref.rightConfig;
      var noVertAlign = _ref.noVertAlign,
      logtrue = _ref.logtrue,
      messvar = _ref.messvar,
      args = _objectWithoutProperties(_ref, ["layoutType", "verticalTrue", "noVertTop", "noPadding", "alignTrue", "showRight", "showLeft", "disvar", "noSpace", "leftobj", "leftConfig", "centerobj", "centerConfig", "rightobj", "rightConfig", "noVertAlign", "logtrue", "messvar"]);

  var vertTop = {
    display: "flex"
    /* justify-content: center; */
    // alignItems: "top",
    // verticalAlign: "top",

  };
  var allPasow = //
  // {};
  vertTop;
  var trueClass = //
  // "";
  noVertAlign ? noVertTop ? "" : allPasow : vertAlign;
  var jndf = {
    // paddingLeft: noPadding
    p: "0 2",
    padding: "0 10px"
  };
  var sasease = leftobj || showLeft;
  var lefto = sasease && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", jndf, leftobj));
  var centio = /*#__PURE__*/React.createElement("div", centerConfig, centerobj);
  var ijsad = {
    style: alignTrue && {
      textAlign: "right"
    }
  };
  var rightos = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", ijsad, rightobj));
  var ksaewe = /*#__PURE__*/React.createElement(React.Fragment, null, lefto, centio, rightos);
  var endValue = "";

  switch (layoutType) {
    case "vertical":
      endValue = ksaewe;
      break;

    default:
      var oesfdrtw = _objectSpread2(_objectSpread2({
        flexTrue: true
      }, trueClass), {}, {
        obj: ksaewe
      });

      endValue = /*#__PURE__*/React.createElement(BearDiv$1, oesfdrtw);
  }

  var noSides = //
  !leftobj && !rightobj;
  disvar = //
  disvar || noSides;
  var sdifjw = //
  disvar ? centio : endValue; // oeqewq;

  args = _objectSpread2(_objectSpread2({}, args), {}, {
    obj: sdifjw
  });

  if (logtrue) {
    logga(messvar + " Flotmainall", _objectSpread2({
      trueClass: trueClass,
      layoutType: layoutType
    }, args));
  } //
  // return endValue;


  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

function BearButton$1(_ref) {
  _ref.textConfig;
      var genConfig = _ref.genConfig,
      disableTrue = _ref.disableTrue,
      errorTrue = _ref.errorTrue,
      background = _ref.background,
      noBackground = _ref.noBackground,
      style = _ref.style,
      obj = _ref.obj,
      textvar = _ref.textvar,
      fontSize = _ref.fontSize,
      longTrue = _ref.longTrue,
      downloadLink = _ref.downloadLink,
      fullWidth = _ref.fullWidth,
      padvar = _ref.padvar,
      extStyle = _ref.extStyle,
      formid = _ref.formid;
      _ref.buttonType;
      var groupConfig = _ref.groupConfig;
      _ref.loadClick;
      var linkvar = _ref.linkvar;
      _ref.logtrue;
      _ref.noGreen;
      var divConfig = _ref.divConfig,
      onlyText = _ref.onlyText;
      _ref.typevar;
      var arg = _objectWithoutProperties(_ref, ["textConfig", "genConfig", "disableTrue", "errorTrue", "background", "noBackground", "style", "obj", "textvar", "fontSize", "longTrue", "downloadLink", "fullWidth", "padvar", "extStyle", "formid", "buttonType", "groupConfig", "loadClick", "linkvar", "logtrue", "noGreen", "divConfig", "onlyText", "typevar"]);

  // const asndiw = {
  //   order: {
  //     linkvar: "/order",
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
  var sdfoer = errorTrue && {
    background: "red",
    color: "white"
  };
  var longeos = longTrue && {
    width: "200px"
  };

  var baseoSt = _objectSpread2(_objectSpread2({
    padding: "2px 10px"
  }, longeos), {}, {
    color: noBackground ? "black" : "white",
    // fontSize: "30px",
    // height: "50px",
    background: background ? background : !noBackground && "green"
  });

  var fdoewrw = padvar && {
    padding: padvar + " 0"
  };
  var kasew = fullWidth && {
    width: "100%"
  };

  var baseStlas = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    fontSize: fontSize
  }, baseoSt), fdoewrw), sdfoer), kasew), style), extStyle); // "";


  var dwesae = //
  // true;
  disableTrue;
  var cllosk = //
  "buttonHover shadowHover"; //   gens.butClass;
  // gens.butClass + dwesae ? " disabled" : "";

  var sfasdokwe = _objectSpread2(_objectSpread2({
    form: formid
  }, arg), {}, {
    style: baseStlas,
    className: cllosk,
    isDisabled: dwesae,
    disabled: dwesae // ...uahwe,

  });

  var asodkwe = obj || onlyText || textvar;
  var qy7eww = asodkwe ? asodkwe : "Confirm";
  var aisjqw = /*#__PURE__*/React.createElement(React.Fragment, null, qy7eww); // qy7eww ? qy7eww : <ImageTextDiv {...asduhqwe} />;
  // chakTrue = chakTrue ? chakTrue : sfasdokwe["isLoading"];

  function GroupBase(_ref2) {
    _ref2.rightobj;
        _ref2.leftobj;
        _ref2.leftConfig;
        var rightConfig = _ref2.rightConfig,
        qwe = _objectWithoutProperties(_ref2, ["rightobj", "leftobj", "leftConfig", "rightConfig"]);

    _objectSpread2({}, qwe);

    _objectSpread2(_objectSpread2({}, sfasdokwe), rightConfig);
    //   <Button {...rghtFunnp}>
    //     <div {...nsidjew}>{rightobj}</div>{" "}
    //   </Button>
    // );

    var isadjwe = //
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

  var sfdsgwe = groupConfig ? /*#__PURE__*/React.createElement(GroupBase, groupConfig) : /*#__PURE__*/React.createElement("button", sfasdokwe, aisjqw);
  var asdijew = //
  // "";
  linkvar || divConfig;

  var jawewe = _objectSpread2({
    obj: sfdsgwe,
    linkvar: linkvar
  }, divConfig);
  var asdgvwe = asdijew ? /*#__PURE__*/React.createElement(BearDiv$1, jawewe) : sfdsgwe;
  var pdska = downloadLink ? /*#__PURE__*/React.createElement("a", {
    href: downloadLink,
    download: true
  }, asdgvwe) : asdgvwe; // const isjdfe =

  var dweasdd = _objectSpread2({
    obj: pdska
  }, genConfig); // logtrue = true;

  var asdhwqe = /*#__PURE__*/React.createElement(BearDiv$1, dweasdd);
  return asdhwqe;
}

function BearSelect(_ref) {
  var noMulti = _ref.noMulti;
      _ref.noMenu;
      _ref.menuConfig;
      var typeSelect = _ref.typeSelect,
      options = _ref.options,
      optionConfig = _ref.optionConfig,
      initOptions = _ref.initOptions,
      onChange = _ref.onChange,
      createTop = _ref.createTop;
      _ref.logtrue;
      var createFunc = _ref.createFunc,
      valueFunc = _ref.valueFunc,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 16 : _ref$fontSize,
      newLineTrue = _ref.newLineTrue;
      _ref.messvar;
      var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name;
      _ref.limitvar;
      var ref = _ref.ref,
      noValueReturn = _ref.noValueReturn,
      args = _objectWithoutProperties(_ref, ["noMulti", "noMenu", "menuConfig", "typeSelect", "options", "optionConfig", "initOptions", "onChange", "createTop", "logtrue", "createFunc", "valueFunc", "fontSize", "newLineTrue", "messvar", "name", "limitvar", "ref", "noValueReturn"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  function showTrue(inputValue, selectValue, selectOptions) {
    if (!inputValue) {
      return false;
    }

    var isValid = true; // for (let option of selectOptions) {
    //   if (isOptionMatchesInputValue(option, inputValue)) {
    //     isValid = false;
    //     break;
    //   }
    // }

    return isValid;
  }

  var lcxvb = {
    width: "100%"
  }; //   1styles

  var stylBasoe = {
    control: function control(base) {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, base), lcxvb), {}, {
        //   maxHeight: 20,
        fontSize: fontSize
      });
    },
    option: function option(base) {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, base), lcxvb), {}, {
        //   maxHeight: 20,
        textAlign: "left",
        fontSize: fontSize - 4
      }, optionConfig);
    },
    menuList: function menuList(styles) {
      return _objectSpread2(_objectSpread2(_objectSpread2({}, lcxvb), styles), {}, {
        maxHeight: "160px"
      });
    },
    noOptionsMessage: function noOptionsMessage(base) {
      return _objectSpread2(_objectSpread2({}, base), {}, {
        fontSize: fontSize
      });
    } // dropdownIndicator: (base) => ({
    //   ...base,
    //   paddingTop: 0,
    //   paddingBottom: 0,
    // }),
    // clearIndicator: (base) => ({
    //   ...base,
    //   paddingTop: 0,
    //   paddingBottom: 0,
    // }),

  };
  var emptio = //
  ""; // true;
  // isEmpty();
  // 1empty

  var fullOpts = emptio ; //   1menu
  //   newLineTrue

  var mennoPIt = newLineTrue && {
    classNamePrefix: "lp-copy-sel"
  };
  var asidjwe = !noMulti && {
    isMulti: true
  };

  function changeos(params) {
    //
    var sovkoe = noValueReturn ? params : params.map(function (sdfe) {
      return sdfe.value;
    });

    if (onChange) {
      onChange(sovkoe);
    }

    if (valueFunc) {
      valueFunc(params);
    }
  }

  function dfgoe(aewqe) {
    changeos(aewqe);
  }

  var vbmofd = //
  options ? options : initOptions;
  var dsfijaae = //
  vbmofd; // vbmofd & {
  // }
  // limitvar ? sliceArray(vbmofd, limitvar) : vbmofd;
  // 1id reffo

  var ideoBasa = {
    inputProps: name,
    inputId: name,
    name: name
  }; // 1ref

  var ogkfds = {
    innerRef: ref,
    ref: ref
  };

  var sdfijewr = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, mennoPIt), asidjwe), args), ideoBasa);

  var toppoIos = //
  // "first";
  createTop ? "first" : "last";

  var creatios = createFunc && {
    onCreateOption: createFunc // value: type,

  };

  var fdgrt = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    styles: stylBasoe,
    onChange: dfgoe
  }, creatios), {}, {
    createOptionPosition: toppoIos
  }, fullOpts), {}, {
    isValidNewOption: showTrue,
    options: dsfijaae
  }, sdfijewr), ogkfds);

  var dfijew = //
  // {};
  fdgrt; // sdfijewr;

  var endValue = "";

  switch (typeSelect) {
    case "create":
      endValue = /*#__PURE__*/React.createElement(CreatableSelect$1, dfijew);
      break;

    case "async":
      endValue = /*#__PURE__*/React.createElement(AsyncCreatableSelect, dfijew);
      break;

    default:
      endValue =
      /*#__PURE__*/
      //
      React.createElement(CreatableSelect$1, dfijew) // <Select {...dfijew} />
      ;
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

// import { BearButton } from "./BearButton";
// import BearSelect from "./BearSelect";
// import SearchFormFields from "../containers/search/SearchFormFields";

function BearInput(_ref) {
  var textConfig = _ref.textConfig,
      titleConfig = _ref.titleConfig,
      textvar = _ref.textvar;
      _ref.errorobj;
      var noInput = _ref.noInput;
      _ref.onInput;
      var requireClass = _ref.requireClass,
      noTitle = _ref.noTitle,
      checked = _ref.checked,
      control = _ref.control,
      inputObj = _ref.inputObj,
      inputFunction = _ref.inputFunction,
      inputObjectFunction = _ref.inputObjectFunction;
      _ref.selectTrue;
      var style = _ref.style;
      _ref.onChange;
      var obj = _ref.obj,
      ref = _ref.ref,
      required = _ref.required,
      name = _ref.name,
      fontSize = _ref.fontSize,
      sameLine = _ref.sameLine,
      newTrue = _ref.newTrue,
      initialValue = _ref.initialValue;
      _ref.selectvar;
      var rightSubmit = _ref.rightSubmit,
      inputType = _ref.inputType,
      rows = _ref.rows,
      titlevar = _ref.titlevar;
      _ref.placeholder;
      var subtitlevar = _ref.subtitlevar,
      errors = _ref.errors,
      iconvar = _ref.iconvar;
      _ref.checkList;
      _ref.checklistTitle;
      var lineBelow = _ref.lineBelow,
      addFunc = _ref.addFunc,
      _ref$titleWidth = _ref.titleWidth,
      titleWidth = _ref$titleWidth === void 0 ? "160px" : _ref$titleWidth,
      dfsgre = _objectWithoutProperties(_ref, ["textConfig", "titleConfig", "textvar", "errorobj", "noInput", "onInput", "requireClass", "noTitle", "checked", "control", "inputObj", "inputFunction", "inputObjectFunction", "selectTrue", "style", "onChange", "obj", "ref", "required", "name", "fontSize", "sameLine", "newTrue", "initialValue", "selectvar", "rightSubmit", "inputType", "rows", "titlevar", "placeholder", "subtitlevar", "errors", "iconvar", "checkList", "checklistTitle", "lineBelow", "addFunc", "titleWidth"]);

  logs$1.logga("___Asidnw obj ___", obj); // 1const

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = useState(checked),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1];

  var _useState5 = useState(initialValue),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      _useState6[1];

  var asw = //
  // "";
  errors && errors[name] && errors[name]["message"];
  fontSize = fontSize ? fontSize : 18;

  var ashwe = _objectSpread2({
    width: "100%",
    fontSize: fontSize,
    padding: "0px 5px"
  }, style);

  var daezxv = {
    //
    fontSize: "1.1em",
    width: "100%"
  };
  var ijdsew = //
  // required
  requireClass && required;
  var slasso = ijdsew ? "required" : "";

  function getRef(rfo) {
    return {
      ref: rfo,
      inputRef: rfo,
      innerRef: rfo
    };
  }

  var sdweew = _objectSpread2({
    name: name,
    id: name,
    className: slasso
  }, getRef(ref));

  var cntrMan = _objectSpread2({
    control: control
  }, sdweew);

  var objbase = _objectSpread2(_objectSpread2(_objectSpread2({}, dfsgre), sdweew), {}, {
    // ...cntrMan,
    fontSize: fontSize,
    errorobj: asw,
    textvar: textvar,
    required: required,
    innerRef: {
      required: required
    },
    // ...changBssoe,
    style: daezxv
  });
  // 1console

  function logros() {

    {
      for (var _len = arguments.length, asa = new Array(_len), _key = 0; _key < _len; _key++) {
        asa[_key] = arguments[_key];
      }

      logs$1.logga.apply(logs$1, [name + "___BearForm--INPUT------zzz"].concat(asa));
    }
  } //
  //


  var ujsdqwe = ""; //

  function retFunc() {
    switch (inputType) {
      case "select":
        break;

      case "selectable":
        var dfdsawe = _objectSpread2({}, objbase);

        ujsdqwe = /*#__PURE__*/React.createElement(CreatableSelect, dfdsawe);
        break;

      case "textarea":
        // 1rows
        rows = rows ? rows : 3;

        var ijsdfasd = _objectSpread2(_objectSpread2({
          rows: rows,
          minRows: rows,
          defaultValue: textvar
        }, objbase), textConfig); // const sadije = innerRef({ required: required }


        logs$1.logga(textvar + "___ INPUTBASE TEXTAREA ___", ijsdfasd);
        // ujsdqwe = <TextareaAutosize autoFocus />;

        ujsdqwe = /*#__PURE__*/React.createElement(TextareaAutosize, ijsdfasd); // {textvar}</TextareaAutosize>;
        // ujsdqwe = <textarea {...ijsdfasd} />;
        // ujsdqwe = <textarea {...ijsdfasd}>{textvar}</textarea>;
        // ujsdqwe = "";

        break;

      case "checkboxList":
        //
        ujsdqwe = "ijadqwoek";
      // ujsdqwe = <input {...dsoadkw0} />;

      case "checkbox":
        _objectSpread2({
          type: "checkbox"
        }, objbase); // const okaswe;


        var isawe = {
          type: "checkbox" // {...dsoadkw0}

        };
        var ijasdwe = {
          obj: textvar,
          style: {
            marginRight: "10px"
          }
        };
        var dsf9jewr = /*#__PURE__*/React.createElement(BearDiv$1, ijasdwe);
        ujsdqwe = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", isawe), " ", dsf9jewr);
        break;

      default:
        // textvar = "DEFAULT TEXT";
        var ijawe = _objectSpread2({
          // type: "text",
          // height: "10px"
          rows: 1,
          autocomplete: "off",
          className: "noresize"
        }, objbase);

        logs$1.logga(name + "___ inputBase--INPUT ___", ijawe); // 1input

        ujsdqwe = noInput ? "" : textvar ?
        /*#__PURE__*/
        //
        // <gens.StInput {...objbase}>{textvar}</gens.StInput>
        React.createElement("textarea", ijawe, textvar) :
        /*#__PURE__*/
        // <input {...ijawe}>{textvar}</input>
        // <input {...ijawe} />
        // <textarea {...ijawe}>{textvar}</textarea>
        // <gens.StInput {...ijawe} />
        // <input {...ijawe} />
        React.createElement("input", ijawe);
    }

    return ujsdqwe;
  }

  function ChooseTit() {
    var ijasde = //
    ""; // <SearchFormFields {...isade} />;

    return ijasde;
  } // 1title


  function TitleOBbi() {
    //
    var skdowqe = sameLine ? {
      //
      fontSize: "1.15em",
      minWidth: titleWidth,
      marginTop: "-10px"
    } : {
      //
      fontSize: "1.15em"
    };

    var iawqe = _objectSpread2(_objectSpread2({}, skdowqe), {}, {
      fontWeight: "bold"
    }, titleConfig === null || titleConfig === void 0 ? void 0 : titleConfig.style);

    var ijweq = {
      obj: " *",
      style: {
        color: "red"
      }
    };
    var aokdwe = //
    ijdsew ? /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      spanTrue: true
    }, ijweq)) : "";
    var olbknfr = {
      fontSize: "0.7em",
      color: "red",
      marginLeft: "10px" // className: "error",

    };
    var asdwe = {
      obj: asw,
      className: "error",
      style: olbknfr
    };
    var bnkifg = /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      spanTrue: true
    }, asdwe)); // TITLE MAIN

    var okasde = //
    newTrue ? ChooseTit() : /*#__PURE__*/React.createElement(React.Fragment, null, iconvar, " ", titlevar);
    var ioakawe = /*#__PURE__*/React.createElement(React.Fragment, null, okasde, aokdwe, bnkifg);

    function BswTi() {
      var cvobkof = {
        className: "shadowHover pointer",
        onClick: addFunc,
        obj: BearIcon("➕", ""),
        style: {
          padding: "5px",
          marginTop: "-5px",
          fontSize: "0.8em" // marginLeft: "20px",

        }
      };
      var dfigjrt = /*#__PURE__*/React.createElement(BearDiv$1, cvobkof);
      var kcmdr = {
        centerobj: ioakawe,
        rightobj: dfigjrt
      };
      var ijcwe = BearFloat(kcmdr);
      return ijcwe;
    }

    var ijsae = addFunc ? BswTi() : ioakawe;

    var asdojwqs = _objectSpread2(_objectSpread2({
      obj: ijsae,
      // textvar: ioakawe,
      iconvar: iconvar,
      noImage: !iconvar,
      noIcon: !iconvar
    }, titleConfig), {}, {
      style: iawqe // noText: true,
      // disVar: true,

    });

    logs$1.logga(name + "___ inpuBase TITLE CONF ___", asdojwqs);
    var seokwer =
    /*#__PURE__*/
    //
    // <ImageTextDiv {...asdojwqs} />
    // <BediaTextDiv {...asdojwqs} />
    React.createElement(BearDiv$1, asdojwqs);

    function Subtoter() {
      var ikawed = {
        fontSize: "0.8em"
      };
      var okawe = {
        obj: subtitlevar,
        style: ikawed
      };
      var uiajwe = /*#__PURE__*/React.createElement(BearDiv$1, okawe);
      return uiajwe;
    }

    var ijawe = subtitlevar && /*#__PURE__*/React.createElement(Subtoter, null);
    var sdfgret = /*#__PURE__*/React.createElement(React.Fragment, null, seokwer, ijawe);
    var kase = {
      padding: "10px 0",
      textAlign: "left"
    };
    var isawqe = {
      obj: sdfgret,
      style: kase
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, isawqe);
  }

  var showTit = //
  // true;
  !noTitle && titlevar;
  var oksdwqe = showTit && /*#__PURE__*/React.createElement(TitleOBbi, null);
  var confijre = {
    size: "sm",
    type: "submit",
    obj: "YES"
  };

  function goCont(goObj) {
    // inputFunction(objbase)
    function inEar(_ref2) {
      var _ref2$field = _ref2.field,
          ref = _ref2$field.ref;
          _ref2$field.value;
          var field = _objectWithoutProperties(_ref2$field, ["ref", "value"]);

      var sfeqwwe = _objectSpread2(_objectSpread2(_objectSpread2({}, objbase), field), getRef(ref));

      logros("___ BearCont CONTROL field ___", field);
      logros("___ BerInot ___", sfeqwwe);
      var dfigjew = //
      inputFunction(sfeqwwe); // BearSelect(sfeqwwe);

      return dfigjew;
    }

    var asod = //
    Controller(_objectSpread2(_objectSpread2({}, cntrMan), {}, {
      render: inEar
    }));
    return asod;
  }

  ujsdqwe = inputObj ? inputObj : inputFunction ? goCont() : inputObjectFunction ? inputObjectFunction(retFunc()) : retFunc();
  var jaewdsr = {
    rightobj: /*#__PURE__*/React.createElement(BearButton$1, confijre),
    centerobj: ujsdqwe
  }; // rightSubmit = true;

  var asdijwe = rightSubmit ?
  /*#__PURE__*/
  //
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearFloat, jaewdsr)) : ujsdqwe;
  logs$1.logga("___ ujsdqwe ___", ujsdqwe);
  logs$1.logga("___ asdijwe ___", asdijwe);
  var ijsa = {
    style: ashwe
  };
  var okdsae = {
    style: {
      width: "100%"
    }
  }; // lineBelow = true;

  var xvcmfde = lineBelow && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null));
  var okaweasd = /*#__PURE__*/React.createElement(React.Fragment, null, oksdwqe, /*#__PURE__*/React.createElement("div", okdsae, asdijwe));

  function asdowe() {
    return okaweasd;
  }

  var ijdas = sameLine ? /*#__PURE__*/React.createElement(Flex, ijsa, asdowe()) : /*#__PURE__*/React.createElement("div", ijsa, okaweasd);
  var kaosdew = /*#__PURE__*/React.createElement(React.Fragment, null, ijdas, xvcmfde);
  return kaosdew;
}

function BearForm(_ref) {
  var noButton = _ref.noButton;
      _ref.noText;
      var listDict = _ref.listDict,
      buttonText = _ref.buttonText;
      _ref.subtitleConfig;
      _ref.textConfig;
      var overObj = _ref.overObj,
      listvar = _ref.listvar,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? "35px" : _ref$buttonSize,
      inputConfig = _ref.inputConfig,
      buttonConfig = _ref.buttonConfig,
      toplist = _ref.toplist,
      noForm = _ref.noForm,
      dictvar = _ref.dictvar,
      formid = _ref.formid;
      _ref.headerObj;
      _ref.singleTrue;
      _ref.headerConfig;
      _ref.logtrue;
      var tabConfig = _ref.tabConfig,
      schemavar = _ref.schemavar,
      hookConfig = _ref.hookConfig;
      _ref.typeForm;
      var sameLine = _ref.sameLine;
      _ref.topButtonConfig;
      _ref.ImageTextList;
      var topButtonTrue = _ref.topButtonTrue,
      onSubmit = _ref.onSubmit;
      _ref.submitExtra;
      var topObj = _ref.topObj;
      _ref.marginBetween;
      var titlevar = _ref.titlevar,
      titleConfig = _ref.titleConfig,
      args = _objectWithoutProperties(_ref, ["noButton", "noText", "listDict", "buttonText", "subtitleConfig", "textConfig", "overObj", "listvar", "buttonSize", "inputConfig", "buttonConfig", "toplist", "noForm", "dictvar", "formid", "headerObj", "singleTrue", "headerConfig", "logtrue", "tabConfig", "schemavar", "hookConfig", "typeForm", "sameLine", "topButtonConfig", "ImageTextList", "topButtonTrue", "onSubmit", "submitExtra", "topObj", "marginBetween", "titlevar", "titleConfig"]);

  //
  //
  var nameMessError = //
  ""; // "Please add your name."

  schemavar = _objectSpread2({
    name: yup.string() //
    // .match("")
    .required(nameMessError),
    email: yup.string().email("This is not a valid email.").required("Please add your email.")
  }, schemavar);
  var finsaShc = //
  // schemavar
  {};

  function asifjew(asdofj) {
    finsaShc[asdofj] = schemavar[asdofj];
  }

  listvar.map(asifjew);
  yup.object().shape(finsaShc);

  var oksdaew = _objectSpread2({
    // validationSchema: schemaYup
    // mode: "onBlur",
    // reValidateMode: "onChange",
    mode: "onSubmit",
    reValidateMode: "onChange"
  }, hookConfig);

  var _useForm = //
  // "";
  useForm(oksdaew),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors,
      control = _useForm.control;
      _useForm.watch;
      _objectWithoutProperties(_useForm, ["handleSubmit", "register", "errors", "control", "watch"]);


  function subbTo(values) {
    //
    !isEmpty(values);
    onSubmit(values); // parsVal(values);
    //
    // if (trudsoe) {
    //   onSubmit(values);
    //   parsVal(values);
    // }
    //
  }
  args = _objectSpread2(_objectSpread2({}, args), {}, {
    id: formid,
    // onSubmit: subbTo,
    onSubmit: handleSubmit(subbTo)
  });

  function Buttiona(_ref2) {
    var siwerew = _extends({}, _ref2);

    //
    var aewsadw = {
      style: {
        margin: "20px"
      }
    }; //

    var jsadcvx = {
      // width: "100%",
      fontSize: buttonSize
    }; //

    var dvbijkrw = _objectSpread2({
      type: "submit",
      textAlign: "center",
      form: formid,
      // color: "black",
      // height: "60px",
      // padding: "10px 20px",
      style: jsadcvx,
      genConfig: aewsadw,
      obj: buttonText,
      longTrue: true
    }, siwerew);
    var adhwdse =
    /*#__PURE__*/
    //
    React.createElement(BearButton$1, dvbijkrw) // <button {...dvbijkrw}>sdfjwerw</button>
    ;
    var asidja = {
      obj: adhwdse,
      style: {
        marginBottom: "20px",
        textAlign: "center"
      }
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, asidja);
  }

  function FormError(textvar) {
    var okaease = {
      obj: textvar
    };
    var dfbokerr = /*#__PURE__*/React.createElement(BearDiv$1, okaease);
    return dfbokerr;
  }

  function firstInputCheck(baseObj) {
    //
    var nameeo = baseObj.name;

    var okwaew = nameeo ? secondCheck(baseObj) : FormError("No Form Name Supplied");
    return okwaew;
  } // 1FUNCTION


  function secondCheck(_ref3) {
    var baseObj = _extends({}, _ref3);
    var nameeo = baseObj["name"];
    var titlCheck = topButtonTrue && {
      noTitle: true
    };

    function getRef(_ref4) {
      var name = _ref4.name;
          _ref4.titlevar;
          _ref4.iconvar;
          var asdsa = _objectWithoutProperties(_ref4, ["name", "titlevar", "iconvar"]);

      //
      var reffo = //
      // register("name");
      register(name, asdsa);
      return reffo;
    }

    var okasew = getRef(baseObj);

    var hookArgs = _objectSpread2({
      control: control,
      errors: errors
    }, okasew);

    var existo = overObj && overObj[nameeo];
    var ijawe = existo ? existo : baseObj["textvar"];

    var odkasew = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, hookArgs), {}, {
      sameLine: sameLine,
      overObj: overObj
    }, baseObj), inputConfig), titlCheck), {}, {
      textvar: ijawe
    });


    var oiaswe = BearInput(odkasew);
    return oiaswe;
  }

  function sdfok(obj) {
    var inDict = dictvar && dictvar[obj];

    var baseObj = _objectSpread2(_objectSpread2({}, getFormDict(obj)), inDict);

    var fdjgre = baseObj === null || baseObj === void 0 ? void 0 : baseObj.obj;
    var obvdsaf = fdjgre ? fdjgre : isEmpty(baseObj) ? FormError("no form Dictionary supplied - " + obj) : firstInputCheck(baseObj);
    return obvdsaf;
  } //   const [currTab, setcurrTab] = useState(initBase);


  var currTab = "";
  var currForm = currTab;
  topButtonTrue && listvar[0];
  var listRend = listDict && listDict[currForm];
  var atbosa = listRend ? listRend : currForm;
  var listaros = topButtonTrue ? [atbosa] : listvar;
  var ijawesdafr = {
    dictvar: dictvar,
    listvar: listvar
  };
  var buttio = !noButton && /*#__PURE__*/React.createElement(Buttiona, buttonConfig);

  function vijsd9(_ref5) {
    _ref5.name;
        _objectWithoutProperties(_ref5, ["name"]);
  }

  function iasjdwe(obj) {
    // const chsersd = checkTick()
    var kadwesd = /*#__PURE__*/React.createElement(React.Fragment, null, obj["tabTitle"]);
    return kadwesd;
  }

  function Tabios() {
    var bdoewr = //
    "greyHover pointer";
    var okae = {
      margin: "10px",
      borderRadius: "20px"
    };
    var oksae = {
      chosenConfig: {
        bediaTrue: true
      },
      itemConfig: {
        style: okae,
        className: bdoewr
      }
    };

    function aidsjfew(_ref6) {
      var titlevar = _ref6.titlevar,
          iconvar = _ref6.iconvar,
          style = _ref6.style,
          zcvdf = _objectWithoutProperties(_ref6, ["titlevar", "iconvar", "style"]);
      var okawe = {
        style: {
          fontSize: "1.5em"
        },
        obj: iconvar
      };
      var lpsda = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, okawe), titlevar);
      style["textAlign"] = "center";

      _objectSpread2(_objectSpread2({
        style: style
      }, zcvdf), {}, {
        obj: lpsda
      });

      return lpsda; //   return <BearDiv {...oaewc} />;
      // return "oskdasd";
    }

    var asodwe = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
      onClick: vijsd9,
      singleClick: true,
      horizTrue: true,
      chosenItem: currTab,
      // titleAttr: "tabTitle",
      titleFunc: iasjdwe
    }, oksae), ijawesdafr), tabConfig), {}, {
      obj: aidsjfew // obj: (adqq) => "aspdle",

    });
    var okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearList$1, asodwe));
    return okfdsd;
  }

  function maperlis(sdfew) {
    return sdfew.map(sdfok);
  }

  var kaewsae = maperlis(listaros);
  var sudhawe = topButtonTrue ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabios, null), kaewsae) : kaewsae;
  /*#__PURE__*/React.createElement(React.Fragment, null, sudhawe);
  var iterwr = toplist;
  var mappit = iterwr ? /*#__PURE__*/React.createElement(React.Fragment, null, maperlis(toplist), /*#__PURE__*/React.createElement("br", null), sudhawe) : /*#__PURE__*/React.createElement(React.Fragment, null, sudhawe);
  var aidjwe = /*#__PURE__*/React.createElement(React.Fragment, null, topObj, mappit, buttio);

  _objectSpread2(_objectSpread2({}, args), {}, {
    listvar: listvar,
    listaros: listaros
  }); // 1console
  var aweuw = noForm ? aidjwe : formid ? /*#__PURE__*/React.createElement("form", args, aidjwe) : "NO FORM ID SPECIFIED";

  function Titren(_ref7) {
    var style = _ref7.style,
        sdfok = _objectWithoutProperties(_ref7, ["style"]);

    var kjase = _objectSpread2({
      style: _objectSpread2({
        textAlign: "left",
        fontSize: "1.3em",
        marginBottom: "30px"
      }, style),
      obj: titlevar
    }, sdfok); // const sdfijre =


    var noisae = /*#__PURE__*/React.createElement(BearDiv$1, kjase);
    return noisae;
  }

  var askew = titlevar && /*#__PURE__*/React.createElement(Titren, titleConfig);
  var vbokre = {//
  };
  var isae = /*#__PURE__*/React.createElement("div", vbokre, askew, aweuw);
  var isjdwesdfoek = //
  isae; // aweuw;
  // <div {...genConfig}>{aweuw}</div>;

  return isjdwesdfoek;
}

function getFormDict(objsoa) {
  var _emalBaso;

  var vbijdf9te = //
  "Email"; // ("Email address");
  var emalBaso = (_emalBaso = {
    required: true,
    // pattern: emailPatto,
    titlevar: "Email address"
  }, _defineProperty(_emalBaso, "titlevar", vbijdf9te), _defineProperty(_emalBaso, "iconvar", "email"), _emalBaso);
  var nasmwoBL = {
    required: true,
    // pattern: emailPatto,
    name: "name",
    titlevar: "Name",
    // titlevar: vbijdf9te,
    iconvar: "" // iconvar: "email",

  };
  var diewrsm = {
    required: true,
    name: "password",
    titlevar: "Password",
    type: "password"
  }; //  1tags

  var tgsoer = {
    name: "tags",
    titlevar: "Tags"
  };
  var nvcbxf = {
    email: emalBaso,
    name: nasmwoBL,
    password: diewrsm,
    tags: tgsoer // firstname:
    // lastname:

  };
  var ocvbds = nvcbxf[objsoa];
  return ocvbds;
}

function SignBase(_ref) {
  var funcvar = _ref.funcvar,
      _ref$typeSign = _ref.typeSign,
      typeSign = _ref$typeSign === void 0 ? "login" : _ref$typeSign,
      socialConfig = _ref.socialConfig,
      socialSubmit = _ref.socialSubmit;
      _ref.emailSubmit;
      var socialList = _ref.socialList,
      formConfig = _ref.formConfig,
      sdse = _objectWithoutProperties(_ref, ["funcvar", "typeSign", "socialConfig", "socialSubmit", "emailSubmit", "socialList", "formConfig"]);

  //
  //
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      emaTrue = _useState2[0],
      setemaTrue = _useState2[1];

  var _useState3 = useState(typeSign),
      _useState4 = _slicedToArray(_useState3, 2),
      sdfer = _useState4[0],
      setsignType = _useState4[1];

  var signType = sdfer ? sdfer : getParamVar("typeSign");

  function signCheck(typevar) {
    var okads = //
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
  } // 1emailbase


  var emaCon = {
    text: signCheck("Email"),
    icon: "envelope",
    iconFormat: function iconFormat(name) {
      return "fa fa-envelope";
    },
    style: {
      background: "#FF5733"
    },
    activeStyle: {
      background: "#ff6700"
    }
  };
  /** My Facebook login button. */

  var EmailLoginButton = createButton(emaCon);

  function dskwad() {
    logs$1.logga("asokdwqe");
  }

  var emBaso = {
    textvar: /*#__PURE__*/React.createElement(EmailLoginButton, null),
    onClick: dskwad,
    typevar: "email"
  };
  var fdsogkret = {
    google: {
      textvar: /*#__PURE__*/React.createElement(GoogleLoginButton, null, signCheck("Google")),
      // textvar: "Google",
      iconvar: /*#__PURE__*/React.createElement(SiGoogle, null),
      typevar: "google"
    },
    facebook: {
      textvar: /*#__PURE__*/React.createElement(FacebookLoginButton, null, signCheck("Facebook")),
      // textvar: "Facebook",
      // iconvar: <SiFacebook />,
      typevar: "facebook"
    },
    email: emBaso,
    github: {
      textvar: /*#__PURE__*/React.createElement(GithubLoginButton, null),
      // textvar: "Twitter",
      // iconvar: <SiGithub />,
      typevar: "github"
    },
    apple: {
      textvar: /*#__PURE__*/React.createElement(AppleLoginButton, null),
      typevar: "apple"
    },
    twitter: {
      textvar: /*#__PURE__*/React.createElement(TwitterLoginButton, null),
      // textvar: "Github",
      iconvar: /*#__PURE__*/React.createElement(SiTwitter, null),
      typevar: "github"
    } //

  };

  function osadew(_ref2) {
    var typevar = _ref2.typevar;
    logs$1.logga("___ sinBas SOCIAL CLICK ___", typevar);

    switch (typevar) {
      case "email":
        setemaTrue(true);
        break;

      default:
        socialSubmit(typevar);
    }
  }


  var dfogre = [//
  // "twitter",
  "google", "facebook", "apple", "email"];

  var igfder = _objectSpread2({
    listvar: socialList ? socialList : dfogre,
    dictvar: fdsogkret,
    onClick: osadew,
    spaceBetween: "10px",
    // renderItem: Bsaeosa,
    renderItem: function renderItem(sad) {
      return sad.textvar;
    }
  }, socialConfig);

  function spfdewr(_ref4) {
    var email = _ref4.email,
        password = _ref4.password;
    logs$1.logga("___ signBase SIGNUP ___", email, password); //

    userLogSign(email, password, funcvar);
  } // 1console


  logs$1.logga("___ SignBsae SOCIAL ___", igfder);
  var dsfijd =
  /*#__PURE__*/
  //
  // {/* <BearTextMedia {...igfder} /> */}
  React.createElement(BearList$1, igfder);

  function FOrnaW() {
    //
    //
    var dfijd = [//
    "email", "password"];
    var klmi = //
    // sofer;
    spfdewr;

    var dfgre = _objectSpread2({
      listvar: dfijd,
      // dictvar:
      // sameline
      titleConfig: {
        width: "80px"
      },
      buttonText: "Register",
      formid: "register",
      onSubmit: klmi
    }, formConfig);

    var forso = /*#__PURE__*/React.createElement(BearForm, dfgre);
    return forso;
  }

  var jvsfeer = //
  emaTrue ? /*#__PURE__*/React.createElement(FOrnaW, null) : dsfijd;

  function OrCHekc() {
    var baseTEST = "";
    var bottLink = "";
    var changeit = "";

    switch (signType) {
      case "login":
        changeit = "signup";
        baseTEST = "Don't have an account?";
        bottLink = "Sign Up for free";
        break;

      case "signup":
        baseTEST = "Already have an account?";
        bottLink = "Sign in to Bedia";
        changeit = "login";
        break;
    }

    var kasesd = {
      obj: baseTEST
    };

    function saoke(sad) {
      setsignType(changeit);
    }

    var koewqe = {
      onClick: saoke,
      // linkvar: "?typeSign=" + signType,
      // linkvar: " signType,
      // linkConfig: {
      //   noBlack: true,
      // },
      obj: bottLink,
      style: {
        marginBottom: "20p",
        fontSize: "1.3em"
      }
    };
    var oksae = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, kasesd), /*#__PURE__*/React.createElement(BearDiv$1, koewqe));
    var sdease = {
      obj: oksae,
      bediaTrue: true,
      style: {
        padding: "15px"
      }
    };
    var kdsfse = /*#__PURE__*/React.createElement(BearButton$1, sdease);
    var oasebd = {
      style: {
        paddingTop: "20px",
        textAlign: "center",
        fontSize: "1.3em"
      },
      obj: kdsfse
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, oasebd);
  }

  var jdtre = sdfer && /*#__PURE__*/React.createElement(React.Fragment, null, jvsfeer, /*#__PURE__*/React.createElement(OrCHekc, null));

  var okasdew = _objectSpread2({
    obj: jdtre
  }, sdse);

  return /*#__PURE__*/React.createElement(BearDiv$1, okasdew);
}

function BearCarousel(_ref) {
  var listvar = _ref.listvar,
      _ref$slideNum = _ref.slideNum,
      slideNum = _ref$slideNum === void 0 ? 0 : _ref$slideNum;
      _ref.messvar;
      var args = _objectWithoutProperties(_ref, ["listvar", "slideNum", "messvar"]);

  function caroRet(sdfewr) {
    var sokdaw = {// onExiting={() => setAnimating(true)}
      // onExited={() => setAnimating(false)}
      // key={item.src}
    };
    var iasd = /*#__PURE__*/React.createElement(CarouselItem, sokdaw, /*#__PURE__*/React.createElement("br", null), sdfewr);
    return iasd;
  }

  var nisaw = //
  // listvar.map(Asdew);
  listvar.map(caroRet);
  var strapCaro = {
    activeIndex: slideNum
  };
  args = _objectSpread2(_objectSpread2({}, strapCaro), args);
  var kesae = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Carousel, args, nisaw));
  return kesae;
}

var emojiDict = {
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
  var _emojiDict$asofkr;

  var side = (_emojiDict$asofkr = emojiDict[asofkr]) === null || _emojiDict$asofkr === void 0 ? void 0 : _emojiDict$asofkr.emoji;
  side = side ? side : "";
  return side;
}

function mapEmojiFace(listvar) {
  var iewase = listvar && listvar.map(getEMoj);
  return iewase;
}

function mainRet(cxsd) {
  var aijew = emojiDict[cxsd];
  var oiajew = "".concat(aijew["emoji"], " ").concat(aijew["textvar"], " ");
  var oaksde = {
    DICT: emojiDict,
    inits: cxsd,
    LABEL: oiajew
  };
  logs.logga("___ emojilist--mainRet ___", oaksde);
  return oiajew;
}

function labelMoj(cxsd) {
  var xcokvse = {
    value: cxsd,
    label: mainRet(cxsd)
  };
  return xcokvse;
}
function EmojiLabelMap(cxsd) {
  var sd9fwq = cxsd.map(labelMoj);
  logs.logga("___ EmojiLabelMap ___", sd9fwq);
  return sd9fwq;
}

function BearEmoji(_ref) {
  var initialValue = _ref.initialValue;
      _ref.selectBlue;
      _ref.selectTrue;
      _ref.chooseFunc;
      var typevar = _ref.typevar,
      listvar = _ref.listvar,
      onlyEmoji = _ref.onlyEmoji,
      itemConfig = _ref.itemConfig,
      sdaa = _objectWithoutProperties(_ref, ["initialValue", "selectBlue", "selectTrue", "chooseFunc", "typevar", "listvar", "onlyEmoji", "itemConfig"]);

  //
  var ijsae = //
  emojiDict;
  var kjsijsa = [//
  "funny", "happy", "interest", // "surprise",
  "sad" // "angry",
  ];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      asdoe = _useState2[0];
      _useState2[1];

  var jdfew = //
  // kjsijsa
  listvar ? listvar : kjsijsa; //
  //

  var plaqwe = //
  // greyHover circleHover
  "expandHover pointer";
  var sadwqe = //
  plaqwe; // selectBlue ? plaqwe : "pointer";

  var oksae = {
    // background: "red",
    padding: "5px",
    borderRadius: "50%"
  };

  var sfjaw = _objectSpread2({
    className: sadwqe,
    style: oksae
  }, itemConfig);

  function saokde(_ref2) {
    var chosenTrue = _ref2.chosenTrue,
        emoji = _ref2.emoji,
        textvar = _ref2.textvar,
        qweq = _objectWithoutProperties(_ref2, ["chosenTrue", "emoji", "textvar"]);
    var dsfge = {
      minWidth: "100px",
      fontSize: "22px"
    };
    var xdffsd = {
      obj: textvar,
      style: dsfge
    };
    var sdfiewrw =
    /*#__PURE__*/
    //
    // "sodkqeq"
    React.createElement(BearDiv$1, xdffsd);
    var bocd = onlyEmoji ? emoji : /*#__PURE__*/React.createElement(React.Fragment, null, emoji);
    var qwtgsa = chosenTrue && BearIcon("tick");
    var lfdijg = /*#__PURE__*/React.createElement(React.Fragment, null, bocd, qwtgsa);
    var lsadwe = //
    lfdijg; // bocd
    // ureytue;

    var oksaew = _objectSpread2({
      obj: lsadwe
    }, sfjaw);

    var aokdwe = _objectSpread2({
      // style:
      obj: /*#__PURE__*/React.createElement(BearDiv$1, oksaew),
      popConfig: {
        content: sdfiewrw
      }
    }, qweq);
    return /*#__PURE__*/React.createElement(BearDiv$1, aokdwe);
  }

  function Listso(_ref3) {
    var ssdwedf = _extends({}, _ref3);

    //
    var ijdwq = {
      // style: { background: "red" },
      chosenItem: asdoe,
      chooseTrue: true,
      returnArray: true,
      clickSingle: true,
      chosenConfig: {// style: {
        //   background: "blue",
        // },
        // className: "shadowBottom",
      }
    };

    function asdoke(sdfswe) {
      var oksadw = //
      // "dsfoker";
      saokde(sdfswe);
      return oksadw;
    }
    var logBaso = {
      logtrue: "asdas",
      messvar: "BEAEMOJI"
    };

    var dsjs = _objectSpread2(_objectSpread2(_objectSpread2({
      listvar: jdfew,
      dictvar: ijsae,
      renderItem: asdoke,
      horizTrue: true,
      itemConfig: sfjaw
    }, logBaso), ijdwq), ssdwedf);
    return /*#__PURE__*/React.createElement(BearList$1, dsjs);
  }

  function Selectos() {
    // const sidjew = {
    //   value:
    // }
    var fdogkre = //
    // jdfew
    Object.keys(ijsae);
    var awwsa = EmojiLabelMap(fdogkre);
    var adsfw = EmojiLabelMap(initialValue);

    _objectSpread2(_objectSpread2({
      initOptions: awwsa,
      limitvar: 3
    }, sdaa), {}, {
      logtrue: false,
      messvar: "emojListo",
      value: adsfw
    });
    var asiew = //
    ""; //   <BearSelect {...ijsaew} />;

    return asiew;
  }

  var endValue = "";

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

function durationParser(inputTime) {
  var formatType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "h[h] m[m]";

  // finalForm = moment.duration(inputTime).format("h[hrs] m[min] s[sec]");
  require("moment-duration-format");

  var timeDicto = _defineProperty({
    hms: "h:*mm:ss",
    sfp: "s",
    ms: "m[m] s[s]",
    hm: "h[h] m[m]"
  }, "hms", "h:*mm:ss");

  var bvnfdgd = //
  // "";
  moment.duration(inputTime, "seconds");
  var formios = //
  formatType ? timeDicto[formatType] : formatType; // timeDicto[formatType]

  var finalForm = //
  // "";
  bvnfdgd.format(formios);
  return finalForm;
}
var iajew = "h:mm:ss";
function timeDecim(minuteva) {
  // let endinqqqq = durationParser(minuteva, iajew);
  function goins() {
    var inneioa = minuteva < 1;
    var hjrdfft = inneioa ? "0:00" : durationParser(minuteva, iajew);
    return hjrdfft;
  }

  var endinqqqq = minuteva > 0 ? goins() : "0:00";
  return endinqqqq;
}

function BearDuration(_ref) {
  var _ref$parseType = _ref.parseType,
      parseType = _ref$parseType === void 0 ? "decimal" : _ref$parseType,
      duration = _ref.duration,
      args = _objectWithoutProperties(_ref, ["parseType", "duration"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var djsfder = //
  duration; // getObjDuration(obj);

  var ijewwe = //
  // durationParser(djsfder, "ms");
  ""; // 1type

  switch (parseType) {
    case "decimal":
      ijewwe = timeDecim(djsfder);
      break;

    case "short":
      ijewwe = durationParser(djsfder, "mm m ss s");
      break;
  }
  BearIcon("time");
  var okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, ijewwe); //   1console
  args = _objectSpread2({
    obj: okfdsd
  }, args);
  return /*#__PURE__*/React.createElement(BearDiv$1, args);
} // // 1duration
// function getDuration
//   const { getVideoDurationInSeconds } = require('get-video-duration')
//   const { getAudioDurationInSeconds } = require('get-audio-duration');
// // From a local path...
// getVideoDurationInSeconds('video.mov').then((duration) => {
//   console.log(duration)
// })
// getAudioDurationInSeconds('audio.flac').then((duration) => {
//   console.log(duration);
// });

var axios = require("axios");

function FetchLink(askdw, _ref) {
  var funcvar = _ref.funcvar,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "fetchLink" : _ref$name,
      ase = _objectWithoutProperties(_ref, ["funcvar", "name"]);

  //
  var funcveo = funcvar;
  logs$1.logga("___FetchLink ARGS ___", ase);

  function saijdwe() {
    return _saijdwe.apply(this, arguments);
  }

  function _saijdwe() {
    _saijdwe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var okdssae;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              okdssae = _objectSpread2({}, ase);
              _context.next = 3;
              return axios.get(askdw, okdssae);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saijdwe.apply(this, arguments);
  }

  funcveo = funcveo ? funcveo : saijdwe;

  var _useQuery = useQuery(name, funcveo),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      dsokfe = _objectWithoutProperties(_useQuery, ["data", "isLoading"]);

  var sdifew = //
  data === null || data === void 0 ? void 0 : data.data;

  var sodfkew = _objectSpread2(_objectSpread2({
    data: sdifew,
    dataList: sdifew === null || sdifew === void 0 ? void 0 : sdifew.results,
    dataBase: data,
    loading: isLoading
  }, dsokfe), sdifew);

  logs$1.logga("___ queryFuncs ___", sodfkew);
  return sodfkew;
}

// Hook

function UseFirestoreQuery(query, funcas) {
  //
  // Our initial state
  // Start with an "idle" status if query is falsy, as that means hook consumer is
  // waiting on required data before creating the query object.
  // Example: useFirestoreQuery(uid && firestore.collection("profiles").doc(uid))
  var initialState = {
    status: query ? "loading" : "idle",
    data: undefined,
    error: undefined
  };

  var reducer = function reducer(state, action) {

    switch (action.type) {
      case "idle":
        return {
          status: "idle",
          idle: true
        };

      case "loading":
        return {
          status: "loading",
          loading: true
        };

      case "success":
        if (funcas) {
          funcas(action.payload);
        }

        return {
          searched: true,
          status: "success",
          data: action.payload,
          error: undefined
        };

      case "error":
        return {
          searched: true,
          status: "error",
          data: undefined,
          error: action.payload
        };

      default:
        throw new Error("invalid action");
    }
  };

  function useMemoCompare(next, compare) {
    // Ref for storing previous value
    var previousRef = useRef();
    var previous = previousRef.current; // Pass previous and next value to compare function
    // to determine whether to consider them equal.

    var isEqual = compare(previous, next); // If not equal update previousRef to next value.
    // We only update if not equal so that this hook continues to return
    // the same old value if compare keeps returning true.

    useEffect(function () {
      if (!isEqual) {
        previousRef.current = next;
      }
    }); // Finally, if equal then return the previous value

    return isEqual ? previous : next;
  } // Setup our state and actions


  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; // Get cached Firestore query object with useMemoCompare (https://usehooks.com/useMemoCompare)
  // Needed because firestore.collection("profiles").doc(uid) will always being a new object reference
  // causing effect to run -> state change -> rerender -> effect runs -> etc ...
  // This is nicer than requiring hook consumer to always memoize query with useMemo.


  var queryCached = useMemoCompare(query, function (prevQuery) {
    // Use built-in Firestore isEqual method to determine if "equal"
    return prevQuery && query && query.isEqual(prevQuery);
  });
  useEffect(function () {
    // Return early if query is falsy and reset to "idle" status in case
    // we're coming from "success" or "error" status due to query change.
    if (!queryCached) {
      dispatch({
        type: "idle"
      });
      return;
    }

    dispatch({
      type: "loading"
    }); // Subscribe to query with onSnapshot
    // Will unsubscribe on cleanup since this returns an unsubscribe function

    return queryCached.onSnapshot(function (response) {
      // Get data for collection or doc
      var data = //
      fireDocs(response); // response.docs
      //   ? getCollectionData(response.docs)
      //   : getDocData(response);

      dispatch({
        type: "success",
        payload: data
      });
    }, function (error) {
      dispatch({
        type: "error",
        payload: error
      });
    });
  }, [queryCached]); // Only run effect if queryCached changes

  return state;
}

function fetchParams(sdforw, sdokereq) {
  return FetchLink(sdforw, {
    params: sdokereq
  });
}
function dataFunc(funcv) {
  return funcv();
}
function QueryMain(funcv) {
  var nameo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "querybsae";

  function fdsrase() {
    return funcv();
  }

  var _useQuery = useQuery(nameo, fdsrase),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      asodke = _objectWithoutProperties(_useQuery, ["data", "isLoading"]);

  function sdfser(_ref) {
    var data = _ref.data,
        asd = _objectWithoutProperties(_ref, ["data"]);

    return _objectSpread2(_objectSpread2({}, asd), data);
  }

  var oksae = data && turnarray(data).map(sdfser);

  _objectSpread2({
    data: oksae,
    loading: isLoading
  }, asodke); //   return okwwew;


  return UseFirestoreQuery(funcv);
} // export function createModelApp(typeos, listvar, {!noaksew){
// if (!noNote) {
//     createModelNote(asdjew);
//   }
// }

function getDocData(doc) {
  return doc.exists === true ? _objectSpread2({
    id: doc.id
  }, doc.data()) : "NO OBJECT";
}
function fireDocs(response) {
  return response.docs ? response.docs.map(getDocData) : getDocData(response);
}
function queryData(_x) {
  return _queryData.apply(this, arguments);
} // const okaeas =
// funcv &&
// funcv.onSnapshot((response) => {
//   // Get data for collection or doc
//   let asokwe = fireDocs(response);
//   logs.logga("___ queryData ___", {
//     response: response,
//     FILTERED: asokwe,
//   });
//   osadwe = asokwe;
//   // return asokwe;
// });

function _queryData() {
  _queryData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(funcv) {
    var osadwe;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return funcv;

          case 2:
            osadwe = _context.sent;
            osadwe = fireDocs(osadwe); // funcv.then();

            return _context.abrupt("return", osadwe);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _queryData.apply(this, arguments);
}

function SearchPlaylist(_ref) {
  var userObj = _ref.userObj;
      _ref.singleUser;
      var createFunc = _ref.createFunc,
      userPlaylists = _ref.userPlaylists,
      args = _objectWithoutProperties(_ref, ["userObj", "singleUser", "createFunc", "userPlaylists"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var iasje = mapFunc(userPlaylists, emojiNameString);

  var _useState3 = useState(iasje),
      _useState4 = _slicedToArray(_useState3, 2),
      opttnas = _useState4[0],
      setoptions = _useState4[1];

  var plydatuser = userPlaylists;

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      plydatpub = _useState6[0];
      _useState6[1];

  var privListPlay = mapFunc(plydatuser, emojiNameString);
  mapFunc(plydatpub, emojiNameString); // userPlaylists = userPlaylists
  var sdoifew = //
  privListPlay; // pubListPlay;

  var optFIns = //
  // asdOSAD;
  opttnas; // asokdew;
  // privListPlay;
  // 1value

  var vlaios = //
  // asdOSAD;
  type;

  function setNewVal(baseoMojs) {
    var kjsaewe = [].concat(_toConsumableArray(type), [baseoMojs]);
    var oaskdwe = [].concat(_toConsumableArray(opttnas), [baseoMojs]);
    logs$2.logga("___ playlist CREATE NEW  ___", {
      OBJ_VALUE: baseoMojs,
      VALUES: kjsaewe,
      OPTIONS: oaskdwe
    });
    setType(kjsaewe);
    setoptions(oaskdwe); // setcreateModalObj();
  }

  function saowe(sdokfer) {
    var baseoMojs = emojiNameString(sdokfer);
    setNewVal(baseoMojs);
    logs$2.logga("___ CREATE PLAYLIST SEARCH add ___", {
      sdokfer: sdokfer,
      baseoMojs: baseoMojs
    });

    if (createFunc) {
      createFunc(sdokfer);
    }

    return baseoMojs;
  }

  function openPlyCreate(sdfpe) {
    logs$2.logga("___ CREATE PLAYLIST SEARCH GO ___", sdfpe);
    var oksadw = {
      name: sdfpe
    }; // saowe

    SaveUser("playlist", userObj, oksadw, saowe);
  }

  function okasdwe(xlcvs) {
    logs$2.logga("___ SEARCH PLAYLIST onChange ___", xlcvs);
  }

  function sofwqee(kfrree) {
    logs$2.logga("___ searPlaylist VALUEFUNC ___", kfrree);
    setType(kfrree);
  }

  var cretePlalyDict = {
    initOptions: sdoifew,
    options: optFIns,
    value: vlaios,
    createFunc: openPlyCreate
  };
  args = _objectSpread2(_objectSpread2({}, cretePlalyDict), {}, {
    // getNewOptionData: askdwe,
    onChange: okasdwe,
    valueFunc: sofwqee,
    // NoOptionsMessage: Ajwwa,
    logtrue: false,
    messvar: "searchPlaylist"
  }, args);
  var oksae = {
    plydatuser: plydatuser
  }; // 1console

  logs$2.logga("___ searchPlaylist LISTS   ___", oksae);
  logs$2.logga("___ SearcPlaylist ___", args);
  logs$2.logga("___ userPlaylists ___", userPlaylists); // const isajew = <></>;
  // return "";

  return BearSelect(args);
}

function SearchNotion(_ref) {
  _ref.userObj;
      var userPlaylists = _ref.userPlaylists;
      _ref.singleUser;
      _ref.createFunc;
      var args = _objectWithoutProperties(_ref, ["userObj", "userPlaylists", "singleUser", "createFunc"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var iasje = mapFunc(userPlaylists, emojiNameString);

  var _useState3 = useState(iasje),
      _useState4 = _slicedToArray(_useState3, 2),
      opttnas = _useState4[0];
      _useState4[1];

  var plydatuser = userPlaylists;

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      plydatpub = _useState6[0];
      _useState6[1];

  var privListPlay = mapFunc(plydatuser, emojiNameString);
  mapFunc(plydatpub, emojiNameString); // 1user
  var sdoifew = //
  privListPlay; // pubListPlay;

  var optFIns = //
  // asdOSAD;
  opttnas; // asokdew;
  // privListPlay;
  // 1value

  var vlaios = //
  // asdOSAD;
  type;

  function openPlyCreate(sdfpe) {
    logs$2.logga("___ CREATE PLAYLIST SEARCH GO ___", sdfpe);
  }

  function okasdwe(xlcvs) {
    logs$2.logga("___ SEARCH PLAYLIST onChange ___", xlcvs);
  }

  function sofwqee(kfrree) {
    logs$2.logga("___ searPlaylist VALUEFUNC ___", kfrree);
    setType(kfrree);
  }

  var cretePlalyDict = {
    initOptions: sdoifew,
    options: optFIns,
    value: vlaios,
    createFunc: openPlyCreate
  };
  args = _objectSpread2(_objectSpread2(_objectSpread2({}, args), cretePlalyDict), {}, {
    // getNewOptionData: askdwe,
    isMulti: true,
    onChange: okasdwe,
    valueFunc: sofwqee,
    // NoOptionsMessage: Ajwwa,
    logtrue: false,
    messvar: "searchPlaylist" // obj: okfdsd,

  });
  var oksae = {
    plydatuser: plydatuser
  }; // 1console

  logs$2.logga("___ searchPlaylist LISTS   ___", oksae);
  logs$2.logga("___ SearcPlaylist ___", args); // const isajew = <></>;
  // return "";

  return /*#__PURE__*/React.createElement(BearSelect, args);
}

function SearchKnowledge(_ref) {
  var _ref$typevar = _ref.typevar,
      typevar = _ref$typevar === void 0 ? "wikipedia" : _ref$typevar,
      chooseFunc = _ref.chooseFunc,
      createIndex = _ref.createIndex,
      includeImage = _ref.includeImage,
      resultConfig = _ref.resultConfig,
      args = _objectWithoutProperties(_ref, ["typevar", "chooseFunc", "createIndex", "includeImage", "resultConfig"]);

  //
  includeImage = "y"; // 1const

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setInpTexto = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      adfa = _useState4[0],
      setoptios = _useState4[1];

  var optios = checkFullArray(adfa) && adfa;
  optios && mapInnerAttr(optios, "wikiID"); // 1query
  //   1error

  function errios(sdokfe) {
    logs$2.logga("___ KNOW ERRORS ___", sdokfe);
  }

  function onCreat(okweqq) {
    logs$2.logga("___ CREAT TOPIC ___", okweqq);
    checkFullArray(okweqq) && createIndex; // if (oksaew) {
    //   CreateTopic(okweqq, currentUser);
    // }
  }


  var limVaro = //
  // 1;
  // 10;
  2; // 1google

  var googlLink = "https://kgsearch.googleapis.com/v1/entities:search";

  function getGoogLink() {
    var googleApiKey = //
    // "";
    "AIzaSyA9TnNyVDuilrsSdYIy9zxv_2B3XLjCVG4";
    var iawes = {
      // query: InpTexto,
      query: "Facebook",
      limit: limVaro,
      //   indent: true,
      key: googleApiKey // types: "Person",

    };
    logs$2.logga("___SEARCH getGooleLink ___", iawes);
    return iawes;
  } // 1wikipedia


  var wikoaslw = "https://en.wikipedia.org/w/api.php";

  function getWikiLink(searcho) {
    // exintro&explaintext&
    var sadesdf = //
    //   "";
    //   "imageinfo";
    //   "pageimages";
    "extracts|pageimages"; // "pageimages|info|extracts";
    // pithumbsize: 400,
    // exlimit: "max",

    var sdfuhwq = {
      piprop: "thumbnail",
      //   piprop: "original",
      pithumbsize: 600,
      exsentences: 1
    };
    var endSearch = //
    // InpTexto
    searcho;
    logs$2.logga("___ getWikiLink SEARCH   ___", endSearch);
    return _objectSpread2({
      format: "json",
      generator: "search",
      action: "query",
      gsrnamespace: 0,
      gsrlimit: limVaro,
      origin: "*",
      gsrsearch: endSearch,
      //   titles: endSearch,
      //
      // IMAGE
      inprop: "url",
      prop: sadesdf,
      exintro: true,
      explaintext: true
    }, sdfuhwq);
  } // 1link


  var initFunit = "";
  var retFuncit = "";
  var service_url = ""; //

  switch (typevar) {
    case "google":
      initFunit = getGoogLink;
      retFuncit = returnGoogle;
      service_url = googlLink;
      break;

    case "wikipedia":
      initFunit = getWikiLink;
      retFuncit = returnWiki;
      service_url = wikoaslw;
      break;
  }

  function asokdwe(adsf) {
    return retFuncit(adsf.data);
  }

  function getKnow(_x) {
    return _getKnow.apply(this, arguments);
  } //
  // 1select return


  function _getKnow() {
    _getKnow = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(searchvar) {
      var sadijwe, odkaew, vxeew, dfewr, oksedsf, adwqe;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sadijwe = //
              searchvar; //   type;

              odkaew = initFunit(sadijwe);
              vxeew = {
                params: odkaew
              };
              dfewr = turnDictLink(odkaew, service_url);
              _context2.next = 6;
              return axios$1.get(service_url, vxeew).then(asokdwe).catch(errios);

            case 6:
              oksedsf = _context2.sent;
              adwqe = {
                SEARCH: searchvar,
                DATA: oksedsf,
                LINK: service_url,
                LINK_WITH: dfewr,
                EXTRA_FETCH: vxeew // ...ijasew,
                // ...vxeew

              };
              logs$2.logga(typevar + "___ gentKnow ___", adwqe);
              return _context2.abrupt("return", oksedsf);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getKnow.apply(this, arguments);
  }

  function selectRend(_ref2) {
    var imageAttr = _ref2.imageAttr,
        name = _ref2.name,
        asww = _objectWithoutProperties(_ref2, ["imageAttr", "name"]);

    var cbjdigr = _objectSpread2({
      imageAttr: imageAttr,
      name: name
    }, asww);

    var sdokfer = {
      style: {
        fontSize: "20px"
      }
    };

    var daease = _objectSpread2(_objectSpread2({
      imagevar: imageAttr,
      textvar: name,
      imagesize: 30
    }, sdokfer), resultConfig);

    var fdgorr = //
    includeImage ? /*#__PURE__*/React.createElement(BearTextMedia, daease) : name;
    var asjwaswe = /*#__PURE__*/React.createElement(React.Fragment, null, fdgorr);
    var dsoqw = {
      value: cbjdigr,
      label: asjwaswe // label: name,

    };
    logs$2.logga("___ Kowled OBJECT ___", dsoqw);
    return dsoqw;
  } // 1google RETURN


  function googItem(_ref3) {
    var name = _ref3.name,
        image = _ref3.image,
        asdwe = _objectWithoutProperties(_ref3, ["name", "image"]);

    var ijisae = {
      type: asdwe["@type"],
      googleID: asdwe["@id"],
      name: name,
      imageAttr: image
    };
    logs$2.logga("___ gooItem ___", ijisae);
    return selectRend(ijisae);
  }

  function returnGoogle(_ref4) {
    var itemListElement = _ref4.itemListElement,
        asew = _objectWithoutProperties(_ref4, ["itemListElement"]);

    logs$2.logga("___ retuGoogle ___", asew);

    function saie(adsfwr) {
      var ksad = adsfwr.result;
      return googItem(ksad);
    }

    var asdeq = itemListElement.map(saie);
    return asdeq;
  } //   1wiki RETURN


  function wikItem(_ref5) {
    var thumbnail = _ref5.thumbnail,
        title = _ref5.title,
        pageid = _ref5.pageid,
        asdw = _objectWithoutProperties(_ref5, ["thumbnail", "title", "pageid"]);

    //
    var daease = {
      imageAttr: thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.source,
      name: title,
      wikiID: pageid.toString(),
      id: slugFunc(title, "_")
    };
    logs$2.logga("___ WIKIPEDI AOTHER ___", asdw);
    logs$2.logga("___ wikItem ___", daease);
    return selectRend(daease);
  }

  function returnWiki(cxzvfd) {
    var _cxzvfd$query;

    var asduw = //
    cxzvfd === null || cxzvfd === void 0 ? void 0 : (_cxzvfd$query = cxzvfd.query) === null || _cxzvfd$query === void 0 ? void 0 : _cxzvfd$query.pages;
    var sidwq = //
    asduw && //
    //   Object.values(asduw);
    Object.values(asduw).map(wikItem);
    logs$2.logga(typevar + "___returnWiki retRsult ___", sidwq);
    return sidwq;
  }

  function asdiwe(adwq) {
    var mdsao = //
    adwq; //   adwq.target.value;

    logs$2.logga("Search Knowledge- on Search=---", mdsao);
    setInpTexto(adwq);
  }

  function changeoos(_ref6) {
    var value = _ref6.value,
        isNew = _ref6.isNew;
        _objectWithoutProperties(_ref6, ["value", "isNew"]);

    var xvuew = _objectSpread2({
      name: isNew && value
    }, value);

    return xvuew;
  } //
  // 1create


  function passUp(vxcob) {
    var endRes = vxcob.map(changeoos);
    var asoke = {
      LIST: endRes,
      createIndex: createIndex
    };
    logs$2.logga("___ searcKnowl ONHANGE ___", asoke);
    onCreat(endRes);
    chooseFunc(endRes);
  }

  function chooesi(vxcob) {
    //
    //
    setoptios(vxcob);

    if (chooseFunc) {
      passUp(vxcob);
    }
  }

  function changeos(aewqe) {
    logs$2.logga("___ OHANGE KOWLEDGE ___", aewqe);
    chooesi(aewqe);
  } // 1create

  var asdyw = _objectSpread2({
    typeSelect: "async",
    // value: ofew,
    // placeholder: InpTexto,
    onInputChange: asdiwe,
    onChange: changeos,
    // onChange: asdiwe,
    loadOptions: getKnow,
    noValueReturn: true
  }, args); //   1test


  var jasdwe = getKnow("Facebook"); // 1console

  logs$2.logga("___ modelFinitos ___", {
    TEST: jasdwe // optios: optios,
    // modelFinitos: modelFinitos,

  });
  logs$2.logga("___ SEAR KNowledge MAIN ___", asdyw);
  var xcvear = BearSelect(asdyw);
  return xcvear;
}

function SearchPeople(_ref) {
  var args = _extends({}, _ref);

  // 1const
  //   function creatPeep(adfke){
  //     vduwr9
  //   }
  args = _objectSpread2({
    includeImage: true
  }, args);
  return /*#__PURE__*/React.createElement(SearchKnowledge, args);
}

function AlterModelConst(_ref) {
  var _dfkree;

  var topicConfig = _ref.topicConfig;
      _ref.nameConfig;
      var emojiConfig = _ref.emojiConfig,
      currentUser = _ref.currentUser,
      modelCreateFunc = _ref.modelCreateFunc,
      listvar = _ref.listvar,
      dictvar = _ref.dictvar,
      args = _objectWithoutProperties(_ref, ["topicConfig", "nameConfig", "emojiConfig", "currentUser", "modelCreateFunc", "listvar", "dictvar"]);

  //
  // 1fontsize
  var baseoFont = 80;
  var asijew = {
    fontSize: baseoFont
  };

  var _QueryMain = //
  // "";
  // QueryData()
  QueryMain(getUserPlaylists(currentUser)),
      plydatuser = _QueryMain.data;
      _QueryMain.isLoading; // QueryMain(GetUserObjs(indexPlaylist, currentUser));


  function showSelStly(lcxmvd) {
    var dsofk = _objectSpread2(_objectSpread2({}, asijew), lcxmvd);

    logs$1.logga("___ showSelStly bbbb___", dsofk);
    return dsofk;
  } // 1emoji


  function EmojBaso(adferw) {
    //
    var aijde = {
      fontSize: "36px" // margin:

    };
    var sdijf = {
      style: aijde
    };
    var iasjdwe = showSelStly(_objectSpread2(_objectSpread2(_objectSpread2({}, adferw), aijde), {}, {
      onlyEmoji: true,
      // selectBlue: true,
      itemConfig: sdijf
    }, emojiConfig));
    logs$1.logga("___ altmodel EmoijList ___", iasjdwe);
    var emkjBaseo = //
    BearEmoji(iasjdwe); // "sadokae"

    return emkjBaseo;
  } // 1name
  // function SpekaFind(asdfewr) {
  //   const ijasew = {
  //     //
  //     name: "aboutList",
  //     style: asijew,
  //     ...asdfewr,
  //   };
  //   return <SearchKnowledge {...ijasew} />;
  // }
  // 1private 1public


  function PrivacySett(asdew) {
    _objectSpread2({}, asdew);

    return "dk"; // return <PrivacyChoose {...lasewase} />;
  }

  var preovioBase = {
    name: "private",
    iconvar: BearIcon("privacy"),
    titlevar: "Privacy",
    inputFunction: PrivacySett
  }; // 1playlist

  function PlayaFinso(asdew) {
    //
    function tretsd(cxvk) {
      logs$1.logga("___ cxvk ___", cxvk); //   setplayCreate(cxvk);

      modelCreateFunc(1); // addNew(1);
    }

    var playBase = {
      userPlaylists: plydatuser
    };

    var ijsae = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asijew), asdew), playBase), {}, {
      createFunc: tretsd
    });

    logs$1.logga("___ altModel PLAYLIST ___", ijsae); // return

    return SearchPlaylist(ijsae);
  } // 1teams 1microsoft


  function Teamsio(asdew) {
    var lasewase = _objectSpread2({}, asdew);

    return /*#__PURE__*/React.createElement(SearchPlaylist, lasewase);
  }

  var mcsfosa = {
    name: "teams",
    iconvar: BearIcon("teams"),
    titlevar: "Microsoft Teams Channel",
    inputFunction: Teamsio
  }; // 1notion

  function NotioShare(asdew) {

    var notsfjwe = //
    ""; // QueryMain(baseNote, "getNote",);

    var lasewase = _objectSpread2({}, asdew);

    logs$1.logga("___ AlterMode SEARCH NOTION ___", notsfjwe); // return "aspdlwqew";

    return /*#__PURE__*/React.createElement(SearchNotion, lasewase);
  }

  var cxvmfg = {
    name: "notion",
    iconvar: BearIcon("notion"),
    titlevar: "Notion",
    inputFunction: NotioShare
  }; // 1slack BASIC

  function SlackoShare(asdew) {
    var lasewase = _objectSpread2({}, asdew);

    return /*#__PURE__*/React.createElement(SearchPlaylist, lasewase);
  }

  var sldsfe = {
    name: "slack",
    iconvar: BearIcon("slack"),
    titlevar: "Slack",
    inputFunction: SlackoShare
  }; // 1knowledge 1topic

  function KnwBs(osdkfr) {
    //
    //
    var _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2);
        _useState2[0];
        _useState2[1];
    // value: knwVal,


    var ijasew = _objectSpread2(_objectSpread2(_objectSpread2({}, asijew), osdkfr), {}, {
      createIndex: "topic"
    }, topicConfig);

    var sieqwe = SearchKnowledge(ijasew);
    return sieqwe;
  } // 1othertitle


  var sdfgrt = showSelStly({
    name: "otherTitles",
    titlevar: "Other Titles",
    inputType: "select",
    messvar: "otherTitles"
  }); // 1emoji

  var dsqwe =
  /*#__PURE__*/
  //
  React.createElement(HiEmojiHappy, null);
  var dfkree = (_dfkree = {
    iconvar: dsqwe,
    noTitle: true,
    name: "emoji"
  }, _defineProperty(_dfkree, "iconvar", "💕"), _defineProperty(_dfkree, "titlevar", "Mood"), _defineProperty(_dfkree, "inputFunction", EmojBaso), _dfkree); // 1test
  var sliasod = {
    name: "testSelect",
    // iconvar: "TEST",
    titlevar: "TESTSELECT",
    inputFunction: BearSelect // inputObjectFunction: KnwBs,

  };

  function oksaw() {
    var apew = /*#__PURE__*/React.createElement(React.Fragment, null, "Topics");
    return apew;
  } // 1topics


  var topicos = {
    name: "topic",
    iconvar: "🏷️",
    titlevar: oksaw(),
    inputFunction: KnwBs // inputObjectFunction: KnwBs,

  };

  function htr() {
    var sdeqwe = //
    // BearIconText("📚", "Playlist"),
    "Playlist";
    var oeiw = {
      obj: sdeqwe //  ...linkPlayTt,

    };
    return /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      spanTrue: true
    }, oeiw));
  }

  var sdifr = //
  htr(); // "Playlists";
  // 1playlist

  var dsifwqeq = {
    //
    // style: {
    //   marginTop: "100px",
    // },
    name: "playlist",
    // iconvar: "📚",
    titlevar: sdifr,
    // addFunc: () => addNew(1),
    sameLine: "",
    // inputObj: PlayaFinso,
    // inputFunction: osadease,
    inputFunction: PlayaFinso
  };

  function SpekaFind(asdfewr) {

    var ijasew = _objectSpread2(_objectSpread2({}, asijew), asdfewr);

    logs$1.logga("___  altModel KNOWLEDGE ___", ijasew);
    return SearchPeople(ijasew);
  } // 1speaker 1people


  var sprkOR = {
    //
    name: "speakers",
    // iconvar:
    iconvar: "🧑‍🤝‍🧑",
    required: true,
    titlevar: "Speakers",
    inputFunction: SpekaFind
  }; // 1notes

  var obkfpr = {
    //
    name: "notes",
    iconvar: "✍️",
    rows: 4,
    inputType: "textarea",
    titlevar: "Note"
  }; // 1dict FORM

  var asdlwe = {
    // name: {
    //   // noTitle: true,
    //   titlevar: "✍️ Name",
    //   obj: NameBaseo(),
    // },
    privacy: preovioBase,
    notes: obkfpr,
    emoji: dfkree,
    topic: topicos,
    testSelect: sliasod,
    playlist: dsifwqeq,
    speaker: sprkOR,
    //
    //
    slack: sldsfe,
    teams: mcsfosa,
    notion: cxvmfg
  };

  var socioL = [//
  // "slack",
  "notion" // "teams",
  ]; // 1list

  var ksdwe = [//
  "name", "emoji", // "privacy",
  // "notes",
  // "playlist",
  // "speaker",
  "topic"].concat(socioL);
  var saokdawe = listvar ? listvar : ksdwe;
  var txtNameoTru = {
    rows: 1,
    inputType: "textarea"
  }; // 1name FORM

  var ijawewaw = _objectSpread2({
    //
    required: true,
    mustHave: true,
    name: "name"
  }, txtNameoTru);

  var descrios = {
    titlevar: "Description",
    inputType: "textarea",
    name: "description"
  };

  function retBtween(obios) {
    var okasde = _objectSpread2({}, flexStyle());

    var jsada = {
      style: {
        fontSize: "34px",
        padding: "0 30px"
      }
    };
    var bodfge = /*#__PURE__*/React.createElement("div", okasde, BearIcon("quoteLeft", jsada), obios, BearIcon("quoteRight", jsada));
    return bodfge;
  }

  var dfigjew = //
  // BearIcon("quote");
  "💬"; // 1quote

  var jsaew = {
    iconvar: dfigjew,
    titlevar: "Quote",
    rows: 1,
    inputType: "textarea",
    name: "quote",
    inputObjectFunction: retBtween
  };

  var sdfokd = _objectSpread2(_objectSpread2({
    name: ijawewaw,
    description: descrios,
    otherTitles: sdfgrt,
    quote: jsaew
  }, asdlwe), dictvar);

  var asidesd = {
    style: {
      textAlign: "center",
      margin: "10px 0"
    }
  };

  var ldsfiejr = _objectSpread2({
    listvar: saokdawe,
    dictvar: sdfokd,
    // noButton: true,
    inputConfig: asidesd,
    // sameLine: true,
    buttonText: "Save"
  }, args);

  return ldsfiejr;
}

function BearTitle(_ref) {
  var subtitleConfig = _ref.subtitleConfig,
      titlevar = _ref.titlevar,
      belowObj = _ref.belowObj,
      _ref$sizevar = _ref.sizevar,
      sizevar = _ref$sizevar === void 0 ? "34px" : _ref$sizevar,
      subtitlevar = _ref.subtitlevar,
      args = _objectWithoutProperties(_ref, ["subtitleConfig", "titlevar", "belowObj", "sizevar", "subtitlevar"]);

  var aijsdwe = //
  // gens.butClass;
  "bold";
  var asyhdwe = {
    fontSize: sizevar // padding: "0 2% 20px",

  }; //

  var titleConfig = _objectSpread2({
    style: asyhdwe,
    className: aijsdwe,
    obj: titlevar
  }, args);

  var sijwesae = _objectSpread2({
    style: {
      fontSize: "28px"
    },
    obj: subtitlevar
  }, subtitleConfig); // BediaTextDiv


  var oksd = args && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, titleConfig), /*#__PURE__*/React.createElement(BearDiv$1, sijwesae), belowObj);
  var iasjwe = {
    obj: oksd,
    style: {
      width: "100%"
    }
  };
  return /*#__PURE__*/React.createElement(BearDiv$1, iasjwe);
}

function LoginModal(_ref) {
  var topObj = _ref.topObj;
      _ref.okdsew;
      var loginFunc = _ref.loginFunc,
      logoConfig = _ref.logoConfig,
      args = _objectWithoutProperties(_ref, ["topObj", "okdsew", "loginFunc", "logoConfig"]);

  // 1context
  var signupConfig = {}; //   const { signupConfig } = useContext(AuthContext);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      deetComplete = _useState2[0];
      _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1];

  function Altios() {
    var aiewse = //
    ""; // <AlterUser {...gwefsw} />

    return aiewse;
  }

  function Bsaeo() {
    //
    //
    var odkfewr = {
      style: {
        fontSize: "18px"
      }
    };
    var oksew = {
      inputConfig: odkfewr // buttonSize: "15px",

    }; // const okasdew = {
    // }

    function asdokew(type) {
      //
      logs$1.logga("___ LoginMod CONNECT ___", type);
      userConnect(type, loginFunc);
    } // function sdfer


    var oake = _objectSpread2(_objectSpread2({
      formConfig: oksew,
      socialSubmit: asdokew,
      socialList: ["google"]
    }, odkfewr), signupConfig);

    var ikwae =
    /*#__PURE__*/
    //
    // "";
    React.createElement(SignBase, oake);
    return ikwae;
  }

  function SignitDone() {
    //
    var oytuyt = _objectSpread2({
      //
      style: {
        fontSize: "1.2em"
      },
      imagesize: 80
    }, logoConfig); //     const cvbmo = {
    // textAlign:
    //     }


    var okdsew = topObj ? topObj : //
    // "";
    BearTitle(oytuyt);
    var dvmdft = {
      obj: okdsew,
      style: {
        paddingBottom: "10px",
        fontSize: "1.25em",
        textAlign: "center"
      }
    };
    var dafokewr = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BearDiv$1, dvmdft), /*#__PURE__*/React.createElement(Bsaeo, null));
    return dafokewr;
  }

  var sdokew = //
  deetComplete ? /*#__PURE__*/React.createElement(Altios, null) : /*#__PURE__*/React.createElement(SignitDone, null);
  var okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, sdokew);
  var oksae = {
    // fontSize: "10px",
    textAlign: "center"
  };
  args = _objectSpread2(_objectSpread2({
    obj: okfdsd,
    style: oksae
  }, signupConfig), args);
  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

function AlterUserCheck(_ref) {
  var loginConfig = _ref.loginConfig,
      noLogin = _ref.noLogin,
      userObj = _ref.userObj,
      loadUser = _ref.loadUser,
      obj = _ref.obj,
      args = _objectWithoutProperties(_ref, ["loginConfig", "noLogin", "userObj", "loadUser", "obj"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  function UserJoin() {
    var idsawe = _objectSpread2(_objectSpread2({}, loginConfig), {}, {
      style: _objectSpread2({
        fontSize: "1.2em"
      }, loginConfig === null || loginConfig === void 0 ? void 0 : loginConfig.style)
    });

    var noaieq = //
    // "sadfower";
    LoginModal(idsawe);
    return noaieq;
  }

  var okfdsd = loadUser ? "LOADING" : userObj ? obj : !noLogin && /*#__PURE__*/React.createElement(UserJoin, null);
  args = _objectSpread2({
    obj: okfdsd
  }, args);
  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

function changePage(path, localas) {
  window.scrollTo(0, 0); // const location = {
  //   pathname: "/" + path,
  //   state: localas,
  // };
  // history.push(location);
}

function mapSelectEnd(odsfe, asdfer) {
  var sdore = asdfer && _defineProperty({}, odsfe, mapValue(asdfer));
  return sdore;
}
function mapValue(arrBig) {
  return arrBig && arrBig.map(function (asdae) {
    return asdae.value;
  });
} // 1map

function AlterModel(_ref) {
  var typevar = _ref.typevar;
      _ref.formObj;
      var noSave = _ref.noSave;
      _ref.aboveLoad;
      var topObj = _ref.topObj;
      _ref.fontSize;
      _ref.titleConfig;
      var loadConfig = _ref.loadConfig,
      loadTrue = _ref.loadTrue,
      userObj = _ref.userObj,
      onSubmit = _ref.onSubmit,
      submitLink = _ref.submitLink;
      _ref.noJump;
      _ref.noOtherList;
      var formConfig = _ref.formConfig;
      _ref.noExtraModels;
      var args = _objectWithoutProperties(_ref, ["typevar", "formObj", "noSave", "aboveLoad", "topObj", "fontSize", "titleConfig", "loadConfig", "loadTrue", "userObj", "onSubmit", "submitLink", "noJump", "noOtherList", "formConfig", "noExtraModels"]);

  // 1context
  //   const { SaveUser, currentUser } = useContext(AuthContext);
  // function subios()
  // 1const
  // 1load
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      loadSave = _useState2[0],
      setloadSave = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      emoStto = _useState4[0],
      setemoStto = _useState4[1];


  var jasmoji = {
    onClick: setemoStto,
    chosenItem: emoStto
  };

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2);
      _useState6[0];
      _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      playCreate = _useState8[0],
      setplayCreate = _useState8[1];

  var oksae = _objectSpread2(_objectSpread2({}, formConfig), {}, {
    userObj: userObj,
    emojiConfig: jasmoji,
    modelCreateFunc: setplayCreate
  }, args);

  var sdoew = _objectSpread2({}, AlterModelConst(oksae)); // 1history


  var history = useHistory();

  function logsaid(aodkwe, asdjew) {
    logs$1.logga(typevar + "___ AltModel__" + aodkwe, asdjew);
  }

  function subAfter(asdjew) {
    // if (!noJump) {
    //   changePage();
    // }
    logsaid("subAfter", asdjew);

    if (onSubmit) {
      onSubmit(asdjew);
    }

    logsaid("submtLink__", submitLink);

    if (submitLink) {
      history.push(submitLink);
    } else {
      changePage();

      if (setLoadSave) {
        setloadSave(false); // clearSettos();
      }
    }
  } // 1function

  function secSub(ijdsfe) {
    logs$1.logga("___ AlrModel fitsUBMIT bbbb___", ijdsfe);

    if (noSave) {
      subAfter(ijdsfe);
    } else {
      setloadSave(true);
      SaveUser$1(typevar, userObj, ijdsfe, subAfter);
    }
  }

  function firstsUBMIT(_ref2) {
    var playlist = _ref2.playlist,
        topic = _ref2.topic,
        otherTitles = _ref2.otherTitles,
        asewe = _objectWithoutProperties(_ref2, ["playlist", "topic", "otherTitles"]);

    //
    var oksaew = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asewe), mapSelectEnd("topic", topic)), mapSelectEnd("playlist", playlist)), mapSelectEnd("otherTitles", otherTitles)), {}, {
      emoji: emoStto
    });

    logs$1.logga("___ AltModel SUBMIT ___", oksaew);
    secSub(oksaew);
  } // 1submit

  var asdowe = //
  // fdogkdf;
  firstsUBMIT;

  var lisComplo = _objectSpread2(_objectSpread2({}, sdoew), {}, {
    onSubmit: asdowe // ...ifders,

  });

  function ShwChabe() {
    //
    var ijsdwe = _objectSpread2({}, loadConfig);

    return /*#__PURE__*/React.createElement(LoadMain, ijsdwe);
  } // 1console


  logs$1.logga("___AlterModel lComplo ___", {
    userObj: userObj,
    lisComplo: lisComplo
  }); // 1form

  var asdokwe = /*#__PURE__*/React.createElement(BearForm, lisComplo);
  var mskesdf = /*#__PURE__*/React.createElement(React.Fragment, null, topObj, asdokwe);

  _objectSpread2(_objectSpread2({}, oksae), {}, {
    obj: mskesdf,
    slideNumber: playCreate
  }); // mskesdf = AlterSide(asesae);


  var okasde = //
  loadSave || loadTrue;
  var iewqas = //
  okasde ? /*#__PURE__*/React.createElement(ShwChabe, null) : mskesdf;
  var sdgfre3 =
  /*#__PURE__*/
  //
  // asdokwe;
  React.createElement(AlterUserCheck, _extends({}, oksae, {
    obj: iewqas
  }));
  return sdgfre3;
}

function MediaTypeChoose(_ref) {
  var mediaType = _ref.mediaType,
      chooseFunc = _ref.chooseFunc,
      mediaObj = _ref.mediaObj;
      _ref.obj;
      var args = _objectWithoutProperties(_ref, ["mediaType", "chooseFunc", "mediaObj", "obj"]);

  // 1context
  //   const { formData, mediaType, setmediaType } = useContext(MainContext);
  //   const { aaa } = useContext(AuthContext);
  // 1const
  // function ListDrop(){
  //     const saokwe =
  // }
  function ItemOver() {
    var sdfwe = [//
    "video", "audio", "book"];
    var mediaList = moveItemFront(sdfwe, mediaType);
    var saeasew = {
      book: {
        iconvar: "📖",
        textvar: "Reading"
      },
      video: {
        iconvar: "🎥",
        textvar: "Watching"
      },
      audio: {
        iconvar: "🎤",
        textvar: "Listening"
      }
    };
    var okaew = saeasew[mediaType];

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        dropdownOpen = _useState2[0],
        setDropdownOpen = _useState2[1];

    var toggle = function toggle() {
      return setDropdownOpen(function (prevState) {
        return !prevState;
      });
    };

    var sdfjkre = {
      isOpen: dropdownOpen,
      toggle: toggle
    };
    var ioaew = {
      style: {
        borderRadius: "70%"
      }
    };

    function rendo(_ref2) {
      var itemType = _ref2.itemType,
          iconvar = _ref2.iconvar,
          textvar = _ref2.textvar;
      var difjsr = /*#__PURE__*/React.createElement(React.Fragment, null, iconvar, " ", textvar);

      function setios() {
        // setmediaType(itemType)
        chooseFunc(itemType);
      }

      var isdese = {
        obj: difjsr,
        onClick: setios
      };
      var sdfere = /*#__PURE__*/React.createElement(BearDiv$1, isdese);
      return /*#__PURE__*/React.createElement(DropdownItem, null, sdfere);
    }

    var okadsew = {
      listvar: mediaList,
      dictvar: saeasew,
      renderItem: rendo
    }; // const dkfjf = "aokdsa";

    var dkfjf = /*#__PURE__*/React.createElement(BearList$1, okadsew); // const dkfjf = mediaList.map((asoew) => rendo(saeasew[asoew]));

    var okasdew = /*#__PURE__*/React.createElement(Dropdown, sdfjkre, /*#__PURE__*/React.createElement(DropdownToggle, ioaew, okaew.iconvar), /*#__PURE__*/React.createElement(DropdownMenu, null, dkfjf));
    return okasdew;
  }

  function Linkio() {
    var oewqw = //
    // "";
    BearIconText("link", mediaObj === null || mediaObj === void 0 ? void 0 : mediaObj.name); // formData?.title;

    var oksadw = {
      obj: oewqw,
      fontSize: "16px",
      className: "wrapTrue",
      linkvar: mediaObj.webLink,
      linkConfig: {
        noBlack: true
      },
      style: {
        textOverflow: "ellipsis",
        fontWeight: "bold"
      }
    };
    var oaswe =
    /*#__PURE__*/
    //
    // <ModelObject
    React.createElement(BearDiv$1, oksadw);
    return oaswe;
  }

  /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItemOver, null), /*#__PURE__*/React.createElement(Linkio, null));
  var xcijgdt = [
  /*#__PURE__*/
  //
  React.createElement(ItemOver, null), /*#__PURE__*/React.createElement(Linkio, null)];

  var nbaseao = _objectSpread2({
    listvar: xcijgdt,
    padvar: "30px"
  }, args); // return "sdew";
  // return <BearFloat {...reuthw} />;
  // return <BearFloat {...reuthw} />;


  return /*#__PURE__*/React.createElement(FlexMain, nbaseao);
}

function TimeButtons(_ref) {
  var changePlayerTime = _ref.changePlayerTime,
      getCurrentTime = _ref.getCurrentTime;
      _ref.showTime;
      var bothFunc = _ref.bothFunc,
      startTime = _ref.startTime;
      _ref.titleConfig;
      var endTime = _ref.endTime,
      startFunc = _ref.startFunc,
      endFunc = _ref.endFunc,
      buttonConfig = _ref.buttonConfig,
      args = _objectWithoutProperties(_ref, ["changePlayerTime", "getCurrentTime", "showTime", "bothFunc", "startTime", "titleConfig", "endTime", "startFunc", "endFunc", "buttonConfig"]);

  // 1MainContext
  //   const { changePlayerTime, getCurrentTime } = useContext(PlayContext);
  //   const { aaa } = useContext(MainContext);
  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      recordTime = _useState4[0],
      setrecordTime = _useState4[1]; // 1duration


  var ksdew = getDuration(startTime, endTime);
  var decDone = timeDecim$1(ksdew);

  var trackTrue = //
  recordTime; // trackStart
  // startTime && !endTime;
  // trackStart && !endTime

  function getTimeo(aspecto, timeo) {
    var timeea = timeo ? timeo : getCurrentTime(); //
    //

    var safdew = "";

    switch (aspecto) {
      case "start":
        safdew = true;

        if (startFunc) {
          startFunc(timeea);
        }

        break;

      case "end":
        safdew = false;

        if (endFunc) {
          endFunc(timeea);
        }

        break;
    }

    if (bothFunc) {
      bothFunc(timeea);
    }

    setrecordTime(safdew);
    var dsdfwer = {
      TIME: timeea,
      TYPE: aspecto,
      RECORD: safdew //   duraion: duraion,

    };
    logs$1.logga("___ dsdfwer ___", dsdfwer);
  }

  function getto(typoe) {
    var kswwe = {
      start: {
        typevar: "Start",
        background: "darkblue",
        bediaTrue: true,
        butName: "buttonStart"
      },
      end: {
        typevar: "End",
        background: "darkred",
        butName: "buttonEnd"
      }
    };
    var currFind = kswwe[typoe];
    var skdds = //
    BearIconText("time", currFind["typevar"]);

    var topelCo = _objectSpread2({
      typeText: skdds,
      onClick: function onClick() {
        return getTimeo(typoe);
      }
    }, currFind);

    return topelCo;
  }

  function PlayDurro() {
    var asidew = endTime ? decDone : "0:00";
    var duriso = {
      obj: asidew,
      style: {
        marginLeft: "5px",
        fontSize: "1.1em"
      }
    };
    var duritObj = /*#__PURE__*/React.createElement(BearDiv$1, _extends({
      spanTrue: true
    }, duriso));
    var trackTimemess = //
    "Tracking..."; // "Setting"

    var asidjew = BearIconText("play", duritObj);
    var disoes = //
    // true
    !endTime;
    var askdwse = {
      disableTrue: disoes,
      // chakTrue: true,
      // style: { padding: "40px 0" },
      obj: trackTrue ? trackTimemess : asidjew,
      // bediaTrue: true,
      background: "darkgreen",
      butName: "playeButton",
      onClick: function onClick() {
        return changePlayerTime(startTime);
      }
    };
    return askdwse;
  }
  var cvbkf = //
  recordTime ? "end" : "start";
  var ijasd = {
    track: getto(cvbkf),
    // duration: duraoe,
    play: PlayDurro()
  };

  function Asijwe(_ref2) {
    var typeText = _ref2.typeText;
        _ref2.attr;
        var asdw = _objectWithoutProperties(_ref2, ["typeText", "attr"]);

    logs$1.logga("___ asdw ___", asdw);
    var sadebd = {
      height: "60px",
      minWidth: "130px",
      padding: "10px",
      margin: "0 20px",
      fontSize: "25px"
    };

    var sdifje = typeText;

    var okasedwe = _objectSpread2(_objectSpread2({
      // genConfig: kdsdqwe,
      obj: sdifje,
      centerTrue: "y"
    }, asdw), {}, {
      style: sadebd
    }, buttonConfig);

    logs$1.logga("___ okasedwe ___", okasedwe); // attr = "endTime";

    var ksaesdwe = //
    // "asokdewq";
    BearButton$1(okasedwe);
    return ksaesdwe;
  }

  var ijdsf = {
    textAlign: "center" // padding: "0 10%",
    // margin: "30px",

  };

  var jasde = _objectSpread2({
    listvar: ["track", "play"],
    dictvar: ijasd,
    renderItem: Asijwe,
    genConfig: {
      style: ijdsf
    }
  }, args); //   1console
  logs$1.logga("timButton aaa LIST---", jasde); //   logs.logga("___ TimButton BBB ___", sgkjerw);

  var ewrqasa =
  /*#__PURE__*/
  //
  // "";
  React.createElement(BearList$1, _extends({
    horizTrue: true
  }, jasde)); // <ImageTextDiv horizTrue {...jasde} />
  // <BearFloat {...asdnow8q} />
  // const ossdf = {
  //   leftobj: TItDurro(kxmcvd),
  //   centerobj: ewrqasa,
  // };

  var iksaew = //
  ewrqasa; // BearFloat(ossdf);
  // ewrqasa;
  // <Flex>
  //   {TItDurro(kxmcvd)}
  //   {ewrqasa}
  // </Flex>

  return iksaew;
}

function MediaTypeTime(_ref) {
  var mediaType = _ref.mediaType,
      chooseConfig = _ref.chooseConfig,
      noTiming = _ref.noTiming,
      timeConfig = _ref.timeConfig,
      args = _objectWithoutProperties(_ref, ["mediaType", "chooseConfig", "noTiming", "timeConfig"]);

  var basos = _objectSpread2({
    //
    mediaType: mediaType
  }, args); //
  // 1TimeButtons


  function ButtoTop() {
    var okrte = {
      //
      style: {
        fontSize: "40px",
        width: "400px"
      }
    };

    var dfkgret = _objectSpread2(_objectSpread2({}, basos), {}, {
      itemConfig: okrte
    }, timeConfig);

    logs$1.logga("___ TieButtons ___", dfkgret);
    var ijsadwqe = /*#__PURE__*/React.createElement(TimeButtons, dfkgret);
    var hutry = {
      obj: ijsadwqe
    };
    return /*#__PURE__*/React.createElement(BearDiv$1, hutry);
  }

  function ChooseIo() {
    //
    var cvbokf = _objectSpread2(_objectSpread2(_objectSpread2({}, basos), chooseConfig), {}, {
      style: {
        marginBottom: "20px"
      }
    });

    var fdjeaw = /*#__PURE__*/React.createElement(MediaTypeChoose, cvbokf);
    return fdjeaw;
  }

  var ijaase = //
  // "";
  ChooseIo(); //   1timing

  var timeNotTrue = //
  // "";
  // true;
  mediaTypeTrue(mediaType) && !noTiming;
  var sfdgre = timeNotTrue && ButtoTop();
  var asidwe = /*#__PURE__*/React.createElement(React.Fragment, null, ijaase, sfdgre);
  var fsdfs = {
    obj: asidwe,
    style: {
      marginBottom: "20px"
    } // ...args,

  };
  return /*#__PURE__*/React.createElement(BearDiv$1, fsdfs);
}

function AlterHighlight(_ref) {
  var overObj = _ref.overObj,
      onSubmit = _ref.onSubmit;
      _ref.seriesObj;
      var addPlaylist = _ref.addPlaylist;
      _ref.saveToMedia;
      _ref.newUser;
      var timeConfig = _ref.timeConfig,
      args = _objectWithoutProperties(_ref, ["overObj", "onSubmit", "seriesObj", "addPlaylist", "saveToMedia", "newUser", "timeConfig"]);

  // 1const
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      trueInd = _useState2[0];
      _useState2[1]; // const {data, isLoading, error} = useQuery(addHighlights())


  var mediaObj = overObj.media;
  overObj === null || overObj === void 0 ? void 0 : overObj.startTime;
  overObj === null || overObj === void 0 ? void 0 : overObj.endTime;
  var dfoke = //
  ""; // vbnd;
  // vbnd ? vbnd : 0;

  var _useState3 = useState(dfoke),
      _useState4 = _slicedToArray(_useState3, 2),
      staro = _useState4[0],
      setstaro = _useState4[1];

  var okfgrer = //
  ""; // noEnd ? "" : asidjw ? asidjw : staro + 30;

  var _useState5 = useState(okfgrer),
      _useState6 = _slicedToArray(_useState5, 2),
      endklp = _useState6[0],
      setendklp = _useState6[1]; // 1type


  var typeia = //
  // "video";
  mediaObj.mediaType;

  var _useState7 = useState(typeia),
      _useState8 = _slicedToArray(_useState7, 2),
      mediaVary = _useState8[0],
      setmediaVary = _useState8[1];

  useHistory();

  var newHgho = _objectSpread2(_objectSpread2({}, overObj), {}, {
    startTime: staro,
    endTime: endklp
  });

  var linkGo = //
  mediaObj && "/m/".concat(mediaObj.slugURL, "/highlights"); // linkGo =
  // 1submit 1save

  function Vcbod0e(dsofkwr) {
    //
    logs$1.logga("___ AlteHighlights submit FINAL ___", dsofkwr);
    var asidjwe = {
      dsofkwr: dsofkwr,
      linkGo: linkGo
    };
    logs$1.logga("___ asidjwe ___", asidjwe); // if (saveToMedia) {
    //   joinwithmedia(dsofkwr);
    // }

    if (onSubmit) {
      onSubmit(dsofkwr);
    }

    setendklp();
    setstaro();
  } // 1baseargs


  var baseArgs = {
    mediaType: mediaVary,
    overObj: newHgho,
    mediaObj: mediaObj
  }; // // 1console

  logs$1.logga("___ newgho ___", newHgho);
  logs$1.logga("___ FORM BASE ITEMS ___", newHgho);
  mediaObj && joinString( //
  [mediaObj.name //
  // "(" + ijsewe + ")",
  ], " ");

  var _useState9 = useState("y"),
      _useState10 = _slicedToArray(_useState9, 2);
      _useState10[0];
      _useState10[1];

  function sdhfe() {
    var okfr = staro ? staro : getCurrentTime();
    var okdsew = {
      startTime: okfr
    };
    return okdsew;
  } // 1submit


  function idjew(values) {
    var ijew = _objectSpread2(_objectSpread2({}, values), newHgho);

    logs$1.logga("___ Alterhighligt SUBMIT FIRST ___", ijew);
    Vcbod0e(ijew);
  }
  var ovkb0e = {
    style: {
      marginBottom: "20px"
    } // noTitle: true,

  };

  function ChooseIo() {
    //
    function sfde(fdkgwer) {
      logs$1.logga("___ altHighlight StartFunc ___", fdkgwer);
      setstaro(fdkgwer);
      setendklp();
    }

    var oaksde = _objectSpread2({
      startFunc: sfde,
      endFunc: setendklp,
      startTime: staro,
      endTime: endklp
    }, timeConfig);

    var ywers = {
      chooseFunc: setmediaVary
    };

    var cvbokf = _objectSpread2(_objectSpread2({
      chooseConfig: ywers,
      timeConfig: oaksde
    }, baseArgs), args);

    logs$1.logga("___ altHigh MediaTyTime ___", cvbokf);
    var fdjeaw = //
    // "";
    MediaTypeTime(cvbokf);
    return fdjeaw;
  }

  var ijaase = /*#__PURE__*/React.createElement(ChooseIo, null);
  var asidwe = /*#__PURE__*/React.createElement(React.Fragment, null, ijaase); // 1list

  var baseList = [//
  "name", "emoji", "quote", "speaker"];
  var afterList = [//
  "playlist", "topic", "testSelect", "notion"];
  var okdss = addPlaylist ? ["emoji", // "name",
  "topic"] : [].concat(baseList, afterList);

  function altBase(baseOss) {
    var vcokge = _objectSpread2(_objectSpread2(_objectSpread2({
      // toplist: ndsokewr,
      // aboveLoad:
      typevar: indexHighlights,
      itemConfig: ovkb0e,
      // noSave: true,
      submitExtra: sdhfe
    }, baseOss), baseArgs), args);

    var sfisre = /*#__PURE__*/React.createElement(AlterModel, vcokge);
    return sfisre;
  } // 1form
  var listAll = {
    topObj: asidwe,
    listvar: okdss,
    formid: "highaltone",
    onSubmit: idjew
  };

  function CarosStart() {
    var niase = [// letPlaio, sfisre
    altBase(listAll) // altBase(listOne),
    // altBase(listTwo),
    ];
    var sdokfr = {
      listvar: niase,
      slideNum: trueInd
    };
    var sdfsre = /*#__PURE__*/React.createElement(BearCarousel, sdokfr);
    return sdfsre;
  }

  var okadse = //
  CarosStart(); // addPlaylist ? <CarosStart /> : sfisre;

  var fdjgirt = /*#__PURE__*/React.createElement(React.Fragment, null, okadse);
  args = _objectSpread2({
    obj: fdjgirt
  }, args);
  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

function NewHighlight(_ref) {
  _ref.highlightObj;
      var formConfig = _ref.formConfig,
      args = _objectWithoutProperties(_ref, ["highlightObj", "formConfig"]);

  // 1const
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _ref2 = //
  "",
      similarHighs = _ref2.data,
      lodOther = _ref2.isLoading; // getHighsSameMedia(highlightObj);

  var anyHighs = checkFullArray$1(similarHighs);

  function HighFetch() {
    var asdweawe = /*#__PURE__*/React.createElement(React.Fragment, null);
    return asdweawe;
  }

  function PostBott() {
    var kadwe = {
      obj: anyHighs ? /*#__PURE__*/React.createElement(HighFetch, null) : "",
      style: {
        marginTop: "50px"
      }
    };
    var ikawes = /*#__PURE__*/React.createElement(BearDiv$1, kadwe);
    return ikawes;
  }

  function JoinComment() {
    var ikad = {
      obj: "Preview",
      bediaTrue: true
    };
    var sdkfre = {
      style: {
        height: "100%"
      } // className: "shadowHover",

    };
    var vbdf = {
      listvar: [ikad],
      horizTrue: true,
      itemConfig: sdkfre,
      typeList: "button"
    }; // const

    /*#__PURE__*/React.createElement(BearList, vbdf);
    var sfdgret = /*#__PURE__*/React.createElement(React.Fragment, null, "Join Bedia to start making notes.");
    var vffdg = {
      obj: sfdgret,
      style: {
        paddingBottom: "20px"
      }
    };
    var lkdsq = /*#__PURE__*/React.createElement(BearDiv$1, vffdg);
    return lkdsq;
  }

  function MainForm() {
    var loksdass = {
      loginConfig: {
        topObj: /*#__PURE__*/React.createElement(JoinComment, null),
        style: {
          padding: "0 10%"
        },
        logoConfig: {
          imagesize: 40
        }
      }
    };

    var koase = _objectSpread2(_objectSpread2({}, loksdass), formConfig);

    var vbuhd = //
    // "sawqe";
    AlterHighlight(koase);
    return vbuhd;
  }

  var awewadw = //
  !lodOther && /*#__PURE__*/React.createElement(PostBott, null);
  var okfdsd = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MainForm, null), awewadw);
  args = _objectSpread2({
    obj: okfdsd
  }, args); //

  return /*#__PURE__*/React.createElement(BearDiv$1, args);
}

export { AlterHighlight, AlterModel, BearButton$1 as BearButton, BearCarousel, BearDiv$1 as BearDiv, BearDuration, BearEmoji, BearError, BearFloat, BearForm, BearIcon, BearIconText, BearList$1 as BearList, BearSelect, BearTextMedia, CopyMain, Exmapl, FlexMain, ImageAlign, ImageGroup, InputForm, InputMain, ListFlex, ListReturn, LoadMain, MediaTypeChoose, NewHighlight, PagePad, QueryMain, SignBase, SliderMain, TimeButtons, dataFunc, fetchParams, fireDocs, getDocData, linkBase, logFuncs as logs, queryData };
//# sourceMappingURL=index.esm.js.map
