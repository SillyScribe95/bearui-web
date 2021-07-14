import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "../../index";
import * as soco from "../../consts/socialConst";
import { BearTextMedia } from "../BearTextMedia";
import { BearList } from "../list/BearList";
import { BearForm } from "../form/BearForm";
import { linkOrdse } from "../../functions/globalFuncs";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearSocialBase } from "./BearSocialBase";

export function BearSocialShare({
  //
  shareLink,
  shareText,
  userText,
  iconSide,
  nameTrue,
  iconPop,
  dictvar,
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

  function sfasawe({
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
    const ijsaew = {
      compName: "BearSocialShare",
      typevar: typevar,
      textvar: shareText,
      link: shareLink,
      ...asswd,
    };

    // endValue = {
    //   copyLink {
    //     copyText: shareLink,
    //   } : {
    //   link: linkOrdse(ijsaew)}

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

    const jsaease = {
      ...endValue,
      ...mainIco,
      iconvar,
      // textvar: toolText,
      // leftobj: iconvar,
      noVertTop: true,
      // popContent: toolText,
      padvar: 5,
    };

    return jsaease;
  }

  const ijsadwe = {
    dictvar: soco.authListDict,
    renderFunc: sfasawe,
    ...sdfsrew,
  };

  logs.logga("___ LISTSOCIAL ___", ijsadwe);

  function NameSingio() {
    function asokds(sdfer) {
      logs.logga("___ setcosNamB ___", sdfer);

      // setcosNamB(sdfer);
    }

    const okasew = {
      bearName: sodkfwe,
      // onSubmit: subopens,
      onChange: asokds,
      singleTrue: true,
      noButton: true,
      list: [
        {
          name: "name",
        },
      ],
    };

    const vcbfd = <BearForm {...okasew} />;

    return vcbfd;
  }

  const tkdf = nameTrue && <NameSingio />;

  const compBase = (
    <>
      {/* // */}
      {/* // "palsdewq"; */}
      {tkdf}
      <BearSocialBase {...ijsadwe} />
    </>
  );

  //
  const ijfdewr = BearCheckMain("BearSocialShare", compBase, ijsadwe);

  return ijfdewr;
}