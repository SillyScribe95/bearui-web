import React, {
  //
  useState,
  useEffect,
  useContext,
} from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
// import { } from
import { BrowserRouter as Router } from "react-router-dom";

export function ProvideMain({
  //
  reactRouter,
  query,
  children,
  chakra,
}) {
  // const queryClient = query ? query : new QueryClient();

  let asijew = (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ThemeProvider> */}
      {/*  */}
      {children}
      {/* </ThemeProvider> */}
      {/* </QueryClientProvider> */}
    </>
  );

  asijew = !chakra ? (
    asijew
  ) : (
    <ChakraProvider>
      {/*  */}
      {children}
    </ChakraProvider>
  );

  asijew = reactRouter ? <Router>{asijew}</Router> : asijew;

  return asijew;
}
