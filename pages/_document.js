import Document, {Html, Main, NextScript, Head} from "next/document";

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Ravi+Prakash&family=Redressed&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Fascinate&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;