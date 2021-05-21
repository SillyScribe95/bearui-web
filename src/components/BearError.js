import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "@SillyScribe95/bedia-shared/";

export function BearError(obj) {
  // 1const

  const okfdsd = (
    <>
      ERROR
      <br />
      {obj}
    </>
  );

  const adkease = {
    style: { background: "darkred", color: "white", textAlign: "center" },
    className: "bold",
    obj: okfdsd,
  };

  const okasew = <BearDiv {...adkease} />;
}
