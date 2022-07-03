import React, {useContext} from "react";
import styles from "./Modal.module.sass";
import {useRouter} from "next/router";
import Link from "next/link";
import {MeContext} from "../../pages/_app";

const ModalPayment = ({result, priceValue, isLoading, service}) => {
    const router = useRouter();
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
            <p className={styles.modal_title}>
                <p style={{color: " rgba(40, 95, 255, 1)"}}> {allInfo?.sym_b}
                    {result?.data?.price ? `${Number(result.data.price).toFixed(2)}` : ""}
                    {!allInfo?.sym_b ? allInfo?.sym_a : ''}
                </p>
            </p>
            <p>Payment methods</p>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine1.svg" alt="" className={styles.absoluteLine}/>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>
                <div className={styles.modal_stageItem_active}>
                    <p>02</p>
                </div>
                {
                    service !== "YouTube" &&
                    <div className={styles.modal_stageItem_active}>
                        <p>03</p>
                    </div>
                }
            </div>
            {!Object.keys(result).length ? (
                <div style={{color: "white"}}>
                    <h1 style={{textAlign: "center"}}>Loading</h1>
                    <img src={spinner} alt="spinner"/>
                </div>
            ) : (
                <div className={styles.payment_block}>
                    {result?.data?.methods?.map((item) => {
                        return (
                            <div
                                key={item?.url_to_pay}
                                className={styles.modal_payment_item}
                                style={{
                                    visibility: item?.name === "PayPal" && item?.price_local <= 10 ||
                                    item?.name === "Trustly" && item?.price_local <= 20 ?
                                        "hidden" : 'visible'
                                }}
                                onClick={() => {
                                    window.open(`${item?.url_to_pay}`, '_ blank')
                                    console.log(item.price_local, item.price_usd)
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
                                        <img src={payments[item?.name]}/>
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
                                        <p>{item?.name}</p>
                                        <p style={{color: 'red'}}>{item?.name === "PayPal" && item?.price_local < 10 ? "Minimum 10$" : ""}</p>
                                        <div className={styles.rowBlock}>
                                            <p style={{
                                                color: item?.url_to_pay
                                                    ? "rgba(0, 200, 0, 1)"
                                                    : "rgba(200, 200, 200, 0.8)"
                                            }}>
                                                {/*{allInfo.sym_b}*/}
                                                {item?.price_local ? item.price_local : item.price_usd}
                                                {!allInfo?.sym_b && item?.price_local !== null ? allInfo?.sym_a : "$"}
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
                    })}
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
                            >
                                rules
                            </a>
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
};

export default ModalPayment;
