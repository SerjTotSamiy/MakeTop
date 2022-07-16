import React, {useEffect, useState} from "react";
import styles from "../Modal.module.sass";
import { ButtonComponent } from "../../ButtonComponent/ButtonComponent";
import { validateEmail } from "../helpers";
import Account from "../../Account/Account";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";

const FreeModalLogin = observer(({
  // setModal,
  // userName,
  // userEmail,
  // service,
  // setUserName,
  // getPosts,
  // errorMessage,
  // setUserEmail,
  // usersData,
  selectUser,
  setUsers
}) => {
    const { appStore, modalStore } = useStores();
    const [isProgressDisplay, setIsProgressDisplay] = useState(false);
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
  const [isNewUser, setIsNewUser] = useState(true);
  const validateFormWithJS = () => {
    if (!modalStore.user.username) {
        setLoginError({
            ...loginError,
            isError: true
        })
    }

    if (!modalStore.user.email || !validateEmail(modalStore.user.email)) {
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
    validateFormWithJS();
    setIsProgressDisplay(true);

    await fillProgress();
    setTimeout(() => {
        setCheckText(false);
        setProgressValue(0);
        if (modalStore.service === "Followers") {
            modalStore.sendOrder();
        } else {
            modalStore.getPosts();
        }
        if (modalStore.user.userName && modalStore.user.userEmail) {
            modalStore.modal = 2;
        }
    }, 3000);
  };

  useEffect(() => {
    modalStore.user.email = appStore.users?.length ? appStore.users[0].userEmail : "";
    if (appStore.users?.length) setIsNewUser(false);
  }, [])

  return (
    <>
      <p className={styles.modal_title}>Free Instagram {modalStore.service}</p>
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
            appStore.users?.length !== null &&
            appStore.users?.map((info) => (
                <Account
                    key={info.userData.user_id}
                    userInfo={info.userData}
                    userName={info.userName}
                />))
        }
    {isNewUser
        ? <div style={{ width: "100%" }}>
        <p>Instagram username (Login)</p>
        <input
          placeholder="Username"
          onChange={(e) => {
              loginError.isError && setLoginError({
                  ...loginError,
                  isError: false
              })
              // setUserName(e.target.value)
              modalStore.setUserData('username', e.target.value);
          }}
          required
        />
      </div>
        : <p
            className={styles.new_user}
            onClick={() => setIsNewUser(true)}
        >Add new one</p>}
      {loginError.isError && <p style={{color: "red", textAlign: "center", marginTop: "-36px" }}>{loginError.errorMessage}</p>}
      <div style={{ width: "100%", marginTop: "-40px" }}>
        <p>Your email</p>
        <input
            placeholder="Email"
            required
            defaultValue={modalStore.user.email}
            onChange={(e) => {
                emailError.isError &&
                    setEmailError({
                        ...emailError,
                        isError: false
                    })
                // setUserEmail(e.target.value)
                modalStore.setUserData('email', e.target.value);
            }}
        />
      </div>
      {emailError.isError && <p style={{ color: "red", textAlign: "center", marginTop: "-36px" }}>{emailError.errorMessage}</p>}
      <p style={{ color: "red", textAlign: "center" }}>{modalStore.errorMessage}</p>

        {isNewUser
            && <div className={styles.button_wrapper}>
                <ButtonComponent
                    type="title"
                    text={modalStore.userName && modalStore.userEmail ? "Loading..." : "Next"}
                    onClick={submitHandler}
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

export default FreeModalLogin;
