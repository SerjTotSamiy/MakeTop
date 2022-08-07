import styles from "../styles/Home.module.sass";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import {Layer} from "../component/Layer/Layer";
import questionsStyle from "../component/Questions/Questions.module.sass";

import Questions from "../component/Questions/Questions";
import {frequentQuestions} from "../shared/questions";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

export async function getStaticProps() {
    return {
        props: {
            title: "MakeTop #1 Site For Your Social Media Accounts",
            canonical: "https://maketop.io",
            description:
                "MakeTop platform is recommended by more than 1M customers since 2017. Get social signals for your account or online business with instant delivery",
        },
    };
}

export default function Home(props) {
    const router = useRouter();
    const [readMore, setReadMore] = useState(false);
    return (
        <div className={styles.background}>
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
                    <Layer type="link">
                        <div className={`container`}>
                            <div className={styles.phone}>
                                <div style={{height: 700, margin: "0 auto"}}>
                                    <img
                                        src="/mainPhotoChat.svg"
                                        alt="Views from maketop.io"
                                        className={styles.chat}
                                    />
                                    <img
                                        src="/mainPhotoLike.svg"
                                        alt="Likes from maketop.io"
                                        className={styles.like}
                                    />
                                    <img
                                        src="/mainPhotoHeart.svg"
                                        alt="Followers from maketop.io"
                                        className={styles.heart}
                                    />
                                    <img
                                        src="/mainPhoto1.svg"
                                        alt="Comments from maketop.io"
                                        className={styles.photo1}
                                    />
                                    <img
                                        src="/mainPhoto2.svg"
                                        alt="Just maketop.io"
                                        className={styles.photo2}
                                    />
                                    <img
                                        src="/mainPhoto3.svg"
                                        alt="Use maketop.io"
                                        className={styles.photo3}
                                    />
                                    <img
                                        src="/mainPhoto4.svg"
                                        alt="Site maketop.io"
                                        className={styles.photo4}
                                    />
                                </div>
                                {/*<img src="/img.png" alt="" className={styles.titleImg} style={{position:"absolute",right:300,top:300}}/>*/}
                                <img src="https://iplogger.org/2rxjT7" alt=""/>
                                <div className={`${styles.contentTitle}`}>
                                    <div>
                                        <h1 className={`${styles.CheatAnd}`}>CHEAP AND </h1>
                                        <h1 className={`${styles.Promotion}`}>REAL PROMOTION</h1>
                                        <h1 className={`${styles.Accounts}`}>ACCOUNTS</h1>
                                        <h3>
                                            Where you can buy cheap likes for Instagram photos and
                                            videos.
                                            <br/> Buy real Insta likes for the most reasonable prices
                                            here and grow
                                            <br/> your Instagram popularity in a flash!
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`container ${styles.steps}`}>
                            <div className={styles.steps_box}>
                                <div className={styles.steps_title}>
                                    <p>SIMPLE STEPS TO ACTIVATE OUR FREE SERVICE</p>
                                    <span>
                    It is simple to get targeted, high quality, free Instagram
                    followers from our network! The process
                    <br/> takes only 2 minutes to activate a plan and here are
                    the steps:
                  </span>
                                </div>
                                <div className={`${styles.stepsItem}`}>
                                    <div className={styles.steps_item}>
                                        <img src="/step1.svg" alt="Step 1 to use MakeTop"/>
                                        <p className={styles.steps_item_title}>Step 1</p>
                                        <p className={styles.steps_item_text}>Register & Login</p>
                                    </div>
                                    <div className={styles.steps_item}>
                                        <img src="/step2.svg" alt="Step 2 to use MakeTop"/>
                                        <p className={styles.steps_item_title}>Step 2</p>
                                        <p className={styles.steps_item_text}>
                                            Activate the Free Plan
                                        </p>
                                    </div>
                                    <div className={styles.steps_item}>
                                        <img src="/step3.svg" alt="Step 3 to use MakeTop"/>
                                        <p className={styles.steps_item_title}>Step 3</p>
                                        <p className={styles.steps_item_text}>
                                            Follow Profiles of Interest
                                        </p>
                                    </div>
                                    <div className={styles.steps_item}>
                                        <img src="/step4.svg" alt="Step 4 to use MakeTop"/>
                                        <p className={styles.steps_item_title}>Step 4</p>
                                        <p className={styles.steps_item_text}>
                                            ~2 Minutes Later, You’re Done!
                                        </p>
                                    </div>
                                    <div className={styles.steps_item}>
                                        <img src="/step5.svg" alt="Step 5 to use MakeTop"/>
                                        <p className={styles.steps_item_title}>Step 5</p>
                                        <p className={styles.steps_item_text}>Get Free Fans!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className={infoStyles.info_title}>
                            Reasons You Should Focus On Gaining Free Instagram Followers
                        </p>
                        <div className={infoStyles.info_block}>
                            <div className={infoStyles.info_under}>
                                <p>
                                    Cheat and promotion accounts
                                </p>
                                <p>
                                    Buy likes, followers, and views for your Instagram account here. Make your profile
                                    go
                                    viral and get total attention from the Instagram community.
                                </p>

                            </div>
                            {readMore && (
                                <div>
                                    <p style={{color: "#4f81bd"}}>Simple Steps To Activate Our Free Service</p>
                                    <ul style={{listStyleType: "none"}}>
                                        <li>Step 1 Register & Login</li>
                                        <li>Step 2 Activate the Free Plan</li>
                                        <li>Step 3 Follow Profiles of Interest</li>
                                        <li>Step 4 ~2 Minutes Later, You're Done!</li>
                                        <li>Step 5 Get Free Fans!</li>
                                    </ul>
                                    <p style={{color: "#4f81bd"}}>FAQ</p>
                                    <p style={{color: "#4f81bd"}}>Does Instagram know when I buy
                                        likes?</p>
                                    <p>No, Instagram has no method of knowing the difference between natural likes and
                                        those you purchase. To the platform, all of these likes are legitimate and
                                        another account?</p>
                                    <p style={{color: "#4f81bd"}}>How to buy likes on Instagram from
                                        permanent. As such, there is no risk in operating our assistance.</p>
                                    <p>You have to present us with a few accounts that have likes you think will like
                                        your content. Then we target those specific demographics. Select the location
                                        and demographic of your desired likes and the hashtags they search for
                                        regularly, and we will do everything else to ensure you get your likes and
                                        engagement from the right place. Of course, you can manually find new potential
                                        likes by searching for a location or hashtag and then seeing which accounts are
                                        suitable and relevant. This method is simple but slow, making it challenging to
                                        achieve long-term development.</p>
                                    <p style={{color: "#4f81bd"}}>Do you require my password?</p>
                                    <p>We do not request your Instagram password or require your login details.</p>
                                    <p style={{color: "#4f81bd"}}>How much will it cost?</p>
                                    <p>On our site, you can find prices per post package or subscription. </p>
                                    <p style={{color: "#4f81bd"}}>What is the delivery time?</p>
                                    <p>We usually complete each service shortly after your order has been confirmed. Our
                                        team of specialists will guarantee that your order is delivered on time. You
                                        often get your first followers or likes soon after successful verification.</p>
                                    <p style={{color: "#4f81bd"}}>Are bought Instagram likes real?</p>
                                    <p><b>These likes are from 100 percent real users</b>, which means the Instagram
                                        algorithm
                                        will improve the position of your posts when people search for related
                                        hashtags.</p>
                                    <p style={{color: "#4f81bd"}}>Can I lose the likes I bought?</p>
                                    <p>You can unless Instagram itself changes the number of likes on your posts.</p>
                                    <p style={{color: "#4f81bd"}}>Reasons You Should Focus On Gaining Free Instagram
                                        Followers</p>
                                    <p>Now Instagram is actively gaining popularity. It is not an ordinary social
                                        network where anyone can share photos. It is a tool that can bring you
                                        significant financial returns. To start making good money on this well-known
                                        social network, you will need to promote your brand. The easiest and most
                                        reliable way is a promotion on Instagram. It is an Instagram promotion that will
                                        help you promote your account to make a financial profit, which is very
                                        convenient and practical.</p>
                                    <p>It is essential not to forget that a beautiful idea is in such a moment to
                                        increase all the indicators of Instagram. Only by hitting all the targets will
                                        you break through the thick wall of popularity and get the exact level as many
                                        celebrities. </p>
                                    <p>With us, you may quickly buy the likes you need for your Instagram account
                                        without registration. Instagram loves when a user enjoys popularity with the
                                        public. You can start your journey to the top by increasing this indicator, as
                                        it is considered the most basic and most significant. </p>
                                    <p>Any person visiting your page for the first time will look at the number of
                                        likes. It shows the number of people who recognize your creativity and directly
                                        indicates popularity. Instagram followers are needed because they follow your
                                        page, like photos, comment, and view your stories. A significant number of
                                        followers plus many likes on Instagram is a 100% sure and working way to attract
                                        new advertisers.</p>
                                    <p>Cheat views are beneficial because this is an essential indicator if you run your
                                        own business, and the main task is to sell or provide services. </p>
                                    <p>Comments prove to new subscribers that your services or products are high quality
                                        and encourage people to buy more. </p>
                                    <p>Advertisers often ask to see Instagram view statistics. This indicator can be the
                                        last obstacle between you and money. The views must remain approximately at the
                                        same level as your account's overall activity. On Instagram, you can increase
                                        any performance.</p>
                                </div>

                            )}
                            <a
                                style={{color: "#1281FF", textDecoration: "underline"}}
                                onClick={() => setReadMore(!readMore)}
                            >
                                {readMore ? "Close" : "Read more"}
                            </a>
                        </div>

                        <div className={questionsStyle.questions}>
                            <p className={questionsStyle.questions_title}>
                                FREQUENTLY ASKED QUESTIONS
                            </p>
                            <span className={questionsStyle.questions_text}>
                Do you have questions about our service? Here are our most
                frequently asked questions:
              </span>
                            <Questions questions={frequentQuestions}/>
                        </div>
                        <div className={questionsStyle.questions}>
                            <p className={questionsStyle.questions_title}>
                                LATEST BLOG POSTS
                            </p>
                        </div>
                        <div className={`container ${styles.blogPost_container}`}>
                            <div
                                className={styles.blogPost_mainPost}
                                style={{cursor: "pointer"}}
                                onClick={() =>
                                    router.push(
                                        `/blog/blog1`,
                                        "/blog/why-your-business-account-on-instagram-needs-a-professional-bio"
                                    )
                                }
                            >
                                <div className={styles.blogPost_date}>7th February 2022</div>
                                <img src="/mainBlogPost.webp" alt=""/>
                                <p>
                                    Why Your Business Account On Instagram Needs A Professional
                                    Bio
                                </p>
                            </div>
                            <div className={styles.secondaryPosts}>
                                <div
                                    className={styles.blogPost_post}
                                    style={{cursor: "pointer"}}
                                    onClick={() =>
                                        router.push(
                                            `/blog/blog1`,
                                            "/blog/why-your-business-account-on-instagram-needs-a-professional-bio"
                                        )
                                    }
                                >
                                    <div className={styles.blogPost_date}>7th February 2022</div>
                                    <img src="/blogPost1.webp" alt=""/>
                                    <p>
                                        Why Your Business Account On Instagram Needs A Professional
                                        Bio
                                    </p>
                                </div>
                                <div
                                    className={styles.blogPost_post}
                                    style={{cursor: "pointer"}}
                                    onClick={() =>
                                        router.push(
                                            `/blog/blog1`,
                                            "/blog/why-your-business-account-on-instagram-needs-a-professional-bio"
                                        )
                                    }
                                >
                                    <div className={styles.blogPost_date}>7th February 2022</div>
                                    <img src="/blogPost2.webp" alt=""/>
                                    <p>
                                        Why Your Business Account On Instagram Needs A Professional
                                        Bio
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
}
