import React, {
  //
  useState,
  useContext,
} from "react";
import { checkFullArray, logs } from "@SillyScribe95/bedia-shared/";
import { BearDiv } from "../../components/BearDiv";
import { useHistory } from "react-router-dom";
import { editModel, saveModel, joinString } from "@SillyScribe95/bedia-shared/";
import {
  getBlankLink,
  modelLink,
  indexHighlights,
  indexPlaylist,
} from "@SillyScribe95/bedia-shared/";
import { AlterModel } from "../model/AlterModel";
import { BearCarousel } from "../../components/list/BearCarousel";
import { BearButton } from "../../components/button/BearButton";
import { MediaTypeTime } from "./MediaTypeTime";
import MediaFindChoose from "../formMedia/MediaFindChoose";

export function AlterHighlight({
  //
  formData,
  onSubmit,
  seriesObj,
  addPlaylist,
  mediaList,
  saveToMedia,
  newUser,
  timeConfig,
  ...args
}) {
  // 1const
  const [trueInd, settrueInd] = useState();

  // const {data, isLoading, error} = useQuery(addHighlights())
  const media = formData && formData.media;
  // const vbnd = formData?.startTime;
  // const asidjw = formData?.endTime;
  const dfoke =
    //
    "";
  // vbnd;
  // vbnd ? vbnd : 0;

  const [staro, setstaro] = useState(dfoke);

  const okfgrer =
    //
    "";
  // noEnd ? "" : asidjw ? asidjw : staro + 30;
  const [endklp, setendklp] = useState(okfgrer);

  // 1type
  let typeia =
    //
    // "video";
    media && media.mediaType;

  const [mediaVary, setmediaVary] = useState(typeia);

  let history = useHistory();

  const newHgho = {
    ...formData,
    startTime: staro,
    endTime: endklp,
  };

  function AdddioPlay() {
    //
    //

    const sdfewr = {
      noBlack: true,
    };

    const nsijse =
      //
      getBlankLink(modelLink(indexPlaylist, addPlaylist.id), sdfewr);

    const ksaeas = {
      obj: addPlaylist.name,
      link: addPlaylist.id,
      ...nsijse,
    };

    const nodsase = <BearDiv span {...ksaeas} />;

    const osdkfer = {
      obj: addPlaylist.userObj,
    };

    const asdew =
      //
      addPlaylist.userObj && addPlaylist.userObj.name;
    // UserMain(osdkfer);

    const dxokvr = {
      obj: "Start",
      // onCli
    };

    const kksd = (
      <>
        {/*  */}
        <>
          Add to {asdew}'s playlist:
          <br />
          {nodsase}
          <hr />
          <BearButton {...dxokvr} />
        </>
        {/* aspdeewq k askdpe alsd pldpe pldpl aspdeewq k askdpe alsd pldpe pldpl */}
      </>
    );

    const sdae = {
      obj: kksd,
      style: {
        textAlign: "center",
      },
    };

    const mosdwa = {
      // leftobj: <UserMain {...osdkfer} />,
      centerobj: <BearDiv {...sdae} />,
    };

    const sdaesa =
      //
      // kksd
      BearFloat(mosdwa);

    let dsokr =
      //
      // "wrapTrue";
      "shadowHover pointer";

    const jfdrase = {
      obj: sdaesa,
      className: dsokr,
      style: {
        // border: "2px solid red",
        fontSize: "1.8em",
        paddingBottom: "50px",
      },
      onClick: () => settrueInd(1),
      // lineBelow: true,
    };

    return <BearDiv {...jfdrase} />;
  }

  const letPlaio = addPlaylist && <AdddioPlay />;

  // 1function

  function pushDownlad(zxcvdfd) {
    return saveModel("highlight", zxcvdfd);
  }

  let linkGo =
    //
    media && `/m/${media.slugURL}/highlights`;
  // linkGo =

  // 1submit 1save
  function Vcbod0e(dsofkwr) {
    //

    const asidjwe = {
      DATA: dsofkwr,
      PAGE_LINK: linkGo,
      SUBMITFUNC: onSubmit,
    };

    logs.logga("___ AlteHighlights submit FINAL ___", asidjwe);

    // if (saveToMedia) {
    //   joinwithmedia(dsofkwr);
    // }

    if (onSubmit) {
      onSubmit(dsofkwr);
    }

    setendklp();
    setstaro();
  }

  // 1baseargs
  const baseArgs = {
    mediaType: mediaVary,
    formData: newHgho,
    media: media,
  };

  // // 1console
  logs.logga("___ FORM BASE ITEMS ___", newHgho);

  const baseName =
    media &&
    joinString(
      //
      [
        media.name,
        //
        // "(" + ijsewe + ")",
      ],
      " "
    );

  const ijofds = {
    typevar: "textarea",
    rows: 1,
    // minRows: 1,
    // maxRows: 2,
  };

  const okfty = {
    style: {
      background: "red",
      color: "white",
      fontSize: "40px",
    },
  };

  const desConfo = {
    // tabTitle: "🛈 General",
    title: "Description",
    // subtitle: descSubbo,
    typevar: "textarea",
    name: "description",
    minRows: 3,
  };

  const baseisdo = {
    title: "Tags",
    // typevar: "textarea",
    name: "tags",
  };

  const selcTIas = {
    title: "Other Titles",
    typevar: "selectable",
    // options: "",
    name: "tags",
  };

  const keyjsaew = {
    title: "Key Quote",
    typevar: "textarea",
    minRows: 2,
    maxRows: 2,
    name: "keyQuote",
    // placeHolder: "The most shareable quote in the chapter.",
  };

  const ijasdwe = {
    otherTitles: selcTIas,
    keyQuote: keyjsaew,
  };

  const [showRest, setshowRest] = useState("y");
  const isjdwe = showRest
    ? [
        //
        "keyQuote",
        "description",
        "tags",
      ]
    : [];

  function sdhfe() {
    let okfr = staro ? staro : getCurrentTime();

    let okdsew = {
      startTime: okfr,
    };
    return okdsew;
  }

  // 1submit
  function idjew(values) {
    const ijew = {
      ...values,
      ...newHgho,
    };

    logs.logga("___ Alterhighligt SUBMIT FIRST ___", ijew);

    Vcbod0e(ijew);
  }

  const nisfe = {
    // obj: isjde,
    buttonConfig: {
      obj: "More Options",
      onClick: () => setshowRest(!showRest),
    },
  };

  const ovkb0e = {
    style: {
      marginBottom: "20px",
    },
    // noTitle: true,
  };

  function ChooseIo() {
    //
    function sfde(fdkgwer) {
      logs.logga("___ altHigh TIMBUTTON StartFunc ___", fdkgwer);

      setstaro(fdkgwer);
      setendklp();
    }

    const oaksde = {
      startFunc: sfde,
      endFunc: setendklp,
      startTime: staro,
      endTime: endklp,
      trackingTrue: staro && !endklp,
      ...timeConfig,
    };

    logs.logga("AltHigh TimeConfig---", oaksde);

    const ywers = {
      typeChooseFunc: setmediaVary,
      mediaChooseFunc: () => settrueInd(2),
    };

    const cvbokf = {
      chooseConfig: ywers,
      timeConfig: oaksde,
      ...baseArgs,
      ...args,
    };

    // 1type
    logs.logga("___ altHigh MediaTyTime ___", cvbokf);

    // 1timebuttons
    const fdjeaw =
      //
      // "";
      MediaTypeTime(cvbokf);

    return fdjeaw;
  }

  const ijaase = <ChooseIo />;

  const asidwe = (
    <>
      {/*  */}
      {ijaase}
    </>
  );

  // 1list
  const baseList = [
    //
    "emoji",
    "name",
    "quote",
    "speaker",
  ];

  const afterList = [
    //
    "playlist",
    "topic",
    "testSelect",
    "notion",
  ];

  const okdss = addPlaylist
    ? [
        "emoji",
        // "name",
        "topic",
      ]
    : [
        //
        ...baseList,
        // ...afterList,
        // "slack",
        // "teams",
      ];

  const sakdaew =
    //
    "";
  // asfde

  function altBase(baseOss) {
    const vcokge = {
      // toplist: ndsokewr,
      // aboveLoad:
      typevar: indexHighlights,
      itemConfig: ovkb0e,
      // noSave: true,
      submitExtra: sdhfe,
      // logtrue: false
      ...baseOss,
      ...baseArgs,
      ...args,
    };

    let sfisre = <AlterModel {...vcokge} />;

    return sfisre;
  }

  // 1form

  function TitleO() {
    const gfgfkho =
      //
      // media;
      "<- " + media.name;

    const vbfod = {
      fontSize: "20px",
      margin: "20px",
      padding: "5px",
      // // border: "2px solid red",
    };

    const ijsds = {
      obj: gfgfkho,
      className: "pointer wrapTrue",
      style: vbfod,
      // bediaTrue: true,
      // noBackground: true,
    };

    const ndfigjd = (
      //
      <BearDiv {...ijsds} />
      // <MediaList {...ijsds} />
      // <BearButton {...ijsds} />
    );

    return ndfigjd;
  }

  function subOne(cvxobkfdg) {
    logs.logga("___ subOne ___", cvxobkfdg);

    settrueInd(1);
  }

  // 1list 1carousel
  const listOne = {
    topObj: asidwe,
    list: baseList,
    bearName: "highaltone",
    onSubmit: subOne,
    noSave: true,
    noJump: true,
  };

  const listTwo = {
    list: afterList,
    bearName: "highalttwo",
    onSubmit: idjew,
  };

  const listAll = {
    topObj: asidwe,
    list: okdss,
    bearName: "highaltone",
    onSubmit: idjew,
  };

  function NoAddoIt() {
    const nsdifjwr = (
      <>
        {asidwe}
        NO MEDIA ITEM HERE
      </>
    );

    const fdhgrw = {
      obj: nsdifjwr,
    };

    return <BearDiv {...fdhgrw} />;
  }

  function ChooseMedList() {
    function chooese(dfg9ere) {
      logs.logga("___ dfg9ere ___", dfg9ere);
    }

    const ijawe = {
      //
      onClick: chooese,
      list: mediaList,
    };

    return <MediaFindChoose {...ijawe} />;
  }

  function CarosStart() {
    const firstO = altBase(listAll);

    const niase = [
      // letPlaio, sfisre
      firstO,
      altBase(listOne),
      // ChooseMedList(),
    ];

    const sdokfr = {
      list: niase,
      slideNum: trueInd,
    };

    const sdfsre = <BearCarousel {...sdokfr} />;

    return sdfsre;
  }

  const okadse =
    //
    media ? CarosStart() : NoAddoIt();
  // CarosStart();
  // addPlaylist ? <CarosStart /> : sfisre;

  const fdjgirt = (
    <>
      {/* {letPlaio} */}
      {/* <TitleO /> */}
      {okadse}
      {/* <SearchFormFields /> */}
    </>
  );

  args = {
    obj: fdjgirt,
    ...args,
  };

  return <BearDiv {...args} />;
}