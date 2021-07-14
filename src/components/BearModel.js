import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "../index"
import { BearList } from "./list/BearList";
import { BearFloat } from "./BearFloat";
import { BearWarnDelete } from "../containers/globalContainers";
import { argMiss, argPass } from "./GlobalComps";
// import { BearDiv } from "./BearDiv";

export function BearModel({
  //
  iconListConfig,
  buttonConfig,
  children,
  dictvar,
  //
  //
  onEdit,
  onShare,
  onCancel,
  //
  onDelete,
  warnDelete,
  deleteConfig,
  //
  ...args
}) {
  // 1const

  const okfdsd = (
    <>
      {/*  */}
      {children}
    </>
  );

  function asdsade(asdf) {
    const dhfgr = {
      onDelete,
      ...deleteConfig,
    };

    // return asdf;
    return <BearWarnDelete {...dhfgr}>{asdf}</BearWarnDelete>;
  }

  const sidjfer = warnDelete
    ? {
        divContainer: asdsade,
      }
    : { onClick: onDelete };

  logs.logga("___ sidjfer ___", sidjfer);

  const isdfewr = {
    edit: { iconvar: "edit", textvar: "Edit", onClick: onEdit },
    share: { iconvar: "share", textvar: "Share", onClick: onShare },
    cancel: { iconvar: "close", textvar: "Cancel", onClick: onCancel },
    delete: {
      iconvar: "delete",
      textvar: "Delete",
      ...sidjfer,
      ...deleteConfig,
    },
  };

  const kmfase = {
    // noText: onlyIcons && true,
    ...buttonConfig,
  };

  const isdre = {
    bearName: "sodkwqe",
    list: ["delete"],
    horiz: true,
    typeList: "button",
    // ...iconConfig,
    dictvar: { ...isdfewr, ...dictvar },
    ...argMiss(args),
    itemConfig: kmfase,
  };

  const ijdwer = <BearList {...isdre} />;

  args = {
    leftobj: okfdsd,
    rightobj: ijdwer,
    noVertAlign: true,
    // floatConfi:
    ...argPass(args),
  };

  return <BearFloat {...args} />;
}
