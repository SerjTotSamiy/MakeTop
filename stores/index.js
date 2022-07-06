import React from "react";
import AppStore from "./app.store";
import LikesStore from "./page.store";
import {makeAutoObservable} from "mobx";
import PageStore from "./page.store";
// import UserStore from "./user.store";
// import NoteStore from "./note.store";

// const RootStore = () => ({
//     appStore: AppStore,
//
//     // constructor() {
//     //     this.userStore = new UserStore(this)
//     //     this.noteStore = new NoteStore(this)
//     // }
// })

// const StoresContext = React.createContext(RootStore);
//
// // this will be the function available for the app to connect to the stores
// export const useStores = () => React.useContext(StoresContext);

class RootStore {
    constructor() {
        this.appStore = new AppStore(this)
        this.likesStore = new PageStore(this, 'instagram', 'Likes')
    }
}

const StoresContext = React.createContext(new RootStore());

// // this will be the function available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);
