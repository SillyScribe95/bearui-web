import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "bearui-web";

export default function SpeakAdd({
  //
  seriesObj,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

  // 1playlist 1commment
  function PlaylstCommnt() {
    const isadee = (
      <>
        {/*  */}
        {/* <UserComment */}
      </>
    );

    const saidae = {
      obj: isadee,
      className: "shadowhHover",
    };

    const sdifjer = <BearDiv {...saidae} />;

    return sdifjer;
  }

  const playCond =
    //
    // "";
    plaCommo && <PlaylstCommnt />;

  const jsasae = (
    <>
      {sdfrdaew}
      {playCond}
    </>
  );

  // return okasdew;
  return jsasae;

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
