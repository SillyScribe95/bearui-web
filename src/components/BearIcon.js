import { MdPlaylistPlay } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import { BiShare, BiCommentDetail, BiEdit } from "react-icons/bi";
import { SiMicrosoftteams, SiNotion, SiSlack } from "react-icons/si";
import {
  AiFillDelete,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
// import BearFloat from "../components/BearFloat";
// import ImageBaseText from "../components/ImageBaseText";

export function BearIcon(sdfoger, sdfke) {
  // 1tick
  const lasew = {
    style: {
      // background: "green",
      color: "green",
      ...sdfke,
    },
  };

  const okasdew = (
    //
    // <TiTickOutline />
    <AiOutlineCheckCircle {...lasew} />
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
    <FiExternalLink />
  );

  const ijsadwe = {
    tick: okasdew,
    delete: asdfewr,
    playlist: asdkqe,
    share: sjerw,
    star: dfigjew,
    comment: sowaseowq,
    link: linkios,
    play: sfdgmr,
    edit: sdiwer,
    time: lasdew,
    teams: <SiMicrosoftteams />,
    slack: <SiSlack />,
    notion: <SiNotion />,
    close: kxmvs,
  };

  return "";
  // return ijsadwe[sdfoger];
}
