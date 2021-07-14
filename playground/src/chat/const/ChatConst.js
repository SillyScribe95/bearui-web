import {
  //
  turnarray,
  mapDictKeyToValue,
  logs,
  getLocal,
  setLocal,
  copyTextToClipboard,
  regexReplace,
} from "@SillyScribe95/bedia-shared";

const davd = {
  "Nathan Singh": {
    chatLink: "https://www.messenger.com/t/1139846182",
    drafts: [
      "Do you have an idea of what the play's gonna be",
      "Nah, no way there's gonna be that main people",
    ],
  },
};

export const testChatDit = {
  ...davd,
  "Aran Wilcox": {
    chatLink: "https://app.slack.com/client/TF9P0SERG/D0214CVMSTX",
    drafts: [
      "I need the file by tomorrow, is that going to be alright for you?",
      "I didn't think it would be bad like that",
      "do you have a light?",
    ],
  },
  // {
  //   name: "Alex",
  //   drafts: ["Are you around for something else later on?"],
  // }
};

export function getUserName() {
  //
}

// 1facebook 1insert
function findFacebook() {
  // FACEBOOK
  let xcvkds =
    //
    "";
  // document.querySelectorAll("[data-text]")[0].parentElement;
  // document.getElementsByTagName('data-text')
  // document.getElementsByClassName('data-text')[0]

  console.log("asdwe", xcvkds);

  // xcvkds.innerText = "hello this is test\n\n";
}

// 1copy
export function copyChatText(message) {
  const sidjfse = getUserName();

  const regoas = "{{[^}]+}}";
  const osdker = regexReplace(message, regoas, sidjfse);

  logs.logga("___ osdker ___", osdker);

  copyTextToClipboard(osdker);
}

export function sortChatRel(a, b) {
  function sfieas(sd) {
    return sd.drafts && sd.drafts.length;
  }

  const oskdfewr = sfieas(b) - sfieas(a);

  logs.logga("___ oskdfewr ___", oskdfewr);

  return oskdfewr;
}
