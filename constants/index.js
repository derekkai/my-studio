export const experiences = [
    {
        icon: 'work1.png',
        companyName: 'Atop Technologies',
        jobName: 'Full-Stack Developer',
        experience: 1.5,
        content: [
            '1.負責維護和開發設備組態配置介面軟體。',
            '2.負責規劃和開發中央網路控管軟體全端。',
            '3.UI/UX設計規劃 (material design)。',
        ],
        skill: [
            'React', 'Redux', 'Electron', 'Webpack', 'Node', 'Java',
        ],
        current: false,
    },
    {
        icon: 'work2.png',
        companyName: '耀點國際有限公司',
        jobName: 'Front-end Developer',
        experience: 2,
        content: [
            '1.前端開發，規劃系統架構、CI/CD。',
            '2.線上產品維護、重構、效能提升。',
            '3.桌面應用程式開發。',
        ],
        skill: [
            'React', 'Redux', 'Vue', 'Webpack', 'Angular', 'Docker', 'Nginx', 'Electron', 'Sass',
        ],
        current: true,
    }
];

export const socials = [
    {
        name: 'Github',
        link: 'https://github.com/derekkai',
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/derek-lin-7a985a17a/',
    },
    {
        name: 'Medium',
        link: 'https://medium.com/me/stories/drafts',
    },
];

export const reactIconNameMap = {
    'React': 'React',
    'Redux': 'Redux',
    'Vue': 'VueDotJs',
    'Electron': 'Electron',
    'Webpack': 'Webpack',
    'Node': 'NodeDotJs',
    'Java': 'Java',
    'Angular': 'Angular',
    'Docker': 'Docker',
    'Nginx': 'Nginx',
    'Sass': 'Sass',
    'GraphQL': 'Graphql',
    'JavaScript': 'Javascript',
    'TypeScript': 'Typescript',
    'Next': 'NextDotJs',
    'Jest': 'Jest',
};

export const mySkillListData = [
    {level: 3, data: ['React', 'Redux', 'JavaScript', 'Webpack', 'Next', 'Sass']},
    {level: 2, data: ['Vue', 'Electron', 'Node', 'GraphQL', 'TypeScript', 'Java']},
    {level: 1, data: ['Jest', 'Docker', 'Nginx', 'Angular']},
];

export const navData = [
    {
        page: 'home',
        path: '/',
    },
    {
        page: 'portfolio',
        path: '/portfolio'
    }
];
