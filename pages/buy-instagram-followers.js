import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Followers Guaranteed by MakeTop #1 since 2017",
            canonical: "https://maketop.io/buy-instagram-followers",
            description:
                "Buy Instagram followers from MakeTop. Cheap instant delivery to your profile. High rated and quality followers. Payment by crypto. 24/7 support",
        },
    };
}

const BuyInstagramFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const { followersStore } = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);

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
            <div
                style={{
                    maxWidth: 1920,
                    width: "100%",
                    margin: "0 auto",
                    overflowX: "hidden",
                }}
            >
                <HeadComponent {...props} />
                <div className={styles.container}>
                    <Layer type="link">
                        <div className={`container`}>
                            <PageTitle title={"Buy Instagram followers"}/>
                            <PageHead page="followers" />
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={followersStore} setModalOpen={setIsOpen} />
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={followersStore.system}
                                service={followersStore.service}
                            />
                            <InfoBlock />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyInstagramFollowers;
