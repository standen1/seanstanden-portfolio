import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import About from '../components/ui/About/About';
import Skills from '../components/ui/Skills/Skills';

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
        <title>Sean Standen | Web Developer Specializing in Modern JavaScript Frameworks</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript framework such as React, Next, and Express." />
        <link rel="icon" href="favicon/favicon.ico" />
        <meta property="og:title" content="Sean Standen | Web Developer Specializing in Modern JavaScript Frameworks" />
        <meta
          property="og:description"
          content="Web Developer from San Diego who specializes in modern JavaScript framework such as React, Next, and Express."
        />
        <meta
          property="og:image"
          content="https://seanstanden.dev/background-images/record-vid-still.png"
        />
        <meta property="og:url" content="https://seanstanden.dev/" />
        <meta name="twitter:title" content="Sean Standen | Web Developer Specializing in Modern JavaScript Frameworks" />
        <meta
          name="twitter:description"
          content="Web Developer from San Diego who specializes in modern JavaScript framework such as React, Next, and Express."
        />
        <meta
          name="twitter:image"
          content="https://seanstanden.dev/background-images/record-vid-still.png"
        />
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

        <section id="skills">
            <Skills />
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
