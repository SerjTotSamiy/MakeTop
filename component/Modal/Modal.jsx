import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.sass";
import {observer} from "mobx-react-lite";
import { useStores } from "../../stores";
const spinner = "/spinner.svg";
import {ModalComponent} from "./ModalComponent";

const Modal= observer(({ children, store }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const { modalStore } = useStores();

    useEffect(() => {
        modalStore.system = store.system;
        modalStore.service = store.service;
    }, [store])

    const onCloseHandler = () => {
        modalStore.setModalClose();
        document.body.style.overflow = 'unset';
    }

    const content = modalStore.isModalOpen ? (
        <div
            className={styles.overlay}
            style={{
                top: `${modalStore.position}px`
            }}
            onClick={(e) => {
                if (e.target.classList.value.startsWith('Modal_overlay__')) onCloseHandler();
            }}
        >
            <div className={styles.content}>
                <div className={styles.modal_header}>
                    <img
                        src="../modalClose.svg"
                        className={styles.close}
                        onClick={(e) =>onCloseHandler(e)}
                        alt="close"
                    />
                    {modalStore.modal !== 1 && (
                        <p
                            className={styles.backButton}
                            onClick={() => {
                                if (modalStore.modal === 2) {
                                    modalStore.activePosts = [];
                                    modalStore.data = null;
                                }
                                modalStore.modal = modalStore.modal - 1;
                            }}
                        >
                            {" "}
                            {"< Back"}{" "}
                        </p>
                    )}
                </div>
                <ModalComponent
                    store={modalStore}
                />
            </div>
            {
                modalStore.isLoading &&
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,.5)",
                    zIndex: 100,
                    overflowY: "hidden"
                }}>
                    <img src={spinner} alt="spinner"/>
                </div>
            }
        </div>
    ) : null;

    useEffect(() => {
        if (modalStore.isModalOpen && modalStore.position) {
            setIsBrowser(true);
            window.scrollTo(0, modalStore.position);
            document.body.style.overflow = 'hidden';
        }
    }, [modalStore.isModalOpen, modalStore.position])

    if (isBrowser) {
        return createPortal(
            content, document.getElementById("modal")
        )
    } else {
        return null;
    }
})

export default Modal;
