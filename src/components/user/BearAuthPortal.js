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
import { BearForm } from "../form/BearForm";
import { BearDiv } from "../BearDiv";
import { BearButton } from "../button/BearButton";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearList } from "../list/BearList";
// import { BearIcon } from "../BearIcon";
import { BearUserConnect } from "../../functions/authFuncs";
import { argMiss, CheckListExist } from "../GlobalComps";
import { BearUpper } from "../InnerComps";

export function BearAuthPortal({
  //
  funcvar,
  typeSign = "register",
  socialConfig,
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
  submitEmail,
  emailConfig,
  emailIcon,
  buttonConfig,
  formConfig,
  changeButton,
  ...sdse
}) {
  //
  //
  // 1baseargs
  // let emaTrue;
  // setemaTrue;
  // sdfer;
  // setsignType = "";
  const [emaTrue, setemaTrue] = useState();
  const [sdfer, setsignType] = useState(typeSign);

  bearlog.lug("___ emaTrue", emaTrue, setemaTrue, sdfer, setsignType);

  let signType =
    //
    typeSign;
  // sdfer;

  function signCheck(typevar) {
    let okads =
      //
      // "";
      "Continue with " + typevar;

    // switch (signType) {
    //   case "login":
    //     okads = "Log in with " + typevar;
    //     break;
    //   case "signup":
    //     okads = "Sign up with " + typevar;
    //     break;
    // }

    return okads;
  }

  const Jfase = () =>
    //
    // "telegram";
    // "google";
    emailIcon;
  // BearIcon("email");
  // <BiShare />

  // 1emailbase
  const emaCon = {
    text: signCheck("Email"),
    icon: Jfase,
    // iconFormat: (name) => `fa fa-${name}`,
    style: {
      //
      background: "#FF5733",
      // width: "20px",
    },
    activeStyle: { background: "#ff6700" },
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
    bearlog.lug("___ asdfas ___", asdfas);
    sdadfs(asdfas);
  }
  async function sdadfs(itemName) {
    const typevar = itemName;
    bearlog.lug(typevar, "___ sinBas SOCIAL CLICK ___", {
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
        setemaTrue(true);
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

  // 1list
  const dfogre = [
    //
    // "twitter",
    "google",
    "facebook",
    "apple",
    "email",
  ];

  const ifje =
    //
    // "";
    dfogre;

  function ASsfokse({ itemName, button, onClick, ...asdfa }) {
    // const sdfke = { style: { margin: "20px 0" } };
    // const ijsder = <BearDiv {...sdfke}>{textvar}</BearDiv>;
    function adsf() {
      osadew(itemName);
    }

    let ijasds = button({
      children: signCheck(BearUpper(itemName)),
      // onClick:
      ...asdfa,
      onClick: adsf,
      ...buttonConfig,
    });

    return renderButton ? renderButton(ijasds) : ijasds;
    // return ijsder;
  }

  function xcvxsfd(dsafokas) {
    return ASsfokse({});
  }

  function dsafweR(asdfe) {
    bearlog.lug("___ asdfe ___", asdfe);

    return ASsfokse(asdfe);
    // return "gisdfoe";
  }

  const igfder = {
    list,
    dictvar: fdsogkret,
    onClick: osadew,
    bearName: "BearAuthPortal - Social Authentication",
    logtrue: true,
    spaceBetween: "30px",
    renderItem: dsafweR,
    ...socialConfig,
    ...argMiss(sdse),
  };

  // 1console
  bearlog.lug("___ SignBsae SOCIAL ___", igfder);

  function listo() {
    const dsfijd =
      //
      // BearTextMedia(igfder);
      // BearList(igfder);
      CheckListExist(igfder);
    // list.map((jiadas) => CheckListExist(jiadas, igfder));

    return dsfijd;
  }

  //
  //
  const dfijd = [
    //
    "email",
    "password",
  ];

  // const klmi =
  //   //
  //   // sofer;
  //   spfdewr;

  // function adfasdf({email, password, ...asd}){
  //   sdadfs()
  // }

  const dfgre = {
    list: dfijd,
    buttonText: "Register",
    bearName: "register",
    onSubmit,
    formid: "Email Option ",
    ...emailConfig,
  };

  const FOrnaW = BearForm(dfgre);

  const jvsfeer =
    //
    emaTrue ? FOrnaW : listo();

  function OrCHekc() {
    let baseTEST = "";
    let bottLink = "";
    let changeit = "";

    switch (signType) {
      case "login":
        changeit = "signup";
        baseTEST = "Don't have an account?";
        bottLink = "Sign Up for free";
        break;
      case "signup":
      case "register":
        baseTEST = "Already have an account?";
        bottLink = "Sign in to Bedia";
        changeit = "login";
        break;
    }

    const kasesd = {
      obj: baseTEST,
    };

    function saoke(sad) {
      setsignType(changeit);
    }

    const koewqe = {
      onClick: saoke,
      // link: "?typeSign=" + signType,
      // link: " signType,
      // linkConfig: {
      //   noBlack: true,
      // },
      obj: bottLink,
      style: {
        marginBottom: "20p",
        fontSize: "1.3em",
      },
    };

    const oksae = (
      <>
        <BearDiv {...kasesd} />
        <BearDiv {...koewqe} />
      </>
    );

    const sdease = {
      obj: oksae,
      bediaTrue: true,
      style: {
        padding: "15px",
      },
    };

    const kdsfse = <BearButton {...sdease} />;

    const oasebd = {
      style: {
        paddingTop: "20px",
        textAlign: "center",
        fontSize: "1.3em",
      },
      obj: kdsfse,
    };

    return <BearDiv {...oasebd} />;
  }

  const jdtre = sdfer && (
    <>
      {jvsfeer}
      {changeButton && <OrCHekc />}
    </>
  );

  const nsifjew = {
    // requiredArgs: { onSubmit },
    bearName,
    title,
    ...sdse,
  };

  // return "aaaaaaaasdja";
  return BearCheckMain("BearAuthPortal", jdtre, nsifjew);
}
