import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Head from "next/head";
import { useRouter } from "next/router";
import {useStores} from "../stores";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";

export async function getStaticProps() {
  return {
    props: {
      title: "Buy TikTok Views - 100% Real Looking - MakeTop",
      canonical: "https://maketop.io/buy-tiktok-views",
      description:
        "Buy TikTok views from #1 MakeTop site. Only 2 steps: just choose our views package and pay by crypto. Fast safe delivery. No password is required",
    },
  };
}

const BuyTiktokViews = (props) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const [comment, setComment] = useState();
  const { tikTokViewsStore } = useStores();
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    tikTokViewsStore.getComment().then(data => setComment(data));
  }, []);

  return (
    <div
      className={styles.background}
      style={{
        background: "url('tiktokBg.webp') no-repeat 100%  ",
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
          <div className={styles.background} />

          <Layer type="tiktok">
            <div className={`container`}>
              <PageTitle title={"Buy TikTok views  "} />
              <PageHead page="tiktok-views" />
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
              </div>
              <CardsList store={tikTokViewsStore} setModalOpen={setIsOpen} />
              <ReviewsBlock
                  comment={comment}
                  isReviewButtonPress={isReviewButtonPress}
                  setIsReviewButtonPress={setIsReviewButtonPress}
                  type={tikTokViewsStore.system}
                  service={tikTokViewsStore.service}
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

export default BuyTiktokViews;
