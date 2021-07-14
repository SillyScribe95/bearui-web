import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearSearchList,
  BearDiv,
  BearTextarea,
  BearTextMedia,
  BearModal,
  FormBase,
  BearForm,
  BearButton,
  BearCarousel,
  BearFlex,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { ChatFolder } from "./ChatFolder";
import { MainContext } from "../context/ChatContext";

export function ChatMain({
  //
  nameBase = "",
  ...args
}) {
  // 1const
  const {
    newContact,
    setnewContact,
    newDraft,
    setNewDraft,
    chatConstList,
    chatConstDict,
    setChatStorage,
  } = useContext(MainContext);

  const sdfkr =
    //
    chatConstList;

  // 1name
  const draftMessNAME =
    //
    newDraft ? newDraft.name : nameBase;
  const currNameEdit = chatConstDict[draftMessNAME];

  const [termIt, settermit] = useState(nameBase);
  const [trueInd, settrueInd] = useState();

  function asdae(idjfg) {
    const isjdsdz = {
      // onClick: jsdsd,
      style: {
        margin: "140px 0",
        padding: "140px 0",
      },
    };

    function jsdsd(cvkd) {
      logs.logga("___ CLICK FOLDER ___", idjfg);
      settermit(idjfg.name);
    }

    // return "aidawew";
    return <BearDiv {...isjdsdz}>{ChatFolder(idjfg)}</BearDiv>;
  }

  function asijdwq(avsodk) {
    logs.logga("___ CREATE NEW FOLDER avsodk ___", avsodk);

    const sijewae = {
      name: avsodk,
      drafts: [],
    };

    const idsfase = {
      [avsodk]: sijewae,
      ...chatConstDict,
    };

    setChatStorage(idsfase);
  }

  //  1search
  function Selios() {
    const ijsserw = {
      fontSize: "20px",
      // textAlign: "left",
    };

    // 1input
    const initSaso =
      //
      termIt;
    // "John";

    const skdfer = initSaso && {
      initialValue: initSaso,
      // defaultValue: { label: "Select Dept", value: 0 },
      // value: { label: "John", value: 0 },
    };

    function ckvjdf(xcnvr) {
      logs.logga("___ xcnvr ___", xcnvr);

      // return "Scokwe";
      return asdae(xcnvr);
    }

    function xvobkfd(asdfas) {
      //

      const gbkhfds = "Create 📁 " + asdfas;

      const sidjfw = {
        textAlign: "center",
        color: "red",
        background: "white",
        padding: "2% 15%",
        fontSize: "24px",
        borderRadius: "5px",
        background: "green",
        color: "white",
      };

      const aushdwe = {
        className: "buttonHover",
        style: sidjfw,
        onClick: () => asijdwq(asdfas),
      };

      const okxcvdff = <div {...aushdwe}>{gbkhfds}</div>;

      // return gbkhfds;
      return okxcvdff;
    }

    const sdferw =
      //
      xvobkfd;
    // "okasdae";

    // optionBorder: true,
    // onChangeSetValue: false,
    // hoverStyle: {
    //   background: "red",
    // },
    // onInputChange: settermit,
    // inputValue: termIt,

    const sijde = {
      width: "100%",
      // width: "70vw",
      bearName: "chatDaft",
      list: sdfkr,
      renderItem: ckvjdf,
      onCreate: asijdwq,
      create: true,
      noOptionsMessage: sdferw,
      optionStyle: ijsserw,
      searchAttrs: [
        //
        "name",
        // "drafts",
      ],
      ...skdfer,
    };

    return <BearSearchList {...sijde} />;
  }

  function NewIios() {
    // newtro, setnewtro;

    // 1submtit DRAFT
    function cjcvsd(message) {
      logs.logga("___ New Contact ___", message);

      const currDrafts =
        //
        [
          //
          ...[message],
          ...currNameEdit.drafts,
        ];
      // currNameEdit
      //   ? [...currNameEdit.drafts, [message]]
      //   : [message];

      logs.logga("___ currDrafts ___", currDrafts);
      // logs.logga("___ ADD NEW MESSAGE ___", {
      //   currNameEdit,
      //   currDrafts,
      //   newDict,
      // });
      //

      return {
        ...currNameEdit,
        drafts: currDrafts,
      };
    }

    const jnvsdfsa = `Draft Message to ${draftMessNAME}`;

    const sijfwer = {
      submitFunc: cjcvsd,
      buttonText: "Save Draft",
      labelMess: jnvsdfsa,
      inputConfig: {
        inputType: "textarea",
      },
    };

    return BaseForm(sijfwer);
  }

  function Linkios() {
    // 1submtit DRAFT
    function linkSubbo(link) {
      //
      logs.logga("___ link ___", link);

      const zxcvasdf = {
        chatLink: link,
      };

      return zxcvasdf;
    }

    const xvcbjfd = {
      //
      buttonText: "Save Link",
      submitFunc: linkSubbo,
      labelMess: `Add Link for ${draftMessNAME}`,
      inputConfig: {
        inputType: "url",
      },
    };

    return BaseForm(xvcbjfd);
  }

  function BaseForm({ labelMess, inputType, submitFunc, inputConfig }) {
    // 1draft 1message
    const [valios, setvalios] = useState();
    function ijdsds(vcbkfdf) {
      logs.logga("___ vcbkfdf ___", vcbkfdf);

      if (valios) {
        setvalios();
        // setvalios(vcbkfdf);
      }
    }

    const sijvsrwe =
      //
      // "cccccccccc";
      // valios;
      "";

    const sifdsf = valios && {
      initialValue: sijvsrwe,
      value: sijvsrwe,
    };

    logs.logga("___ chatMain VALUE ___", sifdsf);

    // 1submtit BASIC
    function subBase({ message }) {
      //
      const zxvbdfa = submitFunc(message);
      const newDict = {
        ...chatConstDict,
        [draftMessNAME]: zxvbdfa,
      };

      logs.logga("___SUBMIT BASIC newDict ___", { message, newDict });

      setvalios(true);
      setNewDraft();
      setChatStorage(newDict);
    }

    const sadawew = {
      className: "wrap",
    };
    const vbnlk = <BearDiv {...sadawew}>{labelMess}</BearDiv>;

    const textoco = {
      ...sifdsf,
      onChangeValue: ijdsds,
      label: vbnlk,
      requiredMark: false,
      required: true,
      inputType,
      ...inputConfig,
    };

    // 1form
    const sijfwer = {
      list: ["message"],
      inputConfig: textoco,
      //
      bearName: "asokdewq",
      formid: "asokde",
      onSubmit: subBase,
      style: { textAlign: "left" },
      buttonConfig: {
        style: {
          // margin: "5px",
          fontSize: "1.3em",
        },
      },
    };

    return BearForm(sijfwer);
  }

  function DraftModo() {
    function asdase() {
      logs.logga("___ setNewDraft() ___", setNewDraft());
      // setNewDraft()
    }

    let modView = "";
    if (newDraft) {
      switch (newDraft.type) {
        case "message":
          modView = NewIios();
          break;
        case "chatLink":
          modView = Linkios();
      }
    }

    const nskdre = {
      style: {
        padding: "20px ",
      },
    };

    const sidsewe = (
      <div {...nskdre}>
        {/*  */}
        {modView}
      </div>
    );
    const jaewe = {
      open: newDraft,
      onClose: asdase,
    };

    return <BearModal {...jaewe}>{sidsewe}</BearModal>;
  }

  const kdmvs = (
    <>
      {/*  */}
      <Selios />
      <DraftModo />
    </>
  );

  const fjvxsa = [
    //
    Selios(),
    NewIios(),
  ];

  const jvxcds =
    //
    // 0;
    // 1;
    newDraft ? 1 : 0;

  const dfsae = {
    bearName: "aokdew",
    list: fjvxsa,
    slideNum: jvxcds,
  };

  const asjdfwer =
    //
    // cxvfdsd;
    // Selios();
    // NewIios()
    // newContact
    // newDraft ? NewIios() : Selios();
    // BearCarousel(dfsae);
    kdmvs;

  return <BearDiv {...args}>{asjdfwer}</BearDiv>;
}
