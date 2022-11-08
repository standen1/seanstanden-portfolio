type subjectSkills = Array<string>;

export interface SkillsObject {
    id: number;
    name: string;
    skills: subjectSkills;
}

export type SkillsArray = Array<SkillsObject>;

export const skills: SkillsArray = [
    {
        id: 1,
        name: 'Code',
        skills: [
            "HTML",
            "CSS",
            "SCSS",
            "Bootstrap",
            "Material UI",
            "JavaScript/TypeScript",
            "Node/NPM",
            "Express",
            "React",
            "Next",
            "JQuery",
            "SEO",
            "Accessibility",
            "Optimization"
        ]
    },
    {
        id: 2,
        name: 'UI/UX',
        skills: [
            "Research",
            "User Stories",
            "Accessible Design Practices",
            "Wireframing",
            "Mockups",
            "Prototyping",
            "Adobe XD",
            "Figma"
        ]
    },
    {
        id: 3,
        name: 'DevOps',
        skills: [
            "CI/CD Pipelines",
            "Git/GitHub",
            "GitHub Actions",
            "Agile Methodology",
            "Cloud Hosting Solutions (Vercel, AWS, Azure, IBM, Digital Ocean)",
            "Cloud Functions (Azure, Vercel, IBM)",
            "Containerization (Docker, VSCode DevContainers)"
        ]
    }
]