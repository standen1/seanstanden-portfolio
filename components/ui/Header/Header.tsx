import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

import MenuToggle from '../MenuToggle/MenuToggle';


export default function Header(): JSX.Element {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={styles.Header}>
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
                <MenuToggle active={toggleMenu} onClick={() => setToggleMenu(!toggleMenu)} />
            </div>
        </Link>
    </header>
  )
}
