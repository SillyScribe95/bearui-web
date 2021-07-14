import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  //   BearCollapse,
  BearDiv,
  BearList,
  BearModel,
  BearModalWarning,
  BearForm,
  BearTextarea,
  BearIcon,
  BearFlex,
  BearBorder,
  BearButtonList,
} from "bearui-web";
import {
  //
  logs,
  removeKeyDict,
  checkFullArray,
} from "@SillyScribe95/bedia-shared/";
import { ChatItem } from "./ChatItem";
import { MainContext } from "../context/ChatContext";

export function ChatFolder({
  //
  name,
  chatLink,
  drafts,
  inputValue,
  ...args
}) {
  //
  // 1const
  const { newDraft, setChatStorage, chatConstDict, setNewDraft } =
    useContext(MainContext);

  // const openSet = inputValue;
  const [cxzivd, setopenSet] =
    //
    [true, ""];

  const openSet = checkFullArray(drafts);
  // useState(inputValue);
  // const [newtro, setnewtro] = useState();

  const dfgree =
    //
    "";
  // "buttonHover"
  // "greyHover"

  const didsaew = {
    // onClick: setopenSet,
    // ignoreEmpty: true,
    className: dfgree,
    style: {
      paddingLeft: "5px",
      textAlign: "left",
    },
  };

  function fdigjre(asdkrew) {
    const dfijgews = {
      // folder,
      // message,[]
      name,
      message: asdkrew,
    };

    logs.logga("___ dfijgews ___", dfijgews);

    const sokeaws =
      //
      // adofkw;
      ChatItem(dfijgews);
    // "fdigjre";

    return <BearDiv {...didsaew}>{sokeaws}</BearDiv>;
  }

  // 1name 1folder
  const difjesae = "📁 " + name;

  function DoneLiso() {
    const cvobkr = {
      bearName: "messageBase",
      list: drafts,
      renderItem: fdigjre,
      // hideList: !openSet,
      itemConfig: didsaew,
    };

    return BearList(cvobkr);
  }

  function xvcbokf() {
    const sdifase = {
      //
      type: "message",
      name,
    };
    // newDraft, setNewDraft
    setNewDraft(sdifase);
  }

  const sdkfms = [
    //
    "link",
    "new",
    // "edit",
    "delete",
  ];

  // 1new
  const newDcos = {
    iconvar: "plus",
    // textvar: "New",
    onClick: xvcbokf,
  };

  // 1delete
  const difgret = {
    warnMessage: "Are you sure you want to delete '" + name + "'?",
  };

  function Akozxc() {
    //
    const nsdra = removeKeyDict(chatConstDict, name);
    logs.logga("___ DELETE ___", { nsdra });

    setChatStorage(nsdra);
  }

  function linkClick() {
    const sdifase = {
      //
      type: "chatLink",
      name,
    };

    logs.logga("___ CREAT LINK FOR ___", name, sdifase);

    setNewDraft(sdifase);
  }

  // 1link
  const nvdfewr = chatLink
    ? {
        // link: chatLink,
        outsideLink: chatLink,
      }
    : {
        onClick: linkClick,
      };

  const kfsdd = {
    iconvar: "link",
    ...nvdfewr,
  };

  logs.logga("___ LINK DETAILS ___", name, kfsdd);

  function dsfwer(xvcbfd) {
    logs.logga("___ xvcbfd ___", xvcbfd);

    Akozxc(xvcbfd);
  }

  // 1icon
  const sdijfewr = {
    onDelete: dsfwer,
    warnDelete: true,
    deleteConfig: difgret,
    //
    //
    //
    list: sdkfms,
    dictvar: {
      link: kfsdd,
      new: newDcos,
    },
    itemConfig: {
      //
      noText: true,
    },
    typeList: "button",
    bearName: "chatHeadIcon",
    horiz: true,
  };

  function SADAWEA() {
    //

    const ijsdre = (
      <>
        {/*  */}
        {/* {BearList(sdijfewr)} */}
        <DoneLiso />
      </>
    );

    return ijsdre;
  }

  const sidjfwre =
    //
    // "asodkwew";
    // TextGo();
    openSet && SADAWEA();
  //   BearCollapse(cvobkr);

  function NewIos() {
    const ijdsfewr = {
      // onClick:
      className: "greyHover",
    };

    return (
      <BearDiv {...ijdsfewr}>
        {/*  */}
        {BearIcon("plus")}
      </BearDiv>
    );
    // return <BearIonc {...ijdsfewr}> </BearButton>
  }

  const qwads = drafts && drafts.length;
  const sidjwre = qwads && qwads > 0;
  const asdww = sidjwre && ASJADwe();

  // 1message 1length 1number
  function ASJADwe() {
    const ngdfsa = {
      //
      style: {
        color: "red",
      },
      fontSize: "0.7em",
    };

    const cbokf =
      //
      qwads;
    // qwads + " messages";

    const isdjras = <BearDiv {...ngdfsa}>{cbokf}</BearDiv>;

    return isdjras;
  }

  const asiwe = openSet && NewIos();
  const dfgers = [
    //
    difjesae,
    // asiwe,
    asdww,
  ];

  const isjdweq = {
    // onClick: () => setopenSet(!openSet),
    // className: "buttonHover",
    list: dfgers,
    // style: {
    //   border: "2px solid red",
    // },
  };

  // 1flex
  const vbokdf = <BearFlex {...isjdweq} />;

  // 1model
  function Masijw() {
    const gijhtdd = {
      //
      ...sdijfewr,
    };
    const sidjfser = <BearModel {...gijhtdd}>{vbokdf}</BearModel>;

    const xcvd = {
      style: {
        // margin: "5px 20% 20px 5px",
      },
    };

    return <BearDiv {...xcvd}>{sidjfser}</BearDiv>;
  }

  // 1console

  logs.logga("___ chtFolder PERSON ___", { name, chatLink });

  const okfdsd = (
    <>
      {/*  */}
      {Masijw()}
      {/* {vbokdf} */}
      {sidjfwre}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
