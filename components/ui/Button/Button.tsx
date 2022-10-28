import { filterProps } from 'framer-motion';
import { Props } from 'next/script';
import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    background: "primary" | "secondary";
    onClick: Function;
    linkUrl: string;
    children: any;
}

export default function Button({background, onClick, children, linkUrl}: ButtonProps) {
  // const handleClick = (): void => {
  //   onClick();
  //   window.open(linkUrl, '_blank');
  // }
  return (
    <ButtonLink background={background} href={linkUrl} target="blank" onClick={onClick}>{children}</ButtonLink>
  )
}

interface StyledButtonProps {
    background: string;
    onClick: any;
    href: string;
}

const ButtonLink = styled.a<StyledButtonProps>`
    display: block;
    background: ${props => props.background === 'primary' ? props.theme.primary : props.theme.secondary};
    color: #fff;
    width: 175px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
      background: ${props => props.background === 'primary' ? props.theme.secondary : props.theme.primary};
      cursor: pointer;
    }
`;
