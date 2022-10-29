import styled, {ThemeProvider} from 'styled-components';
import type { AppProps } from 'next/app';
import { Poppins } from '@next/font/google';

import { theme } from '../styles/colors'
import { GlobalStyles } from '../styles/globals';
import ErrorBoundary from '../components/topLevel/ErrorBoundary/ErrorBoundary';
import Layout from '../components/topLevel/Layout/Layout';

//Font Configuratio

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
