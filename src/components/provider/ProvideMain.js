import React, {
  //
  useState,
  useEffect,
  useContext,
} from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

export function ProvideMain({ query, children, chakra }) {
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

  asijew = (
    // !chakra. ? (
    //   asijew
    // ) : (
    <ChakraProvider>
      {/*  */}
      {children}
    </ChakraProvider>
  );

  return asijew;
}
