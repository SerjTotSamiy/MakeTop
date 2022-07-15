import React, {useContext, useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import Head from "next/head";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import PageHead from "../component/PageHead/PageHead";
import Modal from "../component/Modal/Modal";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy VK Post Likes - 2 Steps to Result - 100% Work - MakeTop",
            canonical: "https://maketop.io/buy-vk-post-likes",
            description:
                "Buy VK post likes is a good way to get popular on social media. Easy payment by crypto or card. High-quality likes and safety service",
        },
    };
}

const BuyVkPostLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {vkPostLikesStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        vkPostLikesStore.getComment().then(data => setComment(data));
    }, []);

    return (
        <div
            className={styles.background}
            style={{
                background: "url('/vkBg.webp') no-repeat 100%  ",
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
                    <Layer type="vk">
                        <div className={`container`}>
                            <PageTitle title={"Buy VK likes"}/>
                            <PageHead page="vk-likes"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={vkPostLikesStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={vkPostLikesStore.system}
                                service={vkPostLikesStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    {" "}
                                    <p>Where can you buy cheap Post likes for VK? <span style={{fontWeight: "bold"}}>Buy VK Post likes</span> of
                                        the highest
                                        quality and most acceptable cost and enhance your social media account. </p>
                                </div>
                                <p>VK is a social space convenient for communication and business, where likes will help
                                    improve the demand for a product or service, bring a profile or group to the top,
                                    and achieve popularity and a positive attitude. </p>
                                <p style={{color: "#4f81bd"}}>Causes for chasing VK likes</p>
                                <ul>
                                    <li>popularity - a direct path to the top VK and recommendations</li>
                                    <li>increased self-esteem;</li>
                                    <li>trust, the interest of the audience;</li>
                                    <li>growth of VK subscribers;</li>
                                    <li>drawing attention to the published post;</li>
                                    <li>increased interest in buying;</li>
                                    <li>revenue – advertisers will want to buy space for their ads.</li>
                                </ul>
                                <p>Likes have long been an effective tool for attracting the interest of the audience
                                    and promoting your own publications. </p>
                                <p style={{color: "#4f81bd", textDecoration: "underline"}}>How to buy VK Post
                                    likes</p>
                                <ul>
                                    <p>The main steps:</p>
                                    <li>we take the order;</li>
                                    <li>our expert will start working instantly on your page;</li>
                                    <li>you will obtain the first outcomes of our work;</li>
                                    <li>your order will be completed in 3-5 days.</li>
                                    <p>Our benefits:</p>
                                    <li>User anonymity.</li>
                                    <li>Convenient site design.</li>
                                    <li>Active support.</li>
                                    <li>Constant work on the service.</li>
                                    <p>Our feature is certainly a wide range of benefits and reasonable costs under
                                        perfect conditions. If you are considering purchasing VK likes, our site
                                        supplies different payment methods. So, you may furthermore <span
                                            style={{fontWeight: "bold"}}>buy VK Post likes
                                        with crypto.</span></p>
                                </ul>
                            </div>
                            <Modal store={ vkPostLikesStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyVkPostLikes;
