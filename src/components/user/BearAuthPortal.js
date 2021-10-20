import React, {
  //
  useState,
  useContext,
} from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  AppleLoginButton,
  TwitterLoginButton,
  InstagramLoginButton,
  GithubLoginButton,
  createButton,
  DiscordLoginButton,
  MicrosoftLoginButton,
  LinkedInLoginButton,
} from "react-social-login-buttons";
import { bearlog } from "../../index";
import { BearDiv } from "../BearDiv";
import { BearButton } from "../button/BearButton";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearList } from "../list/BearList";
// import { BearIcon } from "../BearIcon";
import { BearUserConnect } from "../../functions/authFuncs";
import { argMiss, CheckListExist } from "../GlobalComps";
import { BearUpper } from "../ExportComps";

export function BearAuthPortal({
  //
  funcvar,
  typeSign = "register",
  itemConfig,
  socialSubmit,
  onSubmit,
  renderButton,
  bearName = "BearAuthPortal",
  firebase,
  onSuccess,
  onFailure,
  list,
  title,
  authList,
  emailItem = "",
  renderText,
  emailClick,
  emailButtonConfig,
  buttonConfig,
  dictvar,
  ...sdse
}) {
  function signCheck(typevar) {
    let okads = renderText ? renderText(typevar) : "Continue with " + typevar;

    return okads;
  }

  // // 1emailbase
  const emaCon = {
    icon: "",
    style: {
      background: "#FF5733",
    },
    activeStyle: { background: "#ff6700" },
    ...emailButtonConfig,
  };

  const EmailLoginButton = createButton(emaCon);

  const emBaso = {
    button: EmailLoginButton,
  };

  const fdsogkret = {
    google: {
      button: GoogleLoginButton,
    },
    instagram: {
      button: InstagramLoginButton,
    },
    facebook: {
      button: FacebookLoginButton,
    },
    email: emBaso,
    github: {
      button: GithubLoginButton,
    },
    apple: {
      button: AppleLoginButton,
    },
    twitter: {
      button: TwitterLoginButton,
    },
    linkedin: {
      button: LinkedInLoginButton,
    },
    microsoft: {
      button: MicrosoftLoginButton,
    },
    discord: {
      button: DiscordLoginButton,
    },
    //
  };

  async function osadew(asdfas) {
    bearlog.log("___ asdfas ___", asdfas);
    sdadfs(asdfas);
  }
  async function sdadfs(itemName) {
    const typevar = itemName;
    bearlog.log(typevar, "___ sinBas SOCIAL CLICK ___", {
      typevar,
      onSubmit,
      socialSubmit,
    });

    let isdfwer = {
      firebase,
      onSuccess,
      onFailure,
      authType: itemName,
    };

    // isdfwer["authType"] = typevar;

    switch (typevar) {
      case "email":
        if (emailClick) {
          emailClick();
        }
        break;
      default:
        const ijsre =
          //
          firebase;
        // firebase || supabase || passportjs || auth0

        if (ijsre) {
          BearUserConnect(isdfwer);
        } else if (onSubmit) {
          onSubmit(itemName);
        }
    }
  }

  function ASsfokse({ itemName, button, onClick, ...asdfa }) {
    let asdfwer = signCheck(BearUpper(itemName));
    // 1button
    let ijasds = button({
      children: asdfwer,
      onClick: () => osadew(itemName),
      ...asdfa,
    });

    return renderButton ? renderButton(ijasds) : ijasds;
    // return ijsder;
  }

  function dsafweR(asdfe) {
    bearlog.lug("___ asdfe ___", asdfe);

    return ASsfokse(asdfe);
    // return "gisdfoe";
  }

  const igfder = {
    list,
    dictvar: fdsogkret,
    // onClick: osadew,
    bearName: "BearAuthPortal - Social Authentication",
    logtrue: true,
    spaceBetween: "30px",
    renderItem: dsafweR,
    // ...socialConfig,
    ...argMiss(sdse),
  };

  // 1console
  bearlog.lug("___ SignBsae SOCIAL ___", igfder);

  function listo() {
    const dsfijd = CheckListExist(igfder);

    return dsfijd;
  }

  const jvsfeer =
    //
    listo();

  const jdtre = jvsfeer;

  const nsifjew = {
    // requiredArgs: { onSubmit },
    bearName,
    title,
    ...sdse,
  };

  // return "aaaaaaaasdja";
  return BearCheckMain("BearAuthPortal", jdtre, nsifjew);
}
