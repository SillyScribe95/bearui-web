import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  logs,
} from "../../index";
import { BearInputText } from "./BearInputText";
import { BearFormButton } from "../button/BearFormButton";
import { passwordStrength } from "check-password-strength";
import { BearDiv } from "../BearDiv";
import { BearButton } from "../button/BearButton";

export function BearPassword({
  //
  requiredText,
  showStrenghBar,
  ...objaosdf
}) {
  //
  // 1const
  const [strenghBase, setstrenghBase] = useState();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function StrenchBarro(sdfgret) {
    const zxvds = {
      //
      required: {
        background: "red",
        text: "Required",
      },
      tooWeak: {
        background: "orange",
        text: "Weak",
      },
      weak: {
        background: "yellow",
        text: "OK",
      },
      good: {
        background: "green",
        text: "Strong",
      },
    };

    const sdersd = zxvds[sdfgret];

    // 1me
    const isdjfr = (
      <>
        <BearButton {...sdersd}>{sdersd["text"]}</BearButton>
        {/* <BearDiv {...sdersd}>{ifjgewr}</BearDiv> */}
      </>
    );

    const dfbdft = {
      flex: true,
    };

    return <BearDiv {...dfbdft}>{isdjfr}</BearDiv>;
  }

  function InRead(sdfgoekse) {
    const ijsdr = passwordStrength(strenghBase);

    logs.logga("___ rendPass ___", {
      PASSWORD: strenghBase,
      STRENGH: ijsdr,
    });

    const ifjgewr = ijsdr && ijsdr.id;
    const ndfke = ["tooWeak", "weak", "good"];
    const strenchVall = !strenghBase
      ? "required"
      : ifjgewr > 1
      ? "strong"
      : ifjgewr > -1
      ? ndfke[ifjgewr]
      : "";

    logs.logga("STRNCH GO--", {
      ifjgewr,
      strenchVall,
    });

    const vcbmd = strenchVall && StrenchBarro(strenchVall);

    const uhdfgr = {
      obj: vcbmd,
      style: {
        //
        fontSize: "0.9em",
        width: "80px",
        marginLeft: "10px",
      },
    };

    const nsdijfe = (
      <>
        {/*  */}
        {sdfgoekse}
        <BearDiv {...uhdfgr} />
      </>
    );

    return (
      <BearDiv vertAlign flex>
        {nsdijfe}
      </BearDiv>
    );
  }

  // function aidjew(){

  // }

  function aidjew(sdgfds) {
    logs.logga("___ password check ___", sdgfds);
    setstrenghBase(sdgfds);
  }

  const typoFond = show ? "text" : "password";
  const ijsdae = {
    ...objaosdf,
    onChangeValue: aidjew,
    renderInput: InRead,
    type: typoFond,
  };

  const isjda = show ? "Hide" : "Show";

  const sdjfewr = {
    h: "1.75rem",
    size: "sm",
    onClick: handleClick,
  };

  const ijvsf = (
    <>
      <BearFormButton {...sdjfewr}>{isjda}</BearFormButton>
      {/* </ */}
    </>
  );

  const dsfijsr = {
    ...ijsdae,
    inputRight: ijvsf,
    rightConfig: {
      width: "4.5rem",
    },
  };

  return BearInputText(dsfijsr);
}
