import React, {useState, memo, useEffect} from "react";
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import Account from "../Account/Account";

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
  userEmail,
  getPosts,
  sendOrder,
  currentUser
}) => {
  const [isNameClear, setIsNameClear] = useState(null);
  const [checkText, setCheckText] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [modPriceValue, setModPriceValue] = useState(Number(priceValue) || 0);
  const users = JSON.parse(localStorage.getItem('users'));

  const fillProgress = () => {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        setProgressValue(index);
      }, 1000);
    }
  };
  const submitHandler = async () => {
    if (checkText && userName && userEmail) setButtonDisabled(true)
    setCheckText(true);

    await fillProgress();
    setTimeout(async () => {
      setCheckText(false);
      setProgressValue(0);
      if (service === "Followers") {
        await sendOrder(modPriceValue)
      } else {
        getPosts()
      }
      userName && userEmail && service !== "Followers"
          ? setModal(2)
          : userName && userEmail && service === "Followers"
          ? setModal(3) : setIsNameClear(true);
    }, 3000);
  };

    useEffect(() => {
        if (users[0]) {
            // console.log(users[0])
            // console.log('current user 0')
            setUserEmail(users[0].userEmail)
        } else {
            setUserEmail('')
        }
    }, [])

    return (
        <>
            <div className={styles.modal_title}>
                <p style={{color: " rgba(40, 95, 255, 1)"}}>
                    {counts} {system} {service}
                </p>
                <p>|</p>${priceValue} One Time
            </div>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.svg" className={styles.absoluteLine}/>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>

                <div className={styles.modal_stageItem}>
                    <p>02</p>
                </div>
                {
                    service !== "Followers" &&
                    <div className={styles.modal_stageItem}>
                        <p>03</p>
                    </div>
                }  
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
      <div style={{ width: "100%", marginTop: "-40px" }}>
        <p>Your email</p>
        <input
          placeholder="Email"
          defaultValue={users?.length ? users[0].userEmail : ''}
          onChange={(e) => setUserEmail((prev) => e.target.value)}
        />
      </div>
      <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      <div className={styles.button_wrapper}>
        <ButtonComponent
          type="title"
          text={checkText && userName && userEmail && buttonDisabled ? "Loading..." : "Next"}
          onClick={submitHandler}
          disabled={buttonDisabled}
        />
        <progress
          style={{ display: checkText && userName && userEmail ? "block" : "none" }}
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
