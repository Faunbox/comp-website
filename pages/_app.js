import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider, QueryClient, React, Hydrate } from "react-query";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

//initialization react-query client
export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
