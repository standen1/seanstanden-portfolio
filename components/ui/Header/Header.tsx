import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

import NavigationWrapper from '../Navigation/NavigationWrapper';


export default function Header(): JSX.Element {

  return (
    <header className={styles.Header} data-testid="site-header">
            <div className={styles.HeaderInner}>
                <Link href="/">
                    <div className={styles.Logo}>
                        <Image 
                            src="/logo/SStanden_Logo_With_Text.png" 
                            alt="Sean Standen | Web Developer"
                            layout="intrinsic"
                            width={500}
                            height={111}
                        />
                    </div>
                </Link>
                {/* <NavigationWrapper /> */}
            </div>
    </header>
  )
}
