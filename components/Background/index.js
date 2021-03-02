import {useEffect, useState} from 'react';
import style from './Background.module.scss';

const Background = ({url}) => {
    const [move, setMove] = useState(0);
    const handler = () => {
        setMove(window.scrollY / 5);
    };
    useEffect(() => {
        window.addEventListener('scroll', handler);
    }, []);
    return <div
        className={style.bg}
        style={{
            backgroundImage: `url(${url})`,
            backgroundPositionY: `calc(40% - ${move}px)`,
        }}>
    </div>
}

export default Background