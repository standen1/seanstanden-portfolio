import styled from "styled-components";

export default function ComingSoon(): JSX.Element {
    return (
        <Div>
           <h1>Coming Soon</h1> 
        </Div>
    );
}

const Div = styled.div`
    color: #fff;
    
    h1 {
        font-size: 2em;
    }
`;