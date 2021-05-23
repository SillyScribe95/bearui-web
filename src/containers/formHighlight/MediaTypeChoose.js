import React, {
  //
  useState,
  useContext,
} from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { BearDiv } from "../../components/BearDiv";
import {
  //
  moveItemFront,
  logs,
} from "@SillyScribe95/bedia-shared/";
import { BearList } from "../../components/list/BearList";
import { BearFloat } from "../../components/BearFloat";
import { ModelObject } from "../model/ModelObject";
import { BearIconText, FlexMain } from "../../components/GlobalComps";
import { BearError } from "../../components/BearError";

export function MediaTypeChoose({
  //
  mediaType,
  chooseFunc,
  mediaObj,
  obj,
  ...args
}) {
  // 1context
  //   const { formData, mediaType, setmediaType } = useContext(MainContext);
  //   const { aaa } = useContext(AuthContext);

  // 1const

  // function ListDrop(){
  //     const saokwe =
  // }

  function ItemOver() {
    const sdfwe = [
      //
      "video",
      "audio",
      "book",
    ];

    const mediaList = moveItemFront(sdfwe, mediaType);

    const saeasew = {
      book: { iconvar: "📖", textvar: "Reading" },
      video: { iconvar: "🎥", textvar: "Watching" },
      audio: { iconvar: "🎤", textvar: "Listening" },
    };

    const okaew = saeasew[mediaType];

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const sdfjkre = {
      isOpen: dropdownOpen,
      toggle: toggle,
    };

    const ioaew = {
      style: { borderRadius: "70%" },
    };

    function rendo({ itemType, iconvar, textvar }) {
      const difjsr = (
        <>
          {iconvar} {textvar}
        </>
      );

      function setios() {
        // setmediaType(itemType)
        chooseFunc(itemType);
      }

      const isdese = {
        obj: difjsr,
        onClick: setios,
      };

      const sdfere = <BearDiv {...isdese} />;

      return <DropdownItem>{sdfere}</DropdownItem>;
    }

    const okadsew = {
      listvar: mediaList,
      dictvar: saeasew,
      renderItem: rendo,
    };
    // const dkfjf = "aokdsa";
    const dkfjf = <BearList {...okadsew} />;
    // const dkfjf = mediaList.map((asoew) => rendo(saeasew[asoew]));

    const okasdew = (
      <Dropdown {...sdfjkre}>
        <DropdownToggle {...ioaew}>{okaew.iconvar}</DropdownToggle>
        <DropdownMenu>{dkfjf}</DropdownMenu>
      </Dropdown>
    );

    return okasdew;
  }

  function Linkio() {
    const oewqw =
      //
      // "";
      BearIconText("link", mediaObj && mediaObj.name);
    // formData?.title;

    const oksadw = {
      obj: oewqw,
      fontSize: "16px",
      className: "wrapTrue",
      linkvar: mediaObj && mediaObj.webLink,
      linkConfig: {
        noBlack: true,
      },
      style: {
        textOverflow: "ellipsis",
        fontWeight: "bold",
      },
    };

    const oaswe = (
      //
      // <ModelObject
      <BearDiv {...oksadw} />
    );

    return oaswe;
  }

  const okfdsd = (
    <>
      <ItemOver />
      <Linkio />
      {/*  */}
    </>
  );

  const reuthw = {
    logtrue: true,
    leftobj: <ItemOver />,
    rightobj: <Linkio />,
  };

  const xcijgdt = [
    //
    <ItemOver />,
    <Linkio />,
  ];

  const nbaseao = {
    listvar: xcijgdt,
    padvar: "30px",
    // style: {
    //   height: "80px",
    // },
    ...args,
  };

  // return "sdew";
  // return <BearFloat {...reuthw} />;
  // return <BearFloat {...reuthw} />;
  return <FlexMain {...nbaseao} />;
}
