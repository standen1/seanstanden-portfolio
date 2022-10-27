import next from 'next';
import Link from 'next/link';
import styled from 'styled-components';

export default function NavMenuDesktop() {
  return (
    <Nav>
        <Link href="/#about">About</Link>
        <Link href="/#skills-and-technologies">Skills And Technologies</Link>
        <Link href="/#portfolio">Portfolio</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/resume">Resume</Link>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  a {
      color: #000;
      transition: color 0.2s ease;
      text-decoration: none;

      &:hover {
          color: ${props => props.theme.primary};
      }
  }
`;
