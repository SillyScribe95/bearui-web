import React, {
  //
  useState,
  useContext,
} from "react";
import { BearBackForward, BearForm } from "../..";
import { BearAuthPortal } from "./BearAuthPortal";

export function BearAuthPortalWithEmailForm({
  titleConfig = {},
  title = "Sign In",
  emailTrue,
  onBackEmail,
  emailFormConfig = {},
  ...aaa
}) {
  const { onSubmit } = aaa;

  // 1email
  const emaTrue =
    //
    emailTrue
  // emailFirst

  // 1title
  function tiltos(aaa) {
    return BearBackForward({
      hideBack: !emaTrue,
      hideForward: true,
      onBack: onBackEmail,
      center: title,
      ...aaa,
      ...titleConfig,
    });
  }

  //   1form
  function ForrBase({ titleConfig = {}, ...aaaaa }) {
    const dfijd = [
      //
      "email",
      "password",
    ];

    const dfgre = {
      list: dfijd,
      bearName: "register",
      title: tiltos(titleConfig),
      onSubmit,
      requireAll: true,
      ...aaaaa,
    };

    return BearForm(dfgre);
  }

  const xcvbijr = {
    title: tiltos(),
    ...aaa,
  };

  const dijert = BearAuthPortal(xcvbijr);
  const sgresad =
    //
    // "";
    ForrBase(emailFormConfig);
  const asease = emaTrue ? sgresad : dijert;

  return asease;
}
