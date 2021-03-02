import {useState, useEffect} from 'react';
import Link from 'next/link';
import sanityClient from "../client";
import Nav from "../components/Nav";
import Background from "../components/Background";
import Greeting from "../components/Greeting";
import {CSSTransition} from 'react-transition-group';
import TopFrame from "../components/TopFrame";
import PersonalFrame from "../components/PersonalFrame";

const Home = ({image}) => {
    const [enter, setEnter] = useState(false);
    const [TopFrameActive, setTopFrameActive] = useState(false);
    // const [PersonalFrameActive, setPersonalFrameActive] = useState();


    const enterHandle = () => {
        setEnter(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setTopFrameActive(true)
        }, 2000);

        // window.addEventListener('scroll', function (e) {
        //     window.scrollY
        // });
    }, []);

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
            <TopFrame image={image} active={TopFrameActive}/>
            <PersonalFrame />
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