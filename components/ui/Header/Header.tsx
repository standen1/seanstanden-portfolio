import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import NavigationWrapper from '../Navigation/NavigationWrapper';


export default function Header(): JSX.Element {

  return (
    <SiteHeader data-testid="site-header">
            <div className='header-inner'>
                <Link href="/">
                    <div className='logo'>
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
    </SiteHeader>
  )
}

const SiteHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  margin: 0;
  height: 60px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  padding: 0 20px;
  border-bottom: 1px solid ${props => props.theme.black};
  z-index: 100;

  .header-inner {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
      width: 200px;
      height: 40px;
  }
`;
