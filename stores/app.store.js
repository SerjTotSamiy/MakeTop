import {makeAutoObservable} from "mobx";
import axios from "axios";

// const AppStore = makeAutoObservable({
//     plans: {},
//     user: {},
//     requestPlans: async () => {
//         try {
//             const res = await axios.post("/get_plans.php");
//
//             if (res.status === 200) {
//                 AppStore.plans = res.data.data.Instagram;
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     },
//     getLikes: () => AppStore.plans.Likes,
//     requestUser: async () => {
//         try {
//             const res = await axios.post("/user_info.php");
//             if (res.status === 200) {
//                 AppStore.user = res.data.data;
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     }
// })

class AppStore {
    plans = {};
    user = {};

    constructor() {
        makeAutoObservable(this);
    }

    async requestPlans () {
        try {
            const res = await axios.post("/get_plans.php");

            if (res.status === 200) {
                // console.log('res.data.data.Instagram is', res.data.data.Instagram)
                this.plans = {...res.data.data.Instagram};
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
}

export default AppStore
