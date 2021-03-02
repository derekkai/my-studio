import {useEffect, useState, useRef} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import SocialIcon from "../SocialIcon";
import classNames from 'classnames';
import JobCard from "../JobCard";
import style from './PersonalFrame.module.scss';

const job1 = {
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
        'React', 'Redux', 'Electron', 'Webpack', 'NodeDotJs', 'Java',
    ],
    current: false,
}

const job2 = {
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
        'React', 'Redux', 'VueDotJs', 'Webpack', 'Angular', 'Docker', 'Nginx', 'Electron', 'Sass',
    ],
    current: true,
}

const socials = [
    {
        name: 'Github',
        link: 'https://github.com/derekkai',
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/derek-lin-7a985a17a/',
    },
];

const socialLast = [
    {
        name: 'Medium',
        link: 'https://medium.com/me/stories/drafts',
    },
]

const PersonalFrame = () => {
    const [active, setActive] = useState(false);
    const frameEL = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!active && frameEL.current && (frameEL.current.offsetHeight - window.scrollY) < 300) {
                setActive(true);
            }
        });
    }, []);

    return (
        <div ref={frameEL} className={classNames(style.container, active && style.active)}>
            <div className={style.profile}>
                <div className={style.photo}/>
                <TransitionGroup className={style['social-icons']}>
                    {
                        active && socials.map(el =>
                            <CSSTransition timeout={1300} classNames={classNames('social-icon')}>
                                <div>
                                    <SocialIcon key={el.name} name={el.name} link={el.link}/>
                                </div>
                            </CSSTransition>,
                        )
                    }
                    {
                        active && socialLast.map(el =>
                            <CSSTransition timeout={3800} classNames={classNames('social-icon-last')}>
                                <div>
                                    <SocialIcon key={el.name} name={el.name} link={el.link}/>
                                </div>
                            </CSSTransition>,
                        )
                    }
                </TransitionGroup>
            </div>
            <div className={style.content}>
                <div className={style.title}>experience</div>
                <div className={style.block}>
                    <JobCard data={job1}/>
                    <JobCard data={job2}/>
                </div>
            </div>
            <div className={style.tips}>👏 to be continued</div>
        </div>
    )
}

export default PersonalFrame;
