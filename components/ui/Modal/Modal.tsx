import React, { EventHandler } from 'react';
import { motion } from 'framer-motion';
import { overlayAnimation } from '../../../animations/NavBar';
import styled from 'styled-components';

export interface ModalProps {
    close: any;
}

export default function Modal({close}: ModalProps) {
  return (
    <Div as={motion.div} variants={overlayAnimation} onClick={close} />
  )
}

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;
