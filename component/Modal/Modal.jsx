import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.sass";
import {observer} from "mobx-react-lite";
import {useStores} from "../../stores";
import Router from "next/router";

// const modalRootElement = document.querySelector('#modal');

const Modal= observer(({ children, position }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const { appStore } = useStores();

    const onCloseHandler = () => {
        console.log('onCloseHandler');
        document.body.style.overflow = 'unset';
        appStore.setModalShow(false);
    }

    const content = appStore.isModalOpen ? (
        <div
            className={styles.overlay}
            style={{
                top: `${appStore.position}px`
            }}
            onClick={onCloseHandler}
        >
            <div className={styles.content}>
                <div className={styles.modal_header}>
                    <img
                        src="../modalClose.svg"
                        className={styles.close}
                        onClick={onCloseHandler}
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
                {children}
            </div>
        </div>
    ) : null;

    useEffect(() => {
        if (appStore.isModalOpen && appStore.position) {
            console.log('Modal position is', appStore.position);
            setIsBrowser(true);
            window.scrollTo(0, appStore.position);
            document.body.style.overflow = 'hidden';
        }
    }, [appStore.position])

    if (isBrowser) {
        return createPortal(
            content, document.getElementById("modal")
        )
    } else {
        return null;
    }
})

export default Modal;
