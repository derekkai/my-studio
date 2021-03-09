import Image from 'next/image'
import style from './Nav.module.scss'

const Nav = () => {

    return <nav className={style.nav}>
        <ul className={style['nav-items']}>
            <li><a href="#profile">profile</a></li>
            <li><a href="#skill">skill</a></li>
        </ul>

    </nav>
}

export default Nav;
