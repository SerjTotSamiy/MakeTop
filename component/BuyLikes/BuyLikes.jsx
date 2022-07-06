import React, {useContext} from "react";
import styles from "./BuyLikes.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {colors} from "../../shared/colors";
import {MeContext} from "../../pages/_app";
import AppStore from "../../stores/app.store";
import {useStores} from "../../stores";

const BuyLikes = ({likes, newPrice, text, type, onClick, id}) => {
        const {
            allInfo,
            getAllInfo,
            price,
            getComment,
            comment,
            additionalPrice,
            getAdditionalPrice,
            setAdditionalPrice
        } = useContext(MeContext);
        const { appStore } = useStores();
        return (
            <div className={styles.buyLikes_item}>
                <div style={{display: "flex", alignItems: "center"}}>
                    {/* <div
          className={styles.item_arrowButtons}
          style={colors[type].arrowButtonsColor}
        >
          <img src='/leftArrow.svg' alt=""/>
        </div> */}
                    <p className={styles.title} style={colors[type].likesColor}>
                        {likes}
                    </p>
                    {/* <div
          className={styles.item_arrowButtons}
          style={colors[type].arrowButtonsColor}
        >
          <img src='/rightArrow.svg' alt=""/>
        </div> */}
                </div>
                <p className={styles.text}>{text}</p>

                <div className={styles.itemBody}>
                    <div style={{display: "flex", gap: 3}}>
                        Delivery<p style={colors[type].timeColor}>Time 5-15 min</p>
                    </div>
                    <span>No Password Required</span>
                    <p>Real Likes For Cheap</p>
                </div>
                <div className={styles.itemPrice}>
                    <p style={{visibility: newPrice <= 0 ? "hidden" : "visible"}}
                       className={styles.oldPrice}> {appStore.user?.sym_b}
                        {Number(newPrice * 1.15).toFixed(2)}
                        {!appStore.user?.sym_b ? appStore.user?.sym_a : ''}
                    </p>
                    <p className={styles.newPrice} style={colors[type].priceColor}>
                        {appStore.user?.sym_b}
                        {newPrice}
                        {!appStore.user?.sym_b ? appStore.user?.sym_a : ""}
                    </p>
                </div>
                <ButtonComponent
                    text={"Buy"}
                    type={type}
                    id={`${id}${likes}`}
                    style={{width: "100%"}}
                    onClick={onClick}
                />
            </div>
        )
            ;
    }
;

export default BuyLikes;
