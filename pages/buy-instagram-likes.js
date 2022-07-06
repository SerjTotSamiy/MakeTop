import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";
import {useStores} from "../stores";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import CardsList from "../component/CardsList/CardsList";

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

const BuyInstagramLikes = observer((props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState(null);
    const { likesStore } = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        // getComment("Instagram", "Likes");
        // likesStore.getData();
        likesStore.getComment().then(data => setComment(data));
    }, [likesStore.data]);

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
                        <div className={styles.phone}>
                            <img
                                src="/buyLikesPhoto.webp"
                                alt="Buy Instagram Likes"
                                className={styles.instagramImg}
                            />
                            <div className={buyLikesStyles.mainTitle}>
                                <p className={buyLikesStyles.title}>BUY INSTAGRAM LIKES</p>
                                <p className={buyLikesStyles.text}>
                                    Where you can buy cheap likes for Instagram photos and
                                    videos. Buy real Insta
                                    <br/> likes for the most reasonable prices here and grow
                                    your Instagram popularity in a flash!
                                </p>
                                <ButtonComponent
                                    text={"Leave Feedback"}
                                    type={"instagram"}
                                    onClick={() => router.push("/")}
                                />
                            </div>
                        </div>
                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>
                        </div>

                        <CardsList store={likesStore} />

                        <InfoBlock />

                        <ReviewsBlock
                            comment={comment}
                            isReviewButtonPress={isReviewButtonPress}
                            setIsReviewButtonPress={setIsReviewButtonPress}
                            type={likesStore.system}
                            service={likesStore.service}
                        />
                    </div>
                </Layer>
            </div>
        </div>
    );
})

export default BuyInstagramLikes;
