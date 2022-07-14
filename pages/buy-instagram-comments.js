import React, {useContext, useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";

import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import {MeContext} from "./_app";

import OwnComment from "../component/OwnComment";
import ModalReview from "../component/Modal/ModalReview";
import ReviewsGenerator from "../component/ReviewsGenerator";
import Head from "next/head";
import {useRouter} from "next/router";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import {useStores} from "../stores";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Comments From The world's #1 Site (2022)- maketop",
            canonical: "https://maketop.io/buy-instagram-comments",
            description:
                "Buy Instagram comments from MakeTop. Instant delivery, real comments and friendly 24/7 customer support. Try us today",
        },
    };
}

const BuyInstagramComments = (props) => {
    const [comment, setComment] = useState();
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const [readTextMore, setReadTextMore] = useState(false);
    const {commentsStore} = useStores();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        commentsStore.getComment().then(data => setComment(data));
    }, []);

    const [type, setType] = useState({1: "active", 2: "disabled"});
    const style = {
        active: {
            background:
                "linear-gradient(88.32deg, #FEDA7D -15.05%, #D62F81 34.34%, #5E0DFF 108.12%)",
            width: 228,
        },
        disabled: {
            background: "transparent",
            boxShadow: "none",
            width: 228,
        },
    };

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
                }}
            >
                <div className={styles.container}>
                    <div className={styles.background}/>
                    <Layer type="link">
                        <div className={`container`}>
                            <PageTitle title={"Buy Instagram comments"}/>
                            <PageHead page="comments"/>
                            <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                                <p>GET STARTED</p>
                            </div>
                            <CardsList store={commentsStore} setModalOpen={setIsOpen}/>

                            <ReviewsBlock
                                comment={comment}
                                isReviewButtonPress={isReviewButtonPress}
                                setIsReviewButtonPress={setIsReviewButtonPress}
                                type={commentsStore.system}
                                service={commentsStore.service}
                            />
                            {/*<InfoBlock />*/}
                            <div className={infoStyles.info_block}>
                                <div className={infoStyles.info_under}>
                                    <p>Where can you <b>buy Instagram comments</b>? Buy cheap comments of the highest
                                        quality
                                        for your photos and videos here.</p>
                                    <p>Comments are a profound aspect of account development. Thanks to them, people can
                                        communicate with each other and trust the user more because they see that his
                                        content resonates with the audience. Why is it worth buying custom Instagram
                                        comments on our service?</p>
                                    <ul>
                                        <p>The reasons:</p>
                                        <li>They can increase popularization since, in most cases, the audience leaves
                                            comments about a particular publication in the comments. For example, if a
                                            product is supplied they write whether it is good or bad, whether it matches
                                            the description, etc. The number of comments determines whether the account
                                            will be attractive to other people.
                                        </li>
                                        <li>Thanks to the comments, the user will be able to earn the trust of people
                                            visiting his page for the first time to interest them. If he responds to
                                            other people's comments, it makes clear that he is a real person doing
                                            business or representing a company.
                                        </li>
                                        <li>Comments are not just communication between users but also a good
                                            advertisement. If people see positive reviews about a product or service,
                                            they will often return to it and recommend it to their friends.
                                        </li>
                                        <li>Comments help support communication with customers.</li>
                                        <li>By conducting regular and sufficient work with comments, you can ensure a
                                            decent increase in likes and subscribers, which will allow your account to
                                            develop quickly and fruitfully.
                                        </li>
                                        <li>The variety of content directly determines whether they will subscribe to
                                            the account. Comments dilute the materials provided on the page, and you can
                                            also post the most engaging and positive of them, thereby attracting new
                                            people.
                                        </li>
                                    </ul>
                                    <p>As we have already found out, buying comments on Instagram means ensuring active
                                        communication between followers and allowing your account to develop quickly and
                                        increase its popularity.</p>
                                    <p style={{color: "#4f81bd"}}>What could be easier?</p>
                                    <p>It is impossible to write comments on your own. You can't create many profiles.
                                        Moreover, they will be empty, and there is no point in using them. There is
                                        another way to hire people, but it will be expensive, and the comments will be
                                        copied from the network. Agree, an unattractive idea.</p>
                                    <p>However, there is a third way to wind up comments on Instagram. We will provide
                                        you with direct assistance in this at a symbolic price. You can create an active
                                        conversation under a personal photo or a picture of products, thus supplying
                                        visibility of the popularity of products.</p>
                                    <ul>
                                        <p>It is worth noting that comments must meet several requirements to look the
                                            most authentic:</p>
                                        <li>Use different active profiles. They must be real (with photographs,
                                            publications, etc.).
                                        </li>
                                        <li>Instagram comment boost shouldn't be filled with overly positive reviews. It
                                            will cause suspicion not only to you but also to the product itself. If it
                                            is so popular, there must be at least one negative review?
                                        </li>
                                        <li>It is impossible that the publication of comments was too frequent. It will
                                            also raise suspicion of falsification.
                                        </li>
                                        <li>Services for boosting comments on Instagram often use dishonest methods:
                                            comments are monotonous, profiles are unrealistic, and the cost is crazy.
                                        </li>
                                    </ul>
                                    <p style={{color: "#4f81bd", textDecoration: 'underline'}}>Buy real Instagram
                                        comments</p>
                                    <p>The audience is not always active because it is easier for people to like it than
                                        typing tons of letters. Lack of activity affects the account popularity, which
                                        has a detrimental effect on the user's mood. If you <b>buy comments</b> on
                                        Instagram, a
                                        lot of opportunities open up:</p>
                                    <ul>
                                        <li>The demand for content that is posted to the account is increasing;</li>
                                        <li>Goods, services, or brands are advertised effectively; they begin to
                                            interest subscribers and make them turn to the user;
                                        </li>
                                        <li>There is an opportunity to win the competition;</li>
                                        <li>The attention of a large audience that shares a person's hobby is
                                            attracted;
                                        </li>
                                        <li>An increase in subscribers is guaranteed.</li>
                                    </ul>
                                    <p>Also, getting Instagram comments means organizing additional income for you,
                                        which will be received from a promoted account. Quite a lot of people are
                                        actively earning from advertising. To do this, you only need a popular and
                                        attractive page which will have a large number of active subscribers.</p>
                                    <p>We offer you quality Instagram comments in our store. Because our comments are
                                        from real people, they will help you properly promote your profile. By
                                        purchasing comments on our site, you can be sure that your account will not be
                                        blocked and photos will not be deleted!</p>
                                    <p>Our actions are fully compatible with the Instagram algorithm. You can get
                                        comments on Instagram quickly and easily. Hundreds of satisfied customers
                                        confirm the reliability and quality of our services. If you care about
                                        popularity and your account is still not number one on Instagram. It is time to
                                        take advantage of our offer.</p>
                                    <p>We are working with different payment services, including MasterCard, Visa,
                                        American Express, Maestro, American Express, and Discover, and you may
                                        even <b> buy
                                            Instagram comments with crypto.</b></p>
                                    <p>You can only buy Instagram live comments from SSL-certified websites with
                                        complete company information, details, services, and a price list.</p>
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

export default BuyInstagramComments;
