import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

//Import images
import Logo from '../../../public/logo/SStanden_Logo_2_White.png';
import LinkedIn from '../../../public/social-media/linkedin.png';
import GitHub from '../../../public/social-media/github.png';

export default function Footer() {
  return (
    <SiteFooter data-testid="site-footer">
        <div className="footer-wrapper">
            <div className='social-wrapper'>
                <a className='social-image-wrapper' href="https://www.linkedin.com/in/sean-standen" target="blank">
                    <Image
                        src={LinkedIn}
                        alt="LinkedIn"
                        width={32}
                        height={32}
                    />
                </a>
                <a className='social-image-wrapper' href="https://github.com/standen1" target="blank">
                    <Image
                        src={GitHub}
                        alt="GitHub"
                        width={32}
                        height={32}
                    />
                </a>
            </div>
            <p>
                {'\u00A9'}Sean Standen {new Date().getFullYear()}
            </p>
        </div>
    </SiteFooter>
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
        justify-content: space-between;
        align-items: center;

        .social-wrapper {
            display: flex;
            justify-content: center;
            column-gap: 30px;
            
        }

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
