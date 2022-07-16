import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import {useStores} from "../stores";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import Modal from "../component/Modal/Modal";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {instagramCommentsQuestions} from "../shared/questions";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Comments From The world's #1 Site (2022)- maketop",
            canonical: "https://maketop.io/buy-instagram-comments",
            description:
                "Buy Instagram comments from MakeTop. Instant delivery, real comments and friendly 24/7 customer support. Try us today",
        },
    };
}

const BuyInstagramComments = (props) => {
    const [comment, setComment] = useState();
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {commentsStore} = useStores();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        commentsStore.getComment().then(data => setComment(data));
    }, []);

    const [type, setType] = useState({1: "active", 2: "disabled"});
    const style = {
        active: {
            background:
                "linear-gradient(88.32deg, #FEDA7D -15.05%, #D62F81 34.34%, #5E0DFF 108.12%)",
            width: 228,
        },
        disabled: {
            background: "transparent",
            boxShadow: "none",
            width: 228,
        },
    };

    return (
        <div
            className={styles.background}
            style={{
                background: "url('instagramBg.webp') no-repeat 100%  ",
                backgroundSize: "cover",
            }}
        >
            <HeadComponent {...props} />
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
                    <Layer type="link">
                        <div className={`container`}>
                            <PageTitle title={"Buy Instagram comments"}/>
                            <PageHead page="comments"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={commentsStore} setModalOpen={setIsOpen}/>

                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={commentsStore.system}
                                service={commentsStore.service}
                            />

                            <div className={questionsStyle.questions}>
                                <p className={questionsStyle.questions_title}>
                                    FREQUENTLY ASKED QUESTIONS
                                </p>
                                <span className={questionsStyle.questions_text}>
                                Do you have questions about Instagram Comments? Here are our most
                                frequently asked questions:
                              </span>
                                <Questions questions={instagramCommentsQuestions} />
                            </div>

                            <Modal store={ commentsStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyInstagramComments;
