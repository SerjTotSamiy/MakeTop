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
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Facebook Page Likes - Only 2 Steps to Result - 100% Work",
            canonical: "https://maketop.io/buy-facebook-page-likes",
            description:
                "Buy Facebook page likes from MakeTop. Instant delivery, real auto likes and friendly 24/7 customer support. Try us today",
        },
    };
}

const BuyFacebookPageLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {facebookPageLikesStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        facebookPageLikesStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('facebookBg.webp') no-repeat  100%  ",
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
                    <Layer type="facebook">
                        <div className={`container`}>
                            <PageTitle title={"Buy Facebook likes"}/>
                            <PageHead page="facebook-likes"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={facebookPageLikesStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={facebookPageLikesStore.system}
                                service={facebookPageLikesStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <span
                                        style={{fontWeight: "bold"}}>buy Facebook Page Likes?</span> Buy real likes of
                                        the highest
                                        quality and
                                        most acceptable cost and make your account popular.</p>
                                    <p>Social networks are open communication with the audience, a sound signal, a means
                                        of communication, and self-expression. Millions of users view posts and like the
                                        posts they enjoy.</p>
                                    <p style={{color: "#4f81bd"}}>Why Facebook?</p>
                                    <p>Many of us are based not only on communication with people, we know by sight,
                                        communicate with people, make friends, but also to expand troubles, for example,
                                        those with which it is reasonable to communicate in the professional field,
                                        exchange experience, knowledge, and skills.</p>
                                    <p>Facebook allows you to increase your circle of acquaintances and enter a
                                        professional environment with comfort and without special requirements.
                                        Colleagues and people who are interested in certain areas of professional
                                        activity, are dedicated to discussing issues related to the economy, finance,
                                        work, leisure, sports, and other fascinating topics within profiles and
                                        pages.</p>
                                    <p>Facebook allows you to expand your horizons for business, create professional
                                        connections, start a pleasant conversation, and share your opinion on the issue
                                        under discussion. There is an unlimited number of topics for discussion within
                                        the page and profile. And this is only part of the internal professional freedom
                                        that Facebook gives.</p>
                                    <p>Creation of pages and groups containing information about the company and its
                                        active promotion on social networks. Networks are a form of feedback for your
                                        customers and partners. It is a powerful tool that allows you to capture a huge
                                        audience that you need at the moment.</p>
                                    <p>The number of users of the social networks Facebook every day only Growth, growth
                                        and growth continues. Despite this, I still quite often meet users in networks
                                        who are not sufficiently aware of the possibilities of Facebook and the methods
                                        of communication not only with participants and partners but also with each
                                        other. </p>
                                    <p style={{color: "#4f81bd"}}>What are likes for?</p>
                                    <p>Virtual popularity is what the owners obtain when they want to <span
                                        style={{fontWeight: "bold"}}>get
                                        Facebook Page
                                        Likes.</span> For the sake of fame in the social network, they are ready to wind
                                        up and
                                        acquire likes. For this, there are entire sites that are intermediaries between
                                        those who acquire likes and the performers themselves.</p>
                                    <p>Today, clicking on the "Like" button is no ordinary evaluation. It is a service
                                        for which there is supply and demand and hence the price.</p>
                                    <p>Interest in a huge number of likes can be not only for people but also companies
                                        that want to promote their products or services. It is a certain type of
                                        advertising that has become real with the active development of social networks.
                                        A product that gets a lot of likes on Facebook inspires customer confidence.
                                        Here, different "I like" are perceived as advice or a simple call to purchase.
                                        The more likes a page has, the higher it ranks in search engine results.</p>
                                    <p style={{color: "#4f81bd", textDecoration: "underline"}}>How to buy Facebook page
                                        likes?</p>
                                    <p>Facebook likes cheat – this service is suitable for boosting live likes from
                                        active users on any post (photo, video, or message) of a personal profile,
                                        group, or FanPage (public). Select a base from the drop-down menu and read a
                                        brief description of the base since one base can work exclusively for public
                                        page posts, the second for a group, and the third only for a personal profile;
                                        pay attention to this.</p>
                                    <p>Facebook likes are used to promote posts on Facebook, increasing the chances of
                                        making posts popular by getting into the TOP and recommended blocks. It is
                                        possible to get Facebook likes on posts only for open groups/profiles/pages
                                        (publics). Check your privacy settings before placing an order to promote a post
                                        on Facebook, and you will be able to promote Facebook successfully. Facebook
                                        likes 2021-2022 is the best choice for promoting a post.</p>
                                    <p style={{color: "#4f81bd"}}>Cheat likes on Facebook users for growth and
                                        development</p>
                                    <p>A like is an objective indicator of a user's liking and interest in a particular
                                        page. It determines the high demand for a specific product: Facebook public
                                        likes and Facebook page subscribers.</p>
                                    <p>After all, they say that the page is not only interesting in terms of content but
                                        also reasonable. The logic of the evaluation algorithm is quite clear: users
                                        subscribe to the page to follow the news and events, and they give likes when
                                        they like what they get.</p>
                                    <p>t makes the promotion of Facebook pages a profitable and modern solution. Company
                                        promotion experts understand the value of likes on a Facebook page and will also
                                        help you put it into practice. We offer practical and safe solutions for modern
                                        business and promotion.</p>
                                    <ul>
                                        <p>Buying Facebook likes is your choice if:</p>
                                        <li>You want to create an attractive "portrait" of the page</li>
                                        <li>Your goal is to increase sales and awareness of your idea, product, brand,
                                            company
                                        </li>
                                        <li>You seek to expand your audience reach, increase the activity of subscribers
                                            in the Facebook group
                                        </li>
                                        <li>You need to achieve high Facebook search rankings</li>
                                        <li>Your priority is a quick start without wasting time and resources</li>
                                        <li>Your task is to promote your Facebook page to generate additional income
                                            from advertising.
                                        </li>
                                    </ul>
                                    <p style={{color: "#4f81bd"}}>How to get likes on Facebook safely?</p>
                                    <p>The easiest and the safest way to get likes on Facebook is to trust the
                                        professionals and place an order on the site, indicating the number of likes you
                                        need and a link to the desired post of the public or personal profile. After
                                        placing an order, the service will react soon, and likes on Facebook comments
                                        will be added to the desired post. Previously, we did not have this service and
                                        received dozens of letters with the question: "How to get Facebook likes on a
                                        page or profile in your service?" But today users and entrepreneurs successfully
                                        use this service every day.</p>
                                    <p>We are working with different payment providers, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may
                                        even <span style={{fontWeight: "bold"}}>buy
                                        Facebook Page Likes with crypto.</span></p>
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

export default BuyFacebookPageLikes;
