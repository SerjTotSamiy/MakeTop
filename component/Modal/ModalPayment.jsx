import React from "react";
import styles from "./Modal.module.sass";
import Link from "next/link";
import {useStores} from "../../stores";
import {observer} from "mobx-react-lite";
import {colors, gradient, shadow} from "../../shared/colors";

const ModalPayment = observer(() => {
    const { appStore, modalStore } = useStores();
    const payments = {
        Mastercard: "/paymentMastercard.svg",
        PayPal: "/paymentPayPal.svg",

        Coinbase: "/coinbase.svg",

        Payop: "/payop.svg",
        CGBilling: "/cgbilling.svg",

        Trustly: "/trustly.svg",
    };

    const spinner = "/spinner.svg";

    return (
        <>
            {modalStore.paymentData
                && <p className={styles.modal_title}>
                    <p style={modalStore.system === "Vk.com"
                        ? { color: colors.vk.likesColor.color }
                        : { color: colors[modalStore.system.toLowerCase()].likesColor.color }
                    }> {appStore.user?.sym_b}
                        {modalStore.paymentData?.data?.price ? `${Number(modalStore.paymentData.data.price).toFixed(2)}` : ""}
                        {!appStore.user?.sym_b ? appStore.user?.sym_a : ''}
                    </p>
                </p>
            }
            <p>Payment methods</p>
            <div className={styles.modal_stageBlock}>
                <svg className={styles.absoluteLine} width="215" height="6" viewBox="0 0 215 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="215" height="6" fill={
                        modalStore.system === "Vk.com"
                            ? colors.vk.likesColor.color
                            : colors[modalStore.system.toLowerCase()].likesColor.color
                    }/>
                </svg>
                {/*<img src="/stageLine1.svg" alt="" />*/}
                <div className={styles.modal_stageItem_active} style={
                    modalStore.system === "Vk.com"
                        ? {
                        background: gradient.vk,
                        boxShadow: shadow.vk
                    }
                        : {
                        background: gradient[modalStore.system.toLowerCase()],
                        boxShadow: shadow.vk
                    }
                }>
                    <p>01</p>
                </div>
                <div className={styles.modal_stageItem_active} style={
                    modalStore.system === "Vk.com"
                        ? {
                            background: gradient.vk,
                            boxShadow: shadow.vk
                        }
                        : {
                            background: gradient[modalStore.system.toLowerCase()],
                            boxShadow: shadow.vk
                        }
                }>
                    <p>02</p>
                </div>
                {
                    modalStore.system === "instagram" &&
                    <div className={styles.modal_stageItem_active}>
                        <p>03</p>
                    </div>
                }
            </div>
            {modalStore.paymentData && !Object.keys(modalStore.paymentData).length ? (
                <div style={{color: "white"}}>
                    <h1 style={{textAlign: "center"}}>Loading</h1>
                    <img src={spinner} alt="spinner"/>
                </div>
            ) : (
                <div className={styles.payment_block}>
                    {
                        !modalStore.paymentData
                            ? <div style={{
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                <h1 style={{textAlign: "center"}}>Loading</h1>
                                <img style={{textAlign: "center"}} src={spinner} alt="spinner"/>
                            </div>
                            : modalStore.paymentData?.data?.methods?.map((item) => {
                                    if (item.available)
                                        return (
                                            <div
                                                key={item?.url_to_pay}
                                                className={styles.modal_payment_item}
                                                style={{
                                                    visibility: item?.title === "PayPal" && item?.price_local <= 10 ||
                                                    item?.title === "Trustly" && item?.price_local <= 20 ?
                                                        "hidden" : 'visible'
                                                }}
                                                onClick={() => {
                                                    window.open(`${item?.url_to_pay}`, '_ blank')
                                                }}
                                            >
                                                <div className={styles.rowBlock}>
                                                    <div
                                                        style={{
                                                            borderRadius: 7,
                                                            width: 85,
                                                            height: 85,
                                                            backgroundColor: "white",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <img src={item.logo} alt={item.name} />
                                                    </div>
                                                    <div
                                                        className={styles.rowBlock}
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "flex-start",
                                                            gap: 5
                                                        }}
                                                    >
                                                        <p>{item?.title}</p>
                                                        <p style={{color: 'red'}}>{item?.title === "PayPal" && item?.price_local < 10 ? "Minimum 10$" : ""}</p>
                                                        <div className={styles.rowBlock}>
                                                            <p style={{
                                                                color: item?.url_to_pay
                                                                    ? "rgba(0, 200, 0, 1)"
                                                                    : "rgba(200, 200, 200, 0.8)"
                                                            }}>
                                                                {item?.price_local ? item.price_local : item.price_usd}
                                                                {!appStore.user?.sym_b && item?.price_local !== null ? appStore.user?.sym_a : "$"}
                                                            </p>
                                                            {item?.tax !== 0 && (
                                                                <p style={{color: "rgba(112, 112, 112, 1)"}}>
                                                                    +{item?.tax}% VAT
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        border:
                                                            item?.discount < 0
                                                                ? " 2px solid rgba(0, 200, 0, 1)"
                                                                : "2px solid rgba(15, 133, 255, 1)",
                                                        borderRadius: 7,
                                                        color: item?.discount < 0 ? "rgba(0, 200, 0, 1)" : "white",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        width: 60,
                                                        height: 60,
                                                    }}
                                                >
                                                    <p>{item?.discount}%</p>
                                                </div>
                                            </div>
                                        );
                                })
                    }
                    <p
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#707070",
                        }}
                    >
                        By purchasing, you agree with{" "}
                        <Link href="/privacy-policy">
                            <a
                                style={{
                                    color: "rgba(15, 133, 255, 1)",
                                    textDecoration: "underline",
                                    marginLeft: 5,
                                    cursor: "pointer",
                                }}
                                target="_blank"
                            >
                                rules
                            </a>
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
})

export default ModalPayment;
