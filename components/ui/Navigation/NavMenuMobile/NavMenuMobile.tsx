import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { 
    navBGAnimation, 
    navMenuAnimation,
    navLinkAnimation 
}  from '../../../../animations/NavBar';

export interface NavMenuMobileProps {
    isOpen: boolean;
    closeNavBar: any;
}
export default function NavMenuMobile({isOpen, closeNavBar}: NavMenuMobileProps): JSX.Element {
    return (
        <Div as={motion.div} initial="closed" animate={isOpen ? "open" : "closed"} variants={navBGAnimation}>
          <motion.ul animate={isOpen ? "open" : "closed"} variants={navMenuAnimation}>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#about"
                onClick={closeNavBar}
              >
                About
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#skills-and-technologies"
                onClick={closeNavBar}
              >
                Skills And Technologies
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#portfolio"
                onClick={closeNavBar}
              >
                Portfolio
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link 
                href="/#contact"
                onClick={closeNavBar}
              >
                Contact
              </Link>
            </motion.li>
            <motion.li variants={navLinkAnimation}>
              <Link onClick={closeNavBar}
                href="/resume"
              >Resume  
              </Link>
            </motion.li>
          </motion.ul>
        </Div>
      )
}

const Div = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100vh;
  z-index: 90;
  background: ${props => props.theme.secondary};

  ul {
      list-style-type: none;
      width: 100%;
      overflow: hidden;
      li {
      width: 100%;
      transition: all 0.2s ease;
      a {
          display: block;
          padding: 15px 30px;
          color: ${props => props.theme.white};
          font-size: 1.5rem;
          font-weight: 300;
          transition: color 0.2s ease;
          width: 100%;
      }
      &:hover {
          a {
            color: ${props => props.theme.primary};      
            cursor: pointer;
          }
      }
      }
  }
`;