import React, { useState } from "react";
import styled from "styled-components";
import { 
    SkillsObject
} from '../../../../data/skills';

interface SkillsListProps {
    skillObject: SkillsObject;
}

export default function SkillsList ({skillObject}: SkillsListProps) {

    const skills = skillObject.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
    ));

    return (
        <Div>
            <h3>{ skillObject.name }</h3>
            <ul>
                { skills }
            </ul>
        </Div>
    );
}

const Div = styled.div`
    width: 100%;
    max-width: 350px;

    h3 {
        font-weight: 500;
        margin-bottom: 10px;
    }

    li {
        line-height: 25px;
        font-weight: 300;
    }
`;