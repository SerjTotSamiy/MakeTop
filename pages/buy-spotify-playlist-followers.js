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
import Modal from "../component/Modal/Modal";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {spotifyPlaylistFollowersQuestions} from "../shared/questions";
import CommonError from "../component/CommonError/CommonError";

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
                            { spotifyFollowersStore.data?.info?.length > 0 &&
                                <CommonError error={spotifyFollowersStore.data?.info[0]} />
                            }
                            <CardsList store={spotifyFollowersStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={spotifyFollowersStore.system}
                                service={spotifyFollowersStore.service}
                            />

                            <div className={questionsStyle.questions}>
                                <p className={questionsStyle.questions_title}>
                                    FREQUENTLY ASKED QUESTIONS
                                </p>
                                <span className={questionsStyle.questions_text}>
                                Do you have questions about Spotify Playlist Followers? Here are our most
                                frequently asked questions:
                              </span>
                                <Questions questions={spotifyPlaylistFollowersQuestions} />
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
