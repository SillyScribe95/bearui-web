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
import { logs } from "../../index";
import { BearForm } from "../form/BearForm";
import { BearDiv } from "../BearDiv";
import { BearButton } from "../button/BearButton";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearList } from "../list/BearList";
import { BearIcon } from "../BearIcon";
import { BearUserConnect } from "../../functions/authFuncs";

export function BearAuthPortal({
  //
  funcvar,
  typeSign = "register",
  socialConfig,
  socialSubmit,
  onSubmit,
  bearName = "BearAuthPortal",
  emailSubmit,
  firebase,
  onSuccess,
  onFailure,
  list,
  authList,
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

  logs.logga("___ emaTrue", emaTrue, setemaTrue, sdfer, setsignType);

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
    BearIcon("email");
  // <BiShare />

  // 1emailbase
  const emaCon = {
    text: signCheck("Email"),
    icon: Jfase,
    // iconFormat: (name) => `fa fa-${name}`,
    style: { background: "#FF5733" },
    activeStyle: { background: "#ff6700" },
  };

  /** My Facebook login button. */
  const EmailLoginButton = createButton(emaCon);
  const idfjgrt = (
    ///
    <EmailLoginButton />
  );
  // BearIconText("email", signCheck("Email"));

  function dskwad() {
    logs.logga("asokdwqe");
  }

  const emBaso = {
    textvar: idfjgrt,
    onClick: dskwad,
    typevar: "email",
  };

  // function retto(typeo, button){

  //   return

  // }

  const fdsogkret = {
    google: {
      textvar: <GoogleLoginButton>{signCheck("Google")}</GoogleLoginButton>,
      // textvar: "Google",
      typevar: "google",
    },
    instagram: {
      textvar: (
        <InstagramLoginButton>{signCheck("Instagram")}</InstagramLoginButton>
      ),
    },
    facebook: {
      textvar: (
        <FacebookLoginButton>{signCheck("Facebook")}</FacebookLoginButton>
      ),
      // textvar: "Facebook",
      // iconvar: <SiFacebook />,
      typevar: "facebook",
    },
    email: emBaso,
    github: {
      textvar: (
        <GithubLoginButton>
          {/*  */}
          {signCheck("Github")}
        </GithubLoginButton>
      ),
      // textvar: "Twitter",
      // iconvar: <SiGithub />,
      typevar: "github",
    },
    apple: {
      textvar: <AppleLoginButton>{signCheck("Apple")}</AppleLoginButton>,
      typevar: "apple",
    },
    twitter: {
      textvar: <TwitterLoginButton>{signCheck("Twitter")}</TwitterLoginButton>,
      typevar: "github",
    },
    linkedin: {
      typevar: "linkedin",
      textvar: (
        <LinkedInLoginButton>{signCheck("Discord")}</LinkedInLoginButton>
      ),
    },
    microsoft: {
      typevar: "microsoft",
      textvar: (
        <MicrosoftLoginButton>{signCheck("Discord")}</MicrosoftLoginButton>
      ),
    },
    discord: {
      textvar: <DiscordLoginButton>{signCheck("Discord")}</DiscordLoginButton>,
      typevar: "github",
    },
    //
  };

  let userBase = "";

  async function osadew({ itemType }) {
    const typevar = itemType;
    logs.logga(typevar, "___ sinBas SOCIAL CLICK ___", {
      typevar,
      onSubmit,
      socialSubmit,
    });

    let isdfwer = {
      firebase,
      onSuccess,
      onFailure,
      authType: itemType,
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
          onSubmit(itemType);
        }

      //
      // socialSubmit(typevar);
    }
  }

  function Bsaeosa({ typevar, iconvar, textvar, ...swe }) {
    const dfid = {
      // fontSize: "20px",
      w: "full",
      onClick: osadew,
      leftIcon: iconvar,
      ...swe,
      // color: "black",
      // background: "white",
      // colorScheme: "white",
    };

    const ijdsf = (
      <>
        <Button {...dfid}>
          <Center>
            <Text>
              {/* {iconvar} */}
              {/* Continue with */}
              {textvar}
            </Text>
          </Center>
        </Button>
        {/* <hr /> */}
      </>
    );

    return ijdsf;
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

  function ASsfokse({ textvar }) {
    // const sdfke = { style: { margin: "20px 0" } };
    // const ijsder = <BearDiv {...sdfke}>{textvar}</BearDiv>;

    return textvar;
    // return ijsder;
  }

  const difjewr =
    //
    list;
  // authList ? authList : ifje;

  const igfder = {
    list: difjewr,
    dictvar: fdsogkret,
    onClick: osadew,
    bearName: "BearAuthPortal - Social Authentication",
    logtrue: true,
    spaceBetween: "30px",
    renderItem: dsafweR,
    ...socialConfig,
  };

  function dsafweR(asdfe) {
    logs.logga("___ asdfe ___", asdfe);

    return ASsfokse(asdfe);
    // return "gisdfoe";
  }

  function spfdewr({ email, password }) {
    logs.logga("___ BearAuthPortal SIGNUP ___", email, password);
    //
    // userLogSign(email, password, funcvar);
  }

  // 1console
  logs.logga("___ SignBsae SOCIAL ___", igfder);

  //  TimHernandez : TimHernandez ,

  const dsfijd = (
    //
    // {/* <BearTextMedia {...igfder} /> */}
    <BearList {...igfder} />
  );

  function FOrnaW() {
    //
    //
    const dfijd = [
      //
      "email",
      "password",
    ];

    const klmi =
      //
      // sofer;
      spfdewr;

    const dfgre = {
      list: dfijd,
      // dictvar:
      // sameline
      buttonText: "Register",
      bearName: "register",
      onSubmit: klmi,
      ...sdse,
      ...formConfig,
    };

    const forso = <BearForm {...dfgre} />;

    return forso;
  }

  const jvsfeer =
    //
    emaTrue ? <FOrnaW /> : dsfijd;

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
    titleConfig: {
      // lineBetween: true,
      // class: "shadowButton",
      style: {
        fontWeight: "bold",
        // padding: "0 20%",
        fontSize: "1.6em",
        marginBottom: "30px",
      },
    },
    bearName,
    ...sdse,
  };

  // return "aaaaaaaasdja";
  return BearCheckMain("BearAuthPortal", jdtre, nsifjew);
}
