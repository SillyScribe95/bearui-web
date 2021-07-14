import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";
import { BearAuthPortal } from "../../components/user/BearAuthPortal";
import { BearDiv } from "../../components/BearDiv";
import { BearTitle } from "../../components/title/BearTitle";
// import AlterUser from "../user/AlterUser";

export function LoginModal({
  //
  topObj,
  okdsew,
  loginFunc,
  logoConfig,
  ...args
}) {
  // 1context
  const signupConfig = {};
  //   const { signupConfig } = useContext(AuthContext);

  const [deetComplete, setdeetComplete] = useState();

  const naijew = {};

  // 1const
  const [type, setType] = useState("");

  function Altios() {
    const gwefsw = {
      // submitFunc:
    };

    const aiewse =
      //
      "";
    // <AlterUser {...gwefsw} />

    return aiewse;
  }

  function Bsaeo() {
    //
    //
    const odkfewr = {
      style: {
        fontSize: "18px",
      },
    };

    const oksew = {
      inputConfig: odkfewr,
      // buttonSize: "15px",
    };

    // const okasdew = {
    // }

    function asdokew(type) {
      //
      logs.logga("___ LoginMod CONNECT ___", type);
      BearUserConnect(type, loginFunc);
    }

    // function sdfer

    const oake = {
      formConfig: oksew,
      socialSubmit: asdokew,
      authList: ["google"],
      // emailSubmit:
      ...odkfewr,
      ...signupConfig,
    };

    const ikwae = (
      //
      // "";
      <BearAuthPortal {...oake} />
    );

    return ikwae;
  }

  function SignitDone() {
    //

    const oytuyt = {
      //
      style: {
        fontSize: "1.2em",
      },
      imagesize: 80,
      ...logoConfig,
    };

    //     const cvbmo = {
    // textAlign:
    //     }

    const okdsew = topObj
      ? topObj
      : //
        // "";
        BearTitle(oytuyt);

    const dvmdft = {
      obj: okdsew,
      style: {
        paddingBottom: "10px",
        fontSize: "1.25em",
        textAlign: "center",
      },
    };

    const dafokewr = (
      <>
        <BearDiv {...dvmdft} />
        <Bsaeo />
      </>
    );

    return dafokewr;
  }

  const sdokew =
    //
    deetComplete ? <Altios /> : <SignitDone />;

  const okfdsd = (
    <>
      {/*  */}

      {sdokew}
    </>
  );

  const oksae = {
    // fontSize: "10px",
    textAlign: "center",
  };

  args = {
    obj: okfdsd,
    style: oksae,
    ...signupConfig,
    ...args,
  };

  return <BearDiv {...args} />;
}
