const alignItemsFlex =
  //
  // ""
  // "flex-start";
  // "space-between";
  "center";
// "stretch";
// "space-around";
// "space-evenly";
// "flex-end";

const alignContentFlex =
  //
  // "flex-start";
  // "space-between";
  // "center";
  // "stretch";
  // "space-around";
  "space-evenly";
// "flex-end";

const justifyContentFlex =
  //
  // "";
  // "flex-start";
  "space-between";
// "center";
// "stretch";
// "space-around"
// "space-evenly";
// "flex-end";

export const vertAlign = {
  alignItems: alignItemsFlex,
  justifyContent: justifyContentFlex,
  // flexWrap: "wrap",
  // alignContent: alignContentFlex,
  /* vertical-align: middle; */
  /* width: 100%; */
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
};

export function flexStyle(asfjwe) {
  const okase = {
    style: {
      //
      display: "flex",
      // ...vertAlign,
      ...asfjwe,
    },
  };

  return okase;
}
