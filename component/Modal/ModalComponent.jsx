import React, {useState} from "react";
import FreeModalLogin from "./FreeModal/FreeModalLogin";
import ModalLogin from "./ModalLogin";
import ModalEmail from "./ModalEmail";
import ModalPosts from "./ModalPosts";
import ModalPayment from "./ModalPayment";
import {useStores} from "../../stores";
import {observer} from "mobx-react-lite";

export const ModalComponent = observer(({ store }) => {
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
  const [activePost, setActivePost] = useState([]);
  const { modalStore } = useStores()

  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };

  return (
      <>
      {store.system === "instagram" &&
          store.item.price === "0.00"
            ? modalStore.modal === 1 && (
                <FreeModalLogin />
              )
            : store.system === "instagram" && modalStore.modal === 1 && (
                <ModalLogin
                  store={store}
                  system={store.system}
                />
              )}
          { store.system === "instagram" && modalStore.modal === 2 && (
              <ModalPosts
                activePost={activePost}
                deleteActivePost={deleteActivePost}
                setActivePost={setActivePost}
              />
          )}
          {modalStore.modal === 3 && (
            <ModalPayment />
          )}

          {store.system !== "instagram"
            && modalStore.modal === 1 && (
            <ModalEmail
              modal={modalStore.modal}
              setModal={(modal) => modalStore.modal = modal}
              counts={modalStore.item.count}
              priceValue={modalStore.item.price}
              service={modalStore.service}
              setURL={(url) => modalStore.url = url}
              setUserEmail={(email) => modalStore.user.email = email}
              userEmail={(username) => modalStore.user.email = username}
              getPosts={modalStore.sendAdditionalOrder}
              errorMessage={modalStore.errorMessage}
              system={modalStore.system}
            />
          )}

          {store.system !== "instagram" && modalStore.modal === 2 && (
            <ModalPayment
              modal={modalStore.modal}
              setModal={(modal) => modalStore.modal = modal}
              result={modalStore.data}
              priceValue={modalStore.item.price}
            />
          )}
    </>
  );
});
