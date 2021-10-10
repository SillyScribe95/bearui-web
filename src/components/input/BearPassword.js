import React, {
  //
  useState,
  useContext,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearInputText } from "./BearInputText";
import { BearFormButton } from "../button/BearFormButton";
import { passwordStrength } from "check-password-strength";
import { BearDiv } from "../BearDiv";
import { BearButton } from "../button/BearButton";
import { BearTextMedia } from "../BearTextMedia";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BearBackBorder } from "../GlobalComps";

export function BearPassword({
  //
  showItem,
  hideItem,
  showHideElement,
  showHideConfig,
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

    bearlog.lug("___ rendPass ___", {
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

    bearlog.lug("STRNCH GO--", {
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
      <BearDiv vertAlign flex>
        {/*  */}
        {sdfgoekse}
        <BearDiv {...uhdfgr} />
      </BearDiv>
    );

    const ijswqe =
      //
      // nsdijfe;
      sdfgoekse;

    return ijswqe;
  }

  // function aidjew(){

  // }

  function aidjew(sdgfds) {
    bearlog.lug("___ password check ___", sdgfds);
    setstrenghBase(sdgfds);
  }

  const typoFond = show ? "text" : "password";
  const ijsdae = {
    ...objaosdf,
    onChangeValue: aidjew,
    renderInput: InRead,
    type: typoFond,
  };

  // 1show 1hide
  const sdfnwer =
    //
    asdijew();
  // showHideElement && asdijew();

  function asdijew() {
    const sdfgr = BearTextMedia({
      // style: BearBackBorder()
      // iconvar: show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />,
      textvar: show ? "Hide" : "Show",
      ...showHideConfig,
    });

    const sidjf =
      //
      // show ? showItem : hideItem;
      // show ? "Hide" : "Show";
      sdfgr;

    const sdjfewr = {
      h: "1.75rem",
      size: "sm",
      // style: {
      //   //
      //   // minWidth: "50px",
      //   marginRight: "40px",
      // },
      onClick: handleClick,
    };

    const ijvsf = (
      <>
        <div {...sdjfewr}>
          {sidjf}
          {/* </BearFormButton> */}
        </div>
        {/* </ */}
      </>
    );

    return ijvsf;
  }

  const dsfijsr = {
    ...ijsdae,
    inputRight: sdfnwer,
    rightConfig: {
      width: "4.5rem",
    },
  };

  const sfwq =
    //
    // "asdjkew";
    BearInputText(dsfijsr);

  return sfwq;
}
