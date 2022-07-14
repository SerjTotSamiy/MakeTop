import React, {useContext, useEffect, useState} from "react";
import styles from "./Modal.module.sass";
// import Modal from "react-modal";
import Modal from "./Modal";
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
import {addUserIntoArray, addUserIntoLocalStorage, validateEmail} from "./helpers";
import {MeContext} from "../../pages/_app";
import appStore from "../../stores/app.store";
import {useStores} from "../../stores";
import {observer} from "mobx-react-lite";

export const ModalComponent = observer(({
  // open,
  // setOpen,
  // counts,
  // priceValue,
  store,
  // service,
  // store
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
  const [url, setURL] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // const {price} = useContext(MeContext);
  const [userInfo, setUserInfo] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [type, setType] = useState({});
  const [error, setError] = useState(false);
  const [likesPerPost, setLikesPerPost] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activePost, setActivePost] = useState([]);
  const [result, setResult] = useState({});
  // const [newPriceValue, setNewPriceValue] = useState(Number(priceValue) || 0);
  // const [picturesCount, setPicturesCount] = useState(12);
  const [activeTariffs, setActiveTariffs] = useState({
    type: 't2',
    e1: false,
    e2: false,
    e3: false
  });
  const router = useRouter()
  const { query } = useRouter()
  const { appStore, modalStore } = useStores()

  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };

  // const getPosts = async () => {
  //   if (!userName || !userEmail || !validateEmail(userEmail)) return setError(true);
  //   if (service === "Followers" && priceValue === "0.00") {
  //     await sendAdditionalOrder();
  //     result?.result === "Ok"
  //       ? await router.push("/thanks-for-shot")
  //       : await router.push("/error");
  //   }
  //   if (service === "Followers") {
  //     // setModal(3);
  //     system === "Instagram" ? await sendOrder() : await sendAdditionalOrder();
  //   }
  //   try {
  //     const data = new FormData();
  //     data.append("system", system);
  //     data.append("service", service);
  //     data.append("count", counts);
  //     data.append("username", userName);
  //     data.append("more", "1");
  //     // if (service === "Auto-Likes") {
  //     //   data.append("type", activeTarifs.type);
  //     //   data.append("count_posts", String(likesPerPost));
  //     // }
  //     const res = axios.post(`/get_posts_v2.php`, data);
  //
  //     // console.log(activeTarifs.type);
  //
  //     res.then((e) => {
  //       if (e?.data?.result === "Ok") {
  //         // const users = JSON.parse(localStorage.getItem('users'));
  //         const currentUser = {
  //           userName: userName,
  //           userEmail: userEmail,
  //           userData: e.data.data
  //         };
  //         // const result = users ? addUserIntoArray(users, currentUser) : [currentUser];
  //         // localStorage.setItem('users', JSON.stringify(result));
  //         // addUserIntoLocalStorage(currentUser);
  //         setUserInfo((prev) => e?.data?.data);
  //         setType((prev) => e?.data?.data?.plan?.types?.t1);
  //       }
  //       setErrorMessage(e?.data?.text);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const sendOrder = async () => {
  //   const {type, e1, e2, e3} = activeTarifs;
  //   setIsLoading(true);
  //   try {
  //     const data = new FormData();
  //     data.append("email", userEmail);
  //     data.append("system", system);
  //     data.append("service", service);
  //     data.append("type", type);
  //     // data.append("type", 't1');
  //     data.append("extra[e1]", +e1);
  //     data.append("extra[e2]", +e2);
  //     data.append("extra[e3]", +e3);
  //     data.append("count", counts);
  //     data.append("username", userName);
  //     if (service === "Auto-Likes") {
  //       data.append("count_posts", String(likesPerPost));
  //     }
  //     for (let i = 0; i < activePost.length; i++) {
  //       data.append(`url[${i}]`, activePost[i].link);
  //     }
  //     for (let i = 0; i < activePost.length; i++) {
  //       data.append(`img[${i}]`, activePost[i].img);
  //     }
  //
  //     const res = axios.post(
  //       `${priceValue === "0.00"
  //         ? "/create_test_order_v2.php"
  //         : "/create_order_v2.php"
  //       }`,
  //       data
  //     );
  //     res.then((e) => {
  //       if (e?.data?.result === "Ok") {
  //         setResult((prev) => e?.data);
  //         setModal(3);
  //       }
  //       setErrorMessage(e?.data?.text);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const sendAdditionalOrder = async () => {
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("email", userEmail);
      data.append("system", system);
      data.append("service", service);
      data.append("plan", counts);
      data.append("url", url);
      const res = axios.post("/additional_create_order.php", data);
      res.then((e) => {
        if (e?.data?.result === "Ok") {
          setResult((prev) => e?.data);
          setModal(2);
        }
        setErrorMessage(e?.data?.text);
      });
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
    setTimeout(async () => {
      // if (service === "Followers") {
      //   await sendOrder();
      //   setModal(3);
      // } else {
        store.modal = 2;
      // }
    }, 1500);
  }

  return (
    // <Modal
    //   isOpen={modalStore.isModalOpen}
    //   onClose={setOpen(false)}
    //   // onRequestClose={() => setOpen(false)}
    //   // style={customStyles}
    //   // ariaHideApp={false}
    // >
      <>
      {store.system === "instagram" &&
          store.item.price === "0.00"
            ? modalStore.modal === 1 && (
                <FreeModalLogin
                  // modal={modal}
                  // setModal={setModal}
                  // setUserName={setUserName}
                  // userName={userName}
                  // userEmail={userEmail}
                  // setUserEmail={setUserEmail}
                  // service={store.service}
                  // getPosts={getPosts}
                  // errorMessage={errorMessage}
                  // usersData={usersData}
                  selectUser={selectUser}
                  // setUsers={setUsersData}
                />
              )
            : modalStore.modal === 1 && (
                <ModalLogin
                  store={store}
                  // modal={modal}
                  // setModal={setModal}
                  // errorMessage={errorMessage}
                  // setErrorMessage={setErrorMessage}
                  // counts={counts}
                  // priceValue={priceValue}
                  // service={service}
                  // setUserName={setUserName}
                  // setUserEmail={setUserEmail}
                  // userName={userName}
                  // userEmail={userEmail}
                  // getPosts={getPosts}
                  usersData={usersData}
                  setUsers={setUsersData}
                  selectUser={selectUser}
                  system={store.system}
                  // sendOrder={sendOrder}
                  // currentUser={currentUserName}
                  // likesPerPost={likesPerPost}
                  // setLikesPerPost={setLikesPerPost}
                />
              )}
          { modalStore.modal === 2 && (
              <ModalPosts
                // modal={modal}
                // prices={price}
                // prices={"200"}
                // setModal={setModal}
                // userInfo={userInfo}
                // counts={counts}
                // picturesCount={picturesCount}
                // setPicturesCount={setPicturesCount}
                // type={type}
                activePost={activePost}
                deleteActivePost={deleteActivePost}
                setActivePost={setActivePost}
                // errorMessage={errorMessage}
                // setErrorMessage={setErrorMessage}
                // sendOrder={sendOrder}
                // service={store.service}
                // priceValue={priceValue}
                // result={result}
                // activeTariffs={activeTariffs}
                // setActiveTariffs={setActiveTariffs}
                // likesPerPost={likesPerPost}
              />
          )}
          {modalStore.modal === 3 && (
            <ModalPayment
              modal={modal}
              setModal={setModal}
              result={result}
              counts={counts}
              service={service}
              system={system}
              priceValue={priceValue}
              isLoading={isLoading}
            />
          )}

      {/*//     {system !== "Instagram"*/}
      {/*//       && {modal === 1 && (*/}
      {/*//       <ModalEmail*/}
      {/*//         modal={modal}*/}
      {/*//         setModal={setModal}*/}
      {/*//         counts={counts}*/}
      {/*//         priceValue={priceValue}*/}
      {/*//         service={service}*/}
      {/*//         setURL={setURL}*/}
      {/*//         setUserEmail={setUserEmail}*/}
      {/*//         userEmail={userEmail}*/}
      {/*//         getPosts={sendAdditionalOrder}*/}
      {/*//         errorMessage={errorMessage}*/}
      {/*//         system={system}*/}
      {/*//       />*/}
      {/*//     )}*/}
      {/*//*/}
      {/*//     {modal === 2 && (*/}
      {/*//       <ModalPayment*/}
      {/*//         modal={modal}*/}
      {/*//         setModal={setModal}*/}
      {/*//         result={result}*/}
      {/*//         priceValue={priceValue}*/}
      {/*//       />*/}
      {/*//     )}*/}
      {/*//   // </div>*/}
      {/*// )}*/}
    </>
  );
});
