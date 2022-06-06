import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { Icon } from "../Icon/Icon";

import styles from "./Modal.module.sass";

const ModalPosts = ({
  setModal,
  userInfo,
  type,
  counts,
  activePost,
  setActivePost,
  deleteActivePost,
  errorMessage,
  sendOrder,
  service,
  priceValue,
}) => {
  const router = useRouter();
  const [activeAddition, setActiveAddition] = useState([]);
  const [modPriceValue, setModPriceValue] = useState(Number(priceValue) || 0);
  const [changeBG, setChangeBG] = useState(false)
  const [secondChangeBG, setSecondChangeBG] = useState(true)
  const postIcons = {
    Likes: "/postHeart.svg",
    Followers: "/postfollowers.svg",
    Views: "/postview.svg",
    Comments: "/postcomment.svg",
  };
  const deleteActiveAddition = (item) => {
    const newAddition = activeAddition.filter((addition) => addition !== item);
    setActiveAddition(newAddition);
  };
  const [buttonType, setButtonType] = useState({
    1: "title",
    2: "outline",
  });


  const [showModal, setShowModal] = useState(false)

  const additions = [1, 2, 3];

  useEffect(() => {
      console.log('userInfo is ', userInfo);
  }, [])

  return priceValue === "0.00" ? (
    <>
      <p className={styles.modal_title}>Free Instagram {service}</p>
      <img src="/stageLine0.5.svg" alt="" className={styles.absoluteLine} />
      <div className={styles.modal_stageBlock}>
        <div className={styles.modal_stageItem_active}>
          <p>01</p>
        </div>
        <div className={styles.modal_stageItem_active}>
          <p>02</p>
        </div>
        <div className={styles.modal_stageItem}>
          <p>03</p>
        </div>
      </div>

      <div className={styles.posts_container}>
        {userInfo?.posts.map((post, index) => {
          return (
            <div
              key={index}
              className={styles.posts_item}
              style={{ background: `url(${post.img})` }}
              onClick={() =>
                activePost.includes(post)
                  ? deleteActivePost(post)
                  : activePost.length <= 9
                    ? setActivePost((prev) => [...prev, post])
                    : null
              }
            >
              {activePost.includes(post) && (
                <div className={styles.chosenPost}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <img alt="" src={postIcons[service]} />
                    <p>{Math.round(counts / activePost.length)}</p>
                  </div>
                  <img alt=""
                    src="/postClose.svg"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteActivePost(post)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <ButtonComponent
        type="title"
        text="25 free like"
        onClick={() => {
          sendOrder();
          router.push("/thanks-for-shot");
        }}
      />
    </>
  ) : (
    <>
      <div className={styles.modal_title}>
        <p style={{ color: " rgba(40, 95, 255, 1)" }}>
          Choose Post
        </p>
        <p>|</p> ${modPriceValue} One Time
      </div>
      <div className={styles.modal_stageBlock}>
        <img src="/stageLine0.5.svg" alt="" className={styles.absoluteLine} />
        <div className={styles.modal_stageItem_active}>
          <p>01</p>
        </div>
        <div className={styles.modal_stageItem_active}>
          <p>02</p>
        </div>
        <div className={styles.modal_stageItem}>
          <p>03</p>
        </div>
      </div>
      <div className={styles.posts_container}>
        {userInfo?.posts?.map((post, index) => {
          return (
            <div
              key={index}
              className={styles.posts_item}
              style={{ background: `url(${post.img})` }}
              onClick={() =>
                activePost.includes(post)
                  ? deleteActivePost(post)
                  : activePost.length <= 9
                    ? setActivePost((prev) => [...prev, post])
                    : null
              }
            >
              {activePost.includes(post) && (
                <div className={styles.chosenPost}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <img alt="" src={postIcons[service]} />
                    <p>{Math.round(counts / activePost.length)}</p>
                  </div>
                  <img alt=""
                    src="/postClose.svg"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteActivePost(post)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.modalMore_block}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.buttonsRow}>
        <ButtonComponent
          className={"title"}
          text={userInfo?.plan?.types?.t1?.name}
          type={
            changeBG ? "title" : "outline"
          }
          onClick={() => {
            setSecondChangeBG(!secondChangeBG)
            setChangeBG(true)
            setButtonType(userInfo?.plan?.types?.t1);
            console.log(userInfo?.plan?.types)
          }}
        />
        <ButtonComponent
          text={userInfo?.plan?.types?.t2?.name}
          disabled={userInfo?.plan?.types?.t2?.name === "Custom"}
          type={
            secondChangeBG ? "title" : "outline"
          }
          onClick={() => {
            setChangeBG(!changeBG)
            setSecondChangeBG(true)

            setButtonType(userInfo?.plan?.types?.t2);
          }}
        />
      </div>
      <div className={styles.addition_block}>
        {additions.map((addition, index) => {
          return (
            <div key={index} className={styles.modal_addition_item}>
              <div className={styles.rowBlock}>
                <div
                  className={styles.modal_account_block_circle}
                  onClick={() => {
                    if (activeAddition.includes(addition)) {
                      setModPriceValue((prev) => Number((prev - 7.5).toFixed(2)));
                      deleteActiveAddition(addition);
                    } else {
                      setModPriceValue((prev) => Number((prev + 7.5).toFixed(2)));
                      setActiveAddition([...activeAddition, addition])
                    }
                  }
                  }
                >
                  {activeAddition.includes(addition) && (
                    <Icon
                      type="check"
                      width="24px"
                      height="24px"
                      color="#0f85ff"
                    />
                  )}
                </div>
                <p>+500 Impressions</p>
              </div>
              <div className={styles.rowBlock}>
                <p style={{ color: "rgba(15, 133, 255, 1)" }}>+$7.50</p>
                <div className={styles.modal_account_block_circle} onClick={() => {
                  setShowModal(!showModal)
                }}>
                  <p style={{ color: "rgba(15, 133, 255, 1)" }}>i</p>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ display: showModal ? "block" : "none" }} className={styles.small}>
          <p>The number of times your content,
            whether a post or a story, was shown to users.
            Impressions help you to promote your post and improve stat.
          </p>
          <button onClick={() => setShowModal(false)}>Thanks</button>
        </div>
      </div>
      <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      <div className={styles.rowBlock}>
        <ButtonComponent
          id={"CHOOSEPAYMENT"}
          type="title"
          text={`Choose payment method for $ ${modPriceValue}`}
          style={{ maxWidth: 328 }}
          onClick={() => { sendOrder(modPriceValue) }}
        />
        <div
          className={styles.modal_account_block_circle}
          style={{
            borderColor: "rgba(15, 133, 255, 1)",
            width: 40,
            height: 40,
          }}
        >
          <img alt="" src="/shopping-cart.svg" />
        </div>
      </div>

    </>
  );
};

export default ModalPosts;
