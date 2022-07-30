import "../styles/globals.sass";
import React, {createContext, useEffect} from "react";
import Head from "next/head";
import { useStores } from "../stores";
import useAxios from "../hooks/useAxios";

export const MeContext = createContext();

const MyApp = ({Component, pageProps}) => {
    const {
        appStore,
        likesStore,
        followersStore,
        autoLikesStore,
        autoLikesSubsStore,
        viewsStore,
        commentsStore,
        youTubeViewsStore,
        youTubeLikesStore,
        youTubeCommentsStore,
        tikTokFollowersStore,
        tikTokLikesStore,
        tikTokViewsStore,
        twitterFollowersStore,
        twitterPostLikesStore,
        facebookPageLikesStore,
        facebookPostLikesStore,
        spotifyFollowersStore,
        vkGroupFollowersStore,
        vkPostLikesStore
    } = useStores();
    const axios = useAxios();

    useEffect(() => {
        appStore.requestUser(axios);
        appStore.requestAddServices(axios).then((res) => {
            youTubeViewsStore.getAdditionalData();
            youTubeLikesStore.getAdditionalData();
            youTubeCommentsStore.getAdditionalData();
            tikTokFollowersStore.getAdditionalData();
            tikTokLikesStore.getAdditionalData();
            tikTokViewsStore.getAdditionalData();
            twitterFollowersStore.getAdditionalData();
            twitterPostLikesStore.getAdditionalData();
            facebookPageLikesStore.getAdditionalData();
            facebookPostLikesStore.getAdditionalData();
            spotifyFollowersStore.getAdditionalData();
            vkGroupFollowersStore.getAdditionalData();
            vkPostLikesStore.getAdditionalData();
        });
        appStore.requestPlans(axios).then((res) => {
            likesStore.getData();
            followersStore.getData();
            autoLikesStore.getData();
            autoLikesSubsStore.getData();
            viewsStore.getData();
            commentsStore.getData();
        });
        appStore.getUsers();
    }, []);

    return (
        <>
            <Head>
                <title>MakeTop</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="locale" property="og:locale" content="en_US"/>
                <meta name="type" property="og:type" content="website"/>
                <meta
                    name="facebook-domain-verification"
                    content="qyk8si5jqwk9m6240785cypx4jcij9"
                />
                <meta
                    name="google-site-verification"
                    content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"
                />
                <meta name="site_name" property="og:site_name" content="Maketop.io"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta name="twitter:card" content="summary"/>

            </Head>
            <Component {...pageProps} />
            <link rel="shortcut icon" href="/favicon.ico"/>
        </>
    );
}

export default MyApp;
