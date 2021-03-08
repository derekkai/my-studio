import { useState, useEffect} from 'react';
import classNames from 'classnames';
import Nav from "../Nav";
import style from './TopPage.module.scss';
import sanityClient from "../../client";
import Background from "../Background";

const TopPage = ({image, active}) => {

    return <div className={style.container}>
        <Nav />
        <Background url={image.asset.url} />
        <div className={classNames(style.block, active && style.active) }>
            <div className={classNames(style['top-word'])}>
                <div>LET ME</div>
            </div>
            <div className={classNames(style['medium-words'])}>
                <div>THANKS FOR YOUR COMING</div>
            </div>
            <div className={classNames(style['bottom-word'])}>
                <div>INTRODUCE MYSELF</div>
            </div>
        </div>
    </div>
}

export default TopPage;
