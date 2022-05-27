import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";

import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import { MeContext } from "./_app";

import OwnComment from "../component/OwnComment";
import ModalReview from "../component/Modal/ModalReview";
import ReviewsGenerator from "../component/ReviewsGenerator";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  return {
    props: {
      title: "Buy Instagram Followers Guaranteed by MakeTop #1 since 2017",
      canonical: "https://maketop.io/buy-instagram-followers",
      description:
        "Buy Instagram followers from MakeTop. Cheap instant delivery to your profile. High rated and quality followers. Payment by crypto. 24/7 support",
    },
  };
}

const BuyInstagramFollowers = (props) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const { price, comment, getComment } = useContext(MeContext);
  const router = useRouter();
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const [readTextMore, setReadTextMore] = useState(false);
  const [type, setType] = useState({ 1: "active", 2: "disabled" });
  const { query } = useRouter();

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

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    getComment("Instagram", "Followers");
  }, []);

  return (
    <div
      className={styles.background}
      style={{
        background: "url('instagramBg.webp') no-repeat 100%  ",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          maxWidth: 1920,
          width: "100%",
          margin: "0 auto",
          overflowX: "hidden",
        }}
      >
        <Head>
          <title>MakeTop</title>
          <meta name="title" property="og:title" content={props.title} />
          <meta
            name="description"
            property="og:description"
            content={props.description}
          />
          <meta name="twitter:description" content={props.description} />
          <meta name="url" property="og:url" content={props.canonical} />
          <link rel="canonical" href={props.canonical} />
        </Head>
        <div className={styles.container}>
          <div className={styles.background} />
          <Layer type="link">
            <div className={`container`}>
              <PageTitle title={"Buy Instagram followers  "} />
              <div className={styles.phone}>
                <img
                  src="/buyLikesPhoto.webp"
                  alt="Buy Instagram Followers"
                  className={styles.instagramImg}
                />
                <div className={buyLikesStyles.mainTitle}>
                  <p className={buyLikesStyles.title}>
                    BUY INSTAGRAM FOLLOWERS
                  </p>
                  <p className={buyLikesStyles.text}>
                    Where you can buy cheap likes for Instagram photos and
                    videos. Buy real Insta
                    <br /> likes for the most reasonable prices here and grow
                    your Instagram popularity in a flash!
                  </p>
                  <ButtonComponent
                    text={"Leave Feedback"}
                    type={"instagram"}
                    onClick={() => router.push("/")}
                  />
                </div>
              </div>
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
                <div className={buyLikesStyles.getStartedButtons}>
                  <ButtonComponent
                    text={"Per post"}
                    type={"instagram"}
                    style={style[type["1"]]}
                    onClick={() => {
                      setType({ 1: "active", 2: "disabled" });
                    }}
                  />
                  <ButtonComponent
                    text={"Subscription"}
                    type={"instagram"}
                    style={style[type["2"]]}
                    onClick={() => {
                      setType({ 1: "disabled", 2: "active" });
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {type[1] === "active" ? (
                  <div className={buyLikesStyles.buyLikes_item_container}>
                    {price?.Followers?.plans.map((item) => (
                      <BuyLikes
                        key={item?.count}
                        likes={item?.count}
                        newPrice={item?.price}
                        color="#285FFF"
                        text="Real Instagram Followers"
                        type={"instagram"}
                        id={"FOLLOWERS"}
                        onClick={() => {
                          router.push({
                            pathname: "/basket",
                            query: {
                              service: "Followers",
                              counts: item?.count,
                              system: "Instagram",
                              priceValue: item?.price,
                            },
                          });
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={buyLikesStyles.buyLikes_item_container}>
                    {price["Auto-Likes Subs"]?.plans.map((item, index) => (
                      <BuyLikes
                        key={item?.count}
                        likes={item?.count}
                        newPrice={item?.price}
                        color="#285FFF"
                        text="Real Instagram Auto-Likes"
                        type={"instagram"}
                        id={"ALIKES"}
                        onClick={() => {
                          router.push({
                            pathname: "/basket",
                            query: {
                              service: "Likes",
                              counts: item?.count,
                              system: "Instagram",
                              priceValue: item?.price,
                            },
                          });
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
              <div className={buyLikesStyles.reviews_container}>
                {comment && (
                  <ReviewsGenerator type="instagram" comment={comment} />
                )}
                <OwnComment type="instagram" service="Followers" />
                {isReviewButtonPress && (
                  <ModalReview
                    open={isReviewButtonPress}
                    setOpen={setIsReviewButtonPress}
                    type="instagram"
                    service="Followers"
                  />
                )}
                <span className={buyLikesStyles.ownHiddenButton}>
                  <ButtonComponent
                    text={"Leave comment"}
                    type={"instagram"}
                    style={{
                      maxWidth: 228,
                      width: "100%",
                    }}
                    onClick={() => setIsReviewButtonPress(true)}
                  />
                </span>
              </div>
              <div className={infoStyles.info_block}>
                <div className={infoStyles.info_under}>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Quisque rutrum. Aenean imperdiet. Etiam
                    ultricies nisi vel augue. Curabitur ullamcorper ultricies
                    nisi. Nam eget dui. Etiam rhoncus.{" "}
                  </p>
                  <div className={infoStyles.info_video}>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/8vfxHE2DGzU"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.{" "}
                </p>
                {readTextMore && (
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus.
                  </p>
                )}
                <a
                  style={{ color: "#1281FF", textDecoration: "underline" }}
                  onClick={() => setReadTextMore(!readTextMore)}
                >
                  {readTextMore ? "Close" : "Read more"}
                </a>
              </div>
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default BuyInstagramFollowers;
