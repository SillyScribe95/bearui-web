import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";

import BearDiv from "../components/BearDiv";

import FormMain from "../components/FormMain";
import { CurrencyMain, joinString } from "../functions/GlobalFunctions";
import { MainContext } from "../contexts/MainContext";

export default function OrderOptions({
  //
  genConfig,
  typeOrder,
  ...args
}) {
  // prettier-ignore
  const { orderCountry } = useContext(MainContext);

  // 1const
  const [type, setType] = useState("");

  const yqweasd =
    //
    "Any general comments?";
  // "Any notes we should do?";

  const iajszxd =
    //
    "asdokwqew";

  const commDicto = {
    regDict: {
      //   required: "Required",
      // pattern: {
      //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      //   message: "invalid email address",
      // },
    },

    titlevar: yqweasd,
    subtitlevar: iajszxd,
    iconvar: "edit",
    // textvar:
    rows: 6,
    longTrue: true,
    name: "orderNote",
    textTrue: true,
  };

  // 1language
  const langChoose =
    //
    "";

  const langDicto = {
    titlevar: "Translate into ",
    subtitlevar: iajszxd,
    // iconvar: "edit",
    // textvar:
    rows: 6,
    longTrue: true,
    name: "orderNote",
    textTrue: true,
  };

  const q8ue32qwe =
    //
    "What would oyu";

  const asokdw = [
    //
    ".txt",
    ".pdf",
    ".doc",
  ];

  // function checktypeOrd(typowe) {
  //   let ndOptions = "";
  //   let ijawes;
  //   switch (typowe) {
  //     case "timestamps":
  //       let ijawes = {
  //         main: "Text with timestamps above each paragraph",
  //         public: " which link to that time on your video.",
  //       };
  //       break;
  //     case "subtitles":
  //       let ijawes = {
  //         main: "Text with timestamps above each paragraph",
  //         public: " which link to that time on your video.",
  //       };

  //       ndOptions = ijawes["main"] + gens.cea(ijawes, typeOrder);

  //       break;
  //   }

  //   return ndOptions;
  // }

  // 1new
  const typeoDict = {
    titlevar: yqweasd,
    selectvar: asokdw,
    name: "orderNote",
    textTrue: true,
  };

  const timeStmpsTreu = {
    titlevar: yqweasd,
    checked: true,
    type: "checkbox",
    name: "timestampTrue",
  };

  const SubTreu = {
    titlevar: "Subtitle file (.srt)",
    checked: true,
    type: "checkbox",
    name: "subtitleTrue",
  };

  const ijkaw = [timeStmpsTreu, SubTreu];

  const trnsTreu = {
    titlevar: "transcript file (.txt)",
    checked: true,
    type: "checkbox",
    checklistTitle: "Media List",
    checklistvar: ijkaw,
    // me: "transcri    // listvar:
    // name: "transcriptTrue",
  };

  const chostpyes = {
    titlevar: "What formats would you like us to email?",
    noInput: true,
  };

  const [crrTpei, setcrrTpei] = useState("curated");

  const socDict = {
    // orderType: sdjfew,
    // orderFormat: formatCOfno,
    checkTitle: chostpyes,
    checkTranscript: trnsTreu,
    checkTimestamps: timeStmpsTreu,
    checkSubtitle: SubTreu,
    comments: commDicto,
  };

  const asodos = [
    "orderType",
    "orderFormat",
    // "checkTitle",
    "checkTranscript",
    // "checkTimestamps",
    "checkSubtitle",
    "comments",
    // socDict[currSoc],
    // emDicto,
  ];

  const ijasd =
    //
    "Great! Lastly...";

  const ijaseawe = {
    obj: ijasd,
  };

  const linputConfig = {
    headerConfig: ijaseawe,
    listvar: asodos,
    dictvar: socDict,
    typevar: "options",
    ...args,
  };

  const formos = (
    <FormMain
      //
      //   noButton
      // addTrue
      {...linputConfig}
    />
  );

  const uahswe = {
    obj: formos,
    ...genConfig,
  };

  //
  return <BearDiv {...uahswe} />;
}
