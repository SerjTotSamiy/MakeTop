import {makeAutoObservable} from "mobx";
import axios from "axios";
import Router  from "next/router";
import {addUserIntoLocalStorage} from "../component/Modal/helpers";

class ModalStore {
    rootStore;
    isModalOpen = false;
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
    position = 0;
    errorMessage = "";
    activeTariffs = {
        type: 't2',
        e1: false,
        e2: false,
        e3: false
    }


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

                    // const users = JSON.parse(localStorage.getItem('users'));
                    const currentUser = {
                        userName: this.user.username,
                        userEmail: this.user.email,
                        userData: res.data.data
                    };
                    // const result = users ? addUserIntoArray(users, currentUser) : [currentUser];
                    // localStorage.setItem('users', JSON.stringify(result));
                    addUserIntoLocalStorage(currentUser);
                    this.data = res.data.data;
                //     setUserInfo((prev) => e?.data?.data);
                //     setType((prev) => e?.data?.data?.plan?.types?.t1);
                }
                this.setErrorMessage(res?.data?.text);
            }).then(() => {
                this.user = {
                    username: "",
                    email: ""
                }
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.modal = 2;
            console.log('modal is', this.modal)
        }
    }

    async sendOrder(activeTariffs) {
        const {type, e1, e2, e3} = activeTariffs;
        // setIsLoading(true);
        try {
            const data = new FormData();
            data.append("email", this.user.email);
            data.append("system", this.system);
            data.append("service", this.service);
            data.append("type", type);
            // data.append("type", 't1');
            data.append("extra[e1]", +e1);
            data.append("extra[e2]", +e2);
            data.append("extra[e3]", +e3);
            data.append("count", counts);
            data.append("username", userName);
            if (service === "Auto-Likes") {
                data.append("count_posts", String(likesPerPost));
            }
            for (let i = 0; i < activePost.length; i++) {
                data.append(`url[${i}]`, activePost[i].link);
            }
            for (let i = 0; i < activePost.length; i++) {
                data.append(`img[${i}]`, activePost[i].img);
            }

            const res = axios.post(
                `${priceValue === "0.00"
                    ? "/create_test_order_v2.php"
                    : "/create_order_v2.php"
                }`,
                data
            );
            res.then((e) => {
                if (e?.data?.result === "Ok") {
                    setResult((prev) => e?.data);
                    setModal(3);
                }
                setErrorMessage(e?.data?.text);
            });
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

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
    }

    setModalOpen (position) {
        this.isModalOpen = true;
        this.position = position;
    }

    setModalClose () {
        this.isModalOpen = false;
        this.errorMessage = "";
        this.modal = 1;
    }

    setErrorMessage(message) {
        this.errorMessage = message;
    }
}

export default ModalStore;
