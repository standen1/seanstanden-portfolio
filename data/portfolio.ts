export interface portfolioItem {
    id: number;
    title: string;
    technologyStack: Array<string>;
    siteUrl: string;
    codeUrl?: string;
    featuredImg: string;
}

export type portfolioItemsArray = Array<portfolioItem>;

export const portfolio = [
    {
        id: 1,
        title: "SeanStanden.Dev",
        technologyStack: ['Next JS', 'React', 'Styled Components', 'Framer Motion', 'GitHub Actions', 'Vercel'],
        siteUrl: 'https://seanstanden.dev',
        codeUrl: 'https://github.com/standen1/seanstanden-portfolio',
        featuredImg: '/background-images/record-vid-still.png'
    },
    {
        id: 2,
        title: "WebPunk.Tech",
        technologyStack: ['Next JS', 'React', 'Styled Components', 'Framer Motion', 'Vercel', 'WordPress (Headless CMS)'],
        siteUrl: 'https://webpunk.tech',
        codeUrl: 'https://github.com/standen1/webpunk',
        featuredImg: '/portfolio/webpunk.jpg'
    },
    {
        id: 3,
        title: "Pressure Sensitive",
        technologyStack: ['Next JS', 'React', 'Styled Components', 'React Transition Group', 'Vercel'],
        siteUrl: 'https://pressuresensitiveband.com',
        codeUrl: 'https://github.com/standen1/pressuresensitiveband2',
        featuredImg: '/portfolio/pressure-sensitive.jpeg'
    },
    {
        id: 4,
        title: "Disco Death Bots",
        technologyStack: ['Frontity', 'React', 'Styled Components', 'React Animated Background', 'WordPress (Headless CMS)'],
        siteUrl: 'https://discodeathbots.com/',
        codeUrl: 'https://github.com/standen1/discodeathbots',
        featuredImg: '/portfolio/disco-death-bots.jpeg'
    },
    {
        id: 5,
        title: "WebTech (UI Experiments)",
        technologyStack: ["React", "Framer Motion", "GitHub Pages"],
        siteUrl: 'https://standen1.github.io/webtech/',
        codeUrl: 'https://github.com/standen1/webtech',
        featuredImg: '/portfolio/webtech.jpeg'
    }
];

//Reference blank item
// {
//     id: 1,
//     title: "",
//     technologyStack: [],
//     siteUrl: '',
//     codeUrl: '',
//     featuredImg: ''
// }