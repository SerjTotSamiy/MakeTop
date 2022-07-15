import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Head from "next/head";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import Modal from "../component/Modal/Modal";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Spotify Playlist Followers - 2 Steps to Result - MakeTop",
            canonical: "https://maketop.io/buy-spotify-playlist-followers",
            description:
                "Buy Spotify playlist followers is a good way to get popular on social media. Easy payment by crypto or card. High-quality followers and safety service",
        },
    };
}

const BuySpotifyPlaylistFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {spotifyFollowersStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        spotifyFollowersStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('/spotifyBg.webp') no-repeat 100%  ",
                backgroundSize: "cover",
            }}
        >
            <Head>
                <title>MakeTop</title>
                <meta name="title" property="og:title" content={props.title}/>
                <meta
                    name="description"
                    property="og:description"
                    content={props.description}
                />
                <meta name="twitter:description" content={props.description}/>
                <meta name="url" property="og:url" content={props.canonical}/>
                <link rel="canonical" href={props.canonical}/>
            </Head>
            <div
                style={{
                    maxWidth: 1920,
                    width: "100%",
                    margin: "0 auto",
                    overflowX: "hidden",
                }}
            >
                <div className={styles.container}>
                    <div className={styles.background}/>
                    <Layer type="spotify">
                        <div className={`container`}>
                            <PageTitle title={"Buy Spotify followers"}/>
                            <PageHead page="spotify-followers"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={spotifyFollowersStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={spotifyFollowersStore.system}
                                service={spotifyFollowersStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Need to buy <span
                                        style={{fontWeight: "bold"}}>Spotify Playlist Followers?</span> Here you can buy
                                        real
                                        followers at
                                        reasonable prices and get the best help you need to be in trends. </p>
                                    <p>What is Spotify? It is a music service from developers from Sweden. The app is
                                        available in 120 countries. The Spotify digital app has more than 50 million
                                        tracks and 4 billion playlists with compositions from foreign and domestic
                                        artists in its catalo</p>
                                    <p>Spotify offers the legal ability to listen to tracks online from a huge music
                                        catalog that contains tons of albums, that are not available on other platforms.
                                        However, users love the service not only for this.</p>
                                    <p>The main advantage of Spotify is its music selection algorithms, which almost
                                        perfectly adapt to the listeners tastes. There are thematic playlists, created
                                        by other users and the musicians themselves. Synchronization is conveniently
                                        implemented in the service. You can start listening to a track on one device and
                                        continue from the same place on another. </p>
                                    <p>Spotify offers artists the largest audience in the world.</p>
                                    <p>Many artists need to put in a lot of musical creativity for users to enjoy their
                                        content. It is not easy to stand out from the mass of competitors and stand out
                                        among thousands of other artists.</p>
                                    <p>It is a problem that almost everyone has with Spotify. We have the best solution
                                        for this task: real Spotify followers. You can buy Spotify Playlist Followers
                                        cheap and easy on Maketop. </p>
                                    <p style={{color: "#4f81bd"}}>What are the types of followers on Spotify?</p>
                                    <p>They are users who have subscribed to you to receive notifications about your new
                                        content and be aware of the release of new tracks. Followers in Spotify are per
                                        playlist, per profile, and per artist. </p>
                                    <p>Unfortunately, getting followers is extremely difficult. Incredibly talented
                                        performers on Spotify often go unnoticed and, due to lack of connections and
                                        advertising money, get lost in the crowd. Nothing is impossible in this world,
                                        and oblivion and obscurity can turn into popularity and success. </p>
                                    <p>However, a low number of followers can sow a seed of doubt in the heart of young
                                        talent. The expectation of success can last for years, and only the one who
                                        never
                                        gives up will win!</p>
                                    <p style={{color: "#4f81bd"}}>The subtleties of cheating playlist subscribers in
                                        Spotify</p>
                                    <p>Thus, getting to the top is a chance for any musician. This achievement will
                                        allow you to make yourself known publicly. First of all, success in the
                                        application will be beneficial for novice performers who create high-quality
                                        content but have not yet received sufficient fame. </p>
                                    <p>Boosting Spotify playlist followers will be a profitable solution for more famous
                                        musicians. It will contribute to the development of the track in a shorter time.
                                        Thus, buying followers in a Spotify playlist has the following advantages:</p>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>This service is aimed at distributing new products. It is the best option
                                            for posting a new song. Customers come here primarily to add new pieces to
                                            their playlist that suit their tastes. For this reason, updating the library
                                            is of stable interest among followers.
                                        </li>
                                        <li> It allows you to increase the royalties. It will be a good investment that
                                            will pay off over time.
                                        </li>
                                        <li>Getting popular on the resource will help advance your career. A well-known
                                            label can notice a good composition, which will be the beginning of a
                                            successful career. Such promotion often helps to participate in a festival
                                            or event and get into the rotation on the radio.
                                        </li>
                                    </ul>
                                    <p style={{color: "#4f81bd"}}>How to buy Spotify Playlist Followers?</p>
                                    <ul>
                                        <p>Why is it worth contacting us? Maketop offers promotions on Spotify on
                                            favorable terms! Thus, cooperation with us has the following advantages:
                                        </p>
                                        <li>The procedure is carried out by professionals who use the most modern and
                                            efficient algorithms.
                                        </li>
                                        <li>We give a noticeable result in the shortest possible time. It is recommended
                                            for those who need quickly declare their creativity!
                                        </li>
                                        <li>The service provides a large influx of followers - their number is measured
                                            in thousands. The more listeners you have, the more popular the track among
                                            real music lovers.
                                        </li>
                                        <li>We work with different payment providers, including MasterCard, Visa,
                                            American Express, Maestro, and Discover, and you may even <span
                                                style={{fontWeight: "bold"}}>buy Spotify
                                            Playlist Followers with crypto.</span>
                                        </li>
                                        <p>It is also worth noting that the promotion of followers on the Spotify
                                            platform is carried out at a favorable and pleasant cost! This service will
                                            help you achieve your goals faster and get real profit for your
                                            creativity.</p>
                                    </ul>
                                </div>
                            </div>
                            <Modal store={ spotifyFollowersStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuySpotifyPlaylistFollowers;
