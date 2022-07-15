import React, {useContext, useEffect, useState} from "react";
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
            title: "Buy TikTok Views - 100% Real Looking - MakeTop",
            canonical: "https://maketop.io/buy-tiktok-views",
            description:
                "Buy TikTok views from #1 MakeTop site. Only 2 steps: just choose our views package and pay by crypto. Fast safe delivery. No password is required",
        },
    };
}

const BuyTiktokViews = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {tikTokViewsStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        tikTokViewsStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('tiktokBg.webp') no-repeat 100%  ",
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

                    <Layer type="tiktok">
                        <div className={`container`}>
                            <PageTitle title={"Buy TikTok views  "}/>
                            <PageHead page="tiktok-views"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={tikTokViewsStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={tikTokViewsStore.system}
                                service={tikTokViewsStore.service}
                            />
                            {/*<InfoBlock/>*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span style={{fontWeight: "bold"}}>buy TikTok views?</span> Buy
                                        real views of the highest
                                        quality and most
                                        acceptable cost and evolve famous.</p>
                                    <p>TikTok is one of the most famous social networks today. Like Instagram or
                                        Facebook, it allows you to share short videos with other people. Today, almost
                                        all teenagers worldwide use this site to present their videos and communicate
                                        with each other.</p>
                                    <p style={{color: "#4f81bd"}}>Why do you need a TikTok account?</p>
                                    <p>TikTok belongs to the new social networks, but it has already gained many fans.
                                        There are around 800 million users worldwide, and it is easy to predict that its
                                        popularity will continue to increase.</p>
                                    <p>Today, promoting your brand or yourself requires a presence on social media.
                                        People who follow profiles on Facebook, Instagram, and now on TikTok is
                                        extremely effective here. That's why you should take the possibility to purchase
                                        views and followers. It will make your videos recorded on TikTok much more
                                        popular. Ticket impressions are also a guarantee of lucrative contracts with
                                        advertisers.</p>
                                    <p>If you determine to <span style={{fontWeight: "bold"}}>get TikTok views</span> ,
                                        then they will be increased
                                        under your
                                        videos; you can be certain that many people will see the content you share.
                                        After that, when they start tracking your profile, your growth is only a matter
                                        of time. If you want to earn recognition in TikTok, you must take the
                                        opportunity to purchase views. Our assistance will save you time and provide
                                        quality traffic to your profile. When you get views on Maketop, you choose the
                                        high rate and mega popularity online.</p>
                                    <p style={{color: "#4f81bd"}}>Is it secure to buy views in Tik Tok?</p>
                                    <p>It is 100% safe for your TikTok account, as we operate with real profiles that
                                        make your profile known and secure. It is a guarantee of quality services. So do
                                        you want to be covered quickly and safely in the media? Maketop will do it
                                        professionally and confidently!</p>
                                    <p style={{color: "#4f81bd", textDecoration: "underline"}}>How to buy TikTok
                                        views?</p>
                                    <p>When creating a rating on TikTok, several factors are taken into account, one of
                                        which is the number of views. TikTok has millions of active users a month! It
                                        means, that if you want to stand out, you will require making an effort. Buying
                                        views in TikTok will let you optimize your range and give it the impetus for
                                        development needed to stay ahead of the competition.</p>
                                    <p>We suggest high-quality video cheating on the market at affordable prices and
                                        have been providing TikTok users with high-quality and unique views for many
                                        years. Entrust your video rating to a respected provider of social marketing and
                                        PR benefits</p>
                                    <ul>
                                        <p>You need to:</p>
                                        <li>select any TikTok package and click Order</li>
                                        <li>specify your email address;</li>
                                        <li>choose a payment option.</li>
                                    </ul>
                                    <p>We are working with different payment services, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may
                                        even <span style={{fontWeight: "bold"}}>buy
                                        TikTok views with crypto.</span></p>
                                    <p>We use some of the biggest names in hip-hop, sports, and television. Building
                                        strong relationships and providing high-quality customer service, we stand out
                                        from the competition.</p>
                                    <p>Our patented system provides you with access to the views you want without
                                        compromising the integrity of your account or video.</p>
                                    <p>By buying more views for your videos, you gain great authority in the eyes of
                                        TikTok, search engines, and your colleagues. Let's face it: no one wants to
                                        watch a video that has very few views.</p>
                                    <p>We offer round-the-clock support and a convenient toolbar to track your
                                        progress!</p>
                                    <p style={{color: "#4f81bd"}}>Why do people buy Tik Tok views in Stream
                                        Promotion?</p>
                                    <p>Many people use our services. Why? It's simple - a group of professionals
                                        provides services at a lower price and fast processing of orders. </p>
                                    <p>Maketop has many satisfied customers who recommend us to their friends. It is a
                                        trustworthy service. Therefore, if your videos do not yet have the required
                                        quantity of views, choose one of the options, add it to your demands and reach a
                                        high position on TikTok.</p>
                                    <p>Streaming is a 100% real and reliable site for buying all kinds of cheating
                                        social networks. The service never requires confidential information such as
                                        profile passwords and personal data. All this makes you 100% secure.</p>
                                    <p>The most desirable advantage is cost reduction and high quality of service, which
                                        is the motto of our work. Another advantage of our followers is that we provide
                                        safe and trustworthy assistance with real human followers on all social
                                        networks.</p>
                                    <p>There is no need to bother about your purchased views disappearing over time. The
                                        accounts that will ensure your success on TikTok are genuine and will stay with
                                        your subscribers. Your videos will always be high attendance. Your subscribers
                                        are real users, and they can also subscribe to your posts and videos on
                                        Instagram or Facebook.</p>
                                </div>
                            </div>
                            <Modal store={ tikTokViewsStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyTiktokViews;
