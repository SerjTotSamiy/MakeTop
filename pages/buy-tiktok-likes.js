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
            title: "Buy TikTok Likes - 100% Real Looking - MakeTop",
            canonical: "https://maketop.io/buy-tiktok-likes",
            description:
                "Buy TikTok likes from #1 MakeTop site. Only 2 steps: just choose our package and pay by crypto. Fast safe delivery. No password is required",
        },
    };
}

const BuyTiktokLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {tikTokLikesStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        tikTokLikesStore.getComment().then(data => setComment(data));
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
                            <PageTitle title={"Buy TikTok likes "}/>
                            <PageHead page="tiktok-likes"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={tikTokLikesStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={tikTokLikesStore.system}
                                service={tikTokLikesStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span style={{fontWeight: "bold"}}>buy TikTok likes?</span> Buy
                                        likes of the highest quality and
                                        most
                                        acceptable cost and make your channel popular.</p>
                                    <p>What is TikTok? In fact, it is the quintessence of Vine, Instagram Stories,
                                        Snapchat, and other services focused on the short video format. On TikTok, users
                                        post small 15 seconds long vertical videos and get millions of views. They are
                                        music videos, comedy sketches, dances, reactions to trends, and other
                                        activities.</p>
                                    <p>Many consider this social network to be just another entertainment for teenagers,
                                        where they grimace at the camera and hold various flash mobs. It is partly true,
                                        but with the growth of the platform's audience, celebrities and advertisers have
                                        become interested in it, and well-known bloggers now regard TikTok as another
                                        distribution channel.</p>
                                    <p style={{color: "#4f81bd"}}>Why is TikTok so popular?</p>
                                    <p>Initially, the Chinese application was a service for editing and publishing short
                                        videos to which you could add music. The social network gained popularity
                                        outside of China after the takeover of the musical.ly app, similar in function,
                                        whose large user base automatically became the TikTok audience. TikTok has
                                        become popular in <span style={{fontWeight: "bold"}}>Canada, the USA, the UK, and Malaysia.</span>
                                    </p>
                                    <p>TikTok carved out a mini-video niche by capturing the audience of the closed Vine
                                        and taking a share of Instagram* Stories. The format of short videos with rich
                                        editing options, as they say, shot. For example, in the United States at the end
                                        of 2018, the social network surpassed such giants as Facebook, YouTube, and
                                        Instagram in terms of the number of downloads.</p>
                                    <p style={{color: "#4f81bd"}}>How to use TikTok?</p>
                                    <p>The platform is very similar to its counterparts, and if you've ever used
                                        Snapchat or Instagram Stories, then it's not difficult to figure out the
                                        functionality. However, there are still some differences and nuances in
                                        TikTok.</p>
                                    <p style={{color: "#4f81bd"}}>Ways to promote</p>
                                    <p>TikTok, like many other social networks, has an advertising account called TikTok
                                        Ads. It offers several official ways to advertise:</p>
                                    <ul>
                                        <li>TopView - banners that the user sees when entering the social network;</li>
                                        <li>Brand Takeover - short videos that the user sees periodically;</li>
                                        <li>In-Feed Ads - native ads that pop up in the feed;</li>
                                        <li>Branded Effects - promotion using augmented reality: masks, stickers;</li>
                                        <li>Branded Hashtag Challenge - branded challenges.</li>
                                    </ul>
                                    <p>However, a business can use other tools to work on TikTok, for example,
                                        collaborations with bloggers. Or a company can create an account and shoot
                                        videos regularly. It is better if they are original and slightly frivolous. The
                                        chances of success increase when the videos follow the trends and include
                                        popular hashtags.</p>
                                    <p>Making videos for TikTok is not as easy as it sounds. One creative will not be
                                        enough: you will have to develop a full-fledged promotion strategy. It should
                                        determine in advance the goals and objectives, characteristics of the target
                                        audience, key performance indicators, and their desired values.</p>
                                    <p style={{color: "#4f81bd"}}>And who can't do without TikTok?</p>
                                    <p>But still, TikTok is best suited for small and medium-sized businesses that work
                                        with retail clients - these are the companies that are the easiest to find the
                                        right audience there. In addition, small and medium-sized businesses have to
                                        work with limited budgets, and promotion on TikTok cannot be very expensive -
                                        if, of course, company employees have creative ideas and enough free time.</p>
                                    <p>If we talk about areas, then videos on the topics of creativity, cooking,
                                        fashion, beauty, and personal care are most organically watched on TikTok - such
                                        videos are generally in demand on the platform. It is largely due to the gender
                                        composition of the audience: 54% of app users are women.</p>
                                    <p><span style={{fontWeight: "bold"}}>Getting likes on TikTok</span> is the fastest,
                                        most efficient, and most
                                        effective method
                                        to increase the chances of getting into recommendations and promoting your
                                        account. Millions will know about you! Take advantage of this. A large number of
                                        likes and views affect your further promotion and promotion.</p>
                                    <p>TOP tiktokers do not hesitate to order a cheat on their new videos that is why
                                        you notice them so often in your feed. Getting likes on TikTok and fans directly
                                        affects your reputation in the TikTok project, post new posts; order likes, and
                                        gets explosive, increased audience coverage! You can buy likes on TikTok right
                                        now, on our website from real people quickly and easily!</p>
                                    <p>Many celebrities of TOP social networks have successfully started their careers
                                        using our service. How to wind up TikTok? Why do we need TikTok likes
                                        2021-2022?</p>
                                    <p>Buying likes on TikTok is the easiest, safest, fastest, and most effective way to
                                        promote your account to increase its popularity. Stand out from the general
                                        stream and become famous at lightning speed, take TOP places in the ranking.
                                        Account owners with a large number of likes and fans have the opportunity to
                                        earn on advertising. The more likes and fans, the more expensive it is. Take
                                        advantage of this opportunity!</p>
                                    <p><span style={{textDecoration: "underline"}}>How to buy TikTok likes</span>- who
                                        needs it and why?</p>
                                    <p>TikTok likes are an indicator of video popularity. They allow videos to be more
                                        noticeable and largely determine the attitude of other users to your profile and
                                        video content. In social networks, the rule works perfectly: where everyone is,
                                        there I am. Viewers enjoy watching videos that have already received thousands
                                        of likes from other users. At the same time, videos with a small number of views
                                        and likes rarely attract the attention of the audience.</p>
                                    <p>Likes TikTok and TikTok views are like vitamins for the body. Without them, the
                                        profile will cease to perform its functions and eventually die. At the same
                                        time, many likes will allow the account to develop and flourish, to bring
                                        "fruits" in the form of growing income to its owner.</p>
                                    <ul>
                                        <p>Boosting likes on TikTok will help to attract the attention of: </p>
                                        <li>a wide audience of users;</li>
                                        <li>advertisers;</li>
                                        <li>the social network itself, which with great pleasure independently
                                            advertises a video that has received a lot of likes.
                                        </li>
                                    </ul>
                                    <p>A promoted TikTok account will allow you to earn good money on advertising. The
                                        popularity of an account is determined not only by the number of followers but
                                        also by the number of likes. A profile that has 10,000 followers but 3-5 likes
                                        on a video is unlikely to attract an advertiser's attention. A comprehensive
                                        promotion is required - cheating on TikTok likes and subscribers.</p>
                                    <ul>
                                        <p>Who get likes on a TikTok video:</p>
                                        <li>bloggers;</li>
                                        <li>owners of a small, medium, and large businesses;</li>
                                        <li>entrepreneurial people who want to make money on advertising;</li>
                                        <li>ambitious users who want to promote their project or their name.</li>
                                    </ul>
                                    <p>We are working with different payment providers, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may even
                                        <span style={{fontWeight: "bold"}}>buy TikTok likes with crypto.</span>
                                    </p>
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

export default BuyTiktokLikes;
