import React, {useContext, useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import youtubeStyles from "../styles/BuyYoutube.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";

import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import {MeContext} from "./_app";

import ReviewsGenerator from "../component/ReviewsGenerator";
import OwnComment from "../component/OwnComment";
import ModalReview from "../component/Modal/ModalReview";
import Head from "next/head";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy TikTok Followers - 100% Real Looking - MakeTop",
            canonical: "https://maketop.io/buy-tiktok-followers",
            description:
                "Buy TikTok followers from #1 MakeTop site. Only 2 steps: choose our packages and pay by crypto or credit card. No password and personal information",
        },
    };
}

const BuyTiktokFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {tikTokFollowersStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const [readTextMore, setReadTextMore] = useState(false);
    const router = useRouter();
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        tikTokFollowersStore.getComment().then(data => setComment(data));
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
                            <PageTitle title={"Buy TikTok followers  "}/>
                            <PageHead page="tiktok-followers"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={tikTokFollowersStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={tikTokFollowersStore.system}
                                service={tikTokFollowersStore.service}
                            />
                            {/*              <InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span style={{fontWeight: "bold"}}>buy TikTok Followers?</span> Buy
                                        followers of the highest
                                        quality and most
                                        acceptable cost and make your channel popular.</p>
                                    <p>TikTok is a social network that specializes in short videos from 15 to 60
                                        seconds. It is manageable to make such clips yourself: a simple video editor
                                        with music and effects. Also, in the application, you can put likes, exchange
                                        messages, and conduct live broadcasts. As a result, today it has become a place
                                        for self-expression and positive emotions.</p>
                                    <p>TikTok makes it easy for videos to become world-famous, and it's all in the
                                        dedicated recommendations section. The principle of its operation is based on
                                        algorithms: the application offers the user content based on his previous
                                        actions. Getting a video into recommendations means getting more views and
                                        subscribers.</p>
                                    <p>In addition, trends play a significant role in TikTok. They can be based on
                                        challenges, visual effects, music, dancing, and news. It works like this: a
                                        blogger records a video, and other users repeat it, adding a little to the
                                        idea.</p>
                                    <p style={{color: "#4f81bd"}}>What does the user who ordered the cheat receive?</p>
                                    <p>He had several benefits at once. Not only is it getting to the top faster, but
                                        the content is getting more visible and attractive, which is quite noticeable.
                                        Of course, the profit grows due to the development of the account.</p>
                                    <p>Usually, there are several options for cheating. Each package has its features
                                        and characteristics. It is necessary to choose the appropriate setting for
                                        events.</p>
                                    <p>At the same time, it is essential that paid cheating takes place in a complex
                                        because the algorithm collects many different indicators: the number of new
                                        subscribers and likes, the increase in views, reposts in other scientific
                                        networks, and even likes in comments. Therefore, it is necessary to replace the
                                        cheating of some parameters to seem very believable.</p>
                                    <p>To win a new platform for posting content, you should know how to gain an
                                        audience quickly with live users. Just like on Instagram, you can effortlessly
                                        buy several thousand followers if you follow all the rules and recommendations
                                        from experienced bloggers. However, you must remember that entertainment videos
                                        must also follow community rules, or the account will face an immediate ban.</p>
                                    <p>Growing up on social media is difficult. Despite this, many still think it is as
                                        easy as shelling pears; money fall from the sky. At first, every blogger finds
                                        it challenging to work. They earn absolutely nothing because they have no
                                        audience. Under such circumstances, it is difficult to reach a higher level.</p>
                                    <p>The only way to become a better-known blogger and succeed is to work hard and
                                        invest in your business. TikTok is no exception. Those who have succeeded work
                                        hard and invest in their blog.</p>
                                    <p>One of the methods to develop in any social network, including TikTok, is to buy
                                        subscribers. You must be especially careful with it, as there is a huge risk of
                                        falling under sanctions. Nevertheless, if you do everything right, there will be
                                        no problems.</p>
                                    <p style={{color: "#4f81bd", textDecoration: "underline"}}>How to buy TikTok
                                        followers?</p>
                                    <p>If you want to understand how to buy inexpensive TikTok followers, please,
                                        contact us. Specialists in the shortest possible time will achieve the desired
                                        result. They will help you to wind up subscribers so that no one suspects
                                        anything and you do not get banned. You get the result instantly.</p>
                                    <p>On the website of the service, you can find all the prices. Several packages are
                                        offered to the attention of customers, among which you can choose the best
                                        option, taking into account your wishes and financial capabilities.</p>
                                    <p>Of course, TikTok does not pay for the number of followers. However, bloggers
                                        start earning only when they have a specific audience size. At a minimum,
                                        monetization of live broadcasts becomes available from 1000 subscribers. It is
                                        one of the methods to make money on TikTok. Another most popular method of
                                        earning money in cooperation with some brands. That is, you are paid for
                                        advertising a particular product.</p>
                                    <p>For promotion on TikTok to bring the maximum benefit, you need to put in a lot of
                                        effort. It is not enough to buy followers or likes. It is necessary to offer the
                                        viewer certain catchy content. In this case, the cheated subscribers will stay
                                        with you for a long time. Before you order SMM for money, you should prepare a
                                        profile:</p>
                                    <ul>
                                        <li>publish at least 3-5 impressive videos;</li>
                                        <li>independently invite followers to subscribe;</li>
                                        <li>make a content plan and post new videos regularly.</li>
                                    </ul>
                                    <p>You can order online promotions on the social network right from the comfort of
                                        your home. The application works quickly and efficiently, without failures and
                                        delays.</p>
                                    <p style={{color: "#4f81bd"}}>Why is it worth contacting our company to <span
                                        style={{textDecoration: "underline"}}>get TikTok followers?</span></p>
                                    <p>To organize a high-quality cheat of followers in TikTok, you should choose the
                                        site number. We manage online promotions. The program has many advantages:</p>
                                    <ul>
                                        <li>affordable price for SMM services;</li>
                                        <li>complex promotion in TikTok;</li>
                                        <li>guarantees;</li>
                                        <li>live real audience;</li>
                                        <li>cheating from a phone or computer;</li>
                                        <li>safe promotion of TikTok;</li>
                                        <li>affiliate program;</li>
                                        <li>payment in a convenient way.</li>
                                        <p>We work with various payment providers, including MasterCard, Visa, American
                                            Express, Maestro, American Express, and Discover, and you may
                                            actually <span style={{fontWeight: "bold"}}>buy
                                            TikTok followers with crypto.</span></p>
                                        <p>This youth platform is accumulating more and more attention, and businesses
                                            are moving their advertising to TikTok. Thus, all of the above tips are
                                            appropriate for such areas of activity:</p>
                                        <p>restaurant industry - you may advertise a delicious menu or an unusual
                                            interior of an institution;</p>
                                        <p>media personality - if you follow all the algorithms, you can effortlessly
                                            become even more famous in new circles;</p>
                                        <p>small startups and business projects.</p>
                                    </ul>
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

export default BuyTiktokFollowers;
