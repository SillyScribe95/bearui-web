import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearForm,
  BearCodePreview,
  BearAuthPortal,
  BearDiv,
  BearErrNote,
  BearUpper,
  BearUserConnect,
  BearNotification,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { CodeEncompBear } from "../CodeEncompBear";
import firebase from "firebase/app";

export function HomepageAuth({
  //
  // ,
  ...args
}) {
  // 1const

  const jdfer = firebase.auth().currentUser;

  // 1function
  function onGoit(userObj) {
    logs.loggu("___ SUCCESS userObj ___", userObj);
  }

  function covksdrsd({ errorType, authType }) {
    //

    let mfdgijft = "";

    const ijsdr = BearUpper(authType);
    switch (errorType) {
      case "unsupported":
        mfdgijft = `Nice try! We don't work with ${ijsdr} just yet.`;
        break;
      default:
        mfdgijft = `Whoops! Signing in with ${ijsdr} didn't work, please try again.`;
    }

    BearErrNote(mfdgijft);
  }

  function signupFunc(typvar) {
    const sjdfre = {
      onSuccess: onGoit,
      // onFailure: covksdrsd,
      firebase,
      authType: typvar,
    };

    logs.logga("___ sjdfre ___", sjdfre);

    BearUserConnect(sjdfre);
  }

  //   function Baer

  function CodeBend(xzcogfsd) {
    //
    //
    const dfijer = {
      margin: "0 50px",
      width: "35vw",
      height: "90vh",
    };

    const ijsfsad = {
      genConfig: { flex: true },
      list: ["code", "preview"],
      boxStyle: dfijer,
      previewConfig: {
        style: {
          padding: "10%",
        },
      },
      ...xzcogfsd,
    };

    const dfgjer = CodeEncompBear(ijsfsad);
    return dfgjer;
  }

  function AuthBend() {
    //
    //

    const ushwwe = `
          <BearAuthPortal
              bearName="signHome"
              authList={["google", "instagram", "github"]}
              title="Give Bear a try 🐻"
              onSubmit={signupFunc}
          />`;

    // onSubmit={signupFunc}

    const ijsfsad = {
      code: ushwwe,
      title: "AuthPortal",
      dependencies: { BearAuthPortal, signupFunc },
    };

    const dfgjer = CodeBend(ijsfsad);
    return dfgjer;
  }

  // 1auth
  function DoneAuth() {
    const ijdfgr = (
      <BearAuthPortal
        bearName="signHome"
        authList={["google", "facebook", "github", "email"]}
        title="🐻 Give Bear a try 🐻"
        onSubmit={signupFunc}
      />
    );

    return ijdfgr;
  }

  // 1console

  logs.logga("___ HOMEPAGEAUTH ___", {
    USERS: jdfer,
  });

  // 1return
  const okfdsd = (
    <>
      {/*  */}
      {/* <CodeBend /> */}
      <AuthBend />
      {/* <DoneAuth /> */}
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
