// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import {
  //
  logs,
} from "../index";

export function fireConnect(
  fireObj,
  { processType, authType, onFailure, onSuccess }
) {
  let dsofkes = "";
  switch (authType) {
    case "google":
      dsofkes = new fireObj.auth.GoogleAuthProvider();
      break;
    case "facebook":
      dsofkes = new fireObj.auth.FacebookAuthProvider();
      break;
    case "twitter":
      dsofkes = new fireObj.auth.TwitterAuthProvider();
      break;
    case "github":
      dsofkes = new fireObj.auth.GithubAuthProvider();
      dsofkes.addScope("repo");
      break;
    case "microsoft":
      dsofkes = new fireObj.auth.MicrosoftAuthProvider();
      break;
    case "instagram":
      dsofkes = new fireObj.auth.FacebookAuthProvider();
      break;
    case "yahoo":
      dsofkes = new fireObj.auth.YahooAuthProvider();
      break;
    case "apple":
      dsofkes = new fireObj.auth.AppleAuthProvider();
      break;
    case "phone":
      dsofkes = new fireObj.auth.PhoneAuthProvider();
  }

  function aokdw(userBase) {
    // creatUseAfter(userBase, funcvar);
    onSuccess(userBase);
  }

  logs.logga("firease SIGN IN ", {
    authType,
    provider: dsofkes,
  });

  if (dsofkes) {
    switch (processType) {
      case "redirect":
        fireObj.auth().signInWithRedirect(dsofkes).then(aokdw).catch(asd9eiqw);

      default:
        fireObj.auth().signInWithPopup(dsofkes).then(aokdw).catch(asd9eiqw);
    }
  } else if (onFailure) {
    onFailure({ authType, errorType: "unsupported" });
  }

  function asd9eiqw({ code, message, ...asdfkwer }) {
    logs.logga("___ asdfkwer ___", {
      code,
      message,
      ...asdfkwer,
    });

    const erroDit =
      //
      "auth/operation-not-allowed";

    const errrFin =
      //
      "The identity provider configuration is not found.";

    let errIdent = "";
    switch (code) {
      case erroDit:
        switch (message) {
          case errrFin:
            errIdent = "unsupportedAuth";
            break;
        }
    }

    if (onFailure) {
      onFailure({ authType: authType, errorType: errIdent });
    }
  }
}
