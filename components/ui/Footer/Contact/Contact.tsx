import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import FullScreenImageOrVideo from '../../FullScreenImageOrVideo/FullScreenImageOrVideo';

//Import images
import LinkedIn from '../../../../public/social-media/linkedin.png';
import GitHub from '../../../../public/social-media/github.png';

export default function Contact() {
  return (
    <FullScreenImageOrVideo
        backgroundURL="/videos/nature-video-compressed.mp4"
        isVideo={true}
        poster="/background-images/nature-vid-still.png"
    >
        <Div>
            <div className='contact'>
                <h2>Contact</h2>
                <p>Get in touch with me via <a href="mailto:standen.sean@gmail.com">email</a> or through my freelancing site, <a href="https://webpunk.tech" target="blank">WebPunk.Tech</a>.  Also, connect with me on <a href="https://www.linkedin.com/in/sean-standen" target="blank">LinkedIn</a> or <a href="https://github.com/standen1" target="blank">GitHub</a>.</p>
            </div>
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
        </Div>
    </FullScreenImageOrVideo>
  );
};

const Div = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    color: #fff;
    

    .contact {
        max-width: 500px;
        padding: 20px;

        h2 {
            text-align: center;
        }

        p {
            margin: 35px auto;
        }
        
        a {
            color: ${props => props.theme.primary};
            transition: color 0.2s ease;
            &:hover {
                color: ${props => props.theme.secondary};
            }
        }
    }
    
    .social-wrapper {
        display: flex;
        justify-content: center;
        column-gap: 30px;
    }
`;