// import TestPage from "./TestObj";
// import TestComp from "./TestComp";
import TestBear from "./TestBear";
import {
  //
  BearDiv,
  BearKeyValue,
  BearRouter,
  BearContextProvider,
} from "bearui-web";
import "bearui-web/build/bearui.css";
import {
  //
  logs,
} from "bearui-web";
// import { ExplorePage } from "./pages/ExplorePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import MainContextProvider from "./chat/context/ChatContext";
// import { ChatContainer } from "./chat/containers/ChatContainer";
// import { Site } from "./site/containers/Site";

function App() {
  const okdfger = {
    className: "App",
    style: {
      padding: "2% 25%",
    },
  };

  const iasjde = {
    apiKey: "phIcmS4LWP6s6P1WMJVn",
  };

  const queryClient = new QueryClient();

  const ijdfas =
    //
    // "/explore";
    "/explore/:typeComp?/:typeTab?";

  // "/:slugURL?/:typevar?/:typeSlug?";
  // const exploro = {
  //   path: ijdfas,
  //   component: ExplorePage,
  // };
  //
  const ijsfdre = [
    //
    // exploro,
    // { path: "pricing", PricingBear },
    // { path: "/about/:type?/:typeTab?", component: WebsiteDocument },
    { path: "/test", component: TestBear },
    // { path: "/chat", component: ChatContainer },
  ];

  const dsifsaew = (
    <div {...okdfger}>
      {/*  */}
      {/* asdokqw */}
      {/* <TestPage /> */}
      {/* <TestComp /> */}
      {/* <BearDiv flex obj="odkasd aslkdwe " /> */}
      {/* <TestBear /> */}
      {/* <HomePageBear /> */}
      {/* <PlaygroundMain /> */}
      {/* <ChooseDemoTab /> */}
      {/* <SearchQuestionBear /> */}
      {/* <ExploreBear /> */}
      {/* <SuggestComp /> */}
      {/* <PriceBear /> */}
    </div>
  );

  const djfgr = {
    // documentation:
    list: ijsfdre,
    homepage: TestBear,
    // homepage: HomePageBear,
  };

  // const dufhgert = (
  //   <BrowserRouter>
  //     <Switch>
  //       {/*  */}
  //       <Route {...exploro} />
  //       <Route path="" component={TestBear} />
  //     </Switch>
  //   </BrowserRouter>
  // );

  return (
    <QueryClientProvider client={queryClient}>
      <BearContextProvider {...iasjde}>
        <MainContextProvider {...iasjde}>
          aaaa bbbb
          {/* <BearKeyValue /> */}
          {/* <BearRouter {...djfgr} /> */}
          {TestBear()}
          {/* {dsifsaew} */}
          {/* {dufhgert} */}
        </MainContextProvider>
      </BearContextProvider>
    </QueryClientProvider>
  );
}

export default App;
