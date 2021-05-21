import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";
import { getLength } from "@SillyScribe95/bedia-shared/";

import * as gens from "../consts/GenStyled";
import BearDiv from "../components/BearDiv";

import { MainContext } from "../contexts/MainContext";
import {
  checkjsonfull,
  ImageTextList,
  segReport,
  linkCheckString,
  mergeArrays,
} from "../functions/GlobalFunctions";
import MediaList from "./MediaList";
import AddInfoMedia from "./AddInfoMedia";
// import aaaa from "./components/aaaa";
import { useHistory } from "react-router-dom";
import ModelObject from "../containers/ModelObject";

export default function OrderMedia({
  //
  //   obj,
  onNameChange,
  obj,
  orderConfig,
  editFunc,
  orderNote,
  completeTrue,
  rightIconsConfig,
  // costArgs
  ...args
}) {
  //

  let history = useHistory();
  // prettier-ignore
  const { setcurrMedia, removeOrderItem  } = useContext(MainContext);
  // const objARgs = args;
  // 1const
  const [type, setType] = useState("");

  function sdjaewe(sdfiewo) {
    const isaew = "Set Edit Media /" + sdfiewo;
    setcurrMedia(obj, isaew);

    const fgtrerwe = sdfiewo ? "/" + sdfiewo : "";
    const ijaew = "/edit/" + obj.slugURL + fgtrerwe;

    const sjdwae = {
      sdfiewo: sdfiewo,
    };

    logs.logga("___ sdjaewe ___", sjdwae);
    logs.logga("___ fgtrerwe ___", fgtrerwe);
    logs.logga("___ ijaew ___", ijaew);

    history.push(ijaew);
  }

  const [beloas, setbeloas] = useState();

  //   const jasdas

  //
  const ordeDros =
    //
    // noteJSON
    orderNote;
  // obj["orderNote"];
  // obj["saveTrue"];

  logs.logga("___ ordeDros ___", ordeDros);

  const saveTrue =
    //
    ordeDros ? checkjsonfull(ordeDros) : "";

  const kmxvcb = {
    ordeDros: ordeDros,
    saveTrue: saveTrue,
  };

  const aisjdew = obj?.name;
  const [nameIt, setnameIt] = useState(aisjdew);

  function TransDownl() {
    const subFniaso = {
      //
    };

    const transFinos = {
      //
    };

    const chpFinso = {
      //
    };

    const lssdwqe = {
      subtitle: subFniaso,
      transcript: transFinos,
      chapter: chpFinso,
    };

    const mbdsfd = [
      //
      "trascript",
      "subtitle",
      "chapter",
    ];

    const kcmvbdf = {
      listvar: mbdsfd,
      dictvar: lssdwqe,
    };

    // return <BottomBut {...kcmvbdf} />;
  }

  // 1right topicons
  function mainConf() {
    //
    const costConai = {
      // onClick: cnecle,
      textvar: "2.ASFAWE",
      iconvar: "money",
      className: "",
      textConfig: {},
    };

    const auhew = obj.mediaFileLink;
    const sduhwqe =
      //
      // "";
      linkCheckString(auhew);
    // sduhwqe &&

    const lnkos = {
      linkvar: auhew,
      outsideTrue: true,
    };

    const linkConfo = {
      // onClick: cnecle,
      textvar: "Link",
      iconvar: "link",
      // linkvar: "oksdawqe",
      linkConfig: lnkos,
      // style: { fontSize: "0.7em" },
      // className: "",
    };

    const bomfdre =
      //
      // [];
      obj.chapterList;

    const highListo = mergeArrays(
      //
      bomfdre,
      ordeDros?.chapterList
    );

    const ijse =
      //
      // "Highlight";
      "⭐";

    const sjdaw =
      //
      ijse + " " + getLength(highListo);

    function goHihlight() {
      logs.logga("___ set ___", "set");

      sdjaewe("chapters");
    }

    // 1highlight
    const hightCoo = {
      onClick: goHihlight,
      textvar: sjdaw,
    };

    const dictListeo = {
      cost: costConai,
      // cancel: cancelConfig,
      // edit: editConfo,
      baseMediaLink: linkConfo,
      highlight: hightCoo,
      // link: linkConfo,
    };

    const linFisao = !gens.mobileView ? "baseMediaLink" : "";

    const finComplo = [
      //
      "link",
      "download",
    ];

    const aqwesdfd = [
      //
      // "link",
      // linFisao,
      // "people",
      "edit",
      "highlight",
      "remove",
    ];

    const iawe = completeTrue ? finComplo : aqwesdfd;

    const itemRifg = {
      dictvar: dictListeo,
      listvar: iawe,
    };

    logs.logga("___ itemRifg ___", itemRifg);

    return itemRifg;
  }

  function AddFo() {
    const asdiwe = {
      style: {
        paddingTop: "100px",
      },
    };

    const iajsdwe = {
      //
      genConfig: asdiwe,
    };

    const asdjwae = (
      //
      // "asdokweqw";
      <AddInfoMedia {...iajsdwe} />
    );

    return asdjwae;
  }

  const asijwqe =
    //
    beloas && <AddFo />;
  // beloas

  function asjwe(valueos) {
    logs.logga("___ valueos ___", valueos);

    onNameChange(valueos);
    setnameIt(valueos);
  }

  const iajsdwe = {
    defaultValue: nameIt,
    // onChange: onNameChange,
    // onEdit: onNameChange,
    onSubmit: asjwe,
    // setnameIt
  };

  // const

  const vkdfsfa = {
    costCurr: {
      textvar: "price",
      iconvar: "money",
    },
    timeBase: {
      textvar: obj.mediaDuration,
      iconvar: "clock",
    },
  };

  const iajdw = [
    //
    "timeBase",
    "costCurr",
    // "addTranscript",
  ];

  const qeqwasd = {
    className: "buttonHover,",
  };

  const belConfo = {
    dictvar: vkdfsfa,
    listvar: iajdw,
    itemConfig: qeqwasd,
  };

  const yeqw = {
    //
    editableConfig: onNameChange && iajsdwe,
    // lineCount: 0,
  };

  const wkdwqe = {
    ...args,
    obj: obj,
    nameConfig: yeqw,
    belowObj: asijwqe,
    // className: gens.butClass,
    // bottomType: "meta",
    // belowConfig: belConfo,
  };

  logs.logga("___ ORDERMEDIA MAIN ___", wkdwqe);

  const okfdsd = (
    <>
      {/* zdfsdfsd */}
      {/*  */}
      <MediaList
        //
        {...wkdwqe}
        linkBase
        // noClass
        // noBelow
        // noPopRequest
      />

      {/* asdfokearwe */}
    </>
  );

  const aushwe = {
    padding: "5px 15px",
    margin: "20px 0",
    style: { minHeight: "100px" },
  };

  // 1console

  logs.logga("___ obj ___", obj);

  const butMainfo =
    //
    mainConf();

  const okasew = {
    // listvar: "edit",
    // itemConfig: ajwe,
    ...butMainfo,
    ...rightIconsConfig,
  };

  const asdjnqwe = {
    // obj: okfdsd,
    topObj: okfdsd,
    obj: obj,
    buttonConfig: okasew,
    style: aushwe,
    saveTrue: saveTrue,
    editFunc: () => sdjaewe("details"),
    removeFunc: removeOrderItem,
    ...orderConfig,
  };

  logs.logga("___ okasew ___", okasew);
  logs.logga("___ ORDERMEDIA ___", asdjnqwe);

  const wq8ey = (
    //
    // <>sdofr</>
    <ModelObject {...asdjnqwe} />
  );
  //
  const asdijw = {
    obj: wq8ey,
    // orde,
  };

  const jisadwe = <BearDiv {...asdijw} />;

  //
  return jisadwe;
}
