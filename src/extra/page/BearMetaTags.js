import React, {
  //
  useState,
  useContext,
} from "react";
import { Helmet } from "react-helmet";
import { joinString } from "../../functions/stringFuncs";

export function BearMetaTags({
  title,
  description,
  siteName,
  // joinString = " - ",
  image,
  playerConfig,
  loadTitle,
  loading,
  ...args
  //
}) {
  function asaksd() {
    const ikaew = (
      <>
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="player" />
      </>
    );

    return ikaew;
  }

  // 1name
  const finalName = joinString([title, siteName], " - ");
  const finalDes = description;
  const finalKey = "";

  //
  const playerExtra = playerConfig && asaksd();

  // 1console
  //   logs.logga("helmeInfo-zz", samdsa);

  //   {/* <meta property="og:url" content={siteFull} /> */}
  //   <meta property="twitter:title" content={finalName} />
  //   <meta property="twitter:description" content={finalDes} />
  //   <meta property="twitter:image" itemProp="image" content={image} />
  //   <meta property="twitter:card" content={twitCarVar} />
  //   {/* <link rel="canonical" href={siteFull} /> */}

  const sdkasda = (
    <Helmet>
      <title>{finalName}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={finalDes} />
      <meta name="keywords" content={finalKey} />
      <link rel="icon" type="image/png" href={image} sizes="16x16" />
      <meta property="og:title" content={finalName} />
      <meta property="og:description" content={finalDes} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" itemProp="image" content={image} />
      <meta property="og:type" content="website" />
      {/* {playerExtra} */}
    </Helmet>
  );

  return sdkasda;
}
