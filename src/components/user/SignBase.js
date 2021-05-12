// import {
//   FacebookLoginButton,
//   GoogleLoginButton,
//   AppleLoginButton,
//   TwitterLoginButton,
//   GithubLoginButton,
//   createButton,
// } from "react-social-login-buttons";
// import {
//   SiFacebook,
//   SiGoogle,
//   SiLinkedin,
//   SiMessenger,
//   SiTwitter,
// } from "react-icons/si";
// import FormMain from "../components/FormMain";
// import ListMain from "../components/ListMain";
// import { userConnect, userLogSign } from "@todcode/components/";
// import { BearDiv  } from "../components/BearDiv";
// import { getParamVar, ImageTextList } from "../functions/GlobalFunctions";
// import { useState } from "react";
// import BearButton from "../components/BearButton";

// export default function BearSign({
//   //
//   funcvar,
//   typeSign = "login",
//   socialConfig,
//   formConfig,
//   ...sdse
// }) {
//   //
//   //
//   const [emaTrue, setemaTrue] = useState();
//   const [sdfer, setsignType] = useState(typeSign);

//   let signType = sdfer ? sdfer : getParamVar("typeSign");

//   // 1emailbase
//   const emaCon = {
//     text: "Log in with Email",
//     icon: "envelope",
//     iconFormat: (name) => `fa fa-envelope`,
//     style: { background: "#FF5733" },
//     activeStyle: { background: "#ff6700" },
//   };
//   /** My Facebook login button. */
//   const EmailLoginButton = createButton(emaCon);

//   function dskwad() {
//     logs.logga("asokdwqe");
//   }

//   const emBaso = {
//     textvar: <EmailLoginButton />,
//     onClick: dskwad,
//     typevar: "email",
//   };

//   function signCheck(typevar) {
//     let okads =
//       //
//       "";
//     // "Continue with " + typevar;

//     switch (signType) {
//       case "login":
//         okads = "Log in with " + typevar;
//         break;
//       case "signup":
//         okads = "Sign up with " + typevar;
//         break;
//     }

//     return okads;
//   }

//   const fdsogkret = {
//     google: {
//       textvar: <GoogleLoginButton>{signCheck("Google")}</GoogleLoginButton>,
//       // textvar: "Google",
//       iconvar: <SiGoogle />,
//       typevar: "google",
//     },
//     facebook: {
//       textvar: (
//         <FacebookLoginButton>{signCheck("Facebook")}</FacebookLoginButton>
//       ),
//       // textvar: "Facebook",
//       // iconvar: <SiFacebook />,
//       typevar: "facebook",
//     },
//     email: emBaso,
//     github: {
//       textvar: <GithubLoginButton />,
//       // textvar: "Twitter",
//       // iconvar: <SiGithub />,
//       typevar: "github",
//     },
//     apple: {
//       textvar: <AppleLoginButton />,
//       typevar: "apple",
//     },
//     twitter: {
//       textvar: <TwitterLoginButton />,
//       // textvar: "Github",
//       iconvar: <SiTwitter />,
//       typevar: "github",
//     },
//     //
//   };

//   function osadew({ typevar }) {
//     logs.logga("___ userConnect ___", typevar);

//     switch (typevar) {
//       case "email":
//         setemaTrue(true);
//         break;

//       default:
//         userConnect(typevar, funcvar);
//     }
//   }

//   function Bsaeosa({ typevar, iconvar, textvar, ...swe }) {
//     const dfid = {
//       // fontSize: "20px",
//       w: "full",
//       onClick: osadew,
//       leftIcon: iconvar,
//       ...swe,
//       // color: "black",
//       // background: "white",
//       // colorScheme: "white",
//     };

//     const ijdsf = (
//       <>
//         <Button {...dfid}>
//           <Center>
//             <Text>
//               {/* {iconvar} */}
//               {/* Continue with */}
//               {textvar}
//             </Text>
//           </Center>
//         </Button>
//         {/* <hr /> */}
//       </>
//     );

//     return ijdsf;
//   }

//   // 1list
//   const dfogre = [
//     //
//     // "twitter",
//     "google",
//     // "facebook",
//     // "github",
//     // "email",
//   ];

//   const igfder = {
//     listvar: dfogre,
//     dictvar: fdsogkret,
//     onClick: osadew,
//     spaceBetween: "10px",
//     // obj: Bsaeosa,
//     // obj
//     ...socialConfig,
//   };

//   function spfdewr({ email, password }) {
//     logs.logga("___ signBase SIGNUP ___", email, password);
//     //
//     userLogSign(email, password, funcvar);
//   }

//   const dsfijd = (
//     <>
//       <ImageTextList {...igfder} />

//       {/* // <ListMain {...igfder} />; */}
//     </>
//   );

//   function FOrnaW() {
//     //
//     //
//     const dfijd = [
//       //
//       "email",
//       "password",
//     ];

//     const klmi =
//       //
//       // sofer;
//       spfdewr;

//     const dfgre = {
//       listvar: dfijd,
//       // dictvar:
//       // sameline
//       titleConfig: {
//         width: "80px",
//       },
//       buttonText: "Register",
//       formid: "register",
//       onSubmit: klmi,
//       ...formConfig,
//     };

//     const forso = <FormMain {...dfgre} />;

//     return forso;
//   }

//   const jvsfeer =
//     //
//     emaTrue ? <FOrnaW /> : dsfijd;

//   function OrCHekc() {
//     let baseTEST = "";
//     let bottLink = "";
//     let changeit = "";

//     switch (signType) {
//       case "login":
//         changeit = "signup";
//         baseTEST = "Don't have an account?";
//         bottLink = "Sign Up for free";
//         break;
//       case "signup":
//         baseTEST = "Already have an account?";
//         bottLink = "Sign in to Bedia";
//         changeit = "login";
//         break;
//     }

//     const kasesd = {
//       obj: baseTEST,
//     };

//     function saoke(sad) {
//       setsignType(changeit);
//     }

//     const koewqe = {
//       onClick: saoke,
//       // linkvar: "?typeSign=" + signType,
//       // linkvar: " signType,
//       // linkConfig: {
//       //   noBlack: true,
//       // },
//       obj: bottLink,
//       style: {
//         marginBottom: "20p",
//         fontSize: "1.3em",
//       },
//     };

//     const oksae = (
//       <>
//         <BearDiv {...kasesd} />
//         <BearDiv {...koewqe} />
//       </>
//     );

//     const sdease = {
//       obj: oksae,
//       bediaTrue: true,
//       style: {
//         padding: "15px",
//       },
//     };

//     const kdsfse = <BearButton {...sdease} />;

//     const oasebd = {
//       style: {
//         paddingTop: "20px",
//         textAlign: "center",
//         fontSize: "1.3em",
//       },
//       obj: kdsfse,
//     };

//     return <BearDiv {...oasebd} />;
//   }

//   const jdtre = sdfer && (
//     <>
//       {jvsfeer}
//       <OrCHekc />
//     </>
//   );

//   const okasdew = {
//     obj: jdtre,
//     // fadeBool: "boo",
//     ...sdse,
//   };

//   return <BearDiv {...okasdew} />;
// }
