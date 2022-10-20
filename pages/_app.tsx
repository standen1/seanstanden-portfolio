import '../styles/main.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/topLevel/ErrorBoundary/ErrorBoundary'
import Layout from '../components/topLevel/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp
