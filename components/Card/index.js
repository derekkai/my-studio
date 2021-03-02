import {useState} from 'react';
import {FaReact} from 'react-icons/fa';
import classNames from 'classnames';
import style from './Card.module.scss';

const Card = ({children}) => {
    const [open, setOpen] = useState(false);

    const handleCardClick = () => {
        setOpen(true);
    }

    return (
        <div className={classNames(style.card, open && style.open)} onClick={handleCardClick}>
            <div className={style.front}>
                {children}
            </div>
            <div className={style.back}>
                <FaReact />
            </div>
        </div>
    )
}

export default Card;