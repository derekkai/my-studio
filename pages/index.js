import {useState} from 'react';
import sanityClient from "../client";
import Greeting from "../components/Greeting";
import ProfilePage from "../components/ProfilePage";
import {CSSTransition} from 'react-transition-group';
import TopPage from "../components/TopPage";
import SkillList from "../components/SkillList";
import style from '../styles/Home.module.css';
import Nav from "../components/Nav";

const Home = ({image}) => {
    const [enter, setEnter] = useState(false);
    const [TopFrameActive, setTopFrameActive] = useState(false);

    const enterHandle = () => {
        setEnter(true);
    }

    const handleGreetingExited = () => {
        document.documentElement.style.overflow = 'auto';
        setTopFrameActive(true);
    }

    return (
        <div className={style.container}>
            <CSSTransition
                in={!enter}
                timeout={2000}
                unmountOnExit
                onExited={handleGreetingExited}
            >
                <Greeting onEnter={enterHandle} enter={enter}/>
            </CSSTransition>
            <Nav title="Derek's Website"/>
            <TopPage image={image} active={TopFrameActive}/>
            <ProfilePage />
            <SkillList />
        </div>
    )
}

export const getServerSideProps = async () => {

    const query = `*[_type == "home"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`;

    const result = await sanityClient.fetch(query).then(res => res[0])

    return {
        props: {
            image: result.mainImage,
        },
    }
}

export default Home;