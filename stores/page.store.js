import {makeAutoObservable, toJS} from "mobx";
import axios from "axios";

export default class PageStore {
    data;
    additionalData;
    rootStore;
    system;
    service;

    constructor(rootStore, system, service) {
        makeAutoObservable(this, {}, {
            deep: true
        });
        this.rootStore = rootStore;
        this.system = system;
        this.service = service;
    }

    getData() {
        this.data = this.rootStore.appStore.plans[this.service];
    }

    getAdditionalData() {
        this.additionalData = this.rootStore.appStore.additionalPlans[this.system][this.service];
        if (this.additionalData?.plans) {
            const plans = [];
            Object.keys(this.additionalData.plans).forEach((key) => {
                plans.push({
                    count: key,
                    price: this.additionalData.plans[key]
                });
            })
            this.additionalData = {
                ...this.additionalData,
                plans: plans
            }
        }
    }

    async getComment () {
        try {
            const data = new FormData();
            data.append("system", this.system);
            data.append("service", this.service);
            const res = await axios.post("/review_list.php", data);


            if (res.status === 200) {
                console.log('comments', res.data)
                return res.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    };
}
