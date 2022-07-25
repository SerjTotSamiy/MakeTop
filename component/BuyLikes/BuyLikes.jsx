import React from "react";
import styles from "./BuyLikes.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {colors} from "../../shared/colors";
import {useStores} from "../../stores";

const BuyLikes = ({likes, newPrice, discount, text, type, onClick, id, info, system}) => {
    const { appStore } = useStores();

    const colorType = type.toLowerCase();

    return (
        <div className={styles.buyLikes_item}>
            {
                discount > 0 &&
                <svg
                    className={styles.percent}
                    id="promo-promotion-discount-deal-percent-ribbon"
                    version="1.1"
                    viewBox="0 0 15.118 15.107"
                    width="32px"
                    height="32px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path d="M14.059,5.436V3.245l-2.204-1.102L9.712,0L7.559,0.538L5.406,0L3.263,2.143L1.059,3.245v2.191L0,7.554l1.059,2.118v2.191  l2.204,1.102l2.143,2.143l2.153-0.538l2.153,0.538l2.143-2.143l2.204-1.102V9.672l1.059-2.118L14.059,5.436z M13.059,9.436v1.809  l-1.724,0.862L9.406,14l-1.847-0.462L5.712,14l-1.8-1.8l-1.854-0.956V9.436L1.118,7.554l0.941-1.882V3.863l1.724-0.862l1.93-1.894  l1.847,0.462l1.847-0.462l1.8,1.8l1.854,0.956v1.809L14,7.554L13.059,9.436z" fill={colors[colorType].likesColor.color}/>
                    <rect height="1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.1273 7.5575)" width="8.485" x="3.316" y="7.054" fill={colors[colorType].likesColor.color}/>
                    <path d="M5.559,7.054c0.827,0,1.5-0.673,1.5-1.5s-0.673-1.5-1.5-1.5s-1.5,0.673-1.5,1.5S4.732,7.054,5.559,7.054z M5.559,5.054  c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5S5.283,5.054,5.559,5.054z" fill={colors[colorType].likesColor.color}/>
                    <path d="M9.559,8.054c-0.827,0-1.5,0.673-1.5,1.5s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S10.386,8.054,9.559,8.054z M9.559,10.054  c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5S9.835,10.054,9.559,10.054z" fill={colors[colorType].likesColor.color}/>
                </svg>
            }
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
            <div className={styles.itemPrice}>
                {/*{discount > 0*/}
                {/*    && <p style={{visibility: newPrice <= 0 ? "hidden" : "visible"}}*/}
                {/*          className={styles.oldPrice}> {appStore.user?.sym_b}*/}
                {/*        {Number(newPrice).toFixed(2)}*/}
                {/*        {!appStore.user?.sym_b ? appStore.user?.sym_a : ''}*/}
                {/*    </p>*/}
                {/*}*/}
                {/*<p className={styles.newPrice} style={colors[colorType].priceColor}>*/}
                {/*    {appStore.user?.sym_b}*/}
                {/*    {discount > 0 ? Number(newPrice - discount).toFixed(2) : Number(newPrice).toFixed(2)}*/}
                {/*    {!appStore.user?.sym_b ? appStore.user?.sym_a : ""}*/}
                {/*</p>*/}
                <p className={styles.newPrice} style={colors[colorType].priceColor}>
                    {appStore.user?.sym_b}
                    {Number(newPrice).toFixed(2)}
                    {!appStore.user?.sym_b ? appStore.user?.sym_a : ''}
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
