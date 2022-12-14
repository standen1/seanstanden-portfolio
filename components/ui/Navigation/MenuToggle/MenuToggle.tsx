import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#000"
    strokeLinecap="round"
    {...props}
  />
);

export interface MenuToggleProps {
    toggle: any;
    isOpen: boolean;
}

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <Button data-testid="menu-toggle" onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { 
              d: "M 2 2.5 L 20 2.5",
              stroke: "#000"
          
            },
            open: {
              d: "M 3 16.5 L 17 2.5",
              stroke: "#fff"
            }
          }}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { 
              d: "M 2 16.346 L 20 16.346",
              stroke: "#000"
            },
            open: { 
              d: "M 3 2.5 L 17 16.346",
              stroke: "#fff"
            }
          }}
        />
      </svg>
    </Button>
  )
}

const Button = styled.button`
  outline: none;
    border: none;
    cursor: pointer;
    position: fixed;
    z-index: 100;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: transparent;
`;