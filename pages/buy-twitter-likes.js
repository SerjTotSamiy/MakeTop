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
            title: "Buy Twitter Likes - Normal Gradual Delivery - MakeTop",
            canonical: "https://maketop.io/buy-twitter-likes",
            description:
                "Buy Twitter likes with simple steps and normal-looking gradual delivery. Top likes from #1 MakeTop platform. Get results under 24H. Pay by crypto",
        },
    };
}

const BuyTwitterLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {twitterPostLikesStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        twitterPostLikesStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('/twitterBg.webp') no-repeat 100%  ",
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
                    <Layer type="twitter">
                        <div className={`container`}>
                            <PageTitle title={"Buy Twitter likes"}/>
                            <PageHead page="twitter-post-likes"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={twitterPostLikesStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={twitterPostLikesStore.system}
                                service={twitterPostLikesStore.service}
                            />
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where to <span style={{fontWeight: "bold"}}>buy Twitter likes?</span> Here you
                                        can buy real likes at
                                        reasonable prices and
                                        get the best help you need to be in trends.</p>
                                    <p>Twitter is one of the most popular social networks in our world. A page in it is
                                        an excellent opportunity to promote your business, ideas, and creativity.
                                        Accounts in this network are created by all well-known companies, artists, and
                                        artists. In the Internet age, interaction with the audience reaches a new
                                        level.</p>
                                    <p>However, what's the point of tweets if no one sees them? How to attract the right
                                        audience? </p>
                                    <p>The answer is simple - promote the page. One of the elements of promotion is to
                                        get likes on posts.</p>
                                    <p style={{color: "#4f81bd"}}>Why do you need to get likes on Twitter?</p>
                                    <p>First of all, getting likes on Twitter is needed so that potential customers or
                                        fans of creativity can find the page. As you know, pages with many followers,
                                        views, and likes rank higher in search engines.</p>
                                    <p>A new page always scares customers. They feel like they are deceived. At the same
                                        time, a page with many followers and likes is credible. People begin to think
                                        that the company has many satisfied regular customers, which means that the
                                        product or service is of high quality.</p>
                                    <p>It is always challenging for a new page to compete with giant sisters. These
                                        pages have been growing in popularity for years, so how can you catch up and
                                        overtake them in a couple of days? The only option is to buy likes. In addition,
                                        when the page reaches the top, people will find it themselves and follow it.</p>
                                    <p>Buying likes on Twitter will help to attract the target audience. Over time, this
                                        page will be seen by people who are interested in its content and looking for
                                        something similar. Our company winds up likes within the target group, with the
                                        right interests, the required age, and geographic location, and
                                        you <span style={{fontWeight: "bold"}}>get Twitter
                                        likes cheap.</span></p>
                                    <p>Buying likes will help save on advertising. The page will promote itself. No
                                        additional advertising is needed, and therefore, this will help reduce costs.
                                        People who want to buy your product will find you.</p>
                                    <ul>
                                        <p style={{color: "#4f81bd"}}>Who needs to buy likes on Twitter?</p>
                                        <p>Anyone who wants to promote a page on Twitter needs likes:</p>
                                        <li>Entrepreneurs. First of all, it concerns business. Likes will allow the
                                            company page to reach the first lines in search engines, which increases the
                                            number of potential customers and, as a result, sales.
                                        </li>
                                        <li>Artists, painters, poets. For creative people, likes will allow promoting
                                            your poems, paintings, and songs.
                                        </li>
                                        <li>Social movements. A Twitter page can be created by social movements and
                                            organizations. It will help to find supporters and bring their thoughts to
                                            the masses.
                                        </li>
                                        <li>Bloggers. In the modern Internet space, blogs are beginning to occupy an
                                            increasing place.
                                        </li>
                                        <p style={{color: "#4f81bd"}}>How to buy Twitter likes?</p>
                                        <p>The promotion of Twitter by our specialists is an opportunity for new and
                                            existing accounts to become more popular and rise higher in the overall
                                            ranking. No special knowledge is needed - just select the desired service
                                            package, pay for it, and almost immediately see an increase in likes to
                                            tweets.</p>
                                        <p>We have a lot of advantages: </p>
                                        <li>target orientation - likes are put from real users;</li>
                                        <li>accessibility - you choose how many likes you need; and also plan your
                                            budget;
                                        </li>
                                        <li>speed - the first likes appear immediately.</li>
                                    </ul>
                                    <p>We work with different payment providers, including MasterCard, Visa, American
                                        Express, Maestro, and Discover, and you may even <span>buy Twitter likes with
                                        crypto.</span></p>
                                </div>
                            </div>
                            <Modal store={ twitterPostLikesStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyTwitterLikes;
