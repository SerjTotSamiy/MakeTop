import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.sass";
import {observer} from "mobx-react-lite";
import {useStores} from "../../stores";
import ModalHeaderInfo from "./HeaderInfo/ModalHeaderInfo";
import {ModalComponent} from "./ModalComponent";

const Modal= observer(({ children, store }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const { appStore, modalStore } = useStores();

    useEffect(() => {
        console.log('store.service is', store.service)
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
                {/*<ModalHeaderInfo*/}
                {/*    counts={modalStore.item.count}*/}
                {/*    system={store.system}*/}
                {/*    service={store.service}*/}
                {/*    // autoLikes*/}
                {/*    // info*/}
                {/*    price={modalStore.item.price}*/}
                {/*/>*/}
                <ModalComponent
                    store={modalStore}
                />
            </div>
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
