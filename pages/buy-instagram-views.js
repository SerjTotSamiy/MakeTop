import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {useStores} from "../stores";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"
import Modal from "../component/Modal/Modal";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {instagramViewsQuestions} from "../shared/questions";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Views Guaranteed by MakeTop #1 since 2017",
            canonical: "https://maketop.io/buy-instagram-views",
            description:
                "Buy Instagram views from MakeTop by crypto or credit card. High quality and fast delivery with 100% guarantee. Choose best new views packages right now",
        },
    };
}

const BuyInstagramViews = (props) => {
    const [comment, setComment] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {viewsStore} = useStores();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        viewsStore.getComment().then(data => setComment(data));
    }, []);

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
                    background: "transparent",
                }}
            >
                <div className={styles.container}>
                    <Layer type="link">
                        <div className={`container`}>
                            <PageTitle title={"Buy Instagram likes  "}/>
                            <PageHead page="views"/>

                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>

                            <CardsList store={viewsStore} setModalOpen={setIsOpen}/>

                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={viewsStore.system}
                                service={viewsStore.service}
                            />

                            <div className={questionsStyle.questions}>
                                <p className={questionsStyle.questions_title}>
                                    FREQUENTLY ASKED QUESTIONS
                                </p>
                                <span className={questionsStyle.questions_text}>
                                Do you have questions about Instagram Views? Here are our most
                                frequently asked questions:
                              </span>
                                <Questions questions={instagramViewsQuestions} />
                            </div>

                            <Modal store={ viewsStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyInstagramViews;
