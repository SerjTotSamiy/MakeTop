import React, {useState, useMemo, useEffect, useContext} from "react";
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import Account from "../Account/Account";
import ModalHeaderInfo from "./HeaderInfo/ModalHeaderInfo";
import {useStores} from "../../stores";
import {observer} from "mobx-react-lite";
import {validateEmail} from "./helpers";
import {gradient} from "../../shared/colors";

// eslint-disable-next-line react/display-name
const ModalLogin = observer(() => {
    const [isNameClear, setIsNameClear] = useState(null);
    const [checkText, setCheckText] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    const [isProgressDisplay, setIsProgressDisplay] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isNewUser, setIsNewUser] = useState(true);
    const {appStore, modalStore} = useStores();

    const fillProgress = () => {
        for (let index = 0; index <= 100; index++) {
            setTimeout(() => {
                setProgressValue(index);
            }, 1000);
        }
    };
    const submitHandler = async () => {
        if (checkText && modalStore.user.username && modalStore.user.email) setButtonDisabled(false);
        if (!modalStore.user.username) return modalStore.setErrorMessage('Please fill the username');
        if (!modalStore.user.email) return modalStore.setErrorMessage('Please fill the email');
        if (!validateEmail(modalStore.user.email)) return modalStore.setErrorMessage('Email is incorrect');

        setIsProgressDisplay(true);
        setCheckText(true);

        await fillProgress();
        setTimeout(async () => {
            setCheckText(false);
            setProgressValue(0);
            if (modalStore.service === "Followers" || modalStore.service === "Auto-Likes Subs") {
                if (modalStore.system === "instagram") {
                    modalStore.modal = 2;
                }
                // await modalStore.sendOrder();
                // if (priceValue === 0) setModal(3);
            } else {
                if (modalStore.service !== "Auto-Likes") await modalStore.getPosts();
            }

            if (modalStore.user.username && modalStore.user.email) {
                modalStore.modal = 2
            }
            // : setIsNameClear(true);

            // userName && userEmail && service !== "Followers"
            //     ? setModal(2)
            //     : userName && userEmail && service === "Followers"
            //     ? setModal(3) : setIsNameClear(true);
        }, 3000);
    };

    useEffect(() => {
        modalStore.user.email = appStore.users?.length ? appStore.users[0].userEmail : "";
        if (appStore.users?.length) setIsNewUser(false);
    }, [])

    const formHandler = ({target}) => {
        let {value, name, min, max} = target;
        modalStore.setErrorMessage('');
        modalStore.setUserData(name, value);

        if (name === "postsNumber") {
            value = Math.max(Number(min), Math.min(Number(max), Number(value)));
            modalStore.setLikesPerPost(value);
        }

        // switch (name) {
        //     case "postsNumber":
        //         value = Math.max(Number(min), Math.min(Number(max), Number(value)));
        //         modalStore.setLikesPerPost(value);
        //         break;
        //     default:
        //         break;
        // }

        if (!modalStore.user.username || !modalStore.user.email) {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
    }

    // const isButtonDisabled = useMemo(() => {
    //     return (!(modalStore.user.email && modalStore.user.name));
    // }, [modalStore.user.name, modalStore.user.email])

    const autoLikesPerPost = useMemo(() => {
        return Math.round(modalStore.item.count / modalStore.likesPerPost);
    }, [modalStore.likesPerPost]);

    return (
        <>
            <ModalHeaderInfo
                counts={modalStore.item.count}
                system={modalStore.system}
                service={modalStore.service}
                autoLikes={autoLikesPerPost}
                info={appStore.user}
                price={modalStore.item.price}
            />
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.svg" className={styles.absoluteLine}/>
                <div className={styles.modal_stageItem_active} style={
                    modalStore.system === "Vk.com"
                        ? {background: gradient.vk}
                        : {background: gradient[modalStore.system.toLowerCase()]}

                }>
                    <p>01</p>
                </div>

                <div className={styles.modal_stageItem}>
                    <p>02</p>
                </div>
                {/*{*/}
                {/*    // service !== "Followers" &&*/}
                <div className={styles.modal_stageItem}>
                    <p>03</p>
                </div>
                {/*}*/}
            </div>
            {
                appStore.users?.length !== null &&
                appStore.users?.map((info) => (
                    <Account
                        key={info.userData.user_id}
                        // currentUser={modalStore.user.userName}
                        userInfo={info.userData}
                        userName={info.userName}
                        // userData={info}
                        // type="delete"
                        // selectUser={selectUser}
                        // setUsers={setUsers}
                    />))
            }
            {isNewUser
                ? <div style={{width: "100%"}}>
                    <p>Instagram username (Login)</p>
                    <input
                        placeholder="Username"
                        name="username"
                        onChange={formHandler}
                    />
                </div>
                : <p
                    className={styles.new_user}
                    onClick={() => setIsNewUser(true)}
                >Add new one</p>
            }

            {isNameClear && (
                <p style={{color: "red", textAlign: "center"}}>Login is empty</p>
            )}
            {(modalStore.service === "Auto-Likes" || modalStore.service === "Auto-Likes Subs") &&
            <div style={{width: "100%", marginTop: "-40px"}}>
                <p>Count of new posts for Auto-Likes (max 99)</p>
                <input
                    placeholder="For new post"
                    type="number"
                    name="postsNumber"
                    min="1"
                    max="99"
                    value={modalStore.likesPerPost}
                    onChange={formHandler}
                />
            </div>
            }
            <div style={{width: "100%", marginTop: "-40px"}}>
                <p>Your email</p>
                <input
                    placeholder="Email"
                    name="email"
                    defaultValue={modalStore.user.email}
                    onChange={formHandler}
                />
            </div>
            <p style={{color: "red", textAlign: "center"}}>{appStore.errorMessage}</p>

            {
                isNewUser &&
                <div className={styles.button_wrapper}>
                    <ButtonComponent
                        type={modalStore.system ? "title" : modalStore.system.toLowerCase()}
                        text={checkText && modalStore.user.name && modalStore.user.email && buttonDisabled ? "Loading..." : "Next"}
                        onClick={submitHandler}
                        disabled={buttonDisabled}
                    />
                    <progress
                        style={{display: isProgressDisplay ? "block" : "none"}}
                        id={styles.modal_progress}
                        min={0}
                        max={100}
                        value={progressValue}
                    />
                </div>
            }
        </>
    );
})

export default ModalLogin;
