import React, {
  //
  useState,
  useContext,
} from "react";
import {
  logs,
  getBlankLink,
  modelLink,
  deleteModel,
} from "@SillyScribe95/bedia-shared/";
import { BearList } from "../../components/list/BearList";

export function ModelPanel({
  //
  typevar,
  newFunc,
  ...asdokwe
}) {
  let saewase =
    //
    typevar;
  //   getModelAtt(typevar, "title");

  let dgeir =
    //
    asdokwe.name;
  // `Created ${saewase}: '${asdokwe.name}'`;

  let osade = getBlankLink(modelLink(typevar, asdokwe, "edit"));

  const ksaecv = {
    ...osade,
    obj: dgeir,
    style: {
      marginBottom: "20px",
    },
  };

  function ChooseAltButs() {
    function saodwe() {
      deleteModel(typevar, asdokwe);
    }

    // 1share
    const oksadew = {};

    // 1edit
    const aspdsad = {
      bediaTrue: true,
      obj: iconText("edit", "Edit"),
      ...osade,
    };

    const ksdewsa = {
      textvar: "New",
      iconvar: "plus",
      className: "bedia",
      onClick: newFunc,
    };

    const oksaa = {
      undo: {
        background: "red",

        obj: BearIconText("delete", "Undo"),
        onClick: saodwe,
      },
      new: ksdewsa,
      undo: {
        obj: BearIconText("share", "Share"),
        // onClick:
      },
      edit: aspdsad,
    };

    logs.logga("___ model DICT GO ___", oksaa);

    const lkasew = [
      //
      "edit",
      // "share",
      "undo",
      //   "new",
    ];

    const fogsd = {
      list: lkasew,
      dictvar: oksaa,
      horiz: true,
      typevar: "button",
      itemConfig: {
        style: {
          fontSize: "1.1em",
          margin: "0 20px",
          padding: "10px 20px",
        },
        className: "buttonHover pointer",
      },
    };

    return <BearList {...fogsd} />;
  }

  function BaseAlt() {
    const ijsaewe = {
      typevar: typevar,
      formData: asdokwe,
    };

    const asdew =
      //
      "";
    // <AlterModel {...ijsaewe} />;

    return asdew;
  }

  const okfdsd = (
    <>
      {/*  */}
      <BearDiv {...ksaecv} />
      {/* <BaseAlt /> */}
      {/* <ChooseAltButs /> */}
    </>
  );

  const args = {
    obj: okfdsd,
    style: {
      fontSize: "24px",
    },
    // ...args,
  };

  //   return okfdsd;
  return <BearDiv {...args} />;
}
