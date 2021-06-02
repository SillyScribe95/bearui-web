import React, {
  //
  useState,
  useContext,
} from "react";

import {
  BearCarousel,
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearEmoji,
  BearSocial,
  BearSelect,
  BearTitle,
  BearSearchList,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearCreditCard,
  BearForm,
  NewHighlight,
  HiButton,
  BearCodePreview,
  BearIcon,
  TimeButtons,
} from "bearui-web";

import { bearConst, bearConstDict } from "../bearConst";
import { SearchBearItem } from "./SearchBearItem";

export function ExploreBear({
  //

  ...args
}) {
  // 1const

  const sikase =
    //
    "div";

  const [bearType, setbearType] = useState(sikase);
  const iksase = bearConstDict[bearType];

  function Lefaos() {
    function erotea(asdwqke) {
      logs.loggo("___explore bear CHANGE asdwqke ___", asdwqke);

      //
      setbearType(asdwqke);
    }

    const qweaoske = {
      // value: bearType,
      onChange: erotea,
    };

    return <SearchBearItem {...qweaoske} />;
  }

  function RIghtos({ title, subtitle, code, ...sadsd }) {
    //
    const sdkjfer = `
      import { Bear${title} } from "bearui-web";

      ReactDOM.render(
        // --- START OF CODE ---

        ${code}
        
        // --- END OF CODE ---
        , _mount_);
      `;

    const ijases = {
      code: sdkjfer,
      ...sadsd,
    };

    logs.logga("___ explore bear CODE ___", iksase);

    const oksdfwe = <BearCodePreview {...ijases} />;

    return oksdfwe;
  }

  const leftos = Lefaos();
  const rghtos = RIghtos(iksase);

  const kasase = {
    listvar: [leftos, rghtos],
    typeList: "return",
    horiz: true,
  };

  const okfdsd = (
    <>
      <BearList {...kasase} />
    </>
  );

  args = {
    obj: okfdsd,
    style: {
      // width:
      height: "100vh",
    },
    ...args,
  };

  return <BearDiv {...args} />;
}
