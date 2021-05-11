import React from 'react';

function BigButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React.createElement("button", aswe, "click asdij me bedia");
  return okaew;
}

function HiButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React.createElement("button", aswe, "Hi From the Team!");
  return okaew;
}

export { BigButton, HiButton };
