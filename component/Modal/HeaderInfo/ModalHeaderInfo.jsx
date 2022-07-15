import React, {useEffect} from "react";
import styles from "../Modal.module.sass";
import {useStores} from "../../../stores";
import {observer} from "mobx-react-lite";

const ModalHeaderInfo = observer(({counts, system, service, autoLikes, info, price}) => {
    const { modalStore } = useStores();

    return <div className={styles.modal_title}>
        <p style={{color: " rgba(40, 95, 255, 1)", maxWidth: "60%"}}>
            {
                service === "Auto-Likes"
                    ? `${autoLikes} ${service} per post`
                    : `${counts} ${system.charAt(0).toUpperCase() + system.slice(1)} ${service}`
            }
        </p>
        <p>|</p> {info?.sym_b} {price}
        {!info?.sym_b ? info?.sym_a + " " : ''}
    </div>
})

export default ModalHeaderInfo;
