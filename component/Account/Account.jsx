import React, { useState, useEffect } from "react";
import styles from "../Modal/Modal.module.sass";
import { Icon } from "../Icon/Icon";

const userPicture = '/male-user-shadow-svgrepo-com.svg';

const removeSavedUser = (name, setUsers) => {
    const users = JSON.parse(localStorage.getItem('users'));

    users.length
        ? localStorage.setItem('users', JSON.stringify(users.filter(u => u.userName !== name)))
        : localStorage.clear();

    setUsers(users);
}

const Account = ({ currentUser = "", userInfo, userName, type = "check", setUsers = () => { }, selectUser, userData }) => {
    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        console.log('rerender acc');
        currentUser === userName ? setChecked(true) : setChecked(false);
    }, [currentUser]);


    return (
        <div className={styles.modal_account_block} style={{ display: show ? "block" : "none" }}>
            <div className={styles.modal_account_block_item}>
                <div className={styles.account_icons} onClick={() => selectUser(userData, type)}>
                    <img alt="" src={userPicture} />
                    {userName}
                </div>

                <div className={styles.account_icons}>
                    <div
                        className={styles.modal_account_block_circle}
                        onClick={() => selectUser(userData, type)}
                    >
                        {checked && <Icon type="check" width="40px" height="40px" color="green" />}
                    </div>
                    <div
                        className={styles.modal_account_block_circle}
                        onClick={() => {
                            setShow(false)
                            removeSavedUser(userName, setUsers)
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