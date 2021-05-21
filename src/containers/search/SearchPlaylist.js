import React, {
  //
  useState,
  useContext,
} from "react";
import {
  logs,
  getUserPlaylists,
  SaveUser,
  mapFunc,
  // queryData,
  emojiNameString,
} from "@SillyScribe95/bedia-shared";
import { BearDiv } from "../../components/BearDiv";
import { BearSelect } from "../../components/select/BearSelect";
import { queryData } from "../../functions/backendFuncs";

export default function SearchPlaylist({
  //
  userObj,
  singleUser,
  createFunc,
  userPlaylists,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");
  let iasje = mapFunc(userPlaylists, emojiNameString);
  const [opttnas, setoptions] = useState(iasje);
  const plydatuser = userPlaylists;
  const [plydatpub, setplydatpub] = useState();
  let privListPlay = mapFunc(plydatuser, emojiNameString);
  let pubListPlay = mapFunc(plydatpub, emojiNameString);

  // userPlaylists = userPlaylists
  //   ? userPlaylists
  //   : queryData(getUserPlaylists(userObj));

  // 1user
  const userDeetso = {
    label: "Your Playlists",
    options: plydatuser,
  };

  // 1public
  const pubDeetso = {
    label: "Other Playlist",
    options: pubListPlay,
  };

  const sdfwqe = [
    //
    userDeetso,
    pubDeetso,
  ];

  const sdoifew =
    //
    privListPlay;
  // pubListPlay;
  // playBsaelist;
  // listPlayeo && listPlayeo.map(emojiNameString);

  let asdOSAD = [
    //
    { value: "GGGG", label: "GGGG" },
    { value: "hhhh", label: "GGhhhGG" },
    { value: "ffff", label: "ddddd" },
  ];

  // 1options
  const optFIns =
    //
    // asdOSAD;
    opttnas;
  // asokdew;
  // privListPlay;

  // 1value
  let vlaios =
    //
    // asdOSAD;
    type;

  function setNewVal(baseoMojs) {
    let kjsaewe = [
      //
      ...type,
      ...[baseoMojs],
    ];

    let oaskdwe = [
      //
      ...opttnas,
      ...[baseoMojs],
    ];

    logs.logga("___ playlist CREATE NEW  ___", {
      OBJ_VALUE: baseoMojs,
      VALUES: kjsaewe,
      OPTIONS: oaskdwe,
    });

    setType(kjsaewe);
    setoptions(oaskdwe);
    // setcreateModalObj();
  }

  function saowe(sdokfer) {
    let baseoMojs = emojiNameString(sdokfer);
    setNewVal(baseoMojs);

    logs.logga("___ CREATE PLAYLIST SEARCH add ___", {
      sdokfer: sdokfer,
      baseoMojs: baseoMojs,
    });

    if (createFunc) {
      createFunc(sdokfer);
    }

    return baseoMojs;
  }

  function openPlyCreate(sdfpe) {
    logs.logga("___ CREATE PLAYLIST SEARCH GO ___", sdfpe);

    let oksadw = {
      name: sdfpe,
    };

    // saowe
    SaveUser("playlist", userObj, oksadw, saowe);
  }

  function Ajwwa() {
    const asijew = {
      obj: "Join Bedia to start making highlights.",
    };

    return <BearDiv {...asijew} />;
  }

  function askdwe(dsflw) {
    // logs.logga("___ NEW OPTION ___", dsflw);
    let ijsaew = {
      value: dsflw,
      label: dsflw,
    };

    setNewVal(ijsaew);
  }

  function okasdwe(xlcvs) {
    logs.logga("___ SEARCH PLAYLIST onChange ___", xlcvs);
  }

  function sofwqee(kfrree) {
    logs.logga("___ searPlaylist VALUEFUNC ___", kfrree);
    setType(kfrree);
  }

  let cretePlalyDict = {
    initOptions: sdoifew,
    options: optFIns,
    value: vlaios,
    createFunc: openPlyCreate,
  };

  args = {
    ...cretePlalyDict,
    // getNewOptionData: askdwe,
    onChange: okasdwe,
    valueFunc: sofwqee,
    // NoOptionsMessage: Ajwwa,
    logtrue: false,
    messvar: "searchPlaylist",
    // obj: okfdsd,
    ...args,
  };

  const oksae = {
    plydatuser: plydatuser,
  };

  // 1console
  logs.logga("___ searchPlaylist LISTS   ___", oksae);
  logs.logga("___ SearcPlaylist ___", args);
  logs.logga("___ userPlaylists ___", userPlaylists);

  // const isajew = <></>;

  // return "";
  return BearSelect(args);
}
