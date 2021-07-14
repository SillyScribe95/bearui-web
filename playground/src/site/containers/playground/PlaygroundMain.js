import React, {
  //
  useState,
  useContext,
} from "react";
import * as bearies from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { codeDomString } from "../../components/PlaygroundGlobalComps";

export function PlaygroundMain({
  //

  ...args
}) {
  // 1const

  //   bearies;.
  const idfesa = {
    style: {
      width: "90vw",
      height: "90vh",
    },
  };

  const ijswes = `
  
  
  
  <BearDiv
    style={{
        color: "red",
        background: "blue"
    }}
  >
  Hi, I'm Panagiota
  </BearDiv>`;

  const nsidjfewr = codeDomString(ijswes);

  const ijfdewe = {
    ...idfesa,
    // codeConfig: idfesa,
    // previewConfig: idfesa,
    code: nsidjfewr,
    dependencies: { ...bearies },
  };

  const okfdsd = (
    <>
      {/*  */}
      <bearies.BearCodePreview flex {...ijfdewe} />
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <bearies.BearDiv {...args} />;
}
