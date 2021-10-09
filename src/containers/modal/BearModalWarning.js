import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearModal } from "./BearModal";
import { BearDiv } from "../../components/BearDiv";
import { BearButtonList } from "../../importBase";
// import { BearButtonList } from "../../components/lis

export function BearModalWarning({
  open,
  children,
  //
  //
  seriesObj,
  onCancel,
  onConfirm,

  message,
  confirmConfig,
  cancelConfig,
  //   buttonConfig,
  ...args
}) {
  // 1const

  // const [setto, setsetto] = useState(open);

  const dgifsad = {
    confirm: {
      onClick: onConfirm,
      ...confirmConfig,
    },
    cancel: {
      style: {
        color: "black",
        background: "transparent",
        ...BearBorder("darkblue", "5px"),
      },
      onClick: onCancel,
      textvar: "Cancel",
      ...cancelConfig,
    },
  };

  const cvxbfdg = {
    list: ["confirm", "cancel"],
    dictvar: dgifsad,
    horiz: true,
    bearName: "buttonGo",
    itemConfig: {
      style: {
        fontSize: "20px",
      },
    },
  };

  const dfigjrt = {
    style: { height: "50vh" },
  };

  const cvofdd = (
    <>
      {/*  */}
      <BearDiv {...dfigjrt}>{message}</BearDiv>
      <BearButtonList {...cvxbfdg} />
    </>
  );

  const ijfgr = {
    style: {
      textAlign: "center",
      fontSize: "20px",
      padding: "3%",
    },
  };

  const okfdsd = (
    //
    // cvofdd;
    <div {...ijfgr}> {cvofdd}</div>
  );

  //   buttonConfig = {

  //   }

  args = {
    // message: okfdsd,
    open,
    // children,
    onClose: onCancel,
    ...args,
  };

  // return okfdsd;
  // return open ? okfdsd : children;
  return <BearModal {...args}>{okfdsd}</BearModal>;
}
