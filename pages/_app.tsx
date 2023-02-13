import styled, {ThemeProvider} from 'styled-components';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';
import Router from "next/router";

import { theme } from '../styles/colors'
import { GlobalStyles } from '../styles/globals';
import ErrorBoundary from '../components/topLevel/ErrorBoundary/ErrorBoundary';
import Layout from '../components/topLevel/Layout/Layout';

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange );
Router.events.on("routeChangeStart", routeChange );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default MyApp
