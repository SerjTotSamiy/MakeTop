import React, {useState, useMemo, useEffect, useContext} from "react";
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import Account from "../Account/Account";
import {MeContext} from "../../pages/_app";
import ModalHeaderInfo from "./HeaderInfo/ModalHeaderInfo";
import { useStores } from "../../stores";

// eslint-disable-next-line react/display-name
const ModalLogin = ({
    setModal,
    service,
    counts,
    priceValue,
    setUserName,
    userName,
    system,
    usersData,
    setUsers,
    selectUser,
    setUserEmail,
    errorMessage,
    setErrorMessage,
    userEmail,
    getPosts,
    sendOrder,
    currentUser,
    likesPerPost,
    setLikesPerPost
}) => {
    const [isNameClear, setIsNameClear] = useState(null);
    const [checkText, setCheckText] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [modPriceValue, setModPriceValue] = useState(Number(priceValue) || 0);
    const users = JSON.parse(localStorage.getItem('users'));
    const { appStore } = useStores();

    const fillProgress = () => {
        for (let index = 0; index <= 100; index++) {
            setTimeout(() => {
                setProgressValue(index);
            }, 1000);
        }
    };
    const submitHandler = async () => {
        if (checkText && userName && userEmail) setButtonDisabled(false);
        if (!userName) return setErrorMessage('Please fill the username');
        if (!userEmail) return setErrorMessage('Please fill the email');

        setCheckText(true);

        await fillProgress();
        setTimeout(async () => {
            setCheckText(false);
            setProgressValue(0);
            if (service === "Followers") {
                await sendOrder(modPriceValue);
                // if (priceValue === 0) setModal(3);
            } else {
                if (service !== "Auto-Likes") getPosts();
            }

            userName && userEmail && setModal(2);
            // : setIsNameClear(true);

            // userName && userEmail && service !== "Followers"
            //     ? setModal(2)
            //     : userName && userEmail && service === "Followers"
            //     ? setModal(3) : setIsNameClear(true);
        }, 3000);
    };

    const formHandler = ({ target }) => {
        let { value, name, min, max } = target;
        setErrorMessage('');

        switch (name) {
            case "username":
                setUserName(value);
                break;
            case "email":
                setUserEmail(value);
                break;
            case "postsNumber":
                value = Math.max(Number(min), Math.min(Number(max), Number(value)));
                setLikesPerPost(value);
                break;
            default:
                break;
        }

        if (!userName) {
            console.log('username is', userName.length)
            setButtonDisabled(true)
        } else {setButtonDisabled(false)}
    }

    const isButtonDisabled = useMemo(() => {
        return (!(userEmail && userName));
    }, [userName, userEmail])

    useEffect(() => {
        console.log('appstore', appStore);
        if (users && Object.keys(users).length) {
            setUserEmail(users[0].userEmail)
        } else {
            setUserEmail('')
        }
    }, []);

    const autoLikesPerPost = useMemo(() => {
        return Math.round(counts / likesPerPost);
    }, [likesPerPost]);

    return (
        <>
            <ModalHeaderInfo
                counts={counts}
                system={system}
                service={service}
                autoLikes={autoLikesPerPost}
                info={appStore.user}
                price={priceValue}
            />
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.svg" className={styles.absoluteLine}/>
                <div className={styles.modal_stageItem_active}>
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
                usersData.length !== 0 &&
                usersData.map((info) => (
                    <Account
                        key={info.userData.user_id}
                        currentUser={userName}
                        userInfo={info.userData}
                        userName={info.userName}
                        userData={info}
                        type="delete"
                        selectUser={selectUser}
                        setUsers={setUsers}
                        currentUser={currentUser}
                    />))
            }
            <div style={{width: "100%"}}>
                <p>Instagram username (Login)</p>
                <input
                    placeholder="Username"
                    name="username"
                    onChange={formHandler}
                />
            </div>
            {isNameClear && (
                <p style={{color: "red", textAlign: "center"}}>Login is empty</p>
            )}
            {service === "Auto-Likes" &&
                <div style={{width: "100%", marginTop: "-40px"}}>
                    <p>Count of new posts for Auto-Likes (max 99)</p>
                    <input
                        placeholder="For new post"
                        type="number"
                        name="postsNumber"
                        min="1"
                        max="99"
                        value={likesPerPost}
                        onChange={formHandler}
                    />
                </div>
            }
            <div style={{width: "100%", marginTop: "-40px"}}>
                <p>Your email</p>
                <input
                    placeholder="Email"
                    name="email"
                    defaultValue={users?.length ? users[0].userEmail : ''}
                    onChange={formHandler}
                />
            </div>
            <p style={{color: "red", textAlign: "center"}}>{errorMessage}</p>
            <div className={styles.button_wrapper}>
                <ButtonComponent
                    type="title"
                    text={checkText && userName && userEmail && buttonDisabled ? "Loading..." : "Next"}
                    onClick={submitHandler}
                    disabled={buttonDisabled}
                />
                <progress
                    style={{display: checkText && userName && userEmail ? "block" : "none"}}
                    id={styles.modal_progress}
                    min={0}
                    max={100}
                    value={progressValue}
                />
            </div>
        </>
    );
}

export default ModalLogin;
