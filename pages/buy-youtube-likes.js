import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Head from "next/head";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import Modal from "../component/Modal/Modal";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {youtubeLikesQuestions} from "../shared/questions";
import CommonError from "../component/CommonError/CommonError";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy YouTube Likes - 100% High Quality - Instant Delivery",
            canonical: "https://likes.io/buy-youtube-likes",
            description:
                "Buy YouTube likes from MakeTop. Get unlimited high-quality likes packages with payment by crypto or credit card. No password and risk",
        },
    };
}

const BuyYoutubeLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {youTubeLikesStore} = useStores();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        youTubeLikesStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('/youtubeBg.webp') no-repeat 100%  ",
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
                    <Layer type="youtube">
                        <div className={`container`}>
                            <PageTitle title={"Buy YouTube likes "}/>
                            <PageHead page="youtube-likes"/>

                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            { youTubeLikesStore.data?.info?.length > 0 &&
                                <CommonError error={youTubeLikesStore.data?.info[0]} />
                            }
                            <CardsList store={youTubeLikesStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={youTubeLikesStore.system}
                                service={youTubeLikesStore.service}
                            />

                            <div className={questionsStyle.questions}>
                                <p className={questionsStyle.questions_title}>
                                    FREQUENTLY ASKED QUESTIONS
                                </p>
                                <span className={questionsStyle.questions_text}>
                                Do you have questions about YouTube Likes? Here are our most
                                frequently asked questions:
                              </span>
                                <Questions questions={youtubeLikesQuestions} />
                            </div>

                            <Modal store={ youTubeLikesStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyYoutubeLikes;
