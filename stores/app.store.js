import {makeAutoObservable} from "mobx";
import axios from "axios";

class AppStore {
    plans = {};
    additionalPlans = {};
    user = {};
    isModalOpen = false;
    position = 0;
    modal = 1;
    errorMessage = "";

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

    setModalOpen (position) {
        this.isModalOpen = true;
        this.position = position;
    }

    setModalClose () {
        this.isModalOpen = false;
        this.errorMessage = "";
    }

    setErrorMessage(message) {
        this.errorMessage = message;
    }
}

export default AppStore
