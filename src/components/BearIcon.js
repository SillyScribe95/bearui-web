import { MdArrowBack, MdArrowForward, MdPlaylistPlay } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import { BiExpand } from "react-icons/bi";
import { BsChatQuote } from "react-icons/bs";
import { BiShare, BiCommentDetail, BiEditAlt, BiEdit } from "react-icons/bi";
import { SiAmazon, SiMicrosoftteams, SiNotion, SiSlack } from "react-icons/si";
import {
  AiOutlineLink,
  AiFillDelete,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlinePlus,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiExternalLink, FiSettings } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import {
  FaPlay,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaQuoteLeft,
  FaQuoteRight,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { BearDiv } from "./BearDiv";
import { BearTextMedia } from "./BearTextMedia";
import { BearError } from "./BearError";
// import BearFloat from "../components/BearFloat";
// import BearTextMedia from "../components/BearTextMedia";
import React, {
  //
  useState,
  useContext,
  useEffect,
} from "react";
import {
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiReddit,
  SiTwitter,
  SiWhatsapp,
  SiYcombinator,
} from "react-icons/si";
import { AiOutlineCopy } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

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
    <FaCheck {...lasew} />
    // <AiOutlineCheckCircle {...lasew} />
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

  // 1info
  const jdfgrt = (
    //
    <AiOutlineInfoCircle />
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
    // <FiEdit2 />
    <BiEditAlt />
    // <VscEdit />
    // <BiEdit />
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

  // 1search
  const sdfgorek = (
    //
    <AiOutlineSearch />
    // < />
  );

  // 1settings
  const sdijwqe = (
    //
    <FiSettings />
  );

  // 1email
  const ijsfr = (
    //
    <AiOutlineMail />
  );

  // 1brands 1social
  const brandCons = {
    twitter: <SiTwitter />,
    reddit: <SiReddit />,
    ycombinator: <SiYcombinator />,
    linkedin: <SiLinkedin />,
    google: <SiGoogle />,
    whatsapp: <SiWhatsapp />,
    facebook: <SiFacebook />,
    teams: <SiMicrosoftteams />,
    amazon: <SiAmazon />,
    slack: <SiSlack />,
    // 1notion
    notion: <SiNotion />,
  };

  // 1general 1icon
  const ijsadwe = {
    // left: <
    // right:
    back: <MdArrowBack />,
    forward: <MdArrowForward />,
    info: jdfgrt,
    email: ijsfr,
    search: sdfgorek,
    signout: sduhfer,
    copy: <FaCopy />,
    expand: <BiExpand />,
    tick: okasdew,
    delete: asdfewr,
    playlist: asdkqe,
    settings: sdijwqe,
    share: sjerw,
    star: dfigjew,
    plus: <AiOutlinePlus />,
    comment: sowaseowq,
    link: linkios,
    play: sfdgmr,
    edit: sdiwer,
    quote: oksaew,
    quoteLeft: iosade,
    quoteRight: asdhgew,
    //
    time: lasdew,
    clock: lasdew,
    //
    close: kxmvs,
    ...brandCons,
  };

  let oksdew = ijsadwe[sdfoger];
  oksdew = oksdew
    ? oksdew
    : //
      //
      sdfoger;
  // BearError("No icon found in BearUI's libary for '" + sdfoger + "'.");

  function Berios() {
    const fdjghrt = (
      <>
        {oksdew} {sdfke}
      </>
    );

    const ritdfsr = {
      obj: fdjghrt,
      flex: true,
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
    span: true,
    obj: oksdew,
    ...sdfke,
  };

  const cbnkfg =
    //
    // oksdew
    sdfke ? BearDiv(okasde) : oksdew;
  //   ? //
  //     // Berios()
  //     JAsds()
  //   : //
  //     oksdew;

  return cbnkfg;
}
