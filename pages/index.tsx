import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import CloseIcon from '../components/ui/CloseIcon/CloseIcon';

import Button from '../components/ui/Button/Button';


import ComingSoon from '../components/ui/ComingSoon/ComingSoon';
import FullScreenImageOrVideo from '../components/ui/FullScreenImageOrVideo/FullScreenImageOrVideo';
import FullScreenWrapper from '../components/ui/FullScreenWrapper/FullScreenWrapper';
import PortfolioItem from '../components/ui/PortfolioItem/PortfolioItem';

const Home: NextPage = () => {
  // const testItem = {
  //   title: 'MySite',
  //   technologyStack: ["Java", "C#", "JavaScript", "Node"],
  //   siteUrl: "https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html",
  //   codeUrl: 'https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html',
  //   featuredImg: "/portfolio/disco-death-bots.jpeg"
  // }
  return (
    <>
      <Head>
        <title>Sean Standen | Web Developer</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript frameworks." />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>

      <Main>

        <section id="welcome">
        <FullScreenImageOrVideo
          backgroundURL="/videos/record-video-compressed.mp4"
          isVideo={true}
          poster="/background-images/record-vid-still.png"
        >
          <ComingSoon />
        </FullScreenImageOrVideo>
        </section>

        <section id="about" style={{position: 'relative'}}>
          {/* <FullScreenWrapper>
            <PortfolioItem  portfolioItem={testItem} />
          </FullScreenWrapper> */}
        </section>
      </Main>
    </>
  )
}

export default Home;

const Main = styled.main`
    padding: 0;
    margin: 0;
`;
