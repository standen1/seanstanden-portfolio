import React from 'react';
import styled from 'styled-components';

import Modal from "../Modal/Modal";
import Button from '../Button/Button';
import CloseIcon from '../CloseIcon/CloseIcon';

interface portfolioItem {
    title: string;
    technologyStack: Array<string>;
    siteUrl: string;
    codeUrl?: string;
}

export interface PortfolioPopoverProps {
    portfolioItem: portfolioItem
    close: any;
}

export default function PortfolioPopover({portfolioItem, close}: PortfolioPopoverProps) {

    const techStack = portfolioItem.technologyStack.map((tech, index) => <li className='techItem' key={index}>{tech}</li>);

    const gitHubButton = portfolioItem.codeUrl ? <Button background='secondary' onClick={() => 'clicked.'} linkUrl={portfolioItem.codeUrl}>Source Code</Button> : null;

  return (
    <>
        <Modal close={close} />
        <Div>
            <div className="popover">
                <CloseIcon onClick={close} color="#000" />
                <div className='innerContent'>
                    <h4>{portfolioItem.title}</h4>
                    <h5>Technology Stack</h5>
                    <ul>
                        { techStack }
                    </ul>
                    <div className='buttonWrapper'>
                        <Button background='primary' onClick={() => console.log('Youclicked')} linkUrl={portfolioItem.siteUrl}>Visit</Button>
                        {gitHubButton}
                    </div>
                </div>
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

    .popover {
        position: relative;
        display: block;
        width: 100%;
        max-width:400px;
        max-height: 500px;
        padding: 30px 20px;
        background: #fff;
        color: #000;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .innerContent {
            display: block;
            max-width: 250px;
            margin: auto;
        }

        h4 {
            text-align: center;
            font-size: 1.2em;
            width: 100%;
            padding-bottom: 20px;
            font-weight: 600;
        }

        h5 {
            text-align: left;
            font-weight: 600;
            font-size: 1.1em;
        }

        .buttonWrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-top: 25px
        }

        ul {
            padding: 0;
            margin: 0;
            text-align: left;
            font-weight: 300;
        }
        
        li.techItem {
            font-weight: 300;
            font-size: 1.1em;
        }
    }
`;
