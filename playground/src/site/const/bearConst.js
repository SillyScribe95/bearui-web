// import {
//   BearCarousel,
//   BearList,
//   BearButton,
//   BearDiv,
//   BearFloat,
//   BearFetchAPI,
//   BearEmoji,
//   BearError,
//   BearSocialShare,
//   BearSearchList,
//   BearSelect,
//   BearLanguage,
//   BearCheckout,
//   BearPossess,
//   BearTextMedia,
//   BearAuthPortal,
//   BearUserPortal,
//   BearTags,
//   logs,
//   AlterHighlight,
//   AlterModel,
//   BearDuration,
//   BigButton,
//   BearCreditCard,
//   BearForm,
//   NewHighlight,
//   HiButton,
//   BearCodePreview,
//   BearIcon,
//   TimeButtons,
// } from "bearui-web";

// import {
//   //
//   mapDictNew,
// } from "@SillyScribe95/bedia-shared/";

// import { authios } from "./compConst/authPortalConst";
// import { divios } from "./compConst/divConst";
// import { searchios } from "./compConst/searchListConst";
// import { listios } from "./compConst/listConst";

// const aaaa = "";

// //
// // 1emoji
// const emoMeta =
//   //
//   "Keep up with the kids.";

// const zxcaasd =
//   //
//   `<BearEmoji
//             bearName="emojis"
//             list={["happy", "funny", "sad", "angry"]}
//             itemConfig={{
//                 fontSize: "40px",
//                 className: "expandHover pointer"
//             }}
//             chosenConfig={{
//                 style: {
//                     background: "darkblue"
//                 }
//             }}
//         />`;

// //
// //
// // 1button
// const buttMeta =
//   //
//   "The big clicker";

// const vcoked = `<BearButton
//                       obj="Click Me!"
//                       clickObj="Thanks for clicking, come again soon."
//                       fontSize="24px"
//                       // textvar="Sign Up"
//                   />`;

// const butTg = [
//   //
//   "click",
//   "onchange",
//   "login",
// ];

// export const buttios = {
//   title: "Button",
//   subtitle: buttMeta,
//   dependencies: { BearButton },
//   codeList: [vcoked, aaaa, aaaa],
//   tags: butTg,
// };

// // 1emoji
// const ijsdasew = {
//   title: "Emoji",
//   subtitle: emoMeta,
//   dependencies: { BearEmoji },
//   codeList: [zxcaasd, aaaa, aaaa],
// };

// // 1icon
// //

// // 1icontext
// const icoMeta =
//   //
//   "Show element.";

// const icoCode = `<><BearTextMedia
//                         iconvar="share"
//                         textvar="Share Bear"
//                     />
//                     <BearTextMedia
//                         iconvar="share"
//                         textvar="Share Bear"
//                     />
//                     </>`;

// const sdfgtwre = {
//   title: "IconText",
//   subtitle: icoMeta,
//   dependencies: { BearTextMedia },
//   codeList: [icoCode, aaaa, aaaa],
// };

// const FLOcODE = `<BearFloat
//                         leftobj="LEFT"
//                         centerobj="CENTER"
//                         rightobj="RIGHT"
//                     />`;

// // 1float
// const floMeta =
//   //
//   "Perfectly balanced, as all things should be.";

// const lfotg = ["flex", "align", "stretch"];

// const zcxvdfg = {
//   title: "Float",
//   subtitle: floMeta,
//   dependencies: { BearFloat },
//   codeList: [FLOcODE, aaaa, aaaa],
//   tags: lfotg,
// };

// // 1socialshare
// const adsfwer =
//   //
//   `<BearSocialShare
//             shareLink="https://codesandbox.io/docs/embedding"
//             shareText="Just stared using BearUI. It's awesome!"
//             list={["twitter", "whatsapp", "facebook"]}
//             layout="horizontal"
//             horiz={true}
//         />`;

// const sdfgokdr =
//   //
//   "Share loink.";

// const asdeijsde = {
//   title: "SocialShare",
//   dependencies: { BearSocialShare },
//   subtitle: sdfgokdr,
//   codeList: [adsfwer, aaaa, aaaa],
// };

// // 1select
// const selCOdo =
//   //
//   `<BearSelect
//             list={["Apple","Banana","Orange"]}
//         />`;

// const selMeta =
//   //
//   "The easy way.";

// const rtoier = {
//   title: "Select",
//   dependencies: { BearSelect },
//   subtitle: selMeta,
//   codeList: [selCOdo, aaaa, aaaa],
// };

// // 1tags
// const tagCodo =
//   //
//   `<BearSocialShare
//             shareLink="https://codesandbox.io/docs/
//         />`;

// const tagMeta =
//   //
//   "Share loink.";

// const tagios = {
//   title: "Tags",
//   dependencies: { BearTags },
//   subtitle: tagMeta,
//   codeList: [tagCodo, aaaa, aaaa],
// };

// // 1carousel
// const carometa =
//   //
//   "Switch between items seamlessly.";

// const carocodo =
//   //
//   `<BearCarousel
//             shareLink="https://codesandbox.io/docs/
//         />`;

// const caroTG = [
//   //
//   "shift",
//   "step",
// ];

// const caroios = {
//   title: "Carousel",
//   dependencies: { BearCarousel },
//   subtitle: carometa,
//   codeList: [carocodo, aaaa, aaaa],
//   tags: caroTG,
// };

// // 1user
// const usemeta =
//   //
//   "At the top right of every good site.";

// const usercodo =
//   //
//   `<BearUserPortal
//             shareLink="https://codesandbox.io/docs/
//         />`;

// const useTG = [
//   //
//   "",
// ];

// const usios = {
//   title: "UserPortal",
//   dependencies: { BearUserPortal },
//   subtitle: usemeta,
//   codeList: [usercodo, aaaa, aaaa],
//   tags: useTG,
// };

// // 1language
// const langmeta =
//   //
//   "Translate everything instantly with custom text for each language.";

// const langcodo =
//   //
//   `<BearLanguage
//             english="Bear UI is the best thing I've ever seen."
//             french="Baer UI, c'est fantastique, nes-que pas?"
//         />`;

// const langTG = [
//   //
//   "internationalise",
//   "translate",
// ];

// const langios = {
//   title: "Language",
//   dependencies: { BearLanguage },
//   subtitle: langmeta,
//   codeList: [langcodo, aaaa, aaaa],
//   tags: langTG,
// };

// // 1new
// const newmeta =
//   //
//   "A new item.";

// const newcodo =
//   //
//   `<BearNew
//             shareLink="https://codesandbox.io/docs/
//         />`;

// const newTG = [
//   //
//   "",
// ];

// const newios = {
//   title: "Social",
//   dependencies: { BearSocialShare },
//   subtitle: newmeta,
//   codeList: [newcodo, aaaa, aaaa],
//   tags: newTG,
// };

// // 1checkout
// const chekmeta =
//   //
//   "The most important / difficult part of any website.";

// const chekcodo =
//   //
//   `<BearCheckout
//             provider="stripe"
//             providerConfig={{
//               liveSecretKey: "SECRET",
//             }}
//             totalPayment={100}
//             currency="usd"
//             onSuccess={() => console.log("Success!")}
//             onFailure={() => console.log("Fail!")}
//         />`;

// const chekTG = [
//   //
//   "payment",
//   "stripe",
// ];

// const chekios = {
//   title: "Checkout",
//   dependencies: { BearCheckout },
//   subtitle: chekmeta,
//   codeList: [{ code: chekcodo }, aaaa, aaaa],
//   tags: chekTG,
// };

// // 1fetch
// const fechmeta =
//   //
//   "Uses react-query to pull in the right data.";

// const fechcodo =
//   //
//   `<BearFetchAPI
//             link="https://randomuser.me/api?results=5"
//             renderLoad={() => "Loading..."}
//             renderListData={displayPeople}
//         />`;

// const zxasa = `function displayPeople({
//     dob, name, phone, email, ...asdew }) {

//     return (
//       <div>
//         <b>
//           {name.title} {name.first} {name.last}
//         </b>
//         <br />
//         Birthday: {dob.age}
//         <br />
//         Phone: {phone}
//         <br />
//         Email: {email}
//       </div>
//     );
//   }`;

// const fechTG = [
//   //
//   "fetch",
//   "axios",
//   "query",
// ];

// const fechios = {
//   title: "FetchAPI",
//   dependencies: { BearFetchAPI },
//   subtitle: fechmeta,
//   codeList: [fechcodo, aaaa, aaaa],
//   codeAbove: zxasa,
//   nocodeList: [true, aaaa, aaaa],
//   tags: fechTG,
// };

// // 1dict
// //
// // 1free
// const freeTier = {
//   div: divios,
//   // button: asfkwer,
//   //   icon:
//   iconText: sdfgtwre,
//   float: zcxvdfg,
//   fetchAPI: fechios,
//   checkout: chekios,
//   //
//   // LIST
//   list: listios,
//   //
//   //
//   tags: tagios,
//   emoji: ijsdasew,
//   //
//   socialShare: adsfwer,
//   //
//   //
// };

// // 1form
// const sdaofmwer =
//   //
//   `<BearForm
//           formid="bearForm"
//           bearName="bearForm"
//           list={["name", "password"]}
//         />`;

// const zkjdsrw =
//   //
//   "Write custom validation in seconds, not hours.";

// const xfdatrea = {
//   title: "Form",
//   subtitle: zkjdsrw,
//   dependencies: { BearForm },
//   codeList: [sdaofmwer, aaaa, aaaa],
// };

// // 1paid
// const payTier = {
//   // language: langios,
//   form: xfdatrea,
//   select: rtoier,
//   //
//   // USER
//   userPortal: usios,
//   //
//   // AUTH
//   authPortal: authios,
//   searchList: searchios,
//   //
//   //
//   //
//   // PAYMENT
//   //
//   //
//   carousel: caroios,
//   social: asdeijsde,
// };

// const sdkjer = {
//   ...freeTier,
//   ...mapDictNew(payTier, { paidTrue: true }),
//   //   ...payTier,
// };

// export const bearConstDict =
//   //
//   //asd
//   sdkjer;
// //   mapDictNew(sdkjer, { tags: ["one", "two", "tjre"] });

// // 1free
// const freelist = [
//   //
//   // FREE
//   "div",
//   "button",
//   "float",
//   "span",
//   "contextProvider",
//   "surround",
//   "link",
//   "blanklink",
//   "image",
//   "iconText",
//   "device",
//   //
//   // 1string
//   "space",
//   //
//   // 1lists
//   "list",
//   "dropdown",
//   "emoji",
//   "tags",
//   //
//   // 1style
//   "border",
//   //
//   // 1layout
//   "modal",
//   "header",
//   "footer",
//   "drag",
//   "resize",
//   "interact",
//   //
//   "log",
//   "tooltip",
//   "helmet meta",
//   "page",
//   //
//   // 1extras
//   "load",
//   "collapse",
//   "country",
//   "wrap",
//   "plural",
//   "possess",
//   "table",
//   "model",
//   "json",
//   "avatar",
//   "markdown",
//   //
//   "fetchAPI",
//   "backToTop",
//   "color",
//   "toggle",
//   "code - inline or not, etc",
//   "date",
//   "star",
//   "duration",
//   "privacy",
//   "badge",
//   "notification",
//   "money",
//   "companies",

//   //
//   "tabs",
//   "sticky",
//   // PAID
// ];

// const inputList = [
//   "input",
//   "inputTable",
//   "inputPassword",
//   "inputText",
//   "inputName",
//   "inputAddress",
// ];

// // 1paid
// const paidlist = [
//   "router",
//   "paginate",
//   // 1map 1location
//   "map",
//   "address",
//   //
//   "language",
//   "error",
//   "chart",
//   "popupDEAL/initial message - Modal, sticky, bar, local",
//   "form",
//   "select",
//   "404",
//   "badge",
//   "fileUpload",
//   "screenshot",
//   "video",
//   "recordAudio",
//   "recordWebcam",
//   "recordVideo",
//   "audioPlayer",
//   "viderPlayer",
//   "carousel",
//   "searchList",
//   "currency",
//   "textEditor",
//   "socialShare",
//   "socialLinks",
//   "codePreview",
//   //
//   "calendar",
//   "autocomplete",
//   // payment
//   "creditCard",
//   "tour",
//   "pdf",
//   "pulse",
//   "imageEditor",
//   "textHighlight",
//   "drag",
//   "chatbot",
//   "cookies/consent",
//   //
//   // LAYOUT
//   "sidebar",
//   //
//   //
//   "authPortal",
//   "userPortal",
//   //
//   //
//   "checkout",
// ];

// const founderList = [
//   //
//   "copyright: © Company name",
//   "navigation",
//   "hero",
//   "testimonial",
//   "pricing",
// ];

// // 1list
// const dfigjewr = [
//   //
//   ...freelist,
//   ...inputList,
//   ...paidlist,
//   ...founderList,
// ];

// export const bearConst = {
//   list: dfigjewr,
//   dictvar: bearConstDict,
// };

// // 1console
// logs.logga("___ bearConstDict ___", bearConstDict);

// export const compTypesBear = [
//   //
//   "List",
//   "Form",
//   "Input",
// ];
