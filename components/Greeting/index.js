import {useState, useEffect} from 'react';
import classNames from 'classnames';
import style from './Greeting.module.scss';

const LINE1_TEMPLATE = "Hi I'm Derel_k, "; // 15 words
const LINE2_TEMPLATE2 = "A Front-End Developer! ❤"; // 23 words

const LINE1_DELAY_DATA = [100, 100, 500, 100, 100, 100, 500, 100, 100, 100, 100, 100, 500, 100, 100];
const LINE1_DELAY_DATA2 = [500, 800, 100, 100, 100, 100, 100, 200, 100, 100, 100, 800, 100, 100, 100, 100, 100, 100, 100, 100, 100, 500, 600, 600];

const delay = ms => new Promise(res => setTimeout(res, ms))

const Greeting = ({ onEnter, enter }) => {
    const [currentLine, setCurrent] = useState(1);
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');

    const type = async () => {

        for (let i = 0; i < LINE1_TEMPLATE.length; i++) {
            await delay(LINE1_DELAY_DATA[i]);
            if (i === 12) {
                setLine1(prevState => prevState.substring(0, prevState.length - 1))
            } else {
                setLine1(prevState => prevState + LINE1_TEMPLATE.charAt(i))
            }
        }

        await delay(800);
        setCurrent(2);
        for (let i = 0; i < LINE2_TEMPLATE2.length; i++) {
            await delay(LINE1_DELAY_DATA2[i]);
            setLine2(prevState => prevState + LINE2_TEMPLATE2.charAt(i))
        }

        await delay(1000);
        onEnter();
    }

    useEffect(() => {
        type();
    }, []);

    return <div className={style.container}>
        <div className={style.curtain}>
            <div className={classNames(style.top, enter && style.shrink)}>
                <div className={classNames(style.divider, enter && style.extend)} />
            </div>
            <div className={classNames(enter && style.shrink)}>
                <div className={classNames(style.divider, enter && style.extend)} />
            </div>
        </div>
        <span className={classNames(style.word, enter && style.hide)}>
            {line1}
            {currentLine === 2 && <br /> }
            {line2}
            <span className={style.cursor}/>
        </span>

    </div>
}

export default Greeting;