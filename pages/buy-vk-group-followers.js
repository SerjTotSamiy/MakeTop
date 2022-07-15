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
            title: "Buy VK Group Followers - 2 Steps to Result - MakeTop",
            canonical: "https://maketop.io/buy-vk-group-followers",
            description:
                "Buy VK group followers is a good way to get popular on social media. Easy payment by crypto or card. High-quality followers and safety service",
        },
    };
}

const BuyVkGroupFollowers = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [comment, setComment] = useState();
    const {vkGroupFollowersStore} = useStores();
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);


    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        vkGroupFollowersStore.getComment().then(data => setComment(data));
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
                            <PageTitle title={"Buy VK followers "}/>
                            <PageHead page="vk-followers"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={vkGroupFollowersStore} setModalOpen={setIsOpen}/>
                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={vkGroupFollowersStore.system}
                                service={vkGroupFollowersStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you buy followers for VK Group? <span style={{fontWeight: "bold"}}>Buy VK Group followers</span> on
                                        our website
                                        quickly, easily, and without problems. Reasonable prices will surprise you, and
                                        you
                                        will be able to promote your group and gain favor.</p>
                                </div>
                                <p>Maketop suggests buying VK followers on favorable terms. VK is one of the most
                                    popular and visited social networks in Runet, the principal competitor of
                                    Facebook and Twitter, in terms of the number of participants and user
                                    activity. </p>
                                <p>VK offers many tools for social interaction: the ability to add friends and
                                    ranking them by category. The procedure of quick messages and files, listening
                                    to audio files, watching videos, as well as likes, comments, and reposts, make
                                    the social network very convenient for communication and entertainment.</p>
                                <p style={{color: "#4f81bd", textDecoration: "underline"}}>How to buy VK Group
                                    followers?</p>
                                <p>VK is also one of the leading social networks in SMM technologies, for example brands
                                    and goods promotion in the mass media. Followers who expressed their approval, left
                                    comments, and shared information about the product allows you to increase the
                                    loyalty of the target audience</p>
                                <p>Different tools are used, including the promotion. It can be done by attracting users
                                    with catchy headlines, images, material incentives, and using various software
                                    methods. </p>
                                <ul>
                                    <p>You can buy followers in VK very easy:</p>
                                    <li>on the website you will find several widgets that you can click on for quick
                                        online orders;
                                    </li>
                                    <li>select the appropriate service;</li>
                                    <li>enter your details to process the job;</li>
                                    <li>in a short time, you will see a significant growth in activity in your group.
                                    </li>
                                </ul>
                                <p>We are working with different payment providers, including MasterCard, Visa, American
                                    Express, Maestro, and Discover, and you may even buy <span
                                        style={{fontWeight: "bold"}}>VK Group followers with
                                    crypto.</span></p>
                            </div>
                            <Modal store={ vkGroupFollowersStore } />
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default BuyVkGroupFollowers;
