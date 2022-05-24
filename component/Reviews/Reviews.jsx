import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { colors } from "../../shared/colors";

import styles from "./Reviews.module.sass";

const Reviews = ({ type, name, stars, text }) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(false);

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.reviews_comments_item}>
      <div
        className={`${styles.itemAvatar} ${
          type === "youtube" ? styles.youtube : ""
        } ${type === "instagram" ? styles.instagram : ""} ${
          type === "twitter" ? styles.twitter : ""
        } ${type === "tiktok" ? styles.tiktok : ""} ${
          type === "facebook" ? styles.facebook : ""
        } ${type === "spotify" ? styles.spotify : ""} ${
          type === "vk" ? styles.vk : ""
        }`}
      >
        <p>A</p>
      </div>
      <div className={styles.item_comment}>
        <p className={styles.autorName}>{name || "Anonym"}</p>
        <div className={styles.comment_text}>
          <span>
            <p>Absolutely love it!</p>
            <ReactStars
              edit={false}
              value={stars}
              count={5}
              size={
                windowInnerWidth < 445 ? 20 : windowInnerWidth < 620 ? 30 : 50
              }
              activeColor={colors[type].likesColor.color}
            />
          </span>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
