import React, {useState} from 'react';
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

const ModalEmail = ({ setModal,service,counts,priceValue,setUserEmail,userEmail,getPosts,errorMessage,system }) => {
    const[email,setEmail]=useState(null)
    const[error,setError]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const validateEmail = (userEmail) => {
        setError( userEmail
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
    };
    return (
        < >
            <div className={styles.modal_title}><p style={{color:" rgba(40, 95, 255, 1)"}}>{counts} {system} {service}</p><p>|</p> ${priceValue} One Time</div>
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
                <p>Your email</p>
                <input placeholder="Email" onChange={(e) => setUserEmail(prev => e.target.value)}/>

            </div>
            <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
            {/*{error!==null&&error&&<p style={{color:'red',textAlign:'center'}}>Email is empty</p>}*/}
            <ButtonComponent type="title" text={isLoading?"Loading...":"Next"} onClick={async () => {
                setIsLoading(true)
                await getPosts()
                setIsLoading(false)
            }}/>
        </ >
    );
};

export default ModalEmail;
