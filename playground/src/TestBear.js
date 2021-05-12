import {
  BearCarousel,
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearEmoji,
  BearSelect,
  logs,
  BigButton,
  BearForm,
  HiButton,
} from "bearui-web";
import { TestList } from "./test/TestList";
import React, { useState } from "react";

export default function TestBear() {
  const okae = {
    obj: "hello",
    onClick: () => console.log("asodkqwe"),
  };

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

    return <TestList {...okasdew} />;
    // return <BearList {...okasdew} />;
  }

  // 1form
  function Formios() {
    function sdofkre(sdfew) {
      logs.loggo("___ sdfew ___", sdfew);
    }

    const awqeq = {
      // variable:
    };

    const cvbdf = {
      // dictvar: awqeq,
      listvar: ["name", "password"],
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
      itemConfig: {
        background: "blue",
      },
      style: {
        border: "2px solid red",
      },
    };

    // return "soakdwqe";
    return <BearEmoji {...okwesdr} />;
  }

  function Seleo() {
    const aokwe = {
      //
    };

    return <BearSelect {...aokwe} />;
  }

  // 1return
  return (
    <div>
      {/*  */}
      {/* 1carousel */}
      CAROUSEL
      <CaroBase />
      {/* 1emoji  */}
      {/* <Mojioe /> */}
      {/* 1float */}
      {/* FLOAT MAIN
      <Flotio /> */}
      {/* 1wiki TEST WIKI
      <Seleo /> */}
      {/* 1div */}
      <DivRend />
      {/* <TestPage /> */}
      {/* <BigButton /> */}
      {/* <TestForm /> */}
      {/* <HiButton /> */}
      {/* 1list */}
      {/* <ListO /> */}
      1test
      <Formios />
      {/* <BigBu */}
    </div>
  );
}
