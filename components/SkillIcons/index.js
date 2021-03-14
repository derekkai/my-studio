import React from 'react'
import classNames from 'classnames';
import style from './SkillIcons.module.scss';
import { reactIconNameMap } from "../../constants";
import * as SimpleIcons from 'react-icons/si';

const SkillIcons = ({name, color, className, disableTips}) => {
    const customStyle = {color};
    const iconName = 'Si' + reactIconNameMap[name];
    if (SimpleIcons[iconName]) {
        const icon = React.createElement(SimpleIcons[iconName]);
        return <div style={color && customStyle}
                    className={
                        classNames(
                            style.container,
                            `icon-${name}`,
                            className && className,
                            disableTips && style.disableTips
                        )}
                    data-name={name}>{icon}</div>
    }
    return null;
}

export default SkillIcons;