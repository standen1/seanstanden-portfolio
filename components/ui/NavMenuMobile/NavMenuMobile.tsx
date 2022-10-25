import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './NavMenuMobile.module.scss';

import { 
    navBGAnimation, 
    navMenuAnimation,
    navLinkAnimation 
}  from '../../../animations/NavBar';

export interface NavMenuMobileProps {
    isOpen: boolean;
    closeNavBar: any;
}
export default function NavMenuMobile({isOpen, closeNavBar}: NavMenuMobileProps): JSX.Element {
    return (
        <motion.div className={styles.NavMenuMobile} initial="closed" animate={isOpen ? "open" : "closed"} variants={navBGAnimation}>
          <motion.ul animate={isOpen ? "open" : "closed"} variants={navMenuAnimation}>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/"
              ><div><a onClick={closeNavBar}>Home</a></div>   
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#about"
                onClick={closeNavBar}
              >
                <div><a onClick={closeNavBar}>About</a></div>
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#skills-and-technologies"
                onClick={closeNavBar}
              >
                <div><a onClick={closeNavBar}>Skills And Technologies</a></div>
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#portfolio"
                onClick={closeNavBar}
              >
                <div><a onClick={closeNavBar}>Portfolio</a></div>
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#contact"
                onClick={closeNavBar}
              >
                <div><a onClick={closeNavBar}>Contact</a></div>
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )
}