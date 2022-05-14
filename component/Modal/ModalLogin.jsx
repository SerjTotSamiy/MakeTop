import React, {useState} from 'react';
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

const ModalLogin = ({ setModal,service,counts,priceValue,setUserName,userName,system}) => {
    const[isNameClear,setIsNameClear]=useState(null)
    const isUserNameWritten=()=>{
        userName?setModal(2):setIsNameClear(true)
    }
    return (
        < >
            <div className={styles.modal_title}><p style={{color:" rgba(40, 95, 255, 1)"}}>{counts} {system} {service}</p><p>|</p>${priceValue} One Time</div>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.svg" className={styles.absoluteLine}/>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>

                <div className={styles.modal_stageItem}>
                    <p>02</p>
                </div>
                <div className={styles.modal_stageItem}>
                    <p>03</p>
                </div>
            </div>
            <div style={{width:"100%"}}>
                <p>Instagram username (Login)</p>
                <input placeholder="Username" onChange={(e) => setUserName(prev => e.target.value)}/>
            </div>
            {isNameClear&&<p style={{color:'red',textAlign:'center'}}>Login is empty</p>}
            <ButtonComponent type="title" text="Next" onClick={isUserNameWritten}/>
        </ >
    );
};

export default ModalLogin;
