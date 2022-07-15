import {makeAutoObservable, toJS} from "mobx";
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
    activePosts = [];
    paymentData = null;
    likesPerPost = 1;
    url = "";


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

    addActivePosts(post) {
        this.activePosts = [
            ...this.activePosts,
            post
        ]
    }

    removeActivePost(post) {
        this.activePosts = this.activePosts.filter(item => item !== post);
    }

    setLikesPerPost(likes) {
        this.likesPerPost = likes;
    }

    setModal(number) {
        this.modal = number;
    }

    setUrl(url) {
        this.url = url;
    }

    async getPosts(username = '') {
        // if (!this.user.username || !this.user.email || !validateEmail(userEmail)) return setError(true);
        console.log('getposts')
        if (username) {
            this.user.username = username;
        }
        console.log('this.user.email', this.user.email);
        console.log('this.user.username', this.user.username);
        if ((this.service === "Followers" || this.service === "Followers") && this.item.price === "0.00") {
            const result = await this.sendAdditionalOrder();
            result?.result === "Ok"
                ? await Router.push("/thanks-for-shot")
                : await Router.push("/error");
        }
        if (this.service === "Followers") {
            // setModal(3);
            this.system === "instagram"
                // ? await this.sendOrder()
                ? this.modal = 2
                : await this.sendAdditionalOrder();
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
            })
        } catch (e) {
            console.log(e);
        } finally {
            this.modal = 2;
            console.log('modal is', this.modal)
        }
    }

    async sendOrder() {
        const {type, e1, e2, e3} = this.activeTariffs;
        console.log('this.user.email', this.user.email);
        console.log('this.user.username', this.user.username);
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
            data.append("count", this.item.count);
            data.append("username", this.user.userName);
            if (this.service === "Auto-Likes") {
                data.append("count_posts", String(this.likesPerPost));
            }
            for (let i = 0; i < this.activePosts.length; i++) {
                data.append(`url[${i}]`, this.activePosts[i].link);
            }
            for (let i = 0; i < this.activePosts.length; i++) {
                data.append(`img[${i}]`, this.activePosts[i].img);
            }

            const res = axios.post(
                `${this.item.price === "0.00"
                    ? "/create_test_order_v2.php"
                    : "/create_order_v2.php"
                }`,
                data
            );
            res.then((e) => {
                if (e?.data?.result === "Ok") {
                    console.log('payment data', e?.data?.result)
                    this.paymentData = e?.data;
                    this.modal += 1;
                }
                this.errorMessage = e?.data?.text;
            });
        } catch (e) {
            console.log(e);
        } finally {
            // setIsLoading(false);
        }
    };

    async sendAdditionalOrder() {
        console.log('this', toJS(this))
        console.log('sendAdditionalOrder');
        // setIsLoading(true);
        try {
            const data = new FormData();
            data.append("email", this.user.email);
            data.append("system", this.system);
            data.append("service", this.service);
            data.append("plan", this.item.count);
            data.append("url", this.url);
            const res = axios.post("/additional_create_order.php", data);
            res.then((e) => {
                if (e?.data?.result === "Ok") {
                    console.log('e.data', e.data)
                    this.paymentData = e?.data;
                    this.modal = 2;
                }
                this.errorMessage = e?.data?.text;
            });
        } catch (e) {
            console.log(e);
        } finally {
            // setIsLoading(false);
        }
    }

    setModalOpen (position) {
        console.log('service', this.service);
        this.isModalOpen = true;
        this.position = position;
    }

    setModalClose () {
        this.isModalOpen = false;
        this.errorMessage = "";
        this.modal = 1;
        this.position = 0;
        this.activePosts = [];
        this.data = null;
        this.likesPerPost = 1;
        this.activeTariffs = {
            type: 't2',
            e1: false,
            e2: false,
            e3: false
        }
    }

    setErrorMessage(message) {
        this.errorMessage = message;
    }
}

export default ModalStore;
