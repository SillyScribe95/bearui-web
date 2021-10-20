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
  emailFirst,
  emailFormConfig = {},
  ...aaa
}) {
  const { onSubmit } = aaa;

  const [adsfwew, setemaTrue] = useState(emailFirst);

  // 1email
  const emaTrue =
    //
    adsfwew;
  // emailFirst

  // 1title
  function tiltos(aaa) {
    return BearBackForward({
      hideBack: !emaTrue,
      hideForward: true,
      onBack: function () {
        setemaTrue(false);
      },
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
    emailClick: () => setemaTrue(true),
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
