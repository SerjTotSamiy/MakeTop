import React from "react";
import styles from "../Modal.module.sass";

const ModalHeaderInfo = ({counts, system, service, autoLikes, info, price}) => {
    return <div className={styles.modal_title}>
        <p style={{color: " rgba(40, 95, 255, 1)", maxWidth: "60%"}}>
            {
                service === "Auto-Likes"
                    ? `${autoLikes} ${service} per post`
                    : `${counts} ${system} ${service}`
            }
        </p>
        <p>|</p> {info?.sym_b} {price}
        {!info?.sym_b ? info?.sym_a + " " : ''}
    </div>
}

export default ModalHeaderInfo;
