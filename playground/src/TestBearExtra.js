import {
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearModel,
  BearEmoji,
  BearIconText,
  BearTextMedia,
  BearBorder,
  BearCheckout,
  BearAuthPortal,
  BearCheckoutStripe,
  BearSelect,
  BearCheckMain,
  BearTitle,
  BearFetchAPI,
  BearSearchList,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearCreditCard,
  BearInputNumber,
  BearForm,
  NewHighlight,
  HiButton,
  BearCodePreview,
  BearIcon,
  TimeButtons,
  FormBase,
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearModel,
  BearEmoji,
  BearIconText,
  BearTextMedia,
  BearBorder,
  BearCheckout,
  BearAuthPortal,
  BearCheckoutStripe,
  BearSelect,
  BearCheckMain,
  BearTitle,
  BearFetchAPI,
  BearSearchList,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearCreditCard,
  BearInputNumber,
  BearForm,
  NewHighlight,
  HiButton,
  BearCodePreview,
  BearIcon,
  TimeButtons,
  FormBase,
} from "bearui-web";

import {
  //
  testMedia,
  testLink,
  testHighlight,
  textHighChrome,
} from "@SillyScribe95/bedia-shared/";

export function TestBearExtra() {
  //
  //

  //   1top

  function Oseoke() {
    const dfigjert = [
      // {
      //   text: "Anothas",
      // },
      // {
      //   text: "Wdfokewer",
      // },
      "hello",
      "search",
    ];

    function sfdijgr(sdfger) {
      logs.logga("sdfger-zzz", sdfger);
      // (sdfadr) => sdfadr,
      return "sdfger";
    }

    const ijser = {
      list: dfigjert,
      bearName: "sokfwerwe",
      // renderItem: sfdijgr,
      typeList: "return",
    };

    const dgersa = (
      //
      <BearList {...ijser} />
      // <BearSearchList {...ijser} />
    );

    return dgersa;
  }

  // 1userportal
  function SANijdw() {
    function sgijret() {
      return "sokfwqe";
    }

    const dibjfg = {
      // user: testUser,
      // signTrue: true,
      noUserReturn: sgijret,
      noUserTemplate: ["login", "signup"],
      // noUserConfig: {dictvar: },
    };

    return BearUserPortal(dibjfg);
  }

  function CardBase() {
    const ijaew = {
      display: "flex",
      style: {
        textAlign: "center",
      },
    };

    const iswqase = <BearCreditCard {...ijaew} />;

    return iswqase;
  }

  function Seleo() {
    //
    //
    function fgokre(cvbok) {
      logs.logga("___ cvbok ___", cvbok);
    }

    const kjfkgdf = [
      //
      "List",
      "SADjoew",
    ];

    const aokwe = {
      optionsArray: kjfkgdf,
      multi: true,
      onCreate: fgokre,
      typeSelect: "create",
      onInputChange: fgokre,
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

  // 1code 1bear
  function Asjdwe() {
    const vmfd =
      //
      "list";
    // "div";

    const sdjerae = bearConstDict[vmfd];

    const dijg = {
      fontSize: "20px",
    };

    const sidfer = {
      itemStyle: dijg,
      bearName: "test codeargs",
      ...sdjerae["argConfig"],
    };

    logs.logga("___ sidfer ___", sidfer);

    return <BearCodeArgs {...sidfer} />;
    // return <ExploCode {...sdjerae} />;
  }

  // 1altermode
  function ALtioso() {
    //
    //
    function fdiuret(sdfweq) {
      logs.logga("___ TESTEBEAR ALTEMODEL SUBTMI ___", sdfweq);
    }

    let ksde =
      //
      // testLink;
      // testLink["book"];
      testLink["youtube"];

    logs.logga("___ FETCH LINK de ___", ksde);

    const fogkdret = {
      ...textHighChrome,
      webTrue: true,
      typevar: "highlight",
      bearName: "aoskdwqe",
      // formData: testHighlight,
      // linkDetails: ksde,
      media: testMedia,
      onSubmit: fdiuret,
      ...usoConfo,
    };

    logs.logga("___ Test bear HIGHLIGHT ___", fogkdret);

    const fkgjdfg = (
      //
      <NewHighlight {...fogkdret} />
      // <AlterHighlight {...fogkdret} />
      // return <AlterModel {...fogkdret} />
    );

    return fkgjdfg;
  }

  // 1question
  function Questiothen() {
    function Aqwejsa({ question, answer }) {
      const ijsdeas = {
        title: question,
        subtitle: answer,
      };

      logs.logga("___ ijsdeas ___", ijsdeas);

      return <BearTitle {...ijsdeas} />;
    }

    const cvbkfd = (
      <BearDiv style={{ padding: "10%", fontSize: "30px" }}>
        Start searching...
      </BearDiv>
    );

    const bfddwe = {
      paddingTop: "50px",
    };

    const naskjew = {
      bearName: "dsafje",
      width: "40vw",
      menuHeight: "400px",
      menuStyle: bfddwe,
      showMenuIfValue: true,
      introMessage: cvbkfd,
      list: questionConst,
      searchAttrs: ["question", "answer"],
      renderItem: Aqwejsa,
      // menuIsOpen: false,
    };

    return <BearSearchList {...naskjew} />;
  }

  function ConstoList() {
    function asokdwe({ title, subtitle }) {
      const okasdew = (
        <>
          {title} {subtitle}
        </>
      );

      return okasdew;
    }

    const nisdjfr = {
      //
    };

    const ijsder = {
      // ,
      ...bearConst,
      showMenuIfValue: true,
      renderItem: asokdwe,
      placeholder: "Choose a component",
    };

    return <BearSearchList {...ijsder} />;
  }

  // 1search
  function Searchio() {
    //
    //
    const qyqwe = [
      //
      {
        name: "Andrew Maguire",
        age: 23,
        title: "List of basiscs",
      },
      {
        name: "Panagiota Vrampa",
        age: 25,
        title: "List of basiscs",
      },
    ];

    function dfgewra({ name }) {
      return name;
    }

    const sidjfas = {
      marginTop: "50px",
    };

    const ijsder = {
      bearName: "search name",
      list: qyqwe,
      searchAttrs: ["name", "age", "title"],
      renderItem: dfgewra,
      // menuStyle: sidjfas,
      placeholder: "Choose a component",
    };

    return <BearSearchList {...ijsder} />;
  }

  // 1fetch
  function Fehco() {
    const sdifer =
      //
      "https://randomuser.me/api?results=5";

    function fimasd({ dob, name, phone, email, ...asdew }) {
      logs.logga("___ renderFetchAll ___", {
        name,
        phone,
        ...asdew,
      });

      const iajdsae = (
        <div>
          <b>
            {name.title} {name.first} {name.last}
          </b>
          <br />
          Birthday: {dob.age}
          <br />
          Phone: {phone}
          <br />
          Email: {email}
        </div>
      );

      return iajdsae;
    }

    function aodkwe() {
      return "LOADING";
    }

    const isdkre = {
      //
      bearName: "fetchTest",
      renderLoad: aodkwe,
      renderListData: fimasd,
    };

    // return BearFetchAPI(sdifer, isdkre);
  }

  // 1input
  function IIaasen() {
    const isdkre = {
      // style: { fontSize: "60px" },
      onlyPostive: true,
    };

    return <BearInputNumber {...isdkre} />;
  }

  //
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
      list: ["track", "play"],
      changePlayerTime: sdokae,
      getCurrentTime: ogkfger,
    };

    const cbdfew = <TimeButtons {...okawease} />;

    return cbdfew;
  }

  // 1landing
  function Lando() {
    // consti jsdr
  }

  // 1payios
  function Payios() {
    function payGo(sfsd) {
      //
    }

    const sijewrwe = {
      //
    };

    const sijfwr = {
      // successURL:
    };

    const ijsder = {
      stripeConfig: sijewrwe,
      onSuccess: payGo,
      checkoutConfig: sijfwr,
      openCheckout: true,
    };

    // return "sd";
    return <BearPayButton {...ijsder} />;
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
      list: niase,
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

  // 1code 1preview
  function Previous() {
    const ijsder = `
    import { BearForm, BearDiv, BearFloat } from "bearui-web";
  
    const app = <>
      <BearDiv 
        link="https://codesandbox.io/docs/embedding"
        obj="asasdadd" 
      />
      </>

    ReactDOM.render(app, _mount_);
    `;

    const nsidfwr = {
      code: ijsder,
      dependencies: { BearForm, BearDiv, BearFloat },
    };

    const ijksdr = <BearCodePreview {...nsidfwr} />;

    return ijksdr;
  }

  // 1return
  const ijert = (
    <>
      {/*  */}
      ---- TEST BEAR ---
      {/* 1test */}
      {IJasea()}
      {/*  */}
      {/* 1carousel */}
      {/* <CaroBase /> */}
      {/* 1emoji */}
      {/* <Mojioe /> */}
      {/* 1SELECT TEST */}
      {/* <Seleo /> */}
      {/* 1search */}
      {/* {Questiothen()} */}
      {/* {Searchio()} */}
      {/* 1wiki TEST WIKI */}
      {/*  */}
      {/* 1div
      <DivRend /> */}
      {/* <TestPage /> */}
      {/* 1list */}
      {/* <ListO /> */}
      {/* <LiNew /> */}
      {/* 1duration */}
      {/* <Dureo /> */}
      {/* 1time */}
      {/* <Timeao /> */}
      {/* 1float */}
      {/* <Flotio /> */}
      {/* 1input 1number */}
      {/* <IIaasen /> */}
      {/* 1code 1preview */}
      {/* <Previous /> */}
      {/* <Asjdwe /> */}
      {/* 1alter */}
      {/* <ALtioso /> */}
      {/* 1card */}
      {/* <CardBase /> */}
      {/* 1landing */}
      {/* {Lando()} */}
      {/* 1keyvalue */}
      {/* {Keios()} */}
      {/* 1paybutton */}
      {/* <Payios /> */}
      {/* 1checkout */}
      {/* <TestCheckout /> */}
      {/* 1social */}
      {/* <Sonasi /> */}
      {/* <Oseoke /> */}
      {/* 1userportal */}
      {/* <SANijdw /> */}
      {/* 1fetch */}
      {/* <Fehco /> */}
      {/* 1model */}
      {/* {Modelos()} */}
      {/* 1iconlist */}
      {/* {Ioncijsfsd()} */}
      {/* 1icon */}
      {/* <Incasod /> */}
      {/* asdoakewq */}
      {/* 1form */}
      {/* <Formios /> */}
      {/* <FormBase /> */}
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
