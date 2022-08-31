import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClientProvider, QueryClient, React, Hydrate } from "react-query";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import { darkTheme, lightTheme } from "../libs/nextUi";
import { useState } from "react";

//initialization react-query client
export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <AnimatePresence initial={false} mode="wait">
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AnimatePresence>
            </Hydrate>
          </QueryClientProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export default MyApp;
