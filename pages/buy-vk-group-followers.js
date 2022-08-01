import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import Head from "next/head";
import {useStores} from "../stores";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import PageHead from "../component/PageHead/PageHead";
import Modal from "../component/Modal/Modal";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {vkGroupFollowersQuestions} from "../shared/questions";
import CommonError from "../component/CommonError/CommonError";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy VK Group Followers - 2 Steps to Result - MakeTop",
            canonical: "https://maketop.io/buy-vk-group-followers",
            description:
                "Buy VK group followers is a good way to get popular on social media. Easy payment by crypto or card. High-quality followers and safety service",
        },
    };
}

const BuyVkGroupFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {vkGroupFollowersStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);


    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        vkGroupFollowersStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('/vkBg.webp') no-repeat 100%  ",
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
                    <Layer type="vk">
                        <div className={`container`}>
                            <PageTitle title={"Buy VK followers "}/>
                            <PageHead page="vk-followers"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            { vkGroupFollowersStore.data?.info?.length > 0 &&
                                <CommonError error={vkGroupFollowersStore.data?.info[0]} />
                            }
                            <CardsList store={vkGroupFollowersStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={vkGroupFollowersStore.system}
                                service={vkGroupFollowersStore.service}
                            />

                            <div className={questionsStyle.questions}>
                                <p className={questionsStyle.questions_title}>
                                    FREQUENTLY ASKED QUESTIONS
                                </p>
                                <span className={questionsStyle.questions_text}>
                                Do you have questions about VK Group Followers? Here are our most
                                frequently asked questions:
                              </span>
                                <Questions questions={vkGroupFollowersQuestions} />
                            </div>

                            <Modal store={ vkGroupFollowersStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyVkGroupFollowers;
