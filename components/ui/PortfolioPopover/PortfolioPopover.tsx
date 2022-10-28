import React from 'react';
import styled from 'styled-components';

import Modal from "../Modal/Modal";
import Button from '../Button/Button';

export interface PortfolioPopoverProps {
    title: string;
    technologyStack: Array<string>;
    siteUrl: string;
    codeUrl?: string;
}

export default function PortfolioPopover({title, technologyStack, siteUrl, codeUrl}: PortfolioPopoverProps) {
    const techStack = technologyStack.map((tech, index) => <li key={index}>{tech}</li>);
  return (
    <>
        {/* <Modal /> */}
        <Div>
            <div className='innerContent'>
                <h4>{title}</h4>
                <h5>Technology Stack</h5>
                <ul>
                    { techStack }
                </ul>

                <Button background='primary' onClick={() => console.log('Youclicked')} linkUrl="https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html" >Visit</Button>
                <Button background='secondary' onClick={() => 'clicked.'} linkUrl="https://stackoverflow.com/questions/47616355/foreach-in-react-jsx-does-not-output-any-html">Source Code</Button>
            </div>
        </Div>
    </>
  )
}

const Div = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .innerContent {

    }
`;
