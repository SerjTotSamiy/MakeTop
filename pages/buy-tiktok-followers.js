import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import youtubeStyles from "../styles/BuyYoutube.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";

import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import { MeContext } from "./_app";

import ReviewsGenerator from "../component/ReviewsGenerator";
import OwnComment from "../component/OwnComment";
import ModalReview from "../component/Modal/ModalReview";
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
      title: "Buy TikTok Followers - 100% Real Looking - MakeTop",
      canonical: "https://maketop.io/buy-tiktok-followers",
      description:
        "Buy TikTok followers from #1 MakeTop site. Only 2 steps: choose our packages and pay by crypto or credit card. No password and personal information",
    },
  };
}

const BuyTiktokFollowers = (props) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const [comment, setComment] = useState();
  const { tikTokFollowersStore } = useStores();
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const [readTextMore, setReadTextMore] = useState(false);
  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    tikTokFollowersStore.getComment().then(data => setComment(data));
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
              <PageTitle title={"Buy TikTok followers  "} />
              <PageHead page="tiktok-followers" />
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
              </div>
              <CardsList store={tikTokFollowersStore} setModalOpen={setIsOpen} />
              <ReviewsBlock
                  comment={comment}
                  isReviewButtonPress={isReviewButtonPress}
                  setIsReviewButtonPress={setIsReviewButtonPress}
                  type={tikTokFollowersStore.system}
                  service={tikTokFollowersStore.service}
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

export default BuyTiktokFollowers;
