import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

//Import images
import Logo from '../../../public/logo/SStanden_Logo_2_White.png';
import LinkedIn from '../../../public/social-media/linkedin.png';
import GitHub from '../../../public/social-media/github.png';

export default function Footer() {
  return (
    <footer className={styles.Footer} data-testid="site-footer">
        <div className={styles.Wrapper}>
            <div className='social-wrapper'>
                <Link href="/">
                    <a className='social-image-wrapper'>
                        <Image 
                            src={Logo}
                            alt="Sean Standen | Web Developer"
                            width={19.3}
                            height={32}
                        />
                    </a>
                </Link>
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
    </footer>
  )
};
