import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";

let hBeautify = require("js-beautify").html;

import { BearDiv } from "../BearDiv";
import { argPass } from "../GlobalComps";

export function BearCodePreview({
  //
  code,
  list = ["code", "preview"],
  initCode,
  previewConfig = {},
  codeConfig = {},
  argConfig,
  genConfig,
  boxStyle,
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
    ...codeConfig,
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

  function fgokd({ style, ...dfsdf }) {
    const ifgtr = {
      ...boxStyle,
      ...style,
    };

    const ijdfgt = {
      style: ifgtr,
      ...dfsdf,
    };

    return ijdfgt;
  }

  const dgijr = fgokd(previewConfig);
  const sidfr = {
    ...dgijr,
    value: oksaaase,
    onBeforeChange: asisjde,
    onChange: asisjde,
    options: vndsf,
  };

  //   1editobj
  const editObjo =
    //
    "";
  // <CodeMirror {...sidfr} />;

  const figjret = {
    ...args,
    ...previewConfig,
    bordered: false,
    style: boxStyle,
  };

  //   1previe
  const sdfger =
    //
    "";
  // lodios ? "" : <CodePreview {...figjret} />;

  const sjkdae = {
    obj: sdfger,
    style: { padding: "2%" },
  };

  const sdfjser = {
    ...args,
    ...genConfig,
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

  const xcvsf =
    //
    "";
  // argConfig && <BearCodeArgs {...argConfig} />;

  const sidjfer = {
    code: editObjo,
    preview: prevObj,
  };

  const sdifj = list.map((asoas) => sidjfer[asoas]);

  const sdfisdr = (
    //
    <BearDiv {...argPass(sdfjser)}>
      {sdifj}
      {xcvsf}
      {/* <div {...oksde}>{editObjo}</div>
      <div style={{ width: "50px" }}>-</div>
      <div {...oksde}>{prevObj}</div> */}
      {/* <BearList typeList="return" horiz list={isajae} /> */}
    </BearDiv>
  );

  return sdfisdr;
}
