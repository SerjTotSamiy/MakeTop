import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Head from "next/head";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"

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
    const {query} = useRouter();
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
                            <CardsList store={youTubeLikesStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={youTubeLikesStore.system}
                                service={youTubeLikesStore.service}
                            />
                            {/* <InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_block}>
                                    <p>Where can you <span style={{fontWeight: "bold"}}>buy YouTube likes?</span> Buy
                                        here real likes of the highest
                                        quality and
                                        most acceptable cost and make your channel popular.</p>
                                    <p>On the YouTube video hosting service, factors such as the number of subscribers,
                                        video views, and likes put on them are involved in the development of the
                                        channel. No wonder the authors of the channels ask you to press the coveted
                                        “thumbs up” after watching the video. It helps to promote the channel up to the
                                        top positions. </p>
                                    <p>Like is a reflection of the level of sympathy that the audience experiences
                                        regarding a particular video and, in general, regarding the work of the author
                                        on the channel. </p>
                                    <p>Why do likes have such a strong influence on channel promotion? It is a live
                                        activity of the audience, accelerating the output of the video to the top of
                                        YouTube and Google searches. Automated systems read the information that a liked
                                        video is reasonable for users. </p>
                                    <p>On YouTube, the intra-system principle of promoting videos also works if the
                                        other owner of the channel has a playlist "Like Videos". It displays all the
                                        videos that have been liked and mean that users subscribed to this person will
                                        also see it.</p>
                                    <p style={{color: "#4f81bd"}}>Likes on YouTube. What bonuses does the author receive
                                        from them?</p>
                                    <ul>
                                        <p>Why to buy <span
                                            style={{fontWeight: "bold"}}>YouTube custom likes?</span> Here are the
                                            bonuses:</p>
                                        <li> the loyalty of the audience to the channel, periodically uploaded videos to
                                            it, and the personality of the author as a whole (or to the promoted brand)
                                            is formed;
                                        </li>
                                        <li>the audience is filled with new subscribers who see the interest of other
                                            people;
                                        </li>
                                        <li>the video is moving to the top.</li>
                                    </ul>
                                    <p>Popularization of the channel logically leads to encouragement from the YouTube
                                        platform itself. There is an opportunity to advertise goods and services and
                                        work in this direction under different conditions. Viewers from the YouTube
                                        channel become subscribers to other social networks of the author and provide
                                        opportunities to increase earnings.</p>
                                    <p style={{color: "#4f81bd"}}>How to buy YouTube likes?</p>
                                    <ul>
                                        <p>The algorithm of actions on the site to buy likes on YouTube:</p>
                                        <li><span style={{fontWeight: "bold"}}>To get YouTube likes</span> explore all
                                            packages in the Likes category
                                            and choose
                                            the one that suits your offer and its price. Consider this choice carefully
                                            if you have not worked with Maketop before. Click on the service icon to
                                            read the information.
                                        </li>
                                        <li>Click on the "Order" button if you have replenished your wallet on the
                                            site.
                                        </li>
                                        <li>After filling in all the lines, it remains only to wait for the queue for
                                            its execution by the service.
                                        </li>
                                    </ul>
                                    <p>We are working with different payment providers, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may
                                        even <span style={{fontWeight: 'bold'}}>buy
                                        YouTube likes with crypto.</span></p>
                                    <p>The specificity of the Maketop service is to automate its work. Each client can
                                        use the services of interest at any time. At the same time, there is the
                                        round-the-clock technical support that answers user questions. The client pays
                                        for his order and gets in line. The terms of execution and the daily volume are
                                        specified in the information for the order, so you should not worry about a long
                                        wait.</p>
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
        </div>
    );
};

export default BuyYoutubeLikes;
