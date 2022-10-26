import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './FullScreenImageOrVideo.module.scss';

export interface FullScreenImageOrVideoProps {
    backgroundURL: string;
    isVideo?: boolean;
    poster?: string;
    alt?: string;
    children: any;
}

export default function FullScreenImageOrVideo({backgroundURL, isVideo = false, poster, alt = "Sean Standen | Web Developer", children}: FullScreenImageOrVideoProps): JSX.Element {

    const background = () => {
        if (isVideo) {
            return (
                <div className={styles.videoWrapper}>
                    <video width="100%" height="100%" preload="auto" autoPlay muted loop poster={poster} id="bgvid">
                        <source src={backgroundURL} type="video/mp4" />
                    </video>
                </div>
            );
        } else {
            return (
                <div className={styles.imageWrapper}>
                    <Image 
                        src={backgroundURL}
                        alt={alt}
                        layout="fill"
                        objectFit='cover'
                    />
                </div>
            );
        }
    }

  return (
    <div className={styles.FullScreenImageOrVideo}>
        { background() }
        <div className={styles.innerContent}>
            { children }
        </div>
    </div>
  )
}