import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "bearui-web";

import AlterUser from "../../containers/user/AlterUser";
import BearDiv from "../../components/BearDiv";

import AlterModel from "../../components/form/AlterModel";
import AlterHighlight from "../highlightForm/AlterHighlight";
import AlterPlaylist from "../../containers/playlist/AlterPlaylist";

export default function AddModel({
  //
  typevar,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  let ijsadwe = {
    typevar: typevar,
    ...args,
  };

  function Mdqeq() {
    let endValue = "";
    switch (typevar) {
      case "highlight":
        endValue = <AlterHighlight {...ijsadwe} />;
        break;
      case "playlist":
        endValue = <AlterPlaylist {...ijsadwe} />;
        break;
      case "media":
        // endValue = <AlterPlaylist {...ijsadwe} />;
        break;
      case "speaker":
        endValue = "";

        // <AlterSpeaker {...ijsadwe} />;
        break;
      case "user":
        endValue = <AlterUser {...ijsadwe} />;
        break;

      default:
        endValue = <AlterModel {...ijsadwe} />;
    }

    return endValue;
  }

  let finfdfsd = Mdqeq();

  const okfdsd = (
    <>
      {/*  */}
      {finfdfsd}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  //
  return <BearDiv {...args} />;
}
