import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Head from "next/head";
import { useRouter } from "next/router";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import {ModalComponent} from "../component/Modal/ModalComponent";
import CardsList from "../component/CardsList/CardsList";

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
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const router = useRouter();
  const [comment, setComment] = useState();
  // const { comment, getComment, additionalPrice, getAdditionalPrice } =
  //   useContext(MeContext);
  const { youTubeViewsStore } = useStores();
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    youTubeViewsStore.getComment().then(data => setComment(data));
    // getComment("YouTube", "Views");
    // getAdditionalPrice("YouTube", "Views");

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
              <PageHead page="youtube-views" />
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
              </div>
              <CardsList store={youTubeViewsStore} setModalOpen={setIsOpen} />
              <ReviewsBlock
                  comment={comment}
                  isReviewButtonPress={isReviewButtonPress}
                  setIsReviewButtonPress={setIsReviewButtonPress}
                  type={youTubeViewsStore.system}
                  service={youTubeViewsStore.service}
              />
              <InfoBlock />
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

export default BuyYoutubeViews;
