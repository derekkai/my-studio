import Image from 'next/image'
import style from './Nav.module.scss'

const Nav = () => {

    return <nav className={style.nav}>
        <Image
            src="/name.png"
            alt="Picture of the author"
            width={133}
            height={59}
        />
    </nav>
}

export default Nav;
