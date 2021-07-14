export function getNameSite(webLink) {
  const siteBase =
    //
    "instagram";

  let naemeoFind = "";

  switch (siteBase) {
    case "instagram":
      naemeoFind = getNameInsta();

      break;
    case "web.whatsapp.com":
      naemeoFind = getNameWhatsapp();
      break;
    case "messenger.com":
      // case
      naemeoFind = getNameWhatsapp();
      break;
  }

  return naemeoFind;
}

export function getNameInsta() {
  //
  return "";
}

export function getNameWhatsapp() {
  //

  // "_35k-1 _1adfa _3-8er"
  //   .title
  return "";
}

export function getNameFacebook() {
  //

  return "";
}
