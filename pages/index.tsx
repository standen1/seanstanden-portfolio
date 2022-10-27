import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import ComingSoon from '../components/ui/ComingSoon/ComingSoon';
import FullScreenImageOrVideo from '../components/ui/FullScreenImageOrVideo/FullScreenImageOrVideo';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sean Standen | Web Developer</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript frameworks." />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <Main>
        
        {/* <FullScreenImageOrVideo
          backgroundURL="/background-images/record-vid-still.png"
          isVideo={false}
          alt="Record Spinning on a turntable."
        >
          <ComingSoon />
        </FullScreenImageOrVideo> */}
        <FullScreenImageOrVideo
          backgroundURL="/videos/record-video-compressed.mp4"
          isVideo={true}
          poster="/background-images/record-vid-still.png"
        >
          <ComingSoon />
        </FullScreenImageOrVideo>
      </Main>

    </>
  )
}

export default Home;

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.white};
`;
