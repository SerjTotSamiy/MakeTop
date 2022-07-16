import React, {useContext, useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import {useStores} from "../stores";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import Modal from "../component/Modal/Modal";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {freeInstagramFollowersQuestions} from "../shared/questions";

export async function getStaticProps() {
    return {
        props: {
            title: "Get Free Instagram Followers - Test 10 - 100% Work",
            canonical: "https://maketop.io/buy-instagram-followers",
            description:
                "Free Instagram followers from MakeTop platform is recommended by influencers. Get 10 followers immediately without password and personal info",
        },
    };
}

const FreeInstagramFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const {followersStore} = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        followersStore.getComment().then(data => setComment(data));
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
                        <PageTitle title={"Free Instagram followers"}/>
                        <PageHead page="free-followers"/>
                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>
                        </div>
                        <CardsList store={followersStore} setModalOpen={setIsOpen}/>
                        <ReviewsBlock
                            comment={comment}
                            isReviewButtonPress={isReviewButtonPress}
                            setIsReviewButtonPress={setIsReviewButtonPress}
                            type={followersStore.system}
                            service={followersStore.service}
                        />

                        <div className={questionsStyle.questions}>
                            <p className={questionsStyle.questions_title}>
                                FREQUENTLY ASKED QUESTIONS
                            </p>
                            <span className={questionsStyle.questions_text}>
                                Do you have questions about Free Instagram Followers? Here are our most
                                frequently asked questions:
                              </span>
                            <Questions questions={freeInstagramFollowersQuestions} />
                        </div>

                        <Modal store={ followersStore } />
                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default FreeInstagramFollowers;
