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
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"
import Modal from "../component/Modal/Modal";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy YouTube Comments - High Quality - 100% Real Lookin",
            canonical: "https://maketop.io/buy-youtube-comments",
            description:
                "Buy YouTube comments from MakeTop for your video. Get unlimited high-quality comments packages with payment by crypto or credit card. No password and risk",
        },
    };
}

const BuyYoutubeComments = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();
    const {youTubeCommentsStore} = useStores();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        youTubeCommentsStore.getComment().then(data => setComment(data));
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
                            <PageHead page="youtube-comments"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={youTubeCommentsStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={youTubeCommentsStore.system}
                                service={youTubeCommentsStore.service}
                            />
                            {/*<InfoBlock/>*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span style={{fontWeight: "bold"}}>buy YouTube comments?</span> Buy
                                        comments of the highest
                                        quality and most
                                        acceptable cost and make your channel popular.</p>
                                    <p>YouTube is a video hosting service that is well known and popular all over the
                                        world. Maintaining a channel on this Internet resource is rightfully considered
                                        one of the most effective tools for promoting your brand, business, goods,
                                        services, and name. YouTube allows each user to become famous, successful,
                                        wealthy, and achieve unprecedented heights in video blogging or other areas.</p>
                                    <p>Increasing the popularity by boosting YouTube comments is an effective marketing
                                        tool for private video bloggers or companies that want to quickly draw attention
                                        to their products with the help of thematic videos.</p>
                                    <p>Creating and posting videos is one of the best ways to promote products and
                                        services online. The proverb that it is better to see once than to hear many
                                        times remains relevant; due to high competition, the promotion of any channel
                                        requires a considerable amount of time.</p>
                                    <p>By deciding to <span
                                        style={{fontWeight: "bold"}}>buy YouTube custom comments</span>, you will
                                        significantly
                                        increase the
                                        effectiveness of your advertising campaign and quickly get your first
                                        profit.</p>
                                    <p>The number of views of the video increases many times, which causes increased
                                        interest in it from potential viewers. Seeing many subscriptions, comments, and
                                        likes, other users will probably want to subscribe to your channel or take part
                                        in a discussion that has aroused great interest.</p>
                                    <p> Channel creators are trying to attract attention with their channels. At
                                        Maketop, we want to help you get the most out of YouTube. For that, we have a
                                        lot of valuable tips and quality YouTube comment suggestions.</p>
                                    <p style={{color: "#4f81bd"}}><span
                                        style={{textDecoration: "underline"}}>Why to buy</span> comments?</p>
                                    <ul>
                                        <p>Boosting comments on YouTube content is your decision if:</p>
                                        <li>You need "quick" deals.</li>
                                        <li>Your goal is to interact with the audience and get feedback.</li>
                                        <li>Your mission is to make a favorable impression and keep a reputation.</li>
                                        <li>The channel rating and audience action are essential to you.</li>
                                        <li>You're aiming for YouTube rankings.</li>
                                        <li>It is in your interest to thoroughly and quickly present a product or
                                            service to the target audience.
                                        </li>
                                        <li>You need to achieve the maximum allowed number of viewers.</li>
                                        <li>Your preference is YouTube promotion.</li>
                                        <li>You desire to entice advertisers from the business environment.</li>
                                    </ul>
                                    <p style={{color: "#4f81bd", textDecoration: "underline"}}>How to buy YouTube
                                        comments?</p>
                                    <p>We offer to buy effective and safe methods to increase user activity and the
                                        number of subscribers on YouTube channels. When buying comments on our YouTube
                                        service, comments are done by real people from different devices, so the
                                        discussion looks completely natural.</p>
                                    <p>Comments are written in accordance with the cheating task you bought. You can
                                        choose performers according to the criteria you are interested in, including
                                        gender, age, and region of residence. This option combines efficiency and
                                        affordable cost.</p>
                                    <p>We provide only the highest quality services. No compromises - only the best
                                        promotion for our clients.</p>
                                    <p>Incredibly high-speed YouTube comments will allow you to get excellent promotions
                                        in the shortest possible time.</p>
                                    <p>As for the content of the posts that you buy with the service, you can offer your
                                        posts or create a task, the requirements of which will guide the offers.</p>
                                    <p>You can become our client and <span style={{fontWeight: "bold"}}>get YouTube comments</span> at
                                        any convenient time. Fill
                                        out the application form on the site indicating your requirements and the cost
                                        of one comment.</p>
                                    <p>We are working with different payment providers, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may
                                        even <span style={{fontWeight: "bold"}}>buy
                                        YouTube comments with crypto.</span></p>
                                </div>
                            </div>
                            <Modal store={ youTubeCommentsStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyYoutubeComments;
