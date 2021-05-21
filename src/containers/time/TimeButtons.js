import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  getDuration,
  timeDecim,
  logs,
} from "@SillyScribe95/bedia-shared/";
import { BearIcon } from "../../components/BearIcon";
import { BearDiv } from "../../components/BearDiv";
import { BearTextMedia } from "../../components/BearTextMedia";
import { BearList } from "../../components/list/BearList";
import { BearButton } from "../../components/button/BearButton";
import { BearIconText } from "../../components/GlobalComps";

export function TimeButtons({
  //
  changePlayerTime,
  getCurrentTime,
  showTime,
  bothFunc,
  startTime,
  titleConfig = {},
  endTime,
  startFunc,
  endFunc,
  buttonConfig,
  ...args
}) {
  // 1MainContext
  //   const { changePlayerTime, getCurrentTime } = useContext(PlayContext);
  //   const { aaa } = useContext(MainContext);

  // 1const
  const [type, setType] = useState("");
  const [recordTime, setrecordTime] = useState();

  // 1duration
  const ksdew = getDuration(startTime, endTime);
  const decDone = timeDecim(ksdew);

  let trackStart =
    //
    recordTime;
  // recordTime && startTime;

  let trackTrue =
    //
    recordTime;
  // trackStart
  // startTime && !endTime;
  // trackStart && !endTime

  function getTimeo(aspecto, timeo) {
    const timeea = timeo ? timeo : getCurrentTime();

    //
    //
    let safdew = "";
    switch (aspecto) {
      case "start":
        safdew = true;
        if (startFunc) {
          startFunc(timeea);
        }
        break;
      case "end":
        safdew = false;
        if (endFunc) {
          endFunc(timeea);
        }
        break;
    }

    if (bothFunc) {
      bothFunc(timeea);
    }

    setrecordTime(safdew);

    const dsdfwer = {
      TIME: timeea,
      TYPE: aspecto,
      RECORD: safdew,

      //   duraion: duraion,
    };

    logs.logga("___ dsdfwer ___", dsdfwer);
  }

  function getto(typoe) {
    const kswwe = {
      start: {
        typevar: "Start",
        background: "darkblue",
        bediaTrue: true,
        butName: "buttonStart",
      },
      end: {
        typevar: "End",
        background: "darkred",
        butName: "buttonEnd",
      },
    };

    const currFind = kswwe[typoe];

    let skdds =
      //
      BearIconText("time", currFind["typevar"]);

    const topelCo = {
      typeText: skdds,
      onClick: () => getTimeo(typoe),
      ...currFind,
    };

    return topelCo;
  }

  function PlayDurro() {
    const asidew = endTime ? decDone : "0:00";

    const duriso = {
      obj: asidew,
      style: {
        marginLeft: "5px",
        fontSize: "1.1em",
      },
    };
    const duritObj = <BearDiv spanTrue {...duriso} />;

    let trackTimemess =
      //
      "Tracking...";
    // "Setting"

    const asidjew = BearIconText("play", duritObj);

    const disoes =
      //
      // true
      !endTime;

    const askdwse = {
      disableTrue: disoes,
      // chakTrue: true,
      // style: { padding: "40px 0" },
      obj: trackTrue ? trackTimemess : asidjew,
      // bediaTrue: true,
      background: "darkgreen",
      butName: "playeButton",
      onClick: () => changePlayerTime(startTime),
    };

    return askdwse;
  }

  const kxmcvd = titleConfig;

  const cvbkf =
    //
    recordTime ? "end" : "start";

  const ijasd = {
    track: getto(cvbkf),
    // duration: duraoe,
    play: PlayDurro(),
  };

  function Asijwe({ typeText, attr, ...asdw }) {
    logs.logga("___ asdw ___", asdw);

    const sadebd = {
      height: "60px",
      minWidth: "130px",
      padding: "10px",
      margin: "0 20px",
      fontSize: "25px",
    };

    let asjdwe = "";
    switch (attr) {
      case "start":
        asjdwe = startTime;
        break;
      case "end":
        asjdwe = endTime;
        break;
    }

    const sdifje = typeText;

    const okasedwe = {
      // genConfig: kdsdqwe,
      obj: sdifje,
      centerTrue: "y",
      ...asdw,
      style: sadebd,
      ...buttonConfig,
    };

    logs.logga("___ okasedwe ___", okasedwe);

    // attr = "endTime";
    const ksaesdwe =
      //
      // "asokdewq";
      BearButton(okasedwe);

    return ksaesdwe;
  }

  const ijdsf = {
    textAlign: "center",
    // padding: "0 10%",
    // margin: "30px",
  };

  const jasde = {
    listvar: ["track", "play"],
    dictvar: ijasd,
    renderItem: Asijwe,
    genConfig: { style: ijdsf },
    ...args,
  };

  //   1console
  const sgkjerw = {
    startTime: startTime,
    recordTime: recordTime,
    trackStart: trackStart,
    trackTrue: trackTrue,
  };

  logs.logga("timButton aaa LIST---", jasde);
  //   logs.logga("___ TimButton BBB ___", sgkjerw);

  const ewrqasa = (
    //
    // "";
    <BearList horizTrue {...jasde} />
  );
  // <ImageTextDiv horizTrue {...jasde} />
  // <BearFloat {...asdnow8q} />

  // const ossdf = {
  //   leftobj: TItDurro(kxmcvd),
  //   centerobj: ewrqasa,
  // };

  const iksaew =
    //
    ewrqasa;
  // BearFloat(ossdf);
  // ewrqasa;
  // <Flex>
  //   {TItDurro(kxmcvd)}
  //   {ewrqasa}
  // </Flex>

  return iksaew;
}
