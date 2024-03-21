import styled from "styled-components";

export default function About(): JSX.Element {
    return (
        <Div>
           <h2>About Me</h2> 
           <p>I was born in Portland, Oregon and moved to San Clemente, California when I was very young. I grew up bodyboarding, surfing, swimming, and skateboarding. I am an active musician. I currently have several music projects, most of which have websites built by me that I have included on here as part of my portfolio. I now live in San Diego, California with my wife and two daughters. We spend a lot of time hiking, biking, picnicking, camping, listening to records, and going to the beach.</p>
           <p>I started getting into programming in 2016 while attending school at San Diego City College. I took courses in Java, C++, Data Structures, and Algorithms. Then, I began teaching myself web development in 2018. I spent a lot of time in HTML, CSS, JavaScript, and PHP over my first year, but have since focused heavily on modern JavaScript frameworks, such as React, NextJS, Express, and Vue.  I also have experience with WordPress, Shopify, Webflow, and Spring Boot.  I have more recently been focusing on learning full stack software engineering and DevOps.  I am currently pursuing my Bachelor's Degree in Computer Science with plans to focus on AI and Machine Learning.</p>
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