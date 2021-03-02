import React from 'react'
import classNames from 'classnames';
import style from './SkillIcons.module.scss';
import * as SimpleIcons  from 'react-icons/si';

const SkillIcons = ({ name }) => {
    const iconName = 'Si' + name;
    if (SimpleIcons[iconName]) {
        const icon = React.createElement(SimpleIcons[iconName]);
        return <div className={classNames(style.container, `icon-${name}`)} data-name={name} >{icon}</div>
    }
    return null;
}

export default SkillIcons;