import React, { useState } from "react";

import firebase from "firebase/app";
import {
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearModel,
  BearEmoji,
  BearIconText,
  BearBorder,
  BearAuthPortal,
  BearCheckMain,
  BearTitle,
  logs,
  BearForm,
  BearSocialLinks,
} from "bearui-web";

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
  };

  const okae = {
    obj: "hello",
    onClick: () => console.log("asodkqwe"),
  };

  // 1title
  function AlltIT() {
    const jawe = {
      title: "sodkwerfa",
      // titleConfig:
    };

    const udfhgr = {
      style: { color: "blue", background: "green" },
    };
    const jdfgr = <BearDiv {...udfhgr}>sdifjer0</BearDiv>;

    const idjfa = BearCheckMain("BearTitle", jdfgr, { bearName: "sj iwqe i" });

    return idjfa;
  }

  function LiNew() {
    const ijsfsa = [
      // "sokdqeq",
      // "sokdqeq",
      // {
      //   obj: "sokdqeq",
      // },
      {
        obj: "sdfw",
        // fontSize: "34px",
      },
    ];

    const jsidase = {
      bearName: "TestBear TEST",
      list: ijsfsa,
      itemConfig: {
        style: { color: "green" },
      },
      typeList: "div",
      // renderItem: "buto"
    };

    return <BearList {...jsidase} />;
  }

  //   1LIST
  function ListO() {
    const testRend = {
      list: ["hello", "anotehr", "here"],
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

    function objio(item) {
      const fijfdter = {
        obj: "Header " + item,
      };

      const sdijwr = {
        obj: "This is some smape test with hte item",
      };

      const xcvdas = (
        <>
          {/*  */}
          <BearTitle {...fijfdter} />
          <hr />
          <BearDiv {...sdijwr} />
        </>
      );

      const sijer = {
        obj: xcvdas,
        fontSize: "34px",
      };

      return <BearDiv {...sijer} />;
    }

    const rowConfios = {
      style: {
        //
        margin: "140px 0",
        ...BearBorder("green", "10px"),
        background: "red",
        color: "white",
      },
    };

    const testDict = {
      // dictvar: sfoewkr,
      // list: ["video", "audio", "book"],
      // renderItem: baserend,
      list: ["one", "two", "end", "four", "five"],
      itemConfig: {
        style: {
          background: "lightorange",
          borderRadius: "10px",
        },
        className: "shadowHover",
      },
      displayNumber: 3,
      rowConfig: rowConfios,
      typeList: "return",
      // renderItem: objio,
      // logItem: true,
      //   logtrue: "",
      // style: {}
    };

    const okasdew = {
      bearName: "234o23",
      //
      // ...testRend,
      ...testDict,
    };

    // return "asdfew";
    // return <TestList {...okasdew} />;
    return <BearList {...okasdew} />;
  }

  // 1form
  function Formios() {
    //
    function sdofkre({ ...sdfew }) {
      logs.loggo("___ SUMIBT name, password ___", sdfew);

      // logs.loggo("___ TESTBEAR - FORMIOS RESULTS ___", sdfew);
    }

    const awqeq = {
      variable: {
        // required: true,
        // inputType: "checkbox",
        name: "variable",
      },
    };

    const oskde = [
      //
      "variable",
      // "name",
      "name",
      // "password",
      // "country",
      // "mobileNumber",
    ];

    const dfjig = {
      name: "weofkerwe",
      password: "dofkr",
    };

    const cvbdf = {
      // loadSubmit: true,
      // loadConfig:
      // sameLine: true,
      // titleWidth: "120px",
      // inputStyle: {
      //   margin: "10px 0px",
      // },
      dictvar: awqeq,
      // formData: dfjig,
      list: oskde,
      onSubmit: sdofkre,
      bearName: "testFOrmo",
      formid: "formin",
    };

    return <BearForm {...cvbdf} />;
  }

  //   1float
  function Flotio() {
    const kwrewr = {
      topLeft: "topLeft",
      topRight: "topRight",
      bottomRight: "bottomRight",
      bottomLeft: "bottomLeft",
      // leftobj: "AAAA",
      // showLeft: true,
      centerConfig: {
        className: "truncate",
      },
      rightobj: "cccc",
      style: {
        height: "100px",
        padding: "10px",
        color: "red",
        background: "blue",
        // width: "100px",
      },
    };

    return <BearFloat {...kwrewr}>Another dollars</BearFloat>;
  }

  function DivRend() {
    const okaew = {
      obj: "test DiV",
      style: { textAlign: "center", width: "50px", background: "red" },
      className: "shadowHover bold",
      // link: "elTesto",
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

  // 1model
  function Modelos() {
    const ijvdffsa = {
      // warnDelete:
      list: ["delete", "edit", "share"],
      itemConfig: {},
    };

    return <BearModel {...ijvdffsa}>I AM A MODEL</BearModel>;
  }

  // 1iconLIST
  function Ioncijsfsd() {
    const cvbokf = {
      bearName: "iconList",
      list: ["delete"],
      dictvar: {
        delete: { iconvar: "delete" },
      },
      itemConfig: {
        class: "p-8 text-lg bg-blue-300 rounded-full",
      },
      typeList: "button",
    };

    // return <button
    return BearList(cvbokf);
  }

  // 1icon
  function Incasod() {
    //
    //
    const isdfrew =
      //
      BearIconText("delete", "Delete");
    // BearIcon("delete");

    const dfijwer = {
      obj: isdfrew,
      style: {
        textAlign: "center",
        color: "red",
        // background: "blue",
      },
    };

    const figjewr = (
      //
      <BearDiv {...dfijwer} />
    );

    return figjewr;
  }

  // 1social
  function Sonasi() {
    const figjdwe = [
      //
      "facebook",
      "whatsapp",
      "twitter",
    ];

    const sdfewr = {
      fontSize: "34px",
      className: "expandHover",
    };

    const sdbsfg = {
      //
      facebook: "https://www.facebook.com/scottishparliament/videos/",
      twitter: "https://twitter.com/scotgov",
      instagram: "https://www.instagram.com/alimosbikes/?hl=en",
      bearName: "SOcila text",
      itemConfig: sdfewr,
      horiz: true,
      list: figjdwe,
      shareLink: "twitter.com",
      shareText: "Just started using BearUI. It rocks!",
      ignoreEmpty: true,
      // textSoci,
    };

    return <BearSocialLinks {...sdbsfg} />;
    // return <BearSocialShare {...sdbsfg} />;
  }

  // 1authportal
  function Ajsew() {
    function ASDJA(asfdkwe) {
      logs.logga("asfdkwe-zzz", asfdkwe);
    }

    function as9d32(asfdkwe) {
      logs.logga("asfdkwe-zzz", asfdkwe);
    }

    const xcvbijr = {
      //
      // firebase,
      onSuccess: ASDJA,
      onFailure: as9d32,
      // onSubmit: ASDJA,
      list: ["google", "facebook"],
      title: "Sign in",
      style: {
        ...BearBorder("grey", "2px"),
        margin: "0 20%",
      },
    };

    const dijert = <BearAuthPortal {...xcvbijr} />;

    return dijert;
  }

  // 1key
  function Keios() {
    return "asds";
    // return BearKeySpreadsheet()
    // return BearKeyValue(isjdfeas);
  }

  // 1function
  function Lando() {
    const isdkre = {};

    // return <BearLandingPage  />
  }

  // 1test
  function IJasea() {
    const jdfsdasd =
      //
      // "";
      // "buttonHover";
      // "bg-gray-100 rounded-xl p-8";
      // "bg-green-500";
      "rounded-full cursor-pointer py-3 px-6 hover:bg-red-300";
    // "p-8";
    // "border border-indigo-600 ...";
    // "bg-purple-600 bg-opacity-100";
    // "bg-blue-100";
    // "p-8";
    // "truncate";
    // "line-clamp-2";

    const kvsdr =
      //
      // jdfsdasd;
      `text-lg ${jdfsdasd}`;

    const nfvnszd = {
      class: kvsdr,
      // style: "20px",
    };

    const xkcvxc =
      "zzzzz Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.";

    const iksds = (
      <>
        {/*  */}
        {/*  */}
        <BearDiv {...nfvnszd}>
          {/* <button {...nfvnszd}> */}
          {/* <div {...nfvnszd}> */}
          {/*  */}
          sdvokdsfj
          {/* {xkcvxc} */}
          {/* {BearIcon("plus")} */}
          {/* </div> */}
          {/* </button> */}
        </BearDiv>
      </>
    );

    return iksds;
  }

  logs.logga("___ TEST BEAR RUNNING  ___");

  // 1return
  const ijert = (
    <>
      {/*  */}
      ---- TEST BEAR ---
      {/* 1test */}
      {/* {IJasea()} */}
      {/*  */}
      {/* 1emoji */}
      {/* <Mojioe /> */}
      {/*  */}
      {/* 1div
      <DivRend /> */}
      {/* <TestPage /> */}
      {/* 1list */}
      {/* <ListO /> */}
      {/* <LiNew /> */}
      {/* 1float */}
      {/* <Flotio /> */}
      {/* 1social */}
      {/* <Sonasi /> */}
      {/* 1model
      {Modelos()}
      1iconlist
      {Ioncijsfsd()}
      1icon
      <Incasod />
      asdoakewq */}
      {/* 1form */}
      <Formios />
      {/* <AlltIT /> */}
      {/* 1authportal */}
      {/* <Ajsew /> */}
    </>
  );

  // 1page
  const dfgijert = {
    title: "Testing",
    user: testUser,
    // loadUser,
  };

  return ijert;
  //   return <BearPage {...dfgijert}>{ijert}</BearPage>;
}
