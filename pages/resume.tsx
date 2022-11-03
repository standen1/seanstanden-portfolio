import type { NextPage } from 'next'

import Head from 'next/head'
import styled from 'styled-components';

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sean Standen | Resume</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript frameworks." />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <Main>
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
