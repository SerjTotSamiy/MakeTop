import React, {useContext, useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import {MeContext} from "./_app";
import ModalReview from "../component/Modal/ModalReview";
import OwnComment from "../component/OwnComment";
import ReviewsGenerator from "../component/ReviewsGenerator";
import Head from "next/head";
import {useRouter} from "next/router";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import {useStores} from "../stores";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";

export async function getStaticProps() {
    return {
        props: {
            title:
                "Buy Instagram Auto Likes From The world's #1 Site (2022)- Maketop",
            canonical: "https://maketop.io/automatic-instagram-likes",
            description:
                "Buy automatic Instagram likes from MakeTop. Cheap instant and regular monthly delivery of 100% high quality followers packages. Payment by crypto",
        },
    };
}

const AutomaticInstagramLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(null);
    const [type, setType] = useState({1: "active", 2: "disabled"});
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const [readTextMore, setReadTextMore] = useState(false);
    const {autoLikesStore, autoLikesSubsStore} = useStores();
    const router = useRouter();
    const {query} = useRouter();

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
        autoLikesStore.getComment().then(data => setComment(data));
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
                        <PageTitle title={"Buy Automatic Instagram likes"}/>
                        <PageHead page="autoLikes"/>

                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>
                            <div className={buyLikesStyles.getStartedButtons}>
                                <ButtonComponent
                                    text={"Per post"}
                                    type={"instagram"}
                                    style={style[type["1"]]}
                                    onClick={() => {
                                        setType({1: "active", 2: "disabled"});
                                    }}
                                />
                                <ButtonComponent
                                    text={"Subscription"}
                                    type={"instagram"}
                                    style={style[type["2"]]}
                                    onClick={() => {
                                        setType({1: "disabled", 2: "active"});
                                    }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            {type[1] === "active" ? (
                                <CardsList store={autoLikesStore} setModalOpen={setIsOpen}/>
                            ) : (
                                <CardsList store={autoLikesSubsStore} setModalOpen={setIsOpen}/>
                            )}
                        </div>
                        <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
                        <ReviewsBlock
                            comment={comment}
                            isReviewButtonPress={isReviewButtonPress}
                            setIsReviewButtonPress={setIsReviewButtonPress}
                            type={autoLikesStore.system}
                            service={autoLikesStore.service}
                        />
                        {/*<InfoBlock />*/}
                        <div className={infoStyles.info_block}>
                            <div className={infoStyles.info_under}>
                                <p>Where can you buy <b>automatic Instagram likes</b>? Buy <b>auto likes</b> of the
                                    highest quality
                                    and most acceptable cost and make your channel popular.</p>
                                <p>Automatic likes on Instagram are considered one of the most effective and fast
                                    account development mechanisms. The social network algorithm considers not just the
                                    number of hearts but also the speed with which they appear. The quicker the post
                                    collects sympathy, the more interesting it is to the public, and the higher its
                                    place in the ranking. Boost Instagram Auto likes are likes that are automatically
                                    placed on each new post of yours and are designed to display publications in the TOP
                                    Instagram since this social. The network considers the speed of adding likes, and
                                    the higher it is and the more likes, the higher the chances of getting into the TOP
                                    Instagram.</p>
                                <p style={{color: "#4f81bd"}}>Why do people buy automatic Instagram likes?</p>
                                <p>Not all users receive "Like" in the usual way; many use special programs that help to
                                    wind up the required number of "hearts".</p>
                                <p>The application will offer to buy the required number of likes for a specific price
                                    for a lazy user.</p>
                                <p>There are several categories of people who wind up likes on their pages on social
                                    networks most often:</p>
                                <ul style={{listStyleType: "numeric"}}>
                                    <li>1. Young people are striving for rapid popularity.</li>
                                    <p>Men and women, who have not yet managed to gain a sufficient number of friends on
                                        the social network, and those who have more than enough friends, wind up
                                        likes.</p>
                                    <p>When asked why they need so many likes, the answer is straightforward - they
                                        don't like a photo without hearts.</p>
                                    <li> Business owners who decide to promote it on social media.</li>
                                    <p>Usually, the more users speak positively about any goods, services, or offers;
                                        the more these offers are credible. Likes often replace positive reviews.</p>
                                    <li>Contestants.</li>
                                    <p>Today, you can often find various contests on social networks. You need to score
                                        the maximum number of reviews or "likes" on any entry to become a winner.</p>
                                    <p><b>Autolike Instagram</b> is the "I like" mark put on new publications in your IG
                                        profile in the desired amount already in the first minutes after posting. Many
                                        users of social networks are wary of services, sites, and programs that
                                        artificially increase resources. As practice shows, absolutely in vain. With a
                                        competent approach to choosing a service provider, you can achieve the desired
                                        indicator on the counter and the desired audience coverage without risks.</p>
                                </ul>
                                <p style={{color: "#4f81bd"}}>Auto-like Instagram posts - efficient, fast, reliable!</p>
                                <p>Quite often, quickly winding up likes on Instagram is not enough. Sometimes it's
                                    about the time of publication; sometimes, it's about the specific product that the
                                    promoted publication advertises. Such situations can be called a missed moment. And
                                    the universal tool, in this case, is automatic likes for new posts on the Instagram
                                    account and visits on Instagram.</p>
                                <p>However, do not forget about the "smart" social network algorithms that consider the
                                    social activity. These restrictions are neglected by all kinds of free services and
                                    cheat programs. Our service uses exclusively safe promotion mechanisms within the
                                    current Instagram limits. Your posts collect hearts at an incredible rate, which,
                                    however, does not harm the account. For this reason, the " <b>Buy Instagram Auto
                                        Likes</b>"
                                    service and video views on Instagram are so popular and are ordered by dozens of
                                    users every day.</p>
                                <p style={{color: "#4f81bd"}}>Auto promotion Instagram</p>
                                <p>Instagram is a popular app for sharing photos and short videos. It is one of the few
                                    social networks that do not block ads.</p>
                                <p>The number of Instagram followers is growing every second. Therefore, it would be a
                                    reckless mistake not to use such a "live" platform to promote your business.</p>
                                <p>Instagram auto boost with the help of an automatic service will allow you to
                                    significantly increase the number of active followers in a short time. If done
                                    correctly, an advanced account will become a source of ever-growing income or a
                                    means to achieve other goals. Advertising of goods and brands can bring money, and
                                    it is ordered only from owners of promoted profiles. Starting your own business on
                                    Instagram is also a great idea.</p>
                                <p>Auto cheating Instagram followers through a proven specialized service with
                                    round-the-clock support is a great way to get a broad audience. Using this method,
                                    you are guaranteed to find yourself in the desired position in a short time.
                                    Investments are required, but our services are cheap.</p>
                                <p>We are working with different payment providers, including MasterCard, Visa, American
                                    Express, Maestro, American Express, and Discover, and you may even <b>buy Instagram
                                        auto likes with crypto</b></p>
                            </div>
                        </div>
                        {isOpen && (
                            <ModalComponent
                                open={isOpen}
                                setOpen={setIsOpen}
                                service={query.service}
                                counts={query.counts}
                                priceValue={query.priceValue}
                                system={query.system}
                            />
                        )}
                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default AutomaticInstagramLikes;
