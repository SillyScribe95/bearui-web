import React, {
  //
  useState,
  useEffect,
  useContext,
} from "react";
//
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useCollection, useDocumentOnce } from "react-firebase-hooks/firestore";
import { FireQuery } from "../../functions/backendFuncs";
import {
  //
  logs,
  // filtModelDocs,
  // backendInit,
} from "@SillyScribe95/bedia-shared";

export function ProvideAuth({ apiKey, obj, firebaseConfig }) {
  //
  //
  var vsdkorewr = {
    apiKey: "AIzaSyD58IkBWVXTLurPOmgkqXxOyuh-q4SIo7A",
    authDomain: "bearui.firebaseapp.com",
    projectId: "bearui",
    storageBucket: "bearui.appspot.com",
    messagingSenderId: "953461489735",
    appId: "1:953461489735:web:b392b9620f49187be2f162",
    measurementId: "G-NDYNR14TBW",
  };

  const elgnttioss =
    //
    // "r";
    firebase.apps.length;

  if (!elgnttioss) {
    firebase.initializeApp(vsdkorewr);
  }

  useEffect(() => {
    // firebase.initializeApp(vsdkorewr);
    // if (elgnttioss) {
    //   firebase.initializeApp(vsdkorewr);
    // }
    // firebase.backendInit(vsdkorewr);
    // backendInit("firebase", vsdkorewr);
  });

  const [snapshot, loading, error] =
    //
    ["s", ""];
  // useDocumentOnce("users/" + apiKey);

  // const data = "";
  const { data, loading: loadUser, ...asdae } =
    //
    // "";
    !apiKey
      ? ""
      : FireQuery(firebase.firestore().collection("users").doc(apiKey));

  logs.logga("___ Contioes ___", {
    firebase: firebase,
    elgnttioss: elgnttioss,
    asdae: asdae,
    data: data,
  });

  if (!apiKey) {
    const sdijew =
      //
      "BearContextProvider: please provide a valid API KEY via the apiKey attribute.";
    throw new ReferenceError(sdijew);
  } else if (loadUser) {
    return "";
  } else if (!data) {
    throw new ReferenceError("The API key you passed isn't valid");
  } else {
    return obj;
  }
}
