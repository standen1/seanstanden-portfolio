import { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface FullScreenWrapperProps {
  children: any;
  useBackground?: string;
}

export default function FullScreenWrapper({children, useBackground}: FullScreenWrapperProps) {
  const [ containerHeight, setContainerHeight ] = useState('100vh');

    const handleResize = () => {
        setContainerHeight(`${window.innerHeight}px`);
    }

    const background = useBackground ? useBackground : '#fff';

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <Div height={containerHeight} background={background}>
      <div className='innerContent'>
        {children}
      </div>
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
  background: ${props => props.background};
  height: ${props => props.height};
  .innerContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
  }
`;
