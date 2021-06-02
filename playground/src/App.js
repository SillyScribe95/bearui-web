// import TestPage from "./TestObj";
// import TestComp from "./TestComp";
import TestBear from "./TestBear";
import { BearContextProvider } from "bearui-web";
import "bearui-web/build/bearui.css";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";

function App() {
  const okdfger = {
    className: "App",
    style: {
      padding: "3% 5%",
    },
  };

  const iasjde = {
    apiKey: "phIcmS4LWP6s6P1WMJVn",
  };

  return (
    <BearContextProvider {...iasjde}>
      <div {...okdfger}>
        {/*  */}
        {/* asdokqw */}
        {/* <TestPage /> */}
        {/* <TestComp /> */}
        <TestBear />
      </div>
    </BearContextProvider>
  );
}

export default App;
