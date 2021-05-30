import React, {
  //
  useState,
  useContext,
} from "react";
import { MdPlaylistPlay } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import { BsChatQuote } from "react-icons/bs";
import { BiShare, BiCommentDetail, BiEdit } from "react-icons/bi";
import { SiMicrosoftteams, SiNotion, SiSlack } from "react-icons/si";
import {
  AiOutlineLink,
  AiFillDelete,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiExternalLink, FiSettings } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import {
  FaPlay,
  FaSignOutAlt,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { BearDiv } from "./BearDiv";
import { BearTextMedia } from "./BearTextMedia";
// import BearFloat from "../components/BearFloat";
// import BearTextMedia from "../components/BearTextMedia";

export function BearIcon(sdfoger, sdfke) {
  // 1tick
  const lasew = {
    style: {
      // background: "green",
      color: "green",
      // ...sdfke,
    },
  };

  const okasdew = (
    //
    // <TiTickOutline />
    <AiOutlineCheckCircle {...lasew} />
  );

  // 1signout
  const sduhfer = (
    //
    <FaSignOutAlt />
  );

  // 1time
  const lasdew = (
    //
    <RiTimerLine />
    // <AiOutlineClockCircle />
  );

  // 1play
  const sfdgmr = (
    //
    <FaPlay />
  );

  // 1playlist
  const asdkqe = (
    //
    <MdPlaylistPlay />
  );

  // 1share
  const sjerw = (
    //
    <BiShare />
  );

  // 1edit
  const sdiwer = (
    //
    <BiEdit />
  );

  // 1star
  const dfigjew = (
    //
    <TiStar />
  );

  // 1close
  const kxmvs = (
    //
    <AiOutlineCloseCircle />
  );

  const iosade = (
    //
    <FaQuoteLeft />
  );

  const asdhgew = (
    //
    <FaQuoteRight />
  );

  // 1quote
  const oksaew = (
    //
    <BsChatQuote />
  );

  // 1comment
  const sowaseowq = (
    //
    <BiCommentDetail />
  );

  // 1delete
  const asdfewr = (
    //
    <AiFillDelete />
  );

  // 1link
  const linkios = (
    //
    <AiOutlineLink />
    // <FiExternalLink />
  );

  // 1settings
  const sdijwqe = (
    //
    <FiSettings />
  );

  // 1icons
  const ijsadwe = {
    // facebook:
    // twitter:
    // whatsapp
    signout: sduhfer,
    tick: okasdew,
    delete: asdfewr,
    playlist: asdkqe,
    settings: sdijwqe,
    share: sjerw,
    star: dfigjew,
    comment: sowaseowq,
    link: linkios,
    play: sfdgmr,
    edit: sdiwer,
    quote: oksaew,
    quoteLeft: iosade,
    quoteRight: asdhgew,
    time: lasdew,
    teams: <SiMicrosoftteams />,
    slack: <SiSlack />,
    // 1notion
    notion: <SiNotion />,
    close: kxmvs,
  };

  let oksdew = ijsadwe[sdfoger];
  oksdew = oksdew ? oksdew : sdfoger;

  function Berios() {
    const fdjghrt = (
      <>
        {oksdew} {sdfke}
      </>
    );

    const ritdfsr = {
      obj: fdjghrt,
      flexTrue: true,
      vertAlign: true,
    };

    return <BearDiv {...ritdfsr} />;
  }

  function JAsds() {
    const oaksdw = {
      iconvar: oksdew,
      textvar: sdfke,
    };

    return <BearTextMedia {...oaksdw} />;
  }

  const okasde = {
    spanTrue: true,
    obj: oksdew,
    ...sdfke,
  };

  const cbnkfg =
    //
    // oksdew
    oksdew;
  // BearDiv(okasde);
  // sdfke
  //   ? //
  //     // Berios()
  //     JAsds()
  //   : //
  //     oksdew;

  return cbnkfg;
}
