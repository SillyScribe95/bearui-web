import { HiEmojiHappy } from "react-icons/hi";
import SearchPlaylist from "../../containers/search/SearchPlaylist";
import SearchNotion from "../../containers/search/SearchNotion";
import { BearDiv } from "../../components/BearDiv";
import { BearEmoji } from "../../components/list/BearEmoji";
import { BearSelect } from "../../components/select/BearSelect";
// import PrivacyChoose from "../PrivacyChoose";
import {
  playBsaelist,
  logs,
  indexTopic,
  getUserPlaylists,
  GetUserObjs,
  indexPlaylist,
} from "@SillyScribe95/bedia-shared/";

// import { MainContext } from "../../contexts/MainContext";
// import { AuthContext } from "../../contexts/AuthContext";
import React, { useContext, useState } from "react";
import { BearIcon } from "../../components/BearIcon";
import { SearchKnowledge } from "../search/SearchKnowledge";
import { useQuery } from "react-query";
import { flexStyle } from "../../consts/genStyle";
import { BearIconText } from "../../components/GlobalComps";
import { QueryMain } from "../../functions/backendFuncs";
import { SearchPeople } from "../search/SearchPeople";

export default function AlterModelConst({
  topicConfig,
  nameConfig,
  emojiConfig,
  currentUser,
  modelCreateFunc,
  listvar,
  dictvar,
  ...args
}) {
  //
  // 1fontsize
  const baseoFont = 80;
  const asijew = {
    fontSize: baseoFont,
  };

  const { data: plydatuser, isLoading: plyloaduser } =
    //
    // "";
    // QueryData()
    QueryMain(getUserPlaylists(currentUser));
  // QueryMain(GetUserObjs(indexPlaylist, currentUser));

  function showSelStly(lcxmvd) {
    let dsofk = {
      ...asijew,
      ...lcxmvd,
    };

    logs.logga("___ showSelStly bbbb___", dsofk);

    return dsofk;
  }

  // 1emoji
  function EmojBaso(adferw) {
    //
    const aijde = {
      fontSize: "36px",
      // margin:
    };

    const sdijf = {
      style: aijde,
    };

    const iasjdwe = showSelStly({
      ...adferw,
      ...aijde,
      onlyEmoji: true,
      // selectBlue: true,
      itemConfig: sdijf,
      ...emojiConfig,
    });

    logs.logga("___ altmodel EmoijList ___", iasjdwe);

    const emkjBaseo =
      //
      BearEmoji(iasjdwe);
    // "sadokae"

    return emkjBaseo;
  }

  // 1name
  function NameBaseo() {
    const jfdgtr = {
      //
      ...asijew,
      newLineTrue: true,

      // menuIsOpen: false,
      // noMulti: true,
      //
    };

    const bvnkmfg = <BearSelect {...jfdgtr} />;

    return bvnkmfg;
  }

  // 1users
  // function SpekaFind(asdfewr) {
  //   const ijasew = {
  //     //
  //     name: "aboutList",
  //     style: asijew,
  //     ...asdfewr,
  //   };

  //   return <SearchKnowledge {...ijasew} />;
  // }

  // 1private 1public
  function PrivacySett(asdew) {
    const lasewase = {
      ...asdew,
    };

    return "dk";
    // return <PrivacyChoose {...lasewase} />;
  }

  const preovioBase = {
    name: "private",
    iconvar: BearIcon("privacy"),
    titlevar: "Privacy",
    inputFunction: PrivacySett,
  };

  // 1playlist
  function osadease(dsofkewr) {
    const kadswe = {
      ...dsofkewr,
      options: playBsaelist,
      //   value: playlistCOns,
      //   valueFunc: setplaylistCOns,
    };

    const okdsa = <BearSelect {...kadswe} />;
    return okdsa;
  }

  function PlayaFinso(asdew) {
    //
    function tretsd(cxvk) {
      logs.logga("___ cxvk ___", cxvk);
      //   setplayCreate(cxvk);
      modelCreateFunc(1);
      // addNew(1);
    }

    const playBase = {
      userPlaylists: plydatuser,
    };

    const ijsae = {
      //
      ...asijew,
      ...asdew,
      ...playBase,
      createFunc: tretsd,
    };

    logs.logga("___ altModel PLAYLIST ___", ijsae);

    // return
    return SearchPlaylist(ijsae);
  }

  // 1teams 1microsoft
  function Teamsio(asdew) {
    const lasewase = {
      ...asdew,
    };

    return <SearchPlaylist {...lasewase} />;
  }

  const mcsfosa = {
    name: "teams",
    iconvar: BearIcon("teams"),
    titlevar: "Microsoft Teams Channel",
    inputFunction: Teamsio,
  };

  // 1notion
  function NotioShare(asdew) {
    async function baseNote() {
      // return await g
    }

    const notsfjwe =
      //
      "";
    // QueryMain(baseNote, "getNote",);

    const lasewase = {
      // listvar:
      ...asdew,
    };

    logs.logga("___ AlterMode SEARCH NOTION ___", notsfjwe);

    // return "aspdlwqew";
    return <SearchNotion {...lasewase} />;
  }
  const cxvmfg = {
    name: "notion",
    iconvar: BearIcon("notion"),
    titlevar: "Notion",
    inputFunction: NotioShare,
  };

  // 1slack BASIC
  function SlackoShare(asdew) {
    const lasewase = {
      ...asdew,
    };

    return <SearchPlaylist {...lasewase} />;
  }

  const sldsfe = {
    name: "slack",
    iconvar: BearIcon("slack"),
    titlevar: "Slack",
    inputFunction: SlackoShare,
  };

  // 1knowledge 1topic
  function KnwBs(osdkfr) {
    //
    //

    const [knwVal, setknwVal] = useState();
    function asidwe(dsksr) {
      logs.logga("___Almodel TOPCS KnwBs ___", dsksr);
      setknwVal(dsksr);
    }
    // chooseFunc: asidwe.,
    // value: knwVal,

    const ijasew = {
      //
      ...asijew,
      ...osdkfr,
      createIndex: "topic",
      ...topicConfig,
    };

    const sieqwe = SearchKnowledge(ijasew);

    return sieqwe;
  }

  // 1othertitle
  let sdfgrt = showSelStly({
    name: "otherTitles",
    titlevar: "Other Titles",
    inputType: "select",
    messvar: "otherTitles",
  });

  // 1emoji
  const dsqwe = (
    //
    <HiEmojiHappy />
  );

  let dfkree = {
    iconvar: dsqwe,
    noTitle: true,
    name: "emoji",
    iconvar: "💕",
    titlevar: "Mood",
    inputFunction: EmojBaso,
  };

  // 1test
  const dijdsf =
    //
    // SearchKnowledge;
    BearSelect;

  let sliasod = {
    name: "testSelect",
    // iconvar: "TEST",
    titlevar: "TESTSELECT",
    inputFunction: BearSelect,
    // inputObjectFunction: KnwBs,
  };

  function oksaw() {
    const apew = (
      <>
        {/*  */}
        Topics
      </>
    );

    return apew;
  }

  // 1topics
  let topicos = {
    name: "topic",
    iconvar: "🏷️",
    titlevar: oksaw(),
    inputFunction: KnwBs,
    // inputObjectFunction: KnwBs,
  };

  const linkPlayTt = {
    linkvar: "profile/playlists",
    linkConfig: {
      outsideTrue: "y",
      noBlack: "y",
    },
  };

  function htr() {
    const sdeqwe =
      //
      // BearIconText("📚", "Playlist"),
      "Playlist";

    const oeiw = {
      obj: sdeqwe,
      //  ...linkPlayTt,
    };
    return <BearDiv spanTrue {...oeiw} />;
  }

  const sdifr =
    //
    htr();
  // "Playlists";

  // 1playlist
  let dsifwqeq = {
    //
    // style: {
    //   marginTop: "100px",
    // },
    name: "playlist",
    // iconvar: "📚",
    titlevar: sdifr,
    // addFunc: () => addNew(1),
    sameLine: "",
    // inputObj: PlayaFinso,
    // inputFunction: osadease,
    inputFunction: PlayaFinso,
  };

  function SpekaFind(asdfewr) {
    //
    //
    const msfew = {
      imagesize: 30,
      style: {
        fontSize: "40px",
      },
    };

    const ijasew = {
      //
      ...asijew,
      // resultConfig: msfew,
      ...asdfewr,
    };

    logs.logga("___  altModel KNOWLEDGE ___", ijasew);

    return SearchPeople(ijasew);
  }

  // 1speaker 1people
  let sprkOR = {
    //
    name: "speakers",
    // iconvar:
    iconvar: "🧑‍🤝‍🧑",
    required: true,
    titlevar: "Speakers",
    inputFunction: SpekaFind,
  };

  // 1notes
  const obkfpr = {
    //
    name: "notes",
    iconvar: "✍️",
    rows: 4,
    inputType: "textarea",
    titlevar: "Note",
  };

  // 1dict FORM
  let asdlwe = {
    // name: {
    //   // noTitle: true,
    //   titlevar: "✍️ Name",
    //   obj: NameBaseo(),
    // },
    privacy: preovioBase,
    notes: obkfpr,
    emoji: dfkree,
    topic: topicos,
    testSelect: sliasod,
    playlist: dsifwqeq,
    speaker: sprkOR,
    //
    //
    slack: sldsfe,
    teams: mcsfosa,
    notion: cxvmfg,
  };

  let sifdaa = [
    //
    "otherTitles",
    "description",
  ];

  // 1list
  const socioL = [
    //
    // "slack",
    "notion",
    // "teams",
  ];

  // 1list
  const ksdwe = [
    //
    "name",
    "emoji",
    // "privacy",
    // "notes",
    // "playlist",
    // "speaker",
    "topic",
    // "description",
    // { mainObj: <ButtoTop /> },
    // ...isjdwe,
    ...socioL,
  ];

  let saokdawe = listvar ? listvar : ksdwe;

  let txtNameoTru = {
    rows: 1,
    inputType: "textarea",
  };

  // 1name FORM
  const ijawewaw = {
    //
    required: true,
    mustHave: true,
    name: "name",
    // noExpand: true,
    // noTitle: true,
    ...txtNameoTru,
    // autocomplete: jgjgfdg,
    // noTitle: true,
    // placeholder: baseName,
    // ...ijofds,
    // ...okfty,
    // ...inputMinni,
  };

  let descrios = {
    titlevar: "Description",
    inputType: "textarea",
    name: "description",
  };

  function retBtween(obios) {
    const okasde = {
      ...flexStyle(),
    };

    const jsada = {
      style: {
        fontSize: "34px",
        padding: "0 30px",
      },
    };

    const assaae = {
      style: { marginTop: "5px" },
    };

    const bodfge = (
      <div {...okasde}>
        {BearIcon("quoteLeft", jsada)}
        {obios}
        {/* <span {...assaae}>{obios}</span> */}
        {BearIcon("quoteRight", jsada)}
      </div>
    );

    return bodfge;
  }

  const dfigjew =
    //
    // BearIcon("quote");
    "💬";

  // 1quote
  const jsaew = {
    iconvar: dfigjew,
    titlevar: "Quote",
    rows: 1,
    inputType: "textarea",
    name: "quote",
    inputObjectFunction: retBtween,
  };

  let sdfokd = {
    name: ijawewaw,
    description: descrios,
    otherTitles: sdfgrt,
    quote: jsaew,
    ...asdlwe,
    ...dictvar,
  };

  const asidesd = {
    style: {
      textAlign: "center",
      margin: "10px 0",
    },
  };

  const odskdwqe = {
    displayNumber: 3,
    style: {
      padding: "10%",
    },
  };

  const tapbaseo = {
    //
    topButtonTrue: true,
    tabConfig: odskdwqe,
  };

  const topliseoBase = {
    toplist: ["emoji", "name"],
    listvar: ["notes", "playlist", "topic"],
  };

  let ldsfiejr = {
    listvar: saokdawe,
    dictvar: sdfokd,
    // noButton: true,
    inputConfig: asidesd,
    // sameLine: true,
    buttonText: "Save",
    // ...tapbaseo,
    // ...topliseoBase,
    ...args,
  };

  return ldsfiejr;
}
