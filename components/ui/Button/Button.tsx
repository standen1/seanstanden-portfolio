import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    background: string;
    onClick: Function;
    children: any;
}

export default function Button({background, onClick, children}: ButtonProps) {
  return (
    <Button background={background} onClick={onClick}>{children}</Button>
  )
}

interface StyledButtonProps {
    background: string;
}

const StyledButton = styled.button<StyledButtonProps>`
    background: ${props => props.background};
    color: #fff;
`;
