import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.sass";
import {observer} from "mobx-react-lite";
import {useStores} from "../../stores";
import ModalHeaderInfo from "./HeaderInfo/ModalHeaderInfo";
import {ModalComponent} from "./ModalComponent";

const Modal= observer(({ children, position, store }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const { appStore, modalStore } = useStores();

    useEffect(() => {
        modalStore.system = store.system;
        modalStore.service = store.service;
    }, [])

    const onCloseHandler = () => {
        appStore.setModalClose();
        document.body.style.overflow = 'unset';
    }

    const content = appStore.isModalOpen ? (
        <div
            className={styles.overlay}
            style={{
                top: `${appStore.position}px`
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
                    {/*{modal !== 1 && (*/}
                    {/*    <p*/}
                    {/*        className={styles.backButton}*/}
                    {/*        onClick={() => setModal(modal - 1)}*/}
                    {/*    >*/}
                    {/*        {" "}*/}
                    {/*        {"< Back"}{" "}*/}
                    {/*    </p>*/}
                    {/*)}*/}
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
        if (appStore.isModalOpen && appStore.position) {
            setIsBrowser(true);
            window.scrollTo(0, appStore.position);
            document.body.style.overflow = 'hidden';
        }
    }, [appStore.isModalOpen, appStore.position])

    if (isBrowser) {
        return createPortal(
            content, document.getElementById("modal")
        )
    } else {
        return null;
    }
})

export default Modal;
