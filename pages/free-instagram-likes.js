import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.sass";
import { Layer } from "../component/Layer/Layer";
import { PageTitle } from "../component/PageTitle/PageTitle";
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import { useRouter } from "next/router";
import {useStores} from "../stores";
import HeadComponent from "../component/HeadComponent/HeadComponent";
import PageHead from "../component/PageHead/PageHead";
import CardsList from "../component/CardsList/CardsList";
import ReviewsBlock from "../component/ReviewsBlock/ReviewsBlock";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {ModalComponent} from "../component/Modal/ModalComponent";

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
  const { likesStore } = useStores();
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const { query } = useRouter();

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
              <PageHead page="free-likes" />
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
              </div>
              <CardsList store={likesStore} setModalOpen={setIsOpen} />
              <ReviewsBlock
                  comment={comment}
                  isReviewButtonPress={isReviewButtonPress}
                  setIsReviewButtonPress={setIsReviewButtonPress}
                  type={likesStore.system}
                  service={likesStore.service}
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

export default FreeInstagramLikes;
