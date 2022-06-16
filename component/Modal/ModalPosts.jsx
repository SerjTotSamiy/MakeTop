import React, {useEffect, useMemo, useState} from "react";
import {useRouter} from "next/router";

import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {Icon} from "../Icon/Icon";

import styles from "./Modal.module.sass";
import {add} from "react-modal/lib/helpers/classList";

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
    result,
    picturesCount,
    setPicturesCount,
    prices
                    }) => {
    const router = useRouter();
    const [activeAddition, setActiveAddition] = useState([]);
    const [modPriceValue, setModPriceValue] = useState(Number(priceValue) || 0);
    const [changeBG, setChangeBG] = useState(false);
    const [secondChangeBG, setSecondChangeBG] = useState(true);
    const postIcons = {
        Likes: "/postHeart.svg",
        Followers: "/postfollowers.svg",
        Views: "/postview.svg",
        Comments: "/postcomment.svg",
    };
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const {query} = useRouter();
    const [currentPrice, setCurrentPrice] = useState(null);
    const [activeButton, setActiveButton] = useState('Instant');
    const [currentTarifs, setCurrentTarifs] = useState(null);
    const [activeTarifs, setActiveTarifs] = useState({
        type: 't2',
        e1: false,
        e2: false,
        e3: false
    })
    const [currentExtras, setCurrentExtras] = useState(null);
    // const [totalPrice, setTotalPrice] = useState(0);
    const additions = [1, 2, 3];
    const fillProgress = async () => {
        for (let index = 0; index <= 100; index++) {
            setTimeout(() => {
                setProgressValue(index);
            }, 1500);
        }
    };

    useEffect(() => {
        console.log('current price is', ...prices[query?.service]?.plans.filter(plan => plan.count === query?.counts));
        setCurrentPrice(...prices[query?.service]?.plans.filter(plan => plan.count === query?.counts));
        // currentPrice &&
        const data = prices[query?.service]?.plans.filter(plan => plan.count === query?.counts);
        const result = [];
        data.length && Object.keys(data[0].extra).forEach(key => result.push(data[0].extra[key]));
        // console.log('result is', result);
        setCurrentExtras(data[0].extra);
        // console.log(activeButton);
        // setTotalPrice(priceValue);
        // setActiveButton(currentPrice.types.t2.name);
    }, []);

    const totalPrice = useMemo(() => {
        let result = +currentPrice?.types[activeTarifs.type].price;
        currentExtras && Object.keys(currentExtras).forEach(key => {
            activeTarifs[key] && (result += +currentPrice.extra[key].price);
        })
        return result;
    }, [currentPrice, activeTarifs]);

    const deleteActiveAddition = (item) => {
        const newAddition = activeAddition.filter((addition) => addition !== item);
        setActiveAddition(newAddition);
    };
    const [buttonType, setButtonType] = useState({
        1: "title",
        2: "outline",
    });

    const onAddImageHandler = () => setPicturesCount(picturesCount + 12)

    const spinner = "/spinner.svg";

    const onButtonClick = async () => {
        if (activePost.length) setButtonDisabled(true)
        await sendOrder()
    }

    return priceValue === "0.00" ? (
        <>
            <p className={styles.modal_title}>Free Instagram {service}</p>
            <img src="/stageLine1.svg" alt="" className={styles.absoluteLine}/>
            <div className={styles.modal_stageBlock}>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>
                <div className={styles.modal_stageItem_active}>
                    <p>02</p>
                </div>
            </div>

            <div className={styles.posts_container}>
                {userInfo?.posts?.map((post, index) => {
                    if (index < picturesCount) return (
                        <div
                            key={index}
                            className={styles.posts_item}
                            style={{background: `url(${post.img})`}}
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
                                        style={{display: "flex", alignItems: "center", gap: 5}}
                                    >
                                        <img alt="" src={postIcons[service]}/>
                                        <p>{Math.round(counts / activePost.length)}</p>
                                    </div>
                                    <img alt=""
                                         src="/postClose.svg"
                                         style={{cursor: "pointer"}}
                                         onClick={() => deleteActivePost(post)}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
                <button onClick={onAddImageHandler}>more pictures</button>
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
                <p style={{color: " rgba(40, 95, 255, 1)"}}>
                    Choose Post
                </p>
                <p>|</p> ${currentPrice?.price} One Time
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

            {
                !Object.keys(userInfo).length
                    ? <div style={{color: "white"}}>
                        <h1 style={{textAlign: "center"}}>Loading</h1>
                        <img src={spinner} alt="spinner"/>
                    </div>
                    : <>
                        <div className={styles.posts_container}>
                            {userInfo && userInfo?.posts?.map((post, index) => {
                                if (index < picturesCount) return (
                                    <div
                                        key={index}
                                        className={styles.posts_item}
                                        style={{background: `url(${post.img})`}}
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
                                                    style={{display: "flex", alignItems: "center", gap: 5}}
                                                >
                                                    <img alt="" src={postIcons[service]}/>
                                                    <p>{Math.round(counts / activePost.length)}</p>
                                                </div>
                                                <img alt=""
                                                     src="/postClose.svg"
                                                     style={{cursor: "pointer"}}
                                                     onClick={() => deleteActivePost(post)}
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
                        <div className={styles.buttonsRow}>
                            <ButtonComponent
                                className={"title"}
                                text={`${currentPrice?.types?.t1?.name} ${currentPrice?.types?.t1?.price}`}
                                type={activeButton === currentPrice?.types?.t1?.name ? "title" : "outline"}
                                onClick={() => {
                                    setActiveButton(currentPrice.types.t1.name);
                                    setActiveTarifs({
                                        ...activeTarifs,
                                        type: "t1"
                                    })
                                    // setTotalPrice(currentPrice.types.t1.price);
                                    // setChangeBG(true)
                                    // setButtonType(userInfo?.plan?.types?.t1);
                                    // console.log(currentPrice.types.t1);
                                }}
                            />
                            <ButtonComponent
                                text={`${currentPrice?.types?.t2?.name} ${currentPrice?.types?.t2?.price}`}
                                disabled={currentPrice?.types?.t2?.name === "Custom"}
                                type={activeButton === currentPrice?.types?.t2?.name ? "title" : "outline"}
                                onClick={() => {
                                    setActiveButton(currentPrice.types.t2.name);
                                    setActiveTarifs({
                                        ...activeTarifs,
                                        type: "t2"
                                    })
                                    // setTotalPrice(currentPrice.types.t2.price);
                                    // console.log(activeButton);
                                }}
                            />
                        </div>
                    </>
            }
            <div className={styles.addition_block}>
                {/*<button onClick={() => Object.keys(currentExtras).forEach(key => console.log(key))}>click me</button>*/}
                {currentExtras && Object.keys(currentExtras).map((key, index) => {
                    const addition = currentExtras[key];
                    return (
                        <div key={index} className={styles.modal_addition_item}>
                            <div className={styles.rowBlock}>
                                <div
                                    className={styles.modal_account_block_circle}
                                    onClick={() =>
                                        setActiveTarifs({
                                            ...activeTarifs,
                                            [key]: !activeTarifs[key]
                                        })
                                        // console.log(addition);
                                        // // setTotalPrice(totalPrice + Number(addition.price));
                                        // if (activeAddition.includes(addition)) {
                                        //     // setTotalPrice((prev) => {
                                        //     //     const prevNumber = Number(prev);
                                        //     //     const additionPrice = Number(addition.price);
                                        //     //     return (prevNumber - additionPrice).toFixed(2);
                                        //     // });
                                        //     setActiveTarifs({
                                        //         ...activeTarifs,
                                        //         [key]: false
                                        //     });
                                        //     deleteActiveAddition(addition);
                                        // } else {
                                        //     // setTotalPrice((prev) => {
                                        //     //     const prevNumber = Number(prev);
                                        //     //     const additionPrice = Number(addition.price);
                                        //     //     return (prevNumber + additionPrice).toFixed(2);
                                        //     // });
                                        //     setActiveTarifs({
                                        //         ...activeTarifs,
                                        //         [key]: true
                                        //     })
                                        //     setActiveAddition([...activeAddition, addition])
                                        // }
                                    }
                                >
                                    {activeTarifs[key] && (
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
                                <p style={{color: "rgba(15, 133, 255, 1)"}}>+${addition.price}</p>
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
            <p style={{color: "red", textAlign: "center"}}>{errorMessage}</p>
            <div className={styles.rowBlock}>
                <ButtonComponent
                    id={"CHOOSEPAYMENT"}
                    type="title"
                    text={buttonDisabled ? "Loading..." : `Choose payment method for $ ${totalPrice.toFixed(2)}`}
                    style={{ maxWidth: 328 }}
                    disabled={buttonDisabled}
                    onClick={onButtonClick}
                />
                <div
                    className={styles.modal_account_block_circle}
                    style={{
                        borderColor: "rgba(15, 133, 255, 1)",
                        width: 40,
                        height: 40,
                    }}
                >
                    <img alt="" src="/shopping-cart.svg"/>
                </div>
            </div>
        </>
    );
};

export default ModalPosts;
