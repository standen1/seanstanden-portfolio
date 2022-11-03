import styled from "styled-components";

export default function About(): JSX.Element {
    return (
        <Div>
           <h2>About Me</h2> 
           <p>I was born in Portland, Oregon and moved to San Clemente, California when I was very young. I grew up bodyboarding, surfing, swimming, and skateboarding. I am an active musician. I currently have several music projects, most of which have websites built by me that I have included on here as part of my portfolio. I now live in San Diego, California with my wife and daughter. We spend a lot of time hiking, biking, picnicking, camping, listening to records, and going to the beach.</p>
           <p>I started getting into programming in 2016 while attending school at San Diego City College. I took courses in Java, C++, Data Structures, and Algorithms. Then, I began teaching myself web development in 2018. I spent a lot of time in HTML, CSS, vanilla JavaScript, and JQuery over my first year but have since focused heavily on the React ecosystem and frameworks that are built on top of it, such as Next, Frontity, and Gatsby.  I have more recently been focusing on learning full stack development, software engineering, and DevOps.</p>
        </Div>
    );
}

const Div = styled.div`
    padding: 100px 20px 0;
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
    }
`;