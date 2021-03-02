import React from 'react';
import classNames from 'classnames';
import style from './SocialIcon.module.scss';
import * as fontAwesome from 'react-icons/fa';

const SocialIcon = ({name, link}) => {
    const iconName = 'Fa' + name;
    if (fontAwesome[iconName]) {
        const icon = React.createElement(fontAwesome[iconName])
        return <a href={link} className={classNames(style.container, `icon-${name}`)} data-name={name}>{icon}</a>
    }
    return null;
}

export default SocialIcon;
