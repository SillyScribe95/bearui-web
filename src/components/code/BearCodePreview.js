import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";

import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
// import "codemirror/theme/blackboard.css";
let hBeautify = require("js-beautify").html;

// import CodeMirror from "react-codemirror";
// import "codemirror/lib/codemirror.css";

// import CodeMirror from "@uiw/react-codemirror";
// import "codemirror/addon/display/autorefresh";
// import "codemirror/addon/comment/comment";
// import "codemirror/addon/edit/matchbrackets";
// import "codemirror/keymap/sublime";
// import "codemirror/theme/monokai.css";

import CodePreview from "@uiw/react-code-preview";
import { BearList } from "../list/BearList";
import { BearDiv } from "../BearDiv";

export function BearCodePreview({
  //
  code,
  initCode,
  previewConfig,
  codeConfig,
  ...args
}) {
  // 1const
  const [codeos, setcodeos] = useState(code);
  const [lodios, setlodios] = useState();

  const okfdsd = <>{/*  */}</>;

  args = {
    // showEdit: true,
    noCode: true,
    bgWhite: true,
    noPreview: false,
    code: codeos,
    ...args,
  };

  let zxcvdf = {
    // width: "150px",
    // height: "300px",
    // lineNumbers: true,
    tabSize: 10,
    mode: "javascript",
    theme: "blackboard",
    // extraKeys: { "Shift-Tab": autoFormatSelection },
  };

  const vndsf = {
    ...zxcvdf,
    // theme: "monokai",
    // keyMap: "sublime",
    // mode: "jsx",
    // mode: "javascript",
  };

  function sadkwe(zxcvsdf) {
    logs.logga("___ zxcvsdf ___", zxcvsdf);

    setlodios(true);
    setcodeos(zxcvsdf);
    setlodios(false);
  }

  function changeos(editor, data, value) {
    sadkwe(value);
  }

  function autoFormatSelection() {
    // console.log(code);
    let formatedHTML =
      //
      codeos;
    //   hBeautify(codeos, { indent_size: 2 });

    logs.logga("___ autoFormatSelection--- ___", {
      Beautify: formatedHTML,
    });

    // setcodeos(formatedHTML);
  }

  const asisjde =
    //
    // sadkwe
    changeos;

  const oksaaase =
    //
    // hBeautify(codeos, { indent_size: 2 });
    codeos;

  const sidfr = {
    value: oksaaase,
    onBeforeChange: asisjde,
    onChange: asisjde,
    options: vndsf,
  };

  const sdfjser = {
    style: {
      //   display: "flex",
    },
  };

  //   1editobj
  const editObjo = <CodeMirror {...sidfr} />;

  //   1previe
  const sdfger = lodios ? "" : <CodePreview {...args} />;

  const sjkdae = {
    obj: sdfger,
    style: { height: "40vh" },
  };

  const prevObj = <BearDiv {...sjkdae} />;

  const isajae = [
    //
    editObjo,
    prevObj,
  ];

  const oksde = {
    style: { width: "50%" },
  };

  const sdfisdr = (
    //
    <div {...sdfjser}>
      {prevObj}
      {editObjo}
      {/* <div {...oksde}>{editObjo}</div>
      <div style={{ width: "50px" }}>-</div>
      <div {...oksde}>{prevObj}</div> */}
      {/* <BearList typeList="return" horiz listvar={isajae} /> */}
    </div>
  );

  return sdfisdr;
}
