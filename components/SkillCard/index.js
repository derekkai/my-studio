import style from './SkillCard.module.scss';
import SkillIcons from "../SkillIcons";
import classNames from 'classnames';

const SkillCard = ({name, level}) => {
    return (
        <div
            className={classNames(style.container, `skill-card-${name}`)}
            style={{backgroundImage: `url(/${level}.png)`}}
            data-name={name}
        >
            <SkillIcons name={name} className={style.icon} disableTips />
        </div>
    );
};

export default SkillCard;
