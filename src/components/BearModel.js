import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../index";
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
  editConfig,
  onShare,
  shareConfig,
  onCancel,
  //
  onDelete,
  warnDelete,
  deleteConfig,
  //
  buttonLayout = "bottom",
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

  bearlog.lug("___ sidjfer ___", sidjfer);

  const isdfewr = {
    edit: { iconvar: "edit", textvar: "Edit", onClick: onEdit, ...editConfig },
    share: {
      iconvar: "share",
      textvar: "Share",
      onClick: onShare,
      ...shareConfig,
    },
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
  };

  const isdre = {
    bearName: "sodkwqe",
    list: ["delete"],
    typeList: "button",
    // ...iconConfig,
    dictvar: { ...isdfewr, ...dictvar },
    ...argMiss(args),
    // itemConfig: kmfase,
    ...buttonConfig,
  };

  // 1console
  bearlog.lug("___ brModel isdre ___", isdre);

  const ijdwer = <BearList {...isdre} />;

  args = {
    center: okfdsd,
    // right: ijdwer,
    [buttonLayout]: ijdwer,
    noVertAlign: true,
    // floatConfi:
    ...argPass(args),
  };

  return <BearFloat {...args} />;
}
