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
    const techStack = technologyStack.map((tech, index) => <li className='techItem' key={index}>{tech}</li>);
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
        display: block;
        width: 100%;
        max-width:400px;
        max-height: 500px;
        padding: 30px 20px;
        background: #fff;
        color: #000;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        h4 {
            text-align: center;
            font-size: 1.1em;
            width: 100%;
            padding-bottom: 20px;
            font-weight: 600;
        }

        h5 {
            text-align: left;
            font-weight: 600;
            font-size: 1em;
        }

        ul {
            padding: 0;
            margin: 0;
            text-align: left;
            font-weight: 300;
        }
        
        li.techItem {
            font-weight: 300;
        }
    }
`;
