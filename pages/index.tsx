import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import About from '../components/ui/About/About';

//Import wrapper components
import ComingSoon from '../components/ui/ComingSoon/ComingSoon';
import FullScreenImageOrVideo from '../components/ui/FullScreenImageOrVideo/FullScreenImageOrVideo';
import FullScreenWrapper from '../components/ui/FullScreenWrapper/FullScreenWrapper';
import Intro from '../components/ui/Intro/Intro';

//import section components
import Portfolio from '../components/ui/Portfolio/Portfolio';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sean Standen | Web Developer</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript frameworks." />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <Main>

        <section id="welcome">
          <Intro />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="portfolio">
            <Portfolio />
        </section>
        
        <section id="contact"></section>
      </Main>
    </>
  )
}

export default Home;

const Main = styled.main`
    padding: 0;
    margin: 0;
`;
