import React, { useState } from "react";
import styles from "./Modal.module.sass";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import Account from "../Account/Account";

const ModalLogin = ({
  setModal,
  service,
  counts,
  priceValue,
  setUserName,
  userName,
  system,
  userInfo
}) => {
  const [isNameClear, setIsNameClear] = useState(null);
  const [checkText, setCheckText] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const fillProgress = () => {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        setProgressValue(index);
      }, 1000);
    }
  };
  const isUserNameWritten = () => {
    setCheckText(true);
    fillProgress();

    setTimeout(() => {
      setCheckText(false);
      setProgressValue(0);
      userName ? setModal(2) : setIsNameClear(true);
    }, 3000);
  };
  return (
    <>
      <div className={styles.modal_title}>
        <p style={{ color: " rgba(40, 95, 255, 1)" }}>
          {counts} {system} {service}
        </p>
        <p>|</p>${priceValue} One Time
      </div>
      <div className={styles.modal_stageBlock}>
        <img src="/stageLine0.svg" className={styles.absoluteLine} />
        <div className={styles.modal_stageItem_active}>
          <p>01</p>
        </div>

        <div className={styles.modal_stageItem}>
          <p>02</p>
        </div>
        <div className={styles.modal_stageItem}>
          <p>03</p>
        </div>
      </div>
      {Object.keys(userInfo).length !== 0 &&
          <Account userInfo={userInfo} userName={userName} />
      }
      <div style={{ width: "100%" }}>
        <p>Instagram username (Login)</p>
        <input
          placeholder="Username"
          onChange={(e) => setUserName((prev) => e.target.value)}
        />
      </div>
      {isNameClear && (
        <p style={{ color: "red", textAlign: "center" }}>Login is empty</p>
      )}
      <div className={styles.button_wrapper}>
        <ButtonComponent
          type="title"
          text={checkText && userName ? "Loading..." : "Next"}
          onClick={isUserNameWritten}
        />
        <progress
          style={{ display: checkText && userName ? "block" : "none" }}
          id={styles.modal_progress}
          min={0}
          max={100}
          value={progressValue}
        />
      </div>
    </>
  );
};

export default ModalLogin;
