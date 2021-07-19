import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { BearDiv } from "../BearDiv";
import { BearList } from "../list/BearList";
import { BearBorder, BearUpper } from "../GlobalComps";

export function BearTable({
  //
  bearName,
  layoutSpace,
  layoutConfig,
  layoutList,
  topConfig,
  ...args
}) {
  //
  // 1const

  function sdfasd(xcvb, aokde) {
    const soksrs = layoutSpace ? layoutSpace[xcvb] : "50px";

    const dfigj = {
      textAlign: "center",
      //   ...BearBorder("black", "5px"),
      width: soksrs,
      ...aokde,
      // ...soksrs,
      // ...ijezx,
    };

    return { style: dfigj };
  }

  // 1top
  function TabListo({ itemConfig, ...fdfgase }) {
    //
    const ijezx = itemConfig && itemConfig.style;

    const jsfqe = {
      bearName,
      //   flex: true,
      horiz: true,
      //   itemConfig: sdfasd(),
      list: layoutList,
      ...fdfgase,
    };

    logs.logga("___ jsfqe ___", jsfqe);

    const ijsdfr = <BearList {...jsfqe} />;

    return ijsdfr;
  }

  function RendDone(xofksa) {
    logs.logga("___ xofksa ___", xofksa);

    function ofkewr(sdfer) {
      //
      const fgjfet = xofksa[sdfer];
      const jdfg = {
        obj: fgjfet,
        ...sdfasd(sdfer),
      };

      const fdijgre = {
        TYPE: sdfer,
        SPACE: layoutSpace,
        ...jdfg,
      };

      logs.logga("___ fdijgre ___", fdijgre);

      return <BearDiv {...jdfg} />;
    }

    const idjfger = {
      renderItem: ofkewr,
      bearName: bearName + "_Arguments",
    };

    return <TabListo {...idjfger} />;
  }

  function gfohkr(bmdfso) {
    logs.logga("___ bmdfso ___", bmdfso);

    const idsjer = {
      //
      color: "grey",
      fontSize: "1.32em",
    };

    const ksrsase = {
      obj: BearUpper(bmdfso),
      ...sdfasd(bmdfso, idsjer),
      //   ...sidjr,
    };
    return <BearDiv {...ksrsase} />;
    //   return "23423";
  }

  const sijfr = {
    renderItem: gfohkr,
    bearName: bearName + "_TITLES",
    // capitaliseTypeText: true,
    ...layoutConfig,
  };

  const vokfas = {
    ...args,
    bearName,
    renderItem: RendDone,
  };

  const okfdsd = (
    <>
      {/*  */}
      <TabListo {...sijfr} />
      <BearList {...vokfas} />
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
