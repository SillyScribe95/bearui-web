'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('bootstrap/dist/css/bootstrap.css');
require('antd/dist/antd.css');
var layout = require('@chakra-ui/layout');
var React = require('react');
var _ = require('@SillyScribe95/bedia-shared/');
var antd = require('antd');
var lodash = require('lodash');
var md = require('react-icons/md');
var ti = require('react-icons/ti');
var bs = require('react-icons/bs');
var bi = require('react-icons/bi');
var si = require('react-icons/si');
var ai = require('react-icons/ai');
var fi = require('react-icons/fi');
var ri = require('react-icons/ri');
var fa = require('react-icons/fa');
var bediaShared = require('@SillyScribe95/bedia-shared');
var reactQuery = require('react-query');
var react = require('@chakra-ui/react');
require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
require('react-firebase-hooks/firestore');
var reactSocialLoginButtons = require('react-social-login-buttons');
var yup = require('yup');
var reactHookForm = require('react-hook-form');
var ResizeTextarea = require('react-textarea-autosize');
var reactstrap = require('reactstrap');
require('react-select-search');
var Select = require('react-select');
var CreatableSelect$1 = require('react-select/creatable');
var AsyncCreatableSelect = require('react-select/async-creatable');
var reactCodemirror2 = require('react-codemirror2');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
var CodePreview = require('@uiw/react-code-preview');
var moment = require('moment');
var hi = require('react-icons/hi');
var axios = require('axios');
var reactRouterDom = require('react-router-dom');
require('react-credit-cards/es/styles-compiled.css');
var Cards = require('react-credit-cards');

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
var yup__namespace = /*#__PURE__*/_interopNamespace(yup);
var ResizeTextarea__default = /*#__PURE__*/_interopDefaultLegacy(ResizeTextarea);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var CreatableSelect__default = /*#__PURE__*/_interopDefaultLegacy(CreatableSelect$1);
var AsyncCreatableSelect__default = /*#__PURE__*/_interopDefaultLegacy(AsyncCreatableSelect);
var CodePreview__default = /*#__PURE__*/_interopDefaultLegacy(CodePreview);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var Cards__default = /*#__PURE__*/_interopDefaultLegacy(Cards);

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
      var blackTrue = _ref.blackTrue,
      linkTextTrue = _ref.linkTextTrue,
      textvar = _ref.textvar;
      _ref.obj;
      var style = _ref.style,
      className = _ref.className,
      argso = _objectWithoutProperties(_ref, ["outsideVar", "blankTrue", "outsideTrue", "hrefTrue", "spaceTrue", "hashTrue", "homeTrue", "disableNone", "blackVar", "target", "disabled", "toVar", "linkConfig", "linkvar", "blackTrue", "linkTextTrue", "textvar", "obj", "style", "className"]);

  toVar = linkTextTrue && textvar ? textvar.toLowerCase() : hashTrue ? "#" + toVar : homeTrue ? "/" : toVar; // const outReg = gens.outsideReg;
  var outBlank = outsideTrue || outsideVar || blankTrue;
  var noLink = disabled | !toVar;
  var kmda = blackTrue && {
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
function flexStyle(asfjwe) {
  var okase = {
    style: _objectSpread2({
      //
      display: "flex"
    }, asfjwe)
  };
  return okase;
}

function BearError(obj) {
  // 1const
  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "ERROR", /*#__PURE__*/React__default['default'].createElement("br", null), obj);
  var adkease = {
    style: {
      background: "darkred",
      color: "white",
      textAlign: "center"
    },
    className: "bold",
    obj: okfdsd
  };
  var okasew = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, adkease);
  return okasew;
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
  React__default['default'].createElement(ai.AiOutlineCheckCircle, lasew); // 1signout

  var sduhfer =
  /*#__PURE__*/
  //
  React__default['default'].createElement(fa.FaSignOutAlt, null); // 1time

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
  React__default['default'].createElement(ai.AiOutlineCloseCircle, null);
  var iosade =
  /*#__PURE__*/
  //
  React__default['default'].createElement(fa.FaQuoteLeft, null);
  var asdhgew =
  /*#__PURE__*/
  //
  React__default['default'].createElement(fa.FaQuoteRight, null); // 1quote

  var oksaew =
  /*#__PURE__*/
  //
  React__default['default'].createElement(bs.BsChatQuote, null); // 1comment

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
  React__default['default'].createElement(ai.AiOutlineLink, null) // <FiExternalLink />
  ; // 1settings

  var sdijwqe =
  /*#__PURE__*/
  //
  React__default['default'].createElement(fi.FiSettings, null); // 1icons

  var ijsadwe = {
    // facebook:
    // twitter:
    // whatsapp
    signout: sduhfer,
    tick: okasdew,
    delete: asdfewr,
    playlist: asdkqe,
    settings: sdijwqe,
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
    teams: /*#__PURE__*/React__default['default'].createElement(si.SiMicrosoftteams, null),
    slack: /*#__PURE__*/React__default['default'].createElement(si.SiSlack, null),
    // 1notion
    notion: /*#__PURE__*/React__default['default'].createElement(si.SiNotion, null),
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
  sdfke ? BearDiv$1(okasde) : oksdew; //   ? //
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

  bediaShared.logs.logga("___BearIamge tosdew ___", osdew);
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
      React__default['default'].createElement(antd.Avatar, osdew);
  }

  return endValue;
}

function BearButton(_ref) {
  _ref.textConfig;
      var genConfig = _ref.genConfig,
      disableTrue = _ref.disableTrue,
      errorTrue = _ref.errorTrue,
      background = _ref.background,
      noBackground = _ref.noBackground,
      style = _ref.style,
      obj = _ref.obj;
      _ref.textvar;
      var fontSize = _ref.fontSize,
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
      var clickObj = _ref.clickObj,
      onClick = _ref.onClick;
      _ref.noGreen;
      var divConfig = _ref.divConfig;
      _ref.onlyText;
      _ref.typevar;
      var arg = _objectWithoutProperties(_ref, ["textConfig", "genConfig", "disableTrue", "errorTrue", "background", "noBackground", "style", "obj", "textvar", "fontSize", "longTrue", "downloadLink", "fullWidth", "padvar", "extStyle", "formid", "buttonType", "groupConfig", "loadClick", "linkvar", "logtrue", "clickObj", "onClick", "noGreen", "divConfig", "onlyText", "typevar"]);

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
  // 1const
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      clickTrue = _useState2[0],
      setclickTrue = _useState2[1];

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

  function asoke() {
    if (clickObj) {
      setclickTrue(!clickTrue);
    }

    if (onClick) {
      onClick();
    }
  }

  var sfasdokwe = _objectSpread2(_objectSpread2({
    form: formid
  }, arg), {}, {
    onClick: asoke,
    style: baseStlas,
    className: cllosk,
    isDisabled: dwesae,
    disabled: dwesae // ...uahwe,

  });

  var asodkwe = clickTrue ? clickObj : obj;
  var qy7eww = //
  asodkwe; // asodkwe ? asodkwe : "Confirm";

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
  var asdgvwe = asdijew ? /*#__PURE__*/React__default['default'].createElement(BearDiv$1, jawewe) : sfdsgwe;
  var pdska = downloadLink ? /*#__PURE__*/React__default['default'].createElement("a", {
    href: downloadLink,
    download: true
  }, asdgvwe) : asdgvwe;

  var dweasdd = _objectSpread2({
    obj: pdska
  }, genConfig); // logtrue = true;

  var asdhwqe = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, dweasdd);
  return asdhwqe;
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
      buttonTrue = _ref.buttonTrue,
      iconConfig = _ref.iconConfig,
      textconfig = _ref.textconfig,
      args = _objectWithoutProperties(_ref, ["imagevar", "imagesize", "leftWidth", "padvar", "vertSize", "vertTrue", "iconSize", "imageText", "imageConfig", "textvar", "iconvar", "noImage", "buttonTrue", "iconConfig", "textconfig"]);

  // 1const
  var _useState = React.useState(""),
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
    var oksaw = /*#__PURE__*/React__default['default'].createElement(BearImage, fnkfg);
    return oksaw;
  } // 1text


  function Ajiwq(_ref3) {
    var dsfew = _extends({}, _ref3);

    var oisde = _objectSpread2({
      obj: textvar
    }, dsfew);

    return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, _extends({
      spanTrue: true
    }, oisde));
  }

  function INcoio(_ref4) {
    var style = _ref4.style,
        ase = _objectWithoutProperties(_ref4, ["style"]);

    //
    var ksawe = sadkwe(style);

    var sdlf = _objectSpread2({
      style: ksawe,
      obj: BearIcon(iconvar)
    }, ase);
    var isajdawe =
    /*#__PURE__*/
    //
    // BearIcon(iconvar);
    React__default['default'].createElement(BearDiv$1, _extends({
      spanTrue: true
    }, sdlf));
    return isajdawe;
  }

  var okeasw = !noImage && imagevar;
  var okdsre = okeasw ? /*#__PURE__*/React__default['default'].createElement(ImgMain, imageConfig) : "";
  var kadse = okdsre ? okdsre : iconvar && /*#__PURE__*/React__default['default'].createElement(INcoio, iconConfig);
  var okdswq = textvar && /*#__PURE__*/React__default['default'].createElement(Ajiwq, textconfig);
  var okasew = {
    style: {
      margin: padvar
    }
  };
  var sdijwqe = iconvar || imagevar;
  var bothTrue = textvar && sdijwqe;
  var oksaew = bothTrue && /*#__PURE__*/React__default['default'].createElement(BearDiv$1, _extends({
    spanTrue: true
  }, okasew));
  var oskdawe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, kadse, oksaew, okdswq);

  function Rendo() {
    var VCIFWRE = {
      obj: oskdawe
    };
    var fdghew = /*#__PURE__*/React__default['default'].createElement(BearDiv$1 //
    , _extends({
      flexTrue: true,
      vertAlign: true
    }, VCIFWRE)); // return "dojwewq";

    return fdghew;
  }

  var okfdsd = //
  vertTrue ? oskdawe : Rendo();
  args = _objectSpread2({
    obj: okfdsd
  }, args); // switch (typeDiv){
  //   case "button":
  //     default:
  // }

  return buttonTrue ? /*#__PURE__*/React__default['default'].createElement(BearButton, args) : /*#__PURE__*/React__default['default'].createElement(BearDiv$1, args);
}

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
      selectableTrue = _ref.selectableTrue,
      selectableConfig = _ref.selectableConfig,
      genConfig = _ref.genConfig;
      _ref.fixTitle;
      _ref.noOptionObj;
      var styleList = _ref.styleList,
      _ref$loadobj = _ref.loadobj,
      loadobj = _ref$loadobj === void 0 ? "" : _ref$loadobj,
      loadtrue = _ref.loadtrue;
      _ref.loadNumber;
      var onClick = _ref.onClick,
      noError = _ref.noError;
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
      horiz = _ref.horiz;
      _ref.flexTrue;
      var titlevar = _ref.titlevar,
      dictvar = _ref.dictvar,
      lineBetween = _ref.lineBetween,
      collapseTrue = _ref.collapseTrue,
      listArgs = _objectWithoutProperties(_ref, ["renderItem", "obj", "typevar", "listNumber", "typeList", "removeEmpty", "removeItem", "listvar", "dictFunc", "dragTrue", "messvar", "logtrue", "noListObj", "addTrue", "addDict", "scrollTrue", "selectableTrue", "selectableConfig", "genConfig", "fixTitle", "noOptionObj", "styleList", "loadobj", "loadtrue", "loadNumber", "onClick", "noError", "chooseBaseFunc", "chooseTrue", "returnArray", "clickSingle", "chosenItem", "chosenConfig", "chooseBedia", "itemStyle", "itemConfig", "spaceBetween", "centerItem", "horiz", "flexTrue", "titlevar", "dictvar", "lineBetween", "collapseTrue"]);

  _.logs.logga("___ listvar BBB___", listvar); // 1list PREPARE
  // listvar = noRemove ? listvar : removeEmptyArray(listvar);

  listvar = removeItem ? lodash.remove(listvar, function (currentObject) {
    return currentObject.id != removeItem.id;
  }) : listvar;
  listvar = listNumber ? listvar.slice(0, listNumber) : listvar;
  _.logs.logga("___ listvar CCC___", listvar); // 1style

  styleList = _objectSpread2({
    overflowY: scrollTrue ? "scroll" : ""
  }, styleList);
  !lodash.isEmpty(listvar) || loadtrue;

  var _useState = React.useState(chosenItem),
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

    _.logs.logga(messvar, "BEARLST- CHOSEN ITEM ", {
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
      _.logs.logga("___ CHOOSING ITEM " + theoasd + ":", olaqwefs);

      var iasda = _objectSpread2(_objectSpread2(_objectSpread2({}, asdwe[theoasd]), choseAll[theoasd]), listarr[theoasd]);

      return iasda;
    }

    var endRet = !dictTrue ? dgste : _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asdwe), listarr), choseAll), {}, {
      style: mainseo
    });
    _.logs.logga("___ endRet ___", endRet);
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
      _.logs.logga(messvar + "---BearList---", asjds);
    }

    var asdpkwe = "";

    switch (typeList) {
      case "div":
        asdpkwe = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, endRet);
        break;

      case "dict":
        asdpkwe = endRet;

      case "return":
        // asdpkwe = "dict";
        asdpkwe = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, _extends({}, itemConfig, {
          obj: listarr
        }));
        break;

      case "textMedia":
        // asdpkwe = "sodawewqs";
        asdpkwe = /*#__PURE__*/React__default['default'].createElement(BearTextMedia, endRet);
        break;

      case "button":
        // asdpkwe = "dict";
        asdpkwe =
        /*#__PURE__*/
        //
        React__default['default'].createElement(BearButton, _extends({}, itemConfig, {
          obj: listarr
        })) // <BearButton {...itemConfig} />
        ;
        break;

      default:
        var jasdwqe = //
        "No 'renderItem' or 'typeList' specified in BearList's arguments.";
        asdpkwe = //
        // findoobj(endRet);
        findoobj ? findoobj(endRet) : BearError(jasdwqe);
    }

    var isjdew = //
    dragTrue ? "<DragBase />" : asdpkwe;

    function clickList() {
      var asd0okw = clickSingle;
      var okgs = asd0okw ? origText : listarr;
      var fijsde = //
      // okgs;
      returnArray ? _.turnarray(okgs) : okgs;
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
    var auewasdash = loadtrue ? loadobj : selectableTrue ? /*#__PURE__*/React__default['default'].createElement(SelectComp, filleoo) : //
    // isjdew;
    BearDiv$1(filleoo);
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
    var endoa = {
      messvar: messvar,
      // ...listArgs,
      listvar: listvar,
      dictvar: dictvar,
      dictFunc: dictFunc,
      selectableTrue: selectableTrue,
      retObj: mapoBap
    }; // align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;

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

    _.logs.logga("xxx-LIST-MAIN--args", endoa, "asd90u12321"); // gens.messCheck("sd9jqwxas", listMess, "BearList --AAAA--", oaskdwq);

    var jisad =
    /*#__PURE__*/
    //
    React__default['default'].createElement(BearDiv$1, okadwe); // "okafsdf";
    // EndListA();
    // mapoBap();
    // <HorizChoiceBar {...endoa} />;

    return jisad;
  }

  function mapoBap(saokae, indexvr) {
    _.logs.logga("___ saokae ___", saokae);
    var asidjwe = saokae["mainObj"];
    var jcvbfd = asidjwe ? asidjwe : EndListA(saokae);
    return jcvbfd;
  } // 1select


  function Seletio() {
    _objectSpread2({}, selectableConfig);

    var as83asd = //
    ""; // <SelectArray {...asikwe} />

    return as83asd;
  }

  var sadfwe = //
  // "oaksdwqew";
  !listvar ? noError ? "" : BearError("No 'listvar' argument specified") : selectableTrue ? /*#__PURE__*/React__default['default'].createElement(Seletio, null) : horiz ? /*#__PURE__*/React__default['default'].createElement(HozBar, null) : listvar.map(mapoBap); // 1TITLE

  var showTit = titlevar && !collapseTrue;
  var titlo = showTit && /*#__PURE__*/React__default['default'].createElement(TitleFix, null);
  var asudwe = //
  sadfwe;
  var saokwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, titlo, asudwe);

  var saidje = _objectSpread2(_objectSpread2({
    loadtrue: loadtrue,
    obj: saokwe
  }, listArgs), genConfig); // return saokwe;


  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, saidje);
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

  var sadwew = /*#__PURE__*/React__default['default'].createElement(BearTextMedia, bodfg);
  return sadwew;
}
function linkBase(linkvar, objvar, osdfds) {
  var dkfdsfre = _objectSpread2({
    linkvar: linkvar,
    obj: objvar
  }, osdfds);

  var sadwew = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, dkfdsfre);
  return sadwew;
} // 1list

function ListReturn(_ref2) {
  var sae = _extends({}, _ref2);

  var sadwew = /*#__PURE__*/React__default['default'].createElement(BearList, _extends({
    returnTrue: true
  }, sae));
  return sadwew;
}
function ListFlex(_ref3) {
  var sae = _extends({}, _ref3);

  var sadwew = /*#__PURE__*/React__default['default'].createElement(BearList, _extends({
    returnTrue: true
  }, sae));
  return sadwew;
}
function BearFlex(_ref4) {
  var _ref4$padvar = _ref4.padvar,
      padvar = _ref4$padvar === void 0 ? "20px" : _ref4$padvar,
      listvar = _ref4.listvar,
      itemStyle = _ref4.itemStyle,
      style = _ref4.style,
      leftobj = _ref4.leftobj,
      rightobj = _ref4.rightobj,
      noVertAlign = _ref4.noVertAlign;
      _ref4.obj;
      var sae = _objectWithoutProperties(_ref4, ["padvar", "listvar", "itemStyle", "style", "leftobj", "rightobj", "noVertAlign", "obj"]);

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

    _.logs.logga("___ BearFlex ITEM ___", oksade);
    return /*#__PURE__*/React__default['default'].createElement("div", oksade, obj);
  }

  function redndo(asdwa) {
    var ijase = asdwa.obj ? asdwa : {
      obj: asdwa
    };
    return dokesad(ijase);
  }

  function RendFlex() {
    var sdijrwe = {
      obj: leftobj
    };
    var ijasew = {
      obj: rightobj,
      style: {
        marginLeft: "auto"
      }
    };
    var saijwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearDiv$1, sdijrwe), /*#__PURE__*/React__default['default'].createElement(BearDiv$1, ijasew));
    return saijwe;
  } // listvar = [{
  //   obj:"aaaa"
  // }, {
  //   obj: "bbbb"
  // }]


  var okdsse = listvar ? listvar.map(redndo) : /*#__PURE__*/React__default['default'].createElement(RendFlex, null);

  var vbdrewe = _objectSpread2(_objectSpread2({
    obj: okdsse,
    flexTrue: true
  }, kdsse), sae);

  var sadwew = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, vbdrewe);
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
  var okswe = /*#__PURE__*/React__default['default'].createElement(ImageMain, imageConfig);
  argo = _objectSpread2({
    mainObj: okswe
  }, argo);
  _.logs.logga("argo-zzz", argo, "asd09js"); //

  return ""; //   return <AlignMain {...argo} />;
}
function ImageGroup(_ref9) {
  var listvar = _ref9.listvar,
      sae = _objectWithoutProperties(_ref9, ["listvar"]);

  // max size
  var sadwew = /*#__PURE__*/React__default['default'].createElement(AvatarGroup, sae, listvar.map(function (asowe) {
    return /*#__PURE__*/React__default['default'].createElement(ImageMain, _extends({
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

  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, sadwew);
}
function CopyMain(_ref11) {
  var copyText = _ref11.copyText,
      obj = _ref11.obj,
      copyMessage = _ref11.copyMessage;
      _objectWithoutProperties(_ref11, ["copyText", "obj", "copyMessage"]);

  // const [copssetot, setcopssetot] = useState(obj);
  function sajwe() {
    // const iewawe = <div>Copied!</div>;
    _.logs.logga("___ CopyMain ___", "CopyMain");
    ShowNote(copyMessage); // setcopssetot(iewawe);
  }

  var ovkewwe = {
    text: copyText,
    onCopy: sajwe
  };
  var iawe = /*#__PURE__*/React__default['default'].createElement(CopyToClipboard, ovkewwe, obj);
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
      endValue = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Skeleton, ijsdwqe));
  }

  return endValue;
} // 1function

function Exmapl(dataVar) {
  var skdfsa = {
    height: ""
  };
  var zxcmsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "Hello!");
  var kmxvs = {
    obj: zxcmsd,
    style: skdfsa
  };
  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, kmxvs);
}

function BearDiv$1(_ref) {
  var obj = _ref.obj,
      renderObj = _ref.renderObj,
      bediaTrue = _ref.bediaTrue,
      flexTrue = _ref.flexTrue,
      vertAlign = _ref.vertAlign,
      typeDiv = _ref.typeDiv,
      centerTrue = _ref.centerTrue,
      spanTrue = _ref.spanTrue,
      fontSize = _ref.fontSize;
      _ref.href;
      var linkvar = _ref.linkvar,
      newtabLink = _ref.newtabLink,
      linkConfig = _ref.linkConfig,
      style = _ref.style,
      loadTrue = _ref.loadTrue,
      loadConfig = _ref.loadConfig,
      args = _objectWithoutProperties(_ref, ["obj", "renderObj", "bediaTrue", "flexTrue", "vertAlign", "typeDiv", "centerTrue", "spanTrue", "fontSize", "href", "linkvar", "newtabLink", "linkConfig", "style", "loadTrue", "loadConfig"]);

  //
  //
  var osdakew = flexTrue && {
    display: "flex"
  };
  var zxcsd = vertAlign && {
    alignItems: "center" // justifyContent: "center",

  };
  var kdfr = bediaTrue && {
    background: "red",
    color: "white" // ...bediaMainStyle

  };
  var oksdae = fontSize && {
    fontSize: fontSize
  };
  var centerConf = centerTrue && {
    width: "100%",
    margin: "auto",
    textAlign: "center"
  };

  var gibjr = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, oksdae), centerConf), osdakew), zxcsd), kdfr), style);

  var oksde = _objectSpread2({
    style: gibjr
  }, args);

  var aokdwe = //
  spanTrue ? "span" : typeDiv;
  var ksdrewq = //
  // obj
  renderObj ? renderObj(obj) : obj;
  var endo = "";

  switch (aokdwe) {
    case "center":
      endo = /*#__PURE__*/React__default['default'].createElement(layout.Center, _extends({
        bg: "tomato",
        h: "100px",
        color: "white"
      }, oksde), ksdrewq);

    case "span":
      endo = /*#__PURE__*/React__default['default'].createElement("span", oksde, ksdrewq);
      break;

    default:
      endo = /*#__PURE__*/React__default['default'].createElement("div", oksde, ksdrewq);
  }

  var iasje = newtabLink && {
    //
    outsideTrue: true
  }; // 1link

  var okdas = _objectSpread2(_objectSpread2({
    toVar: linkvar,
    textvar: endo
  }, iasje), linkConfig); // linkvar = href || newtabLink || linkvar;


  var linkTrue = newtabLink || linkvar;
  var xczaeewqa = //
  //
  linkTrue ? /*#__PURE__*/React__default['default'].createElement(BearLink, okdas) : endo;

  function Lodio() {
    var cvboker = _objectSpread2({}, loadConfig);

    return /*#__PURE__*/React__default['default'].createElement(LoadMain, cvboker);
  }

  var sadijqwe = loadTrue ? Lodio() : xczaeewqa;
  return sadijqwe;
}

function BearTitle(_ref) {
  var titleConfig = _ref.titleConfig,
      titlevar = _ref.titlevar,
      belowObj = _ref.belowObj,
      subtitlevar = _ref.subtitlevar,
      subtitleConfig = _ref.subtitleConfig,
      lineBetween = _ref.lineBetween,
      args = _objectWithoutProperties(_ref, ["titleConfig", "titlevar", "belowObj", "subtitlevar", "subtitleConfig", "lineBetween"]);

  var aijsdwe = //
  // gens.butClass;
  "bold";
  var asyhdwe = {// fontSize: sizevar,
    // padding: "0 2% 20px",
  }; //

  titleConfig = _objectSpread2({
    style: asyhdwe,
    className: aijsdwe,
    obj: titlevar
  }, titleConfig);

  var sijwesae = _objectSpread2({
    style: {
      fontSize: "0.8em"
    },
    obj: subtitlevar
  }, subtitleConfig); // BediaTextDiv


  var oksd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearDiv$1, titleConfig), lineBetween && /*#__PURE__*/React__default['default'].createElement("hr", null), /*#__PURE__*/React__default['default'].createElement(BearDiv$1, sijwesae), belowObj);

  var iasjwe = _objectSpread2({
    obj: oksd,
    style: {
      width: "100%"
    }
  }, args);

  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, iasjwe);
}

function BearCheckout(_ref) {
  _ref.seriesObj;
      var args = _objectWithoutProperties(_ref, ["seriesObj"]);

  // 1const
  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "sssss");
  args = _objectSpread2({
    obj: okfdsd
  }, args);
  return /*#__PURE__*/React__default['default'].createElement(BearDiv, args);
}

function ProvideMain(_ref) {
  var children = _ref.children;
  var queryClient = new reactQuery.QueryClient();
  var asijew = /*#__PURE__*/React__default['default'].createElement(reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/React__default['default'].createElement(react.ChakraProvider, null, children));
  return asijew;
}

require("axios");

function QueryMain(funcv) {
  var nameo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "querybsae";

  function fdsrase() {
    if (funcv) {
      return funcv();
    }
  }

  var _useQuery = reactQuery.useQuery(nameo, fdsrase),
      data = _useQuery.data,
      isLoading = _useQuery.isLoading,
      asodke = _objectWithoutProperties(_useQuery, ["data", "isLoading"]);

  function sdfser(_ref) {
    var data = _ref.data,
        asd = _objectWithoutProperties(_ref, ["data"]);

    return _objectSpread2(_objectSpread2({}, asd), data);
  }

  var oksae = data && _.turnarray(data).map(sdfser);

  var okwwew = _objectSpread2({
    data: oksae,
    loading: isLoading
  }, asodke);

  return okwwew;
} // export function createModelApp(typeos, listvar, {!noaksew){

function BearContextProvider(_ref) {
  var dsfer = _extends({}, _ref);

  var sidjfewr = /*#__PURE__*/React__default['default'].createElement(ProvideMain, dsfer);
  var jads = //
  sidjfewr; // ProvideAuth({
  //   obj: sidjfewr,
  //   ...dsfer,
  // });

  return jads;
}

function BearFloat(_ref) {
  var layoutType = _ref.layoutType;
      _ref.verticalTrue;
      var noVertTop = _ref.noVertTop;
      _ref.noPadding;
      var alignTrue = _ref.alignTrue;
      _ref.showRight;
      var showLeft = _ref.showLeft,
      disvar = _ref.disvar,
      noSpace = _ref.noSpace,
      leftobj = _ref.leftobj;
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
    padding: "0 10px",
    marginRight: "auto"
  };
  var sasease = leftobj || showLeft;
  var lefto = sasease && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", jndf, leftobj), !noSpace && /*#__PURE__*/React__default['default'].createElement(react.Spacer, null));
  var centio = /*#__PURE__*/React__default['default'].createElement("div", centerConfig, centerobj);
  var ijsad = {
    marginLeft: "auto",
    style: alignTrue && {
      textAlign: "right"
    }
  };
  var rightos = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, !noSpace && /*#__PURE__*/React__default['default'].createElement(react.Spacer, null), /*#__PURE__*/React__default['default'].createElement("div", ijsad, rightobj));
  var ksaewe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, lefto, centio, rightos);
  var endValue = "";

  switch (layoutType) {
    case "vertical":
      endValue = ksaewe;
      break;

    default:
      var oesfdrtw = _objectSpread2(_objectSpread2({
        flexTrue: true,
        vertAlign: true
      }, trueClass), {}, {
        obj: ksaewe
      });

      endValue = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, oesfdrtw);
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


  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, args);
}

function InputTitle(_ref) {
  var titlevar = _ref.titlevar,
      subtitlevar = _ref.subtitlevar,
      addFunc = _ref.addFunc,
      iconvar = _ref.iconvar,
      newTrue = _ref.newTrue,
      errorMessage = _ref.errorMessage,
      args = _objectWithoutProperties(_ref, ["titlevar", "subtitlevar", "addFunc", "iconvar", "newTrue", "errorMessage"]);
  var aokdwe = //
  ""; // ijdsew ? <BearDiv spanTrue {...ijweq} /> : "";

  var olbknfr = {
    fontSize: "0.7em",
    color: "red",
    marginLeft: "10px" // className: "error",

  };
  var asdwe = {
    obj: errorMessage,
    className: "error",
    style: olbknfr
  };
  var bnkifg = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, _extends({
    spanTrue: true
  }, asdwe)); // 1title

  function AllNo() {
    var okdsras = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, BearIconText(iconvar, titlevar));
    var nisdjre = {
      // flexTrue: true,
      // vertAlign: true,
      obj: okdsras
    };
    var dijrw = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, nisdjre);
    return dijrw;
  } // TITLE MAIN


  var okasde = //
  newTrue ? ChooseTit() : AllNo();
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
    var dfigjrt = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, cvobkof);
    var kcmdr = {
      centerobj: ioakawe,
      rightobj: dfigjrt
    };
    var ijcwe = BearFloat(kcmdr);
    return ijcwe;
  }

  var ijsae = addFunc ? BswTi() : ioakawe;
  var asdojwqs = {
    obj: ijsae,
    // textvar: ioakawe,
    iconvar: iconvar,
    noImage: !iconvar,
    noIcon: !iconvar // noText: true,
    // disVar: true,

  };
  _.logs.logga(name + "___ inpuBase TITLE CONF ___", asdojwqs);
  var seokwer =
  /*#__PURE__*/
  //
  // <ImageTextDiv {...asdojwqs} />
  // <BediaTextDiv {...asdojwqs} />
  React__default['default'].createElement(BearDiv$1, asdojwqs);

  function Subtoter() {
    var ikawed = {
      fontSize: "0.8em"
    };
    var okawe = {
      obj: subtitlevar,
      style: ikawed
    };
    var uiajwe = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, okawe);
    return uiajwe;
  }

  var ijawe = subtitlevar && /*#__PURE__*/React__default['default'].createElement(Subtoter, null);
  var sdfgret = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, seokwer, ijawe);
  var kase = {
    padding: "0px 0",
    textAlign: "left"
  };

  var isawqe = _objectSpread2({
    obj: sdfgret,
    style: kase
  }, args);

  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, isawqe);
}

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
      var noTitle = _ref.noTitle,
      checked = _ref.checked,
      control = _ref.control,
      inputObj = _ref.inputObj,
      inputFunction = _ref.inputFunction,
      inputObjectFunction = _ref.inputObjectFunction;
      _ref.selectTrue;
      var style = _ref.style,
      changeGlobal = _ref.changeGlobal;
      _ref.onChange;
      var obj = _ref.obj,
      ref = _ref.ref,
      required = _ref.required,
      name = _ref.name,
      errors = _ref.errors,
      fontSize = _ref.fontSize,
      sameLine = _ref.sameLine,
      initialValue = _ref.initialValue;
      _ref.selectvar;
      var rightSubmit = _ref.rightSubmit,
      inputType = _ref.inputType,
      rows = _ref.rows,
      titlevar = _ref.titlevar;
      _ref.placeholder;
      _ref.checkList;
      _ref.checklistTitle;
      var lineBelow = _ref.lineBelow,
      _ref$titleWidth = _ref.titleWidth,
      titleWidth = _ref$titleWidth === void 0 ? "160px" : _ref$titleWidth,
      dfsgre = _objectWithoutProperties(_ref, ["textConfig", "titleConfig", "textvar", "errorobj", "noInput", "onInput", "noTitle", "checked", "control", "inputObj", "inputFunction", "inputObjectFunction", "selectTrue", "style", "changeGlobal", "onChange", "obj", "ref", "required", "name", "errors", "fontSize", "sameLine", "initialValue", "selectvar", "rightSubmit", "inputType", "rows", "titlevar", "placeholder", "checkList", "checklistTitle", "lineBelow", "titleWidth"]);

  _.logs.logga("___Asidnw obj ___", obj); // 1const

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = React.useState(checked),
      _useState4 = _slicedToArray(_useState3, 2);
      _useState4[0];
      _useState4[1];

  var _useState5 = React.useState(initialValue),
      _useState6 = _slicedToArray(_useState5, 2),
      valInit = _useState6[0],
      setvalInit = _useState6[1];

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
  required; // requireClass && required;

  var slasso = ijdsew ? "required" : ""; // 1onchange

  function mainChange(valows) {
    // logs.logga("___ adowe ___", adowe);
    _.logs.logga("___ valows ___", valows);
    setvalInit(valows); // if (onChange) {
    //   onChange(valows);
    // }
  }

  function chaneeo(adowe) {
    var valows = //
    adowe.target && adowe.target.value;
    _.logs.logga("___Asidnw obj ___", {
      MAIN: adowe,
      VALUE: valows
    });
    mainChange(valows);
  }

  var changBssoe = {
    value: valInit,
    valueFunc: setvalInit
  };
  var isjdfr = {
    onChange: chaneeo
  };

  var changeAll = _objectSpread2(_objectSpread2({}, changBssoe), isjdfr);

  var nsijqwe = //
  // isjdfr;
  changeGlobal && isjdfr; // 1ref

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

  var asw = //
  // "";
  errors && errors[name] && errors[name]["message"];

  var zdssdire = _objectSpread2(_objectSpread2({}, dfsgre), {}, {
    errorMessage: asw,
    required: required
  });

  var objbase = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, sdweew), {}, {
    fontSize: fontSize,
    textvar: textvar
  }, zdssdire), {}, {
    innerRef: {
      required: required
    }
  }, changeAll), nsijqwe), {}, {
    style: daezxv
  });
  // 1console

  function logros() {
    //
    var oisdkre = //
    "name"; // "testSelect"

    var sdfijer = //
    // "asda";
    name == oisdkre;

    if (sdfijer) {
      for (var _len = arguments.length, asa = new Array(_len), _key = 0; _key < _len; _key++) {
        asa[_key] = arguments[_key];
      }

      _.logs.logge.apply(_.logs, [name + "___BearForm--INPUT------zzz"].concat(asa));
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

        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(CreatableSelect, dfdsawe);
        break;

      case "textarea":
        // 1rows
        rows = rows ? rows : 3;
        var chakResize = {
          minH: "unset",
          overflow: "hidden",
          w: "100%",
          resize: "none",
          as: ResizeTextarea__default['default']
        };

        var ijsdfasd = _objectSpread2(_objectSpread2(_objectSpread2({
          rows: rows,
          minRows: rows,
          defaultValue: textvar
        }, chakResize), objbase), textConfig); // const sadije = innerRef({ required: required }


        _.logs.logga(textvar + "___ INPUTBASE TEXTAREA ___", ijsdfasd); // size="sm"
        // ujsdqwe = <TextareaAutosize {...ijsdfasd} />;

        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(react.Textarea, ijsdfasd); // ujsdqwe = <textarea {...ijsdfasd} />;
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

        ujsdqwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Input, isawe));
        break;
      // case "number":
      //   [type] = "tel";

      default:
        // textvar = "DEFAULT TEXT";
        var sdkfewr = {
          focusBorderColor: "lime" // placeholder: "Here is a sample placeholder"

        };

        var ijawe = _objectSpread2(_objectSpread2({}, sdkfewr), {}, {
          rows: 1,
          autocomplete: "off",
          className: "noresize"
        }, objbase);

        _.logs.logga(name + "___ inputBase--INPUT ___", ijawe); // 1input

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
        React__default['default'].createElement(react.Input, ijawe) // <InputStrap {...ijawe} />
        // <input {...ijawe} />
        ;
    }

    return ujsdqwe;
  }


  function TitleOBbi(_ref2) {
    var style = _ref2.style,
        cxzv = _objectWithoutProperties(_ref2, ["style"]);

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
    }, style);

    var sdfkewr = _objectSpread2({
      titlevar: titlevar,
      style: iawqe
    }, cxzv);

    return /*#__PURE__*/React__default['default'].createElement(InputTitle, sdfkewr);
  }

  var showTit = //
  // true;
  !noTitle && titlevar;

  var saewase = _objectSpread2(_objectSpread2({}, zdssdire), titleConfig);

  var oksdwqe = showTit && /*#__PURE__*/React__default['default'].createElement(TitleOBbi, saewase);
  var confijre = {
    size: "sm",
    type: "submit",
    obj: "YES"
  };

  function goCont(goObj) {
    // inputFunction(objbase)
    function inEar(_ref3) {
      var _ref3$field = _ref3.field,
          ref = _ref3$field.ref;
          _ref3$field.value;
          var field = _objectWithoutProperties(_ref3$field, ["ref", "value"]);

      var sfeqwwe = _objectSpread2(_objectSpread2(_objectSpread2({}, objbase), field), getRef(ref));

      logros("___ BearCont CONTROL field ___", field);
      logros("___ BerInot ___", sfeqwwe);
      var dfigjew = //
      inputFunction(sfeqwwe); // BearSelect(sfeqwwe);

      return dfigjew;
    }

    var asod = //
    reactHookForm.Controller(_objectSpread2(_objectSpread2({}, cntrMan), {}, {
      render: inEar
    }));
    return asod;
  }

  ujsdqwe = inputObj ? inputObj : inputFunction ? goCont() : inputObjectFunction ? inputObjectFunction(retFunc()) : retFunc();
  var jaewdsr = {
    rightobj: /*#__PURE__*/React__default['default'].createElement(BearButton, confijre),
    centerobj: ujsdqwe
  }; // rightSubmit = true;

  var asdijwe = rightSubmit ?
  /*#__PURE__*/
  //
  React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearFloat, jaewdsr)) : ujsdqwe;
  _.logs.logga("___ ujsdqwe ___", ujsdqwe);
  _.logs.logga("___ asdijwe ___", asdijwe);
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

  var ijdas = sameLine ? /*#__PURE__*/React__default['default'].createElement(layout.Flex, ijsa, asdowe()) : /*#__PURE__*/React__default['default'].createElement("div", ijsa, okaweasd);
  var kaosdew = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ijdas, xvcmfde);
  return kaosdew;
}

function BearForm(_ref) {
  var noButton = _ref.noButton;
      _ref.noText;
      var listDict = _ref.listDict,
      loadConfig = _ref.loadConfig;
      _ref.subtitleConfig;
      _ref.textConfig;
      var overObj = _ref.overObj,
      listvar = _ref.listvar,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? "35px" : _ref$buttonSize,
      inputConfig = _ref.inputConfig,
      buttonConfig = _ref.buttonConfig,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? "Submit" : _ref$buttonText,
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
      loadSubmit = _ref.loadSubmit,
      onSubmit = _ref.onSubmit;
      _ref.submitExtra;
      var topObj = _ref.topObj;
      _ref.marginBetween;
      var titlevar = _ref.titlevar,
      titleConfig = _ref.titleConfig,
      changeGlobal = _ref.changeGlobal,
      args = _objectWithoutProperties(_ref, ["noButton", "noText", "listDict", "loadConfig", "subtitleConfig", "textConfig", "overObj", "listvar", "buttonSize", "inputConfig", "buttonConfig", "buttonText", "toplist", "noForm", "dictvar", "formid", "headerObj", "singleTrue", "headerConfig", "logtrue", "tabConfig", "schemavar", "hookConfig", "typeForm", "sameLine", "topButtonConfig", "ImageTextList", "topButtonTrue", "loadSubmit", "onSubmit", "submitExtra", "topObj", "marginBetween", "titlevar", "titleConfig", "changeGlobal"]);

  //
  //
  // 1const
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      loadSetto = _useState2[0],
      setloadSetto = _useState2[1];

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
    mode: "onSubmit"
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


  function subbTo(values) {
    //
    if (loadSubmit) {
      setloadSetto(true);
    }

    !lodash.isEmpty(values);
    onSubmit(values);
    setloadSetto(); // parsVal(values);
    //
    // if (trudsoe) {
    //   onSubmit(values);
    //   parsVal(values);
    // }
    //
  }
  var kasewse = //
  handleSubmit(subbTo); // subbTo
  // sease;

  args = _objectSpread2(_objectSpread2({}, args), {}, {
    id: formid,
    onSubmit: kasewse
  }); // 1button

  function Buttiona(_ref2) {
    var siwerew = _extends({}, _ref2);

    //
    var aewsadw = {
      style: {
        margin: "20px 0"
      }
    }; //

    var jsadcvx = {
      // width: "100%",
      // padding: "60px",
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
    React__default['default'].createElement(BearButton, dvbijkrw) // <button {...dvbijkrw}>sdfjwerw</button>
    ;
    var asidja = {
      obj: adhwdse,
      style: {
        marginBottom: "20px",
        textAlign: "center"
      }
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, asidja);
  }

  function FormError(textvar) {
    var okaease = {
      obj: textvar
    };
    var dfbokerr = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, okaease);
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
      errors: errors,
      ref: okasew
    }, okasew);

    var existo = overObj && overObj[nameeo];
    var ijawe = existo ? existo : baseObj["textvar"];

    var odkasew = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, hookArgs), {}, {
      sameLine: sameLine,
      overObj: overObj,
      changeGlobal: changeGlobal
    }, baseObj), inputConfig), titlCheck), {}, {
      textvar: ijawe
    });


    var oiaswe = BearInput(odkasew);
    return oiaswe;
  }

  function sdfok(obj) {
    var inDict = dictvar && dictvar[obj];

    var baseObj = _objectSpread2(_objectSpread2({}, getFormDict(obj)), inDict);

    var fdjgre = baseObj.obj;
    var obvdsaf = fdjgre ? fdjgre : lodash.isEmpty(baseObj) ? FormError("no form Dictionary supplied - " + obj) : firstInputCheck(baseObj);
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
      var lpsda = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearDiv$1, okawe), titlevar);
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
      horiz: true,
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


    var noisae = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, kjase);
    return noisae;
  }

  var askew = titlevar && /*#__PURE__*/React__default['default'].createElement(Titren, titleConfig);
  var vbokre = {//
  };
  var isae = loadSetto ? /*#__PURE__*/React__default['default'].createElement(LoadMain, loadConfig) : /*#__PURE__*/React__default['default'].createElement("div", vbokre, askew, aweuw);
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

function BearAuthPortal(_ref) {
  var funcvar = _ref.funcvar,
      topObj = _ref.topObj,
      _ref$typeSign = _ref.typeSign,
      typeSign = _ref$typeSign === void 0 ? "login" : _ref$typeSign,
      socialConfig = _ref.socialConfig,
      socialSubmit = _ref.socialSubmit;
      _ref.emailSubmit;
      var socialList = _ref.socialList,
      formConfig = _ref.formConfig,
      noBottom = _ref.noBottom,
      sdse = _objectWithoutProperties(_ref, ["funcvar", "topObj", "typeSign", "socialConfig", "socialSubmit", "emailSubmit", "socialList", "formConfig", "noBottom"]);

  //
  //
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      emaTrue = _useState2[0],
      setemaTrue = _useState2[1];

  var _useState3 = React.useState(typeSign),
      _useState4 = _slicedToArray(_useState3, 2),
      sdfer = _useState4[0],
      setsignType = _useState4[1];

  var signType = sdfer ? sdfer : _.getParamVar("typeSign");

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

  var EmailLoginButton = reactSocialLoginButtons.createButton(emaCon);

  function dskwad() {
    _.logs.logga("asokdwqe");
  }

  var emBaso = {
    textvar: /*#__PURE__*/React__default['default'].createElement(EmailLoginButton, null),
    onClick: dskwad,
    typevar: "email"
  };
  var fdsogkret = {
    google: {
      textvar: /*#__PURE__*/React__default['default'].createElement(reactSocialLoginButtons.GoogleLoginButton, null, signCheck("Google")),
      // textvar: "Google",
      iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiGoogle, null),
      typevar: "google"
    },
    facebook: {
      textvar: /*#__PURE__*/React__default['default'].createElement(reactSocialLoginButtons.FacebookLoginButton, null, signCheck("Facebook")),
      // textvar: "Facebook",
      // iconvar: <SiFacebook />,
      typevar: "facebook"
    },
    email: emBaso,
    github: {
      textvar: /*#__PURE__*/React__default['default'].createElement(reactSocialLoginButtons.GithubLoginButton, null),
      // textvar: "Twitter",
      // iconvar: <SiGithub />,
      typevar: "github"
    },
    apple: {
      textvar: /*#__PURE__*/React__default['default'].createElement(reactSocialLoginButtons.AppleLoginButton, null),
      typevar: "apple"
    },
    twitter: {
      textvar: /*#__PURE__*/React__default['default'].createElement(reactSocialLoginButtons.TwitterLoginButton, null),
      // textvar: "Github",
      iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiTwitter, null),
      typevar: "github"
    } //

  };

  function osadew(_ref2) {
    var typevar = _ref2.typevar;
    _.logs.logga("___ sinBas SOCIAL CLICK ___", typevar);

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
    _.logs.logga("___ BearAuthPortal SIGNUP ___", email, password); //

    _.userLogSign(email, password, funcvar);
  } // 1console


  _.logs.logga("___ SignBsae SOCIAL ___", igfder);
  var dsfijd =
  /*#__PURE__*/
  //
  // {/* <BearTextMedia {...igfder} /> */}
  React__default['default'].createElement(BearList, igfder);

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

    var forso = /*#__PURE__*/React__default['default'].createElement(BearForm, dfgre);
    return forso;
  }

  var jvsfeer = //
  emaTrue ? /*#__PURE__*/React__default['default'].createElement(FOrnaW, null) : dsfijd;

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
    var oksae = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearDiv$1, kasesd), /*#__PURE__*/React__default['default'].createElement(BearDiv$1, koewqe));
    var sdease = {
      obj: oksae,
      bediaTrue: true,
      style: {
        padding: "15px"
      }
    };
    var kdsfse = /*#__PURE__*/React__default['default'].createElement(BearButton, sdease);
    var oasebd = {
      style: {
        paddingTop: "20px",
        textAlign: "center",
        fontSize: "1.3em"
      },
      obj: kdsfse
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, oasebd);
  }

  var jdtre = sdfer && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, topObj, jvsfeer, !noBottom && /*#__PURE__*/React__default['default'].createElement(OrCHekc, null));

  var okasdew = _objectSpread2({
    obj: jdtre
  }, sdse);

  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, okasdew);
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

function BearPopover(_ref) {
  var obj = _ref.obj;
      _ref.noCenter;
      var popConfig = _ref.popConfig,
      content = _ref.content,
      testShow = _ref.testShow;
      _ref.titleConfig;
      var titlevar = _ref.titlevar,
      args = _objectWithoutProperties(_ref, ["obj", "noCenter", "popConfig", "content", "testShow", "titleConfig", "titlevar"]);

  //
  function Daokwe() {
    var okaew = {
      obj: content,
      style: {
        textAlign: "center"
      }
    };
    var okasdw = /*#__PURE__*/React__default['default'].createElement(Divo, okaew);
    return okasdw;
  }

  var oksaew = _objectSpread2({
    style: {
      padding: "0"
    },
    title: titlevar,
    content: /*#__PURE__*/React__default['default'].createElement(Daokwe, null)
  }, popConfig);
  // titlevar && <PopoverHeader>{titlevar}</PopoverHeader>;
  //   const isadwqe = (
  //     <Popover>
  //       <PopoverTrigger>{obj}</PopoverTrigger>
  //       <PopoverContent>
  //         <PopoverArrow />
  //         {/* <PopoverCloseButton /> */}
  //         {dfijwr}
  //         <PopoverBody>
  //           adsfokewrewrw
  //           {/* <Divo {...popConfig} /> */}
  //         </PopoverBody>
  //       </PopoverContent>
  //     </Popover>
  //   );
  //   placement="leftTop" title={text} content={content} trigger="click"

  var jdse = testShow ? content : /*#__PURE__*/React__default['default'].createElement(antd.Popover, oksaew, obj);
  var sadwe = //
  jdse;

  var fdiisdjr = _objectSpread2({
    obj: sadwe
  }, args);

  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, fdiisdjr);
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
  var idfwer = emojiDict[asofkr];
  var side = idfwer && idfwer.emoji;
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
      listvar = _ref.listvar;
      _ref.onlyEmoji;
      var itemConfig = _ref.itemConfig,
      sdaa = _objectWithoutProperties(_ref, ["initialValue", "selectBlue", "selectTrue", "chooseFunc", "typevar", "listvar", "onlyEmoji", "itemConfig"]);

  //
  var ijsae = //
  emojiDict;
  var kjsijsa = [//
  "funny", "happy", "interest", // "surprise",
  "sad" // "angry",
  ];

  var _useState = React.useState(),
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
    padding: "5px 10px",
    borderRadius: "50%"
  };

  var sfjaw = _objectSpread2({
    className: sadwqe,
    style: oksae
  }, itemConfig); // 1tick
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


  function saokde(_ref2) {
    _ref2.chosenTrue;
        var emoji = _ref2.emoji,
        textvar = _ref2.textvar,
        qweq = _objectWithoutProperties(_ref2, ["chosenTrue", "emoji", "textvar"]);

    var lsadwe = //
    emoji; // textvar;
    // lfdijg;
    // bocd
    // ureytue;

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
    React__default['default'].createElement(BearDiv$1, xdffsd);

    var oksaew = _objectSpread2({
      obj: lsadwe,
      flexTrue: true
    }, sfjaw);

    var aokdwe = _objectSpread2({
      // style:
      obj: /*#__PURE__*/React__default['default'].createElement(BearDiv$1, oksaew),
      popConfig: {
        content: sdfiewrw
      }
    }, qweq);
    return /*#__PURE__*/React__default['default'].createElement(BearPopover, aokdwe);
  }

  function Listso(_ref3) {
    var ssdwedf = _extends({}, _ref3);

    //
    // 1chosen
    var djifwsare = {
      style: {
        border: "2px solid black",
        borderRadius: "50%" // background: "blue",

      },
      className: "shadowBottom"
    };
    var ijdwq = {
      // style: { background: "red" },
      chosenItem: asdoe,
      chosenConfig: djifwsare,
      // chooseTick
      chooseTrue: true,
      returnArray: true,
      clickSingle: true
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
      // typeList: "div",
      renderItem: asdoke,
      horiz: true,
      itemConfig: sfjaw
    }, logBaso), ijdwq), ssdwedf);
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
    ""; //   <BearSelect {...ijsaew} />;

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

var _skeweewr;
var twitLink = "https://twitter.com/";
var plsusew = "";
var twitterShareLink = twitLink + "intent/tweet" + plsusew;
var twittDirectLink = twitLink + "messages/compose" + plsusew; // 1twitter

var skeweewr = (_skeweewr = {
  linkBase: twitterShareLink,
  iconvar: "twitter",
  toolText: "Twitter",
  textConnect: "text",
  linkConnect: "url"
}, _defineProperty(_skeweewr, "iconvar", /*#__PURE__*/React__default['default'].createElement(si.SiTwitter, null)), _defineProperty(_skeweewr, "styleIcon", {
  color: "white",
  background: "#1da1f2"
}), _skeweewr); // 1reddit

var rddito = {
  linkBase: "https://www.reddit.com/submit",
  linkConnect: "url",
  toolText: "Reddit",
  textConnect: "title",
  iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiReddit, null),
  styleIcon: {
    color: "white",
    background: "#FF4301"
  }
}; // 1hacker

var hckn = {
  toolText: "Hacker News",
  iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiYcombinator, null),
  linkBase: "https://news.ycombinator.com/submitlink",
  textConnect: "t",
  linkConnect: "u"
}; // 1linkedin

var lnkeos = {
  iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiLinkedin, null),
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

var ggge = {
  iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiGoogle, null),
  toolText: "Google",
  linkBase: "https://www.google.com/search",
  textConnect: "q"
}; // 1embed

var okfgfd =
/*#__PURE__*/
//
//  <ImEmbed2/>
React__default['default'].createElement(fa.FaCode, null);
var dkewqew = {
  iconvar: okfgfd,
  toolText: "Embed",
  copyLink: true
}; // 1whatsapp

var whstConfo = {
  // linkBase: "https://api.whatsapp.com/send/?phone",
  linkBase: "https://web.whatsapp.com/send",
  textConnect: "text",
  toolText: "Whatsapp",
  iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiWhatsapp, null),
  styleIcon: {
    color: "white",
    background: "#128C7E"
  }
}; // 1facebook

var fceConfo = {
  linkBase: "https://www.facebook.com/sharer/sharer.php",
  // textConnect: "u",
  linkConnect: "u",
  typevar: "facebook",
  toolText: "Facebook",
  iconvar: /*#__PURE__*/React__default['default'].createElement(si.SiFacebook, null),
  styleIcon: {
    color: "white",
    background: "#3b5998"
  }
}; // 1telegram

var teldsofe = {
  linkBase: "https://t.me/share/url",
  textConnect: "text",
  linkConnect: "url"
}; // 1copy

var cppyo = {
  // toolText: "Copy link to Clipboard",
  // noLink: true,
  toolText: "Copy Link",
  copyLink: true,
  iconvar: /*#__PURE__*/React__default['default'].createElement(ai.AiOutlineCopy, null)
};
var socialListDict = {
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
    titlevar: "subject",
    textConnect: "body"
  },
  //   1twitter
  twitter: skeweewr,
  twitterdm: _objectSpread2(_objectSpread2({}, skeweewr), {}, {
    linkBase: twittDirectLink,
    toolText: "Twitter DM"
  }),
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

//
function linkOrdse(_ref) {
  var typevar = _ref.typevar,
      textvar = _ref.textvar,
      linkvar = _ref.linkvar,
      linkBase = _ref.linkBase,
      linkConnect = _ref.linkConnect,
      textConnect = _ref.textConnect;
  linkvar = encodeURIComponent(linkvar);
  var twitTure = typevar == "twitter";
  var noLink = twitTure;
  var showLink = //
  !noLink && linkConnect;
  var tnstFinal = //
  twitTure ? textvar + " " + linkvar : textvar;
  tnstFinal = encodeURIComponent(tnstFinal);
  var linkeo = //
  linkvar; // encodeURIComponent(linkvar)

  var bsaeio = showLink && bediaShared.joinString([//
  linkConnect, linkeo], "=");
  var txtooeio = textConnect && bediaShared.joinString([//
  textConnect, tnstFinal], "=");
  var ihjtt = [//
  txtooeio, bsaeio];
  var linksiw = bediaShared.joinString(ihjtt, "&"); // const okasew = linkBase

  var sadije = bediaShared.joinString([//
  linkBase, "?", linksiw]);
  var didsfe = //
  sadije; // encodeURIComponent(sadije);

  bediaShared.logs.logga("___ linkOrdse-zzz ___", didsfe);
  return didsfe;
}

function BearSocial(_ref) {
  var shareLink = _ref.shareLink,
      shareText = _ref.shareText,
      userText = _ref.userText,
      iconSide = _ref.iconSide,
      nameTrue = _ref.nameTrue,
      iconPop = _ref.iconPop,
      iconStyle = _ref.iconStyle,
      embedCode = _ref.embedCode,
      itemConfig = _ref.itemConfig,
      sdfsrew = _objectWithoutProperties(_ref, ["shareLink", "shareText", "userText", "iconSide", "nameTrue", "iconPop", "iconStyle", "embedCode", "itemConfig"]);

  // 1const
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      cosNamB = _useState4[0];
      _useState4[1];

  var sodkfwe = "asdqweqs";
  userText = cosNamB ? cosNamB : userText; // userText = "okwqeasd sodkdsfo";

  var sdokfwe = userText ? "&".concat(_.linkuseNameProvide, "=").concat(userText) : "";
  shareLink = //
  // shareLink + "sdokfwe";
  shareLink + sdokfwe;

  function iasjde(_ref2) {
    var typevar = _ref2.typevar,
        iconvar = _ref2.iconvar;
        _ref2.iconText;
        _ref2.textvar;
        var toolText = _ref2.toolText,
        styleIcon = _ref2.styleIcon,
        style = _ref2.style;
        _ref2.copyLink;
        var asswd = _objectWithoutProperties(_ref2, ["typevar", "iconvar", "iconText", "textvar", "toolText", "styleIcon", "style", "copyLink"]);

    // toolText = "Share on " + toolText;
    var ijsaew = _objectSpread2({
      typevar: typevar,
      textvar: shareText,
      linkvar: shareLink
    }, asswd); // endValue = {
    //   copyLink {
    //     copyText: shareLink,
    //   } : {
    //   linkvar: linkOrdse(ijsaew)}


    var endValue = "";

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
        endValue = _objectSpread2({}, _.getBlankLink(linkOrdse(ijsaew)));
    }

    _objectSpread2({}, style);

    /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
    var mainIco = {
      iconConfig: {
        style: _objectSpread2(_objectSpread2({
          fontSize: "0.9em",
          // width: "50px",
          // height: "50px",
          borderRadius: "60%",
          padding: "10px"
        }, styleIcon), iconStyle)
      }
    };

    var saewawe = iconSide && _objectSpread2({
      textvar: toolText
    }, mainIco);

    var ikasde = iconPop && {
      popConfig: {
        trigger: "click",
        content: toolText
      }
    };

    var jsaease = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, saewawe), ikasde), itemConfig), endValue), mainIco), {}, {
      iconvar: iconvar,
      // textvar: toolText,
      // leftobj: iconvar,
      noVertTop: true,
      // popContent: toolText,
      padvar: 5
    });

    var gfnmeir = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearTextMedia, jsaease));
    var sdjerw = //
    typevar == "facebook"; // true

    if (sdjerw) {
      // 1console
      _.logs.logga(typevar + "___ Link Social BASIC ___", ijsaew);
      _.logs.logga(typevar + "___ns Link Social FULL ___", jsaease);
      _.logs.logga(typevar, "___ mainIco ___", mainIco);
    }

    return gfnmeir;
  }
  var okaasad = [//
  "facebook", "twitter", "whatsapp", "reddit", "hackernews", "embed", "copy"];

  function sadqwe(cvdfa) {
    //
    var osdasew = //
    iasjde(cvdfa); // "qplwqe";

    return osdasew;
  }

  var ijsadwe = _objectSpread2({
    dictvar: socialListDict,
    listvar: okaasad,
    renderItem: sadqwe,
    typeTrue: "t",
    iconSide: iconSide
  }, sdfsrew);

  _.logs.logga("___ LISTSOCIAL ___", ijsadwe);

  function NameSingio() {
    function asokds(sdfer) {
      _.logs.logga("___ setcosNamB ___", sdfer); // setcosNamB(sdfer);
    }

    var okasew = {
      formid: sodkfwe,
      // onSubmit: subopens,
      onChange: asokds,
      singleTrue: true,
      noButton: true,
      listvar: [{
        name: "name"
      }]
    };
    var vcbfd = /*#__PURE__*/React__default['default'].createElement(BearForm, okasew);
    return vcbfd;
  }

  var tkdf = nameTrue && /*#__PURE__*/React__default['default'].createElement(NameSingio, null);
  var ijsaddsf = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, tkdf, /*#__PURE__*/React__default['default'].createElement(BearList, ijsadwe)); //

  return ijsaddsf;
} // let oaskdwe = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@charlidamelio/video/6772082062670204166" data-video-id="6772082062670204166" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@charlidamelio" href="https://www.tiktok.com/@charlidamelio">@charlidamelio</a> <p>i am now in the car on the way to the airport just an update</p> <a target="_blank" title="♬ original sound - ❗️Arkansas boy😁👋🏽" href="https://www.tiktok.com/music/original-sound-6755923489514965766">♬ original sound - ❗️Arkansas boy😁👋🏽</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`;

function BearTags(_ref) {
  var itemConfig = _ref.itemConfig,
      args = _objectWithoutProperties(_ref, ["itemConfig"]);

  // 1const
  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "sssss");

  function rendios(itemo) {
    var osdfks = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "# ", itemo);
    var oksasde = {
      obj: osdfks
    };
    return /*#__PURE__*/React__default['default'].createElement(BearButton, oksasde);
  }

  var kasde = {
    color: "darkblue",
    background: "lightgrey"
  };

  var oksdewqsa = _objectSpread2({
    className: "shadowHover",
    style: kasde
  }, itemConfig);

  args = _objectSpread2({
    obj: okfdsd,
    noError: true,
    itemConfig: oksdewqsa,
    typeList: "button",
    renderItem: rendios
  }, args);
  return /*#__PURE__*/React__default['default'].createElement(BearList, args);
}

function BearSelect(_ref) {
  var multi = _ref.multi;
      _ref.noMenu;
      _ref.menuConfig;
      var typeSelect = _ref.typeSelect,
      options = _ref.options,
      optionConfig = _ref.optionConfig,
      notClearable = _ref.notClearable,
      initOptions = _ref.initOptions,
      onChange = _ref.onChange,
      createTop = _ref.createTop;
      _ref.logtrue;
      var createFunc = _ref.createFunc,
      valueFunc = _ref.valueFunc,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 16 : _ref$fontSize,
      newLineTrue = _ref.newLineTrue,
      noMenuBorder = _ref.noMenuBorder,
      menuStick = _ref.menuStick;
      _ref.messvar;
      var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name;
      _ref.limitvar;
      var ref = _ref.ref,
      noValueReturn = _ref.noValueReturn,
      args = _objectWithoutProperties(_ref, ["multi", "noMenu", "menuConfig", "typeSelect", "options", "optionConfig", "notClearable", "initOptions", "onChange", "createTop", "logtrue", "createFunc", "valueFunc", "fontSize", "newLineTrue", "noMenuBorder", "menuStick", "messvar", "name", "limitvar", "ref", "noValueReturn"]);

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
  }; // 1OPEN


  function optRdio(base) {
    var ijsdr = _objectSpread2(_objectSpread2(_objectSpread2({}, base), lcxvb), {}, {
      textAlign: "left",
      fontSize: fontSize - 4
    }, optionConfig);

    var sodk = //
    ijsdr; // skwe(ijsdr);

    return sodk;
  } // 1menu


  function rendMenu(bsao) {
    var aaese = menuStick && {
      marginTop: "0px"
    };
    var sdoewr = !noMenuBorder && bsao;

    var oasde = _objectSpread2(_objectSpread2({}, sdoewr), aaese);

    return oasde;
  } // 1control


  function rendCont(base) {
    var iksdrqe = _objectSpread2(_objectSpread2(_objectSpread2({}, base), lcxvb), {}, {
      // maxHeight: 20,
      fontSize: fontSize
    });
    return iksdrqe;
  } //   1styles


  var stylBasoe = {
    control: rendCont,
    option: optRdio,
    menuList: function menuList(styles) {
      var oksdr = _objectSpread2(_objectSpread2({}, lcxvb), styles);
      return oksdr;
    },
    menu: rendMenu,
    noOptionsMessage: function noOptionsMessage(base) {
      return _objectSpread2(_objectSpread2({}, base), {}, {
        fontSize: fontSize
      });
    } // clearIndicator: (base) => ({
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
  var asidjwe = multi && {
    isMulti: true
  };

  function changeos(params) {
    //
    var sovkoe = //
    noValueReturn ? params : multi ? params.map(function (sdfe) {
      return sdfe.value;
    }) : params.value;

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
  var iasjdwe = !notClearable && {
    isClearable: true
  };

  var sdfijewr = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
    // MENU
    //
    isSearchable: true
  }, iasjdwe), mennoPIt), asidjwe), args), ideoBasa);

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

function BearSearchList(_ref) {
  var listvar = _ref.listvar,
      dictvar = _ref.dictvar,
      renderItem = _ref.renderItem,
      searchAttrs = _ref.searchAttrs,
      args = _objectWithoutProperties(_ref, ["listvar", "dictvar", "renderItem", "searchAttrs"]);

  // 1const
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  function askdwew(mapp) {
    var sdfgoekse = _.mapDictAttrToString(searchAttrs, " ", mapp);
    _.logs.logga("___ sdfgoekse ___", sdfgoekse);
    return sdfgoekse;
  }

  var arrmode = //
  // isdae;
  _.mapSelectValue(listvar, {
    dictvar: dictvar,
    labelFunc: renderItem,
    valueFunc: searchAttrs && askdwew
  });
  _.logs.logga("___ brSeacrch LIST ___", arrmode);

  function qe4ead(vcdfge) {
    _.logs.loggo("___ vcdfge ___", vcdfge);
  }

  var jsdrase = {
    options: arrmode,
    onChange: qe4ead
  };
  args = _objectSpread2(_objectSpread2({
    menuStick: true,
    noMenuBorder: true,
    menuIsOpen: true
  }, jsdrase), args);
  var kdserase =
  /*#__PURE__*/
  //
  React__default['default'].createElement(BearSelect, args) // <SelectSearch {...args} />;
  ;
  return kdserase;
}

require("js-beautify").html; // import CodeMirror from "react-codemirror";
function BearCodePreview(_ref) {
  var code = _ref.code;
      _ref.initCode;
      _ref.previewConfig;
      _ref.codeConfig;
      var args = _objectWithoutProperties(_ref, ["code", "initCode", "previewConfig", "codeConfig"]);

  // 1const
  var _useState = React.useState(code),
      _useState2 = _slicedToArray(_useState, 2),
      codeos = _useState2[0],
      setcodeos = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      lodios = _useState4[0],
      setlodios = _useState4[1];

  /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
  args = _objectSpread2({
    // showEdit: true,
    noCode: true,
    bgWhite: true,
    noPreview: false,
    code: codeos
  }, args);
  var zxcvdf = {
    // width: "150px",
    // height: "300px",
    // lineNumbers: true,
    tabSize: 10,
    mode: "javascript",
    theme: "blackboard" // extraKeys: { "Shift-Tab": autoFormatSelection },

  };

  var vndsf = _objectSpread2({}, zxcvdf);

  function sadkwe(zxcvsdf) {
    _.logs.logga("___ zxcvsdf ___", zxcvsdf);
    setlodios(true);
    setcodeos(zxcvsdf);
    setlodios(false);
  }

  function changeos(editor, data, value) {
    sadkwe(value);
  }

  var asisjde = //
  // sadkwe
  changeos;
  var oksaaase = //
  // hBeautify(codeos, { indent_size: 2 });
  codeos;
  var sidfr = {
    value: oksaaase,
    onBeforeChange: asisjde,
    onChange: asisjde,
    options: vndsf
  };
  var sdfjser = {
    style: {//   display: "flex",
    }
  }; //   1editobj

  var editObjo = /*#__PURE__*/React__default['default'].createElement(reactCodemirror2.Controlled, sidfr); //   1previe

  var sdfger = lodios ? "" : /*#__PURE__*/React__default['default'].createElement(CodePreview__default['default'], args);
  var sjkdae = {
    obj: sdfger,
    style: {
      height: "40vh"
    }
  };
  var prevObj = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, sjkdae);
  var sdfisdr =
  /*#__PURE__*/
  //
  React__default['default'].createElement("div", sdfjser, prevObj, editObjo);
  return sdfisdr;
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
  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, args);
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

function SearchPlaylist(_ref) {
  var userObj = _ref.userObj;
      _ref.singleUser;
      var createFunc = _ref.createFunc,
      userPlaylists = _ref.userPlaylists,
      args = _objectWithoutProperties(_ref, ["userObj", "singleUser", "createFunc", "userPlaylists"]);

  // 1const
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var iasje = bediaShared.mapFunc(userPlaylists, bediaShared.emojiNameString);

  var _useState3 = React.useState(iasje),
      _useState4 = _slicedToArray(_useState3, 2),
      opttnas = _useState4[0],
      setoptions = _useState4[1];

  var plydatuser = userPlaylists;

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      plydatpub = _useState6[0];
      _useState6[1];

  var privListPlay = bediaShared.mapFunc(plydatuser, bediaShared.emojiNameString);
  bediaShared.mapFunc(plydatpub, bediaShared.emojiNameString); // userPlaylists = userPlaylists
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
    bediaShared.logs.logga("___ playlist CREATE NEW  ___", {
      OBJ_VALUE: baseoMojs,
      VALUES: kjsaewe,
      OPTIONS: oaskdwe
    });
    setType(kjsaewe);
    setoptions(oaskdwe); // setcreateModalObj();
  }

  function saowe(sdokfer) {
    var baseoMojs = bediaShared.emojiNameString(sdokfer);
    setNewVal(baseoMojs);
    bediaShared.logs.logga("___ CREATE PLAYLIST SEARCH add ___", {
      sdokfer: sdokfer,
      baseoMojs: baseoMojs
    });

    if (createFunc) {
      createFunc(sdokfer);
    }

    return baseoMojs;
  }

  function openPlyCreate(sdfpe) {
    bediaShared.logs.logga("___ CREATE PLAYLIST SEARCH GO ___", sdfpe);
    var oksadw = {
      name: sdfpe
    }; // saowe

    bediaShared.SaveUser("playlist", userObj, oksadw, saowe);
  }

  function okasdwe(xlcvs) {
    bediaShared.logs.logga("___ SEARCH PLAYLIST onChange ___", xlcvs);
  }

  function sofwqee(kfrree) {
    bediaShared.logs.logga("___ searPlaylist VALUEFUNC ___", kfrree);
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

  bediaShared.logs.logga("___ searchPlaylist LISTS   ___", oksae);
  bediaShared.logs.logga("___ SearcPlaylist ___", args);
  bediaShared.logs.logga("___ userPlaylists ___", userPlaylists); // const isajew = <></>;
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
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var iasje = bediaShared.mapFunc(userPlaylists, bediaShared.emojiNameString);

  var _useState3 = React.useState(iasje),
      _useState4 = _slicedToArray(_useState3, 2),
      opttnas = _useState4[0];
      _useState4[1];

  var plydatuser = userPlaylists;

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      plydatpub = _useState6[0];
      _useState6[1];

  var privListPlay = bediaShared.mapFunc(plydatuser, bediaShared.emojiNameString);
  bediaShared.mapFunc(plydatpub, bediaShared.emojiNameString); // 1user
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
    bediaShared.logs.logga("___ CREATE PLAYLIST SEARCH GO ___", sdfpe);
  }

  function okasdwe(xlcvs) {
    bediaShared.logs.logga("___ SEARCH PLAYLIST onChange ___", xlcvs);
  }

  function sofwqee(kfrree) {
    bediaShared.logs.logga("___ searPlaylist VALUEFUNC ___", kfrree);
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

  bediaShared.logs.logga("___ searchPlaylist LISTS   ___", oksae);
  bediaShared.logs.logga("___ SearcPlaylist ___", args); // const isajew = <></>;
  // return "";

  return /*#__PURE__*/React__default['default'].createElement(BearSelect, args);
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

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setInpTexto = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      adfa = _useState4[0],
      setoptios = _useState4[1];

  var optios = bediaShared.checkFullArray(adfa) && adfa;
  optios && bediaShared.mapInnerAttr(optios, "wikiID"); // 1query
  //   1error

  function errios(sdokfe) {
    bediaShared.logs.logga("___ KNOW ERRORS ___", sdokfe);
  }

  function onCreat(okweqq) {
    bediaShared.logs.logga("___ CREAT TOPIC ___", okweqq);
    bediaShared.checkFullArray(okweqq) && createIndex; // if (oksaew) {
    //   CreateTopic(okweqq, userObj);
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
    bediaShared.logs.logga("___SEARCH getGooleLink ___", iawes);
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
    bediaShared.logs.logga("___ getWikiLink SEARCH   ___", endSearch);
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
              dfewr = bediaShared.turnDictLink(odkaew, service_url);
              _context2.next = 6;
              return axios__default['default'].get(service_url, vxeew).then(asokdwe).catch(errios);

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
              bediaShared.logs.logga(typevar + "___ gentKnow ___", adwqe);
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
    includeImage ? /*#__PURE__*/React__default['default'].createElement(BearTextMedia, daease) : name;
    var asjwaswe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, fdgorr);
    var dsoqw = {
      value: cbjdigr,
      label: asjwaswe // label: name,

    };
    bediaShared.logs.logga("___ Kowled OBJECT ___", dsoqw);
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
    bediaShared.logs.logga("___ gooItem ___", ijisae);
    return selectRend(ijisae);
  }

  function returnGoogle(_ref4) {
    var itemListElement = _ref4.itemListElement,
        asew = _objectWithoutProperties(_ref4, ["itemListElement"]);

    bediaShared.logs.logga("___ retuGoogle ___", asew);

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
      imageAttr: thumbnail && thumbnail.source,
      name: title,
      wikiID: pageid.toString(),
      id: bediaShared.slugFunc(title, "_")
    };
    bediaShared.logs.logga("___ WIKIPEDI AOTHER ___", asdw);
    bediaShared.logs.logga("___ wikItem ___", daease);
    return selectRend(daease);
  }

  function returnWiki(cxzvfd) {
    var asduw = //
    cxzvfd && cxzvfd.query.pages;
    var sidwq = //
    asduw && //
    //   Object.values(asduw);
    Object.values(asduw).map(wikItem);
    bediaShared.logs.logga(typevar + "___returnWiki retRsult ___", sidwq);
    return sidwq;
  }

  function asdiwe(adwq) {
    var mdsao = //
    adwq; //   adwq.target.value;

    bediaShared.logs.logga("Search Knowledge- on Search=---", mdsao);
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
    bediaShared.logs.logga("___ searcKnowl ONHANGE ___", asoke);
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
    bediaShared.logs.logga("___ OHANGE KOWLEDGE ___", aewqe);
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

  bediaShared.logs.logga("___ modelFinitos ___", {
    TEST: jasdwe // optios: optios,
    // modelFinitos: modelFinitos,

  });
  bediaShared.logs.logga("___ SEAR KNowledge MAIN ___", asdyw);
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
  return /*#__PURE__*/React__default['default'].createElement(SearchKnowledge, args);
}

function AlterModelConst(_ref) {
  var _dfkree;

  var topicConfig = _ref.topicConfig;
      _ref.nameConfig;
      var emojiConfig = _ref.emojiConfig,
      userObj = _ref.userObj,
      modelCreateFunc = _ref.modelCreateFunc,
      listvar = _ref.listvar,
      dictvar = _ref.dictvar,
      args = _objectWithoutProperties(_ref, ["topicConfig", "nameConfig", "emojiConfig", "userObj", "modelCreateFunc", "listvar", "dictvar"]);

  //
  // 1fontsize
  var baseoFont = 80;
  var asijew = {
    fontSize: baseoFont
  };

  var _ref2 = //
  // "";
  // QueryData()
  userObj ? QueryMain(_.getUserPlaylists(userObj)) : "",
      plydatuser = _ref2.data;
      _ref2.isLoading; // QueryMain(GetUserObjs(indexPlaylist, userObj));


  function showSelStly(lcxmvd) {
    var dsofk = _objectSpread2(_objectSpread2({}, asijew), lcxmvd);

    _.logs.logga("___ showSelStly bbbb___", dsofk);
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
    _.logs.logga("___ altmodel EmoijList ___", iasjdwe);
    var emkjBaseo = //
    BearEmoji(iasjdwe); // "sadokae"

    return emkjBaseo;
  } // 1name
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
      _.logs.logga("___ cxvk ___", cxvk); //   setplayCreate(cxvk);

      modelCreateFunc(1); // addNew(1);
    }

    var playBase = {
      userPlaylists: plydatuser
    };

    var ijsae = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asijew), asdew), playBase), {}, {
      createFunc: tretsd
    });

    _.logs.logga("___ altModel PLAYLIST ___", ijsae); // return

    return SearchPlaylist(ijsae);
  } // 1teams 1microsoft


  function Teamsio(asdew) {
    var lasewase = _objectSpread2({}, asdew);

    return /*#__PURE__*/React__default['default'].createElement(SearchPlaylist, lasewase);
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

    _.logs.logga("___ AlterMode SEARCH NOTION ___", notsfjwe); // return "aspdlwqew";

    return /*#__PURE__*/React__default['default'].createElement(SearchNotion, lasewase);
  }

  var cxvmfg = {
    name: "notion",
    iconvar: BearIcon("notion"),
    titlevar: "Notion",
    inputFunction: NotioShare
  }; // 1slack BASIC

  function SlackoShare(asdew) {
    var lasewase = _objectSpread2({}, asdew);

    return /*#__PURE__*/React__default['default'].createElement(SearchPlaylist, lasewase);
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
    var _useState = React.useState(),
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
  React__default['default'].createElement(hi.HiEmojiHappy, null);
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
    var apew = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "Topics");
    return apew;
  } // 1topics


  var topicos = {
    name: "topic",
    iconvar: "🏷️",
    titlevar: oksaw(),
    inputFunction: KnwBs // inputObjectFunction: KnwBs,

  };

  var sdifr = //
  // htr();
  "Playlists"; // 1playlist

  var dsifwqeq = {
    name: "playlist",
    iconvar: "📚",
    titlevar: sdifr,
    // addFunc: () => addNew(1),
    sameLine: "",
    // inputObj: PlayaFinso,
    // inputFunction: osadease,
    inputFunction: PlayaFinso
  };

  function SpekaFind(asdfewr) {

    var ijasew = _objectSpread2(_objectSpread2({}, asijew), asdfewr);

    _.logs.logga("___  altModel KNOWLEDGE ___", ijasew);
    return SearchPeople(ijasew);
  } // 1speaker 1people


  var sprkOR = {
    //
    name: "speakers",
    iconvar: "🧑‍🤝‍🧑",
    // required: true,
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
    rows: 2,
    inputType: "textarea"
  }; // 1name FORM

  var ijawewaw = _objectSpread2({
    //
    autoFocus: true,
    required: true,
    mustHave: true,
    name: "name",
    // noExpand: true,
    noTitle: true
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
        fontSize: "16px",
        margin: "0 10px"
      }
    };
    var bodfge = /*#__PURE__*/React__default['default'].createElement("div", okasde, BearIcon("quoteLeft", jsada), obios, BearIcon("quoteRight", jsada));
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
      margin: "30px 0"
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

function LoginModal(_ref) {
  var topObj = _ref.topObj;
      _ref.okdsew;
      var loginFunc = _ref.loginFunc,
      logoConfig = _ref.logoConfig,
      args = _objectWithoutProperties(_ref, ["topObj", "okdsew", "loginFunc", "logoConfig"]);

  // 1context
  var signupConfig = {}; //   const { signupConfig } = useContext(AuthContext);

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      deetComplete = _useState2[0];
      _useState2[1];

  var _useState3 = React.useState(""),
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
      _.logs.logga("___ LoginMod CONNECT ___", type);
      _.userConnect(type, loginFunc);
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
    React__default['default'].createElement(BearAuthPortal, oake);
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
    var dafokewr = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(BearDiv$1, dvmdft), /*#__PURE__*/React__default['default'].createElement(Bsaeo, null));
    return dafokewr;
  }

  var sdokew = //
  deetComplete ? /*#__PURE__*/React__default['default'].createElement(Altios, null) : /*#__PURE__*/React__default['default'].createElement(SignitDone, null);
  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, sdokew);
  var oksae = {
    // fontSize: "10px",
    textAlign: "center"
  };
  args = _objectSpread2(_objectSpread2({
    obj: okfdsd,
    style: oksae
  }, signupConfig), args);
  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, args);
}

function AlterUserCheck(_ref) {
  var loginConfig = _ref.loginConfig,
      noLogin = _ref.noLogin,
      userObj = _ref.userObj,
      loadUser = _ref.loadUser,
      obj = _ref.obj,
      args = _objectWithoutProperties(_ref, ["loginConfig", "noLogin", "userObj", "loadUser", "obj"]);

  // 1const
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  function UserJoin() {
    var idsawe = _objectSpread2(_objectSpread2({}, loginConfig), {}, {
      style: _objectSpread2({
        fontSize: "1.2em"
      }, loginConfig && loginConfig.style)
    });

    var noaieq = //
    // "sadfower";
    LoginModal(idsawe);
    return noaieq;
  }

  var okfdsd = loadUser ? "LOADING" : userObj ? obj : !noLogin && /*#__PURE__*/React__default['default'].createElement(UserJoin, null);
  args = _objectSpread2({
    obj: okfdsd
  }, args);
  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, args);
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

function ModelPanel(_ref) {
  var typevar = _ref.typevar;
      _ref.newFunc;
      var asdokwe = _objectWithoutProperties(_ref, ["typevar", "newFunc"]);

  var dgeir = //
  asdokwe.name; // `Created ${saewase}: '${asdokwe.name}'`;

  var osade = _.getBlankLink(_.modelLink(typevar, asdokwe, "edit"));

  var ksaecv = _objectSpread2(_objectSpread2({}, osade), {}, {
    obj: dgeir,
    style: {
      marginBottom: "20px"
    }
  });

  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Divo, ksaecv));
  var args = {
    obj: okfdsd,
    style: {
      fontSize: "24px"
    } // ...args,

  }; //   return okfdsd;

  return /*#__PURE__*/React__default['default'].createElement(Divo, args);
}

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
      var modelStage = _ref.modelStage,
      savePanelTrue = _ref.savePanelTrue,
      formConfig = _ref.formConfig;
      _ref.noExtraModels;
      var args = _objectWithoutProperties(_ref, ["typevar", "formObj", "noSave", "aboveLoad", "topObj", "fontSize", "titleConfig", "loadConfig", "loadTrue", "userObj", "onSubmit", "submitLink", "noJump", "noOtherList", "modelStage", "savePanelTrue", "formConfig", "noExtraModels"]);

  // 1context
  //   const { SaveUser, userObj } = useContext(AuthContext);
  // function subios()
  // 1const
  // 1baseArgs
  var baseArgs = {
    typevar: typevar
  }; // 1load

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      loadSave = _useState2[0],
      setloadSave = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      emoStto = _useState4[0],
      setemoStto = _useState4[1];

  var _useState5 = React.useState(modelStage),
      _useState6 = _slicedToArray(_useState5, 2),
      currStage = _useState6[0],
      setcurrStage = _useState6[1];


  var jasmoji = {
    onClick: setemoStto,
    chosenItem: emoStto
  };

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2);
      _useState8[0];
      _useState8[1];

  var _useState9 = React.useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      playCreate = _useState10[0],
      setplayCreate = _useState10[1];

  var oksae = _objectSpread2(_objectSpread2({}, formConfig), {}, {
    userObj: userObj,
    emojiConfig: jasmoji,
    modelCreateFunc: setplayCreate
  }, args);

  var sdoew = _objectSpread2({}, AlterModelConst(oksae)); // 1history


  var history = reactRouterDom.useHistory();

  function logsaid(aodkwe, asdjew) {
    _.logs.logga(typevar + "___ AltModel__" + aodkwe, asdjew);
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

      if (savePanelTrue) {
        setcurrStage("save");
      }
    }
  } // 1function

  function secSub(ijdsfe) {
    _.logs.logga("___ AlrModel fitsUBMIT bbbb___", ijdsfe);

    if (noSave) {
      subAfter(ijdsfe);
    } else {
      setloadSave(true);
      _.SaveUser(typevar, userObj, ijdsfe, subAfter);
    }
  }

  function firstsUBMIT(_ref2) {
    var playlist = _ref2.playlist,
        topic = _ref2.topic,
        otherTitles = _ref2.otherTitles,
        speakers = _ref2.speakers,
        asewe = _objectWithoutProperties(_ref2, ["playlist", "topic", "otherTitles", "speakers"]);

    //
    var oksaew = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, asewe), mapSelectEnd("speakers", speakers)), mapSelectEnd("topic", topic)), mapSelectEnd("playlist", playlist)), mapSelectEnd("otherTitles", otherTitles)), {}, {
      emoji: emoStto
    });

    _.logs.logga("___ AltModel SUBMIT ___", oksaew);
    secSub(oksaew);
  } // 1submit 1onsubmit

  var asdowe = //
  // fdogkdf;
  firstsUBMIT;

  var lisComplo = _objectSpread2(_objectSpread2({}, sdoew), {}, {
    onSubmit: asdowe // ...ifders,

  });

  function ShwChabe() {
    //
    var ijsdwe = _objectSpread2({}, loadConfig);

    return /*#__PURE__*/React__default['default'].createElement(LoadMain, ijsdwe);
  } // 1console


  _.logs.logga("___ AlterMod ___", oksae);
  _.logs.logga("___AlterModel lComplo ___", {
    userObj: userObj,
    lisComplo: lisComplo
  });
  var mskesdf = "";

  switch (currStage) {
    case "save":
      var iksfer = _objectSpread2(_objectSpread2({}, baseArgs), {}, {
        newFunc: function newFunc() {
          return setcurrStage();
        } // listvar:

      });

      mskesdf = /*#__PURE__*/React__default['default'].createElement(ModelPanel, iksfer);

    default:
      // 1form
      var asdokwe = /*#__PURE__*/React__default['default'].createElement(BearForm, lisComplo);
      mskesdf = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, topObj, asdokwe);
  }

  _objectSpread2(_objectSpread2({}, oksae), {}, {
    obj: mskesdf,
    slideNumber: playCreate
  }); // mskesdf = AlterSide(asesae);


  var okasde = //
  loadSave || loadTrue;
  var iewqas = //
  okasde ? /*#__PURE__*/React__default['default'].createElement(ShwChabe, null) : mskesdf;
  var sdgfre3 =
  /*#__PURE__*/
  //
  // asdokwe;
  React__default['default'].createElement(AlterUserCheck, _extends({}, oksae, {
    obj: iewqas
  }));
  return sdgfre3;
}

function MediaTypeChoose(_ref) {
  var _ref$mediaType = _ref.mediaType,
      mediaType = _ref$mediaType === void 0 ? "book" : _ref$mediaType;
      _ref.typeChooseFunc;
      var mediaChooseFunc = _ref.mediaChooseFunc,
      media = _ref.media;
      _ref.obj;
      var args = _objectWithoutProperties(_ref, ["mediaType", "typeChooseFunc", "mediaChooseFunc", "media", "obj"]);

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
    var mediaList = _.moveItemFront(sdfwe, mediaType);
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

    var _useState = React.useState(false),
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
      var difjsr = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, iconvar, " ", textvar);

      function setios() {
        // setmediaType(itemType)
        chooseFunc(itemType);
      }

      var isdese = {
        obj: difjsr,
        onClick: setios
      };
      var sdfere = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, isdese);
      return /*#__PURE__*/React__default['default'].createElement(reactstrap.DropdownItem, null, sdfere);
    }

    var okadsew = {
      listvar: mediaList,
      dictvar: saeasew,
      renderItem: rendo
    }; // const dkfjf = "aokdsa";

    var dkfjf = /*#__PURE__*/React__default['default'].createElement(BearList, okadsew); // const dkfjf = mediaList.map((asoew) => rendo(saeasew[asoew]));

    var okasdew = /*#__PURE__*/React__default['default'].createElement(reactstrap.Dropdown, sdfjkre, /*#__PURE__*/React__default['default'].createElement(reactstrap.DropdownToggle, ioaew, okaew.iconvar), /*#__PURE__*/React__default['default'].createElement(reactstrap.DropdownMenu, null, dkfjf));
    return okasdew;
  }

  function Linkio() {
    var oewqw = //
    // "";
    BearIconText("link", media && media.name); // formData?.title;

    var oksadw = {
      obj: oewqw,
      fontSize: "16px",
      className: "wrapTrue",
      linkvar: media && media.webLink,
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
    React__default['default'].createElement(BearDiv$1, oksadw);
    return oaswe;
  }

  function MediaShow() {
    var sdkjwr = //
    Linkio();
    var ijsdfse = {
      obj: sdkjwr,
      onClick: mediaChooseFunc
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, ijsdfse);
  }

  var medChck = //
  MediaShow();
  var xcijgdt = [
  /*#__PURE__*/
  //
  React__default['default'].createElement(ItemOver, null), medChck];

  var nbaseao = _objectSpread2({
    listvar: xcijgdt,
    padvar: "30px"
  }, args); // return "sdew";
  // return <BearFloat {...reuthw} />;
  // return <BearFloat {...reuthw} />;


  return /*#__PURE__*/React__default['default'].createElement(BearFlex, nbaseao);
}

function TimeButtons(_ref) {
  var webTrue = _ref.webTrue,
      changePlayerTime = _ref.changePlayerTime,
      getCurrentTime = _ref.getCurrentTime,
      trackingTrue = _ref.trackingTrue;
      _ref.showTime;
      var bothFunc = _ref.bothFunc,
      startTime = _ref.startTime;
      _ref.titleConfig;
      var endTime = _ref.endTime,
      startFunc = _ref.startFunc,
      endFunc = _ref.endFunc,
      buttonConfig = _ref.buttonConfig,
      args = _objectWithoutProperties(_ref, ["webTrue", "changePlayerTime", "getCurrentTime", "trackingTrue", "showTime", "bothFunc", "startTime", "titleConfig", "endTime", "startFunc", "endFunc", "buttonConfig"]);

  // 1MainContext
  //   const { changePlayerTime, getCurrentTime } = useContext(PlayContext);
  //   const { aaa } = useContext(MainContext);
  // 1const
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      recordTime = _useState4[0],
      setrecordTime = _useState4[1]; // 1duration


  var ksdew = _.getDuration(startTime, endTime);
  var decDone = _.timeDecim(ksdew);

  var trackTrue = //
  trackingTrue; // recordTime;
  // trackStart
  // startTime && !endTime;
  // trackStart && !endTime

  function getTimeo(aspecto, timeo) {
    var timeea = timeo ? timeo : webTrue ? _.getWebCurrentTime() : getCurrentTime(); //
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
    _.logs.logga("___ timButtons ONCLICK ___", dsdfwer);
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
    var duritObj = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, _extends({
      spanTrue: true
    }, duriso));
    var trackTimemess = //
    "Tracking..."; // "Setting"

    var asidjew = //
    // "ASDWQQW"
    BearIconText("play", duritObj);
    var disoes = //
    // true
    !endTime;

    function chanPlay() {
      if (webTrue) {
        //
        _.changeWebPlayerTime(startTime);
      } else {
        changePlayerTime(startTime);
      }
    }

    var askdwse = {
      disableTrue: disoes,
      // chakTrue: true,
      // style: { padding: "40px 0" },
      obj: trackTrue ? trackTimemess : asidjew,
      // bediaTrue: true,
      background: "darkgreen",
      butName: "playeButton",
      onClick: chanPlay
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

    _.logs.logga("___ asdw ___", asdw);
    var sadebd = {
      height: "60px",
      // minWidth: "130px",
      padding: "10px",
      margin: "0 20px",
      fontSize: "25px",
      textAlign: "center"
    };

    var sdifje = typeText;

    var okasedwe = _objectSpread2(_objectSpread2({
      // genConfig: kdsdqwe,
      obj: sdifje
    }, asdw), {}, {
      style: sadebd
    }, buttonConfig);

    _.logs.logga("___ tiebutt BUTTON OBJECT ___", okasedwe); // attr = "endTime";

    var ksaesdwe = //
    // "asokdewq";
    BearButton(okasedwe);
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
  _.logs.logga("timButton aaa LIST---", jasde); //   logs.logga("___ TimButton BBB ___", sgkjerw);

  var ewrqasa =
  /*#__PURE__*/
  //
  // "";
  React__default['default'].createElement(BearList, _extends({
    horiz: true
  }, jasde)); // <ImageTextDiv horiz {...jasde} />
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
  var mediaType = _ref.mediaType;
      _ref.chooseConfig;
      var noTiming = _ref.noTiming,
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

    _.logs.logga("___ TieButtons ___", dfkgret);
    var ijsadwqe = /*#__PURE__*/React__default['default'].createElement(TimeButtons, dfkgret);
    var hutry = {
      obj: ijsadwqe
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, hutry);
  }

  var ijaase = //
  ""; // ChooseIo();
  //   1timing

  var timeNotTrue = //
  // "";
  // true;
  _.mediaTypeTrue(mediaType) && !noTiming;
  var sfdgre = timeNotTrue && ButtoTop();
  var asidwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ijaase, sfdgre);
  var fsdfs = {
    obj: asidwe,
    style: {
      marginBottom: "20px"
    } // ...args,

  };
  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, fsdfs);
}

function AlterHighlight(_ref) {
  var overObj = _ref.overObj,
      onSubmit = _ref.onSubmit;
      _ref.seriesObj;
      var addPlaylist = _ref.addPlaylist;
      _ref.mediaList;
      _ref.saveToMedia;
      _ref.newUser;
      var timeConfig = _ref.timeConfig,
      args = _objectWithoutProperties(_ref, ["overObj", "onSubmit", "seriesObj", "addPlaylist", "mediaList", "saveToMedia", "newUser", "timeConfig"]);

  // 1const
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      trueInd = _useState2[0],
      settrueInd = _useState2[1]; // const {data, isLoading, error} = useQuery(addHighlights())


  var media = overObj && overObj.media; // const vbnd = overObj?.startTime;
  // const asidjw = overObj?.endTime;

  var dfoke = //
  ""; // vbnd;
  // vbnd ? vbnd : 0;

  var _useState3 = React.useState(dfoke),
      _useState4 = _slicedToArray(_useState3, 2),
      staro = _useState4[0],
      setstaro = _useState4[1];

  var okfgrer = //
  ""; // noEnd ? "" : asidjw ? asidjw : staro + 30;

  var _useState5 = React.useState(okfgrer),
      _useState6 = _slicedToArray(_useState5, 2),
      endklp = _useState6[0],
      setendklp = _useState6[1]; // 1type


  var typeia = //
  // "video";
  media && media.mediaType;

  var _useState7 = React.useState(typeia),
      _useState8 = _slicedToArray(_useState7, 2),
      mediaVary = _useState8[0],
      setmediaVary = _useState8[1];

  reactRouterDom.useHistory();

  var newHgho = _objectSpread2(_objectSpread2({}, overObj), {}, {
    startTime: staro,
    endTime: endklp
  });

  var linkGo = //
  media && "/m/".concat(media.slugURL, "/highlights"); // linkGo =
  // 1submit 1save

  function Vcbod0e(dsofkwr) {
    //
    var asidjwe = {
      DATA: dsofkwr,
      PAGE_LINK: linkGo,
      SUBMITFUNC: onSubmit
    };
    _.logs.logga("___ AlteHighlights submit FINAL ___", asidjwe); // if (saveToMedia) {
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
    media: media
  }; // // 1console

  _.logs.logga("___ FORM BASE ITEMS ___", newHgho);
  media && _.joinString( //
  [media.name //
  // "(" + ijsewe + ")",
  ], " ");

  var _useState9 = React.useState("y"),
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

    _.logs.logga("___ Alterhighligt SUBMIT FIRST ___", ijew);
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
      _.logs.logga("___ altHigh TIMBUTTON StartFunc ___", fdkgwer);
      setstaro(fdkgwer);
      setendklp();
    }

    var oaksde = _objectSpread2({
      startFunc: sfde,
      endFunc: setendklp,
      startTime: staro,
      endTime: endklp,
      trackingTrue: staro && !endklp
    }, timeConfig);

    _.logs.logga("AltHigh TimeConfig---", oaksde);
    var ywers = {
      typeChooseFunc: setmediaVary,
      mediaChooseFunc: function mediaChooseFunc() {
        return settrueInd(2);
      }
    };

    var cvbokf = _objectSpread2(_objectSpread2({
      chooseConfig: ywers,
      timeConfig: oaksde
    }, baseArgs), args); // 1type


    _.logs.logga("___ altHigh MediaTyTime ___", cvbokf); // 1timebuttons

    var fdjeaw = //
    // "";
    MediaTypeTime(cvbokf);
    return fdjeaw;
  }

  var ijaase = /*#__PURE__*/React__default['default'].createElement(ChooseIo, null);
  var asidwe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, ijaase); // 1list

  var baseList = [//
  "emoji", "name", "quote", "speaker"];
  var okdss = addPlaylist ? ["emoji", // "name",
  "topic"] : [].concat(baseList);

  function altBase(baseOss) {
    var vcokge = _objectSpread2(_objectSpread2(_objectSpread2({
      // toplist: ndsokewr,
      // aboveLoad:
      typevar: _.indexHighlights,
      itemConfig: ovkb0e,
      // noSave: true,
      submitExtra: sdhfe
    }, baseOss), baseArgs), args);

    var sfisre = /*#__PURE__*/React__default['default'].createElement(AlterModel, vcokge);
    return sfisre;
  } // 1form

  function subOne(cvxobkfdg) {
    _.logs.logga("___ subOne ___", cvxobkfdg);
    settrueInd(1);
  } // 1list 1carousel


  var listOne = {
    topObj: asidwe,
    listvar: baseList,
    formid: "highaltone",
    onSubmit: subOne,
    noSave: true,
    noJump: true
  };
  var listAll = {
    topObj: asidwe,
    listvar: okdss,
    formid: "highaltone",
    onSubmit: idjew
  };

  function NoAddoIt() {
    var nsdifjwr = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, asidwe, "NO MEDIA ITEM HERE");
    var fdhgrw = {
      obj: nsdifjwr
    };
    return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, fdhgrw);
  }

  function CarosStart() {
    var firstO = altBase(listAll);
    var niase = [// letPlaio, sfisre
    firstO, altBase(listOne) // ChooseMedList(),
    ];
    var sdokfr = {
      listvar: niase,
      slideNum: trueInd
    };
    var sdfsre = /*#__PURE__*/React__default['default'].createElement(BearCarousel, sdokfr);
    return sdfsre;
  }

  var okadse = //
  media ? CarosStart() : NoAddoIt(); // CarosStart();
  // addPlaylist ? <CarosStart /> : sfisre;

  var fdjgirt = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, okadse);
  args = _objectSpread2({
    obj: fdjgirt
  }, args);
  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, args);
}

function NewHighlight(_ref) {
  _ref.linkDetails;
      _ref.findLink;
      var media = _ref.media,
      overObj = _ref.overObj,
      formConfig = _ref.formConfig;
      _ref.genConfig;
      var args = _objectWithoutProperties(_ref, ["linkDetails", "findLink", "media", "overObj", "formConfig", "genConfig"]);

  // 1const
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _ref2 = //
  "",
      medMain = _ref2.data,
      lodMed = _ref2.loading; // linkDetails ? QueryNode("fetch-media", linkDetails) : "";

  var sdfkwe = _objectSpread2(_objectSpread2({}, _.getFirstArr(medMain)), media);

  overObj = _objectSpread2(_objectSpread2({}, overObj), {}, {
    media: sdfkwe
  });
  var _ref3 = //
  "",
      similarHighs = _ref3.data,
      lodOther = _ref3.isLoading; // getHighsSameMedia(overObj);

  var anyHighs = _.checkFullArray(similarHighs);

  function HighFetch() {
    var asdweawe = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
    return asdweawe;
  }

  function PostBott() {
    var kadwe = {
      obj: anyHighs ? /*#__PURE__*/React__default['default'].createElement(HighFetch, null) : "",
      style: {
        marginTop: "50px"
      }
    };
    var ikawes = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, kadwe);
    return ikawes;
  }

  function JoinComment() {
    var sfdgret = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, "Join Bedia to start making Clips.");
    var vffdg = {
      obj: sfdgret,
      style: {
        paddingBottom: "20px"
      }
    };
    var lkdsq = /*#__PURE__*/React__default['default'].createElement(BearDiv$1, vffdg);
    return lkdsq;
  }

  function MainForm() {
    var loksdass = {
      loginConfig: {
        topObj: /*#__PURE__*/React__default['default'].createElement(JoinComment, null),
        style: {
          padding: "0 10%"
        },
        logoConfig: {
          imagesize: 40
        }
      }
    };

    var koase = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, loksdass), {}, {
      loadTrue: lodMed
    }, formConfig), args), {}, {
      mediaList: sdfkwe,
      overObj: overObj
    });

    var vbuhd = //
    // "sawqe";
    AlterHighlight(koase);
    return vbuhd;
  }

  var awewadw = //
  !lodOther && /*#__PURE__*/React__default['default'].createElement(PostBott, null);
  var okfdsd = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(MainForm, null), awewadw); // 1console

  var sdfjww = {
    //
    MEDIA: medMain
  };
  _.logs.logga("___ NEWw-HIGHLGIHT ___", sdfjww);
  var ijsdq = {
    obj: okfdsd // ...genConfig,

  }; //

  return /*#__PURE__*/React__default['default'].createElement(BearDiv$1, ijsdq);
}

function BearCreditCard(_ref) {
  var genConfig = _ref.genConfig,
      formConfig = _ref.formConfig,
      args = _objectWithoutProperties(_ref, ["genConfig", "formConfig"]);

  // 1const
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      cvcCard = _useState2[0],
      setcvcCard = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      expiryCard = _useState4[0],
      setexpiryCard = _useState4[1];

  var _useState5 = React.useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      numberCard = _useState6[0],
      setnumberCard = _useState6[1];

  var _useState7 = React.useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      focusedCard = _useState8[0];
      _useState8[1];

  var _useState9 = React.useState(""),
      _useState10 = _slicedToArray(_useState9, 2),
      nameCard = _useState10[0],
      setnameCard = _useState10[1];

  var ijae = {
    cvc: cvcCard,
    expiry: expiryCard,
    focused: focusedCard,
    name: nameCard,
    number: numberCard
  };

  function FormGo() {
    // 1number
    var nuneias = {
      name: "cardnumber",
      titlevar: "Card Number",
      onChange: setnumberCard
    }; // 1expiry

    var adsfoker = {
      name: "expiry",
      titlevar: "Expiry Date",
      onChange: setexpiryCard
    }; // 1cvc

    var niswes = {
      name: "cvc",
      titlevar: "CVC Number",
      onChange: setcvcCard
    }; // 1name

    var sijfeww = {
      name: "name",
      titlevar: "Card Name",
      onChange: setnameCard
    }; // 1listvar

    var lstcard = [//
    "number", "name", "expiry", "cvc"]; // 1dictvar

    var aijewe = {
      name: sijfeww,
      number: nuneias,
      cvc: niswes,
      expiry: adsfoker
    };

    _objectSpread2({
      formid: "sdfiew",
      dictvar: aijewe,
      sameLine: true,
      listvar: lstcard
    }, formConfig);

    var ogertew = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, BearInput(aijewe["number"]), BearInput(aijewe["name"]));
    return ogertew; // return <BearForm {...ijase} />;
  }

  var okfdsd = /*#__PURE__*/React__default['default'].createElement("div", genConfig, /*#__PURE__*/React__default['default'].createElement(Cards__default['default'], ijae), FormGo());
  var weyrw = [
  /*#__PURE__*/
  //
  React__default['default'].createElement(Cards__default['default'], ijae), /*#__PURE__*/React__default['default'].createElement(FormGo, null)];
  args = _objectSpread2({
    listvar: weyrw,
    horiz: true,
    typeList: "return"
  }, args); // const sdfogkret = (<>
  //   //
  //   // <BearDiv {...args} />;
  //   // <BearList {...args} />
  // </>

  return okfdsd;
}

exports.AlterHighlight = AlterHighlight;
exports.AlterModel = AlterModel;
exports.BearAuthPortal = BearAuthPortal;
exports.BearButton = BearButton;
exports.BearCarousel = BearCarousel;
exports.BearCheckout = BearCheckout;
exports.BearCodePreview = BearCodePreview;
exports.BearContextProvider = BearContextProvider;
exports.BearCreditCard = BearCreditCard;
exports.BearDiv = BearDiv$1;
exports.BearDuration = BearDuration;
exports.BearEmoji = BearEmoji;
exports.BearError = BearError;
exports.BearFlex = BearFlex;
exports.BearFloat = BearFloat;
exports.BearForm = BearForm;
exports.BearIcon = BearIcon;
exports.BearIconText = BearIconText;
exports.BearList = BearList;
exports.BearSearchList = BearSearchList;
exports.BearSelect = BearSelect;
exports.BearSocial = BearSocial;
exports.BearTags = BearTags;
exports.BearTextMedia = BearTextMedia;
exports.BearTitle = BearTitle;
exports.CopyMain = CopyMain;
exports.Exmapl = Exmapl;
exports.ImageAlign = ImageAlign;
exports.ImageGroup = ImageGroup;
exports.InputForm = InputForm;
exports.InputMain = InputMain;
exports.ListFlex = ListFlex;
exports.ListReturn = ListReturn;
exports.LoadMain = LoadMain;
exports.MediaTypeChoose = MediaTypeChoose;
exports.NewHighlight = NewHighlight;
exports.PagePad = PagePad;
exports.SliderMain = SliderMain;
exports.TimeButtons = TimeButtons;
exports.linkBase = linkBase;
exports.logs = logFuncs;
//# sourceMappingURL=index.cjs.js.map
