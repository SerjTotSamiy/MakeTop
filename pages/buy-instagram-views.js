import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {useStores} from "../stores";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Views Guaranteed by MakeTop #1 since 2017",
            canonical: "https://maketop.io/buy-instagram-views",
            description:
                "Buy Instagram views from MakeTop by crypto or credit card. High quality and fast delivery with 100% guarantee. Choose best new views packages right now",
        },
    };
}

const BuyInstagramViews = (props) => {
    const [comment, setComment] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {viewsStore} = useStores();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        viewsStore.getComment().then(data => setComment(data));
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
            <div
                style={{
                    maxWidth: 1920,
                    width: "100%",
                    margin: "0 auto",
                    overflowX: "hidden",
                    background: "transparent",
                }}
            >
                <div className={styles.container}>
                    <Layer type="link">
                        <div className={`container`}>
                            <PageTitle title={"Buy Instagram likes  "}/>
                            <PageHead page="views"/>

                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>

                            <CardsList store={viewsStore} setModalOpen={setIsOpen}/>

                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={viewsStore.system}
                                service={viewsStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <b>buy Instagram views</b> ? Buy real views of the highest quality
                                        here and
                                        make your account popular.</p>
                                    <p>Now Instagram is in demand because there are many young people using it, and this
                                        is one of the largest platforms for promoting your page. Many people regularly
                                        publish their photos and short videos to collect as many likes as possible,
                                        which will allow them to get promoted in the shortest possible time.</p>
                                    <p>One of the most effective methods for PR content specifically on this network is
                                        just the same Instagram views and for most social networks, one of the most
                                        common methods to become more popular is to buy followers. </p>
                                    <p>On Instagram, a like can completely replace viewing and creates an opinion about
                                        you in front of other users;</p>
                                    <ul>
                                        <li>The more views you have on photos or videos, the more they will attract
                                            people to watch them, creating the so-called crowd effect.
                                        </li>
                                        <li>This type of advertising undoubtedly increases trust, as they become very
                                            aware of the quality of this content.
                                        </li>
                                        <li>You can get to the top only thanks to a large number of views.</li>
                                        <li>The quality of posts and views is an essential factor that creates the
                                            opinion of the social network about you and the thought of your potential
                                            subscribers, whose number will only increase over time due to the large
                                            number of materials viewed. Our service offers you to reach the top views on
                                            Instagram at no extra cost.
                                        </li>
                                    </ul>
                                    <p style={{color: "#4f81bd"}}>Why to buy ig views?</p>
                                    <p>The presence of high-quality materials in the Instagram account is one of the
                                        most important criteria for the high-quality promotion. Another factor is the
                                        presence of many views, which arouses the interest of the audience in your
                                        content. First, you need to understand what status you currently belong to and
                                        what will give you the most efficiency:</p>
                                    <ul>
                                        <p>Entrepreneurs:</p>
                                        <li>Rapid growth in sales and recognition;</li>
                                        <li>You will have a high level of trust;</li>
                                        <li>If you are a novice entrepreneur, then for you this method of promotion is
                                            an excellent start for the development of activities;
                                        </li>
                                        <p>For bloggers:</p>
                                        <li>Immediate and rapid growth in the popularity of your account;</li>
                                        <li>You can start earning from advertising;</li>
                                        <li>The number of subscribers and activity is increasing;</li>
                                        <p>Personal users:</p>
                                        <li>Cheating Instagram followers as a quick increase in popularity;</li>
                                        <li>Opportunity to earn;</li>
                                        <li>If you are single, Instagram views will make you more popular; it will be
                                            easier for you to find your other half.
                                        </li>
                                    </ul>
                                    <p>An important factor is the correct use of hashtags, which can also bring you to
                                        the TOP in views on Instagram.</p>
                                    <p style={{color: "#4f81bd"}}>How to buy views on Instagram?</p>
                                    <p>The most effective and high-quality ways to advertise on Instagram are paid
                                        methods. You save a significant amount of your time and achieve your goals
                                        faster.</p>
                                    <p>The like insta resource allows you to use paid features:</p>
                                    <ul>
                                        <li>To <b>get Instagram views</b> , you should go to our website;</li>
                                        <li>Next, you need to specify your hiring user and provide an email address;
                                        </li>
                                        <li>Pay for the task in any convenient way. After a few minutes, the funds will
                                            be already in the account, and views will be added to your photos or videos
                                            in 5-15 minutes.
                                        </li>
                                    </ul>
                                    <p>You can also buy ig video views cheaply and make your page promotion as easy and
                                        convenient as possible. Affordable pricing plans do not hit your advertising
                                        budget, which allows you to allocate financial resources rationally while
                                        getting a guaranteed result.</p>
                                    <p style={{color: "#4f81bd"}}>Why choose Maketop to buy Instagram views?</p>
                                    <p>The Maketop service will allow your publications to reach the top of Instagram
                                        views and, compared to its competitors, has some advantages:</p>
                                    <ul>
                                        <li>Innovative and very convenient design that allows even a beginner to
                                            understand all the intricacies of promotion;
                                        </li>
                                        <li>Anonymity and security. Properly configured cheat views will go unnoticed.
                                            This site is regularly used by media personalities and famous companies,
                                            without worrying about their reputation and data safety;
                                        </li>
                                        <li>You do not need to enter your data into our database;</li>
                                        <li>Support service is working promptly to help you resolve any issue related to
                                            the opration of the service;
                                        </li>
                                        <li>Regular updates and unique developments. The service does not stand still
                                            and constantly monitors new algorithms for the operation of social networks.
                                            Thanks to this, you can get views on Instagram as quickly as possible;
                                        </li>
                                        <li>Favorable and fair prices. You will spend a small part of your financial
                                            resources on promotion and get the best quality;
                                        </li>
                                        <li>The service works around the clock, which allows us to cheat views without
                                            stopping, 24 hours a day.
                                        </li>
                                    </ul>
                                    <p>You can endlessly list all the benefits of the service, but only the personal
                                        experience can give an objective assessment. Familiarize yourself with the
                                        convenient functionality and you, having spent only a few minutes of your time
                                        registering on the site.</p>
                                    <p>We work with different payment providers, including MasterCard, Visa, American
                                        Express, Maestro, American Express, Discover, and you may even <b> buy Instagram
                                            views with crypto.</b></p>
                                    <p style={{color: "#4f81bd"}}>Who will benefit from views on Instagram for a
                                        fee?</p>
                                    <p>Many people are skeptical about the artificial increase in views, that in their
                                        particular case, this method will not work. It is simply necessary for almost
                                        everyone:</p>
                                    <ul>
                                        <li>People who develop their accounts to gain popularity on Instagram. You only
                                            need to buy views on Instagram for videos or other materials.
                                        </li>
                                        <li>Owners and administrators of various organizations have a tough time getting
                                            the right amount of traffic to their accounts due to narrow specialization.
                                        </li>
                                        <li>Promotion by this method is vital for those who decide to run their private
                                            business on Instagram, because very often, published materials do not gain
                                            the proper amount of traffic, which is why there are no sales of goods or
                                            services.
                                        </li>
                                        <li>To reach the TOP of Instagram, you need to artificially attract views to all
                                            publications at once since this factor directly affects the place in the
                                            network rating of your content;
                                        </li>
                                        <li>Even if you only want to increase the activity on your page, then cheating
                                            views will be the most effective way to promote.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyInstagramViews;
