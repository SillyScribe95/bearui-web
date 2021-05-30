import React, {
  //
  useState,
  useEffect,
  useContext,
} from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

export function ProvideMain({ children }) {
  const queryClient = new QueryClient();
  const asijew = (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider> */}
      <ChakraProvider>
        {/*  */}
        {children}
      </ChakraProvider>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );

  return asijew;
}
