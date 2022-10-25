import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

import MenuToggle from '../MenuToggle/MenuToggle';
import NavMenuMobile from '../NavMenuMobile/NavMenuMobile';
import NavMenuDesktop from '../NavMenuDesktop/NavMenuDesktop';
import Modal from '../Modal/Modal';


export default function Header(): JSX.Element {
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const closeNavBar = () => setNavBarOpen(false);

  return (
    <header className={styles.Header} data-testid="site-header">
        <Link href="/">
            <div className={styles.HeaderInner}>
                <div className={styles.Logo}>
                    <Image 
                        src="/logo/SStanden_Logo_With_Text.png" 
                        alt="Sean Standen | Web Developer"
                        layout="intrinsic"
                        width={500}
                        height={111}
                    />
                </div>
                {/* <MenuToggle toggle={() => setNavBarOpen(!navBarOpen)} isOpen={navBarOpen} /> */}
                {/* {<NavMenuDesktop />} */}
            </div>
        </Link>
        <NavMenuMobile isOpen={navBarOpen} closeNavBar={closeNavBar} />
        {navBarOpen && <Modal isOpen={navBarOpen} closeNavBar={closeNavBar} /> }
    </header>
  )
}
