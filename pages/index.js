import {useState, useEffect} from 'react';
import sanityClient from "../client";
import Greeting from "../components/Greeting";
import {CSSTransition} from 'react-transition-group';
import TopPage from "../components/TopPage";
import SkillPage from "../components/SkillPage";
import PersonalPage from "../components/PersonalPage";

const Home = ({image}) => {
    const [enter, setEnter] = useState(false);
    const [TopFrameActive, setTopFrameActive] = useState(false);

    const enterHandle = () => {
        setEnter(true);
    }

    const handleGreetingExited = () => {
        document.documentElement.style.overflowY = 'auto';
        setTopFrameActive(true);
    }

    return (
        <div>
            <CSSTransition
                in={!enter}
                timeout={2000}
                unmountOnExit
                onExited={handleGreetingExited}
            >
                <Greeting onEnter={enterHandle} enter={enter}/>
            </CSSTransition>
            <TopPage image={image} active={TopFrameActive}/>
            <PersonalPage />
            <SkillPage />
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