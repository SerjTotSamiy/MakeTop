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
        // this.data.info = ["Free test are temporary unavailable"];
        // this.data.plans[0].types.t1.disabled = "1"
        // this.data.plans[0].types.t2.disabled = "1"
    }

    // changePrice(count) {
    //     if (this) console.log('data', this.data?.plans?.find(elem => elem.count = count));
    // }

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
                return res.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    };
}
