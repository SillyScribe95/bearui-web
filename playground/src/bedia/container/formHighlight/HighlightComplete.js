import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "bearui-web";
// import InviteButtons from "../InviteButtons";
import { BearDiv } from "../../components/BearDiv";

export default function HighlightAdded({
  //
  obj,
  userObj,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  function TruSubbo() {
    const adweasew = {
      // dictvar: ""
      // list: ["creat"]
    };

    const masew = (
      <>
        Thanks, {userObj.name}!
        <br />
        Start making better notes today with Bedia.
      </>
    );

    const saidjq = {
      title: masew,
      style: {
        fontSize: "20px",
      },
      // listConfig: {},
    };

    const qwtewq = <>{/* <InviteButtons {...saidjq} /> */}</>;

    return qwtewq;
  }

  const okfdsd = (
    <>
      {/*  */}
      sssss
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  //
  return <BearDiv {...args} />;
}
