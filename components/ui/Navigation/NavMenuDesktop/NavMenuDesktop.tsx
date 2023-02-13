import next from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  navMenuAnimation,
  desktopNavLoadAnimation,
  desktopNavLinkAnimation
} from '../../../../animations/NavBar';

export default function NavMenuDesktop() {
  return (
    <Nav >
        <motion.ul variants={navMenuAnimation}>
          <motion.li variants={desktopNavLinkAnimation}><Link href="/">Home</Link></motion.li>
          <motion.li variants={desktopNavLinkAnimation}><Link href="/#about">About</Link></motion.li>
          <motion.li variants={desktopNavLinkAnimation}><Link href="/#skills">Skills</Link></motion.li>
          <motion.li variants={desktopNavLinkAnimation}><Link href="/#portfolio">Portfolio</Link></motion.li>
          <motion.li variants={desktopNavLinkAnimation}><Link href="/#contact">Contact</Link></motion.li>
          <motion.li variants={desktopNavLinkAnimation}><Link href="/resume">Resume</Link></motion.li>
        </motion.ul>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  ul {
    list-style-type: none;
    display: flex;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  a {
      color: #000;
      transition: color 0.2s ease;
      text-decoration: none;

      &:hover {
          color: ${props => props.theme.primary};
      }
  }
`;
