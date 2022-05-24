import React, { useState } from "react";
import { ButtonComponent } from "../../ButtonComponent/ButtonComponent";
import { Icon } from "../../Icon/Icon";

import styles from "../Modal.module.sass";

const FreeModalAccount = ({ setModal, userInfo, userName }) => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState([]);
  const validateEmail = (email) => {
    setError(
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };
  console.log(userInfo?.posts);
  return (
    <>
      <div>
        <p className={styles.modal_title}>Choose Account</p>
      </div>
      <div className={styles.modal_stageBlock}>
        <div className={styles.modal_stageItem_active}>
          <p>01</p>
        </div>
        <img src="/stageLine0.5.svg" alt="" />
        <div className={styles.modal_stageItem}>
          <p>02</p>
        </div>
      </div>

      <ButtonComponent
        type="outline"
        text="Add new one"
        onClick={() => setModal(1)}
      />

      <div className={styles.modal_account_block}>
        <div className={styles.modal_account_block_item}>
          <div className={styles.account_icons}>
            <img src={userInfo?.avatar} alt="" />
            {userName}
          </div>
          <div className={styles.account_icons}>
            <div className={styles.modal_account_block_circle}>
              <Icon type="check" width="24px" height="24px" color="#0f85ff" />
            </div>
            <div className={styles.modal_account_block_circle}>
              <Icon type="delete" width="24px" height="24px" color="#0f85ff" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <p>Your email</p>
        <input
          placeholder="customer@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && error === null && (
          <p style={{ color: "red", fontSize: 12 }}>
            You entered an invalid email
          </p>
        )}
      </div>
      <ButtonComponent type="title" text="Next" onClick={() => setModal(4)} />
    </>
  );
};

export default FreeModalAccount;
