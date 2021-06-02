import React, {
  //
  useState,
  useContext,
} from "react";
import {
  getBlankLink,
  linkuseNameProvide,
  logs,
} from "@SillyScribe95/bedia-shared/";
import * as soco from "../../consts/socialConst";
import { BearTextMedia } from "../BearTextMedia";
import { BearList } from "./BearList";
import { BearForm } from "../form/BearForm";
import { linkOrdse } from "../../functions/globalFuncs";

export function BearSocial({
  //
  shareLink,
  shareText,
  userText,
  iconSide,
  nameTrue,
  iconPop,
  iconStyle,
  embedCode,
  itemConfig,
  ...sdfsrew
}) {
  // 1const
  const [type, setType] = useState("");
  const [cosNamB, setcosNamB] = useState();
  const sodkfwe = "asdqweqs";

  userText = cosNamB ? cosNamB : userText;
  // userText = "okwqeasd sodkdsfo";
  const sdokfwe = userText ? `&${linkuseNameProvide}=${userText}` : "";

  shareLink =
    //
    // shareLink + "sdokfwe";
    shareLink + sdokfwe;

  let zoeqasd =
    //
    cosNamB;
  // "cosNamB"

  function iasjde({
    //
    typevar,
    iconvar,
    iconText,
    textvar,
    toolText,
    styleIcon,
    style,
    copyLink,
    ...asswd
  }) {
    // toolText = "Share on " + toolText;

    const ijsaew = {
      typevar: typevar,
      textvar: shareText,
      linkvar: shareLink,
      ...asswd,
    };

    // endValue = {
    //   copyLink {
    //     copyText: shareLink,
    //   } : {
    //   linkvar: linkOrdse(ijsaew)}

    let endValue = "";
    switch (typevar) {
      case "copy":
        endValue = {
          copyConfig: {
            copyMessage: "Copied Link",
            copyText: shareLink,
          },
        };
        break;
      case "embed":
        endValue = {
          copyConfig: {
            copyMessage: "Copied Embed Code!",
            copyText: embedCode,
          },
        };
        break;
      default:
        endValue = {
          ...getBlankLink(linkOrdse(ijsaew)),
        };
    }

    const sdfebvjf = {
      ...style,
    };

    const fdjwqe = <>{/*  */}</>;

    let mainIco = {
      iconConfig: {
        style: {
          fontSize: "0.9em",
          // width: "50px",
          // height: "50px",
          borderRadius: "60%",
          padding: "10px",
          ...styleIcon,
          ...iconStyle,
        },
      },
    };

    let saewawe = iconSide && {
      textvar: toolText,
      ...mainIco,
    };

    let ikasde = iconPop && {
      popConfig: {
        trigger: "click",
        content: toolText,
      },
    };

    const jsaease = {
      ...saewawe,
      ...ikasde,
      ...itemConfig,
      ...endValue,
      ...mainIco,
      iconvar: iconvar,
      // textvar: toolText,
      // leftobj: iconvar,
      noVertTop: true,
      // popContent: toolText,
      padvar: 5,
    };

    const gfnmeir = (
      <>
        <BearTextMedia {...jsaease} />
        {/* <BearFloat {...jsaease} /> */}
        {/* dowqe */}
      </>
    );

    const sdjerw =
      //
      typevar == "facebook";
    // true

    if (sdjerw) {
      // 1console
      logs.logga(typevar + "___ Link Social BASIC ___", ijsaew);
      logs.logga(typevar + "___ns Link Social FULL ___", jsaease);
      logs.logga(typevar, "___ mainIco ___", mainIco);
    }

    return gfnmeir;
  }

  const sdije = {
    className: "buttonHover expandHover",
  };

  const niajdw = [
    //
    "twitter",
    // "twitterdm",
    // "linkedin",
    // ""
  ];

  let okaasad = [
    //
    "facebook",
    "twitter",
    "whatsapp",
    "reddit",
    "hackernews",
    "embed",
    "copy",
  ];

  function sadqwe(cvdfa) {
    //
    let osdasew =
      //
      iasjde(cvdfa);
    // "qplwqe";

    return osdasew;
  }

  const ijsadwe = {
    dictvar: soco.socialListDict,
    listvar: okaasad,
    renderItem: sadqwe,
    typeTrue: "t",
    iconSide: iconSide,
    // horiz: true,
    // itemConfig: sdije,
    // linkConfig: linksos,
    ...sdfsrew,
  };

  logs.logga("___ LISTSOCIAL ___", ijsadwe);

  function NameSingio() {
    function asokds(sdfer) {
      logs.logga("___ setcosNamB ___", sdfer);

      // setcosNamB(sdfer);
    }

    const okasew = {
      formid: sodkfwe,
      // onSubmit: subopens,
      onChange: asokds,
      singleTrue: true,
      noButton: true,
      listvar: [
        {
          name: "name",
        },
      ],
    };

    const vcbfd = <BearForm {...okasew} />;

    return vcbfd;
  }

  const tkdf = nameTrue && <NameSingio />;

  const ijsaddsf = (
    <>
      {/* // */}
      {/* // "palsdewq"; */}
      {tkdf}
      <BearList {...ijsadwe} />
    </>
  );

  //
  return ijsaddsf;
}

// let oaskdwe = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@charlidamelio/video/6772082062670204166" data-video-id="6772082062670204166" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@charlidamelio" href="https://www.tiktok.com/@charlidamelio">@charlidamelio</a> <p>i am now in the car on the way to the airport just an update</p> <a target="_blank" title="♬ original sound - ❗️Arkansas boy😁👋🏽" href="https://www.tiktok.com/music/original-sound-6755923489514965766">♬ original sound - ❗️Arkansas boy😁👋🏽</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`;
