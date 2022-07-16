import React, {useEffect, useRef, useState} from "react";
import styles from "../styles/Home.module.sass";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import CardsList from "../component/CardsList/CardsList";
import {ModalComponent} from "../component/Modal/ModalComponent";
import PageHead from "../component/PageHead/PageHead";
import appStore from "../stores/app.store";
import Modal from "../component/Modal/Modal";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"
import Questions from "../component/Questions/Questions";
import {frequentQuestions, instagramLikesQuestions} from "../shared/questions";
import questionsStyle from "../component/Questions/Questions.module.sass";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Likes Guaranteed by MakeTop #1 since 2017",
            canonical: "https://maketop.io/buy-instagram-likes",
            description:
                "Buy Instagram likes from MakeTop. Cheap instant delivery to your profile. High rated likes and 100% quality. 24/7 Simple payment by crypto or credit card",
        },
    };
}

const BuyInstagramLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const {appStore, likesStore, modalStore} = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const [modalPosition, setModalPosition] = useState(0);
    const {query} = useRouter();
    const ref = useRef(null);

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        // likesStore.getData();
        likesStore.getComment().then(data => setComment(data));
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
            <div className={styles.container}>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={"Buy Instagram likes"}/>
                        <PageHead page="likes"/>
                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>
                        </div>
                        <CardsList store={likesStore} setModalOpen={setIsOpen}/>
                        <ReviewsBlock
                            comment={comment}
                            isReviewButtonPress={isReviewButtonPress}
                            setIsReviewButtonPress={setIsReviewButtonPress}
                            type={likesStore.system}
                            service={likesStore.service}
                        />

                        <div className={questionsStyle.questions}>
                            <p className={questionsStyle.questions_title}>
                                FREQUENTLY ASKED QUESTIONS
                            </p>
                            <span className={questionsStyle.questions_text}>
                                Do you have questions about Instagram Likes? Here are our most
                                frequently asked questions:
                              </span>
                            <Questions questions={instagramLikesQuestions} />
                        </div>
                        <Modal store={likesStore} />
                    </div>
                </Layer>
            </div>
        </div>
    );
}

export default BuyInstagramLikes;
