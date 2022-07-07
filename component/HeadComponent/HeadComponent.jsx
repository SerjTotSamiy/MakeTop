import React from "react";
import Head from "next/head";

const HeadComponent = ({title, description, canonical}) => (
    <Head>
        <title>MakeTop</title>
        <meta name="title" property="og:title" content={title}/>
        <meta
            name="description"
            property="og:description"
            content={description}
        />
        <meta name="twitter:description" content={description}/>
        <meta name="url" property="og:url" content={canonical}/>
        <link rel="canonical" href={canonical}/>
    </Head>
);

export default HeadComponent;
