import { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface FullScreenWrapperProps {
  children: any;
  background?: string;
}

export default function FullScreenWrapper({children, background}: FullScreenWrapperProps) {
  const [ containerHeight, setContainerHeight ] = useState('100vh');

    const handleResize = () => {
        setContainerHeight(`${window.innerHeight}px`);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <Div height={containerHeight} background={background}>

    </Div>
  )
}

interface FullScreenDivProps {
  height: string;
  background: string;
}

const Div = styled.div<FullScreenDivProps>`
  display: block;
  width: 100%;
  background = ${props => props.background};
  height: ${props => props.height};
`;
