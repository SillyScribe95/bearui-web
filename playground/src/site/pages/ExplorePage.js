import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearPage,
  BearDiv,
  BearMetaTags,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { ExploreBear } from "../containers/explore/ExploreBear";
import { bearConstDict } from "../const/bearConst";

export function ExplorePage({
  //
  match: {
    params: { typeComp, typeTab },
  },
  ...args
}) {
  // 1const
  // let typeComp, typeTab;

  // const okfdsd = (
  //   <>
  //     {/*  */}
  //     sssss
  //   </>
  // );

  // args = {
  //   obj: okfdsd,
  //   ...args,
  // };

  // 1const

  const sikase =
    //
    typeComp;
  // type;
  // "searchList";
  // "checkout";
  // "checkoutStripe";
  // "div";
  // "form";
  // "list";
  // "social";
  // "carousel"
  // "fetchAPI";

  logs.logga("___ typeTab ___", { typeComp, typeTab, args });

  // const [bearType, setbearType] = useState(sikase);
  const iksase = bearConstDict[sikase];

  const ijdswe = {
    typeComp,
    typeTab,
    ...iksase,
  };
  // typeComp, typeTab

  logs.logga("___ ijdswe ___", ijdswe);

  const difjeww = {
    title: iksase && iksase + " | Bear UI",
  };

  const dijsa = {
    // helmetConfig:difjeww
  };

  logs.logga("___ dijsa ___", dijsa);

  return (
    <>
      {/* sdkasso */}
      {/* <BearMetaTags {...dijsa} /> */}
      <BearPage {...dijsa}>
        {/* asdjasso oks */}
        <ExploreBear {...ijdswe} />
      </BearPage>
    </>
  );
}
