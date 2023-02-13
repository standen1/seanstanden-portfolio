import React from 'react';
import { motion, MotionConfig, AnimatePresence } from "framer-motion"
import Header from '../../ui/Header/Header';
import Footer from '../../ui/Footer/Footer';
import { routeAnimations } from '../../../animations/Animations';

export default function Layout(props: any): JSX.Element {
  return (
    <motion.div variants={routeAnimations}>
        <Header />
          <MotionConfig reducedMotion="user">
            <AnimatePresence>
              { props.children }
            </AnimatePresence>
          </MotionConfig>
        <Footer />
    </motion.div>
  )
};
