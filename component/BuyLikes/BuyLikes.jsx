import React, {useContext, useEffect} from "react";
import styles from "./BuyLikes.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {colors} from "../../shared/colors";
import {useStores} from "../../stores";

const BuyLikes = ({likes, newPrice, text, type, onClick, id}) => {
    const { appStore } = useStores();

    const colorType = type.toLowerCase();

    useEffect(() => {
        console.log('buylikes type is', colorType);
    }, []);


    return (
        <div className={styles.buyLikes_item}>
            <div style={{display: "flex", alignItems: "center"}}>
                <p className={styles.title} style={colors[colorType].likesColor}>
                    {likes}
                </p>
            </div>
            <p className={styles.text}>{text}</p>

            <div className={styles.itemBody}>
                <div style={{display: "flex", gap: 3}}>
                    Delivery<p style={colors[colorType].timeColor}>Time 5-15 min</p>
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
                <p className={styles.newPrice} style={colors[colorType].priceColor}>
                    {appStore.user?.sym_b}
                    {newPrice}
                    {!appStore.user?.sym_b ? appStore.user?.sym_a : ""}
                </p>
            </div>
            <ButtonComponent
                text={"Buy"}
                type={colorType}
                id={`${id}${likes}`}
                style={{width: "100%"}}
                onClick={onClick}
            />
        </div>
    );
}

export default BuyLikes;
