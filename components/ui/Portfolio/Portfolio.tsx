import React from 'react';
import styled from 'styled-components';

import PortfolioItem from './PortfolioItem/PortfolioItem';
import { portfolio } from '../../../data/portfolio';

export default function Portfolio () {
    const portfolioItems = portfolio.map(item => (
        <PortfolioItem portfolioItem={item} key={item.id} />
    ));
    return (
        <Div>
            <h2>Portfolio</h2>
            <div className='flexWrap'>
                {portfolioItems}
            </div>
        </Div>
    );
};

const Div = styled.div`
    padding: 100px 25px;

    h2 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 50px;
    }
    
    .flexWrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        justify-content: center;
    }
`;