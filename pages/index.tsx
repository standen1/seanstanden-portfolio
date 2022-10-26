import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

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

      <main className={styles.main}>
        
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
      </main>

    </>
  )
}

export default Home
