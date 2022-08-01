import {makeAutoObservable} from "mobx";

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
        if (users && users !== "undefined") {
            // const result = JSON.parse(users);
            // console.log('result', result)
            // console.log('is result Array', Array.isArray(result))
            if (users.length) this.users = JSON.parse(users);
            return;
        }

        if (users === "undefined" || Array.isArray(JSON.parse(users))) {
            localStorage.removeItem('users');
        }
    }

    removeUser(name) {
        this.users = this.users.filter(u => u.userName !== name);

        this.users.length
            ? localStorage.setItem('users', JSON.stringify(this.users))
            : localStorage.removeItem('users');
    }

    async requestPlans (axios) {
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

    async requestUser (axios) {
        try {
            const res = await axios.post("/user_info.php");
            if (res.status === 200) {
                this.user = res.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    }

    async requestAddServices (axios) {
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
