import React, { useState } from "react";
import styled from "styled-components";
import SkillsList from "./SkillsList/SkillsList";
import { 
    skills
} from '../../../data/skills';

export default function Skills() {

    const skillsList = skills.map(skill => (
        <SkillsList key={skill.id} skillObject={skill} />
    ));

    return (
        <Div>
            <h2>Skills</h2>
            <div className='flexWrap'>
                { skillsList }
            </div>
        </Div>
    );
}

const Div = styled.div`
    padding: 100px 25px;

h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 50px;
}

/* .flexWrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    gap: 20px;
} */

.flexWrap {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    gap: 20px;
    justify-items: space-between;
}
`;