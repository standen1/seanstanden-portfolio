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
            {portfolioItems}
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
`;