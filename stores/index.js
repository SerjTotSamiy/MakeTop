import React from "react";
import AppStore from "./app.store";
import PageStore from "./page.store";
import ModalStore from "./modal.store";

class RootStore {
    constructor() {
        this.appStore = new AppStore(this)
        this.modalStore = new ModalStore(this)
        this.likesStore = new PageStore(this,'instagram', 'Likes')
        this.followersStore = new PageStore(this,'instagram', 'Followers')
        this.autoLikesStore = new PageStore(this, 'instagram', 'Auto-Likes')
        this.autoLikesSubsStore = new PageStore(this, 'instagram', 'Auto-Likes Subs')
        this.viewsStore = new PageStore(this, 'instagram', 'Views')
        this.commentsStore = new PageStore(this, 'instagram', 'Comments')
        this.youTubeViewsStore = new PageStore(this, 'YouTube', 'Views')
        this.youTubeLikesStore = new PageStore(this, 'YouTube', 'Likes')
        this.youTubeCommentsStore = new PageStore(this, 'YouTube', 'Comments')
        this.tikTokFollowersStore = new PageStore(this, 'TikTok', 'Followers')
        this.tikTokLikesStore = new PageStore(this, 'TikTok', 'Likes')
        this.tikTokViewsStore = new PageStore(this, 'TikTok', 'Views')
        this.twitterFollowersStore = new PageStore(this, 'Twitter', 'Followers')
        this.twitterPostLikesStore = new PageStore(this, 'Twitter', 'Post Likes')
        this.facebookPageLikesStore = new PageStore(this, 'Facebook', 'Page Likes')
        this.facebookPostLikesStore = new PageStore(this, 'Facebook', 'Post Likes')
        this.spotifyFollowersStore = new PageStore(this, 'Spotify', 'Playlist Followers')
        this.vkGroupFollowersStore = new PageStore(this, 'Vk.com', 'Group followers')
        this.vkPostLikesStore = new PageStore(this, 'Vk.com', 'Post likes')
    }
}

const StoresContext = React.createContext(new RootStore());

// // this will be the function available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);
