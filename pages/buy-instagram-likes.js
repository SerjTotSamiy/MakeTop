import React, {useEffect, useRef, useState} from "react";
import styles from "../styles/Home.module.sass";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import {Layer} from "../component/Layer/Layer";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {useRouter} from "next/router";
import {useStores} from "../stores";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import CardsList from "../component/CardsList/CardsList";
import {ModalComponent} from "../component/Modal/ModalComponent";
import PageHead from "../component/PageHead/PageHead";
import appStore from "../stores/app.store";
import Modal from "../component/Modal/Modal";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass"

export async function getStaticProps() {
    return {
        props: {
            title: "Buy Instagram Likes Guaranteed by MakeTop #1 since 2017",
            canonical: "https://maketop.io/buy-instagram-likes",
            description:
                "Buy Instagram likes from MakeTop. Cheap instant delivery to your profile. High rated likes and 100% quality. 24/7 Simple payment by crypto or credit card",
        },
    };
}

const BuyInstagramLikes = (props) => {
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [comment, setComment] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const {appStore, likesStore, modalStore} = useStores();
    const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
    const [modalPosition, setModalPosition] = useState(0);
    const {query} = useRouter();
    const ref = useRef(null);

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
                        <PageTitle title={"Buy Instagram likes"}/>
                        <PageHead page="likes"/>
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
                        {/*<InfoBlock />*/}
                        <div className={infoStyles.info_block}>
                            <div className={infoStyles.info_under}>
                                <p>Where can you <b>buy Instagram likes</b> ? Buy likes of the highest quality and most
                                    acceptable cost and gain popularity.</p>
                                <p>An idea that first allowed passionate and enthusiastic photographers to post their
                                    photos online and share them with the world later became the most significant
                                    phenomenon in the social media industry, Instagram!</p>
                                <p>With over a billion monthly active users and almost every famous person worldwide on
                                    its platform, Instagram has created its little haven.</p>
                                <p>Instagram is cited as the "defining app of the last decade" primarily because it was
                                    launched primarily in 2010, unlike Facebook and YouTube. This great app started as a
                                    completely different idea. Young Kevin Systrom (co-founder of Instagram) enjoyed the
                                    taste of whiskey and bourbon and decided to create an app based on his interests. He
                                    named it "Burbn". This app then became what we know today as Instagram.</p>
                                <p>It is almost impossible to stay away from social networks in today's high-tech world.
                                    The rapid growth of the possibilities and tools offered by social networks has made
                                    it irresistible for all industries to go online and be part of this revolution.</p>
                                <p>Everything is on Instagram, from big business, fashion, and entertainment to
                                    up-and-coming influencers. The reach that Instagram provides has never been seen
                                    before. The app's simplicity makes it easy for users to view and for businesses to
                                    set up a beautiful display.</p>
                                <p style={{color: "#4f81bd"}}>Why buy likes on Instagram?</p>
                                <p>Instagram is an ocean of possibilities. It can be the factor that allows you to quit
                                    your tedious 9 to 5 job and do whatever you like. Whatever your interests are, you
                                    can turn them into assets if you do it right. On Instagram, you can make money on
                                    anything.</p>
                                <p>Want to boost your Instagram account? Are you ready to make a career out of your
                                    hobby? Then you have found the right place. Here you will find out where people buy
                                    likes for Instagram, the pros and cons of it, and how Instagram might respond to
                                    this activity.</p>
                                <p>Running your profile and initially growing your account can be a lot of work. It
                                    takes people longer to acquire the first few thousand followers than it takes them
                                    to reach a million.</p>
                                <p>A few years ago, people had no choice but to wait for months and years and continue
                                    to increase their bills slowly and steadily. In addition, there was not much
                                    competition then. That is why we have seen very few Instagram influencers and social
                                    media celebrities before.</p>
                                <p>A lot has changed since then. Our society is moving faster than ever before. You do
                                    not have much time to wait and slowly gain followers. It would help if you did this
                                    as soon as possible. Otherwise, someone else will take your place.</p>
                                <p>For these reasons, people have come up with new strategies to get more followers and
                                    get the most likes possible on their Instagram posts. Some of the main methods that
                                    rising Instagram influencers and brands use are:</p>
                                <ul>
                                    <li>They create several fake Instagram accounts themselves and make these accounts
                                        follow them.
                                    </li>
                                    <li>They hire a service that provides bots or fake followers to follow their
                                        accounts, like their posts, and comment on them.
                                    </li>
                                    <li>Many influencers use the "follow to follow" strategy where they create and join
                                        multiple groups where members follow each other, like each other's posts, etc.
                                    </li>
                                    <li>Influencers and brands buy Instagram likes and followers, which are real
                                        accounts on social media marketing services, and this helps them grow.
                                    </li>
                                </ul>
                                <p>Among these methods, the first three are downright ridiculous. The fourth option is
                                    more or less viable. The first way to create many fake Instagram accounts and then
                                    make them like your Instagram posts is very tedious. And according to the second
                                    method, even a child can see this trick. Bots and fake followers will not fool
                                    anyone.</p>
                                <p>The third way is frankly unreliable. There is no guarantee that these people will
                                    continue to follow you or like your posts. And not to mention that it is even more
                                    tiring than the first one.</p>
                                <p>The fourth is the best strategy you can use of the four without exposing yourself to
                                    huge risks.</p>
                                <p>Buying cheap Instagram likes is a great way to increase the reach and engagement of
                                    your Instagram account. It can help you skip the initial chores and get your account
                                    up and running very easily. Now, two main groups of people are demanding a lot of
                                    followers and engagement on their Instagram accounts. Influencers and businesses on
                                    Instagram.</p>
                                <p style={{color: "#4f81bd"}}>Instagram for influencers</p>
                                <p>Doing work, you love can improve your mental health and emotional stability. On the
                                    other hand, if you're stuck in a profession or job you don't like, it can seriously
                                    affect your mental health. If you have a passion for something and are great at it,
                                    why not make it a profession! You ask how?</p>
                                <p>Well, Instagram! Let's say you learned how to pack and dress. Everyone always
                                    compliments the way you dress and the way you look. And you love it. You know very
                                    well how to apply makeup and what products to use or not use. You can use your
                                    talents and set up an Instagram account to post makeup tutorials. You can share your
                                    wardrobe or tell people what's trending this season.</p>
                                <p>Many people struggle to find the perfect look. Many people do not know how to apply
                                    makeup and what cosmetics to use. They are always looking for advice on Instagram.
                                    You can help these people with your informative posts and tutorials. You can
                                    influence people to dress nicely. And that's how you become an Instagram
                                    influencer.</p>
                                <p>But it will take a long time to get to the point where your account is big enough to
                                    make a profit. It takes people longer to get a few thousand followers than it takes
                                    them to get a million.</p>
                                <p>When you are just starting, the best way to increase your followers is through
                                    engagement with your posts. Instagram loves when your posts get a lot of views.
                                    Likes, Shares, Saves, and Comments count as interactions.</p>
                                <p>So when you buy Instagram likes for your posts, it increases the engagement of your
                                    posts; hence, Instagram will promote your post to more and more people. This way,
                                    many people will be able to find your account and become your followers.</p>
                                <p>If you purchase likes for your Instagram account, it helps your Instagram account
                                    grow organically.</p>
                                <p style={{color: "#4f81bd"}}>Instagram for business</p>
                                <p>First introduced as a simple photo-sharing app, Instagram got a lot bigger. Today,
                                    Instagram is all about business. According to Instagram, about 80% of Instagram
                                    users follow a business account. Why not be yours.</p>
                                <p>Instagram provides many tools to manage and grow your business on its platform. It is
                                    easy to set up a simple business account for any business. Using Instagram for
                                    business is also profitable. You don't need an entire team to run a successful
                                    business.</p>
                                <p>You can attract many clients to your Instagram business account and expect your
                                    followers. You can also triple the traffic to your website or mobile app and even
                                    more with Instagram.</p>
                                <p>But first, you will need to raise your account to a certain level. You can get likes
                                    for Instagram from us to increase the activity of your posts and grow your account
                                    organically.</p>
                                <ul>
                                    <p>Buying likes for Instagram can help you:</p>
                                    <li>Reach more people and get more followers.</li>
                                    <li>By getting more subscribers, we ensure social well-being.</li>
                                    <li>Social proof provides more vital and more reliable consumer trust.</li>
                                    <li>When a person sees that your account has more followers and your posts have more
                                        interactions, they are more likely to buy your product or service.
                                    </li>
                                    <li>Having public engagements and following will also help you reach more people.
                                    </li>
                                    <li>You can get more funds to spread your business widely.</li>
                                </ul>
                                <p style={{color: "#4f81bd"}}>Who needs a boost of likes?</p>
                                <p>Targetologists recommend that business owners, bloggers, influencers, and owners of
                                    personal pages pay attention to cheating. You can get likes without logging in by
                                    adding a link to your profile!</p>
                                <p>Cheat allows you to draw more attention to the products on the page. Photos with
                                    store offers with a lot of hearts inspire trust among users. People tend to think in
                                    groups. It seems to them that if a thousand people liked something on the Internet,
                                    then this thing is unique and attractive. This fuels interest in her.</p>
                                <ul>
                                    <p>It's worth getting likes on Instagram for a post if you:</p>
                                    <li>blogging;</li>
                                    <li>sell goods;</li>
                                    <li>develop your brand;</li>
                                    <li>offer services;</li>
                                    <li>are engaged in information business;</li>
                                    <li>work as a model.</li>
                                </ul>
                                <p>This is a sure way to quickly increase the number of marks under the publication and
                                    gain the audience's trust. You can always be sure that people will see your post
                                    with our service.</p>
                                <p style={{color: "#4f81bd"}}>Is it safe to cheat likes?</p>
                                <p>Cheat likes on Instagram are safe if you use them wisely. We do not share your data:
                                    be calm about your privacy. Your account will not be hacked or stolen.</p>
                                <p>Do not get carried away with cheating if you have few followers on your profile. It
                                    is essential to maintain a balance: the number of hearts should not exceed 30% of
                                    the subscribers. If you have 1 thousand subscribers and 900 likes, this will raise
                                    questions from users. </p>
                                <p>This discrepancy can cause distrust in your audience, as well as in the Instagram
                                    system itself. A social network can restrict your actions or even block your account
                                    for excessive suspicious activity. However, you have nothing to fear if you act
                                    carefully and do not wind up millions of hearts at once.</p>
                                <ul>
                                    <p>You are getting:</p>
                                    <li>fast winding speed;</li>
                                    <li>quality likes;</li>
                                    <li>convenient site interface;</li>
                                    <li>detailed statistics.</li>
                                </ul>
                                <p>With us, you cannot worry about the security of your data and access to the
                                    page. </p>
                                <p style={{color: "#4f81bd"}}>How to buy IG likes cheap?</p>
                                <p>You can buy cheap likes on Instagram only on Maketop, where you can get a good result
                                    for even a small financial investment. The account will receive an instant increase
                                    in likes under publications and will very soon become one of the most popular at no
                                    extra cost.</p>
                                <p>Registration on Maketop is reduced to a minimum so that each user can quickly start
                                    getting likes. We are working with different payment providers, including
                                    MasterCard, Visa, American Express, Maestro, American Express, and Discover, and you
                                    may even buy <b>Instagram likes crypto</b>.</p>
                                <p> Buying 100 likes on Instagram on Maketop will cost mere pennies, and the result will
                                    pleasantly surprise you.</p>
                                <ul>
                                    <p>Advantages of Maketop - the best promotion service</p>
                                    <li>Free services without any restrictions and obligations to replenish the
                                        balance.
                                    </li>
                                    <li>A quick boost of Instagram likes, which will be the envy of all your familiar
                                        Instagrammers.
                                    </li>
                                    <li>Technical support will not leave the client in difficulty day or night.</li>
                                    <li>Discounts on the purchase of points will make it possible to promote your
                                        Instagram account and save money.
                                    </li>
                                    <li>Likes only from real users.</li>
                                </ul>
                                <p style={{color: "#4f81bd"}}>How do hashtags work, and why do they need likes?</p>
                                <p>Hashtags have been used for a long time, even before the advent of Instagram. Their
                                    value lies in the fact that any user of a social network can quickly find all the
                                    latest posts on their request. Photos marked with a hashtag appear on the screen of
                                    the user's gadget immediately after he has entered his query into the search
                                    engine.</p>
                                <p>The number of likes under a hashtag post can significantly move the seat up, so more
                                    people will see the photo. Hashtags are a good tool for promoting your Instagram
                                    account, and experienced Instagrammers never forget about it, supplying their photo
                                    creations with various tags.</p>
                                <p style={{color: "#4f81bd"}}>Instagram deducting likes?</p>
                                <p>What always stops users when they are offered a cheat? It's not a waste of time or
                                    money to buy <b>Instagram likes</b> or earn points. It is the fear that the
                                    administration
                                    of the social network will write off the twisted likes, and the user will be left
                                    with nothing.</p>
                                <p>First, you need to understand why likes or subscribers are being written off. Many
                                    programs and services on the Internet offer fast promotions for a relatively
                                    inexpensive fee. But the catch here is that the acquired likes will turn out to be
                                    fake, affixed from one-day pages.</p>
                                <p>Our service has a totally different approach to account promotion. All our users are
                                    real people who want to promote their page. They will not disappear with the onset
                                    of a new day, so their likes remain under publications forever. Only from us can you
                                    buy live likes on Instagram and not be afraid of their write-off.</p>
                                <p style={{color: "#4f81bd"}}>It's time to make a decision - Buy Real Instagram
                                    Likes</p>
                                <p>Of course, this may seem problematic. After all, Instagram algorithms study many
                                    additional factors. They monitor the rate of content and the number of likes. If you
                                    decide to buy Instagram likes from Maketop, the process will be much more
                                    comfortable and quicker. It won't take you months or years to make a post popular.
                                    Your publication will become trendy within a few hours, and it will quickly pay
                                    off.</p>
                            </div>
                        </div>
                        <Modal store={likesStore} position={modalPosition}/>
                        {/*{isOpen && (*/}
                        {/*   <ModalComponent
                                open={isOpen}
                                setOpen={setIsOpen}
                                service={query.service}
                                counts={query.counts}
                                priceValue={query.priceValue}
                                system={query.system}
                            /> */}
                        {/*)}*/}
                    </div>
                </Layer>
            </div>
        </div>
    );
}

export default BuyInstagramLikes;
