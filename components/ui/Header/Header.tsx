import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import logo from '../../../public/logo/SStanden_Logo_Text_Color.png';
import NavigationWrapper from '../Navigation/NavigationWrapper';


export default function Header(): JSX.Element {

  return (
    <SiteHeader data-testid="site-header">
            <div className='headerInner'>
                <Link className='logo' href="/">
                        <Image 
                            src={logo} 
                            alt="Sean Standen | Web Developer"
                            width={250}
                            height={30}
                            
                        />
                    
                </Link>
                <NavigationWrapper />
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

  .headerInner {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
      width: 250px;
      height: 30px;
  }
`;
