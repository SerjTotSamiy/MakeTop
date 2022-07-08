import React from "react";
import buyLikesStyles from "../../styles/BuyLikes.module.sass";
import ReviewsGenerator from "../ReviewsGenerator";
import OwnComment from "../OwnComment";
import ModalReview from "../Modal/ModalReview";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

const ReviewsBlock = ({
    comment,
    isReviewButtonPress,
    setIsReviewButtonPress,
    type,
    service
}) => {
    return <>
        <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
        <div className={buyLikesStyles.reviews_container}>
            {comment && (
                <ReviewsGenerator type={type} comment={comment}/>
            )}
            <img alt="" id="comment" />
            <OwnComment type={type} service={service} />
            {isReviewButtonPress && (
                <ModalReview
                    open={isReviewButtonPress}
                    setOpen={setIsReviewButtonPress}
                    type={type}
                    service={service}
                />
            )}
            <span className={buyLikesStyles.ownHiddenButton}>
              <ButtonComponent
                  text={"Leave comment"}
                  type={type}
                  style={{ maxWidth: 228, width: "100%" }}
                  onClick={() => setIsReviewButtonPress(true)}
              />
            </span>
        </div>
    </>;
}

export default ReviewsBlock;
