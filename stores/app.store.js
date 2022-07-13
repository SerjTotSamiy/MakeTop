import {makeAutoObservable} from "mobx";
import axios from "axios";

class AppStore {
    plans = {};
    additionalPlans = {};
    user = {};
    isModalOpen = false;

    constructor() {
        makeAutoObservable(this);
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
