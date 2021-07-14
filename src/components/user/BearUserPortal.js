import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "../../index";
import { BearAuthPortal } from "./BearAuthPortal";
import { BearDiv } from "../BearDiv";

export function BearUserPortal({
  //
  user,
  loadUser,
  noUserReturn,
  noUserTemplate,
  noUserConfig,
  authConfig,
  noConfig,
  ...args
}) {
  // 1MainContext
  const currentUser = user;
  const loggedIn = user;

  // 1const
  const [type, setType] = useState("");

  function BepopB() {
    //
    // 1register
    function RegShowy() {
      //
      const askawe = [
        // ""
        "register",
        "login",
      ];

      const dfgew = {
        register: {
          link: "register",
          obj: "Sign Up",
        },
        login: {
          link: "login",
          obj: "Log In",
        },
      };

      const asdwe = {
        list: askawe,
        dictvar: dfgew,
      };

      //

      return (
        <>
          {/*  */}
          {/* REGISTER */}
          <BearAuthPortal />
          {/* <BearList {...asdwe} /> */}
        </>
      );
    }

    // 1login
    function LogShow({ dictvar, ...extra }) {
      //

      const foghtr = [
        //
        "profile",
        "settings",
      ];

      const ijsae = {
        className: "greyHover",
        style: {
          fontSize: "26px",
        },
      };

      const goOut = {
        ...ijsae,
        onClick: userSignOut,
        obj: "Sign Out",
      };

      // 1profile

      const proffo = {
        iconvar: "user",
        obj: "Profile",
        link: "/account",
      };

      // 1settings
      const setingso = {
        iconvar: "settings",
        obj: "Settings",
        link: "/settings",
      };

      const fokdt = {
        signout: goOut,
        profile: proffo,
        settings: setingso,
        ...dictvar,
      };

      const oksae = {
        dictvar: fokdt,
        itemConfig: ijsae,
        // typevar: "div",
        ...extra,
      };

      function NameNase() {
        // 1nameBase

        const kadawe = {
          obj: currentUser.name,
          className: "wrapTrue bold",
          style: {
            textAlign: "center",
            fontSize: "1.4em",
          },
        };

        return <BearDiv {...kadawe} />;
      }

      const dfgoker = {
        list: foghtr,
        ...oksae,
      };

      const signBomtos = {
        ...oksae,
        list: ["signout"],
      };

      return (
        <>
          <NameNase />
          <ImageTextList {...dfgoker} />
          {/* <BearDiv {...proffo} /> */}
          <hr />
          <ImageTextList {...signBomtos} />
        </>
      );
    }

    const aisjdwe =
      //
      loggedIn ? <LogShow {...authConfig} /> : <RegShowy />;

    return aisjdwe;
  }

  const sdfiew =
    //
    // 30;
    "2x1";
  // "5x1";
  // "xl";
  //   "1x2";
  // "lg";

  const vbfdg = (
    <>
      {/* sfokewr HELLO */}
      <BepopB />
    </>
  );

  const ijsadw = {
    obj: vbfdg,
    style: {
      width: "180px",
      fontSize: "18px",
    },
  };

  const aswe = <BearDiv {...ijsadw} />;

  const placeos =
    //
    // "bottom"
    "bottomRight";

  const djgere = {
    content: aswe,
    placement: placeos,
    trigger: "click",
  };

  const ksasa = {
    obj: currentUser,
    imagesize: sdfiew,
    logtrue: "",
    messvar: "dokeq",
  };

  // logs.logga("___ useSignin ___", fnkfg);

  function AllBit() {
    const fnkfg = {
      title: "Title",
      noText: true,
      ...args,
    };

    const okasew = <UserMain {...fnkfg} />;

    return okasew;
  }

  function SinglImg() {
    let osakew = currentUser?.name;
    let sokaew =
      //
      osakew;
    // osakew ? osakew : "User M"

    const aesdofwr = {
      ...ksasa,
      name: sokaew,
      imagevar: currentUser?.imageAttr,
      src: currentUser?.imageAttr,
      ...args,
    };

    logs.logga("___ USER SIGN IN ___", aesdofwr);

    const sewwad = (
      //
      // <Avatar src="https://bit.ly/broken-link" />
      // <Avatar {...aesdofwr} />
      <ImageMain {...aesdofwr} />
    );

    return sewwad;
  }

  function ASqwe() {
    const kaew = (
      //
      <AiOutlineUser />
    );

    const fdde = {
      borderRadius: "50%",
      padding: "0 5px 5px",
    };

    const okasew = {
      style: fdde,
      bediaTrue: "y",
      // className: "circleHover",
      obj: kaew,
    };

    return <BearDiv {...okasew} />;
  }

  function asewe({ dictvar, ...asdfe }) {
    //

    const idsjfr = {
      login: {
        text: "Login",
        link: "/login",
      },
      signup: {
        text: "Signup",
        link: "/register",
      },
    };

    //
  }

  function switchTemp() {
    let endios = "";
    switch (noUserTemplate) {
      case "":
        endios = "aokd";
        break;
    }

    return endios;
  }

  function Bssdweos() {
    const sakdew = "";
    //
    // noUserTemplate ? switchTemp() ? noUserReturn

    return noUserReturn;
  }

  let ifjdsr =
    //
    "pointer";
  // "pointer buttonHover"

  let okase =
    //
    // "asdawe";
    // currentUser ? <SinglImg /> : <ASqwe />;
    SinglImg();

  const kadse = {
    obj: okase,
    className: ifjdsr,
    popConfig: djgere,
    // testShow: true,
  };

  const oksdewq =
    //
    currentUser ? <BearDiv {...kadse} /> : <Bssdweos />;
  // <BearDiv {...kadse} />

  //
  return oksdewq;
}

// const asokew = {
//   obj: "Log in",
//   bediaTrue: true,
// };

// const okasew = (
//   <Flex>
//     {/* Account */}
//     {/* <AiFillGoogleCircle />  */}
//     Join
//   </Flex>
// );

// const ijfvds = {
//   login: asokew,
//   join: {
//     obj: okasew,
//     popConfig: djgere,
//     bediaTrue: true,
//   },
//   signup: {
//     obj: "Sign Up",
//   },
// };

// const okasdew = {
//   minWidth: "90px",
//   fontSize: "24px",
//   textAlign: "center",
//   margin: "0 5px",
//   padding: "0 5px",
// };

// function sdikfewq() {
//   // BearUserConnect("google");
// }

// const kmfvds = {
//   className: "borderHover pointer",
//   // popConfig: djgere,
//   onClick: sdikfewq,
//   style: okasdew,
// };

// const oksad = [
//   //
//   // "join",
//   "login",
//   "signup",
// ];

// const kasdew = {
//   list: oksad,
//   dictvar: ijfvds,
//   itemConfig: kmfvds,
//   // horizTrue: "y",
//   flex: true,
//   ...noConfig,
// };

// return <ImageTextList {...kasdew} />;
// }
