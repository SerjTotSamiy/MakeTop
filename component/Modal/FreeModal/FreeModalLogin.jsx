import React, { useState } from "react";
import styles from "../Modal.module.sass";
import { ButtonComponent } from "../../ButtonComponent/ButtonComponent";
import { validateEmail } from "../helpers";
import Account from "../../Account/Account";

const FreeModalLogin = ({
  setModal,
  userName,
  userEmail,
  service,
  setUserName,
  getPosts,
  errorMessage,
  setUserEmail,
  usersData,
  selectUser,
  setUsers
}) => {
  const [loginError, setLoginError] = useState({
    isError: false,
    errorMessage: "Please enter your login."
  })
  const [emailError, setEmailError] = useState({
    isError: false,
    errorMessage: "Please enter your email."
  })
  const [checkText, setCheckText] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const validateFormWithJS = () => {
    if (!userName) {
        setLoginError({
            ...loginError,
            isError: true
        })
    }

    if (!userEmail || !validateEmail(userEmail)) {
        setEmailError({
            ...emailError,
            isError: true
        })
    }

    return true;
  }

  const fillProgress = () => {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        setProgressValue(index);
      }, 1000);
    }
  };

  const submitHandler = async () => {
    setCheckText(true);
    validateFormWithJS()
      // if (userName.length && userEmail.length && validateEmail(userEmail)) {
      //     getPosts()
      //     setModal(2)
      // }

    await fillProgress();
    setTimeout(() => {
        setCheckText(false);
        setProgressValue(0);
        getPosts();
        userName && userEmail && setModal(2);
    }, 3000);
  };

  return (
    <>
      <p className={styles.modal_title}>Free Instagram {service}</p>
      <div className={styles.modal_stageBlock}>
        <div className={styles.modal_stageItem_active}>
          <p>01</p>
        </div>
        <img src="/stageLine0.svg" alt="" />
        <div className={styles.modal_stageItem}>
          <p>02</p>
        </div>
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
            />))
        }
      <div style={{ width: "100%" }}>
        <p>Instagram username (Login)</p>
        <input
          placeholder="Username"
          onChange={(e) => {
              loginError.isError && setLoginError({
                  ...loginError,
                  isError: false
              })
              setUserName(e.target.value)
          }}
          required
        />
      </div>
      {loginError.isError && <p style={{color: "red", textAlign: "center", marginTop: "-36px" }}>{loginError.errorMessage}</p>}
      <div style={{ width: "100%", marginTop: "-40px" }}>
        <p>Your email</p>
        <input
            placeholder="Email"
            required
            onChange={(e) => {
                emailError.isError &&
                    setEmailError({
                        ...emailError,
                        isError: false
                    })
                setUserEmail(e.target.value)
            }}
        />
      </div>
      {emailError.isError && <p style={{ color: "red", textAlign: "center", marginTop: "-36px" }}>{emailError.errorMessage}</p>}
      <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>


        <div className={styles.button_wrapper}>
            <ButtonComponent
                type="title"
                text={checkText && userName && userEmail ? "Loading..." : "Next"}
                onClick={submitHandler}
            />
            <progress
                style={{display: checkText && userName && userEmail ? "block" : "none"}}
                id={styles.modal_progress}
                min={0}
                max={100}
                value={progressValue}
            />



            {/*<ButtonComponent*/}
            {/*    type="title"*/}
            {/*    text={checkText && userEmail ? "Loading..." : "Next"}*/}
            {/*    onClick={}*/}
            {/*/>*/}
            {/*<progress*/}
            {/*    style={{ display: checkText && userEmail ? "block" : "none" }}*/}
            {/*    id={styles.modal_progress}*/}
            {/*    min={0}*/}
            {/*    max={100}*/}
            {/*    value={progressValue}*/}
            {/*/>*/}
        </div>


      {/*<ButtonComponent type="title" text="Next" onClick={() => {*/}
      {/*    validateFormWithJS()*/}
      {/*    if (userName.length && userEmail.length && validateEmail(userEmail)) {*/}
      {/*        getPosts()*/}
      {/*        setModal(2)*/}
      {/*    }*/}

      {/*}} />*/}
    </>
  );
};

export default FreeModalLogin;
