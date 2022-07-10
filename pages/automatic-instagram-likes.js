import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import infoStyles from "../component/InfoBlock/InfoBlock.module.sass";
import { MeContext } from "./_app";
import ModalReview from "../component/Modal/ModalReview";
import OwnComment from "../component/OwnComment";
import ReviewsGenerator from "../component/ReviewsGenerator";
import Head from "next/head";
import { useRouter } from "next/router";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import {useStores} from "../stores";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";

export async function getStaticProps() {
  return {
    props: {
      title:
        "Buy Instagram Auto Likes From The world's #1 Site (2022)- Maketop",
      canonical: "https://maketop.io/automatic-instagram-likes",
      description:
        "Buy automatic Instagram likes from MakeTop. Cheap instant and regular monthly delivery of 100% high quality followers packages. Payment by crypto",
    },
  };
}
const AutomaticInstagramLikes = (props) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState(null);
  const [type, setType] = useState({ 1: "active", 2: "disabled" });
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const [readTextMore, setReadTextMore] = useState(false);
  const { autoLikesStore, autoLikesSubsStore } = useStores();
  const router = useRouter();
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
    autoLikesStore.getComment().then(data => setComment(data));
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
            <PageTitle title={"Buy Automatic Instagram likes"} />
            <PageHead page="autoLikes" />

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
                <CardsList store={autoLikesStore} setModalOpen={setIsOpen} />
              ) : (
                <CardsList store={autoLikesSubsStore} setModalOpen={setIsOpen} />
              )}
            </div>
            <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
            <ReviewsBlock
                comment={comment}
                isReviewButtonPress={isReviewButtonPress}
                setIsReviewButtonPress={setIsReviewButtonPress}
                type={autoLikesStore.system}
                service={autoLikesStore.service}
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
  );
};

export default AutomaticInstagramLikes;
