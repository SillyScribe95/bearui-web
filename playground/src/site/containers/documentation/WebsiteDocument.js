import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearDiv,
  BearSearchList,
  BearList,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import {
  aboutBaseDict,
  aboutBaseSearch,
} from "../../const/aboutConst/aboutBase";
import { useHistory } from "react-router-dom";

export function WebsiteDocument({
  //
  baseLink = "/about",
  match: { url, params },
  // params: { typevar, slugURL, ...asewq },
  ...args
}) {
  let history = useHistory();

  logs.logga("___ website args ___", { url, params, args });

  // 1const
  function asdokwqe(sdfr) {
    logs.logga("___ sdfr ___", sdfr);

    return "asodfkqw";
  }

  function kdsfsde(xcvblf) {
    // logs.logga("___ text ___", text);

    const fgijre = {
      divContainer: xvbjdfs,
      ...xcvblf,
    };

    return (
      <div>
        <BearDiv {...xcvblf} />
      </div>
    );
  }

  function xvbjdfs(xcbmfg) {
    return "- " + xcbmfg;
  }

  const difjger = {
    divContainer: xvbjdfs,
  };

  const difjwsa = {
    // margin: "2px",
    padding: "2px",
    // border: "2px solid red",
  };

  function asidqe(sodkg) {
    logs.logga("z-zzz-sodkg", sodkg);
    history.push(sodkg);
  }

  const isjdewae = {
    bearName: "searhcio",
    ...aboutBaseSearch,
    typeList: "div",
    itemConfig: difjger,
    optionStyle: difjwsa,
    // renderItem: kdsfsde,
    // labelFunc: asdokwqe,
    onChange: asidqe,
    onChangeSetValue: false,
    width: "200px",
    searchAttrs: ["text", "tags"],
  };

  const okfdsd = (
    <>
      {/*  */}
      <BearSearchList {...isjdewae} />
      {/* <BearList {...isjdewae} /> */}
    </>
  );

  // 1itemo

  const isdjsre =
    url &&
    BearDiv({
      logtrue: true,
      text: url && aboutBaseDict[url],
    });

  args = {
    bearName: "listHoriz",
    list: [okfdsd, isdjsre],
    horiz: true,
    typeList: "return",
    ...args,
  };

  // return
  // return okfdsd;
  // return isdjsre;
  // return "oaskdqwe";
  return <BearList {...args} />;
}
