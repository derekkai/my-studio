import {useState, useEffect} from 'react';
import sanityClient from "../client";


const Post = ({ title, image}) => {
    console.log(title, image);
    return <div>
        This is my first post!
        <img src={image.asset.url}/>
    </div>
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;

    if (!pageSlug) {
        return {
            notFound: true,
        }
    }

    const query = `*[_type == "post" && slug.current == "${pageSlug}"]{
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
    console.log(query)
    const result = await sanityClient.fetch(query).then(res => res[0])
    console.log(result);

    return {
        props: {
            title: result.title,
            image: result.mainImage,
        },
    }
}
export default Post;