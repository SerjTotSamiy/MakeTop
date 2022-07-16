import React, { useState } from "react";
import styles from "./Modal.module.sass";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import {useStores} from "../../stores";
import {colors, gradient, shadow} from "../../shared/colors";

const ModalEmail = ({
  setModal,
  service,
  counts,
  priceValue,
  setURL,
  setUserEmail,
  userEmail,
  getPosts,
  errorMessage,
  system,
}) => {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkText, setCheckText] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const { modalStore } = useStores();
  const fillProgress = async () => {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        setProgressValue(index);
      }, 500);
    }
  };
  const validateEmail = (userEmail) => {
    setError(
      userEmail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };
  return (
    <>
      <div className={styles.modal_title}>
        <p style={
            system === "Vk.com"
                ? { color: colors.vk.likesColor.color }
                : { color: colors[system.toLowerCase()].likesColor.color }
        }>
          {counts} {system} {service}
        </p>
        <p>|</p> ${priceValue}
      </div>
      <div className={styles.modal_stageBlock}>
        <img src="/stageLine0.svg" className={styles.absoluteLine} />
        <div className={styles.modal_stageItem_active} style={
            system === "Vk.com"
                ? {
                background: gradient.vk,
                boxShadow: shadow.vk
            }
                : {
                background: gradient[system.toLowerCase()],
                boxShadow: shadow[system.toLowerCase()]
            }
        }>
          <p>01</p>
        </div>

        <div className={styles.modal_stageItem}>
          <p>02</p>
        </div>
        {/*<div className={styles.modal_stageItem}>*/}
        {/*  <p>03</p>*/}
        {/*</div>*/}
      </div>
      <div style={{width: "100%"}}>
          <p>URL to the {modalStore.system} {modalStore.service}</p>
          <input
              placeholder="URL"
              onChange={(e) => setURL(e.target.value)}
          />
        <p>Your email</p>
        <input
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      {/*{error!==null&&error&&<p style={{color:'red',textAlign:'center'}}>Email is empty</p>}*/}
      <div className={styles.button_wrapper}>
        <ButtonComponent
          type={system === "Vk.com" ? "vk" : system.toLowerCase()}
          text={checkText && userEmail ? "Loading..." : "Next"}
          onClick={async () => {
            setCheckText(true);
            await fillProgress();
            setTimeout(() => {
              setCheckText(false);
              setProgressValue(0);
              modalStore.sendAdditionalOrder().then(() => setModal(2));
            }, 3000);
          }}
        />
        <progress
          style={{ display: checkText && userEmail ? "block" : "none" }}
          id={styles.modal_progress}
          min={0}
          max={100}
          value={progressValue}
        />
      </div>
    </>
  );
};

export default ModalEmail;
