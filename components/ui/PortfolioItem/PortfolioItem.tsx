import React from 'react';
import styled from 'styled-components';

interface PortfolioItemObject {
    title: string;
    techStack: Array<string>;
    siteUrl: string;
    codeUrl: string;
    background: string;
}

interface PortfolioItemProps {
    portfolioItem: PortfolioItemObject;
}

export default function PortfolioItem ({portfolioItem}: PortfolioItemProps) {
    return (
        <>
            <Div background={portfolioItem.background}>
                <div className='innerContent'>
                    <h3>{portfolioItem.title}</h3>
                </div>
            </Div>
        </>
    );
}

interface DivProps {
    background: string;
}

const Div = styled.div<DivProps>`
    position: relative;
    margin: 0;
    padding: 0;
    width: 300px;
    height: 200px;
    background: ${props => `url(${props.background}) no-repeat center`};
    background-size: cover;

    .innerContent {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.primary};
        color: #fff;
        opacity: 0;
    }
`;