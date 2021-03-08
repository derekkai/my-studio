import {useState} from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import style from './SkillPage.module.scss';
import LevelFrame from "../LevelFrame";

const skillListData = [
    {level: 4, data: ['React', 'Redux', 'JavaScript', 'Webpack', 'Next']},
    {level: 3, data: ['css/sass', 'Vue', 'Electron', 'Node', 'GraphQL', 'TypeScript', 'Java']},
    {level: 2, data: ['Docker', 'Nginx', 'Angular']},
];

const SkillPage = () => {
    const [open, setOpen] = useState(false);

    const handleGeneratorBtnClick = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <div className={style.container}>
            <div className={style['cloud-area']}/>
            <div className={style.block}>
                <svg className={style.title} width="300" height="100">
                    <text textAnchor="middle" x="55%" y="50%" >
                        my skill
                    </text>
                </svg>
                {
                    skillListData.map(strength => <div key={strength.level} className={style.list}>
                        {
                            strength.data.map(skill => <LevelFrame open={open} key={skill} level={strength.level}
                                                                   skillName={skill}/>)
                        }
                    </div>)
                }
            </div>
            <div className={style[`line-container`]}>
                <div/>
                <div/>
                <div/>
            </div>
            <div className={classNames(style.generator, open && style.active)} onClick={handleGeneratorBtnClick}>
                <Image className={style.generator} src='/generator.svg' height={100} width={100}/>
            </div>
        </div>
    )
};

export default SkillPage;

