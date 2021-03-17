import {useEffect, useState, useRef} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {experiences, socials} from '../../constants';
import SocialIcon from "../SocialIcon";
import classNames from 'classnames';
import JobCard from "../JobCard";
import style from './ProfilePage.module.scss';

const ProfilePage = () => {
    const [active, setActive] = useState(false);
    const frameEL = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!active && frameEL.current && (document.documentElement.offsetHeight / window.scrollY) < 5)  {
                setActive(true);
            }
        });
    }, []);

    return (
        <div id="profile" ref={frameEL} className={classNames(style.container, active && style.active)}>
            <div className={style.profile}>
                <div className={style.photo}/>
                <TransitionGroup className={style['social-icons']}>
                    {
                        active && socials.filter((_, index) => index !== socials.length - 1).map(el =>
                            <CSSTransition timeout={1300} classNames={classNames('social-icon')}>
                                <div>
                                    <SocialIcon key={el.name} name={el.name} link={el.link}/>
                                </div>
                            </CSSTransition>,
                        )
                    }
                    {
                        active && socials.filter((_, index) => index === socials.length - 1).map(el =>
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
                    {
                        experiences.map(experience => (
                            <JobCard data={experience}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
