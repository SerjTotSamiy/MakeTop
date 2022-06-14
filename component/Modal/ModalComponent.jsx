import React, { useEffect, useState } from "react";
import styles from "./Modal.module.sass";
import Modal from "react-modal";
import FreeModalLogin from "./FreeModal/FreeModalLogin";
import FreeModalEmail from "./FreeModal/FreeModalEmail";
import FreeModalAccount from "./FreeModal/FreeModalAccount";
import ModalLogin from "./ModalLogin";
import ModalEmail from "./ModalEmail";
import ModalAccount from "./ModalAccount";
import ModalPosts from "./ModalPosts";
import ModalPayment from "./ModalPayment";
import useAxios from "../../hooks/useAxios";
import Router, { useRouter } from "next/router";
import {validateEmail} from "./helpers";

const addUserIntoArray = (usersArray, user) => {
  const isArrayIncludeUser = usersArray.filter(item => item.userData.user_id === user.userData.user_id).length > 0
  return isArrayIncludeUser ? usersArray : [...usersArray, user]
}

export const ModalComponent = ({
  open,
  setOpen,
  counts,
  priceValue,
  system,
  service,
}) => {
  const axios = useAxios();
  const customStyles = {
    overlay: {
      zIndex: 14,
      background: "rgba(0,0,0,.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      marginTop: 30,
      background: "transparent",
      maxWidth: 600,
      width: "100%",
    },
  };
  const [modal, setModal] = useState(1);
  const [userName, setUserName] = useState("");
  const [currentUserName, setCurrentUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [type, setType] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activePost, setActivePost] = useState([]);
  const [result, setResult] = useState({});
  const [newPriceValue, setNewPriceValue] = useState(Number(priceValue) || 0);
  const [picturesCount, setPicturesCount] = useState(12);
  const router = useRouter()

  useEffect(() => {
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    if (users && typeof users[0] === "object") {
      setUsersData(users);
      setUserName(users[0].userName);
      setCurrentUserName(users[0].userName);
    }
  }, [])

  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };

  const getPosts = async () => {
    if (!userName || !userEmail || !validateEmail(userEmail)) return setError(true);
    if (service === "Followers" && priceValue === "0.00") {
      await sendAdditionalOrder();
      result?.result === "Ok"
        ? await router.push("/thanks-for-shot")
        : await router.push("/error");
    }
    if (service === "Followers") {
      setModal(3);
      system === "Instagram" ? await sendOrder() : await sendAdditionalOrder();
    }
    try {
      const data = new FormData();
      data.append("system", system);
      data.append("service", service);
      data.append("count", counts);
      data.append("username", userName);
      data.append("more", "1");
      const res = axios.post(`/get_posts_v2.php`, data);

      res.then((e) => {
        if (e?.data?.result === "Ok") {

          console.log('data is', e.data);

          const users = JSON.parse(localStorage.getItem('users'));
          const currentUser = {
            userName: userName,
            userEmail: userEmail,
            userData: e.data.data
          };
          const result = users ? addUserIntoArray(users, currentUser) : [currentUser];
          localStorage.setItem('users', JSON.stringify(result));
          setUserInfo((prev) => e?.data?.data);
          setType((prev) => e?.data?.data?.plan?.types?.t1);
        }
        setErrorMessage(e?.data?.text);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const sendOrder = async () => {
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("email", userEmail);
      data.append("system", system);
      data.append("service", service);
      data.append(
        "type",
        type.name === userInfo?.plan?.types?.t1?.name ? "t1" : "t2"
      );
      data.append("count", counts);
      data.append("username", userName);
      for (let i = 0; i < activePost.length; i++) {
        data.append(`url[${i}]`, activePost[i].link);
      }
      for (let i = 0; i < activePost.length; i++) {
        data.append(`img[${i}]`, activePost[i].img);
      }

      const res = axios.post(
        `${priceValue === "0.00"
          ? "/create_test_order_v2.php"
          : "/create_order_v2.php"
        }`,
        data
      );
      res.then((e) => {
        if (e?.data?.result === "Ok") {
          setResult((prev) => e?.data);
          console.log('e.data is', e.data);
          setModal(3);
          console.log(e?.data);
        }
        setErrorMessage(e?.data?.text);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const sendAdditionalOrder = async () => {
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("email", userEmail);
      data.append("system", system);
      data.append("service", service);
      data.append("plan", counts);
      data.append("url", `https://www.instagram.com`);
      const res = axios.post("/additional_create_order.php", data);
      res.then((e) => {
        if (e?.data?.result === "Ok") {
          setResult((prev) => e?.data);
          setModal(1);
          console.log(e?.data);
        }
        setErrorMessage(e?.data?.text);
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const selectUser = (data, type) => {
    if (type === "delete") {
      setUserName(data.userName);
      setUserEmail(data.userEmail);
      setUserInfo(data.userData);
      setCurrentUserName(data.userName);
    }
    setTimeout(() => setModal(2), 1500);
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      {system === "Instagram" ? (
        <div className={styles.modal_container}>
          <div className={styles.modal_header}>
            <img
              src="/modalClose.svg"
              className={styles.close}
              onClick={() => Router.back()}
              alt=""
            />
            {modal !== 1 && (
              <p
                className={styles.backButton}
                onClick={() => setModal(modal - 1)}
              >
                {" "}
                {"< Back"}{" "}
              </p>
            )}
          </div>
          {priceValue === "0.00"
            ? modal === 1 && (
                <FreeModalLogin
                  modal={modal}
                  setModal={setModal}
                  setUserName={setUserName}
                  userName={userName}
                  userEmail={userEmail}
                  setUserEmail={setUserEmail}
                  service={service}
                  getPosts={getPosts}
                  errorMessage={errorMessage}
                  usersData={usersData}
                  selectUser={selectUser}
                  setUsers={setUsersData}
                />
              )
            : modal === 1 && (
                <ModalLogin
                  modal={modal}
                  setModal={setModal}
                  errorMessage={errorMessage}
                  counts={counts}
                  priceValue={priceValue}
                  service={service}
                  setUserName={setUserName}
                  setUserEmail={setUserEmail}
                  userName={userName}
                  userEmail={userEmail}
                  getPosts={getPosts}
                  usersData={usersData}
                  setUsers={setUsersData}
                  selectUser={selectUser}
                  system={system}
                  sendOrder={sendOrder}
                  currentUser={currentUserName}
                />
              )}
          { modal === 2 && (
              <ModalPosts
                modal={modal}
                setModal={setModal}
                userInfo={userInfo}
                counts={counts}
                picturesCount={picturesCount}
                setPicturesCount={setPicturesCount}
                type={type}
                activePost={activePost}
                deleteActivePost={deleteActivePost}
                setActivePost={setActivePost}
                errorMessage={errorMessage}
                sendOrder={sendOrder}
                service={service}
                priceValue={priceValue}
                result={result}
              />
          )}
          {modal === 3 && (
            <ModalPayment
              modal={modal}
              setModal={setModal}
              result={result}
              counts={counts}
              service={service}
              priceValue={priceValue}
              isLoading={isLoading}
            />
          )}
        </div>
      ) : (
        <div className={styles.modal_container}>
          <div className={styles.modal_header}>
            <img
              src="/modalClose.svg"
              className={styles.close}
              onClick={() => setOpen(false)}
              alt=""
            />
            {modal !== 1 && (
              <p
                className={styles.backButton}
                onClick={() => setModal(modal - 1)}
              >
                {" "}
                {"< Back"}{" "}
              </p>
            )}
          </div>
          {modal === 1 && (
            <ModalEmail
              modal={modal}
              setModal={setModal}
              counts={counts}
              priceValue={priceValue}
              service={service}
              setUserEmail={setUserEmail}
              userEmail={userEmail}
              getPosts={sendAdditionalOrder}
              errorMessage={errorMessage}
              system={system}
            />
          )}

          {modal === 2 && (
            <ModalPayment
              modal={modal}
              setModal={setModal}
              result={result}
              priceValue={priceValue}
            />
          )}
        </div>
      )}
    </Modal>
  );
};
