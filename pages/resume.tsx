import type { NextPage } from 'next'
import { motion } from 'framer-motion';
import Head from 'next/head'
import styled from 'styled-components';

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sean Standen | Resume</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript framework such as React, Next, and Express." />
        <link rel="icon" href="favicon/favicon.ico" />
        <meta property="og:title" content="Sean Standen | Resume" />
        <meta
          property="og:description"
          content="Web Developer from San Diego who specializes in modern JavaScript framework such as React, Next, and Express."
        />
        <meta
          property="og:image"
          content="https://seanstanden.dev/background-images/nature-vid-still.png"
        />
        <meta property="og:url" content="https://seanstanden.dev/resume" />
        <meta name="twitter:title" content="Sean Standen | Resume" />
        <meta
          name="twitter:description"
          content="Web Developer from San Diego who specializes in modern JavaScript framework such as React, Next, and Express."
        />
        <meta
          name="twitter:image"
          content="https://seanstanden.dev/background-images/nature-vid-still.png"
        />
      </Head>

      <Main as={motion.div} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} 
      >
        <section id="resume">
            <iframe src='/resume.pdf' title='resume' width="100%" height="600px" />
        </section>
      </Main>
    </>
  )
}

export default Resume;

const Main = styled.main`
    padding: 100px 20px;
    margin: 0;

    .resume {
        width: 100%;
        max-width: 1200px;
        margin: auto;
    }
`;
