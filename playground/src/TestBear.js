import {
  BearCarousel,
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearEmoji,
  BearSelect,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearForm,
  NewHighlight,
  HiButton,
  TimeButtons,
} from "bearui-web";

import {
  //
  testMedia,
  testHighlight,
  // logs,
} from "@SillyScribe95/bedia-shared/";

import { TestList } from "./test/TestList";
import React, { useState } from "react";

export default function TestBear() {
  // 1user
  const useNaseo = {
    name: "Silly Scribe",
    id: "£qodkqq",
  };

  const testUser = {
    username: "SillyScribe",
    name: "Andrew Here",
    imageAttr:
      "https://lh4.googleusercontent.com/-bAhw4YfV6-o/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm8SxGKDkJVFtM2tn7krq51NFAugQ/s96-c/photo.jpg",
    id: "W1fIu5acjqdyRT16TrLjEQrIXri1",
  };

  // 1user
  const usoConfo = {
    userObj: testUser,
    // loadUser: true,
    currentUser: testUser,
  };

  const okae = {
    obj: "hello",
    onClick: () => console.log("asodkqwe"),
  };

  // 1timebutt
  function Timeao() {
    //
    function sdokae() {
      logs.logga("___ changePlayerTime ___");
    }

    function ogkfger() {
      logs.logga("___ getCurrentTime ___");
    }

    const okawease = {
      listvar: ["track", "play"],
      changePlayerTime: sdokae,
      getCurrentTime: ogkfger,
    };

    const cbdfew = <TimeButtons {...okawease} />;

    return cbdfew;
  }

  //   1LIST
  function ListO() {
    const testRend = {
      listvar: ["hello", "anotehr", "here"],
      typeList: "return",
    };

    function MoList() {}

    function asdwe() {}

    const sfoewkr = {
      video: {
        iconvar: "me",
        textvar: "VIDEO",
      },
      audio: {
        iconvar: "AD",
        textvar: "AUDIO",
      },
      book: {
        iconvar: "B",
        textvar: "BOOK",
      },
    };

    function baserend({ iconvar, textvar }) {
      const oaksdew = (
        <>
          {iconvar}, {textvar}
        </>
      );

      return oaksdew;
    }

    const testDict = {
      dictvar: sfoewkr,
      listvar: ["video", "audio", "book"],
      renderItem: baserend,
      // logItem: true,
      //   logtrue: true,
      // style: {}
    };

    const okasdew =
      //
      testRend;
    //   testDict;

    return "asdfew";
    // return <TestList {...okasdew} />;
    // return <BearList {...okasdew} />;
  }

  // 1form
  function Formios() {
    function sdofkre(sdfew) {
      logs.logga("___ TESTBEAR - FORMIOS RESULTS ___", sdfew);
    }

    const awqeq = {
      variable: {
        // inputType: },
      },
    };

    const oskde = [
      //
      "variable",
      "name",
      "password",
    ];

    const cvbdf = {
      // dictvar: awqeq,
      listvar: oskde,
      onSubmit: sdofkre,
      formid: "testFOrmo",
    };

    return <BearForm {...cvbdf} />;
  }

  //   1float
  function Flotio() {
    const kwrewr = {
      leftobj: "AAAA",
      centerobj: "bbbb",
      rightobj: "cccc",
    };

    return <BearFloat {...kwrewr} />;
  }

  // 1carousel
  function CaroBase() {
    //
    const niase = [
      //
      "osakdqweq",
      " sfisre",
    ];

    const [truo, settruo] = useState();

    const cvbdger = {
      listvar: niase,
      slideNum: truo ? 0 : 1,
    };

    const okaew = {
      onClick: () => settruo(!truo),
    };

    return (
      <>
        {/*  */}
        <BearButton {...okaew} />
        <BearCarousel {...cvbdger} />
      </>
    );
  }

  function DivRend() {
    const okaew = {
      obj: "test DiV",
      style: { textAlign: "center", width: "50px", background: "red" },
      className: "shadowHover bold",
      // linkvar: "elTesto",
    };

    //   1div

    const kaew = <BearDiv {...okaew} />;

    return kaew;
  }

  //   1emoji
  function Mojioe() {
    const okwesdr = {
      //
      itemStyle: {
        // background: "green",
        fontSize: "54px",
      },
      style: {
        border: "2px solid red",
      },
    };

    // return "soakdwqe";
    return <BearEmoji {...okwesdr} />;
  }

  function Seleo() {
    function fgokre(cvbok) {
      logs.logga("___ cvbok ___", cvbok);
    }

    const aokwe = {
      onCreate: fgokre,
      typeSelect: "create",
    };

    return <BearSelect {...aokwe} />;
  }

  function Dureo() {
    const aease = {
      parseType: "short",
      duration: 250,
    };

    const sdrease = <BearDuration {...aease} />;

    return sdrease;
  }

  // 1altermode
  function ALtioso() {
    //
    //
    function fdiuret(sdfweq) {
      logs.logga("___ TESTEBEAR ALTEMODEL ___", sdfweq);
    }

    const fogkdret = {
      typevar: "highlight",
      formid: "aoskdwqe",
      overObj: testHighlight,
      mediaObj: testMedia,
      onSubmit: fdiuret,
      ...usoConfo,
    };

    const fkgjdfg = (
      //
      // <NewHighlight {...fogkdret} />
      <AlterHighlight {...fogkdret} />
      // return <AlterModel {...fogkdret} />
    );

    return fkgjdfg;
  }

  // 1return
  return (
    <>
      {/*  */}
      {/* 1carousel
      <CaroBase />
      1emoji
      <Mojioe />
      1float
      <Flotio />
      1SELECT TEST
      <Seleo /> */}
      {/* 1wiki TEST WIKI */}
      {/* <Seleo /> */}
      {/* 1div
      <DivRend /> */}
      {/* <TestPage /> */}
      {/* 1list
      <ListO />
      1duration
      <Dureo /> */}
      {/* 1time */}
      {/* <Timeao /> */}
      1alter
      <ALtioso />
      {/* 1test
      <Formios /> */}
    </>
  );
}
