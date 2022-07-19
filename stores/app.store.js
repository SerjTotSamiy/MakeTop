import {makeAutoObservable} from "mobx";
import axios from "axios";

class AppStore {
    plans = {};
    additionalPlans = {};
    user = {};
    isModalOpen = false;
    users = [];

    constructor() {
        makeAutoObservable(this);
    }

    getUsers() {
        const users = localStorage.getItem('users');
        if (users === "undefined") {
            localStorage.removeItem('users');
        }
        if (users) {
            if (users.length) this.users = JSON.parse(localStorage.getItem('users'));
        }
    }

    removeUser(name) {
        this.users = this.users.filter(u => u.userName !== name);

        this.users.length
            ? localStorage.setItem('users', JSON.stringify(this.users))
            : localStorage.clear();
    }

    async requestPlans () {
        try {
            const res = await axios.post("/get_plans.php");

            if (res.status === 200) {
                this.plans = {...res.data.data.Instagram};
                return this.plans;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async requestUser () {
        try {
            const res = await axios.post("/user_info.php");
            if (res.status === 200) {
                this.user = res.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async requestAddServices () {
        try {
            const res = await axios.post("/additional_services.php");

            if (res.status === 200) {
                this.additionalPlans = res.data.data;
                return res.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default AppStore
