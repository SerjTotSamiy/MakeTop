import AppStore from "./app.store";
import {makeAutoObservable, toJS} from "mobx";

class LikesStore {
    rootStore
    likes

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.likes = rootStore.appStore.plans.Likes;
        makeAutoObservable(this, {}, { deep: true});
    }

    getLikes() {
        return toJS(this.rootStore.appStore.plans.Likes);
    }
}

export default LikesStore
