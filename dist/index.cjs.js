'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function BigButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React__default['default'].createElement("button", aswe, "Another big BUTTON me bedia");
  return okaew;
}

function HiButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React__default['default'].createElement("button", aswe, "Hi From the Team!");
  return okaew;
}

function BeginButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React__default['default'].createElement("button", aswe, "Button Begin Team!");
  return okaew;
}

exports.BeginButton = BeginButton;
exports.BigButton = BigButton;
exports.HiButton = HiButton;
