'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('bootstrap/dist/css/bootstrap.css');
var React = require('react');
var lodash = require('lodash');
var reactstrap = require('reactstrap');
var Select = require('react-select');
var CreatableSelect$1 = require('react-select/creatable');
var AsyncCreatableSelect = require('react-select/async-creatable');
var yup = require('yup');
var reactHookForm = require('react-hook-form');
var TextareaAutosize = require('react-textarea-autosize');
var md = require('react-icons/md');
var ti = require('react-icons/ti');
var bi = require('react-icons/bi');
var si = require('react-icons/si');
var ai = require('react-icons/ai');
var fi = require('react-icons/fi');
var ri = require('react-icons/ri');
var fa = require('react-icons/fa');
var moment = require('moment');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var CreatableSelect__default = /*#__PURE__*/_interopDefaultLegacy(CreatableSelect$1);
var AsyncCreatableSelect__default = /*#__PURE__*/_interopDefaultLegacy(AsyncCreatableSelect);
var yup__namespace = /*#__PURE__*/_interopNamespace(yup);
var TextareaAutosize__default = /*#__PURE__*/_interopDefaultLegacy(TextareaAutosize);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
    return outBlank ? /*#__PURE__*/React__default['default'].createElement("a", aisdwq, textvar) :
    /*#__PURE__*/
    // <gens.StyledLink {...aisdwq}>{textPush}</gens.StyledLink>
    React__default['default'].createElement("a", aisdwq, textvar) //   <Link {...aisdwq}>{textPush}</Link>
    ;
  }

  return noLink ? textvar : /*#__PURE__*/React__default['default'].createElement(Rlasdow, null);
}

function BearDiv(_ref) {
  var obj = _ref.obj,
      flexTrue = _ref.flexTrue,
      vertAlign = _ref.vertAlign,
      typeDiv = _ref.typeDiv,
      fontSize = _ref.fontSize,
      linkvar = _ref.linkvar,
      linkConfig = _ref.linkConfig,
      style = _ref.style,
      args = _objectWithoutProperties(_ref, ["obj", "flexTrue", "vertAlign", "typeDiv", "fontSize", "linkvar", "linkConfig", "style"]);

  //
  //
  var osdakew = flexTrue && {
    display: "flex"
  };
  var zxcsd = vertAlign && {
    alignItems: "center",
    justifyContent: "center"
  };
  var oksdae = fontSize && {
    fontSize: fontSize
  };

  var gibjr = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, oksdae), osdakew), zxcsd), style);

  var oksde = _objectSpread2({
    style: gibjr
  }, args);

  var endo = "";

  switch (typeDiv) {
    case "span":
      endo = /*#__PURE__*/React__default['default'].createElement("span", oksde, obj);
      break;

    default:
      endo = /*#__PURE__*/React__default['default'].createElement("div", oksde, obj);
  } // 1link


  var okdas = _objectSpread2({
    toVar: linkvar,
    textvar: endo
  }, linkConfig);

  var linkTrue = linkvar;
  var xczaeewqa = //
  //
  linkTrue ? /*#__PURE__*/React__default['default'].createElement(BearLink, okdas) : endo;
  return xczaeewqa;
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

var alignItemsFlex = //
// ""
// "flex-start";
// "space-between";
"center"; // "stretch";

var justifyContentFlex = //
// "";
"flex-start"; // "space-between";
// "center";
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

  // 1MainContext
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
  var lefto = sasease && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", jndf, leftobj));
  var centio = /*#__PURE__*/React__default['default'].createElement("div", centerConfig, centerobj);
  var ijsad = {
    style: alignTrue && {
      textAlign: "right"
    }
  };
  var rightos = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", ijsad, rightobj));
  var ksaewe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, lefto, centio, rightos);
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

      endValue = /*#__PURE__*/React__default['default'].createElement(BearDiv, oesfdrtw);
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


  return /*#__PURE__*/React__default['default'].createElement(BearDiv, args);
}

function BearButton(_ref) {
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
  var aisjqw = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, qy7eww); // qy7eww ? qy7eww : <ImageTextDiv {...asduhqwe} />;
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

  var sfdsgwe = groupConfig ? /*#__PURE__*/React__default['default'].createElement(GroupBase, groupConfig) : /*#__PURE__*/React__default['default'].createElement("button", sfasdokwe, aisjqw);
  var asdijew = //
  // "";
  linkvar || divConfig;

  var jawewe = _objectSpread2({
    obj: sfdsgwe,
    linkvar: linkvar
  }, divConfig);
  var asdgvwe = asdijew ? /*#__PURE__*/React__default['default'].createElement(BearDiv, jawewe) : sfdsgwe;
  var pdska = downloadLink ? /*#__PURE__*/React__default['default'].createElement("a", {
    href: downloadLink,
    download: true
  }, asdgvwe) : asdgvwe; // const isjdfe =

  var dweasdd = _objectSpread2({
    obj: pdska
  }, genConfig); // logtrue = true;

  var asdhwqe = /*#__PURE__*/React__default['default'].createElement(BearDiv, dweasdd);
  return asdhwqe;
}

// import * as gens from "../consts/GenStyled";
// import { SelectArray } from "../functions/GlobalFunctions";

function BearList(_ref) {
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
      var chosenItem = _ref.chosenItem,
      _ref$chosenConfig = _ref.chosenConfig,
      chosenConfig = _ref$chosenConfig === void 0 ? {} : _ref$chosenConfig;
      _ref.chooseBedia;
      var genConfig = _ref.genConfig;
      _ref.fixTitle;
      _ref.noOptionObj;
      var styleList = _ref.styleList,
      _ref$loadobj = _ref.loadobj,
      loadobj = _ref$loadobj === void 0 ? "" : _ref$loadobj,
      loadtrue = _ref.loadtrue;
      _ref.loadNumber;
      _ref.onClick;
      _ref.chooseBaseFunc;
      _ref.returnArray;
      _ref.clickSingle;
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
      listArgs = _objectWithoutProperties(_ref, ["renderItem", "obj", "typevar", "listNumber", "typeList", "removeEmpty", "removeItem", "listvar", "dictFunc", "dragTrue", "messvar", "logtrue", "noListObj", "addTrue", "addDict", "scrollTrue", "selectableTrue", "selectableConfig", "chosenItem", "chosenConfig", "chooseBedia", "genConfig", "fixTitle", "noOptionObj", "styleList", "loadobj", "loadtrue", "loadNumber", "onClick", "chooseBaseFunc", "returnArray", "clickSingle", "itemStyle", "itemConfig", "spaceBetween", "centerItem", "horizTrue", "flexTrue", "titlevar", "dictvar", "lineBetween", "collapseTrue"]);

  loggo("___ listvar BBB___", listvar); // 1list PREPARE
  // listvar = noRemove ? listvar : removeEmptyArray(listvar);

  listvar = removeItem ? lodash.remove(listvar, function (currentObject) {
    return currentObject.id != removeItem.id;
  }) : listvar;
  listvar = listNumber ? listvar.slice(0, listNumber) : listvar;
  loggo("___ listvar CCC___", listvar); // 1style

  styleList = _objectSpread2({
    overflowY: scrollTrue ? "scroll" : ""
  }, styleList);
  !lodash.isEmpty(listvar) || loadtrue;

  function EndListA(coimswe, indexSort) {
    var asdwe = itemConfig;
    var cvokbsdf = chosenItem;
    var selectTrue = coimswe == cvokbsdf; // 1chosen

    var choseAll = selectTrue && _objectSpread2({
      chosenTrue: true
    }, chosenConfig);

    var dictTrue = dictvar;
    var dgste = dictFunc ? dictFunc(coimswe) : dictvar ? dictvar[coimswe] : coimswe;
    var listarr = dictTrue ? //
    _objectSpread2(_objectSpread2({
      listName: coimswe
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
      loggo("___ CHOOSING ITEM " + theoasd + ":", olaqwefs);

      var iasda = _objectSpread2(_objectSpread2(_objectSpread2({}, asdwe[theoasd]), choseAll[theoasd]), listarr[theoasd]);

      return iasda;
    }

    var endRet = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asdwe), listarr), choseAll), {}, {
      style: mainseo
    });

    loggo("___ endRet ___", endRet);
    var findoobj = endRet.obj ? endRet.obj : renderItem;
    var asjds = {
      // selectTrue: selectTrue,
      // itemConfig: asdwe,
      findoobj: findoobj,
      listarr: listarr,
      endRet: endRet
    }; // 1console
    // messvar = "sdfwer";
    // logtrue = "oaskd";

    if (logtrue) {
      loggo(messvar + "---listMain---", asjds);
    }

    var asdpkwe = "";

    switch (typeList) {
      case "div":
        asdpkwe = /*#__PURE__*/React__default['default'].createElement(BearDiv, endRet);
        break;

      case "dict":
        asdpkwe = endRet;

      case "return":
        // asdpkwe = "dict";
        asdpkwe = /*#__PURE__*/React__default['default'].createElement(BearDiv, _extends({}, itemConfig, {
          obj: listarr
        }));
        break;

      default:
        asdpkwe = findoobj ? findoobj(endRet) : "NONE";
    }

    var isjdew = //
    dragTrue ? "<DragBase />" : asdpkwe;
    var auewasdash = loadtrue ? loadobj : selectableTrue ? "<SelectComp {...filleoo} />" : //
    isjdew; // BearDiv(filleoo)

    var ijsew = //
    // "";
    lineBetween && /*#__PURE__*/React__default['default'].createElement("hr", null); // const saewe = coimswe["titlevar"] && titleTrue;
    // const sdijfw = saewe && <Tjisae {...coimswe} />;

    var asidjwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, auewasdash, ijsew);
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
    // logs.loggo("xxx-LIST-MAIN--args", messvar, listvar, "asd90u12321");

    loggo("xxx-LIST-MAIN--args", endoa, "asd90u12321"); // gens.messCheck("sd9jqwxas", listMess, "ListMain --AAAA--", oaskdwq);

    var jisad =
    /*#__PURE__*/
    //
    React__default['default'].createElement(BearDiv, okadwe); // "okafsdf";
    // EndListA();
    // mapoBap();
    // <HorizChoiceBar {...endoa} />;

    return jisad;
  }

  function mapoBap(saokae, indexvr) {
    loggo("___ saokae ___", saokae);
    var asidjwe = saokae["mainObj"];
    var jcvbfd = asidjwe ? asidjwe : EndListA(saokae);
    return jcvbfd;
  }

  var sadfwe = //
  // "oaksdwqew";
  !listvar ? "" : horizTrue ? /*#__PURE__*/React__default['default'].createElement(HozBar, null) : listvar.map(mapoBap); // 1TITLE

  var showTit = titlevar && !collapseTrue;
  var titlo = showTit && /*#__PURE__*/React__default['default'].createElement(TitleFix, null);
  var asudwe = //
  //   fullVar ? selectableTrue ? <Seletio /> : aisjwe : noListObj;
  sadfwe;
  var saokwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, titlo, asudwe);

  var saidje = _objectSpread2({
    loadtrue: loadtrue,
    obj: saokwe
  }, genConfig); // return saokwe;


  return /*#__PURE__*/React__default['default'].createElement(BearDiv, saidje);
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
    var iasd = /*#__PURE__*/React__default['default'].createElement(reactstrap.CarouselItem, sokdaw, /*#__PURE__*/React__default['default'].createElement("br", null), sdfewr);
    return iasd;
  }

  var nisaw = //
  // listvar.map(Asdew);
  listvar.map(caroRet);
  var strapCaro = {
    activeIndex: slideNum
  };
  args = _objectSpread2(_objectSpread2({}, strapCaro), args);
  var kesae = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(reactstrap.Carousel, args, nisaw));
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
      var typevar = _ref.typevar,
      listvar = _ref.listvar,
      onlyEmoji = _ref.onlyEmoji,
      itemConfig = _ref.itemConfig,
      sdaa = _objectWithoutProperties(_ref, ["initialValue", "selectBlue", "typevar", "listvar", "onlyEmoji", "itemConfig"]);

  //
  var ijsae = //
  emojiDict;
  var kjsijsa = [//
  "funny", "happy", "interest", // "surprise",
  "sad" // "angry",
  ];
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
    React__default['default'].createElement(BearDiv, xdffsd);
    var bocd = onlyEmoji ? emoji : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, emoji);
    var qwtgsa = chosenTrue && iconFind("tick");
    var lfdijg = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, bocd, qwtgsa);
    var lsadwe = //
    lfdijg; // bocd
    // ureytue;

    var oksaew = _objectSpread2({
      obj: lsadwe
    }, sfjaw);

    var aokdwe = _objectSpread2({
      // style:
      obj: /*#__PURE__*/React__default['default'].createElement(BearDiv, oksaew),
      popConfig: {
        content: sdfiewrw
      }
    }, qweq);
    return /*#__PURE__*/React__default['default'].createElement(BearDiv, aokdwe);
  }

  function Listso(_ref3) {
    var ssdwedf = _extends({}, _ref3);

    //
    var ijdwq = {
      // style: { background: "red" },
      //   chosenItem: asdoe,
      chosenConfig: {//
        // className: "shadowBottom",
        // bediaTrue: true,
      }
    };

    function asdoke(sdfswe) {
      loggo("___ asdoke ___", sdfswe);
      var oksadw = //
      // "dsfoker";
      saokde(sdfswe);
      return oksadw;
    }

    var dsjs = _objectSpread2(_objectSpread2({
      listvar: jdfew,
      dictvar: ijsae,
      renderItem: asdoke,
      //   chooseBaseFunc: setasdoe,
      horizTrue: true,
      returnArray: true,
      itemConfig: sfjaw,
      // mainClass: "pointer",
      clickSingle: true,
      // chooseBedia: true,
      logtrue: "false"
    }, ijdwq), ssdwedf);

    loggo("___ emojListo MAIN LIST  ___", dsjs);
    return /*#__PURE__*/React__default['default'].createElement(BearList, dsjs);
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
    ""; //   <SelectMain {...ijsaew} />;

    return asiew;
  }

  var endValue = "";

  switch (typevar) {
    case "select":
      endValue = Selectos();
      break;

    case "base":
      endValue = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, mapEmojiFace(jdfew));
      break;

    default:
      endValue = /*#__PURE__*/React__default['default'].createElement(Listso, sdaa);
  }

  return endValue;
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
      _ref.limitvar;
      var name = _ref.name,
      ref = _ref.ref,
      noValueReturn = _ref.noValueReturn,
      args = _objectWithoutProperties(_ref, ["noMulti", "noMenu", "menuConfig", "typeSelect", "options", "optionConfig", "initOptions", "onChange", "createTop", "logtrue", "createFunc", "valueFunc", "fontSize", "newLineTrue", "messvar", "limitvar", "name", "ref", "noValueReturn"]);

  // 1const
  var _useState = React.useState(""),
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
  vbmofd; // limitvar ? sliceArray(vbmofd, limitvar) : vbmofd;
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

  var fdgrt = _objectSpread2(_objectSpread2(_objectSpread2({
    styles: stylBasoe,
    // FUNCTION
    onChange: dfgoe,
    onCreateOption: createFunc,
    createOptionPosition: toppoIos
  }, fullOpts), {}, {
    isValidNewOption: showTrue,
    // noOptionsMessage:
    options: dsfijaae
  }, sdfijewr), ogkfds);

  var dfijew = //
  // {};
  fdgrt; // sdfijewr;

  var endValue = "";

  switch (typeSelect) {
    case "create":
      endValue = /*#__PURE__*/React__default['default'].createElement(CreatableSelect__default['default'], dfijew);
      break;

    case "async":
      endValue = /*#__PURE__*/React__default['default'].createElement(AsyncCreatableSelect__default['default'], dfijew);
      break;

    default:
      endValue =
      /*#__PURE__*/
      //
      // <CreatableSelect {...dfijew} />
      React__default['default'].createElement(Select__default['default'], dfijew);
  }

  return endValue;
}

// import ImageBaseText from "../components/ImageBaseText";

function BearIcon(sdfoger, sdfke) {
  // 1tick
  var lasew = {
    style: _objectSpread2({
      // background: "green",
      color: "green"
    }, sdfke)
  };
  var okasdew =
  /*#__PURE__*/
  //
  // <TiTickOutline />
  React__default['default'].createElement(ai.AiOutlineCheckCircle, lasew); // 1time

  var lasdew =
  /*#__PURE__*/
  //
  React__default['default'].createElement(ri.RiTimerLine, null) // <AiOutlineClockCircle />
  ; // 1play

  var sfdgmr =
  /*#__PURE__*/
  //
  React__default['default'].createElement(fa.FaPlay, null); // 1playlist

  var asdkqe =
  /*#__PURE__*/
  //
  React__default['default'].createElement(md.MdPlaylistPlay, null); // 1share

  var sjerw =
  /*#__PURE__*/
  //
  React__default['default'].createElement(bi.BiShare, null); // 1edit

  var sdiwer =
  /*#__PURE__*/
  //
  React__default['default'].createElement(bi.BiEdit, null); // 1star

  var dfigjew =
  /*#__PURE__*/
  //
  React__default['default'].createElement(ti.TiStar, null); // 1close

  var kxmvs =
  /*#__PURE__*/
  //
  React__default['default'].createElement(ai.AiOutlineCloseCircle, null); // 1comment

  var sowaseowq =
  /*#__PURE__*/
  //
  React__default['default'].createElement(bi.BiCommentDetail, null); // 1delete

  var asdfewr =
  /*#__PURE__*/
  //
  React__default['default'].createElement(ai.AiFillDelete, null); // 1link

  var linkios =
  /*#__PURE__*/
  //
  React__default['default'].createElement(fi.FiExternalLink, null);
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
    time: lasdew,
    teams: /*#__PURE__*/React__default['default'].createElement(si.SiMicrosoftteams, null),
    slack: /*#__PURE__*/React__default['default'].createElement(si.SiSlack, null),
    notion: /*#__PURE__*/React__default['default'].createElement(si.SiNotion, null),
    close: kxmvs
  }; // return "";

  return ijsadwe[sdfoger];
}

// import { BearButton } from "./BearButton";
// import SelectMain from "./SelectMain";
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
      inputFunction = _ref.inputFunction;
      _ref.selectTrue;
      var style = _ref.style;
      _ref.onChange;
      _ref.obj;
      var ref = _ref.ref,
      required = _ref.required,
      name = _ref.name,
      fontSize = _ref.fontSize,
      sameLine = _ref.sameLine,
      newTrue = _ref.newTrue;
      _ref.initialValue;
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
      dfsgre = _objectWithoutProperties(_ref, ["textConfig", "titleConfig", "textvar", "errorobj", "noInput", "onInput", "requireClass", "noTitle", "checked", "control", "inputObj", "inputFunction", "selectTrue", "style", "onChange", "obj", "ref", "required", "name", "fontSize", "sameLine", "newTrue", "initialValue", "selectvar", "rightSubmit", "inputType", "rows", "titlevar", "placeholder", "subtitlevar", "errors", "iconvar", "checkList", "checklistTitle", "lineBelow", "addFunc", "titleWidth"]);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = React.useState(checked),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1];

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
  var sdweew = {
    name: name,
    id: name,
    ref: ref,
    innerRef: ref,
    // onBlur: chaneeo,
    className: slasso
  };

  var cntrMan = _objectSpread2({
    control: control
  }, sdweew);

  var objbase = _objectSpread2(_objectSpread2(_objectSpread2({}, dfsgre), cntrMan), {}, {
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
  //


  var ujsdqwe = ""; //

  function retFunc() {
    switch (inputType) {
      case "select":
        _objectSpread2({
          isMulti: true
        }, sdweew); // ujsdqwe = "dlpadewq";
        // ujsdqwe = <SelectMain {...fodsfew} />;


        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(reactHookForm.Controller, _extends({
          as: ujsdqwe
        }, cntrMan)); // ujsdqwe = <SelectMain {...fodsfew} />;
        // ujsdqwe = (
        //   <select {...objbase}>
        //     {selectvar.map((value) => (
        //       <option key={value} value={value}>
        //         {value}
        //       </option>
        //     ))}
        //   </select>
        // );

        break;

      case "selectable":
        //
        // autoFocus - focus the control when it mounts
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
        var dfdsawe = _objectSpread2(_objectSpread2({}, objbase), {}, {
          isClearable: true // onInputChange={this.handleInputChange}
          // options={colourOptions}

        });

        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(CreatableSelect, dfdsawe); //

        break;

      case "textarea":
        // const gfknht =  ref={(tag) => (this.textarea = tag)}
        rows = rows ? rows : 3;

        var ijsdfasd = _objectSpread2(_objectSpread2({
          rows: rows,
          minRows: rows,
          defaultValue: textvar
        }, objbase), textConfig); // const sadije = innerRef({ required: required }
        // ujsdqwe = <TextareaAutosize autoFocus />;

        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(TextareaAutosize__default['default'], ijsdfasd); // {textvar}</TextareaAutosize>;
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
        var dsf9jewr = /*#__PURE__*/React__default['default'].createElement(BearDiv, ijasdwe);
        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("input", isawe), " ", dsf9jewr);
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

        ujsdqwe = noInput ? "" : textvar ?
        /*#__PURE__*/
        //
        // <gens.StInput {...objbase}>{textvar}</gens.StInput>
        React__default['default'].createElement("textarea", ijawe, textvar) :
        /*#__PURE__*/
        // <input {...ijawe}>{textvar}</input>
        // <input {...ijawe} />
        // <textarea {...ijawe}>{textvar}</textarea>
        // <gens.StInput {...ijawe} />
        // <input {...ijawe} />
        React__default['default'].createElement("input", ijawe);
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
    ijdsew ? /*#__PURE__*/React__default['default'].createElement(BearDiv, _extends({
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
    var bnkifg = /*#__PURE__*/React__default['default'].createElement(BearDiv, _extends({
      spanTrue: true
    }, asdwe)); // TITLE MAIN

    var okasde = //
    newTrue ? /*#__PURE__*/React__default['default'].createElement(ChooseTit, null) : BearIcon(iconvar, titlevar); //         {iconvar} {titlevar}

    var ioakawe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, okasde, aokdwe, bnkifg);

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
      var dfigjrt = /*#__PURE__*/React__default['default'].createElement(BearDiv, cvobkof);
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
    var seokwer =
    /*#__PURE__*/
    //
    // <ImageTextDiv {...asdojwqs} />
    // <BediaTextDiv {...asdojwqs} />
    React__default['default'].createElement(BearDiv, asdojwqs);

    function Subtoter() {
      var ikawed = {
        fontSize: "0.8em"
      };
      var okawe = {
        obj: subtitlevar,
        style: ikawed
      };
      var uiajwe = /*#__PURE__*/React__default['default'].createElement(BearDiv, okawe);
      return uiajwe;
    }

    var ijawe = subtitlevar && /*#__PURE__*/React__default['default'].createElement(Subtoter, null);
    var sdfgret = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, seokwer, ijawe);
    var kase = {
      padding: "10px 0",
      textAlign: "left"
    };
    var isawqe = {
      obj: sdfgret,
      style: kase
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv, isawqe);
  }

  var showTit = //
  // true;
  !noTitle && titlevar;
  var oksdwqe = showTit && /*#__PURE__*/React__default['default'].createElement(TitleOBbi, null);
  var confijre = {
    size: "sm",
    type: "submit",
    obj: "YES"
  }; // ujsdqwe = <Controller as={inputFunction(objbase)} {...cntrMan} />;

  ujsdqwe = inputObj ? inputObj(objbase) : inputFunction ? inputObj(objbase) : // <Controller as={inputFunction(objbase)} {...cntrMan} />
  retFunc();
  var jaewdsr = {
    rightobj: /*#__PURE__*/React__default['default'].createElement(BearButton, confijre),
    centerobj: ujsdqwe
  }; // rightSubmit = true;

  var asdijwe = rightSubmit ?
  /*#__PURE__*/
  //
  React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearFloat, jaewdsr)) : ujsdqwe;
  var ijsa = {
    style: ashwe
  };
  var okdsae = {
    style: {
      width: "100%"
    }
  }; // lineBelow = true;

  var xvcmfde = lineBelow && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("hr", null));
  var okaweasd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, oksdwqe, /*#__PURE__*/React__default['default'].createElement("div", okdsae, asdijwe));

  function asdowe() {
    return okaweasd;
  }

  var ijdas = sameLine ? /*#__PURE__*/React__default['default'].createElement(Flex, ijsa, asdowe()) : /*#__PURE__*/React__default['default'].createElement("div", ijsa, okaweasd);
  var kaosdew = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ijdas, xvcmfde);
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
      var singleTrue = _ref.singleTrue;
      _ref.headerConfig;
      _ref.logtrue;
      var tabConfig = _ref.tabConfig,
      schemavar = _ref.schemavar,
      hookConfig = _ref.hookConfig,
      typeForm = _ref.typeForm,
      sameLine = _ref.sameLine;
      _ref.topButtonConfig;
      _ref.ImageTextList;
      var topButtonTrue = _ref.topButtonTrue,
      onSubmit = _ref.onSubmit,
      submitExtra = _ref.submitExtra,
      topObj = _ref.topObj;
      _ref.marginBetween;
      var titlevar = _ref.titlevar,
      titleConfig = _ref.titleConfig,
      args = _objectWithoutProperties(_ref, ["noButton", "noText", "listDict", "buttonText", "subtitleConfig", "textConfig", "overObj", "listvar", "buttonSize", "inputConfig", "buttonConfig", "toplist", "noForm", "dictvar", "formid", "headerObj", "singleTrue", "headerConfig", "logtrue", "tabConfig", "schemavar", "hookConfig", "typeForm", "sameLine", "topButtonConfig", "ImageTextList", "topButtonTrue", "onSubmit", "submitExtra", "topObj", "marginBetween", "titlevar", "titleConfig"]);

  //
  //
  var nameMessError = //
  ""; // "Please add your name."

  schemavar = _objectSpread2({
    name: yup__namespace.string() //
    // .match("")
    .required(nameMessError),
    email: yup__namespace.string().email("This is not a valid email.").required("Please add your email.")
  }, schemavar);
  var finsaShc = //
  // schemavar
  {};

  function asifjew(asdofj) {
    finsaShc[asdofj] = schemavar[asdofj];
  }

  listvar.map(asifjew);
  yup__namespace.object().shape(finsaShc);

  var oksdaew = _objectSpread2({
    // validationSchema: schemaYup
    // mode: "onBlur",
    // reValidateMode: "onChange",
    mode: "onSubmit",
    reValidateMode: "onChange"
  }, hookConfig);

  var _useForm = //
  // "";
  reactHookForm.useForm(oksdaew),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors,
      control = _useForm.control;
      _useForm.watch;
      _objectWithoutProperties(_useForm, ["handleSubmit", "register", "errors", "control", "watch"]);

  function goSing(doksad) {
    var sdifje = Object.values(doksad)[0];
    return sdifje;
  }

  function mainFI(values) {
    var asaoke = submitExtra && submitExtra();
    values = _objectSpread2(_objectSpread2({
      typeForm: typeForm
    }, values), asaoke);
    return values;
  } // 1submit


  function subbTo(values) {
    //
    var emptiosa = !lodash.isEmpty(values);
    var trudsoe = emptiosa && onSubmit;

    if (trudsoe) {
      var dsifer = singleTrue ? goSing(values) : mainFI(values);
      onSubmit(dsifer);
    }
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
    React__default['default'].createElement(BearButton, dvbijkrw) //   <button {...dvbijkrw}>sdfjwerw</button>
    ;
    var asidja = {
      obj: adhwdse,
      style: {
        marginBottom: "20px",
        textAlign: "center"
      }
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv, asidja);
  }

  function FormError(textvar) {
    var okaease = {
      obj: textvar
    };
    var dfbokerr = /*#__PURE__*/React__default['default'].createElement(BearDiv, okaease);
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
    var obvdsaf = fdjgre ? fdjgre : baseObj ? firstInputCheck(baseObj) : FormError("no form Dictionary supplied - " + obj);
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
  var buttio = !noButton && /*#__PURE__*/React__default['default'].createElement(Buttiona, buttonConfig);

  function vijsd9(_ref5) {
    _ref5.name;
        _objectWithoutProperties(_ref5, ["name"]);
  }

  function iasjdwe(obj) {
    // const chsersd = checkTick()
    var kadwesd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, obj["tabTitle"]);
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
      var lpsda = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearDiv, okawe), titlevar);
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
    var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearList, asodwe));
    return okfdsd;
  }

  function maperlis(sdfew) {
    return sdfew.map(sdfok);
  }

  var kaewsae = maperlis(listaros);
  var sudhawe = topButtonTrue ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Tabios, null), kaewsae) : kaewsae;
  /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, sudhawe);
  var iterwr = toplist;
  var mappit = iterwr ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, maperlis(toplist), /*#__PURE__*/React__default['default'].createElement("br", null), sudhawe) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, sudhawe);
  var aidjwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, topObj, mappit, buttio);

  _objectSpread2(_objectSpread2({}, args), {}, {
    listvar: listvar,
    listaros: listaros
  }); // 1console
  var aweuw = noForm ? aidjwe : formid ? /*#__PURE__*/React__default['default'].createElement("form", args, aidjwe) : "NO FORM ID SPECIFIED";

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


    var noisae = /*#__PURE__*/React__default['default'].createElement(BearDiv, kjase);
    return noisae;
  }

  var askew = titlevar && /*#__PURE__*/React__default['default'].createElement(Titren, titleConfig);
  var vbokre = {//
  };
  var isae = /*#__PURE__*/React__default['default'].createElement("div", vbokre, askew, aweuw);
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
  moment__default['default'].duration(inputTime, "seconds");
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
  var _useState = React.useState(""),
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
  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ijewwe); //   1console
  args = _objectSpread2({
    obj: okfdsd
  }, args);
  return /*#__PURE__*/React__default['default'].createElement(BearDiv, args);
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

exports.BearButton = BearButton;
exports.BearCarousel = BearCarousel;
exports.BearDiv = BearDiv;
exports.BearDuration = BearDuration;
exports.BearEmoji = BearEmoji;
exports.BearFloat = BearFloat;
exports.BearForm = BearForm;
exports.BearList = BearList;
exports.BearSelect = BearSelect;
exports.logs = logFuncs;
