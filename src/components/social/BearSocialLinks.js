import React, {
  //
  useState,
  useContext,
} from "react";

import { bearlog } from "../../index";
import { BearSocialBase } from "./BearSocialBase";

export function BearSocialLinks({
  //
  twitter,
  whatsapp,
  github,
  facebook,
  ...args
}) {
  // 1const

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  const isjdfer = {
    facebook,
    twitter,
    whatsapp,
  };

  function asdhwe(faes) {
    return {
      logtrue: true,
      outsideLink: faes,
      // link: faes
    };
  }

  const isjdre = {};
  for (const [key, value] of Object.entries(isjdfer)) {
    isjdre[key] = asdhwe(value);
  }
  // const isjdre = mapDictFunc(isjdfer, asdhwe);

  bearlog.lug("___ isjdre ___", isjdre);

  args = {
    dictvar: isjdre,
    ...args,
  };

  //   return "dkew";
  return <BearSocialBase {...args} />;
}
