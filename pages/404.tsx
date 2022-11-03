import styled from "styled-components";

export default function Custom404() {
    return (
        <Div>
           <h2>Oops.</h2> 
           <p>Looks like the page you requested does not exist.</p>
        </Div>
    );
}

const Div = styled.div`
    padding: 100px 20px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    
    color: #000;
    
    h2 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 50px;
    }

    p {
        font-weight: 400;
        padding-bottom: 20px;
        text-align: center;
    }
`;