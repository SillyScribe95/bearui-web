import React, {
  //
  useState,
  useContext,
} from "react";
import {
  checkFullArray,
  getFirstArr,
  logs,
  QueryMain,
} from "@SillyScribe95/bedia-shared/";

import { BearDiv } from "../../components/BearDiv";
// import ModelList from "../model/ModelList";
import { AlterHighlight } from "./AlterHighlight";
import { BearList } from "../../components/list/BearList";
import { QueryNode } from "../../functions/backendFuncs";

export function NewHighlight({
  //
  linkDetails,
  findLink,
  media,
  formData,
  formConfig,
  genConfig,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  const {
    //
    // ...medMain
    data: medMain,
    loading: lodMed,
  } =
    //
    "";
  // linkDetails ? QueryNode("fetch-media", linkDetails) : "";

  const sdfkwe = {
    ...getFirstArr(medMain),
    ...media,
  };

  formData = {
    ...formData,
    media: sdfkwe,
  };

  const { data: similarHighs, isLoading: lodOther } =
    //
    "";
  // getHighsSameMedia(formData);
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
      title: "Other Highlights from this Playlist",
      list: similarHighs,
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
      list: [ikad],
      horiz: true,
      itemConfig: sdkfre,
      typeList: "button",
    };

    // const

    const kdsfsr = <BearList {...vbdf} />;

    const sfdgret = (
      <>
        {/*  */}
        Join Bedia to start making Clips.
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
      loadTrue: lodMed,
      ...formConfig,
      ...args,
      mediaList: sdfkwe,
      formData: formData,
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

  // 1console
  const sdfjww = {
    //
    MEDIA: medMain,
  };

  logs.logga("___ NEWw-HIGHLGIHT ___", sdfjww);

  const ijsdq = {
    obj: okfdsd,
    // ...genConfig,
  };

  //
  return <BearDiv {...ijsdq} />;
}
