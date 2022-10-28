import React from 'react';
import styled from 'styled-components';

interface CloseIconProps {
    onClick: any;
    color: string;
}

export default function CloseIcon({onClick, color}: CloseIconProps) {
  return (
    <Button onClick={onClick}>
    <svg width="23" height="23" viewBox="0 0 23 23">
    <path
      d="M 3 16.5 L 17 2.5"
      strokeWidth="3"
      strokeLinecap="round"
      stroke={color}
    />
    <path
      d="M 3 2.5 L 17 16.346"
      strokeWidth="3"
      strokeLinecap="round"
      stroke={color}
    />
  </svg>
</Button>
  )
}

const Button = styled.div`
    outline: none;
    border: none;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    top: 20px;
    right: 20px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
`;