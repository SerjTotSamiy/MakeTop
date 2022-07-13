import {makeAutoObservable} from "mobx";
import axios from "axios";
import Router  from "next/router";
import {addUserIntoArray} from "../component/Modal/helpers";

class ModalStore {
    rootStore;
    system;
    service;
    isOpen;
    modal = 1;
    item = null;
    user = {
        username: "",
        email: ""
    };
    data;


    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setUserData(name, value) {
        this.user = {
            ...this.user,
            [name]: value
        }
    }

    async getPosts() {
        // if (!this.user.username || !this.user.email || !validateEmail(userEmail)) return setError(true);
        if (this.service === "Followers" && this.item.price === "0.00") {
            const result = await this.sendAdditionalOrder();
            result?.result === "Ok"
                ? await Router.push("/thanks-for-shot")
                : await Router.push("/error");
        }
        if (this.service === "Followers") {
            // setModal(3);
            this.system === "Instagram" ? await sendOrder() : await sendAdditionalOrder();
        }
        console.log('HERERERRER')
        try {
            const data = new FormData();
            data.append("system", this.system);
            data.append("service", this.service);
            data.append("count", this.item.count);
            data.append("username", this.user.username);
            data.append("more", "1");
            // if (this.service === "Auto-Likes") {
              // data.append("type", activeTarifs.type);
              // data.append("count_posts", String(likesPerPost));
            // }
            const res = axios.post(`/get_posts_v2.php`, data);

            // console.log(activeTarifs.type);

            res.then((res) => {
                console.log('data', res);
                if (res?.data?.result === "Ok") {

                    const users = JSON.parse(localStorage.getItem('users'));
                    const currentUser = {
                        userName: this.user.username,
                        userEmail: this.user.email,
                        userData: res.data.data
                    };
                    const result = users ? addUserIntoArray(users, currentUser) : [currentUser];
                    localStorage.setItem('users', JSON.stringify(result));
                    this.data = res.data.data;
                //     setUserInfo((prev) => e?.data?.data);
                //     setType((prev) => e?.data?.data?.plan?.types?.t1);
                }
                this.rootStore.appStore.setErrorMessage(res?.data?.text);
            }).then(() => {
                this.user = {
                    username: "",
                    email: ""
                }
                this.modal = 2;
            });
        } catch (e) {
            console.log(e);
        } finally {
            console.log('modal is', this.modal)
        }
    }

    async sendAdditionalOrder() {
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

}

export default ModalStore;
