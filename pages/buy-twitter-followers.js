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
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Twitter Followers - Normal Gradual Delivery - MakeTop",
            canonical: "https://maketop.io/buy-twitter-followers",
            description:
                "Buy Twitter followers with simple steps and normal-looking gradual delivery. Top followers from #1 MakeTop platform. Get results under 24H. Pay by crypto",
        },
    };
}

const BuyTwitterFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {twitterFollowersStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        twitterFollowersStore.getComment().then(data => setComment(data));
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
                            <PageTitle title={"Buy Twitter followers "}/>
                            <PageHead page="twitter-followers"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={twitterFollowersStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={twitterFollowersStore.system}
                                service={twitterFollowersStore.service}
                            />
                            {/*  <InfoBlock/>*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span
                                        style={{fontWeight: "bold"}}>buy Twitter Followers?</span> Buy followers of the
                                        highest
                                        quality and
                                        most acceptable cost and make your account popular.</p>
                                    <p>What is Twitter? Here begins the most interesting, because in our opinion, most
                                        companies do not know what a tweeter is for and how to use it.</p>
                                    <p>To understand this, you need to know the features of the tweeter and how it
                                        differs from other social networks.</p>
                                    <ul>
                                        <p>Twitter features:</p>
                                        <li>Information on Twitter about past, ongoing and planned events spreads faster
                                            than on any Internet site or social network. The speed of information
                                            dissemination today is Twitter ~ 5 minutes, Tapes ~ 1 hour, Radio ~ 30
                                            minutes, TV ~ 2 hours.
                                        </li>
                                        <li>Twitter messages are available to all Twitter users, which is (as of January
                                            1, 2011) over 200 million users! And this figure is growing at an
                                            unprecedented rate.
                                        </li>
                                        <li>Twitter is trendy. In promoting their company, in public relations, the
                                            tweeter is used only by those companies that follow current trends and keep
                                            up with the times.
                                        </li>
                                    </ul>
                                    <p>In this way, if you have a Twitter, you don't just follow some fashion, you can
                                        make your company, your product, or your message known instantly to millions of
                                        users.</p>
                                    <p style={{color: "#4f81bd"}}>How <span style={{textDecoration: "underline"}}>is a Twitter</span> set
                                        up?</p>
                                    <p>Any registered Twitter user can send messages with a maximum of 140 characters.
                                        Messages can contain any information (opinions, news, ideas, and events) and
                                        links to site pages (articles, news, jokes, reasonable information). Links to
                                        videos and images (photos, pictures, jokes, music) are prevalent</p>
                                    <p>An essential parameter of the popularity of a particular tweeter user is the
                                        number of followers and the number of retweets of his tweeter.</p>
                                    <ul>
                                        <li>Followers on Twitter are people who follow the messages of a particular
                                            tweeter user. If many followers follow your messages, it means that, what
                                            you write is interesting and valuable to them.
                                        </li>
                                        <li>Retweet - repeating a message Retweet - repeating a message. Retweet allows
                                            you to repeat your message by clicking on the special Retweet button or by
                                            inserting the abbreviation RT before the quoted message.
                                        </li>
                                    </ul>
                                    <p>If your message is quoted, then it is something interesting that should become
                                        known to others. The retweet system is a way to make a message known to friends
                                        (followers) and friends of friends.</p>
                                    <p>Twitter is a unique social network. Unlike other countries in the world of
                                        portals, the scope limits the number of post users. Each post must be no more
                                        than 140 characters. </p>
                                    <p>Despite this fact, it was Twitter that met frequently. With over 400 million
                                        visits every month, the social network is the perfect gathering place. On this
                                        occasion, such a service as cheating followers on Twitter caused a
                                        resonance.</p>
                                    <p style={{color: "#4f81bd"}}>How does this mechanism work?</p>
                                    <p>The subscriber cheat service is created on the operation of a simple
                                        psychological mechanism: we will always be interested in what is happening. That
                                        is, if you briefly describe everything,
                                        you <span style={{fontWeight: "bold"}}>get Twitter followers cheap:</span></p>
                                    <ul>
                                        <li>The more subscribers a page has, the more it is viewed.</li>
                                        <li>Users are more likely to be matched with an audience of many thousands or
                                            millions of people than for profiles whose number of subscribers disappears
                                            infrequently.
                                        </li>
                                    </ul>
                                    <p>It turns out that the more subscribers you have the more of them you will have.
                                        Since it is simply impossible to compete with the top pages on your own, the
                                        obvious way out is the help of outside specialists.</p>
                                    <p style={{color: "#4f81bd"}}>Cheat followers on Twitter</p>
                                    <p>Why have Twitter accounts if there is no one to read it? Is there anyone but you
                                        do not know how to find them? Cheating Twitter subscribers will allow you to
                                        quickly and effectively increase the audience of readers. All you need to start
                                        the natural subscription process is to pick up attractive content and order a
                                        Twitter follower boost online. </p>
                                    <p>Twitter Followers 2021-2022 significantly increases the share of your account
                                        compared to others. A simple and safe procedure from market experts will help
                                        you form a subscriber base, create a presentable account, and expand the reach
                                        of your target audience.</p>
                                    <p>Our company has brought together the best specialists in the field of promotion
                                        to provide profitable solutions for online businesses. We use proven and
                                        reliable tools and achieve our goals!</p>
                                    <p style={{color: "#4f81bd"}}><span
                                        style={{textDecoration: "underline"}}>How to buy Twitter followers</span> without
                                        risk?</p>
                                    <p>All social networks have a negative attitude towards any artificial increase in
                                        resources - cheating subscribers, likes, views, and comments. Twitter is no
                                        exception. The social network put forward a lot of requirements for activity in
                                        any account, among them the speed of cheating followers.</p>
                                    <p>Too high rate of subscribers can be perceived by Twitter as a threat to the
                                        security of other users and the social network itself. Violation of the
                                        established limits and requirements inevitably leads to retaliatory measures -
                                        restrictions or more global penalties.</p>
                                    <p>In order not to fall out of favor with robots that monitor anomalous activity in
                                        accounts, you should choose proven methods of promotion (such as following likes
                                        on Twitter) and reliable sites for promotion on social networks. Our platform
                                        guarantees the safe promotion of followers on Twitter. </p>
                                    <p>We use the author's software and select an individual rate of resource cheating
                                        for each account. Our specialists closely monitor compliance with the
                                        requirements and norms of social networks to protect your pages from bans and
                                        other restrictions. The presence of an impressive contact base allows each
                                        client of the service to buy Twitter subscribers in large numbers,
                                        inexpensively, and without risks.</p>
                                    <p>We provide only the highest quality services. No compromises - only the best
                                        promotion for our clients.</p>
                                    <p>We are working with different payment providers, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may even
                                        <span style={{fontWeight: "bold"}}> buy Twitter followers with crypto.</span>
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

export default BuyTwitterFollowers;
