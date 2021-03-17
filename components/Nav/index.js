import Image from 'next/image'
import {useRouter} from "next/router";
import classNames from 'classnames';
import Link from 'next/link'
import style from './Nav.module.scss'
import {navData} from "../../constants";

const Nav = ({title}) => {
    const {asPath} = useRouter();

    return <nav className={style.nav}>
        <div className={style.title}>{title}</div>
        <ul className={style['nav-items']}>
            {
                navData.map(el => (
                    <li className={classNames(asPath === el.path && style.active)}>
                        <Link href={el.path}>{el.page}</Link>
                    </li>))
            }
        </ul>
    </nav>
}

export default Nav;
