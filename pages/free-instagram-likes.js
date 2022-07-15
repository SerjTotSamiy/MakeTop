import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"
import Modal from "../component/Modal/Modal";

export async function getStaticProps() {
    return {
        props: {
            title: "Free Instagram Likes - Get Test 25 - 100% Work",
            canonical: "https://maketop.io/automatic-instagram-likes",
            description:
                "Free Instagram likes from MakeTop platform is recommended by influencers. Get 25 likes immediately without password and personal information",
        },
    };
}

const FreeInstagramLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(null);
    const {likesStore} = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const {query} = useRouter();

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        // likesStore.getData();
        likesStore.getComment().then(data => setComment(data));
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
            <div className={styles.container}>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={"Free Instagram likes"}/>
                        <PageHead page="free-likes"/>
                        <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                            <p>GET STARTED</p>
                        </div>
                        <CardsList store={likesStore} setModalOpen={setIsOpen}/>
                        <ReviewsBlock
                            comment={comment}
                            isReviewButtonPress={isReviewButtonPress}
                            setIsReviewButtonPress={setIsReviewButtonPress}
                            type={likesStore.system}
                            service={likesStore.service}
                        />
                        {/*<InfoBlock/>*/}
                        <div className={infoStyles.info_block}>
                            <div className={infoStyles.info_under}>
                                <p>Where can you <span style={{fontWeight: "bold"}}> get free Instagram likes</span> ?
                                    Get free likes of the highest
                                    quality and
                                    most acceptable cost and make your account popular.</p>
                                <p>Do you have a trendy girlfriend in real life or on the Internet? Perhaps you have a
                                    friend who is easy to gain interest in yourself?! Of course, you have often wanted
                                    to be in the place of such a person? Well, it's easy. You need to take the first few
                                    steps. First of all, you need to wind up Instagram likes; this can be done for free
                                    using the service.</p>
                                <p>It is available to everyone, but not every person will believe in the effectiveness
                                    of such a resource. It is not a program and indeed not a robot, but an opportunity
                                    to increase your account's number of real followers.</p>
                                <p>Work in the service can be performed not only from stationary computers but also from
                                    mobile devices. While studying, in the supermarket, in transport, or just for a
                                    walk, you can get Instagram likes for free.</p>
                                <p>In addition, our company involves cheating subscribers and comments on the most
                                    popular social networks on the Internet. And even if you still don't have a personal
                                    page on Instagram, you can use the service's capabilities on other portals designed
                                    for communication and information exchange.</p>
                                <p style={{color: "#4f81bd"}}>How to get more Instagram likes for free?</p>
                                <p>To increase the popularity of your photos on Instagram, I recommend using the basic
                                    rules:</p>
                                <ul>
                                    <li>Take YOUR high-quality and exciting photos. Do not post other people's pictures
                                        on the Internet; they are of no interest to anyone.
                                    </li>
                                    <li>If you didn't get caught by a photo, then hook it with a description to give you
                                        a heart or write a comment. Communicate with the audience through the
                                        description, ask them questions, and provoke them to leave a comment. Thus, the
                                        post can attract even more attention and likes.
                                    </li>
                                    <li>Put the hashtags correctly.</li>
                                    <li>Make your profile public and design it well. Put a beautiful profile picture and
                                        tell us who you are or what you do.
                                    </li>
                                    <li>Like, follow, and comment on other accounts to get reciprocal action.</li>
                                    <li>Try to post more often, but not too often. At least one or two a day.</li>
                                    <li>Make geolocation tags where the photo was taken. You can also go to the top and
                                        attract attention.
                                    </li>
                                    <p>Those who want to save their own money and understand the Instagram ranking
                                        mechanisms will be interested to learn how to get <span
                                            style={{fontWeight: "bold"}}> free Instagram likes</span> . To do
                                        this, you can use various methods; here are the main working methods:
                                    </p>
                                    <li>
                                        Hashtags and geotags
                                    </li>
                                    <p>Choose suitable tags for each post; add information about the geolocation when
                                        placing your publications. The system allows you to specify up to 30 hashtags;
                                        it is
                                        better to limit yourself to <span style={{fontWeight: "bold"}}> 10 Instagram likes free trials</span> to
                                        not
                                        reload your post
                                        and make it look attractive. You can add 4-5 popular tags to your posts and
                                        cover
                                        the mid-and low-frequency tags in the other half. It will also be helpful to
                                        come up
                                        with your hashtag and add it to each post.</p>
                                    <li>Manual mass liking</li>
                                    <p>Be active, put hearts even to strangers, they will probably reciprocate. Despite
                                        the apparent simplicity of this method, one should not count on one hundred
                                        percent return. Not many users today use this method to get <span
                                            style={{fontWeight: "bold"}}>free Instagram likes
                                        2022</span> - it
                                        takes a lot of time; the network sets limits on actions, and not
                                        everyone wants to count the number of hearts left.</p>
                                    <li>Software mass liking</li>
                                    <p>Programs and applications allow you to leave hearts on behalf of your account
                                        automatically. This is, of course, much faster and easier than liking user posts
                                        on your own. But this method has significant drawbacks: the ability to download
                                        a virus along with the program, lose access to your account, and get blocked for
                                        exceeding the limits. Of course, there are also worthy software representatives,
                                        but access to such tools is usually paid.</p>
                                    <li>Exchanges - exchangers</li>
                                    <p>This method can help you get likes on Instagram from scratch on your own, and it
                                        is much more effective than regular mass liking. By registering on the
                                        exchanges, you are sure that your like-minded people live there. But the essence
                                        is the same - you perform actions and receive a reward. Then you create your
                                        task and pay for the work of the performers. It turns out that, in this case,
                                        you will again need a long period of time to get the required number of
                                        likes.</p>
                                </ul>
                                <p style={{color: "#4f81bd"}}>Is it safe to buy likes?</p>
                                <p>Cheat likes on Instagram are absolutely safe if you use them wisely. We do not share
                                    your data: be calm about your privacy! Your account will not be hacked or
                                    stolen!</p>
                                <p>Do not get carried away with cheating if you have few followers on your profile. It
                                    is essential to maintain a balance: the number of hearts should not exceed 30% of
                                    the number of subscribers. If you have 1 thousand subscribers and 900 likes, this
                                    will raise questions from users. This discrepancy can cause distrust in your
                                    audience, as well as in the Instagram system itself.</p>
                                <p>A social network can restrict your actions or even block your account for excessive
                                    suspicious activity. However, you have nothing to fear if you act carefully and do
                                    not wind up millions of hearts at once.</p>
                                <ul>
                                    <p>You are getting:</p>
                                    <li>fast winding speed;</li>
                                    <li>quality likes;</li>
                                    <li>convenient site interface;</li>
                                    <li>bonus system;</li>
                                    <li>detailed statistics.</li>
                                </ul>
                                <p>With us, you can not worry about the security of your data and access to the page.
                                    Cheat is fast, safe, and easy!</p>
                                <p style={{color: "#4f81bd"}}>What gives likes on Instagram?</p>
                                <p>Boosting likes on Instagram allows you to draw attention to your profile. Many likes
                                    signal to other users that your services and products are attractive. Recently,
                                    people put their hearts in less and less, and therefore their presence signals
                                    genuine interest in the post. If your posts have a lot of likes, we can be sure that
                                    users are not afraid to become your client or subscriber.</p>
                            </div>
                        </div>
                        <Modal store={likesStore} />
                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default FreeInstagramLikes;
