import React from "react";
import styles from "../Modal/Modal.module.sass";
import {Icon} from "../Icon/Icon";

const removeSavedUser = (name, setUsers) => {
    const users = JSON.parse(localStorage.getItem('users'));

    console.log('remove user');

    users.length
        ? localStorage.setItem('users', JSON.stringify(users.filter(u => u.userName !== name)))
        : localStorage.clear();

    setUsers(users);
}

const Account = ({userInfo, userName, type = "check", setUsers = () => {}, selectUser, userData}) => {
    return (
        <div className={styles.modal_account_block}>
            <div className={styles.modal_account_block_item}>
                <div className={styles.account_icons} onClick={() => selectUser(userData, type)}>
                    <img alt="" src={userInfo?.avatar}/>
                    {userName}
                </div>
                <div className={styles.account_icons}>
                    <div
                        className={styles.modal_account_block_circle}
                        onClick={() => type === "delete" && removeSavedUser(userName, setUsers)}
                    >
                        <Icon type={type} width="40px" height="40px" color="green" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;