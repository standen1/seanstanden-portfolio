import next from 'next';
import Link from 'next/link';
import styles from './NavMenuDesktop.module.scss';

export default function NavMenuDesktop() {
  return (
    <nav className={styles.NavMenuDesktop}>
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#skills-and-technologies">Skills And Technologies</Link>
        <Link href="/#portfolio">Portfolio</Link>
        <Link href="/#contact">Contact</Link>
    </nav>
  )
}
