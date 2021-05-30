import React, {
  //
  useState,
  useContext,
} from "react";
import * as logs from "../../functions/logFuncs";
import { BearDiv } from "../../components/BearDiv";
import { LoginModal } from "../../containers/user/LoginModal";
// import AlterPlaylist from "../../containers/playlist/AlterPlaylist";

export default function AlterUserCheck({
  //
  loginConfig,
  noLogin,
  userObj,
  loadUser,
  obj,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  function UserJoin() {
    const idsawe = {
      //
      // className: "wrapTrue",
      ...loginConfig,
      style: {
        fontSize: "1.2em",
        // padding: "0 10%",
        ...(loginConfig && loginConfig.style),
      },
    };

    const noaieq =
      //
      // "sadfower";
      LoginModal(idsawe);

    return noaieq;
  }

  const okfdsd = loadUser
    ? "LOADING"
    : userObj
    ? obj
    : !noLogin && <UserJoin />;

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
