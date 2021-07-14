import React, {
  //
  useState,
  useContext,
  useEffect,
} from "react";
import {
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiReddit,
  SiTwitter,
  SiWhatsapp,
  SiYcombinator,
} from "react-icons/si";
import { AiOutlineCopy } from "react-icons/ai";
import { FaCode } from "react-icons/fa";

// 1social
const facebookMessage = "https://www.facebook.com/messages/t/";
const twitLink = "https://twitter.com/";
const plsusew = "";
const twitterShareLink = twitLink + "intent/tweet" + plsusew;
const twittDirectLink = twitLink + "messages/compose" + plsusew;

// 1twitter
const skeweewr = {
  linkBase: twitterShareLink,
  iconvar: "twitter",
  toolText: "Twitter",
  textConnect: "text",
  linkConnect: "url",
  styleIcon: { color: "white", background: "#1da1f2" },
};

// 1reddit
const rddito = {
  linkBase: "https://www.reddit.com/submit",
  linkConnect: "url",
  toolText: "Reddit",
  textConnect: "title",
  styleIcon: { color: "white", background: "#FF4301" },
};

// 1hacker
const hckn = {
  toolText: "Hacker News",
  linkBase: "https://news.ycombinator.com/submitlink",
  textConnect: "t",
  linkConnect: "u",
};

// 1linkedin
const lnkeos = {
  linkBase: "https://www.linkedin.com/sharing/share-offsite",
  toolText: "Linkedin",
  // textConnect: "url",
  linkConnect: "url",
  summaryVar: "summary",
  styleIcon: { color: "white", background: "#0e76a8" },
};

// 1google
const ggge = {
  toolText: "Google",
  linkBase: "https://www.google.com/search",
  textConnect: "q",
};

// 1embed
const okfgfd = (
  //
  //  <ImEmbed2/>
  <FaCode />
);

const dkewqew = {
  iconvar: okfgfd,
  toolText: "Embed",
  copyLink: true,
};

// 1whatsapp
const whstConfo = {
  // linkBase: "https://api.whatsapp.com/send/?phone",
  linkBase: "https://web.whatsapp.com/send",
  textConnect: "text",
  toolText: "Whatsapp",
  styleIcon: { color: "white", background: "#128C7E" },
};

// 1facebook
const fceConfo = {
  linkBase: "https://www.facebook.com/sharer/sharer.php",
  // textConnect: "u",
  linkConnect: "u",
  typevar: "facebook",
  toolText: "Facebook",
  styleIcon: { color: "white", background: "#3b5998" },
};

// 1telegram
const teldsofe = {
  linkBase: "https://t.me/share/url",
  textConnect: "text",
  linkConnect: "url",
};

// 1copy
const cppyo = {
  // toolText: "Copy link to Clipboard",
  // noLink: true,
  toolText: "Copy Link",
  copyLink: true,
  iconvar: <AiOutlineCopy />,
};

export const testLinks = {
  vimeo: "https://vimeo.com/358305100",
  youtube: "https://www.youtube.com/watch?v=n326K1AzSCw",
  youtubeSubs: "https://www.youtube.com/watch?v=n326K1AzSCw",
  mp3: "https://ipaudio5.com/wp-content/uploads/HP/FRY%20AZKABAN/05%20THE%20DEMENTOR.mp3",
};

export const authListDict = {
  facebook: fceConfo,
  telegram: teldsofe,
  // messenger: {
  //   iconvar: "messenger",
  //   linkBase: "https://www.messenger.com/t/",
  //   // textConnect: "t",
  //   // linkConnect: "u",
  // },
  copy: cppyo,
  embed: dkewqew,
  quote: {
    noLink: true,
    iconvar: "quote",
    toolText: "Copy Quote",
  },
  whatsapp: whstConfo,
  email: {
    linkBase: "mailto:",
    title: "subject",
    textConnect: "body",
  },
  //   1twitter
  twitter: skeweewr,
  twitterdm: {
    ...skeweewr,
    linkBase: twittDirectLink,
    toolText: "Twitter DM",
  },
  reddit: rddito,
  hackerNews: hckn,
  linkedin: lnkeos,
  google: ggge,
  slack: {
    //
  },
  skype: {
    //
  },
  instagram: {
    //
  },
  wechat: {
    iconvar: "weixin",
  },
  weibo: {
    //
  },
  qq: {
    //
  },
};
