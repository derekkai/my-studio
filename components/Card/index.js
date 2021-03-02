import {useState} from 'react';
import classNames from 'classnames';
import style from './Card.module.scss';

const Card = ({children}) => {
    const [open, setOpen] = useState(false);

    const handleCardClick = () => {
        setOpen(true);
    }

    return (
        <div className={classNames(style.card, open && style.open)} onClick={handleCardClick}>
            {children}
        </div>
    )
}

export default Card;