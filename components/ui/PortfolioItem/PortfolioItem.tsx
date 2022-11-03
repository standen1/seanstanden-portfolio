import React, { useState } from "react";
import styled from "styled-components";
import Image from 'next/image';
import PortfolioPopover from '../PortfolioPopover/PortfolioPopover';

interface portfolioItem {
    title: string;
    technologyStack: Array<string>;
    siteUrl: string;
    codeUrl?: string;
    featuredImg: string;
}

interface PortfolioItemProps {
    portfolioItem: portfolioItem;
}

export default function PortfolioItem ({portfolioItem}: PortfolioItemProps) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <Div backgroundImg={portfolioItem.featuredImg}  onClick={() => setIsActive(true)}>
                <div className="innerContent">
                    <h4>{portfolioItem.title}</h4>
                </div>
            </Div>
            {isActive ? <PortfolioPopover portfolioItem={portfolioItem} close={() => setIsActive(false)} /> : null}
        </>
    );
}

interface DivProps {
    backgroundImg: string;
}

const Div = styled.div<DivProps>`
    margin: 0;
    padding: 0;
    display: block;
    width: 300px;
    height: 200px;
    position: relative;
    background: url(${props => props.backgroundImg}) no-repeat;
    background-position: center;
    background-size: cover;


    .innerContent {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background: ${props => props.theme.primary};
        opacity: 0;
        transition: all 0.2s ease;
        color: #fff;

        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }
`;