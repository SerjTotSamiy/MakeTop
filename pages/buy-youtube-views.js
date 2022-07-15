import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Head from "next/head";
import {useRouter} from "next/router";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import {ModalComponent} from "../component/Modal/ModalComponent";
import CardsList from "../component/CardsList/CardsList";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"
import Modal from "../component/Modal/Modal";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy YouTube Views with 100% Guarantee - MakeTop",
            canonical: "https://maketop.io/buy-youtube-views",
            description:
                "Buy YouTube views from MakeTop for your video or profile. Get unlimited high-quality packages with payment by crypto or credit card. No password and risk",
        },
    };
}

const BuyYoutubeViews = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {youTubeViewsStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        youTubeViewsStore.getComment().then(data => setComment(data));
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
                            <PageTitle title={"Buy YouTube views "}/>
                            <PageHead page="youtube-views"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={youTubeViewsStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={youTubeViewsStore.system}
                                service={youTubeViewsStore.service}
                            />
                            {/*      <InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span style={{fontWeight: "bold"}}> buy YouTube Views</span>? Buy
                                        views of the highest quality and most
                                        acceptable cost and make your channel popular.</p>
                                    <p>YouTube is an Internet platform created in the USA and allows users to upload
                                        their videos and watch others' videos, leave comments, rate, subscribe to
                                        channels, and share videos with friends on various sites and social
                                        networks.</p>
                                    <p>The range is considerably differs from entertaining to earning opportunities. And
                                        for some, maintaining a channel brings money. In addition, you can run and
                                        listen to broadcasts in real-time.</p>
                                    <ul>
                                        <li>Each person uploads ~30,000 videos;</li>
                                        <li>Every day people watch 1 billion hours of video;</li>
                                        <li>90% of TV shows are people aged 18 to 44.</li>
                                    </ul>
                                    <p>The first video, which lasted 18 seconds, marked the beginning of the future and
                                        is now a very famous YouTube platform. In two months, starting from scratch, he
                                        gained a stable position on the Internet. Work on YouTube continues and is still
                                        improving the functionality of the platform. </p>
                                    <p>Watching free videos is provided by the company. These expenses are repaid by it
                                        through advertising. The introduction of advertising was carried out by the
                                        company's management in 2008. The three students, who were at the head of
                                        YouTube, were replaced by Kamangar, with the help of which YouTube was taken to
                                        a new level.</p>
                                    <p>An interesting fact is no one could think of creating a service where you can use
                                        free videos before students - programmers. It is a pity that they are not now in
                                        charge of it. Registration for the benefit is complimentary for all users. To
                                        register your profile, you need to have an email on Google. </p>
                                    <p>After that, you can access all YouTube services. You can manage your channel,
                                        leave comments, and add videos. It is not allowed to post material on the
                                        platform that intimidates the user, such as a pornographic videotape; a plot
                                        that humiliates a child; shocking videos, discriminatory, inciting to dangerous
                                        actions, spam, and videos with a prohibition of use.</p>
                                    <p style={{color: "#4f81bd"}}>Buy views on Youtube</p>
                                    <p>More than 1 billion users visit YouTube every month. Their goals are different,
                                        but they do not stop being potential customers or subscribers. But do they see
                                        you, your company, your idea, your product? It depends on many factors. And the
                                        number of video views is one of the main ones. That is why the « <span
                                            style={{fontWeight: "bold"}}>get 1000 youtube
                                        views</span>" service is so prevalent on our service. Bright and spectacular
                                        videotapes, shot with taste, invariably attract the attention of thousands of
                                        users, winding up views one after another. </p>
                                    <p>Watching YouTube in 2021-2022 remains one of the most popular ways to spend time.
                                        YouTube promotion is growing exponentially and helps to achieve goals. But
                                        getting into the rating without an absolute sensation is not easy.</p>
                                    <p style={{color: "#4f81bd"}}>How to be the first in Youtube search results?</p>
                                    <p>If your channel is not popular enough and you want to attract a new target
                                        audience, then upload a video clip, think over the key queries you need
                                        promotion. Indicate them in tags, and write a unique description for the video
                                        using the main queries you need to promote.</p>
                                    <p>Immediately after downloading, buy YouTube views, likes, dislikes, reposts, and
                                        comments. Buying subscribers on YouTube - the popularity of the video at the
                                        start will immediately push it as high as possible in the search results ranking
                                        for promoted queries, after which you will receive thousands of targeted views
                                        from real users.</p>
                                    <p style={{color: "#4f81bd"}}>Live, real views with YouTube hold</p>
                                    <p>What is YouTube Hold Views? Retention is a measure of audience engagement while
                                        protecting your tape. The higher the view retention, the easier it is to promote
                                        the video, bring it to the top for keywords, and get into the recommended
                                        videos.</p>
                                    <p>YouTube views with retention will help you quickly and easily promote any video
                                        and make it viral, bring it to the TOP of search,
                                        and <span style={{fontWeight: "bold"}}>get youtube views</span> from
                                        real users who found your video in YouTube search or Yandex and Google search.
                                        You can buy YouTube views with retention of 10 minutes or more right now from
                                        live, real users. YouTube views cheat 2021-2022 will help to increase your
                                        audience exponentially.</p>
                                    <ul>
                                        <p>Cheat views on YouTube are your choice if:</p>
                                        <li>You stand looking to make "quick" sales.</li>
                                        <li>Your goal is TOP places in YouTube ratings.</li>
                                        <li>It is in your interest to present a product or service to the mark audience
                                            quickly.
                                        </li>
                                        <li>You are trying to reach a large number of users.</li>
                                        <li>You want to attract advertisers from the business environment.</li>
                                    </ul>
                                    <p style={{color: "#4f81bd"}}>How to buy YouTube views?</p>
                                    <p>Modern social networks and Internet platforms open up endless possibilities for
                                        users regarding the search for information, communication, and earnings. YouTube
                                        is a unique Internet platform of its kind, where each user can freely express
                                        thoughts, ideas and develop their own business, projects, and directions.</p>
                                    <p>Many successful people and businesses in the market owe their success to YouTube.
                                        The platform works as simply and clearly, as possible - users upload new videos
                                        to their channel, which gain tens, hundreds, thousands, or millions of
                                        sights.</p>
                                    <p>Thus, channel owners increase the number of visitors to their own sites and
                                        expand the number of charges, hence the amount of profit. At the same time,
                                        every second channel owner thinks about how to improve views on YouTube, YouTube
                                        favorites, and the channel's popularity.</p>
                                    <p>By becoming a client of our service, you can be convinced of its effectiveness. A
                                        completely new channel or a channel that has not been working effectively for a
                                        long time will be able to get cheap YouTube views.</p>
                                    <p>We are working with different payment providers, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may even
                                        <span style={{fontWeight: 'bold'}}> buy YouTube views with crypto.</span>
                                    </p>
                                </div>
                            </div>
                            <Modal store={ youTubeViewsStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyYoutubeViews;
