import style from '../styles/portfolio.module.scss';
import Nav from "../components/Nav";

const portfolio = () => {
    return (
        <div className={style.wrapper}>
            <Nav title="Portfolio"/>
            <div className={style.container}>
                <div className={style.pc} />
                <div className={style.h51} />
                <div className={style.h52} />
            </div>
        </div>
    );
}
export default portfolio;
