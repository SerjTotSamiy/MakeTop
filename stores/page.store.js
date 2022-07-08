import {makeAutoObservable, toJS} from "mobx";
import axios from "axios";

export default class PageStore {
    data;
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
        console.log(this.service);
        this.data = this.rootStore.appStore.plans[this.service];
    }

    // setData(data) {
    //     this.data = data;
    // }

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
