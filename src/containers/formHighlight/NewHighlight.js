import React, {
  //
  useState,
  useContext,
} from "react";
import { checkFullArray, logs } from "@SillyScribe95/bedia-shared/";

import { BearDiv } from "../../components/BearDiv";
// import ModelList from "../model/ModelList";
import { AlterHighlight } from "./AlterHighlight";

export function NewHighlight({
  //
  highlightObj,
  formConfig,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  const { data: similarHighs, isLoading: lodOther } =
    //
    "";
  // getHighsSameMedia(highlightObj);
  let anyHighs = checkFullArray(similarHighs);

  function HighFetch() {
    const saofkq = {
      //
    };

    const sidjwqeqw =
      //
      // "Other people's highlights"
      "Other highlights of this video";

    const ijae = {
      obj: sidjwqeqw,
      style: { textAlign: "center" },
    };
    const kaewase = <BearDiv {...ijae} />;

    const ijsaew = {
      // fetchFunction: get,
      titlevar: "Other Highlights from this Playlist",
      listvar: similarHighs,
      typeList: "highlight",
      itemConfig: {
        style: { fontSize: "18px" },
        noThumbnail: true,
      },
    };

    const asdweawe = (
      <>
        {/* {kaewase} */}
        {/* <ModelList {...ijsaew} /> */}
      </>
    );

    return asdweawe;
  }

  function PostBott() {
    const kadwe = {
      obj: anyHighs ? <HighFetch /> : "",
      style: { marginTop: "50px" },
    };

    const ikawes = <BearDiv {...kadwe} />;

    return ikawes;
  }

  function JoinComment() {
    const ikad = {
      obj: "Preview",
      bediaTrue: true,
    };

    const sdkfre = {
      style: { height: "100%" },
      // className: "shadowHover",
    };

    const vbdf = {
      listvar: [ikad],
      horizTrue: true,
      itemConfig: sdkfre,
      typeList: "button",
    };

    // const

    const kdsfsr = <BearList {...vbdf} />;

    const okaswe = {
      centerConfig: {
        style: { textAlign: "left" },
      },
      centerobj: "Join Bedia to start making notes.",
      rightobj: kdsfsr,
    };

    const sfdgret = (
      <>
        {/*  */}
        Join Bedia to start making notes.
        {/* <BearFloat {...okaswe} /> */}
        {/* Sign up to start making notes.
        {kdsfsr} */}
      </>
    );

    const vffdg = {
      obj: sfdgret,
      style: {
        paddingBottom: "20px",
      },
    };

    const lkdsq = <BearDiv {...vffdg} />;

    return lkdsq;
  }

  function MainForm() {
    const loksdass = {
      loginConfig: {
        topObj: <JoinComment />,
        style: {
          padding: "0 10%",
        },
        logoConfig: { imagesize: 40 },
      },
    };

    const koase = {
      ...loksdass,
      ...formConfig,
    };

    const vbuhd =
      //
      // "sawqe";
      AlterHighlight(koase);

    return vbuhd;
  }

  const awewadw =
    //
    !lodOther && <PostBott />;

  const okfdsd = (
    <>
      {/*  */}
      <MainForm />
      {awewadw}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  //
  return <BearDiv {...args} />;
}
