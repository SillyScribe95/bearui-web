import React from 'react';

function BigButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React.createElement("button", aswe, "Another big BUTTON me bedia");
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

function BeginButton() {
  var aswe = {
    onClick: function onClick() {
      return console.log("saokdaw");
    }
  };
  var okaew = /*#__PURE__*/React.createElement("button", aswe, "Button Begin Team!");
  return okaew;
}

export { BeginButton, BigButton, HiButton };
