import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "bearui-web";
import { BearTabs } from "../list/BearTabs";
import { BearDiv } from "../BearDiv";
import { BearTable } from "../table/BearTable";
import { BearTabMain } from "../list/BearTabMain";
import { BearList } from "../list/BearList";
import { BearBorder } from "../GlobalComps";
import { BearSearchList } from "../../extra/search/BearSearchList";
import { vertAlign } from "../../consts/genStyle";

export function BearCodeArgs({
  //
  //   list,
  bearName = "",
  searchConfig = {},
  ...args
}) {
  // 1const
  const kjsdr = [
    //
    "name",
    "type",
    "description",
    // "default",
  ];

  const fugert = [
    //
    "name",
    "type",
    "description",
  ];

  const dfuhwee = {
    //
    name: "30vw",
    type: "30vw",
    description: "30vw",
  };

  const isjdfer = {
    bearName,
    ...args,
  };

  const vokfas = {
    layoutSpace: dfuhwee,
    // layoutStyle:
    layoutList: fugert,
  };

  logs.logga("___ bCodeArgs ___", vokfas);

  function BearLiBsae(asdf) {
    //
    //
    const dfhort = bearName + "argLine";

    const nmgfor = {
      ignoreNull: true,
      className: "pointer",
      style: {
        //
        // background: "red",
        textAlign: "left",
        margin: "5px",
      },
    };

    const dfijts = {
      name: { width: "110px" },
      type: { width: "70px" },
      description: {
        maxWidth: "20vw",
      },
    };

    const sodkrse = {
      itemNameStyle: dfijts,
      itemConfig: nmgfor,
      bearName: dfhort,
      typeList: "div",
      style: {
        // marginTop: "10px",
        alignItems: "top",
        verticalAlign: "top",
      },
      // horiz: true,
      flex: true,
      ...asdf,
    };

    return <BearList {...sodkrse} />;
  }

  function BSarch() {
    //
    //

    function SAjdew({
      //
      defaultvar,
      required,
      name,
      type,
      description,
    }) {
      // 1name

      const iojdweas = required && (
        <BearDiv style={{ color: "red", marginRight: "5px" }}> *</BearDiv>
      );

      //
      // defaultvar = "true";
      const nisjfws = (
        <>
          <BearDiv style={{ fontWeight: "bold" }} flex>
            {name} {iojdweas}
          </BearDiv>
          {defaultvar &&
            BearDiv({
              style: { fontSize: "0.7em", color: "blue" },
              obj: <>default: {defaultvar}</>,
            })}
        </>
      );

      const ernMAE = {
        obj: nisjfws,
        style: {
          //
          // fontWeight: "bold",
          // color: "red",
          // width: "140px",
        },
      };

      const dfier = <>{type}</>;

      // 1type
      const ernTYP = {
        obj: dfier,
        style: {
          //
          // textAlign: "center",
          fontSize: "0.8em",
          fontStyle: "italic",
        },
      };

      // const ijsdwers = <BearCollapse

      // const [truCol, settruCol] = useState();

      // 1description
      const qweuase =
        //
        "";
      // "wrap";
      // "wrapTwo",

      const ernDSCRO = {
        obj: description,
        className: qweuase,
        style: {
          //
          fontSize: "0.9em",
          // color: "red",
          // width: "80%",
        },
      };

      const zxasd = {
        name: ernMAE,
        type: ernTYP,
        description: ernDSCRO,
      };

      const dfijgrt = {
        list: kjsdr,
        dictvar: zxasd,
      };

      function dgjwerw(adsfwe) {
        //

        logs.logga("___ adsfwe ___", adsfwe);
      }

      const ijfwerwe = {
        // className: "buttonHover",
        onClick: dgjwerw,
      };

      return (
        <BearDiv {...ijfwerwe}>
          <BearLiBsae {...dfijgrt} />
        </BearDiv>
      );
    }

    function BOver(adfer) {
      const nsdrsa = {
        // fsgjier
      };

      const ijrase = {
        clickObject: SAjdew(adfer),
        modalConfig: nsdrsa,
      };

      return SAjdew(adfer);
      // return <BearModal {...ijrase}></BearModal>
    }

    const jdfgre = [
      //
      "name",
      // "type",
      "description",
      "tags",
    ];

    const dijgf = {
      // background: "red",
      // ...vertAlign,
    };

    const formatOptionLabel = ({ value, label, customAbbreviation }) => (
      <div style={{ display: "flex" }}>
        <div>{label}</div>
        <div style={{ marginLeft: "10px", color: "#ccc" }}>
          {customAbbreviation}
        </div>
      </div>
    );

    function sdokfrew(asfdgokrewr) {
      logs.logga("___ CODE ARGS ITEM ___", asfdgokrewr);
    }

    const idfjg = {
      ...isjdfer,
      ...searchConfig,
      // headerAtts: true,
      bearName: bearName + " _codeArgList_ ",
      logItem: true,
      onChange: sdokfrew,
      noOptionBorder: true,
      noMenuBorder: true,
      renderItem: BOver,
      searchAttrs: jdfgre,
      style: dijgf,
      logtrue: true,
      onChangeSetValue: false,
    };

    logs.logga("___  idfjg ___", idfjg);

    return <BearSearchList {...idfjg} />;
  }

  const dfigjer = {
    //
    // textAlign: "left",
    fontWeight: "bold",
    fontSize: "1.2em",
  };

  const jsdr = {
    list: kjsdr,
    itemStyle: dfigjer,
    capitaliseTypeText: true,
    pullDictItem: true,
    typeList: "return",
  };

  const sijder =
    //
    "";
  // attrHeaders &&  <BearLiBsae {...jsdr} />

  const okfdsd = (
    <>
      {/*  */}
      {sijder}
      <BSarch />
      {/* <BearTable {...vokfas} /> */}
      {/* <BearTabMain {...vokfas} /> */}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
