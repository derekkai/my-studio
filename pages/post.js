import sanityClient from "../client";
import Link from 'next/link'

const post = ({data}) => {
    console.log(data);
    return <div>
        This is my post!
        <Link href="/home">test</Link>
        <div>
            {
                data.map(post =>
                    <Link href={`post/${post.slug.current}`} key={post.slug.current}>
                        <a>
                            <h3>
                                {post.title}
                            </h3>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                        </a>
                    </Link>,
                )
            }
        </div>
    </div>
}

export const getServerSideProps = async () => {

    const query = `*[_type == "post"]{
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
    const result = await sanityClient.fetch(query)

    return {
        props: {
            data: result,
        },
    }
}

export default post;