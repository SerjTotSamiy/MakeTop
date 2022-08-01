import React, {useContext, useEffect, useState} from "react";
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
import {tiktokViewsQuestions} from "../shared/questions";
import CommonError from "../component/CommonError/CommonError";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy TikTok Views - 100% Real Looking - MakeTop",
            canonical: "https://maketop.io/buy-tiktok-views",
            description:
                "Buy TikTok views from #1 MakeTop site. Only 2 steps: just choose our views package and pay by crypto. Fast safe delivery. No password is required",
        },
    };
}

const BuyTiktokViews = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {tikTokViewsStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        tikTokViewsStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('tiktokBg.webp') no-repeat 100%  ",
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

                    <Layer type="tiktok">
                        <div className={`container`}>
                            <PageTitle title={"Buy TikTok views  "}/>
                            <PageHead page="tiktok-views"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            { tikTokViewsStore.data?.info?.length > 0 &&
                                <CommonError error={tikTokViewsStore.data?.info[0]} />
                            }
                            <CardsList store={tikTokViewsStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={tikTokViewsStore.system}
                                service={tikTokViewsStore.service}
                            />

                            <div className={questionsStyle.questions}>
                                <p className={questionsStyle.questions_title}>
                                    FREQUENTLY ASKED QUESTIONS
                                </p>
                                <span className={questionsStyle.questions_text}>
                                Do you have questions about TikTok Views? Here are our most
                                frequently asked questions:
                              </span>
                                <Questions questions={tiktokViewsQuestions} />
                            </div>

                            <Modal store={ tikTokViewsStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyTiktokViews;
