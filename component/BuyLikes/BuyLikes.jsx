import React from "react";
import styles from "./BuyLikes.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {colors} from "../../shared/colors";
import {useStores} from "../../stores";

const BuyLikes = ({likes, newPrice, discount, setNewPrice, text, type, onClick, id, info, system}) => {
    const { appStore } = useStores();

    const colorType = type.toLowerCase();

    return (
        <div className={styles.buyLikes_item}>
            <div style={{display: "flex", alignItems: "center"}}>
                <p className={styles.title} style={colors[colorType].likesColor}>
                    {likes}
                </p>
            </div>
            {
                system === 'instagram'
                    ? <>
                        <p className={styles.text}>{text}</p>
                        <div className={styles.itemBody}>
                            <div style={{display: "flex", gap: 3}}>
                            Delivery<p style={colors[colorType].timeColor}>Time 5-15 min</p>
                            </div>
                            <span>No Password Required</span>
                            <p>Real Likes For Cheap</p>
                        </div>
                    </>
                    : <div className={styles.itemBody}>
                    {info.map((el, i, arr) => (
                        <p key={i} className={!((arr.length - 1) === i) ? styles.border : ""}>{el}</p>
                    ))}
                    </div>
            }
            <div className={styles.itemPrice} style={{
                justifyContent: discount === "0" ? "flex-end" : "space-between"
            }}>
                {discount > 0
                    && <p style={{visibility: newPrice <= 0 ? "hidden" : "visible"}}
                          className={styles.oldPrice}> {appStore.user?.sym_b}
                        {Number(newPrice).toFixed(2)}
                        {!appStore.user?.sym_b ? appStore.user?.sym_a : ''}
                    </p>
                }
                <p className={styles.newPrice} style={colors[colorType].priceColor}>
                    {appStore.user?.sym_b}
                    {discount > 0 ? Number(newPrice - discount).toFixed(2) : Number(newPrice).toFixed(2)}
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
