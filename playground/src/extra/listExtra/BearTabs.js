import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "bearui-web";
import { Tab, TabList, Tabs, TabPanel, TabPanels } from "@chakra-ui/tabs";
import { BearListBase } from "./BearListBase";
import { argMiss, argPass, BearBorder, BearDivMain } from "../GlobalComps";
import { BearTextMedia } from "../BearTextMedia";
import { BearDiv } from "../BearDiv";
// import { listMap } from "../GlobalComps";

export function BearTabs({
  //
  noStretch,
  //   1tab
  styleTab,
  bottomContain,
  itemConfig,
  padTab,
  linkTrue,
  stepTrue,
  chosenItem,
  selectStyle,
  list,
  // onClick,
  ...argsas
}) {
  // 1const
  const [sdjwewqe, setsdjwewqe] = useState();

  const tabStSel = {
    color: "white",
    bg: "darkblue",
    background: "darkblue",
    ...selectStyle,
  };

  const tabStMa = {
    padding: "5px",
    margin: "0 " + padTab,
    ...BearBorder("grey", "5px"),
    width: "100%",
    //   border: "2px solid black",
    //   ...cvxkbmdf,
    ...styleTab,
    ...(itemConfig && itemConfig.style),
  };

  function PlusTabb({ style, ...adsaf }) {
    // logs.logga("___ PlusTabb ___", obj);
    // logs.logga("___ adsaf ___", adsaf);

    const endoasd = {
      // onClick: () => onClick(adsaf),
      _selected: tabStSel,
      //   ...obj,
      style: { tabStMa, ...style },
    };

    const xcvijf = {
      style: tabStMa,
    };

    const tablloss = (
      <>
        {/* {BearDivMain(adsaf, xcvijf)} */}
        <Tab {...endoasd}>
          {/*  */}
          {/* aaaaaaa */}
          {/* {adsaf} */}
          <BearTextMedia {...adsaf} />
        </Tab>
      </>
    );

    return tablloss;
  }

  const isdfwe = chosenItem && {
    defaultActiveKey: chosenItem,
    defaultIndex: chosenItem,
  };

  const sdf9jas = {
    // ...isdfwe,
    variant: "unstyled",
    isFitted: true,
    // isFitted: !noStretch,
    // orientation: "horizontal",
  };

  function sdjwe(dofkwe) {
    logs.logga("___ dofkwe ___", dofkwe);
  }

  const isdjfre = {
    chosenConfig: {
      style: tabStSel,
    },
    itemConfig: {
      ...itemConfig,
      style: tabStMa,
      className: "pointer",
    },
  };

  function sdijfwe(okbfg) {
    logs.logga("___ sdjwe ___", okbfg);
  }

  const ijasdwe = {
    renderItem: PlusTabb,
    // containFunc: PlusTabb,
    missName: "BearTabs",
    horiz: true,
    // typeList: "button",
    logtrue: true,
    chosenItem,
    // ...isdjfre,
    ...argsas,
    // onClick: sdijfwe,
  };

  const clmvgf = BearListBase(list, argMiss(ijasdwe));

  function SAanwe() {
    //
    function aisdfr(aisdfr, aisdj) {
      logs.logga("___ aisdfr, aisdj ___", aisdfr, aisdj);

      const sadig = (
        <TabPanel>
          {/*  */}
          {aisdfr}
        </TabPanel>
      );

      return sadig;
    }

    function fdokrfg({ item, ...ssdaf }) {
      // logs.logga("___ ssdaf ___", ssdaf);

      return item;
    }

    const dfijger = {
      containFunc: aisdfr,
      renderItem: fdokrfg,
      bearName: "bearttabs ",
      ...argsas,
    };

    // const clmvgf = BearListBase(list, argMiss(dfijger));

    const icjfwer = <>{/* {bottomContain.()}</TabPanels> */}</>;

    return icjfwer;
  }

  const vckbfdsf = (
    <>
      {/* {clmvgf} */}
      <Tabs {...sdf9jas}>
        <TabList
        //
        // {...endai}
        >
          {clmvgf}
        </TabList>
        {bottomContain()}
        {/* {bottomContain && SAanwe()} */}
      </Tabs>
    </>
  );

  return <BearDiv {...argPass(ijasdwe)}>{vckbfdsf}</BearDiv>;
}
