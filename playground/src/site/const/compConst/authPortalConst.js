import {
  //
  BearAuthPortal,
} from "bearui-web";

const aaaa = "";

// 1auth
const authMeta =
  //
  "A simple that connects with your backend.";

const authCODO =
  //
  `<BearAuthPortal 
            authList={["google","facebook","github",  "email"]}
        />`;

const sdofkwer = [
  "sign up",
  "register",
  "login",
  "google",
  "firebase",
  "facebook",
  "github",
  "authentication",
];

export const authios = {
  title: "AuthPortal",
  dependencies: { BearAuthPortal },
  subtitle: authMeta,
  codeList: [authCODO, aaaa, aaaa],
  tags: sdofkwer,
};
