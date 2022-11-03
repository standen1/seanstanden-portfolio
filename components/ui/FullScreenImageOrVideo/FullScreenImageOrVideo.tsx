import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

export interface FullScreenImageOrVideoProps {
    backgroundURL: string;
    isVideo?: boolean;
    poster?: string;
    alt?: string;
    children: any;
}

type screenHeight = number | undefined;

export default function FullScreenImageOrVideo({backgroundURL, isVideo = false, poster, alt = "Sean Standen | Web Developer", children}: FullScreenImageOrVideoProps): JSX.Element {
    const [ containerHeight, setContainerHeight ] = useState('100vh');

    const handleResize = () => {
        setContainerHeight(`${window.innerHeight}px`);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    const background = () => {
        if (isVideo) {
            return (
                <div className='videoWrapper'>
                    <video width="100%" height="100%" preload="auto" autoPlay muted loop poster={poster} id="bgvid">
                        <source src={backgroundURL} type="video/mp4" />
                    </video>
                </div>
            );
        } else {
            return (
                <div className='imageWrapper'>
                    <Image 
                        src={backgroundURL}
                        alt={alt}
                        fill
                        
                    />
                </div>
            );
        }
    }

  return (
    <FullScreenDiv height={containerHeight} >
        { background() }
        <div className='innerContent'>
            { children }
        </div>
    </FullScreenDiv>
  )
}

interface FullScreenDivProps {
    height: string;
}

const FullScreenDiv = styled.div<FullScreenDivProps>`
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;

    .videoWrapper {
        video {
            object-fit: cover;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
        }
    }

    .innerContent {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    }
`;