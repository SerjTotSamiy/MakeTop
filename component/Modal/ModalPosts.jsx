import React, {useEffect, useMemo, useState} from "react";
import {useRouter} from "next/router";

import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {Icon} from "../Icon/Icon";

import styles from "./Modal.module.sass";
import {useStores} from "../../stores";
import {observer} from "mobx-react-lite";

const ModalPosts = observer(() => {
    const router = useRouter();
    const { appStore, modalStore } = useStores();
    const [picturesCount, setPicturesCount] = useState(12);
    const postIcons = {
        Likes: "/postHeart.svg",
        Followers: "/postfollowers.svg",
        Views: "/postview.svg",
        Comments: "/postcomment.svg",
    };
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(null);
    const [activeButton, setActiveButton] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [currentExtras, setCurrentExtras] = useState(null);
    const fillProgress = async () => {
        for (let index = 0; index <= 100; index++) {
            setTimeout(() => {
                setProgressValue(index);
            }, 1500);
        }
    };

    useEffect(() => {
        switch (modalStore.service) {
            case "Likes":
                modalStore.activePosts.length ? setIsLoad(true) : setIsLoad(false);
                break;
            case "Views":
                modalStore.activePosts.length ? setIsLoad(true) : setIsLoad(false);
                break;
            case "Comments":
                modalStore.activePosts.length ? setIsLoad(true) : setIsLoad(false);
                break;
            default:
                setIsLoad(true);
                break;
        }
    }, [modalStore.activePosts])

    useEffect(() => {
        if (modalStore.service === 'Likes') {
            setActiveButton('Instant');
        }
        if (modalStore.service === 'Followers') {
            setActiveButton('Premium');
        }
    }, [])

    useEffect(() => {
        if (!currentPrice) {
            setCurrentPrice(appStore.plans[modalStore.service].plans.find(plan => plan.count === modalStore.item.count));
        }
        currentPrice?.extra && setCurrentExtras(currentPrice.extra);
    }, [currentPrice, modalStore.service]);

    const totalPrice = useMemo(() => {
        let result = +currentPrice?.types[modalStore.activeTariffs.type].price - (+currentPrice?.types[modalStore.activeTariffs.type].discount);
        currentExtras && Object.keys(currentExtras).forEach(key => {
            modalStore.activeTariffs[key] && (result += +currentPrice.extra[key].price);
        })
        return result;
    }, [currentPrice, modalStore.activeTariffs]);

    const onAddImageHandler = () => setPicturesCount(picturesCount + 12)

    const spinner = "/spinner.svg";

    const onButtonClick = async () => {
        if (modalStore.activePosts.length
            || modalStore.service === "Followers"
            || modalStore.service === "Auto-Likes"
            || modalStore.service === "Auto-Likes Subs") {
            setButtonDisabled(true);
        }
        await modalStore.sendOrder();
    }

    return modalStore.item.price === "0.00" ? (
        <>
            <p className={styles.modal_title}>Free Instagram {modalStore.service}</p>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine1.svg" alt="" className={styles.absoluteLine}/>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>
                <div className={styles.modal_stageItem_active}>
                    <p>02</p>
                </div>
            </div>

            {!modalStore.data
                ? <div style={{
                    color: "white",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <h1 style={{textAlign: "center"}}>Loading</h1>
                    <img style={{textAlign: "center"}} src={spinner} alt="spinner"/>
                </div>
                :
            <div className={styles.posts_container}>
                {modalStore.data?.posts?.map((post, index) => {
                    if (index < picturesCount) return (
                        <div
                            key={index}
                            className={styles.posts_item}
                            style={{background: `url(${post.img})`}}
                            onClick={() => {
                                modalStore.setErrorMessage("");
                                modalStore.activePosts.includes(post)
                                    ? modalStore.removeActivePost(post)
                                    : modalStore.activePosts.length <= 9
                                    ? modalStore.addActivePosts(post)
                                    : null;
                            }}
                        >
                            {modalStore.activePosts.includes(post) && (
                                <div className={styles.chosenPost}>
                                    <div
                                        style={{display: "flex", alignItems: "center", gap: 5}}
                                    >
                                        <img alt="" src={postIcons[modalStore.service]}/>
                                        <p>{Math.round(modalStore.item.count / modalStore.activePosts.length)}</p>
                                    </div>
                                    <img alt=""
                                         src="/postClose.svg"
                                         style={{cursor: "pointer"}}
                                         onClick={() => modalStore.removeActivePost(post)}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>}

            {picturesCount < 59 &&
            <div onClick={onAddImageHandler} className={styles.modalMore_block}>
                <span/>
                <span/>
                <span/>
            </div>
            }

            <ButtonComponent
                type="title"
                text="25 free like"
                onClick={() => {
                    modalStore.sendOrder();
                    router.push("/thanks-for-shot");
                }}
            />
        </>
    ) : (
        <>
            <div className={styles.modal_title}>
                <p style={{color: " rgba(40, 95, 255, 1)", maxWidth: "60%"}}>
                    {modalStore.service === "Followers" ? "Choose payment" : modalStore.service === "Auto-Likes" ? `${modalStore.item.count} Auto-Likes per ${modalStore.likesPerPost} new post(s)` : "Choose Post"}
                </p>
                <p>|</p> {appStore.user?.sym_b}{" "}{totalPrice.toFixed(2)}{" "}{!appStore.user?.sym_b ? appStore.user?.sym_a : ""}
            </div>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.5.svg" alt="" className={styles.absoluteLine}/>
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

            {(modalStore.service !== "Followers" && modalStore.service !== "Auto-Likes" && modalStore.service !== "Auto-Likes Subs") ?
                !modalStore.data
                    ? <div style={{
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h1 style={{textAlign: "center"}}>Loading</h1>
                        <img style={{textAlign: "center"}} src={spinner} alt="spinner"/>
                    </div>
                    : <>
                        <div className={styles.posts_container}>
                            {modalStore.data && modalStore.data?.posts?.map((post, index) => {
                                if (index < picturesCount) return (
                                    <div
                                        key={index}
                                        className={styles.posts_item}
                                        style={{background: `url(${post.img})`}}
                                        onClick={() => {
                                            modalStore.setErrorMessage("");
                                            modalStore.activePosts.includes(post)
                                                ? modalStore.removeActivePost(post)
                                                : modalStore.activePosts.length <= 9
                                                ? modalStore.addActivePosts(post)
                                                : null;
                                        }}
                                    >
                                        {modalStore.activePosts.includes(post) && (
                                            <div className={styles.chosenPost}>
                                                <div
                                                    style={{display: "flex", alignItems: "center", gap: 5}}
                                                >
                                                    <img alt="" src={postIcons[modalStore.service]}/>
                                                    <p>{Math.round(modalStore.item.count / modalStore.activePosts.length)}</p>
                                                </div>
                                                <img alt=""
                                                     src="/postClose.svg"
                                                     style={{cursor: "pointer"}}
                                                     onClick={() => modalStore.removeActivePost(post)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {picturesCount < 59 &&
                        <div onClick={onAddImageHandler} className={styles.modalMore_block}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        }
                    </>
                : null
            }
            {
                isLoad &&
                <div className={styles.buttonsRow}>
                    <ButtonComponent
                        className={"title"}
                        text={`${currentPrice?.types?.t1?.name} ${currentPrice?.types?.t1?.price}`}
                        // type={activeButton === currentPrice?.types?.t1?.name ? "title" : "outline"}
                        type={modalStore.activeTariffs.type === "t1" ? "title" : "outline"}
                        onClick={() => {
                            setActiveButton(currentPrice.types.t1.name);
                            modalStore.activeTariffs = {
                                ...modalStore.activeTariffs,
                                type: "t1"
                            }
                        }}
                    />
                    <ButtonComponent
                        text={`${currentPrice?.types?.t2?.name} ${currentPrice?.types?.t2?.price}`}
                        disabled={currentPrice?.types?.t2?.name === "Custom"}
                        // type={activeButton === currentPrice?.types?.t2?.name ? "title" : "outline"}
                        type={modalStore.activeTariffs.type === "t2" ? "title" : "outline"}
                        onClick={() => {
                            setActiveButton(currentPrice.types.t2.name);
                            modalStore.activeTariffs = {
                                ...modalStore.activeTariffs,
                                type: "t2"
                            }
                        }}
                    />
                </div>
            }


            {
                modalStore.service !== "Followers" && isLoad &&
                <div className={styles.addition_block}>
                    {currentExtras && Object.keys(currentExtras).map((key, index) => {
                        const addition = currentExtras[key];
                        return (
                            <div key={index} className={styles.modal_addition_item}>
                                <div className={styles.rowBlock}>
                                    <div
                                        className={styles.modal_account_block_circle}
                                        onClick={() =>
                                            modalStore.activeTariffs = {
                                                ...modalStore.activeTariffs,
                                                [key]: !modalStore.activeTariffs[key]
                                            }
                                        }
                                    >
                                        {modalStore.activeTariffs[key] && (
                                            <Icon
                                                type="check"
                                                width="24px"
                                                height="24px"
                                                color="#0f85ff"
                                            />
                                        )}
                                    </div>
                                    <p>+{addition.count} {addition.name}</p>
                                </div>
                                <div className={styles.rowBlock}>
                                    <p style={{color: "rgba(15, 133, 255, 1)"}}>+{appStore.user?.sym_b}{addition.price} {!appStore.user?.sym_b ?
                                        allInfo?.sym_a : ''}</p>
                                    <div className={styles.modal_account_block_circle} onClick={() => {
                                        setShowModal(!showModal)
                                    }}>
                                        <p style={{color: "rgba(15, 133, 255, 1)"}}>i</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div style={{display: showModal ? "block" : "none"}} className={styles.small}>
                        <p>The number of times your content,
                            whether a post or a story, was shown to users.
                            Impressions help you to promote your post and improve stat.
                        </p>
                        <button onClick={() => setShowModal(false)}>Thanks</button>
                    </div>
                </div>
            }

            <p style={{color: "red", textAlign: "center"}}>{modalStore.errorMessage}</p>

            {
                isLoad &&
                <div className={styles.rowBlock}>
                    <ButtonComponent
                        id={"CHOOSEPAYMENT"}
                        type="title"
                        text={buttonDisabled ? "Loading..." : `Choose payment method for 
                    ${totalPrice.toFixed(2)} ${!appStore.user?.sym_b ? appStore.user?.sym_a : appStore.user?.sym_b}`}
                        style={{maxWidth: 328}}
                        disabled={buttonDisabled}
                        onClick={onButtonClick}
                    />
                </div>
            }
        </>
    );
})

export default ModalPosts;
