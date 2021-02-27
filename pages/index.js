import sanityClient from "../client";
import Link from 'next/link';
import Background from "../components/Background";
import Greeting from "../components/Greeting";

const Home = ({image}) => {

    return (
        <div>
            <Greeting />
            <Link href="/post">Post</Link>
            <Background url={image.asset.url}/>
            <div style={{width: '100vw', height: '2000px'}}/>
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