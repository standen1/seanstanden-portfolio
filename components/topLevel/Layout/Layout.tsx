import React from 'react';
import { MotionConfig, AnimatePresence } from "framer-motion"
import Header from '../../ui/Header/Header';
import Footer from '../../ui/Footer/Footer';

export default function Layout(props: any): JSX.Element {
  return (
    <>
        <Header />
          <MotionConfig reducedMotion="user">
            <AnimatePresence>
              { props.children }
            </AnimatePresence>
          </MotionConfig>
        <Footer />
    </>
  )
};
