import React from 'react';
import styled from 'styled-components';

export interface FullScreenWrapperProps {
    backgroundURL: string;
    isVideo?: boolean;
    isImage?: boolean;
}

export default function FullScreenWrapperWithBackground() {
  return (
    <Div>

    </Div>
  )
}

const Div = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
`;
