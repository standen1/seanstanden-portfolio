import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import CloseIcon from '../components/ui/CloseIcon/CloseIcon';

import Button from '../components/ui/Button/Button';


import ComingSoon from '../components/ui/ComingSoon/ComingSoon';
import FullScreenImageOrVideo from '../components/ui/FullScreenImageOrVideo/FullScreenImageOrVideo';
import FullScreenWrapper from '../components/ui/FullScreenWrapper/FullScreenWrapper';
import PortfolioPopover from '../components/ui/PortfolioPopover/PortfolioPopover';
import PortfolioItem from '../components/ui/PortfolioItem/PortfolioItem';

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
            <PortfolioPopover title="MySite" technologyStack={["Java", "C#", "JavaScript", "Node"]} siteUrl="https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html" codeUrl='https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html' close={() => console.log('closePopover')} />
          </FullScreenWrapper> */}
          {/* <PortfolioItem portfolioItem={{
            title: 'MySite',
            techStack: ["Java", "C#", "JavaScript", "Node"],
            siteUrl: 'https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html',
            codeUrl: 'https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html',
            background: '../../public/background-images/nature-vid-still'
          }} /> */}
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
