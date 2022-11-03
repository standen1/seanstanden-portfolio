import styled from "styled-components";
import FullScreenImageOrVideo from "../FullScreenImageOrVideo/FullScreenImageOrVideo";

export default function Intro(): JSX.Element {
    return (
        <FullScreenImageOrVideo
          backgroundURL="/videos/record-video-compressed.mp4"
          isVideo={true}
          poster="/background-images/record-vid-still.png"
        >
            <Div>
            <h2>Welcome</h2>
            <p>I’m Sean Standen, a Web Developer from San Diego, California who specializes in building websites and web applications using modern JavaScript frameworks.</p>
            </Div>
        </FullScreenImageOrVideo>
    );
}

const Div = styled.div`
    color: #fff;
    padding: 0 20px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    
    h2 {
        font-size: 3em;
        padding-bottom: 15px;
    }

    p {
        font-size: 1.7em;
        max-width: 800px;
    }
`;