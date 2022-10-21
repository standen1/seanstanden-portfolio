import React, { EventHandler } from 'react';
import { motion } from 'framer-motion';
import { overlayAnimation } from '../../../animations/NavBar';
import styles from './Modal.module.scss';

export interface ModalProps {
    isOpen: boolean;
    closeNavBar: any;
}

export default function Modal({isOpen, closeNavBar}: ModalProps) {
  return (
    <motion.div className={styles.Modal} variants={overlayAnimation} onClick={closeNavBar} />
  )
}
