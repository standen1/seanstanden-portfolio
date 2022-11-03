import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Contact from './Contact/Contact';
//Import images
import Logo from '../../../public/logo/SStanden_Logo_2_White.png';
import LinkedIn from '../../../public/social-media/linkedin.png';
import GitHub from '../../../public/social-media/github.png';

export default function Footer() {
  return (
    <>
        <Contact />
        <SiteFooter data-testid="site-footer">
            <div className="footer-wrapper">
                <p>
                    {'\u00A9'}Sean Standen {new Date().getFullYear()}
                </p>
            </div>
        </SiteFooter>
    </>
  )
};

const SiteFooter = styled.footer`
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    padding: 10px 20px;
    z-index: 100;

    .footer-wrapper {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            display: block;
            text-align: center;
            font-size: 0.9em;
            font-weight: 300;
            letter-spacing: 2px;
            opacity: 0.8;
        }  
    }
`;
