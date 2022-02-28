import type { AppProps } from "next/app";
import { Page } from "../../styles/app";

import { GlobalStyle } from "../../styles/globals";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import useWindowDimensions from "../hooks/useWindowDimensions";

function MyApp({ Component, pageProps }: AppProps) {
  const { width } = useWindowDimensions();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Page>
        {width && width > 1920 && <NavBar />}
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
