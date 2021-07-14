import React, {
  //
  useState,
  useContext,
} from "react";

import {
  BearCarousel,
  BearList,
  BearButton,
  BearDiv,
  BearTabMain,
  BearTabs,
  BearFloat,
  BearEmoji,
  BearSocialShare,
  BearSelect,
  BearFlex,
  BearTitle,
  BearSearchList,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearCreditCard,
  BearForm,
  NewHighlight,
  HiButton,
  BearError,
  BearCodePreview,
  BearIcon,
  TimeButtons,
} from "bearui-web";

import { bearConstDict } from "../../const/bearConst";
import { SearchBearItem } from "../../components/SearchBearItem";
import { ExploCode } from "./ExploCode";
import { ExploStories } from "./ExploStories";
import { ExploForum } from "./ExploForum";
import { ExploArgs } from "./ExploArgs";
import { useHistory } from "react-router-dom";

export function ExploreBear({
  //
  typeComp = "div",
  typeTab = "args",
  ...iksase
}) {
  let history = useHistory();

  const [setto, setsetto] = useState(typeTab);

  function erotea(type, ivjsdf) {
    const ndfigjer = typeof ivjsdf;
    const stringo = ndfigjer == "string";

    if (stringo) {
      sfdgr(type, ivjsdf);
    }
  }

  function sfdgr(type, ivjsdf) {
    let dsfecv;
    switch (type) {
      case "type":
        dsfecv = "/explore/" + ivjsdf;
        history.push(dsfecv);
        break;
      case "tab":
        setsetto(ivjsdf);
      // dsfecv = "/explore/" + typeComp + "/" + ivjsdf;
    }

    logs.logga("___ ivjsdf ___", ivjsdf);
    logs.logga("___explore bear CHANGE asdwqke ___", dsfecv);

    // settypeComp(asdwqke);
  }

  const jsdse = {
    ...iksase,
  };

  logs.logga("___ jsdse ___", jsdse);

  const ijsde = {
    code: {
      //
      item: ExploCode(jsdse),
      iconvar: "‍💻",
      textvar: "Code",
    },
    useCases: {
      //
      item: ExploStories(jsdse),
      iconvar: "‍💻",
      textvar: "Use Cases",
    },
    comments: {
      item: ExploForum(jsdse),
      iconvar: "comment",
      textvar: "Forum",
    },
    args: {
      item: ExploArgs(jsdse),
      // iconvar: "args",
      textvar: "Arguments",
    },
  };

  function Lefaos() {
    function Rendos(input) {
      //

      logs.logga("___ input ___", input);

      function Suggestos() {
        //
        //

        const dfijger = {
          suggest: {
            outsideLink: "/suggest",
            textvar: "Make a suggestion",
            iconvar: "",
            background: "darkblue",
          },
          create: {
            background: "darkred",
            outsideLink: "/create",
            iconvar: "",
            textvar: "Sell your own object",
          },
        };

        const iejwesa = {
          style: { margin: "10px 0" },
          linkConfig: {
            outsideTrue: true,
            linkParams: {
              name: input,
            },
          },
        };

        const reiter = ["suggest", "create"];
        const isdrease = {
          bearName: "ExploBear no results suggest",
          dictvar: dfijger,
          list: reiter,
          typeList: "button",
          itemConfig: iejwesa,
        };

        return <BearList {...isdrease} />;
      }

      const iosdas = {
        obj: "'" + input + "'",
        fontSize: "1.2em",
        className: "bold",
      };

      const isjea = (
        <>
          No items found for <BearDiv {...iosdas} />
          <br />
          Can't find what you're looking for?
        </>
      );

      const srwase = {
        obj: isjea,
      };

      const aseokase = (
        <>
          <BearDiv {...srwase} />
          <Suggestos />
        </>
      );

      const oksdewa = {
        obj: aseokase,
        fontSize: "24px",
      };

      // return <div>asdokqweqw</div>;
      // return "asodkqwe";
      return <BearDiv {...oksdewa} />;
    }

    const qweaoske = {
      // value: typeComp,
      // noShowItems: true,
      noOptionsMessage: Rendos,
      // emptyDictReplace: divios,
      onChange: (sdodf) => erotea("type", sdodf),
      // onChange: erotea,
      onChangeSetValue: false,
      width: "35vw",
      menuHeight: "90vh",
    };

    return <SearchBearItem {...qweaoske} />;
  }

  function RIghtos() {
    //

    const yaswe = [
      //
      "code",
      "args",
      "useCases",
      "comments",
    ];

    const jfdgrw = {
      style: {
        // margin: "30px",
        minWidth: "150px",
        fontSize: "16px",
        textAlign: "center",
        border: "2px solid grey",
      },
    };

    // function dfsijgre() {
    //   const ijdfer = (
    //     <TabPanels>
    //       <TabPanel>{ExploCode(jsdse)}</TabPanel>
    //       <TabPanel>{ExploArgs(jsdse)}</TabPanel>
    //       <TabPanel>{ExploStories(jsdse)}</TabPanel>
    //       <TabPanel>{ExploForum(jsdse)}</TabPanel>
    //     </TabPanels>
    //   );

    //   return ijdfer;
    // }

    const isjdr = {
      // bottomContain: dfsijgre,
      list: yaswe,
      dictvar: ijsde,
      // leftObj,
      // chosenItem: typeTab,
      clickSingle: true,
      // onClick: (sdodf) => erotea("tab", sdodf),
      logtrue: "e",
      bearName: "explore tabs --- ",
      itemConfig: jfdgrw,
      padTab: "10px",
      style: { margin: "2% 0", padding: "0 3%" },
      // noTabs: true,
    };

    logs.logga("___ExploreBear OVER TABS ___", isjdr);

    const dsifjer = (
      <BearDiv flex>
        {/*  */}
        {BearTabs(isjdr)}
      </BearDiv>
    );
    // BearTabMain(isjdr);

    return dsifjer;
  }

  function Rigther(jsdse) {
    const ijsdre =
      //
      ijsde[setto]["item"];
    // ExploArgs(jsdse);

    return (
      <>
        {RIghtos(jsdse)}
        {/* {ijsdre} */}
      </>
    );
  }

  function Adjse(adsfek) {
    const dsifjer =
      //
      Rigther(iksase);
    // RIghtos(adsfek);

    const sdobke = {
      obj: dsifjer,
      style: {
        // background: "red",
        width: "50vw",
      },
    };

    const dfijgr = (
      <>
        <BearDiv {...sdobke} />
      </>
    );

    return dfijgr;
  }

  const leftos = Lefaos();
  const rghtos = iksase
    ? Adjse(iksase)
    : BearError("no item code for " + typeComp);

  const kasase = {
    list: [leftos, rghtos],
    typeList: "return",
    bearName: "Explore Bear: main layout",
    horiz: true,
  };

  function Sajewe() {
    const fdker = {
      //
      style: {
        textAlign: "left",
        fontSize: "1.4em",
        fontWeight: "bold",
        fontFamily: "Times New Roman",
      },
    };

    const ijres = (
      <>
        {/* adsoskdo */}
        <BearTitle {...fdker}>{iksase.title}</BearTitle>
      </>
    );

    const idfjgtr = (
      <BearFlex>
        {/*  */}
        {ijres}
      </BearFlex>
    );

    return idfjgtr;
  }

  const okfdsd = (
    <>
      <BearList {...kasase} />
    </>
  );

  // 1console
  logs.logga("___ iksase ___", iksase);

  const ksdsd = {
    obj: okfdsd,
    style: {
      // width:
      height: "100vh",
    },
    // ...args,
  };

  return <BearDiv {...ksdsd} />;
}
