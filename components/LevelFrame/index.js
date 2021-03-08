import style from './LevelFrame.module.scss';
import classNames from 'classnames';

const LevelFrame = ({open, level, skillName = 2}) => {
    return (
        <div className={classNames(style.container,open && style.open, style[`level${level}`])}>
            <div className={style.word}>
                {skillName}
            </div>
        </div>
    )
};

export default LevelFrame;

