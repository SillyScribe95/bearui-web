import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";
import { BearAuthPortal } from "./BearAuthPortal";

export function BearUserPortal({
  //
  user,
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
          linkvar: "register",
          obj: "Sign Up",
        },
        login: {
          linkvar: "login",
          obj: "Log In",
        },
      };

      const asdwe = {
        listvar: askawe,
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
        linkvar: "/account",
      };

      // 1settings
      const setingso = {
        iconvar: "settings",
        obj: "Settings",
        linkvar: "/settings",
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

        return <Divo {...kadawe} />;
      }

      const dfgoker = {
        listvar: foghtr,
        ...oksae,
      };

      const signBomtos = {
        ...oksae,
        listvar: ["signout"],
      };

      return (
        <>
          <NameNase />
          <ImageTextList {...dfgoker} />
          {/* <Divo {...proffo} /> */}
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

  const aswe = <Divo {...ijsadw} />;

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
    logtrue: true,
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

    return <Divo {...okasew} />;
  }

  function Bssdweos() {
    // const sakdew = <

    const asokew = {
      obj: "Log in",
      bediaTrue: true,
    };

    const okasew = (
      <Flex>
        {/* Account */}
        {/* <AiFillGoogleCircle />  */}
        Join
      </Flex>
    );

    const ijfvds = {
      login: asokew,
      join: {
        obj: okasew,
        popConfig: djgere,
        bediaTrue: true,
      },
      signup: {
        obj: "Sign Up",
      },
    };

    const okasdew = {
      minWidth: "90px",
      fontSize: "24px",
      textAlign: "center",
      margin: "0 5px",
      padding: "0 5px",
    };

    function sdikfewq() {
      userConnect("google");
    }

    const kmfvds = {
      className: "borderHover pointer",
      // popConfig: djgere,
      onClick: sdikfewq,
      style: okasdew,
    };

    const oksad = [
      //
      // "join",
      "login",
      "signup",
    ];

    const kasdew = {
      listvar: oksad,
      dictvar: ijfvds,
      itemConfig: kmfvds,
      // horizTrue: "y",
      flexTrue: true,
      ...noConfig,
    };

    return <ImageTextList {...kasdew} />;
  }

  let ifjdsr =
    //
    "pointer";
  // "pointer buttonHover"

  let okase = (
    //
    // currentUser ? <SinglImg /> : <ASqwe />;
    <SinglImg />
  );

  const kadse = {
    obj: okase,
    className: ifjdsr,
    popConfig: djgere,
    // testShow: true,
  };

  const oksdewq =
    //
    currentUser ? <Divo {...kadse} /> : <Bssdweos />;
  // <Divo {...kadse} />

  //
  return oksdewq;
}
