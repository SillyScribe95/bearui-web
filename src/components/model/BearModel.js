import React, {
  //
  useState,
  useContext,
} from "react";
import * as logs from "../functions/logFuncs";

import { MainContext } from "../contexts/MainContext";
import { AuthContext } from "../contexts/AuthContext";
import { ImageTextList } from "../functions/GlobalFunctions";
import BearFloat from "./BearFloat";
import { AiFillDelete } from "react-icons/ai";
import OptionButton from "./buttons/OptionButton";
import { FaObjectUngroup } from "react-icons/fa";
import TitleMain from "./TitleMain";
import { highNameEmoji } from "../functions/highlight/highlightFuncs";

export default function ModelItem({
  //
  obj,
  typevar,
  rightConfig,
  // FUNCTIONS,
  deleteFunc,
  ...args
}) {
  // 1context
  const { aaaaaa } = useContext(MainContext);
  const { itemSameUser } = useContext(AuthContext);

  let samUser = itemSameUser(obj);

  // 1const
  const [type, setType] = useState("");

  const jdew = {
    obj: obj,
    typevar: typevar,
  };

  function OptBasit({ dictvar }) {
    //

    const fdjorw = {
      ...jdew,
    };

    const aijdew = <OptionButton {...fdjorw} />;

    // 1option
    const isawaew = {
      obj: aijdew,
    };

    // 1delete

    const dfokr = (
      //
      <AiFillDelete />
    );

    const saijew = {
      onClick: deleteFunc,
      obj: dfokr,
    };

    const iytutrf = {
      delete: saijew,
      option: isawaew,
      ...dictvar,
    };

    const ojwesa = {
      dictvar: iytutrf,
      listvar: ["option"],
      horizTrue: true,
      divTrue: true,
    };

    const iajdew =
      //
      // "aokdqewq";
      aijdew;
    // ImageTextList(ojwesa);

    return iajdew;
  }

  let vcbids =
    //
    // "";
    samUser && <OptBasit {...rightConfig} />;

  const okase =
    //
    // obj?.name;
    highNameEmoji(obj);

  const kacxfssa = {
    titlevar: okase,
    subtitlevar: obj?.description,
  };

  const sofd = (
    <>
      <TitleMain {...kacxfssa} />
    </>
  );

  const idsjfew = {
    // centerObj:
    noVertAlign: true,
    centerobj: sofd,
    rightobj: vcbids,
    ...args,
  };

  // 1console
  logs.logga("modlItem__", {
    ...jdew,
    ITEM: obj,
    SAME_USER: samUser,
  });

  const sferawe = (
    //
    // djcxvfs;
    <BearFloat noVertAlign {...idsjfew} />
  );

  return sferawe;
}
