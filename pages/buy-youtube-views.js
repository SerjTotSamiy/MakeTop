import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";

import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";

import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";

import { MeContext } from "./_app";

import { ModalComponent } from "../component/Modal/ModalComponent";
import ReviewsGenerator from "../component/ReviewsGenerator";
import OwnComment from "../component/OwnComment";
import ModalReview from "../component/Modal/ModalReview";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  return {
    props: {
      title: "Buy YouTube Views with 100% Guarantee - MakeTop",
      canonical: "https://maketop.io/buy-youtube-views",
      description:
        "Buy YouTube views from MakeTop for your video or profile. Get unlimited high-quality packages with payment by crypto or credit card. No password and risk",
    },
  };
}

const BuyYoutubeViews = (props) => {
  const [readTextMore, setReadTextMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const router = useRouter();
  const { comment, getComment, additionalPrice, getAdditionalPrice } =
    useContext(MeContext);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    getComment("YouTube", "Views");
    getAdditionalPrice("YouTube", "Views");
  }, []);

  return (
    <div
      className={styles.background}
      style={{
        background: "url('/youtubeBg.webp') no-repeat 100%  ",
        backgroundSize: "cover",
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
      <div
        style={{
          maxWidth: 1920,
          width: "100%",
          margin: "0 auto",
          overflowX: "hidden",
        }}
      >
        <div className={styles.container}>
          <Layer type="youtube">
            <div className={`container`}>
              <PageTitle title={"Buy YouTube views "} />
              <div className={styles.phone}>
                <img
                  src="/youtubePhoto.webp"
                  alt="buy youtube views"
                  className={styles.youtubeImg}
                />
                <div className={buyLikesStyles.mainTitle}>
                  <p className={buyLikesStyles.title}>YOUTUBE VIEWS</p>
                  <p className={buyLikesStyles.text}>
                    Where you can buy cheap likes for Instagram photos and
                    videos. Buy real Insta likes for the
                    <br />
                    most reasonable prices here and grow your Instagram
                    popularity in a flash!
                  </p>
                  <ButtonComponent
                    text={"Leave Feedback"}
                    type={"youtube"}
                    onClick={() => router.push("/")}
                  />
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
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                {/*<div className={buyLikesStyles.buyLikes_item_backButton} style={colors["youtube"].arrowButtonsColor}>*/}
                {/*    <img src="/leftArrow.svg"/>*/}
                {/*</div>*/}
                <div className={buyLikesStyles.buyLikes_item_container}>
                  {additionalPrice?.map((item, index) => (
                    <BuyLikes
                      key={item[0]}
                      likes={item[0]}
                      newPrice={item[1]}
                      text="Real YouTube Views"
                      type={"youtube"}
                      id={"YVIEWS"}
                      onClick={() => {
                        router.push({
                          pathname: "/buy-youtube-views",
                          query: {
                            service: "Views",
                            counts: item[0],
                            system: "YouTube",
                            priceValue: item[1],
                          },
                        });
                        setIsOpen(true);
                      }}
                    />
                  ))}
                </div>
                {/*<div className={buyLikesStyles.buyLikes_item_backButton} style={colors["youtube"].arrowButtonsColor}>*/}
                {/*    <img src="/rightArrow.svg"/>*/}
                {/*</div>*/}
              </div>
              <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
              <div className={buyLikesStyles.reviews_container}>
                {comment && (
                  <ReviewsGenerator type="youtube" comment={comment} />
                )}
                <OwnComment type="youtube" service="Views" />
                {isReviewButtonPress && (
                  <ModalReview
                    open={isReviewButtonPress}
                    setOpen={setIsReviewButtonPress}
                    type="youtube"
                    service="Views"
                  />
                )}
                <span className={buyLikesStyles.ownHiddenButton}>
                  <ButtonComponent
                    text={"Leave comment"}
                    type={"youtube"}
                    style={{ maxWidth: 228, width: "100%" }}
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
                  style={{ color: "#FF0933", textDecoration: "underline" }}
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

export default BuyYoutubeViews;
