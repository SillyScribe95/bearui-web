import {
  BearCarousel,
  BearList,
  BearButton,
  BearDiv,
  BearFloat,
  BearEmoji,
  BearSocial,
  BearSearchList,
  BearSelect,
  BearTitle,
  BearTextMedia,
  BearAuthPortal,
  BearUserPortal,
  BearTags,
  logs,
  AlterHighlight,
  AlterModel,
  BearDuration,
  BigButton,
  BearCreditCard,
  BearForm,
  NewHighlight,
  HiButton,
  BearCodePreview,
  BearIcon,
  TimeButtons,
} from "bearui-web";

import {
  //
  mapDictNew,
} from "@SillyScribe95/bedia-shared/";

// 1div
const codeiosDiv =
  //
  `<BearDiv 
            obj="Hi! I'm a Div." 
            style={{
                fontSize: 24,
                color: "red",
            }}
        />`;

const isjdr =
  //
  "A div for all seasons.";

const xcvbsdf = {
  title: "Div",
  dependencies: { BearDiv },
  subtitle: isjdr,
  code: codeiosDiv,
};

//
// 1emoji
const emoMeta =
  //
  "Keep up with the kids.";

const zxcaasd =
  //
  `<BearEmoji 
            listvar={["happy", "funny", "sad", "angry"]}
            itemConfig={{
                fontSize: "40px",
                className: "expandHover pointer"
            }} 
            chosenConfig={{
                style: {
                    background: "darkblue"
                }
            }}
        />`;

// 1emoji
const ijsdasew = {
  title: "Emoji",
  subtitle: emoMeta,
  dependencies: { BearEmoji },
  code: zxcaasd,
};

// 1search
const ksae =
  //
  "Easy without a";

const saskqwe = {
  title: "SearchList",
  subtitle: ksae,
  dependencies: { BearSearchList },
  code: zxcaasd,
};

//
//
// 1button
const buttMeta =
  //
  "The big clicker";

const vcoked = `<BearButton 
                        obj="Click Me!"
                        clickObj="Thanks for clicking, come again soon."
                        fontSize="24px"
                        // textvar="Sign Up"
                    />`;

const butTg = [
  //
  "click",
  "onchange",
  "login",
];

const asfkwer = {
  title: "Button",
  subtitle: buttMeta,
  dependencies: { BearButton },
  code: vcoked,
  tags: butTg,
};

// 1icon
//

// 1icontext
const icoMeta =
  //
  "Show element.";

const icoCode = `<BearTextMedia 
                        iconvar="signup"
                        textvar="Sign Up"
                    />`;

const sdfgtwre = {
  title: "IconText",
  subtitle: icoMeta,
  dependencies: { BearTextMedia },
  code: icoCode,
};

// 1float
const floMeta =
  //
  "Perfectly balanced, as all things should be.";

const FLOcODE = `<BearFloat 
                        leftobj="LEFT"
                        centerobj="CENTER"
                        rightobj="RIGHT"
                    />`;

const zcxvdfg = {
  title: "Float",
  subtitle: floMeta,
  dependencies: { BearFloat },
  code: FLOcODE,
};

// 

// 1list
const cokvd =
  //
  "Hundreds of use cases, the .";

const dsrwe = `<BearList
            listvar={["apples", "bananas", "oranges"]}
            renderItem={(fruit) => 'I love ' + fruit}
        />`;

const cvxbmfsfd = {
  title: "List",
  subtitle: cokvd,
  dependencies: { BearList },
  code: dsrwe,
};

// 1form
const sdaofmwer =
  //
  `<BearForm 
          formid="bearForm"
          listvar={["name", "password"]}
        />`;

const zkjdsrw =
  //
  "Write custom validation in seconds, not hours.";

const xfdatrea = {
  title: "Form",
  subtitle: zkjdsrw,
  dependencies: { BearForm },
  code: sdaofmwer,
};

// 1social
const adsfwer =
  //
  `<BearSocial 
            shareLink="https://codesandbox.io/docs/embedding"
            shareText="Just stared using BearUI. It's awesome!"
            listvar={["twitter", "whatsapp", "facebook"]}
            layout="horizontal"
            horiz={true}
        />`;

const sdfgokdr =
  //
  "Share loink.";

const asdeijsde = {
  title: "Social",
  dependencies: { BearSocial },
  subtitle: sdfgokdr,
  code: adsfwer,
};

// 1select
const selCOdo =
  //
  `<BearSelect 
            listvar={["Apple","Banana","Orange"]}
        />`;

const selMeta =
  //
  "The easy way.";

const rtoier = {
  title: "Select",
  dependencies: { BearSelect },
  subtitle: selMeta,
  code: selCOdo,
};

// 1auth
const authMeta =
  //
  "A simple that connects with your backend.";

const authCODO =
  //
  `<BearAuthPortal 
            socialList={["google","facebook","github", "email"]}
        />`;

const authios = {
  title: "AuthPortal",
  dependencies: { BearAuthPortal },
  subtitle: authMeta,
  code: authCODO,
  tags: ["sign up", "register", "login"],
};

// 1tags
const tagCodo =
  //
  `<BearSocial 
            shareLink="https://codesandbox.io/docs/
        />`;

const tagMeta =
  //
  "Share loink.";

const tagios = {
  title: "Tags",
  dependencies: { BearTags },
  subtitle: tagMeta,
  code: tagCodo,
};




// 
// 
// 1currency
const currMeta =
  //
  "Let people see their payment in real time";

const currcodo =
  //
  `<BearCurrency 
            shareLink="https://codesandbox.io/docs/
        />`;

const currtg = [
  //
  "money", "payment", "conversion",
];

const currios = {
  title: "Currency",
  dependencies: { BearCurrency },
  subtitle: currMeta,
  code: currcodo,
  tags: currtg,
};




// 1checkout
const checkmeta =
  //
  "A new item.";

const checkcodo =
  //
  `<BearNew 
            shareLink="https://codesandbox.io/docs/
        />`;

const checkTG = [
  //
  "",
];

const checkios = {
  title: "Checkout",
  dependencies: { BearSocial },
  subtitle: newmeta,
  code: checkcodo,
  tags: checkTG,
};


// 1input
const inpmeta =
  //
  "A new item.";

const inpcodo =
  //
  `<BearInput
            placeholder="Enter your name"
            typeInput="name"
        />`;

const inpTG = [
  //
  "form", "fill", "checkout"
];

const inpios = {
  title: "Input",
  dependencies: { BearInput },
  subtitle: inpmeta,
  code: inpcodo,
  tags: inpTG,
};




// 1carousel
const carometa =
  //
  "Switch between items seamlessly.";

const carocodo =
  //
  `<BearCarousel 
            shareLink="https://codesandbox.io/docs/
        />`;

const caroTG = [
  //
  "shift", "step", 
];

const caroios = {
  title: "Carousel",
  dependencies: { BearCarousel  },
  subtitle: carometa,
  code: carocodo,
  tags: caroTG,
};




// 1dropdown
const dropmeta =
  //
  "A new item.";

const dropcodo =
  //
  `<BearNew 
            shareLink="https://codesandbox.io/docs/
        />`;

const dropTG = [
  //
  "",
];

const dropios = {
  title: "Dropdown",
  dependencies: { BearDropdown },
  subtitle: dropmeta,
  code: dropcodo,
  tags: dropTG,
};



// 1notification
const notimeta =
  //
  "A new item.";

const noticodo =
  //
  `<BearNotification 
            timeDisplay={10}
            shareLink="https://codesandbox.io/docs/
        />`;

const notiTG = [
  //
  "",
];

const notios = {
  title: "Notification",
  dependencies: { BearNotification },
  subtitle: notimeta,
  code: noticodo,
  tags: notiTG,
};


// 1footer
const footmeta =
  //
  "A new item.";

const footcodo =
  //
  `<BearNew 
            shareLink="https://codesandbox.io/docs/
        />`;

const footTG = [
  //
  "",
];

const footios = {
  title: "Footer",
  dependencies: { BearFooter },
  subtitle: footmeta,
  code: footcodo,
  tags: footTG,
};


// 1user
const usemeta =
  //
  "At the top right of every good site.";

const usecodo =
  //
  `<BearUserPortal 
            shareLink="https://codesandbox.io/docs/
        />`;

const useTG = [
  //
  "",
];

const useios = {
  title: "UserPortal",
  dependencies: { BearUserPortal },
  subtitle: usemeta,
  code: usercodo,
  tags: useTG,
};



// 1new
const newmeta =
  //
  "A new item.";

const newcodo =
  //
  `<BearNew 
            shareLink="https://codesandbox.io/docs/
        />`;

const newTG = [
  //
  "",
];

const newios = {
  title: "Social",
  dependencies: { BearSocial },
  subtitle: newmeta,
  code: newcodo,
  tags: newTG,
};

// 1dict
//
// 1free
const freeTier = {
  div: xcvbsdf,
  button: asfkwer,
  //   icon:
  iconText: sdfgtwre,
  float: zcxvdfg,
  // 
  // LIST
  list: cvxbmfsfd,
  dropdown: dropios,
  // 
  // LAYOUT
  footer: footios,
  // 
  // 
  tags: tagios,
  emoji: ijsdasew,
  input:inpios,
  notification: notios,
  // 
  // 
  image: {},
  date: {},
}; 

// 1paid
const payTier = {
  form: xfdatrea,
  select: rtoier,
  // 
  // USER
  userPortal: usios,
  // 
  // AUTH
  authPortal: authios,
  searchList: saskqwe,
  // 
  // 
  // 
  // PAYMENT
  checkout: checkios,
  currency: currios,
  // 
  // 
  carousel: caroios,
  social: asdeijsde,
};

const sdkjer = {
  ...freeTier,
  ...mapDictNew(payTier, { paidTrue: true }),
  //   ...payTier,
};

export const bearConstDict =
  //
  sdkjer;
//   mapDictNew(sdkjer, { tags: ["one", "two", "tjre"] });

// 1list
const dfigjewr = [
  //
  // FREE
  "div",
  "button",
  "float",
  "image",
  "iconText",
  "list",
  "dropdown",
  "emoji",
  "tags",
  "input",
  // 
  // 1layout
  "footer",
  // 
  // 
  
  "date",
  "duration",
  "notification",
  //
  // PAID
  // "align",
  "form",
  "select",
  "carousel",
  "searchList",
  "currency",
  "social",
  // 
  // 
  "authPortal",
  "userPortal",
  // 
  // 
  "checkout",
];

export const bearConst = {
  listvar: dfigjewr,
  dictvar: bearConstDict,
};
