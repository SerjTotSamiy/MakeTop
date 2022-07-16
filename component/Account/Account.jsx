import React, { useState, useEffect } from "react";
import styles from "../Modal/Modal.module.sass";
import { Icon } from "../Icon/Icon";
import {useStores} from "../../stores";

const userPicture = '/male-user-shadow-svgrepo-com.svg';

// const removeSavedUser = (name, setUsers) => {
//     const users = JSON.parse(localStorage.getItem('users'));
//
//     users.length
//         ? localStorage.setItem('users', JSON.stringify(users.filter(u => u.userName !== name)))
//         : localStorage.clear();
//
//     setUsers(users);
// }

const Account = ({
    // currentUser = "",
    userInfo,
    userName,
    // type = "check",
    // setUsers = () => { },
    // selectUser,
    // userData
}) => {
    const { appStore, modalStore } = useStores();
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(true);

    const selectUser = () => {
        setChecked(true);
        setTimeout(() => {
            if (modalStore.service === "Followers" || modalStore.service === "Auto-Likes Subs") {
                if (modalStore.system === "instagram") {
                    modalStore.modal = 2;
                }
            } else {
                if (modalStore.service !== "Auto-Likes") modalStore.getPosts(userName).catch((err) => console.log(err));
            }


            // if (modalStore.service === "Followers" && modalStore.system === "instagram") {
            //     modalStore.modal = 2;
            // } else {
            //     modalStore.getPosts(userName).catch((err) => console.log(err));
            // }
        }, 1500)
    }

    return (
        <div className={styles.modal_account_block} style={{ display: show ? "block" : "none" }}>
            <div className={styles.modal_account_block_item}>
                <div className={styles.account_icons} onClick={selectUser}>
                    <img alt="" src={userInfo?.avatar} />
                    {userName}
                </div>

                <div className={styles.account_icons}>
                    <div
                        className={styles.modal_account_block_circle}
                        onClick={selectUser}
                    >
                        {checked && <Icon type="check" width="40px" height="40px" color="green" />}
                    </div>
                    <div
                        className={styles.modal_account_block_circle}
                        onClick={() => {
                            setShow(false)
                            appStore.removeUser(userName)
                        }}
                    >
                        <Icon type="delete" width="24px" height="24px" color="#0f85ff" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
