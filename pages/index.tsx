import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import ComingSoon from '../components/ui/ComingSoon/ComingSoon'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean Standen | Web Developer</title>
        <meta name="description" content="Web Developer from San Diego who specializes in modern JavaScript frameworks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ComingSoon />
      </main>

    </div>
  )
}

export default Home
