import React from 'react';
import styles from './FullScreenWrapper.module.scss';

export interface FullScreenWrapperProps {
    backgroundURL: string;
    isVideo?: boolean;
    isImage?: boolean;
}

export default function FullScreenWrapperWithBackground() {
  return (
    <div className={styles.FullScreenWrapper}>

    </div>
  )
}
