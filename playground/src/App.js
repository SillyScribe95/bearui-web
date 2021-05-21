import logo from "./logo.svg";
import "./App.css";
import TestPage from "./TestObj";
import TestBear from "./TestBear";
import TestComp from "./TestComp";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  const okdfger = {
    className: "App",
    style: {
      padding: "2% 15%",
    },
  };

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div {...okdfger}>
        {/*  */}
        {/* asdokqw */}
        {/* <TestPage /> */}
        {/* <TestComp /> */}
        <TestBear />
      </div>
    </QueryClientProvider>
  );
}

export default App;
