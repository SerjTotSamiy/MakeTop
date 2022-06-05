import React from "react";
import styles from "../Modal/Modal.module.sass";
import {Icon} from "../Icon/Icon";

const Account = ({userInfo, userName}) => {
    return (
        <div className={styles.modal_account_block}>
            <div className={styles.modal_account_block_item}>
                <div className={styles.account_icons}>
                    <img alt="" src={userInfo?.avatar} />
                    {userName}
                </div>
                <div className={styles.account_icons}>
                    <div className={styles.modal_account_block_circle}>
                        <Icon type="check" width="40px" height="40px" color="green" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;