import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "bearui-web";
import ModelPlaylist from "./ModelPlaylist";
import BearList from "../../components/BearList";
import BearDiv from "../../components/BearDiv";
import ModelHighlight from "../highlights/ModelHighlight";
import ModelMedia from "../media/ModelMedia";
import ModelItem from "../../components/ModelItem";

export default function ModelList({
  //
  typevar,
  layoutType = "",
  media,
  seriesObj,
  suggestTrue,
  //
  // TITLE
  title,
  titleConfig,
  addFunc,
  feedLayout,
  listType = "official",
  list,
  noPlay,
  itemConfig,
  ...qweasw
}) {
  //

  function udsfew({ ...siqwe }) {
    // const index = "sokd";
    logs.logga("___HIGHLIGHT AFTER siqwe ___", siqwe);

    // const
    siqwe["media"] = media;

    // function asoke(){

    // }

    const aisjdwe = {
      //
    };

    let adsfew = "";
    switch (feedLayout) {
      case "boxFeed":
        adsfew = "";

        break;

      default:
        adsfew = "";
    }

    const uhsdaew = {
      obj: siqwe,
      ...qweasw,
      ...itemConfig,
    };

    logs.logga("___ HIhlistman OrdHighlight uhsdaew ___", uhsdaew);

    let ordeos = "NO modellist TYPE SPECIFIED";
    switch (typevar) {
      case "playlist":
        ordeos = <ModelPlaylist {...uhsdaew} />;
        break;
      case "highlight":
        ordeos = <ModelHighlight {...uhsdaew} />;
        // ordeos = <ModelHighlight {...uhsdaew} />;
        break;
      case "media":
        // ordeos = "asodwe";
        ordeos = <ModelMedia {...uhsdaew} />;
        // ordeos = <ModelItem {...uhsdaew} />;
        break;
    }

    const sokfer = {
      fontSize: "24px",
      margin: "20px 0",
      //   display: "flex",
    };

    const ashdwe = {
      obj: ordeos,
      //   flex: true,
      style: sokfer,
    };
    const ijasde = <BearDiv {...ashdwe} />;

    return ijasde;
  }

  function sdfewr({ ...asd }) {
    logs.logga("___ asd ___", asd);

    const jsder = "sadwe";
    return jsder;
  }

  let siajfwe = "";
  switch (feedLayout) {
    case "boxFeed":
      siajfwe = {
        itemConfig: {
          margin: "20px 40px",
        },
        horiz: true,
      };
      break;

    default:
      siajfwe = "";
  }

  function ListBasoe() {
    //

    const listFinal = list;
    const ijawe = {
      obj: udsfew,
      objFuncTrue: true,
      list: listFinal,
      ...siajfwe,
      ...qweasw,
    };

    logs.logga("___ listFinal ___", listFinal);
    logs.logga("___ ijawe ___", ijawe);

    return <BearList {...ijawe} />;
  }

  function TitlShowe({ ...adw }) {
    const asijew =
      //
      title;
    // findHighString(media, list);

    const saidje = {
      obj: asijew,
      fontSize: "1.3em",
      //   className: "wrapTrue bold",
      ...adw,
    };

    const sadwe = <BearDiv {...saidje} />;

    const dfoktr = (
      <>
        {sadwe}
        <hr />
      </>
    );

    return dfoktr;
  }

  const titleTop = title && <TitlShowe {...titleConfig} />;
  const mainList =
    //
    // "";
    ListBasoe();

  const iwewe = (
    <>
      {titleTop}
      {/* {showSugg} */}
      {mainList}
    </>
  );

  return iwewe;
}